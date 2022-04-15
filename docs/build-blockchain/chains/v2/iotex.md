---
title: IoTex RPC
id: iotex
---

# IoTeX RPC

**IoTeX** is an EVM-compatible platform with a vision of the Internet of Trusted Things. It is a decentralized ecosystem set up to guarantee security and trust between humans and machines. Iotex supports self-sovereign users to solely own and control their devices, as well as the data and value they generate.&#x20;

## Quick links

[**IoTeX**](https://iotex.io/)

[**Docs**](https://docs.iotex.io/)

[**Github**](https://github.com/iotexproject)

---

## Integrate code

### web3 library

- **clientVersion**

Returns the current client version.

#### Example request

```js
curl https://rpc.ankr.com/iotex \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}'
```

#### Example response

```js
{"jsonrpc":"2.0","id":1,"result":"v1.6.4-rc0/go version go1.17.6 linux/amd64"}
```

### net library

- **net_version**

Returns the current network id.

#### Example request

```js
  
  curl https://rpc.ankr.com/iotex\
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"net_version","params":[],"id":67}'
```

#### Example response

```js
{"jsonrpc":"2.0","id":67,"result":"4689"}
```

### eth library

#### Example request

```js

curl https://rpc.ankr.com/iotex \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":67}'
```

#### Example response

```js
{"jsonrpc":"2.0","id":67,"result":"0xf93dc8"}
```