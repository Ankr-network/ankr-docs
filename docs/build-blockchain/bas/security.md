---
title: Blockchain Security
id: blockchain-security
---

# Blockchain Security

Security of the BAS is based on the original template that used.
In the current implementation BAS security model is based on the BSC source code.
Everybody knows that BSC uses BNB Chain with Cosmos SDK under the hood and relays on its security model.
In this article we're going to cover several security topics.

## On-chain security

BAS running EVM from the official Go-Ethereum codebase.
It's a well-tested product that is used by entire blockchain community and was audited for thousands of times.
In the BAS we don't relay on some third party services that can manage staking and governance for the BAS chain.
Instead of this we implemented all staking and governance specific logic right in the smart contract.
It means that all staking, governance and rewards distribution are fully managed and verified by the EVM runtime environment.

To proof absence of the vulnerabilities and bugs in the code we're passing several auditions and going to post audition reports for the BAS soon.

### Staking

We want to be the BAS as decentralized as it is possible, that is why we have validators in the network that produces blocks and verifies blocks from other validators.
If validator under-performing then it gains less staking rewards and as a fact users won't vote for such validators.
Validators must optimize its environment to get bigger rewards and less commission rate to motive users to elect this validator.
If validator does block misses then it can be punished or even slashed and jailed for 1 week for bad performance.

We have next motivations for the validators in the network:
+ Well-configured network allows to get more transactions in the pool and as a result it increases APY
+ Higher CPU makes possible to produce more transactions in the blocks
+ Each missed block cause reward miss for this block and these transactions go to the next validator
+ Recurring block misses can cause punishment and loss of rewards for 1 epoch (usually 1 day)
+ Under-perform validators go to jail for 1 week and loose 1/4 of monthly rewards
+ Not valid or malicious blocks are rejected from honest validators that also cause reward misses

### Governance

By voting for the honest validators in the next users also distribute voting power between validators in the on-chain governance.
On-chain governance helps to solve some consensus questions, like runtime upgrade, increasing validator set or adjusting blockchain parameters.
Only by reaching the quorum in the governance proposal can be applied.

Here is the list of available proposals:
+ Add or remove validator to the validator set
+ Manage blockchain parameters:
  + Active validators length
  + Epoch block interval
  + Misdemeanor threshold
  + Felony threshold
  + Validator jail epoch length
  + Undelegate period
  + Min validator stake amount
  + Min stake amount
+ Upgrade existing runtime or deploy new system smart contracts

## Off-chain security

To bring off-chain security we're working on the L2 solutions that going to post state proofs in the BSC's original chain.
Also, native asset bridge is under development that also will bring block header verification function to proof correctness of validator transition between different epochs.

Once BSC teams introduce fast-finality for the Parlia consensus engine it'll be also merged into BAS to bring fast finalization for the produced blocks.