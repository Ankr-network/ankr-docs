import { Tabs, Tab } from "nextra-theme-docs";

# `ankr_getNFTsByOwner`

> **Retrieves the account's NFT data.**

Retrieves a list of NFTs (ERC721/ERC1155/ENS/POAP) that belong to the particular account specified.

### Request

Build your request using the parameters below.

#### Parameters

* `id` (int64; required): a request ID (example: 1).
* `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
* `method` (string; required): a method used for the request.
* `params` (object): the data object containing request body parameters:

  * `walletAddress` (string; required): an account address to query for NFTs; supports the Ethereum Name Service (ENS).
  * `blockchain` (string): a chain or a combination of chains to query:
     * Single chain: `eth`, `bsc`, `fantom`, `avalanche`, `polygon`, `arbitrum`, `syscoin`, `optimism`.
     * Chains combination: `[eth, polygon, bsc]`.
     * All chains: leave the value empty to query all the chains available.
  * `pageSize` (int32): a number of page results you'd like to get (default=10, max=50).
  * `pageToken` (string): a token is provided at the end of the response body and can be referenced in the request to fetch the next page.
  * `filter` (key-value): Filters your request by either of the following:
     * Smart contract address (`"0xd8682bfa6918b0174f287b888e765b9a1b4dc9c3": [] `) — retrieves all NFTs from the address.
     * Smart contract address and NFT ID (`"0xd8682bfa6918b0174f287b888e765b9a1b4dc9c3": ["8937"]`) — retrieves a particular NFT specified.

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
  "method": "ankr_getNFTsByOwner",
  "params": {
    "blockchain": [
      "string"
    ],
    "filter": [
      {
        "additionalProp1": [
          "string"
        ],
        "additionalProp2": [
          "string"
        ],
        "additionalProp3": [
          "string"
        ]
      }
    ],
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
x-api-key: {{KEY}}
```
  </Tab>
</Tabs>

### Response

Returns all the NFTs that belong to the account address specified by request body parameters.

#### Parameters

A successful response contains the following parameters:

* `id` (int64; required):
* `jsonrpc` (string; required):
* `result` (object): the data object containing a list of NFT assets and their metadata:

  * `blockchain` (string; required): one of the supported chains (`eth`, `bsc`, `fantom`, `avalanche`, `polygon`, `arbitrum`, `syscoin`, `optimism`).
  * `collectionName` (string): a collection name the NFT asset belongs to.
  * `contractAddress` (string): an NFT collection's EVM-compatible contract address.
  * `contractType` (int32): a type of the contract — either ERC721 or ERC1155.
  * `name` (string): a name of the NFT asset.
  * `tokenId` (string): an ID of the NFT asset.
  * `imageUrl` (string): a URL that points to the actual digital file, usually an IPFS link.
  * `symbol` (string): a symbol of the NFT asset.

  * `traits` (array): an attribute of the NFT asset.  

    * `trait_type` (string): a trait's descriptive name.  
    * `value` (string): a value description.  

### Code Examples

#### Request

