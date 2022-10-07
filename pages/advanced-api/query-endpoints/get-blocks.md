import { Tabs, Tab } from "nextra-theme-docs";

# `ankr_getBlocks`

> **Retrieves the blocks' data.**

Retrieves complete information for the block specified.

### Request

Build your request using the parameters below.

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
  </Tab>
  <Tab>

```shell
Content-Type: application/json
x-api-key: {{KEY}}
```
  </Tab>
</Tabs>

### Response

Returns complete information for the block specified by request parameters.

#### Parameters

See the response parameters' data model in [Swagger](https://sanjose.api.ankrscan.io/docs/#/default/ankr_getBlocks).

### Code Examples

#### Request

```shell
curl --location --request POST 'https://rpc.ankr.com/multichain' \
--header 'Content-Type: application/json' \
--header 'x-api-key: {{KEY}}' \
--data-raw '{
    "jsonrpc": "2.0",
    "method": "ankr_getBlocks",
    "params": {
        "blockchain": "eth",
        "fromBlock": 14500000,
        "toBlock": 14500000,
        "decodeLogs": false,
        "decodeTxData": true,
        "includeLogs": true,
        "includeTxs": true
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
    "blocks": [
      {
        "blockHash": "string",
        "blockHeight": "string",
        "blockchainLogo": "string",
        "blockchainName": "string",
        "details": {
          "ethBlock": {
            "difficulty": "string",
            "extraData": "string",
            "gasLimit": 0,
            "gasUsed": 0,
            "miner": "string",
            "nonce": "string",
            "sha3Uncles": "string",
            "size": "string",
            "stateRoot": "string",
            "totalDifficulty": "string"
          }
        },
        "parentHash": "string",
        "timestamp": "string",
        "transactionsCount": 0
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
        "blocks": [
            {
                "blockchain": "eth",
                "number": "0xdd40a0",
                "hash": "0xfeed3e175e482268db83d4fd87a43c708f40983343f4b039e582c6f6a95e0e78",
                "parentHash": "0xe311161a7462068919abe2ac2cd42e5806898b3f42ec597699ce764c067c416a",
                "nonce": "0xc5f9ce09d63baf71",
                "mixHash": "0xbd7063d27079586ab3fdae7de0472f93f96f81a0f6c5b3abe903a9c6f62cab06",
                "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
                "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
                "stateRoot": "0xbbf4fe65498447568abe945ea8f926791e491873a367c82ae847aeadf0c7e17f",
                "miner": "0xea674fdde714fd979de3edf0f56aa9716b898ec8",
                "difficulty": "0x2e032d1caff8d9",
                "extraData": "0x617369612d65617374312d34",
                "size": "0x219",
                "gasLimit": "0x1ca35d2",
                "gasUsed": "0x0",
                "timestamp": "0x6246dd9c",
                "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
                "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
                "totalDifficulty": "0x994af3a04b379bb8b42",
                "transactions": [],
                "uncles": []
            }
        ]
    }
}
```
  </Tab>
</Tabs>
