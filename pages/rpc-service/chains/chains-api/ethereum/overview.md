# Ethereum

Ethereum is a blockchain with a computer embedded in it. It is the foundation for building apps and organizations in a decentralized, permissionless, censorship-resistant way. Ethereum uses a [proof-of-stake-based consensus mechanism](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/).

## Connect wallet

You can set up your **MetaMask wallet** to connect to Ethereum RPC. You can then perform transactions and interact with the network. 

#### Example request - web3_clientVersion

This request gets the Client version being used. 

```
curl https://rpc.ankr.com/eth \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67}'
```

#### Example response - Geth Client version

The response shows Geth Client v1.1.7-74 is used.

```
{"jsonrpc":"2.0","id":1,"result":"Geth/v1.1.7-74f6b613/linux-amd64/go1.16.10"}
```

#### Example request - net_version

This request returns the current network id.

```
  
  curl https://rpc.ankr.com/eth \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"net_version","params":[],"id":67}'
```

#### Example response - Ethereum Mainnet ID is returned 

```
{"jsonrpc":"2.0","id":67,"result":"1"}
```

"1": Ethereum Mainnet

"2": Morden Testnet (deprecated)

"3": Ropsten Testnet

"4": Rinkeby Testnet

"42": Kovan Testnet

### Example request - Uses eth_ to request the latest block number

```

curl https://rpc.ankr.com/eth \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":67}'
```

### Example response

The latest block number is returned in hex

```
{"jsonrpc":"2.0","id":67,"result":"0xdb85e4"}
```


