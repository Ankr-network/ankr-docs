---
title: Query API
id: query-api
---

# Query API Methods

Query API Methods serve to request info on the ranges of blocks (max range is 100) for a full list of block metadata.

## `ankr_getBlocks`

Gets full information for the block specified by request parameters.

### Request

#### Parameters

* `id` (int64; required): a request ID (example: 1).
* `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
* `method` (string; required): a method used for the request.
* `params` (object): the data object containing request body parameters:

  * `blockchain` (string; required): either of the supported chains (`eth`, `bsc`, `fantom`, `avalanche`, `polygon`, `arbitrum`, `syscoin`, `optimism`).
  * `decodeLogs` (boolean): set to `true` to decode logs, or to `false` if you don't need this kind of info.
  * `decodeTxData` (boolean): set to `true` to decode transaction data, or to `false` if not interested in it.
  * `descOrder` (boolean): choose data order, either descending (if `true`) or ascending (if `false`).
  * `fromBlock` (uint64): the first block of the range.
  * `toBlock` (uint64): the last block included in the range.
  * `includeLogs` (boolean): set to `true` to include logs, or to `false` to exclude them. Note that logs are stored inside transactions, so make sure the following parameter is also set to `true` if you'd like to include logs.
  * `includeTxs` (boolean): set to `true` to include transactions, or to `false` to exclude them.

<Tabs>
<TabItem value="getBlocksRange" label="Body">

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "ankr_getBlocks",
  "params": {
    "blockchain": "string",
    "decodeLogs": true,
    "decodeTxData": true,
    "descOrder": true,
    "fromBlock": 0,
    "includeLogs": true,
    "includeTxs": true,
    "toBlock": 0
  }
}
```

</TabItem>
<TabItem value="shell" label="Headers">

```shell
Content-Type: application/json
```

</TabItem>
</Tabs>

### Response

#### Parameters

See the response parameters' data model in Swagger.

### Code Examples

#### Request

```shell
curl -X 'POST' \
  'https://rpc.ankr.com/multichain' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "ankr_getBlocks",
  "params": {
    "blockchain": "string",
    "decodeLogs": true,
    "decodeTxData": true,
    "descOrder": true,
    "fromBlock": 9509443,
    "includeLogs": true,
    "includeTxs": true,
    "toBlock": 9509444
  }
}'
```

#### Response

Code: 200 OK

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="getBlocksRange_response" label="Schema">

```json
{
  "error": {},
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "blocks": [
      {
        "blockchain": "string",
        "difficulty": "string",
        "extraData": "string",
        "gasLimit": "string",
        "gasUsed": "string",
        "hash": "string",
        "logsBloom": "string",
        "miner": "string",
        "mixHash": "string",
        "nonce": "string",
        "number": "string",
        "parentHash": "string",
        "receiptsRoot": "string",
        "sha3Uncles": "string",
        "size": "string",
        "stateRoot": "string",
        "timestamp": "string",
        "totalDifficulty": "string",
        "transactions": [
          {
            "blockHash": "string",
            "blockNumber": "string",
            "blockchain": "string",
            "contractAddress": "string",
            "cumulativeGasUsed": "string",
            "from": "string",
            "gas": "string",
            "gasPrice": "string",
            "gasUsed": "string",
            "hash": "string",
            "input": "string",
            "logs": [
              {
                "address": "string",
                "blockHash": "string",
                "blockNumber": "string",
                "data": "string",
                "event": {
                  "anonymous": true,
                  "id": "string",
                  "inputs": [
                    {
                      "indexed": true,
                      "name": "string",
                      "size": 0,
                      "type": "string",
                      "valueDecoded": "string"
                    }
                  ],
                  "name": "string",
                  "signature": "string",
                  "string": "string",
                  "verified": true
                },
                "logIndex": "string",
                "removed": true,
                "topics": [
                  "string"
                ],
                "transactionHash": "string",
                "transactionIndex": "string"
              }
            ],
            "logsBloom": "string",
            "method": {
              "id": "string",
              "inputs": [
                {
                  "name": "string",
                  "size": 0,
                  "type": "string",
                  "valueDecoded": "string"
                }
              ],
              "name": "string",
              "signature": "string",
              "string": "string",
              "verified": true
            },
            "nonce": "string",
            "r": "string",
            "s": "string",
            "status": "string",
            "timestamp": "string",
            "to": "string",
            "transactionHash": "string",
            "transactionIndex": "string",
            "type": "string",
            "v": "string",
            "value": "string"
          }
        ],
        "transactionsRoot": "string",
        "uncles": [
          "string"
        ]
      }
    ]
  }
}
```

