---
title: Glossary
id: glossary
---

### BNB Sidechain
Framework for creating sidechains in the BNB Smart Chain ecosystem. 

### BNB Sidechain Modules
Configurable and programmable modules that extend the base BNB Sidechain functionality that is obtained applying the BNB Sidechain template. Internally, BNB Sidechain implements the following modules: Parlia consensus engine, staking pools, governance, dynamic runtime upgrades, reward management, manageable blockchain params, EVM hooks, deployment proxy. 
Template
A ready-made blockchain solution that is already integrated into the BNB Smart Chain infrastructure. A template defines the primary structure and configuration of the blockchain, using special templates. With the BNB Smart Chain integration, developers automatically get access to such useful products as a ready-made staking system, block explorer, SDK, API gateways, interfaces for governance, etc. 

Right now, we offer a single BNB Smart Chain-based template. In the future, the list of templates will be extended.

### BNB Sidechain Validator Hub
A smart contract that adds to cross-chain functionality to the BNB Sidechain applications. It registers the BNB Sidechain application in the BNB Smart Chain smart contract.

See this code example for technical details:
```
interface BASValidatorHub {
  function registerBAS(string projectName, address[] initialValidatorSet, IBlockHeaderVerificationFunction bhvf) external;
```

### Block Header Verification (BHVF)
A Solidity function that verifies block headers from BNB Sidechain applications, thus ensuring the validators are not compromised. Also, BHVF is responsible for verifying transaction receipt from blockchain that allows to prove the correctness of cross-chain transfer from BNB Sidechain to BNB Smart Chain.

### BLS Cryptography
Boneh–Lynn–Shacham cryptography for signature verification and more. For more detail, refer to [CryptoWiki](https://cryptography.fandom.com/wiki/BLS_(cryptography)).

### BNB Smart Chain
BNB Smart Chain, formerly known as BSC. The Binance chain with smart contracts support. 

### BNB Smart Chain Infrastructure
BNB Smart Chain brings with it a ready-made staking system, block explorer, SDK, API gateways, interfaces for governance, etc. All that is easily accessible to BNB Sidechain developers, as creating a BNB Sidechain they apply a BNB Sidechain template that includes integration with this infrastructure.

### EVM
A powerful, sandboxed virtual stack embedded within each full Ethereum node, responsible for executing contract bytecode. It controls smart contract deployment and execution.

### Governance
On-chain governance in each BNB Sidechain to let users vote for the new proposal on the chain. 
Voting power is distributed based on the total delegated amount to the validator. 
Once ⅔ of the quorum is reached and >51% of votes are for the proposal, it can be executed by anyone on the chain. 
Governance is able to manage staking parameters, such as felony threshold or jail period.

### Native Asset Bridge
A cross-chain bridge that is embedded to BNB Sidechain as a system smart contract. 
It supports deposits (BNB Sidechain -> BNB Smart Chain) and withdrawals (BNB Smart Chain -> BNB Sidechain).

### Parlia Consensus Engine
A Proof-of-Staked Authority (PoSA) consensus algorithm for BNB Smart Chain. 
It incorporates elements from both Proof-of-Stake and Proof-of-Authority. Parlia is similar to [Clique](https://ethereum-magicians.org/t/eip-225-clique-proof-of-authority-consensus-protocol/1853).
For more detail, read about Parlia on [Binance docs](https://docs.binance.org/smart-chain/guides/concepts/consensus.html#consensus-protocol).

### System Smart Contracts
A predefined set of system smart contracts that a BNB Sidechain provides for platform operation. 

Predefined BNB Smart Chain-compatible system smart contracts:

* Staking (`0x0000000000000000000000000000000000001000`) — for managing validator delegations and active validator set.
* SlashingIndicator (`0x0000000000000000000000000000000000001001`) - for slashing not active validators.
* SystemReward (`0x0000000000000000000000000000000000001002`) — treasury for the system rewards to cover relay fees and others.

BNB Sidechain-defined smart contracts:
* StakingPool (`0x0000000000000000000000000000000000007001`) — staking pool that provides cheaper access to the staking contract.
* Governance (`0x0000000000000000000000000000000000007002`) — default on-chain implementation by Compound’s Alpha governance.
* ChainConfig (`0x0000000000000000000000000000000000007003`) — configuration for the consensus that is managed by on-chain governance.
* RuntimeUpgrade (`0x0000000000000000000000000000000000007004`) — allows to upgrade system contract runtime.
* DeployerProxy (`0x0000000000000000000000000000000000007005`) — proxy for managing deployers of the smart contracts.