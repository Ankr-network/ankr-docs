---
Title: Binance Smart Chain RPC
id: binance-smart-chain
---

# Binance Smart Chain RPC

**Binance Smart Chain** is an EVM compatible chain designed to work alongside Binance Chain. 

As well as EVM compatibility, BSC adds smart contract functionality to the chain. The dual-chain architecture alongside Binance Chain enables the sending and receiving of BNB and BEP2 tokens cross-chain.&#x20;

EVM-compatibility permits support for Ethereum tools and DApps.&#x20;

## Quick links

[**Binance Smart Chain**](https://www.binance.org/en/smartChain)

[**Docs**](https://docs.binance.org/smart-chain/guides/bsc-intro.html)

[**Github**](https://github.com/binance-chain)

---

## Connect wallet


You can set up your **MetaMask wallet** to connect to BSC RPC. You can then perform transactions and interact with the network.

### Get started

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



## Integrate code

### web3 library

- **clientVersion**

Returns the current client version.

#### Example request

```js
curl https://rpc.ankr.com/bsc \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}'
```

#### Example response

```js
{"jsonrpc":"2.0","id":1,"result":"Geth/v1.1.7-74f6b613/linux-amd64/go1.16.10"}
```

### net library

- **net_version**

Returns the current network id.


#### Example request

```js
  
  curl https://rpc.ankr.com/bsc \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"net_version","params":[],"id":67}'
```

#### Example response

```js
{"jsonrpc":"2.0","id":67,"result":"56"}
```

### eth library

### Example request

```js

curl https://rpc.ankr.com/bsc \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":67}'
```

### Example response

```js
{"jsonrpc":"2.0","id":67,"result":"0xf50e1c"}
```



