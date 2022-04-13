---
title: Code integration
id: avax-code
---


## Avalanche

## web3 library

:::info web3_
web3_clientVersion
web3_sha3
:::

![](@site/static/img/post.png)
clientVersion

```
https://rpc.ankr.com/avalanche
```

### Example Request

```shell
curl https://rpc.ankr.com/avalanche \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}'
```

### Example Response

```javascript
{"jsonrpc":"2.0","id":1,"result":"v0.7.2-rc.1"}
```

## net library

:::info net_
net_version
net_listening
net_peerCount

:::



```
https://rpc.ankr.com/avalanche
```

Returns the current client versions

### Parameters

none

### Returns

`String` - The current client version

`"1"`: Ethereum Mainnet

`"2"`: Morden Testnet (deprecated)

`"3"`: Ropsten Testnet

`"4"`: Rinkeby Testnet

`"42"`: Kovan Testnet



### HEADERS

**Content-Type**  application/json

### **BODY **raw

```json
{
	"jsonrpc":"2.0",
	"method":"net_version",
	"params":[],
	"id":67
}
```

### Example Request

```shell
  
  curl https://rpc.ankr.com/avalanche \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"net_version","params":[],"id":67}'
```

### Example Response

```javascript
{"jsonrpc":"2.0","id":67,"result":"1"}
```

## eth library

Avalanche supports the same API calls as Geth API.
[Check out standard **eth_ calls**](https://documenter.getpostman.com/view/4117254/ethereum-json-rpc/RVu7CT5J?version=latest#dd57ef90-f990-037e-5512-4929e7280d7c) 

In addition, Avalanche supports the following calls. 

:::info Avalanche eth_calls
*eth_getAssetBalance* Retrieves the balance of 1st class Avalanche Native Tokens.
*eth_getBalance* Retrieves AVAX balance
*eth_baseFee* Retrieves base fee for the next block
*eth_maxPriorityFeePerGas* Gets the priority fee to be included in a block
:::

### Example Request

```
curl -X POST --data '{
>     "jsonrpc": "2.0",
>     "method": "eth_getAssetBalance",
>     "params": [
>         "0x8723e5773847A4Eb5FeEDabD9320802c5c812F46",
>         "latest",
>         "3RvKBAmQnfYionFXMfW5P8TDZgZiogKbHjM8cjpu16LKAgF5T"
>     ],
>     "id": 1
> }' -H 'content-type:application/json;' https://rpc.ankr.com/avalanche
```

### Example Response

```
{"jsonrpc":"2.0","id":1,"result":"0x0"}
```

:::caution NOTE
Avalanche specific API endpoints are NOT supported
:::



