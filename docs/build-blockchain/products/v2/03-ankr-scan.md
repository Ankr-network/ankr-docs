---
title: 03 - Ankr Scan
id: scan
---

# Ankr Scan

**Ankr Scan** is a Multi-Chain Explorer that allows a unified view of multiple chains at a time. Currently it supports 11 chains with more in the pipeline. 

![Ankr Scan Chains](@site/static/img/ankr-scan-chains.png)

* View current and historical data for transactions, addresses and blocks 
* Unified view of Crypto assets, Tokens and NFTs acrossing multiple chains.
* View all assets associated with a single wallet address/account.  

## Search 

- **Address** - View all assets held by a specific address.
- **Txn hash** - View full details for a specific transaction.
- **Block** - View full details for a specific block.

![Ankr Scan](@site/static/img/ankr-scan.png)

## Block data

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

- **State root** - The root hash of Merkle trie that stores the entire blockchain state.

![Ankr Scan](@site/static/img/blockview-scan.png)

## Transaction data

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

![Ankr Scan](@site/static/img/tx-data-scan.png)

## Address view

By entering a specific wallet address you can gain a view of the following:

![Ankr Scan](@site/static/img/tx-data-scan.png)

### Assets

- **Total Value of Assets** held across all multiple supported chains.

- **Transactions**

Transactions can be of assets as well as smart contract code sent from one account to another account. 

Transactions can include binary data (payload) and Ether.

If the target account contains code, the code is executed and the payload is provided as input data. 

The 'Method' field provides details on the nature of the transaction. 

The following details are provided:
- **Chain Symbol** - Visual representation ofthe blockchain. 
- **Txn Hash** - The unique Transaction ID
- **Method** - e.g. Transfer ETH, AtomicMatch, Mint
- **Block** - The block number that thetransaction is on. 
- **Last seen** - When the transaction statuswas last viewed
- **From** - The address from which thetransaction originated
- **Out/In** - The direction of thetransaction
- **To** The address of the recipient of thetransaction
- **Value** - The amount transferred

- **Token Transfers**

Token Transfers provide details of **from** and **to** transactions between addresses only.

- **Txn Hash** - The unique Transaction ID
- **Last Seen** - When the transaction statuswas last viewed.
- **From** - The address from which thetransaction originated.
- **Out/In** - The direction of thetransaction.
- **To** - The address of the recipient ofthe transaction.
- **Value** - The amount transferred
- **Token** The asset type transferred

![Ankr Scan](@site/static/img/assets-view-scan.png)

### NFTs

NFT view provides details of Non-Fungible Tokens held across multiple chains.

- **Image of NFT** - Preview of the NFT
- **Collection** - The series of NFTs of which this is a part.
- **Chain** - The blockchain and logo the NFT is secured on.
- **Description** - The description of the NFT.
- **Balance** - The quantity of this NFT held. 


## How it works?

Typically, to see transactions for a specific address it is required to iterate over all transactions and scan for this address. 

Ankr Scan iterates over all the transactions in the blocks and identifies specific **from** and **to** transactions. 

Instead of searching all transactions, a specially developed Ankr indexing service returns all transactions for a single block. This vastly speeds up the process of identifying transactions across blocks rather than individual transactions by reducing the complexity and quantity of data. 

This is soon to be available as an **Ankr SDK**. 






