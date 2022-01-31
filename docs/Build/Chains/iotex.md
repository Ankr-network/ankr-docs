---
title: IoTex
id: iotex
---

# IoTeX RPC

**IoTeX** is an EVM-compatible platform with a vision of the Internet of Trusted Things. It is a decentralized ecosystem set up to guarantee security and trust between humans and machines. Iotex supports self-sovereign users to solely own and control their devices, as well as the data and value they generate.&#x20;

# Integrate Code

## web3 library

clientVersion

```
https://rpc.ankr.com/iotex
```

### Example Request

```bash
curl https://rpc.ankr.com/iotex \
>   -X POST \
>   -H "Content-Type: application/json" \
>   --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}'
```

### Example Response

```javascript
{"jsonrpc":"2.0","id":1,"result":"v1.6.2-rc10/go version go1.17.5 linux/amd64"}
```