```shell
curl --location --request POST 'https://rpc.ankr.com/multichain' \
--header 'Content-Type: application/json' \
--data-raw '{
    "jsonrpc": "2.0",
    "method": "ankr_getNFTsByOwner",
    "params": {
        "blockchain": ["eth"],
        "walletAddress": "0x0E11A192d574b342C51be9e306694C41547185DD",
        "pageSize": 2,
        "pageToken": "",
        "filter": [
            {
                "0x700b4b9f39bb1faf5d0d16a20488f2733550bff4": []
            },
            {
                "0xd8682bfa6918b0174f287b888e765b9a1b4dc9c3": ["8937"]
            }
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
    "assets": [
      {
        "blockchain": "string",
        "collectionName": "string",
        "contractAddress": "string",
        "contractType": 0,
        "imageUrl": "string",
        "name": "string",
        "quantity": "string",
        "symbol": "string",
        "tokenId": "string",
        "tokenUrl": "string",
        "traits": [
          {
            "bunny_id": "string",
            "count": 0,
            "display_type": "string",
            "frequency": "string",
            "mp_score": "string",
            "rarity": "string",
            "trait_type": "string",
            "value": "string"
          }
        ]
      }
    ],
    "nextPageToken": "string",
    "owner": "string"
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
    "owner": "0x0e11a192d574b342c51be9e306694c41547185dd",
    "assets": [
      {
        "blockchain": "eth",
        "name": "Happy Bunny #555",
        "tokenId": "555",
        "imageUrl": "https://ipfs.io/ipfs/QmSRkmEDKWUeHi5FiNpQUBAcCq7rKinhf5Pbu8ZPZNkP8r/555",
        "collectionName": "Happy Bunnies",
        "symbol": "BUNNY",
        "contractType": "ERC721",
        "contractAddress": "0x700b4b9f39bb1faf5d0d16a20488f2733550bff4",
        "traits": [
          {
            "trait_type": "Background",
            "value": "Green Background"
          },
          {
            "trait_type": "Body",
            "value": "Black Pearl Necklace"
          },
          {
            "trait_type": "Eyes",
            "value": "Sad Eyes"
          },
          {
            "trait_type": "Face",
            "value": "Right Ear Band"
          },
          {
            "trait_type": "Mouth",
            "value": "Small Smile"
          },
          {
            "trait_type": "Skin",
            "value": "Pink"
          }
        ]
      },
      {
        "blockchain": "eth",
        "name": "Happy Bunny #6907",
        "tokenId": "6907",
        "imageUrl": "https://ipfs.io/ipfs/QmSRkmEDKWUeHi5FiNpQUBAcCq7rKinhf5Pbu8ZPZNkP8r/6907",
        "collectionName": "Happy Bunnies",
        "symbol": "BUNNY",
        "contractType": "ERC721",
        "contractAddress": "0x700b4b9f39bb1faf5d0d16a20488f2733550bff4",
        "traits": [
          {
            "trait_type": "Background",
            "value": "Light Blue Background"
          },
          {
            "trait_type": "Body",
            "value": "Pirate Tanktop"
          },
          {
            "trait_type": "Eyes",
            "value": "Small Point Eyes"
          },
          {
            "trait_type": "Face",
            "value": "Light Blue Cap"
          },
          {
            "trait_type": "Mouth",
            "value": "Annoyed Mouth"
          },
          {
            "trait_type": "Skin",
            "value": "Yellow"
          }
        ]
      },
      {
        "blockchain": "eth",
        "name": "Moon Boyz #8937",
        "tokenId": "8937",
        "imageUrl": "https://moon-boyz-api-do.com/metadata/8937",
        "collectionName": "The Moon Boyz",
        "symbol": "MOONBOYZ",
        "contractType": "ERC721",
        "contractAddress": "0xd8682bfa6918b0174f287b888e765b9a1b4dc9c3",
        "traits": [
          {
            "trait_type": "Background",
            "value": "Graphic Moon"
          },
          {
            "trait_type": "Suits",
            "value": "Body Suit Iridescent Purple"
          },
          {
            "trait_type": "Lines",
            "value": "Lines Suit Blue"
          },
          {
            "trait_type": "Pocket",
            "value": "Pocket Silver"
          },
          {
            "trait_type": "Helmet Close",
            "value": "Rare Irdiescent Dark Blue"
          },
          {
            "trait_type": "Ear",
            "value": "Lightning Red"
          },
          {
            "trait_type": "Visor",
            "value": "Black"
          },
          {
            "trait_type": "Hologram",
            "value": "Original Heart"
          }
        ]
      }
    ],
    "nextPageToken": "BjxaEQyvWry96Z7VXNrffspsVkXZ8PXkMEc8epttW3Jn8JvEx2mF25WLU2cndjitQE4iDiECmMpVBwfPQ8b9hVabmBXipuN6y3gqzgWUbCCWAR2Lv99dF4QgbcANVeaqs7hGDAo"
  }
}
```
  </Tab>
</Tabs>
