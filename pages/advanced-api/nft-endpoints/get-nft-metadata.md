import { Tabs, Tab } from "nextra-theme-docs";

# `ankr_getNFTMetadata`

> **Retrieves the NFT's metadata.**

Retrieves the metadata that belongs to a particular NFT (ERC721/ERC1155/ENS/POAP).

### Request

Build your request using the parameters below.

#### Parameters

* `id` (int64; required): a request ID (example: 1).
* `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
* `method` (string; required): a method used for the request.
* `params` (object): the data object containing request body parameters.

  * `blockchain` (string; required): one of the supported chains (`eth`, `bsc`, `fantom`, `avalanche`, `polygon`, `arbitrum`, `syscoin`, `optimism`).
  * `contractAddress` (string): a contract address of the NFT the metadata belongs to; supports the Ethereum Name Service (ENS).
  * `tokenId` (integer): a token ID of the NFT the metadata belongs to.

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
  "method": "ankr_getNFTMetadata",
  "params": {
    "blockchain": "string",
    "contractAddress": "string",
    "tokenId": "string"
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
  </Tab>
  <Tab>

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
  </Tab>
</Tabs>
