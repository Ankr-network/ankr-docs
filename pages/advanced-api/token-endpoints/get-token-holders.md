import { Tabs, Tab } from "nextra-theme-docs";

# `ankr_getTokenHolders`

> **Retrieves data on token holders.** 

Retrieves holders and the associated metadata of the tokens specified.

### Request

Build your request using the parameters below.

#### Parameters

* `id` (int64; required): a request ID (example: 1).
* `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
* `method` (string; required): a method used for the request.
* `params` (object): the data object containing request body parameters:

  * `blockchain` (string; required): either of the supported chains (`eth`, `bsc`, `fantom`, `avalanche`, `polygon`, `arbitrum`, `syscoin`, `optimism`).
  * `contractAddress` (string): a contract address of the tokens collection; supports the Ethereum Name Service (ENS).
  * `pageSize` (int32): a number of results you'd like to get.
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
  "method": "ankr_getTokenHolders",
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

Returns holders, holders number, and holders metadata of the tokens specified by request body parameters.

#### Parameters

See the response parameters' data model in [Swagger](https://sanjose.api.ankrscan.io/docs/#/default/ankr_getTokenHolders).

### Code Examples

#### Request

```shell
curl --location --request POST 'https://rpc.ankr.com/multichain' \
--header 'Content-Type: application/json' \
--header 'X-API-KEY: {{KEY}}' \
--data-raw '{
    "jsonrpc": "2.0",
    "method": "ankr_getTokenHolders",
    "params": {
        "blockchain": "bsc",
        "contractAddress": "0xf307910A4c7bbc79691fD374889b36d8531B08e3",
        "pageSize": 3,
        "pageToken": "4jQWQp56mXWuw2qPBV3PNcHc187va4ip31eF58pFGmXzRuz5nMM1KjV7Ykcr7fM5yJVQB8rgjp9cJXfwrX"
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
    "holders": [
      {
        "balance": "string",
        "balanceRawInteger": "string",
        "holderAddress": "string"
      }
    ],
    "holdersCount": 0,
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
        "blockchain": "bsc",
        "contractAddress": "0xf307910a4c7bbc79691fd374889b36d8531b08e3",
        "tokenDecimals": 18,
        "holders": [
            {
                "holderAddress": "0x000000000081105ffd4392520dd13c4c70d95d19",
                "balance": "1.905460638097497318",
                "balanceRawInteger": "1905460638097497318"
            },
            {
                "holderAddress": "0x00000000008bef34003b59bed4c4c0f6f1543928",
                "balance": "0.000000000000000001",
                "balanceRawInteger": "1"
            },
            {
                "holderAddress": "0x0000000000a56e8a4c7fe801704809098b36f825",
                "balance": "0.000000000000000001",
                "balanceRawInteger": "1"
            }
        ],
        "holdersCount": 30370,
        "nextPageToken": "4jQWQp56mXWuw2qPBV3PNcHc187va4ip31eF58pFGmXzRuz5nMM1KjV7YkdWZPVsubrETfAhkQbZD84gco"
    }
}
```
  </Tab>
</Tabs>
