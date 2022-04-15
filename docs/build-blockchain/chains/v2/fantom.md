---
Title: Fantom
id: fantom
---

# Fantom RPC

**Fantom** is a secure platform to build DApps. It is fully permissionless and open-source. Powered by Fantom’s aBFT consensus algorithm, it leverages its speed to produce real-world applications with no risks of congestion or long confirmation times. The Fantom Opera mainnet is compatible with the Ethereum Virtual Machine (EVM) and provides full smart contracts support through Solidity.

## Quick links

[**Fantom**](https://www.fantom.foundation)

[**Docs**](https://docs.fantom.foundation)

[**Github**](https://github.com/Fantom-Foundation)

---

## Connect wallet

You can set up your **MetaMask wallet** to connect to Fantom RPC. You can then perform transactions and interact with the network.

### Get started

1. Open your **Metamask Extension** and click the '_**Network**_' drop down menu at the top.&#x20;
2. Select '_**Custom RPC**_'.&#x20;
3. Enter the settings for the required project as follows in the table below:

|  Chain | Custom RPC Category |                               Details                               |
| :----: | :-----------------: | :-----------------------------------------------------------------: |
| Fantom |    NETWORK NAME:    |                              Fantom RPC                             |
|        |     NEW RPC URL:    |      [https://rpc.ankr.com/fantom](https://rpc.ankr.com/fantom)     |
|        |      CHAIN ID:      |                                 250                                 |
|        |       SYMBOL:       |                                 FTM                                 |
|        |   BLOCK EXPLORER:   | [https://explorer.fantom.network/](https://explorer.fantom.network) |


## Integrate code

### web3 library

- **clientVersion**

Returns the current client version.

#### Example request

```js
curl https://rpc.ankr.com/fantom \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}'
```

#### Example response

```js
{"jsonrpc":"2.0","id":1,"result":"go-opera/v1.1.0-rc.3-4f960171-1645028798/linux-amd64/go1.17.7"}
```

### net library

- **net_version**

Returns the current network id.

#### Example request

```js
  
  curl https://rpc.ankr.com/fantom\
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"net_version","params":[],"id":67}'
```

#### Example response

```js
{"jsonrpc":"2.0","id":67,"result":"250"}
```

### eth library

#### Example request

```js

curl https://rpc.ankr.com/fantom \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":67}'
```

#### Example response

```js
{"jsonrpc":"2.0","id":67,"result":"0x1fe0cee"}
```