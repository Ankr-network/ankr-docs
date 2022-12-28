import { Tabs, Tab } from "nextra-theme-docs";
import { Callout } from "components";

# Token API

<Callout>
_Token API_ is an Advanced APIs' collection of methods that comes as a unique feature along with other extensive capabilities provided to our [Premium Plan](/rpc-service/pricing-plans/) users.
</Callout>

_Token API_ serves to request token-related data (account balance, supported currencies, token holders, token price, etc.) across multiple EVM-compatible chains.

Token API uses only official on-chain data, leaving third parties behind. Ankr constantly scans for the on-chain transactions coming from DEXs, flagging transactions and aggregating data into accurate real-time token price feeds. This solution is crucial for the Web3 projects like marketplaces and exchanges looking for efficient ways to query accurate on-chain data for tokenized assets.

## Token API Methods

_Token API_ consists of the following methods to request token-related data across multiple chains:

  * [`ankr_getAccountBalance`](/advanced-api/token-methods/#ankr_getaccountbalance) — retrieves the balance of a particular account.
  * [`ankr_getCurrencies`](/advanced-api/token-methods/#ankr_getcurrencies) — retrieves info on currencies available for a particular blockchain.
  * [`ankr_getTokenPrice`](/advanced-api/token-methods/#ankr_gettokenprice) — retrieves the price of a particular token.
  * [`ankr_getTokenHolders`](/advanced-api/token-methods/#ankr_gettokenholders) — retrieves info on holders of a particular token.
  * [`ankr_getTokenHoldersCount`](/advanced-api/token-methods/#ankr_gettokenholderscount) — retrieves the number of token holders.
  * [`ankr_getTransfersByAddress`](/advanced-api/token-methods/#ankr_gettransfersbyaddress) — retrieves the transfers info by wallet address.

[//]: # (  * [`ankr_getTokenPriceHistory`]&#40;/advanced-api/token-methods/#ankr_gettokenpricehistory&#41; — retrieves the token's price history on the chain.)

## `ankr_getAccountBalance`

> **Retrieves account balance.**

Retrieves the balance of the account specified.

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
  * `onlyWhitelisted` (boolean; default: `true`): set to `true` to filter through unrecognized tokens to return account balance based on the recognized ones; set to `false` to show balance based on all the tokens available.
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
```
  </Tab>
</Tabs>

### Response

Returns a complete set of balance data for the account specified in request body parameters.

### Code Examples

#### Request

```shell
curl --location --request POST 'https://rpc.ankr.com/multichain' \
--header 'Content-Type: application/json' \
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

---

## `ankr_getCurrencies`

> **Retrieves the blockchain's currencies.**

Retrieves a list of all the currencies used in transactions on a blockchain specified.

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
```
  </Tab>
</Tabs>

### Response

Returns the currencies and their metadata for the blockchain specified by request body parameters.

### Code Examples

#### Request

```shell
curl --location --request POST 'https://rpc.ankr.com/multichain' \
--header 'Content-Type: application/json' \
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

## `ankr_getTokenPrice`

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
  * `contractAddress` (string): a contract address of the tokens collection; supports the Ethereum Name Service (ENS). If not provided, returns the native coin price of the blockchain specified. 

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

```shell
Content-Type: application/json
```
  </Tab>
</Tabs>

### Response

Returns a USD price of the token specified by request body parameters.

### Code Examples

#### Request

```shell
curl --location --request POST 'https://rpc.ankr.com/multichain' \
--header 'Content-Type: application/json' \
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

---

## `ankr_getTokenHolders`

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
```
  </Tab>
</Tabs>

### Response

Returns holders, holders number, and holders metadata of the tokens specified by request body parameters.

### Code Examples

#### Request

```shell
curl --location --request POST 'https://rpc.ankr.com/multichain' \
--header 'Content-Type: application/json' \
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

## `ankr_getTokenHoldersCount`

> **Retrieves the number of token holders.** 

Retrieves the number of holders for the tokens specified.

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
```
  </Tab>
</Tabs>

### Response

Returns the number of holders for the tokens specified by request body parameters.

### Code Examples

#### Request

```shell
curl --location --request POST 'https://rpc.ankr.com/multichain' \
--header 'Content-Type: application/json' \
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

---

## `ankr_getTransfersByAddress`

> **Retrieves transfers info by wallet address.** 

Retrieves the transfers info for the wallet address specified.

### Request

Build your request using the parameters below.

#### Parameters

* `id` (int64; required): a request ID (example: 1).
* `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
* `method` (string; required): a method used for the request.
* `params` (object): the data object containing request body parameters:

  * `blockchain` (string; required): either of the supported chains (`eth`, `bsc`, `fantom`, `avalanche`, `polygon`, `arbitrum`, `syscoin`, `optimism`).
  * `walletAddress` (string): a wallet address to look for the transfers info.
  * `transactionType` (string): a type of transaction (available types: `REGULAR_TRANSACTION` — everything that gets under the definition of transaction on blockchain, `TRANSFER_TOKEN` — ERC20 token and native token transfers, `ERC721` — transfers of NFTs for EVM-compatible blockchains, `ERC1155` — multi-token transfers).
  * `orderAsc` (boolean): use `true` to structure info in ascending order, or `false` — in descending. 
  * `pageSize` (int32): a number of results you'd like to get.
  * `pageToken` (string): a token at the end of the response body that can be referenced in the request to fetch the next page.
  * `timestamp` (uint64): a transfer timestamp.

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
  "method": "ankr_getTransfersByAddress",
  "params": {
    "blockchain": "string",
    "walletAddress": "string",
    "transactionType": "string",
    "orderAsc": true,
    "pageSize": 0,
    "pageToken": "string",
    "timestamp": 0
  }
}
```
  </Tab>
  <Tab>

```shell
Content-Type: application/json
```
  </Tab>
</Tabs>

### Response

Returns the transfers info for the wallet address specified in request body parameters.

### Code Examples

#### Request

<Tabs
  items={[
    "Minimal",
    "Token transfers",
    "ERC721",
    "ERC1155",
    "Regular transfers"
  ]}
>
  <Tab>

```shell
curl --location --request POST 'https://rpc.ankr.com/multichain' \
--header 'Content-Type: application/json' \
--data-raw '{
    "jsonrpc": "2.0",
    "method": "ankr_getTransfersByAddress",
    "params": {
        "blockchain": "bsc",
        "walletAddress": "0x186ea56f0a40c5593a697b3e804968b8c5920ff3"
    },
    "id": 1
}'
```
  </Tab>
  <Tab>

```shell
curl --location --request POST 'https://rpc.ankr.com/multichain' \
--header 'Content-Type: application/json' \
--data-raw '{
    "jsonrpc": "2.0",
    "method": "ankr_getTransfersByAddress",
    "params": {
        "blockchain": "bsc",
        "walletAddress": "0x186ea56f0a40c5593a697b3e804968b8c5920ff3",
        "transactionType":"TRANSFER_TOKEN",
        "timestamp":0,
        "orderAsc": false,
        "pageToken":"",
        "pageSize": 5
    },
    "id": 1
}'
```
  </Tab>
  <Tab>

```shell
curl --location --request POST 'https://rpc.ankr.com/multichain' \
--header 'Content-Type: application/json' \
--data-raw '{
    "jsonrpc": "2.0",
    "method": "ankr_getTransfersByAddress",
    "params": {
        "blockchain": "bsc",
        "walletAddress": "0x186ea56f0a40c5593a697b3e804968b8c5920ff3",
        "transactionType":"TRANSFER_ERC721",
        "timestamp":0,
        "orderAsc": false,
        "pageToken":"",
        "pageSize": 12
    },
    "id": 1
}'
```
  </Tab>
  <Tab>

```shell
curl --location --request POST 'https://rpc.ankr.com/multichain' \
--header 'Content-Type: application/json' \
--data-raw '{
    "jsonrpc": "2.0",
    "method": "ankr_getTransfersByAddress",
    "params": {
        "blockchain": "bsc",
        "walletAddress": "0x186ea56f0a40c5593a697b3e804968b8c5920ff3",
        "transactionType":"TRANSFER_ERC1155",
        "timestamp":0,
        "orderAsc": true,
        "pageToken":"",
        "pageSize": 12
    },
    "id": 1
}'
```
  </Tab>
  <Tab>

```shell
curl --location --request POST 'https://rpc.ankr.com/multichain' \
--header 'Content-Type: application/json' \
--data-raw '{
    "jsonrpc": "2.0",
    "method": "ankr_getTransfersByAddress",
    "params": {
        "blockchain": "bsc",
        "walletAddress": "0x186ea56f0a40c5593a697b3e804968b8c5920ff3",
        "transactionType":"REGULAR_TRANSACTION",
        "timestamp":0,
        "orderAsc": true,
        "pageToken":"",
        "pageSize": 5
    },
    "id": 1
}'
```
  </Tab>
</Tabs>

#### Response

<Tabs
  items={[
    "Minimal",
    "Token transfers",
    "ERC721",
    "ERC1155",
    "Regular transfers"
  ]}
>
  <Tab>

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "transactions": [
            {
                "blockchain": "bsc",
                "transactionHash": "0x4c0c5e278d29b5e629c33a393ab9616b9f1e4b04ff557c9aea8b6d71627d8777",
                "transactionId": "",
                "blockHeight": 21337878,
                "blockHash": "0xdd158e2a53f455c994061cd3c05da3812824c1198dc0ed56f627d6e10d35b506",
                "fromAddress": "0x21d45650db732ce5df77685d6021d7d5d1da807f",
                "contractAddress": "",
                "toAddress": "0x186ea56f0a40c5593a697b3e804968b8c5920ff3",
                "value": "8210580000000000",
                "timestamp": "1663195853",
                "success": true,
                "actionDescription": "",
                "type": "REGULAR_TRANSACTION",
                "transactionIndex": 0,
                "logIndex": 0,
                "isLog": false
            },
            {
                "blockchain": "bsc",
                "transactionHash": "0x1d24e4b7738f2ad1ca4a981f672a6c27d3333fd2a7240595676125ad21863a86",
                "transactionId": "",
                "blockHeight": 21337720,
                "blockHash": "0xe91572ad5033536c405a865b9423933f1148d3d915816d083b564371ee32cb76",
                "fromAddress": "0x186ea56f0a40c5593a697b3e804968b8c5920ff3",
                "contractAddress": "",
                "toAddress": "0x5c2b025f4f2d5ddb6d339f4ef46f9caeac661d27",
                "value": "10991405924766175",
                "timestamp": "1663195379",
                "success": true,
                "actionDescription": "",
                "type": "REGULAR_TRANSACTION",
                "transactionIndex": 46,
                "logIndex": 0,
                "isLog": false
            },
            {
                "blockchain": "bsc",
                "transactionHash": "0xa4ec9d01caadfb6be2859026d9a7606911aafb840a1d0d4fce08d84df4aa0897",
                "transactionId": "",
                "blockHeight": 21337702,
                "blockHash": "0x95c5339b87180b6036f103334edd8f20dba7e248b2e160cfe009414be3bd3179",
                "fromAddress": "0x186ea56f0a40c5593a697b3e804968b8c5920ff3",
                "contractAddress": "",
                "toAddress": "0x10ed43c718714eb63d5aa57b78b54704e256024e",
                "value": "0",
                "timestamp": "1663195325",
                "success": true,
                "actionDescription": "791ac947",
                "type": "REGULAR_TRANSACTION",
                "transactionIndex": 72,
                "logIndex": 0,
                "isLog": false
            },
            {
                "blockchain": "bsc",
                "transactionHash": "0xbbd3ed67318e1b0e10dfe5823fd386d104fa8bdf8146a721b411a85c77e7b182",
                "transactionId": "",
                "blockHeight": 21337624,
                "blockHash": "0x96d0cb9232f0cd8763a3d83478291acf7c39d54bf96359c982c85476d1e7b114",
                "fromAddress": "0x186ea56f0a40c5593a697b3e804968b8c5920ff3",
                "contractAddress": "",
                "toAddress": "0x5c2b025f4f2d5ddb6d339f4ef46f9caeac661d27",
                "value": "20370380000000000",
                "timestamp": "1663195091",
                "success": true,
                "actionDescription": "",
                "type": "REGULAR_TRANSACTION",
                "transactionIndex": 47,
                "logIndex": 0,
                "isLog": false
            },
            {
                "blockchain": "bsc",
                "transactionHash": "0x07feea40464f98a05f08e36b9245f3d4989c2b4925f0729dd87f530da19d8ec8",
                "transactionId": "",
                "blockHeight": 21332602,
                "blockHash": "0xbd73aae68c4d0ec34f81588ad066cf508e975ed46409e3b962423553462f0343",
                "fromAddress": "0x21d45650db732ce5df77685d6021d7d5d1da807f",
                "contractAddress": "",
                "toAddress": "0x186ea56f0a40c5593a697b3e804968b8c5920ff3",
                "value": "7475380000000000",
                "timestamp": "1663180024",
                "success": true,
                "actionDescription": "",
                "type": "REGULAR_TRANSACTION",
                "transactionIndex": 16,
                "logIndex": 0,
                "isLog": false
            }
        ],
        "nextPageToken": "RVJXU9RdE4o9reDBVBvSKRGaqEGtW9nF6aPJs774kzFbc8Q6PsVzDTYpn87Gp4YCBJygrzeMPPTRZw1Pbi54pVu"
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
                "blockchain": "bsc",
                "transactionHash": "0xa4ec9d01caadfb6be2859026d9a7606911aafb840a1d0d4fce08d84df4aa0897",
                "transactionId": "",
                "blockHeight": 21337702,
                "blockHash": "0x95c5339b87180b6036f103334edd8f20dba7e248b2e160cfe009414be3bd3179",
                "fromAddress": "0x186ea56f0a40c5593a697b3e804968b8c5920ff3",
                "contractAddress": "0x01bd7acb6ff3b6dd5aefa05cf085f2104f3fc53f",
                "toAddress": "0xfa0c171afe708b97ad61a136cb0499cdb1b7b10e",
                "value": "100842000000000000000",
                "timestamp": "1663195325",
                "success": true,
                "actionDescription": "",
                "type": "TRANSFER_TOKEN",
                "transactionIndex": 72,
                "logIndex": 2,
                "isLog": true
            },
            {
                "blockchain": "bsc",
                "transactionHash": "0xa4ec9d01caadfb6be2859026d9a7606911aafb840a1d0d4fce08d84df4aa0897",
                "transactionId": "",
                "blockHeight": 21337702,
                "blockHash": "0x95c5339b87180b6036f103334edd8f20dba7e248b2e160cfe009414be3bd3179",
                "fromAddress": "0x186ea56f0a40c5593a697b3e804968b8c5920ff3",
                "contractAddress": "0x01bd7acb6ff3b6dd5aefa05cf085f2104f3fc53f",
                "toAddress": "0x92d3fb02eb038944fc7a8b414721bf8b009df765",
                "value": "1029000000000000000",
                "timestamp": "1663195325",
                "success": true,
                "actionDescription": "",
                "type": "TRANSFER_TOKEN",
                "transactionIndex": 72,
                "logIndex": 1,
                "isLog": true
            },
            {
                "blockchain": "bsc",
                "transactionHash": "0xa4ec9d01caadfb6be2859026d9a7606911aafb840a1d0d4fce08d84df4aa0897",
                "transactionId": "",
                "blockHeight": 21337702,
                "blockHash": "0x95c5339b87180b6036f103334edd8f20dba7e248b2e160cfe009414be3bd3179",
                "fromAddress": "0x186ea56f0a40c5593a697b3e804968b8c5920ff3",
                "contractAddress": "0x01bd7acb6ff3b6dd5aefa05cf085f2104f3fc53f",
                "toAddress": "0x01bd7acb6ff3b6dd5aefa05cf085f2104f3fc53f",
                "value": "1029000000000000000",
                "timestamp": "1663195325",
                "success": true,
                "actionDescription": "",
                "type": "TRANSFER_TOKEN",
                "transactionIndex": 72,
                "logIndex": 0,
                "isLog": true
            },
            {
                "blockchain": "bsc",
                "transactionHash": "0xe757dec72241b434bcffc9106bb7d94acc1d04a2fc84cc81d38dbfb48d46aaf2",
                "transactionId": "",
                "blockHeight": 21331110,
                "blockHash": "0x37909e9b5d4b790cf80763672e4da4ae22b171e2dc91db0c6ee6cdf510378a6c",
                "fromAddress": "0x35122d1fe8001296f61290b8ba42ef597af31fb7",
                "contractAddress": "0x35122d1fe8001296f61290b8ba42ef597af31fb7",
                "toAddress": "0x186ea56f0a40c5593a697b3e804968b8c5920ff3",
                "value": "956000000000",
                "timestamp": "1663175548",
                "success": true,
                "actionDescription": "",
                "type": "TRANSFER_TOKEN",
                "transactionIndex": 39,
                "logIndex": 47,
                "isLog": true
            },
            {
                "blockchain": "bsc",
                "transactionHash": "0xf99a5d78e0933c60c2042d388b1474f38a209b6f87a8b7cfa73828f88e3ab3ad",
                "transactionId": "",
                "blockHeight": 21330233,
                "blockHash": "0xe7d00bf22be75f1b50cca58cab9e6a88355f574fd2ea85fcb54ba64f62f8bf6b",
                "fromAddress": "0x186ea56f0a40c5593a697b3e804968b8c5920ff3",
                "contractAddress": "0xe79a1163a95734ccfbd006cbaaba954f3e846beb",
                "toAddress": "0xda55dec4e31a31076adf010ef8d74f2fdeb02e33",
                "value": "3656285204704929617947",
                "timestamp": "1663172916",
                "success": true,
                "actionDescription": "",
                "type": "TRANSFER_TOKEN",
                "transactionIndex": 90,
                "logIndex": 0,
                "isLog": true
            }
        ],
        "nextPageToken": "2s5vb9ddmJUG1umaobgKTLu7Zv5k6GMEDX8T7JKoCauMLHHrpPBm4r5qrKdzaEyi8NTM845mrB2sYhfdUEZZ642Go"
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
                "blockchain": "bsc",
                "transactionHash": "0xc9e23db7227a1eed1719158947bcb3e92acd40d85a725420e64115e7aa3530a2",
                "transactionId": "",
                "blockHeight": 20381154,
                "blockHash": "0xbafd55cce2e2e9a657b9f367f06bd20bef9fe4f1d34eee95d8adfd8832f49a13",
                "fromAddress": "0x0000000000000000000000000000000000000000",
                "contractAddress": "0xadc466855ebe8d1402c5f7e6706fccc3aedb44a0",
                "toAddress": "0x186ea56f0a40c5593a697b3e804968b8c5920ff3",
                "value": "1",
                "timestamp": "1660321369",
                "success": true,
                "actionDescription": "76358",
                "type": "TRANSFER_ERC721",
                "transactionIndex": 74,
                "logIndex": 0,
                "isLog": true
            },
            {
                "blockchain": "bsc",
                "transactionHash": "0x61e7626d8f96c1398106770f37fcfa0f01d5cc5defdc029322bc0353394ea265",
                "transactionId": "",
                "blockHeight": 20248465,
                "blockHash": "0xf4496e3517109513436a6266e69e1c9467f0964b93d88f2b5b3b6c6c06dfdab6",
                "fromAddress": "0x0000000000000000000000000000000000000000",
                "contractAddress": "0x9cee09946a8113a503c1264e328c0e3aee4c8bcf",
                "toAddress": "0x186ea56f0a40c5593a697b3e804968b8c5920ff3",
                "value": "1",
                "timestamp": "1659922921",
                "success": true,
                "actionDescription": "39286",
                "type": "TRANSFER_ERC721",
                "transactionIndex": 126,
                "logIndex": 0,
                "isLog": true
            }
        ],
        "nextPageToken": ""
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
                "blockchain": "bsc",
                "transactionHash": "0xb7a6d360e76de38524b62a30c33da813960b79a2467cd2f8969f0394c4b52c8f",
                "transactionId": "",
                "blockHeight": 18744672,
                "blockHash": "0x6283c43f55f56f8d25edd8f7cb8eb58bf5590ea550d90174165eec3382617d8d",
                "fromAddress": "0x8c80f871f91b7e53859cbffebdb35311630b548a",
                "contractAddress": "0x36f8f51f65fe200311f709b797baf4e193dd0b0d",
                "toAddress": "0x186ea56f0a40c5593a697b3e804968b8c5920ff3",
                "value": "1",
                "timestamp": "1655401450",
                "success": true,
                "actionDescription": "12",
                "type": "TRANSFER_ERC1155",
                "transactionIndex": 133,
                "logIndex": 0,
                "isLog": true
            },
            {
                "blockchain": "bsc",
                "transactionHash": "0x95ae64003124fe4c3e8702364136d25c3d0f2fdbbf953bd815785f06d5cb6025",
                "transactionId": "",
                "blockHeight": 19116577,
                "blockHash": "0x745ecc5d74827a393b84025405ef9c54387c7faf125dd2c0476e8f9024a1930c",
                "fromAddress": "0x186ea56f0a40c5593a697b3e804968b8c5920ff3",
                "contractAddress": "0x36f8f51f65fe200311f709b797baf4e193dd0b0d",
                "toAddress": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
                "value": "1",
                "timestamp": "1656519782",
                "success": true,
                "actionDescription": "12",
                "type": "TRANSFER_ERC1155",
                "transactionIndex": 261,
                "logIndex": 0,
                "isLog": true
            }
        ],
        "nextPageToken": ""
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
                "blockchain": "bsc",
                "transactionHash": "0xe6e9901d202b8762148dd1a947b773c4a6c5117d0cb5d558a356cf9fc1b56956",
                "transactionId": "",
                "blockHeight": 16801400,
                "blockHash": "0x0e1cfc2d7764ad2554059e3b7bb4e388dffee4d3c63264a3049011baac2532ff",
                "fromAddress": "0x21d45650db732ce5df77685d6021d7d5d1da807f",
                "contractAddress": "",
                "toAddress": "0x186ea56f0a40c5593a697b3e804968b8c5920ff3",
                "value": "74282590000000000",
                "timestamp": "1649526533",
                "success": true,
                "actionDescription": "",
                "type": "REGULAR_TRANSACTION",
                "transactionIndex": 3,
                "logIndex": 0,
                "isLog": false
            },
            {
                "blockchain": "bsc",
                "transactionHash": "0x95ae64003124fe4c3e8702364136d25c3d0f2fdbbf953bd815785f06d5cb6025",
                "transactionId": "",
                "blockHeight": 19116577,
                "blockHash": "0x745ecc5d74827a393b84025405ef9c54387c7faf125dd2c0476e8f9024a1930c",
                "fromAddress": "0x186ea56f0a40c5593a697b3e804968b8c5920ff3",
                "contractAddress": "",
                "toAddress": "0x36f8f51f65fe200311f709b797baf4e193dd0b0d",
                "value": "0",
                "timestamp": "1656519782",
                "success": true,
                "actionDescription": "f242432a",
                "type": "REGULAR_TRANSACTION",
                "transactionIndex": 261,
                "logIndex": 0,
                "isLog": false
            },
            {
                "blockchain": "bsc",
                "transactionHash": "0xcca859654d790282570898b4561db8fb9a62276cf3020f6639cbc8a1a0fcfa92",
                "transactionId": "",
                "blockHeight": 19116579,
                "blockHash": "0x96522cd672b229584b4c9aea1596281225b37a390342106747f60b778fca1945",
                "fromAddress": "0x186ea56f0a40c5593a697b3e804968b8c5920ff3",
                "contractAddress": "",
                "toAddress": "0x36f8f51f65fe200311f709b797baf4e193dd0b0d",
                "value": "0",
                "timestamp": "1656519788",
                "success": false,
                "actionDescription": "f242432a",
                "type": "REGULAR_TRANSACTION",
                "transactionIndex": 166,
                "logIndex": 0,
                "isLog": false
            },
            {
                "blockchain": "bsc",
                "transactionHash": "0x66ac742f291d9b35c97d19a749f15dea73a50ec03fc5082962c2f80bb75b7d22",
                "transactionId": "",
                "blockHeight": 19203716,
                "blockHash": "0x429c39d4108138f63eb1702eaf74a9615dbeffadf7e028d64571f6a305dfa205",
                "fromAddress": "0x186ea56f0a40c5593a697b3e804968b8c5920ff3",
                "contractAddress": "",
                "toAddress": "0x5c2b025f4f2d5ddb6d339f4ef46f9caeac661d27",
                "value": "73860105000000000",
                "timestamp": "1656781670",
                "success": true,
                "actionDescription": "",
                "type": "REGULAR_TRANSACTION",
                "transactionIndex": 84,
                "logIndex": 0,
                "isLog": false
            },
            {
                "blockchain": "bsc",
                "transactionHash": "0xe0f549c0d20c2b082534bc239ca1e568ce5a93944e65427cb8fb9c5a76acdd63",
                "transactionId": "",
                "blockHeight": 19204099,
                "blockHash": "0x52dd0a00b0a21eb4297316b929ced708982bfb2a1624ff16b28456ba4dc5e3f5",
                "fromAddress": "0x21d45650db732ce5df77685d6021d7d5d1da807f",
                "contractAddress": "",
                "toAddress": "0x186ea56f0a40c5593a697b3e804968b8c5920ff3",
                "value": "73360100000000000",
                "timestamp": "1656782819",
                "success": true,
                "actionDescription": "",
                "type": "REGULAR_TRANSACTION",
                "transactionIndex": 13,
                "logIndex": 0,
                "isLog": false
            }
        ],
        "nextPageToken": "RVJXU9RdE4o9reDBVBvSKRGaqEGtW9nF6aPJs774kzFbc8Q1y9bJ4px29hYuFhKypCcdQvrP8tymT5JDg9kQKGB"
    }
}
```
  </Tab>
</Tabs>

---

[//]: # ()
[//]: # (## `ankr_getTokenPriceHistory`)

[//]: # ()
[//]: # (> **Retrieves the token's price history on the chain.**)

[//]: # ()
[//]: # (Retrieves the particular token's price history on the chain specified. )

[//]: # ()
[//]: # (### Request)

[//]: # ()
[//]: # (Build your request using the parameters below.)

[//]: # ()
[//]: # (#### Parameters)

[//]: # ()
[//]: # (* `id` &#40;int64; required&#41;: a request ID &#40;example: 1&#41;.)

[//]: # (* `jsonrpc` &#40;string; required&#41;: a JSON RPC spec used &#40;example: 2.0&#41;. )

[//]: # (* `method` &#40;string; required&#41;: a method used for the request.)

[//]: # (* `params` &#40;object&#41;: the data object containing request body parameters:)

[//]: # ()
[//]: # (  * `blockchain` &#40;string; required&#41;: either of the supported chains &#40;`eth`, `bsc`, `fantom`, `avalanche`, `polygon`, `arbitrum`, `syscoin`, `optimism`&#41;.)

[//]: # (  * `contractAddress` &#40;string; required&#41;: an address of the token to search for a price history.)

[//]: # (  * `fromTimestamp` &#40;uint64; required&#41;: only a single timestamp &#40;either `fromTimestamp` or `toTimestamp`&#41; MUST be specified for the request to be successful — indicating both parameters leads to an error. `fromTimestamp` corresponds to the time range starting from the timestamp specified in seconds &#40;included in the range&#41; and moving forward in time by the number of `interval`s &#40;see the `interval` parameter&#41;.)

[//]: # (  * `toTimestamp` &#40;uint64; required&#41;: only a single timestamp &#40;either `fromTimestamp` or `toTimestamp`&#41; MUST be specified for the request to be successful — indicating both parameters leads to an error. `toTimestamp` corresponds to the time range starting from the timestamp specified in seconds &#40;included in the range&#41; and moving backward in time by the number of `interval`s &#40;see the `interval` parameter&#41;.)

[//]: # (  * `interval` &#40;uint64&#41;: a duration &#40;in seconds&#41; of a single time period you'd like to arrange a price history by. In other words, you receive a single history price value per the interval you define. Default value: 24 hours. Max value: 365 days.)

[//]: # (  * `limit` &#40;uint64&#41;: the maximum number of history prices to receive. Default value: `100`. Max value: `1000`.)

[//]: # ()
[//]: # (<Tabs)

[//]: # (  items={[)

[//]: # (    "Body",)

[//]: # (    "Headers",)

[//]: # (  ]})

[//]: # (>)

[//]: # (  <Tab>)

[//]: # ()
[//]: # (```json)

[//]: # ({)

[//]: # (  "id": 1,)

[//]: # (  "jsonrpc": "2.0",)

[//]: # (  "method": "ankr_getTokenPriceHistory",)

[//]: # (  "params": {)

[//]: # (    "blockchain": "string",)

[//]: # (    "contractAddress": "string",)

[//]: # (    "fromTimestamp": 0,)

[//]: # (    "interval": 0,)

[//]: # (    "limit": 0,)

[//]: # (    "toTimestamp": 0)

[//]: # (  })

[//]: # (})

[//]: # (```)

[//]: # (  </Tab>)

[//]: # (  <Tab>)

[//]: # ()
[//]: # (```shell)

[//]: # (Content-Type: application/json)

[//]: # (```)

[//]: # (  </Tab>)

[//]: # (</Tabs>)

[//]: # ()
[//]: # (### Response)

[//]: # ()
[//]: # (Returns a price history of a particular token on the chain specified. )

[//]: # ()
[//]: # (### Code Examples)

[//]: # ()
[//]: # (#### Request)

[//]: # ()
[//]: # (```shell)

[//]: # (curl --location --request POST 'https://rpc.ankr.com/multichain' \)

[//]: # (--header 'Content-Type: application/json' \)

[//]: # (--data-raw '{)

[//]: # (    "jsonrpc": "2.0",)

[//]: # (    "method": "ankr_getTokenPriceHistory",)

[//]: # (    "params": {  )

[//]: # (        "blockchain": "eth",)

[//]: # (        "contractAddress": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",)

[//]: # (        "toTimestamp": 1667195581,)

[//]: # (        "interval": 6000,)

[//]: # (        "limit": 8)

[//]: # (    },)

[//]: # (    "id": 1)

[//]: # (}')

[//]: # (```)

[//]: # ()
[//]: # (#### Response)

[//]: # ()
[//]: # (Code: 200 OK)

[//]: # ()
[//]: # (<Tabs)

[//]: # (  items={[)

[//]: # (    "Schema",)

[//]: # (    "Example",)

[//]: # (  ]})

[//]: # (>)

[//]: # (  <Tab>)

[//]: # ()
[//]: # (```json)

[//]: # ({)

[//]: # (  "error": {},)

[//]: # (  "id": 1,)

[//]: # (  "jsonrpc": "2.0",)

[//]: # (  "result": {)

[//]: # (    "quotes": [)

[//]: # (      {)

[//]: # (        "blockHeight": 0,)

[//]: # (        "timestamp": 0,)

[//]: # (        "usdPrice": "string")

[//]: # (      })

[//]: # (    ])

[//]: # (  })

[//]: # (})

[//]: # (```)

[//]: # (  </Tab>)

[//]: # (  <Tab>)

[//]: # ()
[//]: # (```json)

[//]: # ({)

[//]: # (    "jsonrpc": "2.0",)

[//]: # (    "id": 1,)

[//]: # (    "result": {)

[//]: # (        "quotes": [)

[//]: # (            {)

[//]: # (                "timestamp": 1667195591,)

[//]: # (                "blockHeight": 15866069,)

[//]: # (                "usdPrice": "1589.886112425257096286")

[//]: # (            },)

[//]: # (            {)

[//]: # (                "timestamp": 1667189591,)

[//]: # (                "blockHeight": 15865572,)

[//]: # (                "usdPrice": "1583.0151106")

[//]: # (            },)

[//]: # (            {)

[//]: # (                "timestamp": 1667183591,)

[//]: # (                "blockHeight": 15865079,)

[//]: # (                "usdPrice": "1567.796549909782742262")

[//]: # (            },)

[//]: # (            {)

[//]: # (                "timestamp": 1667177591,)

[//]: # (                "blockHeight": 15864584,)

[//]: # (                "usdPrice": "1583.132896298479798684")

[//]: # (            },)

[//]: # (            {)

[//]: # (                "timestamp": 1667171591,)

[//]: # (                "blockHeight": 15864084,)

[//]: # (                "usdPrice": "1584.491716491399097652")

[//]: # (            },)

[//]: # (            {)

[//]: # (                "timestamp": 1667165591,)

[//]: # (                "blockHeight": 15863589,)

[//]: # (                "usdPrice": "1597.057392438442564297")

[//]: # (            },)

[//]: # (            {)

[//]: # (                "timestamp": 1667159591,)

[//]: # (                "blockHeight": 15863091,)

[//]: # (                "usdPrice": "1589.308361856425258561")

[//]: # (            },)

[//]: # (            {)

[//]: # (                "timestamp": 1667153591,)

[//]: # (                "blockHeight": 15862596,)

[//]: # (                "usdPrice": "1583.58262649223497801")

[//]: # (            })

[//]: # (        ])

[//]: # (    })

[//]: # (})

[//]: # (```)

[//]: # (  </Tab>)

[//]: # (</Tabs>)
