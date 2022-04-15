---
Title: Near RPC
id: near
---

# Near RPC
NEAR is a decentralized, development platform built on a [sharded](https://near.org/downloads/Nightshade.pdf), Proof-of-Stake, Layer 1 blockchain designed for ease of use.

NEAR developers can host serverless applications and smart contracts that easily connect to "open finance" networks and benefit from an ecosystem of "open web"  components.

:::warning
Near is not compatible with the Ethereum Virtual Machine.  All contract code is deployed and run inside a WASM Compatible Virtual Machine. 
:::

## Quick links

[**Near Protocol**](https://near.org/)

[**Docs**](https://docs.near.org/docs/develop/basics/getting-started)

[**Github**](https://github.com/near)


---

## Connect wallet

The NEAR Protocol has its own NEAR Wallet. This is an in-browser, web-based wallet for creating and interacting with NEAR accounts.&#x20;

[Near Wallet Docs](https://docs.near.org/docs/tools/near-wallet)

**Rainbow Bridge** allows the migration of ETH assets to the NEAR platform.&#x20;

Ethereum users can onboard to NEAR using the [ETH Faucet](https://faucet.paras.id), hosted by Paras, and MetaMask.&#x20;

Users must login to MetaMask and prove that their account has a balance higher than 0.05 ETH to  claim a NEAR account and start using the [**Rainbow Bridge**](https://near.org/bridge/#:\~:text=Simply%20by%20logging%20into%20MetaMask,the%20Rainbow%20Bridge%20right%20away.).

---

## Integrate code

Near is non-evm compatible and has its own native RPC methods.
Check out the [Near RPC docs](https://docs.near.org/docs/api/rpc)
Below are some examples

### Gas price

Returns gas price for a specific block_height or block_hash. Using [null] will return the most recent block's gas price.

#### Example request

```js
curl https://rpc.ankr.com/near \
  -X POST \
  -H "Content-Type: application/json" \
   --data '{"jsonrpc": "2.0",
   "id": "dontcare",
   "method": "gas_price",
   "params": [17824600]}'
```

#### Example response

```js
{"jsonrpc":"2.0","result":{"gas_price":"100000000"},"id":"dontcare"}
```

### Block

Queries network and returns block details for given height or hash. You can also use `finality` param to return latest block details.

:::info
You may choose to search by a specific block or finality, you can not choose both.
:::

#### Example request

```js
curl https://rpc.ankr.com/near \
  -X POST \
  -H "Content-Type: application/json" \
   --data '{
  "jsonrpc": "2.0",
  "id": "dontcare",
  "method": "block",
  "params": {
    "finality": "final"
  }
}'
```

#### Example response (Extract)

```js
{"jsonrpc":"2.0","result":{"author":"moonlet.poolv1.near","header":{"height":61437572,"prev_height":61437571,"epoch_id":"9tqM9PSuQQXjvrAEhvRb45Q7XpDNS8itEcjr8yACDe2C","next_epoch_id":"2Ri3EriB9b5hBHmSPLLfJQhUyqCDx8Q8zsrpVK6aMFCo","hash":"GtGb4NnzLKxNYxWLum3eNhto6oWE1syc6ryrj9xAYqJU","prev_hash":"4LA5n9S72HCBbxwyR38gLZnZtcksc27kmFYZzZ2fQJob","prev_state_root":"AtdLpdibkTxhGu2CJRtgyWF5rGSpMeUEXH1Gb9SrjSQU","chunk_receipts_root":"CkUi6LaNxEeHrWsrm1QVj7vD...
```

### Transaction status

Queries status of a transaction by hash and returns the final transaction result.

method: tx
params:
transaction hash (see NEAR Explorer for a valid transaction hash)
sender account id

#### Example request 

```js
curl https://rpc.ankr.com/near \
  -X POST \
  -H "Content-Type: application/json" \
   --data '{
  "jsonrpc": "2.0",
  "id": "dontcare",
  "method": "tx",
  "params": ["6zgh2u9DqHHiXzdy9ouTP7oGky2T4nugqzqt9wJZwNFm", "sender.testnet"]
}'
```




