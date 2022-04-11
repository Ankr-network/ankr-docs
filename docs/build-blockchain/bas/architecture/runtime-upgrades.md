---
title: Runtime Upgrades
id: runtime-upgrades
---

Runtime upgrade system smart contract allows to modify existing byte code for the system smart contracts. It disallows to modify user's smart contracts. To apply any modification to the sources proposer must create a proposal and changes can be applied only once quorum is reached on the governance. This scheme is much simplier comparing to hard forks because it doesn't require all validator to upgrade their nodes.

It's possible because we introduced the technology called EVM hooks, that are worked on the top of pre-compiled smart contracts. EVM hooks are special pre-complied smart contract that can modify state of the blockchain.