---
title: Premium APIs
id: premium-apis
---

Premium APIs are a collection of exclusive API endpoints exclusively for Premium Subscribers. 

These APIs have been designed to:

* Efficiently obtain data for a block range. 
* Simplify data queries without reliance on a 3rd party.
* Enable Multichain queries.

Currently, the following methods are available:

## **ankr_getBlocksRange** 
Obtains detailed information about blocks from a specific range for a specific chain. 

## **ankr_getNFTsByOwner**
Obtains detailed information about NFTs from a wallet address across multiple chains (currently 5 chains: Polygon, Avalanche, Ethereum, Binance Smart Chain, Fantom

## Get Started

Based on JSON RPC API principles. JSON RPC functions, putting the method in the URL and the arguments in the query body. 

### Request, Response Format

POST request format with `Content-Type: application/json header`
Responses return JSON objects.

Make requests over HTTPS and TLS 1.2  

### Authentication

Token-based authentication.
API keys must be included in the header of all requests.
Find your keys on the [Ankr Protocol Premium Plan](https://www.ankr.com/protocol/plan/) page

### Client libraries

### Rate Limits

Maximum volume of requests?

For example: 

```
{
    "jsonrpc": "2.0",
    "id": 1,
    "error": {
        "code": -32600
        "message": "exceeded number of requests"
    }
}
```

### Errors

#### Error object

|code| message |
|----|---------|
|32600| "blocks range can't be greater than 100" |
|32000| "rpc error: code = ResourceExhausted desc = grpc: received message larger than max (5643785 vs. 4194304)" |

#### Example Error object

{
    "jsonrpc": "2.0",
    "id": 1,
    "error": {
        "code": -32000,
        "message": "blocks range can't be greater than 100"
    }
}


#### Error codes and fixes

<Exhaustive list of error codes needed>

|Message  | Solution |
|---------|----------|
|blocks range can't be greater than 100 | try again |


# ADVANCED API ENDPOINTS

## **ankr_getBlocksRange**

*ankr_getBlocksRange* retrieves detailed information about each block within a specific range very quickly including event logs and topics. 

#### Chains

* Polygon
* Avalanche
* Fantom
* Binance Smart Chain
* Ethereum

#### Request Body Parameters

|Parameter | Description|
|---------|-------------|
|blockchain| **required** bsc, eth, avalanche, polygon, fantom |
|fromBlock | **required** the earliest block in the range to be queried |
|toBlock | **required** the latest block in the range to be queried |

#### Example Request

{
    "jsonrpc": "2.0",
    "method": "ankr_getBlocksRange",
    "params": {
        "blockchain": "polygon",
        "fromBlock": 25579949,
        "toBlock": 25579952
    },
    "id": 67
}

#### Example Response (Extract)

```
{
    "jsonrpc": "2.0",
    "id": 67,
    "result": {
        "blocks": [
            {
                "blockchain": "polygon",
                "number": "0x18651ad",
                "hash": "0x85f1756476e4292c94d3eb0cdd8afc52dcdd6fb18d2a356b0e149f34d51e9c4a",
                "parentHash": "0x1b3791d3e207eb26d27935ec6e8d8f8e45abca74f6b762bb27d48a1c47a3669e",
                "nonce": "0x0000000000000000",
                "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
                "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
                "logsBloom": "0x34a02024033259260461304782208000203028c81260ca88480619c02580c8066108581434018809149140d2008807271071a100984280a00208018901a0e2c03615e0019062e2240b804029a42b80b8a01434f04347280d94b98c0404093201800b8240022c833189000a00059448400c0ac026298c4561c080a0352913228626091540d0c80c458863821408c018845033a7a30624540829802442210a20083203000214108e1400307800300993c0d64a000440e4a848cc6b014011087463c020804a0182352308016f800a1d117840746400058b985059188a0f9c516004a7100cc414660c953427479014238415c765b52801550006622a8c064630095c",
                "stateRoot": "0x1b2c3e58b9e75a77fd9b0c1fadda90312041ac6307a317e4da887fb8f2e80440",
                "miner": "0x0000000000000000000000000000000000000000",
                "difficulty": "0x16",
                "extraData": "0xd482020e83626f7286676f312e3137856c696e7578000000000000000000000068f1bfe67d87b4c82e6ff48183ada02489281d543a2f3534156efc456f7f86947be38fbec5e9dd1de62aa66e97802172d5735d02afbe587e73e500ec9c74a52a01",
                "size": "0x7b68",
                "gasLimit": "0x1c9c380",
                "gasUsed": "0x71fbd5",
                "timestamp": "0x62225813",
                "transactionsRoot": "0x39f5107b49eb975dd07a5763b52e1cde1f3a435f04250cfb58f9ce2f3d7edd00",
                "receiptsRoot": "0x63696323930c495905f02a947d0be8ce1f0759a3eb1c271bfa84d345040cdaa6",
                "totalDifficulty": "0x13cdc8a2",
                "transactions": [
                    {
                        "v": "0x1",
                        "r": "0xdf23b7d6e6124f228adba4daa306a0b163b02dc6ce6b26c57cb834f95a5c016c",
                        "s": "0x16449ddae1b8bf6a1888d9ffff472d8d7d3bc46e8f94b2a763d3feea325178ef",
                        "nonce": "0x9456",
                        "from": "0x33ad1509c962193d4ce5abcb24f324bd7680108b",
                        "gas": "0x61a80",
                        "gasPrice": "0x8bb2c97000",
                        "input": "0x7b3205f5",
                        "blockNumber": "0x18651ad",
                        "to": "0xf0ae2f8bc0c4585d89f09ce17427ea7a75c4dbb0",
                        "transactionIndex": "0x0",
                        "blockHash": "0x85f1756476e4292c94d3eb0cdd8afc52dcdd6fb18d2a356b0e149f34d51e9c4a",
                        "value": "0x0",
                        "type": "0x2",
                        "contractAddress": null,
                        "cumulativeGasUsed": "0x427da",
                        "gasUsed": "0x427da",
                        "logs": [
                            {
                                "address": "0xf0ae2f8bc0c4585d89f09ce17427ea7a75c4dbb0",
                                "topics": [
                                    "0x482e76a65b448a42deef26e99e58fb20c85e26f075defff8df6aa80459b39006",
                                    "0x0000000000000000000000000000000000000000000000000000000000001657",
                                    "0x0000000000000000000000000000000000000000000000020000000000189879"
                                ],
                                "data": "0x0000000000000000000000000000000000000000000000000000003e81ae4858",
                                "blockNumber": "0x18651ad",
                                "transactionHash": "0xc41465d28bb4c5c048d49ae9bd1171c3c4dd4281d35e7c7dadf133e28dc23dde",
                                "transactionIndex": "0x0",
                                "blockHash": "0x85f1756476e4292c94d3eb0cdd8afc52dcdd6fb18d2a356b0e149f34d51e9c4a",
                                "logIndex": "0x0",
                                "removed": false
                            },
```

### Understanding Response Object

TBD Attributes to be explained (see Solidity Docs)

##**ankr_getNFTsByOwner**

Obtains detailed information about NFTs from a wallet address across multiple chains (currently 5 chains: Polygon, Avalanche, Ethereum, Binance Smart Chain, <other chain?>

#### Chains

* Polygon
* Avalanche
* Fantom
* Binance Smart Chain
* Ethereum

#### Request Body Parameters

|Parameter | Description|
|---------|-------------|
|walletAddress| **required** bcc, eth, avax, polygon, ftm |

#### Example Request

```
{
    "jsonrpc": "2.0",
    "method": "ankr_getNFTsByOwner",
    "params": {
        "walletAddress": "0x0E11A192d574b342C51be9e306694C41547185DD"
    },
    "id": 1
}
```

#### Example Response (Extract)

```
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "owner": "0x0e11a192d574b342c51be9e306694c41547185dd",
        "assets": [
            {
                "blockchain": "polygon",
                "name": "Asterisk#0048",
                "tokenId": "48591634713396600853243112467314031476274393322871140955834730269541062934578",
                "imageUrl": "https://api.opensea.io/api/v2/metadata/matic/0x2953399124F0cBB46d2CbACD8A89cF0599974963/48591634713396600853243112467314031476274393322871140955834730269541062934578",
                "collectionName": "",
                "symbol": "",
                "contractType": "ERC1155",
                "contractAddress": "0x2953399124f0cbb46d2cbacd8a89cf0599974963",
                "traits": []
            },
        ],
        "nextPageToken": "BjxaEQyvWry96Z7VXNrffspsVkXZ8PXkMEc8epttW3Jn8JvEx2mF25WLU2cndjitQE4iDiECmMpVBwfPQ8b9hVabmBXipuN6y3gqzgWUbCCWAR2Lv99dF4QgbcANVeaqs7hGDAo"
    }
}
```

### Understanding Response Object

TBD Attributes to be explained (see Solidity Docs)

"blockchain": 
"name": 
"tokenId": 
"imageUrl": 
"collectionName": "",
"symbol": "",
"contractType": 
"contractAddress": 
"traits": []
"nextPageToken":




