---
description: Below are examples of requests that can made via the Command Line Interface
---

# Integrate CLI

## Polygon

## web3 library

<!-- ### ![](<../../../.gitbook/assets/Screenshot 2021-11-01 at 13.26.10.png>) clientVersion -->

```
https://rpc.ankr.com/polygon
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

<!-- ### ![](<../../../.gitbook/assets/Screenshot 2021-11-01 at 13.26.10.png>)peerCount -->

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

#### BODY&#x20;

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

