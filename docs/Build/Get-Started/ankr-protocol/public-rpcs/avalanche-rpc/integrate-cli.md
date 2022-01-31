---
description: Below are examples of requests that can made via the Command Line Interface
---

# Integrate CLI

## Avalanche

## web3 library

<!-- ### ![](<../../../.gitbook/assets/Screenshot 2021-11-01 at 13.26.10.png>)clientVersion -->

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

<!-- ### ![](<../../../.gitbook/assets/Screenshot 2021-11-01 at 13.26.10.png>) net\_version -->

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

<!-- {% content-ref url="../../../blockchain-apis/making-requests/supported-json-rpc-methods.md" %}
[supported-json-rpc-methods.md](../../../blockchain-apis/making-requests/supported-json-rpc-methods.md)
{% endcontent-ref %} -->