</TabItem>
<TabItem value="getBlocksRange_example" label="Example">

```json

```

</TabItem>
</Tabs>

---

## `ankr_getLogs`

Gets history data for the blocks specified by request parameters.

### Request

#### Parameters

* `id` (int64; required): a request ID (example: 1).
* `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
* `method` (string; required): a method used for the request.
* `params` (object): the data object containing request body parameters:

  * `blockchain` (string): a chain or a combination of chains to query:
     * Single chain: `eth`, `bsc`, `fantom`, `avalanche`, `polygon`, `arbitrum`, `syscoin`, `optimism`.
     * Chains combination: `[eth, polygon, bsc]`.
     * All chains: leave the value empty to query all the chains available.
  * `decodeLogs` (boolean): set to `true` to decode logs, or to `false` if you don't need this kind of info.
  * `descOrder` (boolean): choose data order, either descending (if `true`) or ascending (if `false`).
  * `fromBlock` (string): the first block of the range.
  * `fromTimestamp` (uint64): the first timestamp of the range.
  * `pageSize` (string): a number of results you'd like to get.
  * `pageToken` (string): a token is provided at the end of the response body and can be referenced in the request to fetch the next page.
  * `toBlock` (string): the last block included in the range.
  * `toTimestamp` (uint64): the last timestamp of the range.
  * `address` (uint8): an address of the contract created the logs. 
  * `topics` (uint8): the data the log contains.

<Tabs>
<TabItem value="getLogs" label="Body">

```json
{
    "jsonrpc": "2.0",
    "method": "ankr_getLogs",
    "params": {
        "blockchain": "eth",
        "fromBlock": "0xdaf6b1", 
        "toBlock": 14350010,
        "address": ["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"],
        "topics": [
            [],
            [
                "0x000000000000000000000000def1c0ded9bec7f1a1670819833240f027b25eff"
            ]
        ]
    },
    "id": 1
}
```

</TabItem>
<TabItem value="shell" label="Headers">

```shell
Content-Type: application/json
```

</TabItem>
</Tabs>

### Response

#### Parameters

See the response parameters' data model in Swagger.

### Code Examples

#### Request

```shell
curl --location --request POST 'https://rpc.ankr.com/multichain' \
--header 'Content-Type: application/json' \
--data-raw '{
    "jsonrpc": "2.0",
    "method": "ankr_getLogs",
    "params": {
        "blockchain": "eth",
        "fromBlock": "0xdaf6b1", // hex, decimal, "earliest", "latest" are supported
        "toBlock": 14350010, // hex, decimal, "earliest", "latest" are supported
        "address": ["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"], // hex or array of hexes are supported
        "topics": [
            [],
            [
                "0x000000000000000000000000def1c0ded9bec7f1a1670819833240f027b25eff"
            ]
        ]
    },
    "id": 1
}'
```

#### Response

Code: 200 OK

<Tabs>
<TabItem value="getLogs_response" label="Schema">

```json
{
  "error": {},
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "logs": [
      {
        "address": "string",
        "blockHash": "string",
        "blockNumber": "string",
        "data": "string",
        "event": {
          "anonymous": true,
          "id": "string",
          "inputs": [
            {
              "indexed": true,
              "name": "string",
              "size": 0,
              "type": "string",
              "valueDecoded": "string"
            }
          ],
          "name": "string",
          "signature": "string",
          "string": "string",
          "verified": true
        },
        "logIndex": "string",
        "removed": true,
        "topics": [
          "string"
        ],
        "transactionHash": "string",
        "transactionIndex": "string"
      }
    ],
    "nextPageToken": "string"
  }
}
```

</TabItem>
<TabItem value="getLogs_example" label="Example">

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "logs": [
      {
        "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        "topics": [
          "0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c",
          "0x000000000000000000000000def1c0ded9bec7f1a1670819833240f027b25eff"
        ],
        "data": "0x00000000000000000000000000000000000000000000000006ce16d63d3e98d5",
        "blockNumber": "0xdaf6b1",
        "transactionHash": "0xa00481485db1092529a3502bd8027e0a85a7eff1ecc17d4adae5b38a2ba33ba1",
        "transactionIndex": "0x1",
        "blockHash": "0xdd6a92a8d1436f97e6d3c33154805156b92b59f2cfef3f3fa390ba49643f09e8",
        "logIndex": "0x0",
        "removed": false
      },
      {
        "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        "topics": [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x000000000000000000000000def1c0ded9bec7f1a1670819833240f027b25eff",
          "0x00000000000000000000000092f0b57e3814e4bd74ef6a6fd6d825db522ccfe2"
        ],
        "data": "0x00000000000000000000000000000000000000000000000006ce16d63d3e98d5",
        "blockNumber": "0xdaf6b1",
        "transactionHash": "0xa00481485db1092529a3502bd8027e0a85a7eff1ecc17d4adae5b38a2ba33ba1",
        "transactionIndex": "0x1",
        "blockHash": "0xdd6a92a8d1436f97e6d3c33154805156b92b59f2cfef3f3fa390ba49643f09e8",
        "logIndex": "0x2",
        "removed": false
      },
      {
        "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        "topics": [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x000000000000000000000000def1c0ded9bec7f1a1670819833240f027b25eff",
          "0x000000000000000000000000d42bd36302f33d77cbb080ad7e0434f6bedc9a44"
        ],
        "data": "0x000000000000000000000000000000000000000000000000081e9d8d247e8a1d",
        "blockNumber": "0xdaf6b3",
        "transactionHash": "0x9b196e7b81c1aeed1c2bbe3d65c411a6eaecc21ddf5bd7c34141e88577384d4d",
        "transactionIndex": "0x3",
        "blockHash": "0xa48f22823710329ad512e3ffc0378a2cc15abda153af23dd6361d58ab190cdb1",
        "logIndex": "0x22",
        "removed": false
      }
    ]
  }
}
```

