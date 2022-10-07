import { Tabs, Tab } from "nextra-theme-docs";

# `ankr_getNFTHolders`

> **Retrieves the NFT's holders data.**

Retrieves a list of holders (wallet addresses) of the NFT specified by request body parameters.

### Request

Build your request using the parameters below.

#### Parameters

* `id` (int64; required): a request ID (example: 1).
* `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
* `method` (string; required): a method used for the request.
* `params` (object): the data object containing request body parameters.

  * `blockchain` (string; required): either of the supported blockchains (`eth`, `bsc`, `fantom`, `avalanche`, `polygon`, `arbitrum`, `syscoin`, `optimism`).
  * `contractAddress` (string): a contract address of the NFT Collection; supports the Ethereum Name Service (ENS).
  * `pageSize` (integer): a number of results you'd like to get.
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
  "method": "ankr_getNFTHolders",
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
x-api-key: {{KEY}}
```
  </Tab>
</Tabs>

### Response

A successful request returns a list of holders for the NFT specified.

#### Parameters

* `id` (int64; required): a request ID (example: 1).
* `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0).
* `result` (object): the data object containing a holder of the NFT specified by request parameters:
  * `holder` (string): a list of holders.
  * `nextPageToken` (string): a token is provided at the end of the response body and can be referenced in the request to fetch the next page.

### Code Examples

#### Request

```shell
curl --location --request POST 'https://rpc.ankr.com/multichain' \
--header 'Content-Type: application/json' \
--header 'x-api-key: {{KEY}} \
--data-raw '{
    "jsonrpc": "2.0",
    "method": "ankr_getNFTHolders",
    "params": {
        "blockchain": "arbitrum",
        "contractAddress": "0xc36442b4a4522e871399cd717abdd847ab11fe88",
        "pageSize": 10,
        "pageToken": ""
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
    "holders": [
      "string"
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
        "holders": [
            "0x000000000000000000000000000000000000dEaD",
            "0x00000000000a29A0800f6F557ddbbe8249397dE7",
            "0x00000000005dbcB0d0513FcDa746382Fe8a53468",
            "0x0000000000F485A774ee60343AD3aC6D05d95Fba",
            "0x0000000813B34008A225De08a6a61835508C71f9",
            "0x00000010cfed5b9e642901Be70FE7f5C8104411e",
            "0x0000006D14cE3CF81449c3BA1f26108DF0A4de8b",
            "0x00000744009F1240f4218D6Ad4112AD257A28888",
            "0x00002B503a75998C97508916A74Fdb41934Fa030",
            "0x00005A06017eB8931b7FDAe82Bce8EB6852282b3"
        ],
        "nextPageToken": "CA9QXqcwG5vQJxibSKdvTFikDeCznM8nzB5PCHNdGjaG1cajS9XdDh2nGALCfcyNqTspvpqPPEtVV4s"
    }
}
```
  </Tab>
</Tabs>
