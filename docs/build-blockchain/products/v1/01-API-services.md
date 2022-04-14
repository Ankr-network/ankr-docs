---
title: 01 - API Services
id: about-api-services
---

# About API services
Ankr’s API service provides seamless HTTPS and Websocket access to a large selection of chains.
The service is optimized via our load-balanced node clusters and Remote Procedure Call (RPC) Gateway. This robust architecture provides services and APIs with significantly better reliability and performance compared to running an individual node.

## Who are they for?
API Services are mainly suitable for Developers. The following use cases apply:
Web 3.0 Developers looking for easy set up without hassle of running a node.
Market Research & Analytics - exploring data and market opportunities.

## How they work
Ankr Node Clusters sit on top of several nodes and enable node balancing with a Remote Procedure Call (RPC) Gateway. The RPC Gateway automatically redirects requests from a node encountering an error towards a working node. This means that blocks continue to be confirmed even if one or several nodes encounter an error and require a restart. The RPC layer provides a multi-chain protocol and chain endpoints that can be queried.

### Connecting to Chains
Connecting to chains requires using JSON-RPC API from a client to query smart contract data and submit transactions to a node.

### Architecture

The following refers to the Architecture diagram below:

1. Chains being validated 
 
2. Nodes A, B, C are distinct nodes providing validation of transactions and finality.
​ 
3. The Node Cluster ensures the redirection of data from any nodes in an error state to a working node. It provides API Endpoints to interface with the Developer API and automatically syncs in real-time with it.

![Architecture](/img/API-arch.svg)

