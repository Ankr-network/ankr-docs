---
title: System Smart Contracts
id: sys-smart-contracts
---

Each BAS sidechain is technology-agnostic, meaning that it’s able to include or modify any module inside BAS and bring any consensus or runtime execution environment. By default, BAS provides an EVM execution environment with a predefined set of system smart contracts for platform operation. If BAS developers want to bring more functionality to their sidechain then they should implement it on their own or contribute it to the BAS official template to extend the default module set with additional extensions that can be used by other developers in the future.

Predefined BSC-compatible system smart contracts:

* Staking (`0x0000000000000000000000000000000000001000`) — for managing validator delegations and active validator set.
* SlashingIndicator (`0x0000000000000000000000000000000000001001`) - for slashing not active validators.
* SystemReward (`0x0000000000000000000000000000000000001002`) — treasury for the system rewards to cover relay fees and others.

BAS-defined smart contracts:
* StakingPool (`0x0000000000000000000000000000000000007001`) — staking pool that provides cheaper access to the staking contract.
* Governance (`0x0000000000000000000000000000000000007002`) — default on-chain implementation by Compound’s Alpha governance.
* ChainConfig (`0x0000000000000000000000000000000000007003`) — configuration for the consensus that is managed by on-chain governance.
* RuntimeUpgrade (`0x0000000000000000000000000000000000007004`) — allows to upgrade system contract runtime.
* DeployerProxy (`0x0000000000000000000000000000000000007005`) — proxy for managing deployers of the smart contracts.

Using the Parlia consensus engine motivates users to stake their funds and vote for the honest validators, which makes BAS sidechain much more decentralized and trustless. It also helps stakers to gain rewards from their stakes by receiving fees from block producers.

To be able to interact with Parlia consensus engine, BAS must support staking contract that is compatible with next interface:

```
interface IValidatorSet {
  function init() external;
  function getValidators() external view returns (address[] memory);
  function deposit(address validator) external payable;   
  receive() external payable;
}
interface ISlashingIndicator {
  function init() external;
  function slash(address validator) external;
}
interface ISystemReward {
  function init() external;
  receive() external payable;
}
```

BAS provides default implementation and financial model for staking and it is embedded to the genesis block as system smart contract, but BAS developers can choose another model based on their business requirements.


## Staking smart contract

The default implementation of BAS will contain staking smart contracts on Solidity for the EVM execution environment. This smart contract is an extension over IValdiatorSet and allows users to manage active validators based on the total delegated amount and distribute rewards between stakeholders. It's not strictly required to have EVM implementation of such smart contracts but for default BAS solutions it might be very useful. I’m not going to specify here ABI methods for such smart contracts because it's implementation-defined and each BAS developer can implement their own version based on their requirements.