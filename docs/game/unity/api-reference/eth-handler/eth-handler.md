---
title: EthHandler
id: eth-handler
---

# EthHandler

## Description

A class containing the methods for making transactions, estimating transactions fee, and getting data on that.

## Public methods

| Method                                                                                                     | Description                                                                        |
|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [GetDefaultAccount](/game/unity/api-reference/eth-handler/get-default-account)                             | Returns the address of the account currently logged in via the third-party wallet. |
| [GetTransactionReceipt](/game/unity/api-reference/eth-handler/get-transaction-receipt)                     | Returns a TransactionReceipt for the given transaction hash.                       |
| [GetTransaction](/game/unity/api-reference/eth-handler/get-transaction)                                    | Returns a Transaction from the given transaction hash.                             |
| [EstimateGas](/game/unity/api-reference/eth-handler/estimate-gas-2)                                        | Returns the estimated gas cost.                                                    |
| [Sign](/game/unity/api-reference/eth-handler/sign)                                                         | Signs data using a specific account address.                                       |
| [SendTransaction](/game/unity/api-reference/eth-handler/send-transaction)                                  | Sends a transaction to the network.                                                |
| [GetBalance](/game/unity/api-reference/eth-handler/get-balance)                                            | Get the balance of an address.                                                     |
| [GetBlockNumber](/game/unity/api-reference/eth-handler/get-block-number)                                   | Returns the current block number.                                                  |
| [GetTransactionCount](/game/unity/api-reference/eth-handler/get-transaction-count)                         | Get the number of transactions in a given block.                                   |
| [GetBlockWithTransactions](/game/unity/api-reference/eth-handler/get-block-with-transactions)              | Returns a block with transactions matching the block number or block hash.         |
| [GetBlockWithTransactionsHashes](/game/unity/api-reference/eth-handler/get-block-with-transactions-hashes) | Returns a block with transactions hashes matching the block number or block hash.  |
