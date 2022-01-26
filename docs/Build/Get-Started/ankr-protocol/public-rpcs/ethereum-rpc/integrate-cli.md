---
description: Below are examples of requests that can made via the Command Line Interface
---

# Integrate CLI

## Ethereum

## web3 library

<!-- ### ![](<../../../.gitbook/assets/Screenshot 2021-11-01 at 13.26.10.png>) clientVersion -->

```
https://rpc.ankr.com/eth
```

Returns the current client versions

### Parameters

none

### Returns

`String` - The current client version

#### HEADERS

**Content-Type**  application/json

### **BODY **

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

<!-- ### ![](<../../../.gitbook/assets/Screenshot 2021-11-01 at 13.26.10.png>)listening -->

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

#### BODY&#x20;

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

