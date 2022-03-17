---
title: Ankr Bridge Mechahics
id: bridge-mechanics
---

# Ankr Bridge Mechahics

# Briding workflow

The mechanics of what's going on under the hood when a user transfers their funds between network can be described as following:

1. The user has Ankr Liquid Staking tokens on the network where our Staking smart contract minted them for said user.

2. The users wants to transfer them on another network. For that they visit [Ankr Bridge](https://www.ankr.com/earn/bridge/), choose the amount to be transferred and click **Approve**. 
   That causes Ankr Bridge to call the `approve()` function of the briding smart contract to allow transferring the assets. From the user's side, it looks like they approve the operation in their Metamask.  

3. The user clicks **Send** on the page, which causes Ankr Bridge to call the `deposit` function to transfer the assets to the destination network. 
   This operation is called *peg-in*.

4. User's assets are now locked in Ankr Bridge and the user gets the transaction hash.

5. The user sends the transaction hash to Ankr backend for notarization.

6. The user clicks **Switch** on the page and switches to the destination network.

7. The user clicks **Receive**, which causes Ankr Bridge to call the `withdraw` function (both for ERC-20 or native tokens).
   This operation is called *peg-out*.

8. The user sees the transferred assets deposited to their wallet on the detination network.

To sum up, the flow in any direction is the same: `approve` (if necessary) -> `deposit` -> `notarize` -> `withdraw`.

## Aditional information

Ankr Bridge has undergone external audit. To learn the details, read [Ankr Bridge Security Audit](https://assets.ankr.com/earn/ankr_bridge_security_audit.pdf).