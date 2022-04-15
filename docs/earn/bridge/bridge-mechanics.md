---
title: Ankr Bridge Mechanics
id: bridge-mechanics
---

# Ankr Bridge mechahics

## Smart contracts

Smart contracts involved in bridging Liquid Staking tokens are:
* [Ankr Ethereum bridge](https://etherscan.io/address/0xc437df90b37c1db6657339e31bfe54627f0e7181) — sends assets to other blockchains and receives assets sent to Ethereum.
* [Ankr Polygon bridge](https://polygonscan.com/address/0x31be0fa706e391a88c3a09cc13112bd55e0887f5) — sends assets to other blockchains and receives assets sent to Polygon.
* [Ankr Binance bridge](https://bscscan.com/address/0xc437df90b37c1db6657339e31bfe54627f0e7181) — sends assets to other blockchains and receives assets sent to Binance.

## Briding workflow

The mechanics of what's going on under the hood when a user transfers their funds between network can be described as following:

1. The user has Ankr Liquid Staking tokens on the network where our smart contract minted them for said user.

2. The user wants to transfer them onto another network. They visit [Ankr Bridge](https://www.ankr.com/earn/bridge/), choose the amount to be transferred and click **Approve**. 
   That causes Ankr Bridge to call the `approve()` function of the bridging smart contract to allow transfer of the assets. From the user side, it looks like they approve the operation in their Metamask.  

3. The user clicks **Send** on the page, which causes Ankr Bridge to call the `deposit()` function to transfer the assets to the destination network. 
   This operation is called *peg-in*.

4. The user's assets are now locked on Ankr Bridge and the user gets the transaction hash.

5. The user sends the transaction hash to Ankr backend for notarization.

6. The user clicks **Switch** on the page and switches to the destination network.

7. The user clicks **Receive**, which causes Ankr Bridge to call the `withdraw()` function (both for ERC-20 or native tokens).
   This operation is called *peg-out*.

8. The user sees the transferred assets deposited to their wallet on the detination network.

To sum up, the flow in any direction is the same: `approve()` (if necessary) -> `deposit()` -> `notarize` -> `withdraw()`.