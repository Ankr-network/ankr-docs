---
Title: Ethereum RPC
id: ethereum
---

# Ethereum RPC

**Ethereum** is a decentralized, open-source blockchain with smart contract functionality. **Ether** (**ETH**) is the native cryptocurrency of the platform.&#x20;

The Ethereum network is one of the most popular platforms for building dApps and blockchain solutions. A series of upgrades are currently taking place as part of the transition from **Proof-of-Work** to a **Proof-of-Stake** consensus model. This shift allows network participants to stake ETH and earn rewards for supporting the network.&#x20;

## Quick Links

​[**Ethereum**](https://ethereum.org/en/developers/)

[**Docs**](https://ethereum.org/en/developers/docs/apis/json-rpc/)

[**Github**](https://github.com/ethereum/eth1.0-apis)

# Integrate Wallet

You can set up your **MetaMask wallet** to connect to Ethereum RPC. You can then perform transactions and interact with the network.

### Get Started

1. Open your **Metamask Extension** and click the '_**Network**_' drop down menu at the top.&#x20;
2. Select '_**Custom RPC**_'.&#x20;
3. Enter the settings for the required project as follows in the table below:

| **Chain** | **Custom RPC Category** | **Details**               |
| --------- | ----------------------- | ------------------------- |
| Ethereum  | NETWORK NAME:           | Ethereum RPC              |
|           | NEW RPC URL:            | https://rpc.ankr.com/eth/ |
|           | CHAIN ID:               | 1                         |
|           | SYMBOL:                 | ETH                       |
|           | BLOCK EXPLORER URL:     | https://etherscan.io/     |


# Integrate CLI

## Ethereum

## web3 library

 clientVersion

```
https://rpc.ankr.com/eth
```

Returns the current client versions

### Parameters

none

### Returns

`String` - The current client version

#### HEADERS

**Content-Type** application/json

### BODY

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
curl https://rpc.ankr.com/eth \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}'
```

### Example Response

```javascript
{"jsonrpc":"2.0","id":1,"result":"Geth/v1.10.11-stable-7231b3ef/linux-amd64/go1.17.2"}
```

## net library

### listening

Returns `true` if client is actively listening for network connections.

```
https://rpc.ankr.com/eth
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
curl https://rpc.ankr.com/eth \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"net_listening","params":[],"id":67}'
```

### Example Response

```javascript
{"jsonrpc":"2.0","id":67,"result":true}
```
