---
title: FTM Liquid Staking Mechanics
id: ftm-liquid-staking-mechanics
---

# Staking Mechanics

FTM Liquid Staking lets the user stake their funds through the corresponding smart contracts on the Fantom network, accumulate rewards for it, and receive their stake and rewards when unstaking.

It is well-described by its requirement, fees, rewards, validators, as well as smart contracts and workflow that shows the functions to call to interact with these smart contracts.


## Requirements

The requirements when staking are:

* Minimum value to stake (minimumStake) — 1 FTM.

* Maximum value to stake — unlimited, at the user’s discretion. 

The requirements when unstaking are:

* Minimum value to unstake — from 0 FTM.

* Maximum value to unstake — staked amount + % of the reward, up to the user’s balance.

* Release time — up to 35 days.


## Fees
When staking, the user pays no fees.

Unstaknig applies a burnFee that depends on the current liquidity and amount to unstake, and is calculated by the FantomPool smart contract. The fee is deducted from the withdrawn amount.

The user must also count in the cost for outgoing transactions.


## Rewards
Validators receive rewards on the regular basis. The exact time is to be updated soon.

The APY is calculated from the validators' rewards.


## Validators
The validator set consists of one [Fantom](https://explorer.fantom.network/validator/0xd160d9b59508e4636eec3e0a7f734268d1ce1047), one [MCLB-DAO](https://explorer.fantom.network/validator/0x63c87103063a146d75788780f2b026a01c03046b), and one [ANKR](https://explorer.fantom.network/validator/0x146ee71e057e6b10efb93aedf631fde6cbaed5e2) validator.


## Smart contracts
Smart contracts and addresses involved in ANKR Liquid Staking are:

[FantomPool](https://ftmscan.com/address/0x84db6eE82b7Cf3b47E8F19270abdE5718B936670) — contract on Fantom Chain where the user sends their initial staking or unstaking request.

[aFTMb](https://ftmscan.com/address/0xB42bF10ab9Df82f9a47B86dd76EEE4bA848d0Fa2) — contract on Fantom Chain that mints or burns aBNBb tokens for the user in 1:1 ratio with the staked amount.

[Operator address](https://ftmscan.com/address/0x4069d8a3de3a72eca86ca5e0a4b94619085e7362) — address of the ANKR backend on Fantom Chain that:


## Staking workflow
The workflow is both user- and ANKR-driven. The user part is Step, while the ANKR part is Step 2 through 3.

User calls the function `FantomPool::stake()` payable on the Fantom network. The function is payable, so the user needs to specify the amount to stake. The amount must meet the `minimumStake` requirement, which is returned by the function `FantomPool::getMinimumStake() public view returns (uint256)`. 

If the transaction is successful, aFTMbs are automatically minted to the user’s address. Also event `FantomPool::StakeReceived(stakerAddressIndexed, amountMinted)` is emitted. The event can later be found using the `stakerAddressIndexed` parameter. The minted aFTMB parameter is of the uint256 type.

User can later look up their aFTMb balance in the `aFTMb` contract. 

Then the ANKR backend sends the staked funds to the `FantomStub` contract and delegates the funds to a validator from the validator set to gain rewards. The validator set consists of one [Fantom](https://explorer.fantom.network/validator/0xd160d9b59508e4636eec3e0a7f734268d1ce1047), one [MCLB-DAO](https://explorer.fantom.network/validator/0x63c87103063a146d75788780f2b026a01c03046b), and one [ANKR](https://explorer.fantom.network/validator/0x146ee71e057e6b10efb93aedf631fde6cbaed5e2) validator.

Currently, the ANKR backend does not monitor events on the blockchain, but instead uses cron for scheduled checks: once an hour for funds, delegating, updating ratio, etc.

## Unstaking worklfow
The workflow is both user- and ANKR-driven. The user part is Step, while the ANKR part is Step 2 through 3.

User calls `aFTMb::function burn(uint256 amount)`. 

If the transaction is successful, aFTMbs are automatically burned and removed from the user’s address. An event `TokensBurned(address indexed account, uint256 amount, uint256 shares, uint256 burnFee, uint256 indexed wrId)` is emitted, and the user receives `amount - burnFee` FTMs within the period of up to 35 days. 
The fee depends on unstaked amount and can be shown to the user via `getBurnFee(uint256 amount) external view returns (uint256)`, which changes from time to time based on the current available liquidity. 

Then a struct `WithdrawalRequest {address payable staker; uint256 amount;}`  is saved to the `FantomPool` contract.  Within up to 35 days the ANKR backend calls `withdrawLast()` to send the staked funds back to the user, and an event `Withdrawn(address indexed staker, uint256 amount, uint256 indexed wrId)` is emitted.