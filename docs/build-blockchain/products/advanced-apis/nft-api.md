---
title: NFT API
id: nft-api
---

# NFT API Methods

NFT API Methods serve to request NFT-related data across multiple chains.

## `ankr_getNFTsByOwner`

Gets a list of NFTs (ERC721/ERC1155/ENS/POAP) associated with an account specified. A request could be further narrowed and filtered using the corresponding request body parameters.

### Request

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
  * `pageSize` (integer): a number of results you'd like to get (default=10, max=50).
  * `pageToken` (string): a token is provided at the end of the response body and can be referenced in the request to fetch the next page.
  * `filter` (key-value): Filters your request by either of the following:
     * Smart contract address (`"0xd8682bfa6918b0174f287b888e765b9a1b4dc9c3": [] `) — retrieves all NFTs from the address.
     * Smart contract address and NFT ID (`"0xd8682bfa6918b0174f287b888e765b9a1b4dc9c3": ["8937"]`) — retrieves a particular NFT specified.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="NFTsByOwner" label="Body">

```json
{
    "jsonrpc": "2.0",
    "method": "ankr_getNFTsByOwner",
    "params": {
        "blockchain": "eth",
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
        "walletAddress": "0x40a8396b83f84e8380f5fee85cd746fe14cb7330",
        "pageSize": 1,
        "pageToken": ""
    },
    "id": 1
}
```

</TabItem>
<TabItem value="shell" label="Headers">

```shell
Content-Type: application/json
```

</TabItem>
</Tabs>

### Response

The response contains all the NFTs that belong to the account address specified by request parameters.

#### Parameters

A successful response contains the following parameters:

* `id` (int64; required):
* `jsonrpc` (string; required):
* `result` (object): the data object containing a list of NFT assets and their metadata:

  * `blockchain` (string; required): one of the supported chains (`eth`, `bsc`, `fantom`, `avalanche`, `polygon`, `arbitrum`, `syscoin`, `optimism`).
  * `collectionName` (string): a collection name the NFT asset belongs to.
  * `contractAddress` (string): an NFT collection's EVM-compatible contract address; supports the Ethereum Name Service (ENS).
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

<Tabs>
<TabItem value="NFTsByOwner_response" label="Schema">

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

</TabItem>
<TabItem value="NFTsByOwner_example" label="Example">

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

</TabItem>
</Tabs>

---

## `ankr_getNFTMetadata`

Gets NFT metadata (ERC721/ERC1155/ENS/POAP) associated with a specific NFT. A request could be further narrowed using the corresponding request body parameters.

### Request

#### Parameters

