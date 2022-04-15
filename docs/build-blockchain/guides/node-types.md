# Understanding node types

Nodes are the devices and software used by individuals, organizations and institutions in a network to keep a copy of a blockchain and serve as communication points that execute various essential network functions.
Full
Full nodes are nodes that download the entire blockchain and validate each transaction per the agreed‐upon rules of the network, relaying transactions and blocks to others.
Archive
Archive nodes store the full history of in-blockchain interactions (transactions, account balances, blockchain metrics etc.). Archive nodes are suitable for tracking the processes that occur in a blockchain within a predetermined period of time. This can be useful if you want to create a dApp based on an understanding of historical data.
Validator
Validator nodes are a group or a piece of IT infrastructure that takes the responsibility of maintaining Chain data and validating all transactions. They join the consensus protocol and vote to produce blocks. The fees are collected and distributed among all validators.

Type of Node
Description
Uses
Availability
Full Node
This is the standard node for development. 
A full node stores all blockchain data on disk and can serve the network with any data on request. 
Receives new transactions and blocks whilst participating in block validation.
Verifies all blocks and states.
All states can be derived from a full node
Stores recent state only on local disk for more efficient initial sync.
Use when you want all the benefits of running a full node without the pain and expense of managing one. 
Allows you to focus time on building Dapps. 
Reliable, cost-effective and easy to set up. 
- One Click node
- API Service

Archive Node
Archive Nodes store everything kept in the full node
Builds an archive of all historical data - every block and transaction for the entire chain is stored on local disk. 
Typically used for the following: 
To playback transactions
For market research and analytics.
For services such as block explorers and infrastructure providers.
- API Services ONLY
Validator Node
Validator Nodes ensure the validity of transactions in proof-of-stake networks and ensure consensus on the state of the network. 
Used for 
Staking - Validator nodes earn passive income by ‘staking’ crypto assets and receiving rewards for validated transactions as a share of gas fees. 
- One Click node
- API Service