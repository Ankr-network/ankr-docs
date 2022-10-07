import { Tabs, Tab } from "nextra-theme-docs";

# `ankr_getTransactionsByHash`

> **Retrieves data for the hash-specified transaction.**

Retrieves the details for a transaction specified by hash.

### Request

Build your request using the parameters below.

#### Parameters

* `id` (int64; required): a request ID (example: 1).
* `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
* `method` (string; required): a method used for the request.
* `params` (object): the data object containing request body parameters:

  * `blockchain` (string): a chain or a combination of chains to query:
    * Single chain: `eth`, `bsc`, `fantom`, `avalanche`, `polygon`, `arbitrum`, `syscoin`, `optimism`.
    * Chains combination: `[eth, polygon, bsc]`.
    * All chains: leave the value empty to query all the chains available.
  * `transactionHash` (string): a hash of the transactions you'd like to request the details for.
  * `decodeLogs` (boolean): set to `true` to decode logs, or to `false` if you don't need this kind of info.
  * `decodeTxData` (boolean): set to `true` to decode transaction data, or to `false` if not interested in it.
  * `includeLogs` (boolean): set to `true` to include logs, or to `false` to exclude them.

<Tabs
  items={[
    "Body",
    "Headers",
  ]}
>
  <Tab>

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "ankr_getTransactionsByHash",
  "params": {
    "blockchain": [
      "string"
    ],
    "decodeLogs": true,
    "decodeTxData": true,
    "includeLogs": true,
    "transactionHash": "string"
  }
}
```
  </Tab>
  <Tab>

```shell
Content-Type: application/json
X-API-KEY: {{KEY}}
```
  </Tab>
</Tabs>

### Response

Returns all transactions' metadata for the hash specified in request body parameters. 

#### Parameters

See the response parameters' data model in [Swagger](https://sanjose.api.ankrscan.io/docs/#/default/ankr_getTransactionsByHash).

### Code Examples

#### Request

```shell
curl --location -g --request POST 'https://rpc.ankr.com/multichain' \
--header 'Content-Type: application/json' \
--header 'X-API-KEY: {{KEY}}' \
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

<Tabs
  items={[
    "Schema",
    "Example",
  ]}
>
  <Tab>

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
  </Tab>
  <Tab>

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
  </Tab>
</Tabs>
