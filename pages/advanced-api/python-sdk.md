# AnkrPY SDK

_AnkrPY SDK_ is a compact Python library that enables interaction with [Advanced APIs](/advanced-api/overview/).

## Get started

1. Install the latest package stored on [PyPi](https://pypi.org/project/ankr-sdk/).

```shell
pip install ankr-sdk
```

2. Initialize the SDK.

```python
from ankr import AnkrWeb3

ankr_w3 = AnkrWeb3()

# Or, if you have an Ankr Protocol premium plan
ankr_w3 = AnkrWeb3("YOUR-TOKEN")
   ```

3. Use the SDK to call the methods supported:
  * Node API

```python
eth_block = ankr_w3.eth.get_block("latest")
bsc_block = ankr_w3.bsc.get_block("latest")
polygon_block = ankr_w3.polygon.get_block("latest")
```
  * Ankr NFT API

```python
from ankr.types import Blockchain

nfts = ankr_w3.nft.get_nfts(
    blockchain=[Blockchain.ETH, Blockchain.BSC],
    wallet_address="0x0E11A192d574b342C51be9e306694C41547185DD",
    filter=[
        {"0x700b4b9f39bb1faf5d0d16a20488f2733550bff4": []},
        {"0xd8682bfa6918b0174f287b888e765b9a1b4dc9c3": ["8937"]},
    ],
)
```

  * Ankr Token API

```python
assets = ankr_w3.token.get_account_balance(
    wallet_address="0x77A859A53D4de24bBC0CC80dD93Fbe391Df45527"
)
```

  * Ankr Query API

```python
logs = ankr_w3.query.get_logs(
    blockchain="eth",
    from_block="0xdaf6b1",
    to_block=14350010,
    address=["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"],
    topics=[
        [],
        ["0x000000000000000000000000def1c0ded9bec7f1a1670819833240f027b25eff"],
    ],
    decode_logs=True,
)
```

## Chains supported

Currently, `ankr.js` supports interaction with the following chains using their aliases:

  * Ethereum: `eth`
  * BSC: `bsc`
  * Polygon: `polygon`
  * Fantom: `fantom`
  * Arbitrum: `arbitrum`
  * Avalanche: `avalanche`
  * Syscoin NEVM: `syscoin`

## Methods available

  * [`nft.get_nfts`](/advanced-api/python-sdk/#get_nfts)
  * [`nft.get_nft_metadata`](/advanced-api/python-sdk/#get_nft_metadata)
  * `nft.get_nft_holders`
  * [`token.get_token_holders`](/advanced-api/python-sdk/#get_token_holders)
  * [`token.get_token_holders_count_history`](/advanced-api/python-sdk/#get_token_holders_count_history)
  * [`token.get_token_holders_count`](/advanced-api/python-sdk/#get_token_holders_count)
  * `token.get_token_price`
  * [`token.get_account_balance`](/advanced-api/python-sdk/#get_account_balance)
  * [`query.get_logs`](/advanced-api/python-sdk/#get_logs)
  * [`query.get_blocks`](/advanced-api/python-sdk/#get_blocks)
  * [`query.get_transaction`](/advanced-api/python-sdk/#get_transaction)

### `get_nfts`

Retrieves data on all the NFTs (collectibles) owned by a wallet.

```python
nfts = ankr_w3.nft.get_nfts(
    blockchain="eth",
    wallet_address="0x0E11A192d574b342C51be9e306694C41547185DD",
    filter=[
        {"0x700b4b9f39bb1faf5d0d16a20488f2733550bff4": []},
        {"0xd8682bfa6918b0174f287b888e765b9a1b4dc9c3": ["8937"]},
    ],
)
```

### `get_nft_metadata`

Retrieves metadata of a particular NFT.

```python
nfts = ankr_w3.nft.get_nft_metadata(
    blockchain="eth",
    contract_address="0x4100670ee2f8aef6c47a4ed13c7f246e621228ec",
    token_id="4",
)
```

### `get_token_holders`

Retrieves holders of a particular NFT.

```python
holders = ankr_w3.token.get_token_holders(
    blockchain="bsc",
    contract_address="0xf307910A4c7bbc79691fD374889b36d8531B08e3",
    limit=10,
)
```

### `get_token_holders_count_history`

Retrieves the number of token holders for the particular period of time.

```python
daily_holders_history = ankr_w3.token.get_token_holders_count_history(
    blockchain="bsc",
    contract_address="0xf307910A4c7bbc79691fD374889b36d8531B08e3",
    limit=10,  # last 10 days history
)
```

### `get_token_holders_count`

Retrieves the number of token holders on the latest block.

```python
holders_count = ankr_w3.token.get_token_holders_count(
    blockchain="bsc",
    contract_address="0xf307910A4c7bbc79691fD374889b36d8531B08e3",
)
```

### `get_account_balance`

Retrieves the balance of a particular account.

```python
assets = ankr_w3.token.get_account_balance(
    wallet_address="0x77A859A53D4de24bBC0CC80dD93Fbe391Df45527",
    blockchain=["eth", "bsc"],
)
```

### `get_logs`

Retrieves history data of a particular block range.

```python
logs = ankr_w3.query.get_logs(
    blockchain="eth",
    from_block="0xdaf6b1",
    to_block=14350010,
    address=["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"],
    topics=[
        [],
        ["0x000000000000000000000000def1c0ded9bec7f1a1670819833240f027b25eff"],
    ],
    decode_logs=True,
)
```

### `get_blocks`

Retrieves full info of a particular block.

```python
blocks = ankr_w3.query.get_blocks(
    blockchain="eth",
    from_block=14500001,
    to_block=14500001,
    desc_order=True,
    include_logs=True,
    include_txs=True,
    decode_logs=True,
)
```

### `get_transaction`

Retrieves the details of a transaction specified by hash.

```python
tx = ankr_w3.query.get_transaction(
    transaction_hash="0x82c13aaac6f0b6471afb94a3a64ae89d45baa3608ad397621dbb0d847f51196f",
    include_logs=True,
    decode_logs=True,
    decode_tx_data=True,
)
```
