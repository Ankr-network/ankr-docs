---
title: Staking
id: staking
---

# Staking

BAS support on-chain staking system and implements PoSA (proof-of-stake-of-authority) staking model.
It allows users to delegate their tokens to the specific validator and share validator's rewards based on the total staked amount.

For the staking we define next roles:
+ Validator - node that produces new blocks and validates existing blocks 
+ Delegator - user who participate in validator elections

## Validator

Validator is a node that runs validator node in a special validator-mode. This mode allows node to connect to the bootnodes and produce new blocks.
Once block is produced by validator it propagates it though the network using bootnodes to other validators and other validators must verify and set this block.
Today Parlia consensus engine doesn't support fast-finality (its under development), that is why to proof the correctness of the produced block you must verify 2/3*N+1 blocks.

To become a validator you must fit next requirements:
+ Have own fully synchronized mode running in full-sync mode and with unlocked validator private key
+ Register validator address in the staking smart contract using `registerValidator(address validatorAddress, uint16 commissionRate)` function (here you must specify validator's address, commission rate)
+ Ask one of existing validator owners to propose you to become a validator
+ Wait until 2/3 of validators support your candidate

## Slashing

If validator doesn't produce blocks then it can be slashed.
One slashing is equal to one missed block in the blockchain.
If you miss the block then other validator can slash you, and you won't gain rewards for the missed block.
If validator misses blocks for `misdemeanorThreshold` (default value is 50) times then such validator losses rewards for entire epoch.
If validator misses blocks for `felonyThreshold` (default value 150) times then such validator goes to jail and is not able to produce rewards for `validatorJailEpochLength` epochs (usually its around 1 week).
As a result jailed validator losses all his rewards for 1 week or 25% of monthly rewards.

Once `validatorJailEpochLength` is ended for jailed validator then such validator can start to produce new blocks, but only after getting released from the jail.
Release from the jail is a very important thing that allows to avoid problems with fully corrupted or under-performing validators that can't produce new blocks at all.
In essence, it's just a confirmation from validator's owner that validator is recovered and is ready to continue the work.
To be release from the jail validator's owner must invoke the function `releaseValidatorFromJail(address validatorAddress)` and since next epoch validator will be able to continue block producing.

## Blocks & epochs

When delegator vote for the validator then it modifies total delegated amount and as fact it also modifies share distribution between all delegators.
It makes share computation very complicated and require to dynamically recalculate shares for each reward distribution that might make entire rewards distribution very expensive.
Since we're running fully on-chain staking and reward distribution models then we want all computations to be optimized for the smart contracts.
To reach this we split staking process into epochs.

Epoch is an interval of blocks that contains N blocks inside.
Theoretically epoch size can be equal to the one block, but it can significantly increase storage size by bringing nothing instead.
To solve this we're looking for the most optimal epoch length.

Epoch length should be optimal because using model with epochs gains overhead of the claiming rewards, but on another hand it optimizes on-chain computations.
In essence, we ask delegators to compute their rewards for each epoch when they want to claim it.
This is why finding a balance between epoch size is such important for validators and delegators.
We suggest to use 1 day epoch size because it's optimal for both sides and does not bring significant overhead on the storage and gas consumption.
1 day epoch allows to spend only 1.7million gas per year per one single user. Since block size is around 80million gas then delegator has ~40-50 years to claim his rewards before they can become unclaimable.
Different blockchains solve this problem in different ways, some of them just burn all unclaimed rewards if user don't claim it for a long time (usually 1-2 weeks).

Since we don't want to burn rewards and also don't want our clients to pay a lot of gas for the reward claim transactions we introduce optimized version of staking called `StakingPool`.
Staking pool allows to use quite different staking model where instead of delegating tokens to the validator you buy a share of the pool and validator rewards are distributed between delegates based on their share.
Since all users use the same pool then reward claim transaction is distributed between all delegators in the pool.

The key difference between these two models is that staking pool computations are not super "clean", it means that it can cause appearance of the dust in the staking due to rounding problem.
Also staking pools doesn't work optimally for the big staking amounts. Our formula is for the big staking amounts use direct staking and for small use staking pool.

## Reward distribution

Validator can get rewards by executing transactions.
Each transaction has execution cost and 15/16 of this cost goes to the validator, but 1/16 of the reward goes to the system treasury that can use these funds for the system needs like bridge cost coverage.
But not all block rewards goes to the validator owner, but it also distributes between all delegators.

When validator owner creates new validator commission rate must be specified.
Commission rate defines what percentage of the block rewards goes to the validator owner.
Commission rate encodes as `uint16` value and encodes percentage as `N%*100`, for example `0.01%*100=1` and `99%*100=9900`.
It also should mean that commission rate must be in range of `0%` and `99.99%`, but in fact its limited between `0%` and `30%` to disallow validators to set very high commission rate.

Delegators rewards are calculated based on their total staked amount to the validator.
Universal formula for the delegator's reward distribution should be following: `=rewardsPerBlock*myDelegatedAmount/totalDelegated`.
Of-course it's calculated per one validator and if delegator stake tokens to different validators then you should calculate sum of it.