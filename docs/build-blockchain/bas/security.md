---
title: Blockchain Security
id: blockchain-security
---

# Blockchain security

Security of BAS is based on the default template applied when creating a BAS instance.
In the current implementation, the BAS security model is based on the BSC source code.
BSC uses BNB Chain with Cosmos SDK under the hood and relies on its security model.

Here are the key security points.

## On-chain security

BAS runs EVM from the official Go-Ethereum codebase.
It's a well-tested product that is used by the entire blockchain community and was audited for thousands of times.
In BAS, we don't rely on some third party services that can manage staking and governance for the BAS chain.
Instead, we implemented all staking- and governance-specific logic right in the smart contract.
It means that staking, governance, and rewards distribution are fully managed and verified by the EVM runtime environment.

To proof the absence of vulnerabilities and bugs in the code, we're passing several auditions and going to publish reports for BAS soon.

### Staking

We want BAS to be as decentralized as possible, so we have validators in the network that produce blocks and verify blocks of other validators.
If a validator is underperforming, it gains less staking rewards and users are less incentivized to vote for such validator.
Validators must optimize their environment to get bigger rewards and less commission rate to incentivize users to elect them.
If a validator misses a block, it can be punished or even slashed and jailed for 1 week for bad performance.

We have the next incentives for validators in the BAS network:
* Well-configured network allows to get more transactions in the pool and, as a result, increases APY.
* Better CPU makes it possible to include more transactions in blocks.
* Each missed block causes a reward miss, and transactions in it go to the next validator.
* Recurring block misses can lead to the validator to be punished and losing rewards for 1 epoch, which is usually 1 day.
* Underperforming validators go to jail for 1 week and lose 1/4 of their monthly rewards.
* Non-valid or malicious blocks are rejected by honest validators, which also causes bad valitators to miss reward.

### Governance

By voting for honest validators, users also distribute the voting power between validators in the on-chain governance.
On-chain governance helps solve some consensus questions, such as runtime upgrades, increasing the validator set or adjusting blockchain parameters.
Only after reaching the quorum a governance proposal can be applied.

#### Available proposals 

Here is the list of available proposals:
* Add or remove a validator from the validator set
* Manage blockchain parameters:
  * Number of active validators 
  * Epoch block interval
  * Misdemeanor threshold
  * Felony threshold
  * Validator jail epoch duration
  * Undelegate period during which no claiming funds is available
  * Minimum validator stake amount
  * Minimum stake amount
* Upgrade existing runtime or deploy new system smart contracts

## Off-chain security

To bring the off-chain security, we're working on L2 solutions that are going to post state proofs in the BSC's original chain.
Also, the native asset bridge that we're developing will bring the block header verification function to proof if validator transition between different epochs is correct.

Once BSC teams introduce fast-finality to the Parlia consensus engine, it'll be also merged into BAS to bring fast finalization of the produced blocks.