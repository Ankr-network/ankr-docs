import { Tabs, Tab } from "nextra-theme-docs";

# `ankr_getAccountBalance`

> **Retrieves account balance.**

Retrieves a complete set of balance data for the account (wallet address) specified.

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
  * `pageSize` (int32): a number of results you'd like to get.
  * `pageToken` (string): the token is provided at the end of the response body and can be referenced in the request to fetch the next page.
  * `walletAddress` (string): an account address to query for balance; supports the Ethereum Name Service (ENS).

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
  "method": "ankr_getAccountBalance",
  "params": {
    "blockchain": [
      "string"
    ],
    "onlyWhitelisted": true,
    "pageSize": 0,
    "pageToken": "string",
    "walletAddress": "string"
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

Returns a complete set of balance data for the account specified in request body parameters.

#### Parameters

See the response parameters' data model in [Swagger](https://sanjose.api.ankrscan.io/docs/#/default/ankr_getAccountBalance).

### Code Examples

#### Request

```shell
curl --location --request POST 'https://rpc.ankr.com/multichain' \
--header 'Content-Type: application/json' \
--header 'X-API-KEY: {{KEY}}' \
--data-raw '{
    "jsonrpc": "2.0",
    "method": "ankr_getAccountBalance",
    "params": {
        "blockchain": "eth",
        "walletAddress": "0xfa9019df60d3c710d7d583b2d69e18d412257617"
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
    "assets": [
      {
        "balance": "string",
        "balanceRawInteger": "string",
        "balanceUsd": "string",
        "blockchain": "string",
        "contractAddress": "string",
        "holderAddress": "string",
        "thumbnail": "string",
        "tokenDecimals": 0,
        "tokenName": "string",
        "tokenPrice": "string",
        "tokenSymbol": "string",
        "tokenType": "string"
      }
    ],
    "nextPageToken": "string",
    "totalBalanceUsd": "string"
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
        "totalBalanceUsd": "4915134435857.581297310767673907",
        "assets": [
            {
                "blockchain": "eth",
                "tokenName": "Amber Token",
                "tokenSymbol": "AMB",
                "tokenDecimals": 18,
                "tokenType": "ERC20",
                "contractAddress": "0x4dc3643dbc642b72c158e7f3d2ff232df61cb6ce",
                "holderAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
                "balance": "0.0009",
                "balanceRawInteger": "900000000000000",
                "balanceUsd": "4915133942196.190757578196621746",
                "tokenPrice": "5461259935773545.286197996246384112",
                "thumbnail": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4DC3643DbC642b72C158E7F3d2ff232df61cb6CE/logo.png"
            },
            {
                "blockchain": "eth",
                "tokenName": "Tether USD",
                "tokenSymbol": "USDT",
                "tokenDecimals": 6,
                "tokenType": "ERC20",
                "contractAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
                "holderAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
                "balance": "181812.058733",
                "balanceRawInteger": "181812058733",
                "balanceUsd": "181812.058733",
                "tokenPrice": "1",
                "thumbnail": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png"
            },
            {
                "blockchain": "bsc",
                "tokenName": "Tether USD",
                "tokenSymbol": "USDT",
                "tokenDecimals": 18,
                "tokenType": "ERC20",
                "contractAddress": "0x55d398326f99059ff775485246999027b3197955",
                "holderAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
                "balance": "169752.555225093619558572",
                "balanceRawInteger": "169752555225093619558572",
                "balanceUsd": "169752.555225093619558572",
                "tokenPrice": "1",
                "thumbnail": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0x55d398326f99059fF775485246999027B3197955/logo.png"
            },
            {
                "blockchain": "bsc",
                "tokenName": "Space Protocol",
                "tokenSymbol": "SPL",
                "tokenDecimals": 18,
                "tokenType": "ERC20",
                "contractAddress": "0xfec6832ab7bea7d3db02472b64cb59cfc6f2c107",
                "holderAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
                "balance": "500",
                "balanceRawInteger": "500000000000000000000",
                "balanceUsd": "0",
                "tokenPrice": "0",
                "thumbnail": ""
            }
        ]
    }
}
```
  </Tab>
</Tabs>
