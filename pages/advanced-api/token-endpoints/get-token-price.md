import { Tabs, Tab } from "nextra-theme-docs";

# `ankr_getTokenPrice`

> **Retrieves token price.**

Retrieves a USD price of the token specified.

### Request

Build your request using the parameters below.

#### Parameters

* `id` (int64; required): a request ID (example: 1).
* `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
* `method` (string; required): a method used for the request.
* `params` (object): the data object containing request body parameters:

  * `blockchain` (string; required): either of the supported chains (`eth`, `bsc`, `fantom`, `avalanche`, `polygon`, `arbitrum`, `syscoin`, `optimism`).
  * `contractAddress` (string): a contract address of the tokens collection; supports the Ethereum Name Service (ENS).

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
  "method": "ankr_getTokenPrice",
  "params": {
    "blockchain": "string",
    "contractAddress": "string"
  }
}
```
  </Tab>
  <Tab>

```sh
Content-Type: application/json
X-API-KEY: {{KEY}}
```
  </Tab>
</Tabs>

### Response

Returns a USD price of the token specified by request body parameters.

#### Parameters

See the response parameters' data model in [Swagger](https://sanjose.api.ankrscan.io/docs/#/default/ankr_getTokenPrice).

### Code Examples

#### Request

```shell
curl --location --request POST 'https://rpc.ankr.com/multichain' \
--header 'Content-Type: application/json' \
--header 'X-API-KEY: {{KEY}}' \
--data-raw '{
    "jsonrpc": "2.0",
    "method": "ankr_getTokenPrice",
    "params": {
        "blockchain": "eth",
        "contractAddress": "0x8290333cef9e6d528dd5618fb97a76f268f3edd4"
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
    "blockchain": "string",
    "contractAddress": "string",
    "usdPrice": "string"
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
        "usdPrice": "0.031240514621682378",
        "blockchain": "eth",
        "contractAddress": "0x8290333cef9e6d528dd5618fb97a76f268f3edd4"
    }
}
```
  </Tab>
</Tabs>
