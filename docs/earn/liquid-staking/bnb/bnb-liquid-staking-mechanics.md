---
title: Staking Mechanics
id: staking-mechanics
---

# Staking mechanics

BNB Liquid Staking lets the user stake their funds through the corresponding smart contracts on the Binance network, accumulate rewards, and receive their stake and rewards when unstaking.

The following section explains staking requirements, fees, rewards, validators, smart contracts and function calls to interact with these smart contracts.


## Requirements

The requirements when staking are:

* Minimum value to stake — 1.002 BNB (the 0.002 part is the relayer fee added on top of 1 BNB).

* Maximum value to stake — unlimited, at the user’s discretion.

The requirements when unstaking are:

* Minimum value to unstake — 1 BNB.

* Maximum value to unstake — up to the initial stake+accumulated rewards for aBNBb; up to the initial stake for aBNBc.

* Release time — 7-15 days.


## Fees

When staking, the user pays the relayer fee — 0.002 BNB, which is a fee for transferring assets between BSC (prev. Binance Chain) and BNB Beacon Chain (prev. Binance Chain).

When unstaking, the user pays nothing, while Ankr pays:

* Unbonding transaction fee (undelegate_fee) — 0.004 BNB.

* Cross-chain transaction fee (transfer_out_fee) — 0.000075 BNB.

* Ankr validator takes 2% fee from the user's rewards; BNB48 Club validator takes 0.48% fee from the user's rewards.

The user must also count in the gas price for outgoing transactions.


## Rewards

Validators receive rewards every day, at midnight, UTC.

The APY is calculated from the validators' rewards. 

The rewards the user gets are calculated using the exchange ratio explained later in this document.

To understand BNB Liquid Staking, you need to know the entities and understand the workflow under the hood.

The following entities are involved:
* Smart contracts
* Ankr addresses
* Ankr validators


## Smart contracts and addresses

