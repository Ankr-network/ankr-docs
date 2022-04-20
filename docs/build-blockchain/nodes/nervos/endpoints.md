---
title: Endpoints
id: endpoints
---

# Endpoints

In this section, we provide some basic examples for interacting with CKB's RPCs via CLI.
 
For more infromation on the API, read [Nervos CKB JSON-RPC docs](https://github.com/nervosnetwork/ckb/blob/master/rpc/README.md).

## sync_state

Returns sync state of this node

### Request

```
curl https://app-<YOUR-API-ENDPOINT>.hk.ankr.com \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"sync_state","params":[],"id":73}'
```

### Response

```
{
  "jsonrpc": "2.0",
  "result": {
    "best_known_block_number": "0x283431",
    "best_known_block_timestamp": "0x17ba113eb9d",
    "fast_time": "0x1c24",
    "ibd": false,
    "inflight_blocks_count": "0x0",
    "low_time": "0x4121",
    "normal_time": "0x3fec",
    "orphan_blocks_count": "0x2"
  },
  "id": 73
}
```

## get_tip_block_number

Returns the number of blocks in the longest blockchain.

### Request

```
curl --request POST 'https://app-<YOUR-API-ENDPOINT>.hk.ankr.com' \
-H 'content-type: application/json' \
-d'{
"id": 42,
"jsonrpc": "2.0",
"method": "get_tip_block_number",
"params": []
}'
```

### Response

```
{
"jsonrpc":"2.0",
"result":"0x4ff2a4",
"id":42
}
```