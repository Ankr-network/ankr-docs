---
title: Connect Wallet
id: connect-wallet
---

# How to Integrate

This section provides the information you need to integrate with Ankr supported RPC chains.

## Wallet
### Connect Metamask

You can set up your metamask wallet to connect to Ankr supported RPC chains. 

You can connect to the following chains via RPC:
**Avalanche, Arbitrum, Binance Smart Chain, Ethereum, Fantom, Near, Polygon, Solana**. 

More chains are being added all the time so check our social channels to stay up to date on new launches.

Get Ready
---------

We're assuming that you have already:

-   Installed the Metamask Extension in your Chrome Browser. [Install Metamask extension ](https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn)

-   Created a Metamask Wallet.

Get Started
-----------

So let's get started

1.  Open your **Metamask Wallet** and click the ***'Network'*** drop down menu at the top.


2.  Select ***'Custom RPC'***.


3.  Enter the settings for the required project as follows in the table below:

:::info

Chain identifiers (chainID) were introduced in EIP-155 to prevent transactions being included in another chain. ChainID is an integer number used in the process of signing transactions and verifying transaction signatures. If different chain identifiers are used for signing and verifying the transaction, then the transaction verification process will fail.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="Arbitrum" label="Arbitrum" default>


|**Chain**| **Custom RPC Category** | **Details**|
|----------|------------------------|------------|
|Arbitrum  | NETWORK NAME:          |Arbitrum RPC|
|          | NEW RPC URL:           |https://multi-rpc.com/arbitrum/|
|          | CHAIN ID:              |200 (Arbitrum on xDAI) |
|          | SYMBOL:                |xDAI                   |
|          | BLOCK EXPLORER URL:    |https://blockscout.com/xdai/aox/|


  </TabItem>
  <TabItem value="Avalanche" label="Avalanche">

 |**Chain**| **Custom RPC Category** | **Details**|
|----------|------------------------|------------|
|Avalanche | NETWORK NAME:            |Avalanche RPC|
|          | NEW RPC URL:             |https://multi-rpc.com/avax/|
|          | CHAIN ID:                |43114 |
|          | SYMBOL:                  |AVAX                   |
|          | BLOCK EXPLORER URL:      |https://blockscout.com/xdai/aox/|
  </TabItem>
  <TabItem value="Binance Smart Chain" label="Binance Smart Chain">

 |**Chain**| **Custom RPC Category** | **Details**|
|----------|------------------------|------------|
|Binance Smart Chain | NETWORK NAME:            |Binance Smart Chain RPC|
|          | NEW RPC URL:             |https://multi-rpc.com/bsc/|
|          | CHAIN ID:                |56 |
|          | SYMBOL:                  |BSC                   |
|          | BLOCK EXPLORER URL:      |https://bsc-explorer.com| 

  </TabItem>
   <TabItem value="Ethereum" label="Ethereum">

 |**Chain**| **Custom RPC Category** | **Details**|
|----------|------------------------|------------|
|Ethereum | NETWORK NAME:            |Ethereum RPC|
|          | NEW RPC URL:             |https://multi-rpc.com/eth/|
|          | CHAIN ID:                |1 |
|          | SYMBOL:                  |ETH                   |
|          | BLOCK EXPLORER URL:      |https://etherscan.io/| 

  </TabItem>
   <TabItem value="Fantom" label="Fantom">

 |**Chain**| **Custom RPC Category** | **Details**|
|----------|------------------------|------------|
|Fantom | NETWORK NAME:            |Fantom RPC|
|          | NEW RPC URL:             |https://multi-rpc.com/ftm/|
|          | CHAIN ID:                |250 |
|          | SYMBOL:                  |FTM                   |
|          | BLOCK EXPLORER URL:      |https://explorer.fantom.network/| 

  </TabItem>
<TabItem value="Near" label="Near">

 |**Chain**| **Custom RPC Category** | **Details**|
|----------|------------------------|------------|
|Near       | NETWORK NAME:            |Near RPC|
|          | NEW RPC URL:             |https://multi-rpc.com/near/|
|          | CHAIN ID:                |250 |
|          | SYMBOL:                  |FTM                   |
|          | BLOCK EXPLORER URL:      |https://explorer.fantom.network/| 

  </TabItem>


</Tabs>


