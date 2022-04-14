---
Title: Ethereum RPC
id: ethereum
---

# Ethereum RPC

**Ethereum** is a decentralized, open-source blockchain with smart contract functionality. **Ether** (**ETH**) is the native cryptocurrency of the platform.&#x20;

The Ethereum network is one of the most popular platforms for building dApps and blockchain solutions. A series of upgrades are currently taking place as part of the transition from **Proof-of-Work** to a **Proof-of-Stake** consensus model. This shift allows network participants to stake ETH and earn rewards for supporting the network.&#x20;

## Quick links

​[**Ethereum**](https://ethereum.org/en/developers/)

[**Docs**](https://ethereum.org/en/developers/docs/apis/json-rpc/)

[**Github**](https://github.com/ethereum/eth1.0-apis)


---

## Connect wallet

You can set up your **MetaMask wallet** to connect to Ethereum RPC. You can then perform transactions and interact with the network.

### Get started

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


## Integrate code

### web3 library

- **clientVersion**

Returns the current client version

#### Example request

```js
curl https://rpc.ankr.com/eth \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67}'
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
  
  curl https://rpc.ankr.com/eth \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"net_version","params":[],"id":67}'
```

#### Example response

```js
{"jsonrpc":"2.0","id":67,"result":"1"}
```

"1": Ethereum Mainnet

"2": Morden Testnet (deprecated)

"3": Ropsten Testnet

"4": Rinkeby Testnet

"42": Kovan Testnet

### eth library

### Example request

```js

curl https://rpc.ankr.com/eth \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":67}'
```

### Example response

```js
{"jsonrpc":"2.0","id":67,"result":"0xdb85e4"}
```


