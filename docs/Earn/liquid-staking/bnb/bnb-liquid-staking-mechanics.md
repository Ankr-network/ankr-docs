---
title: Staking Mechanics
id: bnb-liquid-staking-mechanics
---

# Staking Mechanics

BNB Liquid Staking lets the user stake their funds through the corresponding smart contracts on the Binance network, accumulate rewards for it, and receive their stake and rewards when unstaking.

It is well-described by its requirement, fees, rewards, validators, as well as smart contracts and workflow that shows the functions to call to interact with these smart contracts.


## Requirements

The minimum requirements when staking are:

* Minimum value to stake — 1 BNB.

* Maximum value to stake — unlimited, at the user’s discretion.

The minimum requirements when unstaking are:

* Minimum value to unstake — 1BNB.

* Maximum value to stake — up to the initial stake+accumulated rewards.

* Release time — 7 days.


## Fees

When staking, you pay the relayer fee — 0.02 BNB.

When unstaking, you pay nothing, while ANKR pays:

* Unbonding transaction fee (undelegate_fee) — 0.004 BNB.

* Cross-chain transaction fee (transfer_out_fee) — 0.000075 BNB.


## Rewards

Validators receive rewards every day, at midnight, UTC.

The APY is calculated from the validators' rewards.

To undestand BNB Liquid Staking, you need to know the entities and understand the workflow under the hood.

There are few entities involved:
* Smart contracts
* ANKR addresses
* ANKR validators


## Smart Contracts

[BinancePool](https://bscscan.com/address/0x66bea595aefd5a65799a920974b377ed20071118) — contract on Binance Smart Chain where the user sends their initial staking or unstaking request.

[aBNBb](https://bscscan.com/token/0xbb1aa6e59e5163d8722a122cd66eba614b59df0d) — contract on Binance Smart Chain that mints or burns aBNBb tokens for the user in 1:1 ratio with the staked amount.

[TokenHub](https://bscscan.com/address/0x0000000000000000000000000000000000001004) — contract on Binance Smart Chain that makes cross-chain transfers between Binance Smart Chain and Binance Chain.

[Intermediary address](https://explorer.binance.org/address/bnb1lyhlnk763duq48rmctftxlde6ax3htxkxnay3e)  — address of the BNB backend service on Binance Chain that:

* When staking, receives the staked funds from BinancePool to send to the validators. 

* When unstaking, receives the unstaked funds to later crosschain-send it to the operator address. 

[Operator address](https://bscscan.com/address/0x4069d8a3de3a72eca86ca5e0a4b94619085e7362) — address of the BNB backend service on Binance Smart Chain that:

* When unstaking, receives the unstaked funds+rewards to send to stakers.


## Validators

[ANKR validator on Binance](https://www.bnbchain.world/en/staking/validator/bva1xnudjls7x4p48qrk0j247htt7rl2k2dzp3mr3j) — ANKR node that secures network, creates blocks, and processes transactions during the validation period.


## Staking workflow

1. User sends a request to the `BinancePool::stake({value:stake+relayer_fee})` on Binance Smart Chain. `stake` specifies the staked amount and should meet the requirements described above, while `fee` specifies the fee deducted from the user’s wallet for the staking. 

2. `BinancePool` verifies the request checking the `minimal_stake_value` and the user-paid `relayer_fee`, then executes `TokenHub::transferOut()` to make a cross-chain transaction to Binance Chain, and then issues a `Staked()` event with the sender, stake, intermediary. 

3. BNB backend service detects the issued `Staked()` event and creates a record in its Postgres database, then waits for the successful cross-chain transaction completion to Binance Chain, which usually takes around 45s.

4. Upon transaction completion, the staked amount ends up at `intermediaryAddress` — the BNB backend service address on Binance Chain. Then the BNB backend service executes `sendDelegation(validatorAddress, stake)` on Binance Chain to send the stake to `validatorAddress`of one of the validators from the ANKR set.

## Unstaking workflow

1. User sends a request to the `BinancePool::unstake(amount)` on Binance Smart Chain. `amount` specifies the amount to be released back to the user.

2. BinancePool verifies the request checking the `minimal_stake_value` and `balance_of_user`, then executes `aBNBb::burn()` to burn the bond tokens that are equivalent to the initial stake+accumulated reward. Then `BinancePool` issues an `UnstakePending()` event with the staker and amount parameters. 

3. BNB backend service detects the `UnstakePending()` event and creates a record in Postgres database, then starts to check the database for new `Unstake` requests every day at 00:00. If it finds a new `Unstake` request, it executes `sideChainUnbond(bsc, validatorAddress, totalPendingAmount)` on the Binance Chain where `totalPendingAmount` specifies the aggregate pending amount to unstake for different users and `validatorAddress` specifies the address of one of the validators from the ANKR set to get `totalPendingAmount` from. 

4. After the `UnbondTime`, `intermediaryAddress` receives `undelegated(unbonded)` funds. Then the BNB backend service makes a cross-chain transaction to `operatorAddress` on Binance Smart Chain.

5. Upon the cross-transaction completion, the unstaked amount ends up at `operatorAddress`. Then the BNB backend service executes `BinancePool::distributeRewards({value: totalPendingAmount})` on Binance Smart Chain to distribute stakes and rewards to the users.

## Additional information

Additional details
To get more information about staking on Binance, read [Staking](https://docs.binance.org/smart-chain/validator/Parameters.html), [Delegating](https://docs.binance.org/faq/bsc/del.html), and [Binance cross-chain transfer](https://docs.binance.org/smart-chain/developer/cross-chain-transfer.html).

To get more information about unstaking on Binance, read [Unbond](https://docs.binance.org/faq/bsc/del.html#when-can-i-receive-my-undelegated-bnb) and [Binance cross-chain transfer](https://docs.binance.org/smart-chain/developer/cross-chain-transfer.html).