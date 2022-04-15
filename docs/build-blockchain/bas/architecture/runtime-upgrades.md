---
title: Runtime Upgrades
id: runtime-upgrades
---

# Runtime upgrades

Runtime upgrade system smart contract allows to modify the existing byte code for the system smart contracts. 
However, it doesn't allow to modify user's smart contracts. 
To apply any modification to the sources, the user must create a proposal, and changes can only be applied once a quorum is reached on the governance. 
This scheme is much simpler compared to hard forks, as it doesn't require all validators to upgrade their nodes.

It is possible because we introduced the technology called EVM hooks that works on top of the precompiled smart contracts.

Technically, EVM hooks are the same as precompiled smart contracts inside Solidity, except a hook can modify StateDB, the state database that a node uses, inside Ethereum.
Input for the hooks is the same as for simple smart contracts. 
All messages must be ABI-encoded and have a 4 byte prefix that indicates the method name.
It brings better experience for developers and makes them feel as if they're working with ordinary smart contract interfaces.

EVM hooks always consume 0 gas price.
 
Precompiled smart contracts can't modify input data because they pass a raw memory pointer. 
This is why for EVM hooks we must make a copy of the input data to be sure that the input data hasn't been modified, 
otherwise an EVM hook might corrupt the EVM memory or a smart contract can corrupt a hook's state.

## Additional information

To look at the codebase, view:
- [Addresses for the system smart contracts](https://github.com/Ankr-network/bas-template-bsc/blob/devel/common/systemcontract/const.go#L63) 
- [Folder with all system smart contracts](https://github.com/Ankr-network/bas-template-bsc/tree/devel/core/vm/systemcontract)
- [Logic for always passing a copy of the input data to the system smart contract](https://github.com/Ankr-network/bas-template-bsc/blob/devel/core/vm/contracts.go#L157)
- [Logic for choosing between an EVM hook and a precompiled smart contract](https://github.com/Ankr-network/bas-template-bsc/blob/devel/core/vm/evm.go#L54)
- [Logic for applying new bytecode to the system smart contract](https://github.com/Ankr-network/bas-template-bsc/blob/devel/core/vm/systemcontract/upgrade.go#L64)

An EVM hook must always verify that it's managed by a Solidity smart contract. 
For example, for the runtime upgrades hook the smart contract address is `0x0000000000000000000000000000000000007004`. 

:::tip
Here is an [example of a managing smart contract](https://github.com/Ankr-network/bas-genesis-config/blob/devel/contracts/RuntimeUpgrade.sol)
:::
