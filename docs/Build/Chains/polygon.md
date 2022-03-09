---
title: Polygon RPC
id: polygon
---


# Polygon RPC

**Polygon**, (formerly MATIC) is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks. It aggregates scalable solutions on Ethereum supporting a multi-chain Ethereum ecosystem.

## **Quick Links**

[**Polygon**](https://polygon.technology)

[**Docs**](https://docs.matic.network/docs/develop/getting-started/)

[**Github**](https://github.com/maticnetwork/)


---

## Connect Wallet

You can set up your **MetaMask wallet** to connect to Polygon RPC. You can then perform transactions and interact with the network.

### Get Started

1. Open your **Metamask Extension** and click the '_**Network**_' drop down menu at the top.&#x20;
2. Select '_**Custom RPC**_'.&#x20;
3. Enter the settings for the required project as follows in the table below:

|  Chain  | Custom RPC Category |                              Details                              |
| :-----: | :-----------------: | :---------------------------------------------------------------: |
| Polygon |    NETWORK NAME:    |                            Polygon RPC                            |
|         |     NEW RPC URL:    |    [https://rpc.ankr.com/polygon](https://rpc.ankr.com/polygon)   |
|         |      CHAIN ID:      |                                137                                |
|         |       SYMBOL:       |                               MATIC                               |
|         |   BLOCK EXPLORER:   | [https://explorer.matic.network/](https://explorer.matic.network) |


## Integrate Code


### web3 library

POST clientVersion

```
https://rpc.ankr.com/polygon
```

Returns the current client versions

### Parameters

none

### Returns

`String` - The current client version

#### Header

**Content-Type** application/json

#### Body

raw

```json
{
	"jsonrpc":"2.0",
	"method":"web3_clientVersion",
	"params":[],
	"id":1
} 
```

### Example Request

```bash
curl https://rpc.ankr.com/polygon \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}'
```

### Example Response

```javascript
{"jsonrpc":"2.0","id":1,"result":"bor/v1.10.8-stable-045e5c2c/linux-amd64/go1.16.3"}
```

## net library

peerCount

Returns `true` if client is actively listening for network connections.

```
https://rpc.ankr.com/polygon
```

### Parameters

none

### Returns

`Boolean` - `true` when listening, otherwise `false`.

#### HEADERS

**Content-Type** application/json

#### BODY

#### raw

### **Example Request**

```bash
curl https://rpc.ankr.com/polygon \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":67}'
```

### Example Response

```javascript
{"jsonrpc":"2.0","id":67,"result":"0xc8"}
```
