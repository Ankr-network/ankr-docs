import { Tabs, Tab } from "nextra-theme-docs";

# `ankr_getInteractions`

> **Retrieves blockchains interacted with a particular address.**

Retrieves a list of blockchains on which the address interaction was registered and manifested by the info available for the address (tokens, NFTs, transactions).

### Request

Build your request using the parameters below.

#### Parameters

* `id` (int64; required): a request ID (example: 1).
* `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
* `method` (string; required): a method used for the request.
* `params` (object): the data object containing request body parameters:

  * `address` (string): an address of the contract created the logs.

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
  "method": "ankr_getInteractions",
  "params": {
    "address": "string"
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

Returns the list of blockchains interacted with the address specified in request body parameters.

#### Parameters

See the response parameters' data model in [Swagger](https://sanjose.api.ankrscan.io/docs/#/default/ankr_getInteractions).

### Code Examples

#### Request

```shell
curl --location -g --request POST '{{URL}}' \
--header 'Content-Type: application/json' \
--header 'X-API-KEY: {{KEY}}' \
--data-raw '{
			"jsonrpc": "2.0",
			"method": "ankr_getInteractions",
			"params": {
				"address":"0xF977814e90dA44bFA03b6295A0616a897441aceC"
			},
			"id": "1"
		}
		'
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
    "blockchains": [
      "string"
    ]
  }
}
```
  </Tab>
  <Tab>

```json
{
    "jsonrpc": "2.0",
    "id": "1",
    "result": {
        "blockchains": [
            "bsc",
            "fantom",
            "polygon",
            "arbitrum",
            "optimism",
            "avalanche",
            "eth"
        ]
    }
}
```
  </Tab>
</Tabs>