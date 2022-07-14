---
title: 51% Attacks
id: 51-attacks
---

## Introduction

**Proof-of-Work (PoW)** first appeared as a method for validating blocks on the **Bitcoin** network as a way of solving the **double spend problem**. 

The double spend is a scenario where an imaginary character known as Alice has 10 BTC and rather cheekily tries to send the same 10 BTC to her pals Bob and Charlie.
 
<img src={require('/img/double-spend.jpg').default} alt="Double Spend" width="700" />

A decentralized system must be able to prevent this from occuring.

## What is a 51% attack?

A 51% attack happens when a single entity/miner has more hash power than the total combined hash power of all other miners. In this situation, the miner can manipulate and modify the information on the blockchain. Specifically, an attacker can perform the following attacks:
a) reverse transactions and initiate a double-spending attack
b) exclude and modify the order of transactions 
c) hamper the normal mining operations of other miners
d) prevent the confirmation operation of normal transactions.  

## What happens in a double-spend attack?

Attacker does the following: 

1. Publishes transactions on the public chain.
2. Sends all transactions back to themself via a Secret chain - this is valid by consensus rules.
3. Mines empty blocks on the secret chain and reverts all the confirmed transactions on the public chain. 
4. Transactions are reconfirmed by honest miner blocks. 

Essentially the Attacker double spends the same coins back to themselves. 

Game theory modelling is used to create consensus algorithms that incentivize miners to participate fairly and honestly instead of performing an attack. 

## Decentralized networks and consensus algorithms

Proof-of-Work is a consensus mechanism that incentivizes miners to compete to add new blocks to a decentralized network and reach consensus on the state of the network. 

Network participants must agree that transactions are valid and blocks have an accurate history. To validate a transaction, a miner must use CPU power to solve an algorithm. Miners compete to add new blocks and each miner has a chance of success that is equal to the computational effort they have used. To prevent bad actors on Bitcoin, Satoshi Nakamoto proposed a '1-CPU-1-vote' network. The use of costly CPU resources makes it expensive to validate/mine blocks and should make it economically unviable to launch a 51% attack.

A key feature of blockchains is their immutability. They cannot be changed, and any evidence of tampering or modification is evident to all network members. Cryptographic hash functions (e.g. SHA256) are used on data such that for any given input e.g. 12, the output is always the same. 


## Understanding cryptographic hash algorithms

:::tip

You can experiment with hash algorithms yourself on a number of sites online e.g. [10015.io/tools](https://10015.io/tools/sha256-encrypt-decrypt)

For example, using **12** as the input and applying a SHA256 algorithm, the output is:   **6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918**.

Similarly, using **1676879890890809890** as the input and applying the SHA256 algorithm, the output is:
**f92133fe84f4dd86f4c3eac97d70439f6932f5c7a97260a22345d7f39f70b244**

Notice, that the number of characters in the input makes no difference to the length of characters in the output. 

:::

**Cryptographic hash functions** such as **SHA256** are standardized. This means that for a certain input or combination of inputs, the output is always the same. However, what makes SHA256 an excellent cryptographic algorithm is the fact that there is no direct method to decrypt it. The only way to do so is to use a **Trial & Error** methodology. This Trial & Error methodology is the basis for the computational cost and Proof-of-Work. 

## What do miners actually do?

In Proof-of-Work, miners are given part of an input, and they must generate random numbers to arrive at a number that solves a hash puzzle. This number is called the **Nonce**. The miner that solves the puzzle wins the right to add a new block to the current chain. Ther effort is the Proof-of-Work.

The puzzle solution involves applying Trial & Error to arrive at a Nonce. The nonce starts with a number of zero bits that when hashed with SHA-256 solve the puzzle. The nonce can then be verified by simply applying the SHA-256 algorithm. When a new block is created, the header information is combined and sent as an input parameter to the SHA-256 hash function. If the output is below a certain threshold (T - the difficulty threshold), then the value is accepted.

The **Block Header** of a block on Bitcoin is a hash of contents within the block, most notably its **Merkle Root**, **Previous Block Hash**, and **Nonce** fields. The Merkle Root represents a summary of transactions, the Previous Block Hash represents the chaining, and the Nonce represents the Proof-of-Work.

Miners hash the entire block header (the input) and generate random numbers to try and arrive at a number for the nonce that solves the hash puzzle. The condition that needs to be met is that the hash of the block header is less than some target value. Solving these difficult puzzles is the Proof-of-work and it is intended to make it prohibitively expensive for an attacker to modify the blockchain in their favour and achieve consensus with >50% of the network. This has so far been successful for the Bitcoin network. 

## How feasible are 51% attacks?

There are some instances where 51% attacks *may* be successful on smaller networks using proof-of-work algorithms. 

Only a small proportion of miners from larger networks need to switch to a smaller network to potentially control 51% of the network's hashrate (computational power or how many times hash values are calculated per second). Potential attackers could potentially use mining rental services cheaply to get the additional hash rate for the duration of the attack. They could then mount a 51% attack.

## How can they be mitigated?

A number of solutions to the problem have been proposed 

1. [**Long Living Masternode Quorums (LLMQs)**](https://github.com/dashpay/dips/blob/master/dip-0006.md) allow for the implementation of the [ChainLocks mechanism proposed in DIP8](https://github.com/dashpay/dips/blob/master/dip-0008.md) to protect against 51% attacks. This technique includes a network-wide voting process with a ‘first-look’ policy. An LLMQ of a large number of master nodes is required to approve a block. All participating nodes in the network must sign the block to add it to the chain and generate a message. An attacker with control of less than 30% of all masternodes would not be able to override the security. However, an attacker controlling 50% of masternodes could mount an attack. However, the chances of this are infinitesimally small (<30/1 billion).

2. [**Proof of Adjourn (PoAj)**](https://www.mdpi.com/2076-3417/10/18/6607/htm#:~:text=We%20propose%20Proof%20of%20Adjourn%20(PoAj)%2C%20a%20novel%20approach,%2Dsized%20low%2Dfees%20transactions.) has been proposed as a novel consensus protocol to mitigate against attacks regardless of attacker hashing capabilities. It works to mitigate the processing time issue of large-sized transactions by performing a sequence of verification checks. It eliminates the possibility of block reversion an enables confirmation with just one block rather thatn six. This makes it fast. 

3. [**Delayed block sending penalty system**](https://www.horizen.io/assets/files/A-Penalty-System-for-Delayed-Block-Submission-by-Horizen.pdf) This system proposes modifying PoW by notifying the entire network about a fork and halting any transaction capabilities until a delay period has passed. However, this delay does not necessarily mitigate against a 51% attack when an attacker owns 51% of the hashrate. The delay process also slows transactions on the network generally. 

## Further Reading

[The 51% Attack on Blockchains: A mining behavior Study](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9567686)




