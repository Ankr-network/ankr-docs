# BNB Smart Chain

**BNB Smart Chain** is an EVM compatible chain designed to work alongside Binance Chain. 

As well as EVM compatibility, BNB Smart Chain adds smart contract functionality to the chain. The dual-chain architecture alongside Binance Chain enables sending and receiving of BNB and BEP2 tokens cross-chain.

EVM-compatibility permits support for Ethereum tools and DApps.

---

## Connect wallet

You can set up your **MetaMask wallet** to connect to BNB Chain RPC. You can then perform transactions and interact with the network.

1. Open your **Metamask Extension** and click the '**Network**' drop down menu at the top.
2. Select '**Custom RPC**'.
3. Enter the settings for the required project as follows in the table below:

|    Chain    | Custom RPC Category |                       Details                        |
|:-----------:|:-------------------:|:----------------------------------------------------:|
| BNB Chain   |    NETWORK NAME:    |                     BNB Chain RPC                    |
|             |    NEW RPC URL:     | [https://rpc.ankr.com/bsc](https://rpc.ankr.com/bsc) |
|             |      CHAIN ID:      |                          56                          |
|             |       SYMBOL:       |                         BNB                          |
|             |   BLOCK EXPLORER:   |      [https://bscscan.com](https://bscscan.com)      |



## Integrate code

### web3 library

- **clientVersion**

Returns the current client version.

#### Example request

```
curl https://rpc.ankr.com/bsc \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}'
```

#### Example response

```
{"jsonrpc":"2.0","id":1,"result":"Geth/v1.1.7-74f6b613/linux-amd64/go1.16.10"}
```

### net library

- **net_version**

Returns the current network id.


#### Example request

```
  
  curl https://rpc.ankr.com/bsc \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"net_version","params":[],"id":67}'
```

#### Example response

```
{"jsonrpc":"2.0","id":67,"result":"56"}
```

### eth library

### Example request

```

curl https://rpc.ankr.com/bsc \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":67}'
```

### Example response

```
{"jsonrpc":"2.0","id":67,"result":"0xf50e1c"}
```



