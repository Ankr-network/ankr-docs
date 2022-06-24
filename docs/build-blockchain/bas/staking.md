---
title: Staking
id: staking
---

# Staking

BNB Sidechain supports on-chain staking system and uses the PoSA (proof-of-stake-of-authority) staking model.
It allows users to delegate their tokens to the specific validator and share validator's rewards based on the total staked amount.

## Roles 

Staking roles are:
* Validator — a node that produces new blocks and validates existing blocks. 
* Delegator — a user who participates in validator election.

## Validator

Validator is a node that runs the validator node software, in a special validator mode. This mode allows the node to connect to bootnodes and produce new blocks.
Once a block is produced by a validator, it propagates it though the network, using bootnodes, to other validators. Other validators must verify and set this block.
Today the Parlia consensus engine doesn't support fast-finality, this feature is still under development, that is why to prove the correctness of the produced block, the user must verify 2/3*N+1 blocks.

To become a validator, the user must fit these requirements:
* Have their own, fully synchronized, node running in the full-sync mode, with unlocked validator private key (`--unlock=` param).
* Register their validator address in the staking smart contract via the `registerValidator(address validatorAddress, uint16 commissionRate)` function. Registering, the user must specify the validator's address and commission rate.
* Ask one of existing validator owners to propose the user to become a validator.
* Wait until 2/3 of the validators support the candidate.

## Slashing

If a validator doesn't produce blocks, it can be slashed.
One slashing is equal to one missed block in the blockchain.

If a validator misses a block, another validator can slash them. They don't receive rewards for the missed block.

If a validator misses blocks for `misdemeanorThreshold` times, such validator losses rewards for entire epoch. The default value of `misdemeanorThreshold` is 50.

If validator misses blocks for `felonyThreshold` times, such validator goes to jail and is not able to produce rewards for `validatorJailEpochLength` epochs (usually its around 1 week). The default value of `felonyThreshold` is 150.

As a result, a jailed validator loses all their rewards for 1 week or 25% of monthly rewards.

Once `validatorJailEpochLength` has ended for a jailed validator and they have been released from jail, they can start to produce new blocks.
Release from jail is a very important mechanism that allows us to avoid problems with corrupted or underperforming validators that can't produce new blocks at all.
In essence, it's just a confirmation from the validator's owner that the validator has recovered and is ready to continue working.
To be released from jail, the validator's owner must invoke the function `releaseValidatorFromJail(address validatorAddress)` and will be able to continue block producing when the next epoch starts.

## Blocks & epochs

When a delegator votes for a validator, they modify the total delegated amount. Effectively, they also modify the share distribution between all delegators.
It makes share computation very complicated and requires dynamic recalculation of shares for each reward distribution. This may make the entire rewards distribution process very expensive.
Since we're running the staking and reward distribution models fully on-chain, we want all computations to be optimized for the smart contracts.
To reach this, we split the staking process into epochs.

An **epoch** is an interval with N blocks inside.
Theoretically, an epoch length can be equal to just one block. However, it can significantly increase storage size and bring no benefit.
To solve this potential problem, we're looking for the most optimal epoch length.

Epoch length should be optimal, as using a non-optimal length can raise the cost of reward-claiming transactions. 
On the other hand, it optimizes on-chain computations.
In essence, we ask delegators to compute their rewards for each epoch when they want to claim them.
That's why finding an optimal epoch length is very important for both validators and delegators.
We suggest the epoch size of 1 day. This number is optimal for both sides and does not bring any significant overhead of storage and gas consumption.
1 day epoch allows to spend only 1.7 million gas units a year per single user. Since block size is around 80 million gas units, a delegator has ~40-50 years to claim their rewards before those can become unclaimable.
Different blockchains solve this problem in different ways. Some of them just burn all unclaimed rewards if the user doesn't claim those for a long enough time (usually 1-2 weeks).

Since we don't want to burn rewards and don't want our clients to pay a lot of gas for the reward-claiming transactions, we introduce an optimized version of staking called `StakingPool`.
Staking pool allows to use a different staking model where instead of delegating tokens to a validator, the user buys a share of the pool and validator rewards are distributed between delegators based on their share.
As all users use the same pool, on average the cost of reward-claiming transactions is shared by all delegators in the pool.

The key difference between these two models is that staking pool computations are not super "clean", i.e. they can cause dust in staking due to the rounding of numbers.
Also, staking pools are not optimized for big staking amounts. So, for big staking amounts, we use direct staking, while for small — a staking pool.

## Reward distribution

### Validator's rewards
Validator can get rewards by executing transactions.
Each transaction has execution cost and 15/16 of this cost goes to the validator, but 1/16 of the reward goes to the system treasury that can use these funds for the system needs, such as bridging cost coverage.
Not all block rewards go to the validator's owner. A share of them is also distributed between delegators.

When the validator's owner creates a new validator, the commission rate must be specified.
The commission rate defines what percentage of the block reward go to the validator owner.
The rate is encoded as `uint16` and the percentage is encoded as `N%*100`. For example, `0.01%*100=1` and `99%*100=9900`.
It also means the commission rate must be in range from `0%` to `99.99%`. However, in reality, its limited to `0%` up to `30%` to restrict validators from setting very high commission rates.

### Delegator's rewards
Delegators rewards are calculated based on their total staked amount at the validator.

The universal formula for delegator's reward distribution is `=rewardsPerBlock*myDelegatedAmount/totalDelegated`.

The reward is calculated per one validator. The total rewards for a delegator, if staked at different validators, is the sum or per-validator rewards.