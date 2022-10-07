import { Tabs, Tab } from "nextra-theme-docs";

# `ankr_getTokenHoldersCount`

> **Retrieves the number of token holders.** 

Retrieves the number of holders for the tokens specified by request body parameters.

### Request

Build your request using the parameters below.

#### Parameters

* `id` (int64; required): a request ID (example: 1).
* `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
* `method` (string; required): a method used for the request.
* `params` (object): the data object containing request body parameters:

  * `blockchain` (string; required): either of the supported chains (`eth`, `bsc`, `fantom`, `avalanche`, `polygon`, `arbitrum`, `syscoin`, `optimism`).
  * `contractAddress` (string): a contract address of the tokens collection; supports the Ethereum Name Service (ENS).
  * `pageSize` (string): a number of results you'd like to get.
  * `pageToken` (string): a token is provided at the end of the response body and can be referenced in the request to fetch the next page.

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
  "method": "ankr_getTokenHoldersCount",
  "params": {
    "blockchain": "string",
    "contractAddress": "string",
    "pageSize": 0,
    "pageToken": "string"
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

Returns the number of holders for the tokens specified by request body parameters.

#### Parameters

See the response parameters' data model in [Swagger](https://sanjose.api.ankrscan.io/docs/#/default/ankr_getTokenHoldersCount).

### Code Examples

#### Request

```shell
curl --location -g --request POST 'https://rpc.ankr.com/multichain' \
--header 'Content-Type: application/json' \
--header 'X-API-KEY: {{KEY}}' \
--data-raw '{
    "jsonrpc": "2.0",
    "method": "ankr_getTokenHoldersCount",
    "params": {
        "blockchain": "eth",
        "contractAddress": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        "pageSize": 10,
        "pageToken": ""
    },
    "id": 1
}'
```

#### Response

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
    "blockchain": "string",
    "contractAddress": "string",
    "holderCountHistory": [
      {
        "holderCount": 0,
        "lastUpdatedAt": "string",
        "totalAmount": "string",
        "totalAmountRawInteger": "string"
      }
    ],
    "nextPageToken": "string",
    "tokenDecimals": 0
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
        "blockchain": "eth",
        "contractAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
        "tokenDecimals": 6,
        "holderCountHistory": [
            {
                "holderCount": 4498953,
                "totalAmount": "36819785005.419766",
                "totalAmountRawInteger": "36819785005419766",
                "lastUpdatedAt": "2022-07-29T05:41:21Z"
            },
            {
                "holderCount": 4499645,
                "totalAmount": "36816222245.175462",
                "totalAmountRawInteger": "36816222245175462",
                "lastUpdatedAt": "2022-07-28T05:22:56Z"
            },
            {
                "holderCount": 4511556,
                "totalAmount": "36760965103.328572",
                "totalAmountRawInteger": "36760965103328572",
                "lastUpdatedAt": "2022-07-27T05:22:39Z"
            },
            {
                "holderCount": 4564306,
                "totalAmount": "36817771914.224166",
                "totalAmountRawInteger": "36817771914224166",
                "lastUpdatedAt": "2022-07-26T05:22:03Z"
            },
            {
                "holderCount": 4560820,
                "totalAmount": "36815806116.708002",
                "totalAmountRawInteger": "36815806116708002",
                "lastUpdatedAt": "2022-07-25T05:22:45Z"
            },
            {
                "holderCount": 4560328,
                "totalAmount": "36814914728.545481",
                "totalAmountRawInteger": "36814914728545481",
                "lastUpdatedAt": "2022-07-24T05:21:31Z"
            },
            {
                "holderCount": 4561735,
                "totalAmount": "36814752262.427647",
                "totalAmountRawInteger": "36814752262427647",
                "lastUpdatedAt": "2022-07-23T05:19:24Z"
            },
            {
                "holderCount": 4565903,
                "totalAmount": "36815223206.771204",
                "totalAmountRawInteger": "36815223206771204",
                "lastUpdatedAt": "2022-07-22T05:27:27Z"
            },
            {
                "holderCount": 4565069,
                "totalAmount": "36815746244.132796",
                "totalAmountRawInteger": "36815746244132796",
                "lastUpdatedAt": "2022-07-21T05:29:37Z"
            },
            {
                "holderCount": 4565261,
                "totalAmount": "36815212704.878653",
                "totalAmountRawInteger": "36815212704878653",
                "lastUpdatedAt": "2022-07-20T05:29:47Z"
            }
        ],
        "nextPageToken": "EmDs3EqSha2txDLQwnEiLNmpbpuiAuosQFtyMhPZS9rqnNzFp9Y5C"
    }
}
```
  </Tab>
</Tabs>
