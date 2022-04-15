---
title: Runtime Upgrades
id: runtime-upgrades
---

Runtime upgrade system smart contract allows to modify existing byte code for the system smart contracts. It disallows to modify user's smart contracts. To apply any modification to the sources proposer must create a proposal and changes can be applied only once quorum is reached on the governance. This scheme is much simplier comparing to hard forks because it doesn't require all validator to upgrade their nodes.

It's possible because we introduced the technology called EVM hooks, that are worked on the top of pre-compiled smart contracts. EVM hooks are special pre-complied smart contract that can modify state of the blockchain.

Technically EVM hooks is the same as precompiled smart contracts inside solidity, but with only one difference that it can modify StateDb inside ethereum.
The input for the hooks is the same as for simple smart contracts. All messages must be ABI encodes and has 4byte prefix indicate name of the method.
It's used to bring better experience for developers and let them feel like they work with normal smart contract interfaces.
EVM hooks always consume 0 gas price.

P.S: Pre-compiles can't modify input data because it passes raw memory pointer, that is why for EVM hooks we must make a copy of input data to be sure that input data wasn't modified, otherwise EVM hook might corrupt EVM memory or smart contract can corrupt hook's state.  

Useful links to the code:
- Addresses for the system smart contracts https://github.com/Ankr-network/bas-template-bsc/blob/devel/common/systemcontract/const.go#L63
- Folder with all system smart contracts https://github.com/Ankr-network/bas-template-bsc/tree/devel/core/vm/systemcontract
- Always pass copy of input data to the system smart contract https://github.com/Ankr-network/bas-template-bsc/blob/devel/core/vm/contracts.go#L157
- Place where we choose between EVM hook and pre-compiled smart contract https://github.com/Ankr-network/bas-template-bsc/blob/devel/core/vm/evm.go#L54
- Here we apply new bytecode for the system smart contract https://github.com/Ankr-network/bas-template-bsc/blob/devel/core/vm/systemcontract/upgrade.go#L64

EVM hooks must always verify that it's managed by some Solidity smart contract, for runtime upgrades its `0x0000000000000000000000000000000000007004`, here is an example of such smart contract https://github.com/Ankr-network/bas-genesis-config/blob/devel/contracts/RuntimeUpgrade.sol
