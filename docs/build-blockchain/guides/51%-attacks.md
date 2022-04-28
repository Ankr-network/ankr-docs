---
title: 51% Attacks
id: 51-attacks
---

Proof-of-Work (PoW) first appeared as a method for validating blocks on the Bitcoin network as way of solving the double spend problem. The double spend is a scenario where Alice has 10 BTC and sends 10 BTC to both Bob and Charlie. Any decentralized system must be able to prevent this from occurring.

In a 51% attack, an attacker could send a transaction to a victim, launch an attack and then double spend the same coins back to themselves. Game theory modelling should incentivize miners to play fairly and honestly follow the protocol rather than perform an attack. 

Proof-of-Work allows a decentralized network to reach consensus on the state of the network. Network participants must agree that transactions are valid and blocks have an accurate history. The consensus mechanism incentivizes miners to compete to add new blocks. Each miner has a chance of success that is equal to the computational effort they have used. 

When a transaction is initiated, it is broadcast to the whole network. The rest of the network validate the transaction to ensure there is no double spending or tampering. The majority (>50% of the network) must vote to agree that the transaction is valid for there to be a consensus. To stop a bad actor from generating multiple network identities and have > 50% of the votes, Satoshi Nakamoto proposed a “1-CPU-1-vote” network, rather than the traditional “1-identity-1-vote” system.

The use of costly CPU resources makes it expensive to validate/mine blocks and makes it economically unviable to launch a 51% attack.

To validate a transaction, a miner must use CPU power to solve an algorithm. 

A key feature of blockchains is their immutability. They cannot be changed, and any evidence of tampering or modification is evident to all network members. Cryptographic hash functions (e.g. SHA256) are used on data such that for any given input e.g. 12, the output is always the same. 

:::tip
You can experiment with hash algorithms yourself on a number of sites online e.g. [10015.io/tools](https://10015.io/tools/sha256-encrypt-decrypt)

:::

For example, using **12** as the input and applying a SHA256 algorithm, the output is:   **6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918**.

Similarly, using **1676879890890809890** as the input and applying the SHA256 algorithm, the output is:
**f92133fe84f4dd86f4c3eac97d70439f6932f5c7a97260a22345d7f39f70b244**

Notice, that the number of characters in the input makes no difference to the length of characters in the output. 

Cryptographic hash functions are standardized. This means that for a certain input or combination of inputs, the output is always the same. However, what makes SHA256 an excellent cryptographic algorithm is the fact that there is no direct method to decrypt it. The only way to do so is to use a Trial & Error methodology. This Trial & Error methodology is the basis for the computational cost and Proof-of-Work. 

In Proof-of-Work, miners are given part of an input, and they must generate random numbers to arrive at a numerical value (or nonce) that must be found to identity the other part of the input that generates a specific output. The Block Header of a block on Bitcoin, is a hash of contents within the block, most notably its Merkle Root, Previous Block Hash, and Nonce fields. The Merkle Root represents a summary of transactions, the Previous Block Hash represents the chaining, and the Nonce represents the Proof-of-Work.

Miners hash the entire block header (the input) and generate random numbers to try and arrive at a number for the nonce that solves the hash puzzle. The condition that needs to be met is that the hash of the block header is less than some target value. Solving these difficult puzzles is the Proof-of-work and it is intended to make it prohibitively expensive for an attacker to modify the blockchain in their favour and achieve consensus with >50% of the network. This has so far been successful for the Bitcoin network. 

However, there are some instances where 51% attacks *may* be successful on smaller networks using proof-of-work algorithms. Only a small proportion of miners from larger networks need to switch to a smaller network to potentially control 51% of the network's hashrate (computational power or how many times hash values are calculated per second). Potential attackers could potentially use mining rental services cheaply to get the additional hash rate for the duration of the attack. They could the attempt to select the current block, begin mining and withhold the mined blocks. When published, this competing chain will overtake the original chain without the transactions since the 'fork'. The bad actor could also refuse to accept blocks mined by other network participants. 


