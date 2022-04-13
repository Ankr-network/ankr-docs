---
title: Overview
id: overview
---

# BSC Application Sidechain (BAS)

## What is BAS?

BAS is a framework for creating sidechains in the BSC ecosystem. In other words, it's an infrastructure to help developers and node operators build and run their own blockchains as their internal value system and for a massive number of users while still maintaining a close connection with BNB Chain (BSC).

The main BAS task is to allow any developer to raise their blockchain in a matter of hours, with its unique specifications and validator set. Such blockchain, out-of-the-box, can be connected to the BSC infrastructure.

The validator set can run with fewer validators than BNB Chain, depending on the BAS deployer. The validators can be run by the application owners or any community stakeholders, bringing more flexibility and decentralization to BAS.  

We can say this is a standard on which you can build simple but functional blockchain projects. Developers and teams can create simple blockchains with their own business rules and economies. Most importantly, they can extend the existing functionality.

:::info
Check out the [BAS codebase on GitHub](https://github.com/Ankr-network?q=bas). 
:::


## Why BAS?

Today BSC is experiencing network scalability problems and the core developer has proposed to use BAS in their Outlook 2022 paper to solve this problem because these sidechains can be designed for much higher throughput and lower gas fees. We want to define a protocol for consensus management and messaging between BAS and BSC so that it is easier for developers to use a ready-made solution and it is easier for BSC to integrate with them.

In short, the typical usage of BAS is like the Ronin chain for the Axie Infinity.

Unlike Ronin, though, BAS is designed with better architecture and security in mind. The recent exploit discovered on Ronin illustrates the importance of having a diverse and decentralized group of validators and node operators serving the chain. Ankr will use its own token to help incentivize other node providers to support decentralization on BAS.

But let's look bigger!

Your team wants to use blockchain tech to solve any of your business-specific tasks. To do this, they have to find ready-made solutions, fork them, make changes, and so on, which:

* Can lead to a large number of errors in the code.
* Can cause a large number of projects copying each other.

The idea of BAS is to allow you to expand and reuse existing modules, and by using the architecture on smart contracts, painlessly modify existing contracts. 


## How does BAS work? 

Technically, BAS is a set of smart contracts written in any possible programming language. The contract executor itself can be anyone and work in any way; BAS does not require the use of any specific set of programming languages or API standards. 

In essence, BAS defines the primary structure and configuration of the blockchain, using special templates. A template is a ready-made blockchain solution that is already integrated into the BSC infrastructure. With this integration, developers automatically get access to such useful products as a ready-made staking system, block explorer, SDK, API gateways, interfaces for governance, etc. 

The current implementation of BAS is based on a modified version of BSC, but this is not the rule, BAS can technically run on top of any blockchain. In the future, the list of templates will be extended.


## What is BAS structure? 

Internally, BAS implements the following modules: Parlia consensus engine, staking pools, governance, dynamic runtime upgrades, reward management, manageable blockchain params, EVM hooks, deployment proxy. 

Over time, the set of modules will increase and they will take on a more structured look. 


## So, what's the goal again? And what is the future of BAS? 

The main goal of BAS is to build such a multi-modular blockchain architecture that it is flexible, convenient, and easy to use.

As the current implementation of BAS is built on BSC, all existing modules are built into system smart contracts and into the EVM machine. In the future, a system of modules will be created to allow you to develop a universal smart contract and a bus for interacting between modules and other parts. This all will make it possible to use such modules in any blockchain solution.