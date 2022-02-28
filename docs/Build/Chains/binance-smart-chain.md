---
Title: Binance Smart Chain RPC
id: binance-smart-chain
---

# Binance Smart Chain RPC

**Binance Smart Chain** is an EVM compatible chain designed to work alongside Binance Chain. 

As well as EVM compatibility, BSC adds smart contract functionality to the chain. The dual-chain architecture alongside Binance Chain enables the sending and receiving of BNB and BEP2 tokens cross-chain.&#x20;

EVM-compatibility permits support for Ethereum tools and DApps.&#x20;

## Quick Links

[**Binance Smart Chain**](https://www.binance.org/en/smartChain)

[**Docs**](https://docs.binance.org/smart-chain/guides/bsc-intro.html)

[**Github**](https://github.com/binance-chain)

# Integrate Wallet

You can set up your **MetaMask wallet** to connect to BSC RPC. You can then perform transactions and interact with the network.

### Get Started

1. Open your **Metamask Extension** and click the '_**Network**_' drop down menu at the top.
2. Select '_**Custom RPC**_'.
3. Enter the settings for the required project as follows in the table below:



|        Chain        | Custom RPC Category |                           Details                          |
| :-----------------: | :-----------------: | :--------------------------------------------------------: |
| Binance Smart Chain |    NETWORK NAME:    |                           BSC RPC                          |
|                     |     NEW RPC URL:    | [https://rpc.ankr.com/bsc](https://rpc.ankr.com/avalanche) |
|                     |      CHAIN ID:      |                             56                             |
|                     |       SYMBOL:       |                             BNB                            |
|                     |   BLOCK EXPLORER:   |         [https://bscscan.com](https://bscscan.com)         |



# Integrate Code

## Binance Smart Chain

## web3.js library

clientVersion

```
https://rpc.ankr.com/bsc
```

### Example Request

```javascript
curl https://rpc.ankr.com/bsc \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}'
```

### Example Response

```javascript
{"jsonrpc":"2.0","id":1,"result":"Geth/v1.1.7-74f6b613/linux-amd64/go1.16.10"}
```
