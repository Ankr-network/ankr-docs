---
title: 00 Before you Start
id: unreal-before
---
# 00 Before you start
## ▶️ &nbsp;SDK walkthrough

<iframe width="550" height="305" src="https://www.youtube.com/embed/lvhW_9y2lEc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 👉🏻 &nbsp;Getting started

The **Ankr Unreal SDK** sends requests to the backend client to connect and interact with the blockchain to send and retrieve data.

The baseURL is: http://45.77.189.28:5000/
 
- Back End 
    - **Ankr** handles all communication with the backend and blockchain via a baseURL
    - The **Ankr Unreal SDK** sends call functions and parameters and receives JSON responses as to whether the call is successful or not.

## 💫 &nbsp;Use cases

Currently, the SDK serves three use cases:

1. Connect Wallet (MetaMask) and Authenticate User
2. Update NFT by signing and sending Transactions
3. Wearables NFT (Minting)

The first step is to initiate connection to a **Web3 wallet** and authenticate the player as the owner of the wallet. 

:::tip

To get started, you need to have deployed your contract on to the blockchain and have the **ABI** and the **Contract Address**. 

:::