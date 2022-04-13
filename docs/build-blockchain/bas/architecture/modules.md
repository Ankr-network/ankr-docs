---
title: Modules
id: modules
---

BAS brings with it programmable and configurable modules that can be used or modified by developers to reach their business goals, for example:
* Networking — for p2p communication between different BAS nodes.
* Blockchain & EVM — for block producing and EVM transaction execution, of course, each BAS can define their own runtime execution environment based, for example, on WebAssembly.
* Web3 API — for basic compatibility with Web3 ecosystem including MetaMask and other applications.
* Transaction Pool — for managing internal BAS policies for transaction filtering and for charging fees for the system operational.
* PoA & PoS Consensus — for users to be able to vote for the honest validators in the BAS network and guarantee the safeness of actions applied on the chain.
* Storage & State — for persisting local data.

Internally, BAS implements the following modules: Parlia consensus engine, staking pools, governance, dynamic runtime upgrades, reward management, manageable blockchain params, EVM hooks, deployment proxy. 

This modular architecture allows to re-use or enable/disable different modules. All modules are runtime-upgradable by on-chain governance.