import { Tabs, Tab } from "nextra-theme-docs";

# `ankr_getCurrencies`

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
X-API-KEY: {{KEY}}
```
  </Tab>
</Tabs>

### Response

Returns the currencies and their metadata for the blockchain specified by request body parameters.

#### Parameters

See the response parameters' data model in [Swagger](https://sanjose.api.ankrscan.io/docs/#/default/ankr_getCurrencies).

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
