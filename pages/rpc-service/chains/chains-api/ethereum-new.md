# Ethereum API

——> Some general section description!!!

## Popular methods

**Getting Blocks**: 

  * [`eth_getBlockTransactionCountByNumber`](/rpc-service/chains/chains-api/ethereum-new/#eth_getblocktransactioncountbynumber) — retrieves the number of transactions in the block specified.
  * [`eth_getBlockByHash`](/rpc-service/chains/chains-api/ethereum-new/#eth_getblockbyhash) — retrieves information about a block by block hash.
  * [`eth_getBlockByNumber`](/rpc-service/chains/chains-api/ethereum-new/#eth_getblockbynumber) — retrieves information about a block by block number.
  * [`eth_blockNumber`](/rpc-service/chains/chains-api/ethereum-new/#eth_blocknumber) — retrieves the number of the most recent block.
  * [`eth_getBlockTransactionCountByHash`](/rpc-service/chains/chains-api/ethereum-new/#eth_getblocktransactioncountbyhash) — retrieves the number of transactions in a block matching the given block hash.

**Reading Transactions**:

  * [`eth_getTransactionByHash`](/rpc-service/chains/chains-api/ethereum-new/#eth_gettransactionbyhash) — retrieves information on a transaction specified by hash.
  * [`eth_getTransactionByBlockHashAndIndex`](/rpc-service/chains/chains-api/ethereum-new/#eth_gettransactionbyblockhashandindex) — retrieves information on a transaction specified by block hash and transaction index position.
  * [`eth_getTransactionCount`](/rpc-service/chains/chains-api/ethereum-new/#eth_gettransactioncount) — retrieves the number of transactions sent from an address.
  * [`eth_getTransactionReceipt`](/rpc-service/chains/chains-api/ethereum-new/#eth_gettransactionreceipt) — retrieves the receipt of a transaction by transaction hash.
  * [`eth_getTransactionByBlockNumberAndIndex`](/rpc-service/chains/chains-api/ethereum-new/#eth_gettransactionbyblocknumberandindex) — retrieves information on a transaction by block number and transaction index position.

**Account Information**:

  * [`eth_getCode`](/rpc-service/chains/chains-api/ethereum-new/#eth_getcode) — retrieves code at an address specified.
  * [`eth_getBalance`](/rpc-service/chains/chains-api/ethereum-new/#eth_getbalance) — retrieves the balance of the account by address.
  * [`eth_accounts`](/rpc-service/chains/chains-api/ethereum-new/#eth_accounts) — retrieves the list of addresses owned by client.
  * [`eth_getStorageAt`](/rpc-service/chains/chains-api/ethereum-new/#eth_getstorageat) — retrieves the value from a storage position at an address specified.



## `eth_getBlockTransactionCountByNumber`

> Retrieves the number of transactions in the block specified by number.

### Body parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array): 

    1. String: either a HEX string of a *Block number* or a string of a *Block tag*:
        * `earliest`: the lowest numbered block available on the client.
        * `finalized`: the most recent crypto-economically secure block; cannot be re-orged outside of manual intervention driven by community coordination.
        * `safe`: the most recent block that is safe from re-orgs under honest majority and certain synchronicity assumptions.
        * `latest`: the most recent block in the canonical chain observed by the client; this block can be re-orged out of the canonical chain even under healthy/normal conditions.
        * `pending`: a sample next block built by the client on top of the `latest` and containing the set of transactions usually taken from local mempool. In other words, it is the block that has not been mined yet.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getBlockTransactionCountByNumber",
      "params": "latest",
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0xb6"
}
```

---

## `eth_getBlockByHash`

> Retrieves information for the block specified by block hash.

### Body parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array):

    1. String: the block's hash (32 byte hex value).
    2. Boolean: if `true` it returns the full transaction objects, if `false` — only the hashes of the transactions.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getBlockByHash",
      "params": ["0xdc0818cf78f21a8e70579cb46a43643f78291264dda342ae31049421c82d21ae", false],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "difficulty": "0x4ea3f27bc",
        "extraData": "0x476574682f4c5649562f76312e302e302f6c696e75782f676f312e342e32",
        "gasLimit": "0x1388",
        "gasUsed": "0x0",
        "hash": "0xdc0818cf78f21a8e70579cb46a43643f78291264dda342ae31049421c82d21ae",
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "miner": "0xbb7b8287f3f0a933474a79eae42cbca977791171",
        "mixHash": "0x4fffe9ae21f1c9e15207b1f472d5bbdd68c9595d461666602f2be20daf5e7843",
        "nonce": "0x689056015818adbe",
        "number": "0x1b4",
        "parentHash": "0xe99e022112df268087ea7eafaf4790497fd21dbeeb6bd7a1721df161a6657a54",
        "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
        "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "size": "0x220",
        "stateRoot": "0xddc8b0234c2e0cad087c8b389aa7ef01f7d79b2570bccb77ce48648aa61c904d",
        "timestamp": "0x55ba467c",
        "totalDifficulty": "0x78ed983323d",
        "transactions": [],
        "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
        "uncles": []
    }
}
```

---

## `eth_getBlockByNumber`

> Retrieves information for the block specified by block number.

### Body parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array):

    1. String: either a HEX value of a *Block number* or one of the following *Block tags*:
       * `earliest`: the lowest numbered block available on the client.
       * `finalized`: the most recent crypto-economically secure block; cannot be re-orged outside of manual intervention driven by community coordination.
       * `safe`: the most recent block that is safe from re-orgs under honest majority and certain synchronicity assumptions.
       * `latest`: the most recent block in the canonical chain observed by the client; this block can be re-orged out of the canonical chain even under healthy/normal conditions.
       * `pending`: a sample next block built by the client on top of the `latest` and containing the set of transactions usually taken from local mempool. In other words, it is the block that has not been mined yet.
    2. Boolean: if `true` it returns the full transaction objects, if `false` — only the hashes of the transactions.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getBlockByNumber",
      "params": ["0x1b4", true],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "difficulty": "0x4ea3f27bc",
        "extraData": "0x476574682f4c5649562f76312e302e302f6c696e75782f676f312e342e32",
        "gasLimit": "0x1388",
        "gasUsed": "0x0",
        "hash": "0xdc0818cf78f21a8e70579cb46a43643f78291264dda342ae31049421c82d21ae",
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "miner": "0xbb7b8287f3f0a933474a79eae42cbca977791171",
        "mixHash": "0x4fffe9ae21f1c9e15207b1f472d5bbdd68c9595d461666602f2be20daf5e7843",
        "nonce": "0x689056015818adbe",
        "number": "0x1b4",
        "parentHash": "0xe99e022112df268087ea7eafaf4790497fd21dbeeb6bd7a1721df161a6657a54",
        "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
        "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "size": "0x220",
        "stateRoot": "0xddc8b0234c2e0cad087c8b389aa7ef01f7d79b2570bccb77ce48648aa61c904d",
        "timestamp": "0x55ba467c",
        "totalDifficulty": "0x78ed983323d",
        "transactions": [],
        "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
        "uncles": []
    }
}
```

---

## `eth_blockNumber`

> Retrieves the number of the most recent block.

### Body parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array): None.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_blockNumber",
      "params": [],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0xf48c7e"
}
```

---

## `eth_getBlockTransactionCountByHash`

> Retrieves the number of transactions in a block specified by block hash.

### Body parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array):

    1. String: a block hash (32 byte hex value).

### Request example:

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getBlockTransactionCountByHash",
      "params": ["0x829df9bb801fc0494abf2f443423a49ffa32964554db71b098d332d87b70a48b"],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x7b"
}
```

---

## `eth_getTransactionByHash`

> Retrieves information on a transaction specified by transaction hash.

### Body parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array):

    1. String: a transaction hash (32 byte hex value).

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getTransactionByHash",
      "params": ["0x88df016429689c079f3b2f6ad39fa052532c56795b733da78a91ebe6a713944b"],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "blockHash": "0x1d59ff54b1eb26b013ce3cb5fc9dab3705b415a67127a003c3e61eb445bb8df2",
        "blockNumber": "0x5daf3b",
        "from": "0xa7d9ddbe1f17865597fbd27ec712455208b6b76d",
        "gas": "0xc350",
        "gasPrice": "0x4a817c800",
        "hash": "0x88df016429689c079f3b2f6ad39fa052532c56795b733da78a91ebe6a713944b",
        "input": "0x68656c6c6f21",
        "nonce": "0x15",
        "to": "0xf02c1c8e6114b1dbe8937a39260b5b0a374432bb",
        "transactionIndex": "0x41",
        "value": "0xf3dbb76162000",
        "type": "0x0",
        "chainId": "0x1",
        "v": "0x25",
        "r": "0x1b5e176d927f8e9ab405058b2d2457392da3e20f328b16ddabcebc33eaac5fea",
        "s": "0x4ba69724e8f69de52f0125ad8b3c5c2cef33019bac3249e2c0a2192766d1721c"
    }
}
```

---

## `eth_getTransactionByBlockHashAndIndex`

> Retrieves information on a transaction specified by block hash and transaction index position.

### Body parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array):

    1. String: a block hash (32 byte hex value).
    2. String: a transaction index position (hex encoded unsigned integer).

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getTransactionByBlockHashAndIndex",
      "params": ["0x829df9bb801fc0494abf2f443423a49ffa32964554db71b098d332d87b70a48b", "0x2"],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "blockHash": "0x829df9bb801fc0494abf2f443423a49ffa32964554db71b098d332d87b70a48b",
        "blockNumber": "0xc4fa88",
        "from": "0x4e0c43c30964b80c37df90d229e668823b6f36b6",
        "gas": "0x34ed8",
        "gasPrice": "0x6c088e200",
        "hash": "0xd0f7b79f2b38a5e8303ff523da621d6cb04a18e722d6cc0bcce75309cd804b2e",
        "input": "0x38ed1739000000000000000000000000000000000000000000000012f211da6a00e70ccd0000000000000000000000000000000000000000000000059ddf43d23461577600000000000000000000000000000000000000000000000000000000000000a00000000000000000000000004e0c43c30964b80c37df90d229e668823b6f36b600000000000000000000000000000000000000000000000000000000610039cb00000000000000000000000000000000000000000000000000000000000000030000000000000000000000007d1afa7b718fb893db30a3abc0cfc608aacfebb0000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000009813037ee2218799597d83d4a5b6f3b6778218d9",
        "nonce": "0x26",
        "to": "0x03f7724180aa6b939894b5ca4314783b0b36b329",
        "transactionIndex": "0x2",
        "value": "0x0",
        "type": "0x0",
        "chainId": "0x1",
        "v": "0x25",
        "r": "0x43284f337fce4ab4225dd123935934ebd12067440d8a2a05ac297c2d0f62d8ab",
        "s": "0x3827daa345b9b30ecef4df256a72059ca04106dee07a6a97ba5b4b719550cde3"
    }
}
```

---

## `eth_getTransactionCount`

> Retrieves the number of transactions sent from an address.

### Body parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array):

    1. String: address (hex encoded).
    2. String: either the hex value of a block number or one of the following block tags:

        * `earliest`: the lowest numbered block available on the client.
        * `finalized`: the most recent crypto-economically secure block; cannot be re-orged outside of manual intervention driven by community coordination.
        * `safe`: the most recent block that is safe from re-orgs under honest majority and certain synchronicity assumptions.
        * `latest`: the most recent block in the canonical chain observed by the client; this block can be re-orged out of the canonical chain even under healthy/normal conditions.
        * `pending`: a sample next block built by the client on top of the `latest` and containing the set of transactions usually taken from local mempool. In other words, it is the block that has not been mined yet.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getTransactionCount",
      "params": ["0x8D97689C9818892B700e27F316cc3E41e17fBeb9", "latest"],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x9"
}
```

---

## `eth_getTransactionReceipt`

> Retrieves the receipt of a transaction specified by transaction hash.

### Body parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array):

    1. String: a transaction hash (32 byte hex value).

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getTransactionReceipt",
      "params": ["0x85d995eba9763907fdf35cd2034144dd9d53ce32cbec21349d4b12823c6860c5"],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "blockHash": "0xa957d47df264a31badc3ae823e10ac1d444b098d9b73d204c40426e57f47e8c3",
        "blockNumber": "0xeff35f",
        "contractAddress": null,
        "cumulativeGasUsed": "0xa12515",
        "effectiveGasPrice": "0x5a9c688d4",
        "from": "0x6221a9c005f6e47eb398fd867784cacfdcfff4e7",
        "gasUsed": "0xb4c8",
        "logs": [
            {
                "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                "topics": [
                    "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
                    "0x0000000000000000000000006221a9c005f6e47eb398fd867784cacfdcfff4e7",
                    "0x0000000000000000000000001e0049783f008a0085193e00003d00cd54003c71"
                ],
                "data": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                "blockNumber": "0xeff35f",
                "transactionHash": "0x85d995eba9763907fdf35cd2034144dd9d53ce32cbec21349d4b12823c6860c5",
                "transactionIndex": "0x66",
                "blockHash": "0xa957d47df264a31badc3ae823e10ac1d444b098d9b73d204c40426e57f47e8c3",
                "logIndex": "0xfa",
                "removed": false
            }
        ],
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000080000000000000000200000000000000000000020000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020001000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000010200000000000000000000000000000000000000000000000000000020000",
        "status": "0x1",
        "to": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        "transactionHash": "0x85d995eba9763907fdf35cd2034144dd9d53ce32cbec21349d4b12823c6860c5",
        "transactionIndex": "0x66",
        "type": "0x2"
    }
}
```

---

## `eth_getTransactionByBlockNumberAndIndex`

> Retrieves information on a transaction by block number and transaction index position.

### Body parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array):

    1. String: either the hex value of a _Block number_ or one of the following _Block tags_:
        * `earliest`: the lowest numbered block available on the client.
        * `finalized`: the most recent crypto-economically secure block; cannot be re-orged outside of manual intervention driven by community coordination.
        * `safe`: the most recent block that is safe from re-orgs under honest majority and certain synchronicity assumptions.
        * `latest`: the most recent block in the canonical chain observed by the client; this block can be re-orged out of the canonical chain even under healthy/normal conditions.
        * `pending`: a sample next block built by the client on top of the `latest` and containing the set of transactions usually taken from local mempool. In other words, it is the block that has not been mined yet.
    2. String: the transaction index position (hex encoded unsigned integer).

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getTransactionByBlockNumberAndIndex",
      "params": ["0xc5043f", "0x2"],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "blockHash": "0xa917fcc721a5465a484e9be17cda0cc5493933dd3bc70c9adbee192cb419c9d7",
        "blockNumber": "0xc5043f",
        "from": "0x829bd824b016326a401d083b33d092293333a830",
        "gas": "0x33450",
        "gasPrice": "0x0",
        "hash": "0xdf8d8677c9cd5f81d8ee3663a4a64ce7fe93d35fcb46004529e77394630f8e11",
        "input": "0x",
        "nonce": "0xa16562",
        "to": "0x6e2edc2af25cd5704d99ba73ac7ece701f50192d",
        "transactionIndex": "0x2",
        "value": "0x20b9632b7dc0a3e",
        "type": "0x0",
        "v": "0x26",
        "r": "0x6fd8d85d440c87e894898ce7c12725eb994d416b0843ae5ddb0f188bc21ac9a2",
        "s": "0x47fe6bc7bb3ddc8d579509fed960934ab8ed6004152e62b2abca6639393b8e77"
    }
}
```

---

## `eth_getCode`

> Retrieves code at an address specified.

## Body parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array):

    1. String: an address (hex encoded).
    2. String: either the hex value of a _Block number_ or one of the following _Block tags_:
        * `earliest`: the lowest numbered block available on the client.
        * `finalized`: the most recent crypto-economically secure block; cannot be re-orged outside of manual intervention driven by community coordination.
        * `safe`: the most recent block that is safe from re-orgs under honest majority and certain synchronicity assumptions.
        * `latest`: the most recent block in the canonical chain observed by the client; this block can be re-orged out of the canonical chain even under healthy/normal conditions.
        * `pending`: a sample next block built by the client on top of the `latest` and containing the set of transactions usually taken from local mempool. In other words, it is the block that has not been mined yet.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getCode",
      "params": ["0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b", "0x2"],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x"
}
```

---

## `eth_getBalance`

> Retrieves the balance of the account specified by address.

### Body parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array):

    1. String: an address (hex encoded).
    2. String: either the hex value of a _Block number_ or one of the following _Block tags_:
        * `earliest`: the lowest numbered block available on the client.
        * `finalized`: the most recent crypto-economically secure block; cannot be re-orged outside of manual intervention driven by community coordination.
        * `safe`: the most recent block that is safe from re-orgs under honest majority and certain synchronicity assumptions.
        * `latest`: the most recent block in the canonical chain observed by the client; this block can be re-orged out of the canonical chain even under healthy/normal conditions.
        * `pending`: a sample next block built by the client on top of the `latest` and containing the set of transactions usually taken from local mempool. In other words, it is the block that has not been mined yet.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getBalance",
      "params": ["0x8D97689C9818892B700e27F316cc3E41e17fBeb9", "latest"],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x2c85c3ecfcb5fb"
}
```

---

## `eth_accounts`

> Retrieves the list of addresses owned by client.

### Body parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array): None.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_accounts",
      "params": [],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "result": [],
    "id": 1
}
```

---

## `eth_getStorageAt`

> Retrieves the value from a storage position at an address specified.

### Body parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array):

    1. String: an address of the storage (hex encoded).
    2. String: a slot position in the storage (hex encoded unsigned integer).
    3. String: either the hex value of a block number or one of the following block tags:

        * `earliest`: the lowest numbered block available on the client.
        * `finalized`: the most recent crypto-economically secure block; cannot be re-orged outside of manual intervention driven by community coordination.
        * `safe`: the most recent block that is safe from re-orgs under honest majority and certain synchronicity assumptions.
        * `latest`: the most recent block in the canonical chain observed by the client; this block can be re-orged out of the canonical chain even under healthy/normal conditions.
        * `pending`: a sample next block built by the client on top of the `latest` and containing the set of transactions usually taken from local mempool. In other words, it is the block that has not been mined yet.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getStorageAt",
      "params": ["0x295a70b2de5e3953354a6a8344e616ed314d7251", "0x0", "latest"],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x0000000000000000000000000000000000000000000000000000000000000000"
}
```

---