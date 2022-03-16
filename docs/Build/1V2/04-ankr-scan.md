---
title: 04 - Ankr Scan
id: scan
---

# 04 - Ankr Scan

**Ankr Scan** is a Multi-Chain Explorer that allows a unified view of multiple chains at a time. Currently it supports 11 chains with more in the pipeline. 

![Ankr Scan Chains](@site/static/img/ankr-scan-chains.png)

* View current and historical data for transactions, addresses and blocks 
* Unified view of Crypto assets, Tokens and NFTs acrossing multiple chains.

## Block Data

View individual block details for blocks held on multiple chains.

- **Block Height** - The block number and length of the blockchain (in blocks) on creation of the current block.

- **Timestamp** -  The time at which the block was mined.

- **Number of transactions** - Total number of transactions included in the block.

- **Miner address** - The address of the miner who mined the block

- **Size** - Size of the data within the block. Determined by block gas limit.

- **Gas used** - The total units of gas used by transactions in the block.

- **Block hash** - The cryptographic hash of the block header of the current block generated using the SHA256 algorithm.

- **Parent hash** - The hash of the previous block from which this block was generated.

- **Sha3 uncles** - The combined hash of all uncles for a given parent.

- **State root** - THe root hash of Merkle trie that stores the entire blockchain state.


## Transaction Data

You can view detailed information for an individual transaction on supported blockchains.

- **Transaction Hash** - Unique Transaction ID

- **Status** - Status of the transaction e.g. Success, Pending

- **Block** - Number of the block the transaction is recorded.

- **Timestamp** - Time of the transaction

- **From** - The address of the sender of the transaction (could be a contract address)

- **To** - The address of the recipient  of the transaction (could be a contract address)

- **Value** - The amount transferred

- **Transaction Fee** - The amount paid to the miner

- **Gas Price** - The cost per unit of gas for the transaction. 

- **Gas used by the Transaction** - The exact units of gas used and the percentage of gas.

- **Nonce** - The numbered transaction sent from a given address. Each sent transaction increases the nonce by 1

## Address View

By entering a specific wallet address you can gain a view of the following:

- **Total Value of Assets** held across all multiple supported chains.

- **Transaction details**
    - Txn Hash
    - Method - e.g. Transfer ETH The time at which a miner mined the block.
 

## How it works?

Normally, to see transactions a specific address has received requires iterating over all transactions and scanning for this address. Ankr Scan iterates over all the transactions in the blocks and identifies specific **from** and **to** transactions. Instead of searching all transactions, a specially Ankr developed indexing service returns all transactions for a single block. This vastly speeds up the process of identifying transactions across blocks rather than individual transactions by reducing the complexity and quantity of data. 

This is soon to be available as an **Ankr SDK**. 

Navigating Block Explorer details across multiple chains typically involves having to jump between different block explorers

Besides the obvious usecase of viewing blocks, address details and transactions, Ankrscan solves the need of having to use different block explorers across different EVM compatible chains (Avalanche, Fantom, Polygon etc.)





![Ankr Scan](@site/static/img/ankr-scan.png)

## Uses

View all chains associated with a single wallet address/account. 
View your assets across multiple chains. 

## How to use 

You can search by: 
* Address
* Txn hash
* Block
