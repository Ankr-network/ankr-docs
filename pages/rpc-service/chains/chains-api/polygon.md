# Polygon

**Polygon**, (formerly MATIC) is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks. It aggregates scalable solutions on Ethereum supporting a multi-chain Ethereum ecosystem.

---

## Connect wallet

You can set up your **MetaMask wallet** to connect to Polygon RPC. You can then perform transactions and interact with the network.

1. Open your **Metamask Extension** and click the '_**Network**_' drop down menu at the top.
2. Select '_**Custom RPC**_'.
3. Enter the settings for the required project as follows in the table below:

|  Chain  | Custom RPC Category |                              Details                              |
|:-------:|:-------------------:|:-----------------------------------------------------------------:|
| Polygon |    NETWORK NAME:    |                            Polygon RPC                            |
|         |    NEW RPC URL:     |   [https://rpc.ankr.com/polygon](https://rpc.ankr.com/polygon)    |
|         |      CHAIN ID:      |                                137                                |
|         |       SYMBOL:       |                               MATIC                               |
   

----

## Integrate code

### web3 library

- **clientVersion**

Returns the current client version.

#### Example request

```
curl https://rpc.ankr.com/polygon \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}'
```

#### Example response

```
{"jsonrpc":"2.0","id":1,"result":"bor/v0.2.14-stable-10c4e89f/linux-amd64/go1.17.3"}
```

### net library

- **net_version**

Returns the current network id.

#### Example request

```
  
  curl https://rpc.ankr.com/polygon\
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"net_version","params":[],"id":67}'
```

#### Example response

```
{"jsonrpc":"2.0","id":67,"result":"137"}
```

### eth library

#### Example request

```

curl https://rpc.ankr.com/polygon \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":67}'
```

#### Example response

```
{"jsonrpc":"2.0","id":67,"result":"0x18be35a"}
```