[BinancePool Implementation](https://bscscan.com/address/0x173645c3E0ed39d127A6861c7fDF4c7E5Fb94355) and [BinancePool Proxy](https://bscscan.com/address/0x66bea595aefd5a65799a920974b377ed20071118) — contracts on Binance Smart Chain where the user sends their initial staking or unstaking request.

[aBNBb Implementation](https://bscscan.com/address/0xf1e6e6247aaaf7e32850003c8e32d955e95b57a7) and [aBNBb Proxy](https://bscscan.com/address/0xBb1Aa6e59E5163D8722a122cd66EBA614b59df0d) — contract on Binance Smart Chain that mints or burns aBNBb tokens for the user in 1:1 rate with the staked amount. All interactions go through the Proxy part.

[aBNBc Implementation](https://bscscan.com/address/0xd08ca0fad83e83455e6db550dc5988e17be083bc) and [aBNBc Proxy](https://bscscan.com/address/0xE85aFCcDaFBE7F2B096f268e31ccE3da8dA2990A) — contract on Binance Smart Chain that mints or burns aBNBc tokens for the user. All interactions go through the Proxy part.

[TokenHub](https://bscscan.com/address/0x0000000000000000000000000000000000001004) — contract on Binance Smart Chain that makes cross-chain transfers between Binance Smart Chain and Binance Chain.

[Intermediary address](https://explorer.binance.org/address/bnb1lyhlnk763duq48rmctftxlde6ax3htxkxnay3e)  — address of the BNB backend service on Binance Chain that:

* When staking, receives the staked funds from BinancePool to send to the validators. 

* When unstaking, receives the unstaked funds to later crosschain-send it to the operator address. 

[Operator address](https://bscscan.com/address/0x4069d8a3de3a72eca86ca5e0a4b94619085e7362) — address of the BNB backend service on Binance Smart Chain that:

* When unstaking, receives the unstaked funds+rewards to send to stakers.


## Validators

[Ankr validator on Binance](https://www.bnbchain.world/en/staking/validator/bva1xnudjls7x4p48qrk0j247htt7rl2k2dzp3mr3j) — Ankr validator node that secures network, creates blocks, and processes transactions during the validation period.

[BNB48 Club validator on Binance](https://www.bnbchain.world/en/staking/validator/bva1ygrhjdjfyn2ffh5ha5llf5g6l3wxjt29hz9q4s) — BNB48 Club validator node that secures network, creates blocks, and processes transactions during the validation period.

## Staking workflow

1. User sends a request to the `BinancePool::stake({value:stake+relayer_fee})` on Binance Smart Chain. `stake` specifies the staked amount and should meet the requirements described above, while `fee` specifies the fee deducted from the user’s wallet for the staking. 

2. `BinancePool` verifies the request checking the `minimal_stake_value` and the user-paid `relayer_fee`, executes `TokenHub::transferOut()` to make a cross-chain transaction to Binance Chain, mints either aBNBb to the user 1:1 to the staked BNB or aBNBc in the amount defined by the current exchange ratio, and then issues a `Staked()` event with the `sender`, `stake`, `intermediary` parameters. 
   1. Actual minting is internal and is done via a call from `BinancePool` to `aBNBb::mint(userAddress, stake)`/`aBNBc::mint()`.

3. BNB backend service detects the issued `Staked()` event and creates a record in its Postgres database, then waits for the successful cross-chain transaction completion to Binance Chain, which usually takes around 45s.

4. Upon transaction completion, the staked amount ends up at `intermediaryAddress` — the BNB backend service address on Binance Chain. Then the BNB backend service executes `sendDelegation(validatorAddress, stake)` on Binance Chain to send the stake to `validatorAddress`of one of the validators from the Ankr set.

## Exchange ratio 

When staking, the user receives:
* aBNBb 1:1 to the staked amount.
* aBNBc in the amount calculated the following way: `user's_stake * exchange_ratio`.

When unstaking, the user receives `their_stake + accumulated_rewards` in BNB. 
It is calculated by the following formula: `accumulated_amount_of_aBNBb_or_aBNBc / exchange ratio`. 

The exchange ratio is calculated by the following formula: 

```
uint256 totalShares = totalSharesSupply(); == aBNBc.totalSupply();
uint256 denominator = _totalStaked + totalRewards - _totalUnbondedBonds;
_ratio = (totalShares * 1e18) / denominator;
```

## Unstaking workflow

Unstaking aBNBc adds an additional approval step — Step 1. Unstaking aBNBb workflow starts from Step 2. 

1. For aBNBc only, the user sends a request to the `aBNBc::approve(aBNBb.address, amount)` to let the `aBNBb` smart contract transfer the user's Liquid tokens.  

2. User sends a request to the `BinancePool::unstake(amount)` on Binance Smart Chain. `amount` specifies the amount to be released back to the user.

3. BinancePool verifies the request checking the `minimal_stake_value` and `balance_of_user`, then executes `aBNBb::burn()` to burn the bond tokens that are equivalent to the initial stake+accumulated reward. Then `BinancePool` issues an `UnstakePending()` event with the staker and amount parameters. 

4. BNB backend service detects the `UnstakePending()` event and creates a record in Postgres database, then starts to check the database for new `Unstake` requests every day at 00:00. If it finds a new `Unstake` request, it executes `sideChainUnbond(bsc, validatorAddress, totalPendingAmount)` on the Binance Chain where `totalPendingAmount` specifies the aggregate pending amount to unstake for different users and `validatorAddress` specifies the address of one of the validators from the Ankr set to get `totalPendingAmount` from. 

5. After the `UnbondTime`, `intermediaryAddress` receives `undelegated(unbonded)` funds. Then the BNB backend service makes a cross-chain transaction to `operatorAddress` on Binance Smart Chain.

6. Upon the cross-transaction completion, the unstaked amount ends up at `operatorAddress`. Then the BNB backend service executes `BinancePool::distributeRewards({value: totalPendingAmount})` on Binance Smart Chain to distribute stakes and rewards to the users.

## Additional information

Additional details
To get more information about staking on Binance, read [Staking](https://docs.binance.org/smart-chain/validator/Parameters.html), [Delegating](https://docs.binance.org/faq/bsc/del.html), and [Binance cross-chain transfer](https://docs.binance.org/smart-chain/developer/cross-chain-transfer.html).

To get more information about unstaking on Binance, read [Unbond](https://docs.binance.org/faq/bsc/del.html#when-can-i-receive-my-undelegated-bnb) and [Binance cross-chain transfer](https://docs.binance.org/smart-chain/developer/cross-chain-transfer.html).