</TabItem>
</Tabs>

---

## `ankr_getTransactionsByHash`

Returns transaction details for a transaction specified by hash.

### Request

#### Parameters

* `id` (int64; required): a request ID (example: 1).
* `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
* `method` (string; required): a method used for the request.
* `params` (object): the data object containing request body parameters:

  * `transactionHash` (string): a hash of the transactions you'd like to request the details for.
  * `decodeLogs` (boolean): set to `true` to decode logs, or to `false` if you don't need this kind of info.
  * `decodeTxData` (boolean): set to `true` to decode transaction data, or to `false` if not interested in it.
  * `includeLogs` (boolean): set to `true` to include logs, or to `false` to exclude them.

<Tabs>
<TabItem value="getTransactionsByHash" label="Body">

```json
{
    "jsonrpc": "2.0",
    "method": "ankr_getTransactionsByHash",
    "params": {
        "transactionHash": "0x82c13aaac6f0b6471afb94a3a64ae89d45baa3608ad397621dbb0d847f51196f",
        "decodeLogs": true,
        "decodeTxData": true
    },
    "id": 1
}
```

</TabItem>
<TabItem value="shell" label="Headers">

```shell
Content-Type: application/json
```

</TabItem>
</Tabs>

### Response

Returns all transactions' metadata for the hash specified in request body. 

#### Parameters

See the response parameters' data model in Swagger.

### Code Examples

#### Request

```shell
curl --location -g --request POST 'https://rpc.ankr.com/multichain' \
--header 'Content-Type: application/json' \
--data-raw '{
    "jsonrpc": "2.0",
    "method": "ankr_getTransactionsByHash",
    "params": {
        "transactionHash": "0x82c13aaac6f0b6471afb94a3a64ae89d45baa3608ad397621dbb0d847f51196f",
        "decodeLogs": true,
        "decodeTxData": true
    },
    "id": 1
}'
```

#### Response

Code: 200 OK

<Tabs>
<TabItem value="getTransactionsByHash_response" label="Schema">

```json
{
  "error": {},
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "transactions": [
      {
        "blockHash": "string",
        "blockNumber": "string",
        "blockchain": "string",
        "contractAddress": "string",
        "cumulativeGasUsed": "string",
        "from": "string",
        "gas": "string",
        "gasPrice": "string",
        "gasUsed": "string",
        "hash": "string",
        "input": "string",
        "logs": [
          {
            "address": "string",
            "blockHash": "string",
            "blockNumber": "string",
            "data": "string",
            "event": {
              "anonymous": true,
              "id": "string",
              "inputs": [
                {
                  "indexed": true,
                  "name": "string",
                  "size": 0,
                  "type": "string",
                  "valueDecoded": "string"
                }
              ],
              "name": "string",
              "signature": "string",
              "string": "string",
              "verified": true
            },
            "logIndex": "string",
            "removed": true,
            "topics": [
              "string"
            ],
            "transactionHash": "string",
            "transactionIndex": "string"
          }
        ],
        "logsBloom": "string",
        "method": {
          "id": "string",
          "inputs": [
            {
              "name": "string",
              "size": 0,
              "type": "string",
              "valueDecoded": "string"
            }
          ],
          "name": "string",
          "signature": "string",
          "string": "string",
          "verified": true
        },
        "nonce": "string",
        "r": "string",
        "s": "string",
        "status": "string",
        "timestamp": "string",
        "to": "string",
        "transactionHash": "string",
        "transactionIndex": "string",
        "type": "string",
        "v": "string",
        "value": "string"
      }
    ]
  }
}
```

</TabItem>
<TabItem value="getTransactionsByHash_example" label="Example">

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "transactions": [
            {
                "v": "0x94",
                "r": "0xc3adcd90cbf2ef2870c0b7b5497e3c8a5757aadcc152ec1156804082c3269451",
                "s": "0x1c12681bee4a75a7514f4251bcb4a0243bfc70de998f5c77d87aedc56bce85fc",
                "nonce": "0x1615d",
                "from": "0x64aa6f93e0e1f49ff4958990c40d4bf17dafc0eb",
                "gas": "0x5cc60",
                "gasPrice": "0x1c3802ec80",
                "input": "0x1d3ec0d600000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000052b2e13cc84f2c000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000052b7ce5e6080a4eaee3fd000000000000000000000000000000000000000000052aed9671d3df9df54b80000000000000000000000000010ed43c718714eb63d5aa57b78b54704e256024e0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000002043c3f900000000000000000000000000000000000000000000000000000000310ff2d6",
                "blockNumber": "0xd02cf7",
                "to": "0x98767abab06e45a181ab73ae4cd0fecd0fbd0cd0",
                "transactionIndex": "0x0",
                "blockHash": "0x7c4b9b19b521795a0a99c925d4a03079aca26f14cb7bc1400d0183a5adf56ac1",
                "value": "0x0",
                "type": "0x0",
                "contractAddress": null,
                "cumulativeGasUsed": "0x176b2",
                "gasUsed": "0x176b2",
                "logs": [
                    {
                        "address": "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
                        "topics": [
                            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                            "0x00000000000000000000000098767abab06e45a181ab73ae4cd0fecd0fbd0cd0",
                            "0x00000000000000000000000058f876857a02d6762e0101bb5c46a8c1ed44dc16"
                        ],
                        "data": "0x0000000000000000000000000000000000000000000000047e678c2df911bc30",
                        "blockNumber": "0xd02cf7",
                        "transactionHash": "0x82c13aaac6f0b6471afb94a3a64ae89d45baa3608ad397621dbb0d847f51196f",
                        "transactionIndex": "0x0",
                        "blockHash": "0x7c4b9b19b521795a0a99c925d4a03079aca26f14cb7bc1400d0183a5adf56ac1",
                        "logIndex": "0x0",
                        "removed": false,
                        "event": {
                            "name": "Transfer",
                            "inputs": [
                                {
                                    "name": "_from",
                                    "type": "address",
                                    "indexed": true,
                                    "size": 20,
                                    "valueDecoded": "0x98767abab06e45a181Ab73AE4cD0FeCd0FBD0cD0"
                                },
                                {
                                    "name": "_to",
                                    "type": "address",
                                    "indexed": true,
                                    "size": 20,
                                    "valueDecoded": "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16"
                                },
                                {
                                    "name": "_value",
                                    "type": "uint256",
                                    "indexed": false,
                                    "size": 256,
                                    "valueDecoded": "82895379195298430000"
                                }
                            ],
                            "anonymous": false,
                            "string": "event Transfer(address indexed _from, address indexed _to, uint256 _value)",
                            "signature": "Transfer(address,address,uint256)",
                            "id": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                            "verified": false
                        }
                    },
                    {
                        "address": "0xe9e7cea3dedca5984780bafc599bd69add087d56",
                        "topics": [
                            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                            "0x00000000000000000000000058f876857a02d6762e0101bb5c46a8c1ed44dc16",
                            "0x00000000000000000000000098767abab06e45a181ab73ae4cd0fecd0fbd0cd0"
                        ],
                        "data": "0x0000000000000000000000000000000000000000000008fc40ca5d0026461ddc",
                        "blockNumber": "0xd02cf7",
                        "transactionHash": "0x82c13aaac6f0b6471afb94a3a64ae89d45baa3608ad397621dbb0d847f51196f",
                        "transactionIndex": "0x0",
                        "blockHash": "0x7c4b9b19b521795a0a99c925d4a03079aca26f14cb7bc1400d0183a5adf56ac1",
                        "logIndex": "0x1",
                        "removed": false,
                        "event": {
                            "name": "Transfer",
                            "inputs": [
                                {
                                    "name": "_from",
                                    "type": "address",
                                    "indexed": true,
                                    "size": 20,
                                    "valueDecoded": "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16"
                                },
                                {
                                    "name": "_to",
                                    "type": "address",
                                    "indexed": true,
                                    "size": 20,
                                    "valueDecoded": "0x98767abab06e45a181Ab73AE4cD0FeCd0FBD0cD0"
                                },
                                {
                                    "name": "_value",
                                    "type": "uint256",
                                    "indexed": false,
                                    "size": 256,
                                    "valueDecoded": "42432180015750915169756"
                                }
                            ],
                            "anonymous": false,
                            "string": "event Transfer(address indexed _from, address indexed _to, uint256 _value)",
                            "signature": "Transfer(address,address,uint256)",
                            "id": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                            "verified": false
                        }
                    },
                    {
                        "address": "0x58f876857a02d6762e0101bb5c46a8c1ed44dc16",
                        "topics": [
                            "0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1"
                        ],
                        "data": "0x000000000000000000000000000000000000000000005f4272d9c342f8340191000000000000000000000000000000000000000000beea5069c8a189501d6059",
                        "blockNumber": "0xd02cf7",
                        "transactionHash": "0x82c13aaac6f0b6471afb94a3a64ae89d45baa3608ad397621dbb0d847f51196f",
                        "transactionIndex": "0x0",
                        "blockHash": "0x7c4b9b19b521795a0a99c925d4a03079aca26f14cb7bc1400d0183a5adf56ac1",
                        "logIndex": "0x2",
                        "removed": false,
                        "event": {
                            "name": "",
                            "inputs": [],
                            "anonymous": false,
                            "string": "",
                            "signature": "",
                            "id": "",
                            "verified": false
                        }
                    },
                    {
                        "address": "0x58f876857a02d6762e0101bb5c46a8c1ed44dc16",
                        "topics": [
                            "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822",
                            "0x00000000000000000000000010ed43c718714eb63d5aa57b78b54704e256024e",
                            "0x00000000000000000000000098767abab06e45a181ab73ae4cd0fecd0fbd0cd0"
                        ],
                        "data": "0x0000000000000000000000000000000000000000000000047e678c2df911bc30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008fc40ca5d0026461ddc",
                        "blockNumber": "0xd02cf7",
                        "transactionHash": "0x82c13aaac6f0b6471afb94a3a64ae89d45baa3608ad397621dbb0d847f51196f",
                        "transactionIndex": "0x0",
                        "blockHash": "0x7c4b9b19b521795a0a99c925d4a03079aca26f14cb7bc1400d0183a5adf56ac1",
                        "logIndex": "0x3",
                        "removed": false,
                        "event": {
                            "name": "",
                            "inputs": [],
                            "anonymous": false,
                            "string": "",
                            "signature": "",
                            "id": "",
                            "verified": false
                        }
                    },
                    {
                        "address": "0x0000000000004946c0e9f43f4dee607b0ef1fa1c",
                        "topics": [
                            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                            "0x00000000000000000000000098767abab06e45a181ab73ae4cd0fecd0fbd0cd0",
                            "0x0000000000000000000000000000000000000000000000000000000000000000"
                        ],
                        "data": "0x0000000000000000000000000000000000000000000000000000000000000003",
                        "blockNumber": "0xd02cf7",
                        "transactionHash": "0x82c13aaac6f0b6471afb94a3a64ae89d45baa3608ad397621dbb0d847f51196f",
                        "transactionIndex": "0x0",
                        "blockHash": "0x7c4b9b19b521795a0a99c925d4a03079aca26f14cb7bc1400d0183a5adf56ac1",
                        "logIndex": "0x4",
                        "removed": false,
                        "event": {
                            "name": "Transfer",
                            "inputs": [
                                {
                                    "name": "_from",
                                    "type": "address",
                                    "indexed": true,
                                    "size": 20,
                                    "valueDecoded": "0x98767abab06e45a181Ab73AE4cD0FeCd0FBD0cD0"
                                },
                                {
                                    "name": "_to",
                                    "type": "address",
                                    "indexed": true,
                                    "size": 20,
                                    "valueDecoded": "0x0000000000000000000000000000000000000000"
                                },
                                {
                                    "name": "_value",
                                    "type": "uint256",
                                    "indexed": false,
                                    "size": 256,
                                    "valueDecoded": "3"
                                }
                            ],
                            "anonymous": false,
                            "string": "event Transfer(address indexed _from, address indexed _to, uint256 _value)",
                            "signature": "Transfer(address,address,uint256)",
                            "id": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                            "verified": false
                        }
                    }
                ],
                "logsBloom": "0x0",
                "transactionHash": "0x82c13aaac6f0b6471afb94a3a64ae89d45baa3608ad397621dbb0d847f51196f",
                "hash": "0x82c13aaac6f0b6471afb94a3a64ae89d45baa3608ad397621dbb0d847f51196f",
                "status": "0x1",
                "blockchain": "bsc",
                "timestamp": "0x61c09887",
                "method": {
                    "name": "",
                    "inputs": [],
                    "string": "",
                    "signature": "",
                    "id": "",
                    "verified": false
                }
            }
        ]
    }
}
```

</TabItem>
</Tabs>
