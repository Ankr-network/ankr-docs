---
title: Contract
id: contract
---

# Contract

## Description

A class containing the method to interact with smart contracts.

## Public methods

| Method                                                       | Description                                    |
|--------------------------------------------------------------|------------------------------------------------|
| [CallMethod](/game/unity/api-reference/contract/call-method) | Sends a transaction using your currently active session. Creates a transaction input with provided parameters. |
| [Web3SendMethod](/game/unity/api-reference/contract/web3-send-method) | Same as the previous function above but with the added benefit of being able to use a `TransactionEventHandler` to have access via these events to feedback during the transaction process. |
| [GetEvents](/game/unity/api-reference/contract/get-events) | Gets all events from the contract that match the specified filter requirements. |
| [GetData](/game/unity/api-reference/contract/get-data) | Gets data from non-payable contract methods, fields, and mappings. |
| [EstimateGas](/game/unity/api-reference/contract/estimate-gas) | Returns the estimated gas for calling a smart contract method with the given parameters. |

