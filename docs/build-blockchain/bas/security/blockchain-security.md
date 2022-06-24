---
title: Blockchain and EVM Security
id: blockchain-evm
---

# Blockchain and EVM security

## Blockchain

BNB Sidechain solves the blockchain security problem by using the BNB Smart Chain codebase for it default template applied when creating a BNB Sidechain instance.

BNB Smart Chain is well-tested, audited, and is affordable and scalable solution, which closes all the target security and financial points. 

In its turn, BNB Smart Chain uses Cosmos SDK under the hood and has a strong security model.

## EVM

BNB Sidechain solves the virtual machine security problem by fully trusting EVM (Ethereum Virtual Machine) from the official Go-Ethereum codebase.

EVM is a well-tested product that is used by the entire blockchain community and was audited for thousands of times.

BNB Sidechain doesn't rely on some third party services that can manage staking and governance for it. 
Instead, it implements all staking- and governance-specific logic right in the smart contracts. 
It means that staking, governance, and rewards distribution are fully managed and verified by the EVM runtime environment.

To proof the absence of vulnerabilities and bugs in the code, we're passing several auditions.
So far, you can read [audit details on BNB Sidechain system smart contracts](https://assets.ankr.com/bas/system_smart_contracts_security_audit.pdf).

