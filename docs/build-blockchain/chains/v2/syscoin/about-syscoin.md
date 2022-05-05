---
title: Overview
id: about-syscoin
---

# Syscoin RPC
Syscoin is a Proof-of-Work blockchain. It uses merged-mining - a technique whereby PoW blockchain miners can merge several cryptocurrencies with mining at the same time. Syscoin currently has around 20% of the hashpower that goes into mining Bitcoin. SysCoin utilizes [Chainlocks](https://docs.syscoin.org/docs/tech/chainlocks) to [secure against 51% attacks]. 

Syscoin has a modular blockchain architecture with multiple specialized layers. This represents their approach to solving the scalability trilemma. 

## 1. Execution layer - NEVM

[NEVM](https://docs.syscoin.org/docs/tech/nevm). This layer is where day-to-day smart contract transactions take place.  

## 2. Settlement layer - Z-Dag

[Z-DAG](https://docs.syscoin.org/docs/tech/z-dag) (Zero-Confirmation Directed Acyclic Graph) is an instant settlement protocol used alongside proof-of-work (PoW) to enable the swift confirmation of Syscoin transactions. A Z-DAG is a directed acyclic graph (DAG) where validating nodes verify the sequential ordering of transactions received in their memory pools. 

## 3. Data availability layer 

This is where the data from the blockchain is stored. ZK-rollups on Syscoin store data on-chain whilst Validium roll-ups store data off-chain in decentralized storage or with trusted entitites. Validium is scheduled for later in the year.

:::info What is Validium?

Validium is a Layer-2 scaling solution that enforces the validity of all transactions using zero-knowledge proofs whilst data is kept off-chain. This means that assets cannot be accessed without explicit authorization from the account owner. 

:::

## Quick links

[**Near Protocol**](https://near.org/)

[**Docs**](https://docs.near.org/docs/develop/basics/getting-started)

[**Github**](https://github.com/near)