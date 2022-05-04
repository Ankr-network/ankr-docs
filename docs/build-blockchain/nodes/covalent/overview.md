---
title: Overview
id: overview
---

# Covalent
Covalent's Unified API allows you to pull detailed, historical and granular blockchain data from multiple blockchains with no code. 
Covalent allows developers to reduce time, costs and complexity from blockchain application development.

## Node Modes
Covalent has an API Host for all requests: `https://api.covalenthq.com/v1/` as described in [Covalent API docs](https://www.covalenthq.com/docs/api/#/0/0/USD/1).

Key Features:
*Automatically indexed: All code on the underlying blockchain is automatically indexed. Covalent makes an exact replica of every single contract, every wallet and every single transaction to the Covalent database. The Covalent database hosts billions of rows of data and terabytes of data.
* No-code: Covalent offers a "no-code" solution and all customizations can be done without writing a single line of code by the developer.
* Multiple blockchains, multiple use cases: The same unified API works across 15+ blockchains and dozens of use-cases like crypto-wallets, NFT galleries, investor dashboard tools, DAO tooling etc.

The Covalent API has two classes of endpoints:
* Class A - endpoints that return enriched blockchain data applicable to all blockchain networks, eg: balances, transactions, log events, etc.
I* Class B - endpoints that are for a specific protocol on a blockchain, eg: AAVE is Ethereum-only and is not applicable to other blockchain networks.
w
The Covalent API is RESTful. 
The API is designed around the main resources that are available through the web interface. 
All requests are done over HTTPS (calls over plain HTTP will fail). 
The default return format for all endpoints is JSON. 
The root URL of the API is `https://api.covalenthq.com/v1/` as described in [Covalent API docs](https://www.covalenthq.com/docs/api/#/0/0/USD/1).
We classify the Refresh rate of the APIs as real-time: 30s or 2 blocks, and batch 10m or 40 blocks.
This is an informational guide on how Covalent can serve as the go to tool for ANKR in querying Blockchain data across all supported Networks. 
This guide focuses on the REST protocol to query data. 
We will discuss 4 example cases and how Covalent APIs is the best solution for ANKR to crawl through the networks.
