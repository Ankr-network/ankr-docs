# BNB Sidechain architecture

BNB Sidechain is a modular framework for creating BNB Smart Chain-compatible sidechains. 

It defines requirements for integration with the BNB Smart Chain ecosystem and brings development-ready EVM-compatible features like staking, RPC-API, and smart contracts. 
Since BNB Smart Chain doesn’t rely on the BNB Sidechain security model, there is no default embedded production-ready bridge solution between the BNB Smart Chain and BNB Sidechain networks. 
Instead, BNB Sidechain can provide protocols and standards for integrating third-party bridges that can be managed by the BNB Sidechain validator set of other projects like AnySwap or Celer Network cBridge, of course, if they trust the BNB Sidechain development team.


## BNB Sidechain structure & integration

BNB Sidechain specifies the primary structure and configuration of the blockchain, using special templates. A **template** is a ready-made blockchain solution that is **already integrated into the BNB Smart Chain infrastructure**. With this integration, developers automatically get access to products like a ready-made staking system, block explorer, SDK, API gateways, interfaces for governance, etc. 

After applying templates, BNB Sidechain can be customized using programmable and configurable **modules**.

<img src="/docs/app-chains/affiliated-chains/bnb-sidechain/bas-architecture.png" alt="BNB Sidechain architecture" class="responsive-pic" width="1000" />

## Modules

The main goal of BNB Sidechain is to build such a multi-modular blockchain architecture that it is flexible, convenient, and easy to use.

As the current implementation of BNB Sidechain is built on the BNB Smart Chain, all existing modules are built into the system smart contracts and into the EVM machine. In the future, a system of modules will be created to allow you to develop a universal smart contract and a bus for interacting between modules and other parts. This all will make it possible to use such modules in any blockchain solution.

BNB Sidechain brings with it programmable and configurable modules that can be used or modified by developers to reach their business goals, for example:
* Networking — for p2p communication between different BNB Sidechain nodes.
* Blockchain & EVM — for block producing and EVM transaction execution, of course, each BNB Sidechain can define their own runtime execution environment based, for example, on WebAssembly.
* Web3 API — for basic compatibility with Web3 ecosystem including MetaMask and other applications.
* Transaction Pool — for managing internal BNB Sidechain policies for transaction filtering and for charging fees for the system operational.
* PoA & PoS Consensus — for users to be able to vote for the honest validators in the BNB Sidechain network and guarantee the safeness of actions applied on the chain.
* Storage & State — for persisting local data.

Internally, BNB Sidechain implements the following modules: Parlia consensus engine, staking pools, governance, dynamic runtime upgrades, reward management, manageable blockchain params, EVM hooks, deployment proxy.

This modular architecture allows to re-use or enable/disable different modules. All modules are runtime-upgradable by on-chain governance.

## Repositories

Here is the list repositories:
* [bas-genesis-config](https://github.com/Ankr-network/bas-genesis-config) — genesis smart contracts and scripts for building the genesis config.
* [bas-template-bsc](https://github.com/Ankr-network/bas-template-bsc) — BNB Sidechain-compatible BNB Smart Chain-based template.
* [bas-javascript-monorepo](https://github.com/Ankr-network/bas-javascript-monorepo) — mono-repository with all frontend-related packages and SDKs.
* [bas-devnet-setup](https://github.com/Ankr-network/bas-devnet-setup) — scripts for running BNB Sidechain devnet.