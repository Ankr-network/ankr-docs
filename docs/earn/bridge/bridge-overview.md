---
title: Overview
id: overview
---

# Ankr Bridge

## What is Ankr Bridge?

Ankr Bridge is an Ankr product for bridging assets between networks. 

It allows you to transfer your Ankr Liquid Staking tokens to a different network where they remain a valid stake and continue to accumulate rewards.

You receive Liquid Staking tokens when staking your original assets, in 1:1 ratio.

### Supported tokens

Currently, Ankr Bridge supports the following native Ankr Liquid Tokens and allows you to transfer them between these networks:

* aMATICb — Ethereum <-> Polygon, Ethereum <-> BSC, Polygon <-> BSC. 
* aETHb — Ethereum <-> BSC.

We're planning to add support for BNB, FTM, AVAX soon. 

## Audit details

Ankr Bridge has undergone external audit by Beosin Blockchain Security. 
To learn more, view the [detailed audit repot](https://assets.ankr.com/earn/ankr_bridge_security_audit.pdf).

## Why Ankr Bridge?

### User benefits

Having staked your funds in Ankr Earn, you may find that you need them on the spot for some exciting opportunity you don't want to miss.
However, unstaking may apply different release times for different tokens, and you may miss this opportunity.

In this case, you can transfer your Ankr Liquid Staking tokens to any network via Ankr Bridge.
You can then use other Ankr Earn tools to earn more crypto by staking, arbitrage trading, liquidity mining, yield farming, and much more.
You can also trade the native tokens for your Liquid Staking tokens on a DEX, via Ankr DeFi on ankr.com (DEX fees may apply). 

### Ankr benefits

Why did we need our own bridge instead of using existing solutions? 

* Almost all bridges are centralized and we’d like to manage our own solution.

* Almost all bridges support only well-known ERC20 tokens, like the TOP30, and they don't support bridging for other ERC-20 compatible assets.

* They don’t support NFT standards, such as ERC721.

* They don’t support Ankr Liquid Staking tokens that feature a dynamic balance change. And when staking, users may want to transfer Ankr Liquid Tokens to other networks to sell them on DEXs.

Typically, a cross-chain bridge uses wrapping or pegging mechanisms for bridging tokens. 
This requires locking or burning funds on one of the chains as part of Proof-of-Lock of Proof-of-Burn.
The basic well-known schemes are lock->mint and burn->unlock that is enough for bridging almost all assets. 
However, if we want to bridge existing pegged tokens, like the Ankr token on Ethereum or BNB chain, this scheme is not applicable. 
We can use the lock->unlock scheme instead of minting and burning. However, it also requires us to rebalance assets between two networks on our own.
Since we’re going to suport the lock->unlock scheme, we can also add support for Peg-ETH tokens (and all other Binance pegged tokens).
We can, of course, in the future, extend Ankr Bridge functionality by supporting other bridges, such as Avalanche Bridge and so on.

## Additional information

If you want to know more, we have an interesting [article about Ankr Bridge](https://medium.com/ankr-network/ankr-bridge-now-on-ankr-earn-cf20bade7317) on Medium.




