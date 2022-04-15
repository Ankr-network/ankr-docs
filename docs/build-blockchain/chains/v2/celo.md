---
Title: Celo RPC
id: celo
---

# Celo RPC

**Celo** is a mobile-first blockchain designed to make decentralized financial (DeFi) tools and services accessible to anyone with a mobile phone.

Celo is a layer 1 protocol and blockchain platform. The Celo Mainnet is entirely separate from the Ethereum network. The Celo client originated as a fork of Ethereum Go language client, [go-ethereum](https://github.com/ethereum/go-ethereum) (or geth). Celo has several significant differences, including a proof-of-stake based PBFT consensus mechanism. 

All the cryptoassets on Celo have ERC-20 compliant interfaces, meaning that while they are not ERC-20 tokens on the Ethereum Mainnet, all familiar tooling and code that support ERC-20 tokens can be easily adapted for Celo assets, including the Celo Native Asset (CELO) and the Celo Dollar (cUSD).

## Quick links

[**Celo**](https://celo.org)

[**Docs**](https://docs.celo.org/)

[**Github**](https://github.com/celo-org)

---

## Connect wallet

You can set up your **MetaMask wallet** to connect to Celo RPC. You can then perform transactions and interact with the network.

### Get started

1. Open your **Metamask Extension** and click the '_**Network**_' drop down menu at the top.
2. Select '_**Custom RPC**_'.
3. Enter the settings for the required project as follows in the table below:



| **Chain** | **Custom RPC Category** | **Details**                                            |
| --------- | ----------------------- | ------------------------------------------------------ |
| Celo      | NETWORK NAME:           | Celo RPC                                               |
|           | NEW RPC URL:            | https://rpc.ankr.com/celo/                             |
|           | CHAIN ID:               | 42220                                                  |
|           | SYMBOL:                 | CELO                                                   |
|           | BLOCK EXPLORER URL:     | [https://explorer.celo.org](https://explorer.celo.org) |

## Integrate code

### web3 library

- **clientVersion**

Returns the current client version.

#### Example request

```js
curl https://rpc.ankr.com/celo \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}'
```

#### Example response

```js
{"jsonrpc":"2.0","id":1,"result":"celo/v1.5.2-stable-1bd6b188/linux-amd64/go1.17.3"}
```

### net library

- **net_version**

Returns the current network id.

#### Example request

```js
  
  curl https://rpc.ankr.com/celo\
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"net_version","params":[],"id":67}'
```

#### Example response

```js
{"jsonrpc":"2.0","id":67,"result":"42220"}
```

### eth library

#### Example request

```js

curl https://rpc.ankr.com/celo \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":67}'
```

#### Example response

```js
{"jsonrpc":"2.0","id":67,"result":"0xb63607"}
```