* `id` (int64; required): a request ID (example: 1).
* `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
* `method` (string; required): a method used for the request.
* `params` (object): the data object containing request body parameters.

  * `blockchain` (string; required): one of the supported chains (`eth`, `bsc`, `fantom`, `avalanche`, `polygon`, `arbitrum`, `syscoin`, `optimism`).
  * `contractAddress` (string): a contract address of the NFT the metadata belongs to; supports the Ethereum Name Service (ENS).
  * `tokenId` (integer): a token ID of the NFT the metadata belongs to.

<Tabs>
<TabItem value="ankr_getNFTMetadata" label="Body">

```json
{
    "jsonrpc": "2.0",
    "method": "ankr_getNFTMetadata",
    "params": {
        "blockchain": "avalanche",
        "contractAddress": "0x8d01c8ee82e581e55c02117a676b5bbd4734fabb",
        "tokenId": "23240"
    },
    "id": 1
}
```

</TabItem>
<TabItem value="shell" label="Headers">

```shell
Content-Type: application/json
```

</TabItem>
</Tabs>

### Response

A successful request returns, along with the general parameters, the `result` object containing metadata info on the NFT specified by request parameters.

#### Parameters

* `id` (int64; required): a request ID (example: 1).
* `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0).
* `result` (object): the data object containing the NFT metadata and NFT attributes:

  * `metadata` (object): the data object containing the NFT metadata:
    * `blockchain` (string; required): one of the supported chains (`eth`, `bsc`, `fantom`, `avalanche`, `polygon`, `arbitrum`, `syscoin`, `optimism`).
    * `contractAddress` (string): a contract address of the NFT Collection; supports the Ethereum Name Service (ENS).
    * `contractType` (string): a contract type of the NFT the metadata belongs to (example: ERC721, ERC1155).
    * `tokenId` (string): a token ID of the NFT the metadata belongs to (example: 7822).

  * `attributes`: an object containing additional information on the NFT:
    * `contractType` (string): a contract type of the NFT the metadata belongs to (example: ERC721, ERC1155). 
    * `tokenUrl` (string): a URL that points to the place storing an NFT's metadata (example: [https://live---metadata-5covpqijaa-uc.a.run.app/metadata/7822](https://live---metadata-5covpqijaa-uc.a.run.app/metadata/7822))
    * `imageUrl` (string): a URL that points to the actual digital file, usually an IPFS link (example: [https://live---metadata-5covpqijaa-uc.a.run.app/images/7822](https://live---metadata-5covpqijaa-uc.a.run.app/images/7822))
    * `name` (string): a name of the token (example: Rock 23240).
    * `description` (string): a description of the NFT (example: A very angry NFT bird).
    * `traits`: an array of pre-defined NFT traits:
       * `trait_type` (string): a specific type of traits (example: Eyes).
       * `value` (string): a specific value of traits (example: Angry).

### Code Examples

#### Request

```shell
curl --location --request POST 'https://rpc.ankr.com/multichain' \
--header 'Content-Type: application/json' \
--data-raw '{
    "jsonrpc": "2.0",
    "method": "ankr_getNFTMetadata",
    "params": {
        "blockchain": "avalanche",
        "contractAddress": "0x8d01c8ee82e581e55c02117a676b5bbd4734fabb",
        "tokenId": "23240"
    },
    "id": 1
}'
```

#### Response

Code: 200 OK

<Tabs>
<TabItem value="ankr_getNFTMetadata_response" label="Schema">

```json
{
  "error": {},
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "attributes": {
      "contractType": 0,
      "description": "string",
      "imageUrl": "string",
      "name": "string",
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
    },
    "metadata": {
      "blockchain": "string",
      "collectionName": "string",
      "collectionSymbol": "string",
      "contractAddress": "string",
      "contractType": 0,
      "tokenId": "string"
    }
  }
}
```

</TabItem>
<TabItem value="ankr_getNFTMetadata_example" label="Example">

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "metadata": {
            "blockchain": "avalanche",
            "contractAddress": "0x8d01c8ee82e581e55c02117a676b5bbd4734fabb",
            "tokenId": "23240",
            "contractType": "ERC721"
        },
        "attributes": {
            "tokenUrl": "https://ipfs.io/ipfs/QmYen4cGUc3gF9UQnCycq2AADYLYzoM6mvVzoajAXTr7vH/rock23240.json",
            "imageUrl": "https://ipfs.io/ipfs/QmPktcEDiRD9qNwc497mwQkJ3zYFQtHwFooPLkgDdRqU4R/23240.png",
            "name": "Rock 23240",
            "description": "Rock #23240, can be used to play Rock Game",
            "traits": [
                {
                    "trait_type": "face",
                    "value": "Brown"
                },
                {
                    "trait_type": "nose",
                    "value": "Regular Nose"
                },
                {
                    "trait_type": "mouth",
                    "value": "Chinstrap"
                },
                {
                    "trait_type": "eyes",
                    "value": "Big Shades"
                },
                {
                    "trait_type": "hair",
                    "value": "Stringy Hair"
                },
                {
                    "trait_type": "accessories",
                    "value": "Earring"
                }
            ],
            "contractType": "ERC721"
        }
    }
}
```

</TabItem>
</Tabs>

---

## `ankr_getNFTHolders`

Gets holders of the NFT specified by request body parameters.

### Parameters

* `id` (int64; required): a request ID (example: 1).
* `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
* `method` (string; required): a method used for the request.
* `params` (object): the data object containing request body parameters.

  * `blockchain` (string; required): either of the supported blockchains (`eth`, `bsc`, `fantom`, `avalanche`, `polygon`, `arbitrum`, `syscoin`, `optimism`).
  * `contractAddress` (string): a contract address of the NFT Collection; supports the Ethereum Name Service (ENS).
  * `pageSize` (integer): a number of results you'd like to get.
  * `pageToken` (string): a token is provided at the end of the response body and can be referenced in the request to fetch the next page.

<Tabs>
<TabItem value="getNFTHolders" label="Body">

```json
{
    "jsonrpc": "2.0",
    "method": "ankr_getNFTHolders",
    "params": {
        "blockchain": "arbitrum",
        "contractAddress": "0xc36442b4a4522e871399cd717abdd847ab11fe88",
        "pageSize": 10000,
        "pageToken": "string"
    },
    "id": 1
}
```

</TabItem>
<TabItem value="shell" label="Headers">

```shell
Content-Type: application/json
X-API-KEY: {{KEY}}
```

</TabItem>
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

<Tabs>
<TabItem value="getNFTHolders_response" label="Schema">

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

</TabItem>
<TabItem value="getNFTHolders_example" label="Example">

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

</TabItem>
</Tabs>



