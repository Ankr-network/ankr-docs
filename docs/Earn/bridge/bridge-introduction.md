---
title: Ankr Bridge
id: bridge-introduction
---
# Ankr Bridge

## What is Ankr Bridge?

Ankr Bridge is an Ankr product for bridging assets between networks. 

It allows you to transfer your Ankr Liquid Staking tokens, obtained when staking your original assets, to a different network where they remain a valid stake and continue to accumulate rewards.

## Why Ankr Bridge?

### User's point

Having staked your funds in Ankr Earn, you may find that you need them on the spot for some exciting opportunity you don't want to miss.
However, unstaking may apply different release time for different tokens, and you may miss this opportunity.

In this case, you can transfer your Ankr Liquid Staking tokens to any networks via Ankr Bridge.
You can then use other Ankr Earn tools to earn more crypto by staking, arbitrage trading, liquidity mining, yield farming, and much more.
As a part of that, you can trade the native tokens for your Liquid Staking tokens on a DEX, via Ankr DeFi on ankr.com (DEX fees may apply). 

### Ankr's point

Why did we need our own bridge instead of using existing solutions? 

* Almost all bridges are centralized and we’d like to manage our own solution.

* Almost all bridges support only well-known ERC20 tokens, like the TOP30, and they don’t allow to bridge any ERC-20 compatible asset.

* They don’t support NFT’s standards, such as ERC721.

* They don’t support Ankr Liquid Staking tokens that have the dynamic balance change feature. And when staking, user may want to transfer Ankr Liquid Tokens to other networks to sell them on DEXs.

As you know, a cross-chain bridge uses wrapping or pegging mechanisms for bridging tokens. 
It requires locking or burning funds in one of the chains as the proof of lock of proof of burn. 
The basic well-known schemes are lock->mint and burn->unlock that is enough for bridging almost all assets. 
However, if we want to bridge existing pegged tokens, like the Ankr token on Ethereum on BNB chain, this scheme is not applicable. 
We can use the lock->unlock scheme instead of minting and burning. However, it also requires us to rebalance assets between two networks on our own.
And since we’re going to suport the lock->unlock scheme, we can also add support for Peg-ETH tokens (and all other Binance’s pegged tokens).
We can, of course, in the future, extend Ankr Bridge functionality by supporting other bridges, such as Avalanche Bridge and so on.

## Token support

Currently, Ankr Bridge supports the following native Ankr Liquid Tokens and allows you to transfer them between these networks:

* aMATICb — Polygon <-> Ethereum. 

We're planning to add support for BNB, FTM, AVAX soon. 


## Aditional information

If you want to know more, we have an interesting [article about Ankr Bridge](https://medium.com/ankr-network/ankr-bridge-now-on-ankr-earn-cf20bade7317) on Medium.




