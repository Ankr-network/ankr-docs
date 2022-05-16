---
title: System Smart Contracts Security
id: smart-contracts
---

# System smart contracts security

For the smart contract runtime environment, BAS uses EVM from the official Go-Ethereum codebase. 
Time, usage, and numerous extensive audits of EVM and Solidity by the entire blockchain community show it's a secure and hack-proof technology.  

This way BAS solves the runtime environment security problem.

What's left is to ensure that the system smart contracts themselves are secure.  
BAS solves this problem by introducing the following features.

## Decentralized validators

The concept of decentralized validators is very simple: while validators in the network produce blocks, other validators verify these blocks.
This model balances validator performance and creates a more decentralized system resistant to cliques or lazy validators.

## No centralized controlling authority

## Audit details

BAS smart contracts have undergone external audit by Beosin Blockchain Security. 
To learn more, view the [detailed audit report](https://github.com/Ankr-network/bas-genesis-config/blob/master/audit/2022-04-27-Beosin.pdf).




