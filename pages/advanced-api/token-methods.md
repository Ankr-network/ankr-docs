import { Tabs, Tab } from "nextra-theme-docs";

# Token API

Token API serves to request token-related data (account balance, supported currencies, token holders, token price, etc.) across multiple EVM-compatible chains.

Token API uses only official on-chain data, leaving third parties behind. Ankr constantly scans for the on-chain transactions coming from DEXs, flagging transactions and aggregating data into accurate real-time token price feeds. This solution is crucial for the Web3 projects like marketplaces and exchanges looking for efficient ways to query accurate on-chain data for tokenized assets.

## Get Account Balance

> `ankr_getAccountBalance` — Retrieves account balance.

Retrieves all the balance data of the account specified by request body parameters.

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

Returns all the balance data for the account specified in request body parameters.

#### Parameters

See the response parameters' data model in Swagger.

### Code Examples

#### Request

```shell
curl --location --request POST 'https://rpc.ankr.com/multichain' \
--header 'Content-Type: application/json' \
--header 'X-API-KEY: {{KEY}}' \
--data-raw '{
    "jsonrpc": "2.0",
    "method": "ankr_getAccountBalances",
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

---

## Get Currencies

> `ankr_getCurrencies` — Retrieves the blockchain's currencies.

Retrieves a list of supported currencies for a given blockchain.

### Request

Build your request using the parameters below.

#### Parameters

* `id` (int64; required): a request ID (example: 1).
* `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
* `method` (string; required): a method used for the request.
* `params` (object): the data object containing request body parameters:

  * `blockchain` (string; required): either of the supported chains (`eth`, `bsc`, `fantom`, `avalanche`, `polygon`, `arbitrum`, `syscoin`, `optimism`).

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
  "method": "ankr_getCurrencies",
  "params": {
    "blockchain": "string"
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

Returns the currencies and their metadata for the blockchain specified by request body parameters.

#### Parameters

See the response parameters' data model in Swagger.

### Code Examples

#### Request

```shell
curl --location --request POST 'https://rpc.ankr.com/multichain' \
--header 'Content-Type: application/json' \
--header 'X-API-KEY: {{KEY}}' \
--data-raw '{
    "jsonrpc": "2.0",
    "method": "ankr_getCurrencies",
    "params": {
        "blockchain": "eth"
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
    "currencies": [
      {
        "address": "string",
        "blockchain": "string",
        "decimals": 0,
        "name": "string",
        "symbol": "string",
        "thumbnail": "string"
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
        "currencies": [
            {
                "blockchain": "eth",
                "address": "0xf32122561d51e891b823dec2b42f644884c1cd91",
                "name": "DeFido",
                "decimals": 9,
                "symbol": "DEFIDO",
                "thumbnail": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0x199F788DDb566B7eBB59bf35B36914F2aCdb33DE/logo.png"
            },
            {
                "blockchain": "eth",
                "address": "0x903d78ca7d892e4518586d0b64f418bd4ca9a82d",
                "name": "FK Coin",
                "decimals": 18,
                "symbol": "FK",
                "thumbnail": "https://assets.coingecko.com/coins/images/9801/large/logo.e944e891.png?1571918228"
            },
            {
                "blockchain": "eth",
                "address": "0xb1cd6e4153b2a390cf00a6556b0fc1458c4a5533",
                "name": "BNT Smart Token Relay",
                "decimals": 18,
                "symbol": "ETHBNT",
                "thumbnail": "https://assets.coingecko.com/coins/images/10664/large/ETHBNT_Relay.png?1581486882"
            },
            {
                "blockchain": "eth",
                "address": "0xd0c4bc1b89bbd105eecb7eba3f13e7648c0de38f",
                "name": "METAVERSE",
                "decimals": 9,
                "symbol": "META",
                "thumbnail": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xd0c4BC1B89BbD105EeCb7EBa3f13E7648c0De38F/logo.png"
            },
            {
                "blockchain": "eth",
                "address": "0x16b0a1a87ae8af5c792fabc429c4fe248834842b",
                "name": "Algory",
                "decimals": 18,
                "symbol": "ALG",
                "thumbnail": "https://assets.coingecko.com/coins/images/12231/large/logo-2.png?1605256312"
            },
            {
                "blockchain": "eth",
                "address": "0x26946ada5ecb57f3a1f91605050ce45c482c9eb1",
                "name": "BitcoinSoV",
                "decimals": 8,
                "symbol": "BSOV",
                "thumbnail": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x26946adA5eCb57f3A1F91605050Ce45c482C9Eb1/logo.png"
            },
            {
                "blockchain": "eth",
                "address": "0x5f236f062f16a9b19819c535127398df9a01d762",
                "name": "IPUX Token",
                "decimals": 18,
                "symbol": "IPUX",
                "thumbnail": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x5F236F062f16A9B19819c535127398dF9a01D762/logo.png"
            },
            {
                "blockchain": "eth",
                "address": "0xea7aa1edd21735a5ab05ee3e90869016191e274e",
                "name": "junca cash",
                "decimals": 18,
                "symbol": "JCC",
                "thumbnail": "https://assets.coingecko.com/coins/images/12889/large/junca.jpg?1603279160"
            },
            {
                "blockchain": "eth",
                "address": "0x13b02c8de71680e71f0820c996e4be43c2f57d15",
                "name": "Wrapped Mirror QQQ Token",
                "decimals": 18,
                "symbol": "mQQQ",
                "thumbnail": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x13B02c8dE71680e71F0820c996E4bE43c2F57d15/logo.png"
            }
        ]
    }
}
```
  </Tab>
</Tabs>

---

## Get Token Price

> `ankr_getTokenPrice` — Retrieves token price.

Retrieves a price of the token specified by request body parameters.

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

A successful request returns a USD price for the token specified by request body parameters.

#### Parameters

See the response parameters' data model in Swagger.

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
        "blockchain": "eth"
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
        "usdPrice": "1700.706696318613574431",
        "blockchain": "eth"
    }
}
```
  </Tab>
</Tabs>

---

## Get Token Holders

> `ankr_getTokenHolders` — Retrieves data on token holders. 

Retrieves holders and the associated metadata for the tokens specified by request body parameters.

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

```sh
Content-Type: application/json
X-API-KEY: {{KEY}}
```
  </Tab>
</Tabs>

### Response

Returns holders, holders number, and holders metadata for the tokens specified by request body parameters.

#### Parameters

See the response parameters' data model in Swagger.

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

---

## Get Token Holders Count

> `ankr_getTokenHoldersCount` — Retrieves the number of token holders. 

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

```sh
Content-Type: application/json
X-API-KEY: {{KEY}}
```
  </Tab>
</Tabs>

### Response

#### Parameters

See the response parameters' data model in Swagger.

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


