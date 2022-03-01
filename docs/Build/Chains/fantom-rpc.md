---
Title: Fantom
id: fantom
---

# Fantom RPC

**Fantom** is a secure platform to build DApps. It is fully permissionless and open-source. Powered by Fantom’s aBFT consensus algorithm, it leverages its speed to produce real-world applications with no risks of congestion or long confirmation times. The Fantom Opera mainnet is compatible with the Ethereum Virtual Machine (EVM) and provides full smart contracts support through Solidity.

## Quick Links

[**Fantom**](https://www.fantom.foundation)

[**Docs**](https://docs.fantom.foundation)

[**Github**](https://github.com/Fantom-Foundation)

# Integrate Wallet

You can set up your **MetaMask wallet** to connect to Fantom RPC. You can then perform transactions and interact with the network.

### Get Started

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


# Integrate CLI

## Fantom

## web3

clientVersion

```
https://rpc.ankr.com/fantom
```

Returns the current client versions

### Parameters

none

### Returns

`String` - The current client version

#### HEADERS

**Content-Type** application/json

**BODY** raw

```json
{
	"jsonrpc":"2.0",
	"method":"web3_clientVersion",
	"params":[],
	"id":1
} 
```

### Example Request

### Example Request

```
curl https://rpc.ankr.com/fantom \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}'
```

### Example Response

```javascript
{"jsonrpc":"2.0","id":1,"result":"v0.7.2-rc.1"}
```
