---
Title: Harmony RPC
id: harmony
---

# Harmony RPC

**Harmony** is a powerful EVM compatible blockchain with sharding and staking features. 

Developing on Harmony should be familiar for Ethereum developers, as it is fully Ethereum compatible and inherits almost all the tools and libraries from Ethereum, like truffle, remix, web3js, etc.

## Quick links

[**Harmony**](https://www.harmony.one/)

[**Docs**](https://docs.harmony.one/home/)

[**Github**](https://github.com/harmony-one)

---

## Connect wallet

You can set up your **MetaMask wallet** to connect to Celo RPC. You can then perform transactions and interact with the network.

### Get started

1. Open your **Metamask Extension** and click the '_**Network**_' drop down menu at the top.
2. Select '_**Custom RPC**_'.
3. Enter the settings for the required project as follows in the table below:



| **Chain** | **Custom RPC Category** | **Details**                                            |
| --------- | ----------------------- | ------------------------------------------------------ |
| Celo      | NETWORK NAME:           | Harmony RPC                                              |
|           | NEW RPC URL:            | https://rpc.ankr.com/harmony/                             |
|           | CHAIN ID:               | 1666600000 (shard 0)                                                 |
|           | SYMBOL:                 | ONE                                                   |
|           | BLOCK EXPLORER URL:     | [https://explorer.harmony.one/](https://explorer.harmony.one/) |

## Integrate code

All requests follow the standard JSON-RPC format and include 4 variables in the data object:

|  Request Data Object | Example  | Purpose  |   
|---     |---|---|
|Jsonrpc  | "2.0"  |  Specifies version number |   
|Method | "hmy_getBalance"  |  Method to be called server-side |  
|Params |["0xD7Ff...24Cf2d", "latest"]|Parameters for method call|

### Key Differences between Harmony and Ethereum

1. The prefix of RPC calls is different - '**hmy**' for API v1 or '**hmyv2**' for API v2 is used instead of '**eth**'. 

2. Address format - Harmony uses `bech32` address format with `one1` prefix. The Ethereum style hex address can also be used. For example: one1pdv9lrdwl0rg5vglh4xtyrv3wjk3wsqket7zxy bech32 address is equivalent to 0x0B585F8DaEfBC68a311FbD4cB20d9174aD174016 hex address. A 1uick way to convert between formats is using the explorer: [https://explorer.harmony.one/#/address/one1pdv9lrdwl0rg5vglh4xtyrv3wjk3wsqket7zxy](https://explorer.harmony.one/#/address/one1pdv9lrdwl0rg5vglh4xtyrv3wjk3wsqket7zxy). The top shows "Address Format" ONE | ETH options.

3. Harmony transactions are encoded using RLP with two additional fields for shard ids.  The purpose of RLP (Recursive Length Prefix) is to encode arbitrarily nested arrays of binary data. It is the main encoding method used to serialize objects in Ethereum.

`rlp` takes a String, `int` or `List` and returns an RLP encoded `Uint8List` with two additional fields to represent from and to shard ids (`shardID` and `toShardID`)

### web3 library

- **clientVersion**

Returns the current client version.

#### Example request

```bash
curl https://rpc.ankr.com/harmony \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}'
```

#### Example response

```js
{"jsonrpc":"2.0","id":1,"result":"Harmony (C) 2020. harmony, version v7331-v4.3.4-0-g4ea9072e (runner@ 2022-01-31T03:01:13+0000)"}
```

### net library

- **net_version**

Returns the current network id.

#### Example request

```bash
  
  curl https://rpc.ankr.com/harmony\
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"net_version","params":[],"id":67}'
```

#### Example response

```js
{"jsonrpc":"2.0","id":67,"result":"1666600000"}
```

### eth library 

Harmony fully supports most **eth_** calls in a slightly different way. For example, it uses **hmyv2_** instead of **eth_**.

Below are some example requests. You can also [View the full Harmony APIv2 Documentation](https://api.hmny.io/?version=latest#intro).  

#### Example request

Get current block number

```bash
curl https://rpc.ankr.com/harmony\
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"hmyv2_blockNumber","params":[],"id": 1}'
```

#### Example response

```bash
{"jsonrpc":"2.0","id":1,"result":25548421}
```

