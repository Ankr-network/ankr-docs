import { Tabs, Tab } from "nextra-theme-docs";

# `ankr_getLogs`

> **Retrieves the blocks' history data.**

Retrieves history data for the blocks specified.

### Request

Build your request using the parameters below.

#### Parameters

* `id` (int64; required): a request ID (example: 1).
* `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
* `method` (string; required): a method used for the request.
* `params` (object): the data object containing request body parameters:

  * `address` (uint8): an address of the contract created the logs. Supported value formats: hex or array of hexes.
  * `blockchain` (string): a chain or a combination of chains to query:
    * Single chain: `eth`, `bsc`, `fantom`, `avalanche`, `polygon`, `arbitrum`, `syscoin`, `optimism`.
    * Chains combination: `[eth, polygon, bsc]`.
    * All chains: leave the value empty to query all the chains available.
  * `decodeLogs` (boolean): set to `true` to decode logs, or to `false` if you don't need this kind of info.
  * `descOrder` (boolean): choose data order, either descending (if `true`) or ascending (if `false`).
  * `fromBlock` (string): the first block of the range. Supported value formats: hex, decimal, "earliest", "latest". 
  * `fromTimestamp` (uint64): the first timestamp of the range.
  * `pageSize` (string): a number of result pages you'd like to get.
  * `pageToken` (string): a token is provided at the end of the response body and can be referenced in the request to fetch the next page.
  * `toBlock` (string): the last block included in the range.
  * `toTimestamp` (uint64): the last timestamp of the range.
  * `topics` (uint8): the data the log contains.

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
  "method": "ankr_getLogs",
  "params": {
    "address": [
      [
        0
      ]
    ],
    "blockchain": [
      "string"
    ],
    "decodeLogs": true,
    "descOrder": true,
    "fromBlock": 0,
    "fromTimestamp": 0,
    "pageSize": 0,
    "pageToken": "string",
    "toBlock": 0,
    "toTimestamp": 0,
    "topics": [
      [
        [
          0
        ]
      ]
    ]
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

Returns history data for the blocks specified by request body parameters.

#### Parameters

See the response parameters' data model in [Swagger](https://sanjose.api.ankrscan.io/docs/#/default/ankr_getLogs).

### Code Examples

#### Request

```shell
curl --location --request POST 'https://rpc.ankr.com/multichain' \
--header 'Content-Type: application/json' \
--header 'X-API-KEY: {{KEY}}' \
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
  </Tab>
  <Tab>

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
  </Tab>
</Tabs>
