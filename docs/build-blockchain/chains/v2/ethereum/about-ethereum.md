---
title: Overview
id: about-ethereum
---

# Ethereum

**Ethereum** is a decentralized, open-source blockchain with smart contract functionality. **Ether** (**ETH**) is the native cryptocurrency of the platform.

The Ethereum network is one of the most popular platforms for building dApps and blockchain solutions. A series of upgrades are currently taking place as part of the transition from **Proof-of-Work** to a **Proof-of-Stake** consensus model. This shift allows network participants to stake ETH and earn rewards for supporting the network.

To connect to an Ethereum node, every Ethereum Client e.g. [Geth](https://geth.ethereum.org/) or [Erigon](https://github.com/ledgerwatch/erigon) implements a JSON-RPC specification. The [Ethereum JSON-RPC Specification](https://playground.open-rpc.org/?schemaUrl=https://raw.githubusercontent.com/ethereum/eth1.0-apis/assembled-spec/openrpc.json&uiSchema%5BappBar%5D%5Bui:splitView%5D=true&uiSchema%5BappBar%5D%5Bui:input%5D=false&uiSchema%5BappBar%5D%5Bui:examplesDropdown%5D=false) is a collection of methods that all clients implement. 

The following networks are supported by Ankr. 

* Ethereum Mainnet
* Rinkeby Testnet
* Ropsten Testnet
* Goerli Testnet

## Quick links

​[**Ethereum**](https://ethereum.org/en/developers/)

[**Docs**](https://ethereum.org/en/developers/docs/apis/json-rpc/)

[**Github**](https://github.com/ethereum/eth1.0-apis)

---

## Connect wallet

You can set up your **MetaMask wallet** to connect to Ethereum RPC. You can then perform transactions and interact with the network. 


#### Example request - web3_clientVersion

This request gets the Client version being used. 

```js
curl https://rpc.ankr.com/eth \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67}'
```

#### Example response - Geth Client version

The response shows Geth Client v1.1.7-74 is used.

```js
{"jsonrpc":"2.0","id":1,"result":"Geth/v1.1.7-74f6b613/linux-amd64/go1.16.10"}
```

#### Example request - net_version

This request returns the current network id.

```js
  
  curl https://rpc.ankr.com/eth \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"net_version","params":[],"id":67}'
```

#### Example response - Ethereum Mainnet ID is returned 

```js
{"jsonrpc":"2.0","id":67,"result":"1"}
```

"1": Ethereum Mainnet

"2": Morden Testnet (deprecated)

"3": Ropsten Testnet

"4": Rinkeby Testnet

"42": Kovan Testnet

### Example request - Uses eth_ to request the latest block number

```js

curl https://rpc.ankr.com/eth \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":67}'
```

### Example response

The latest block number is returned in hex

```js
{"jsonrpc":"2.0","id":67,"result":"0xdb85e4"}
```


