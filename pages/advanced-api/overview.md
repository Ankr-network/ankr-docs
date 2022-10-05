import { Code } from "../../components";
import { Bleed } from "nextra-theme-docs";
import { Callout } from "nextra-theme-docs";
import Image from 'next/image';

# Advanced APIs Overview

<Callout>
Advanced APIs is a unique feature that comes along with other extensive capabilities provided to our [Premium Plan](/rpc-service/pricing-plans/) users.
</Callout>

*Advanced APIs* is a specifically-tailored collection of JSON-RPC API endpoints built to support the most popular Web3 scenarios on multiple chains at almost instant speeds. We believe it to become a single point of reference for the multi-chain requests.

<img src="/docs/build/API.png" alt="API" class="responsive-pic" />

Advanced APIs optimize, index, cache, and store blockchain data to make it access-ready for you. To make things even better, our Advanced APIs support querying eight EVM-compatible blockchains in a single request.

## Chains Supported

Currently, Ankr supports the following EVM-compatible chains:

  * Ethereum
  * Fantom
  * Binance Smart Chain
  * Polygon 
  * Avalanche
  * Arbitrum 
  * Syscoin
  * Optimism

And more EVM and non-EVM chains coming soon.

[//]: # (in [Postman]&#40;https://documenter.getpostman.com/view/19024547/UVsEVUGQ&#41; and look through the Advanced API docs)

## API Collections Available

Query our Advanced APIs at the following URL:

> `https://rpc.ankr.com/multichain`

Check out the latest Advanced APIs collections for various Web3 scenarios:

### NFT APIs

[_NFT API Methods_](/build/products/advanced-api-sdk/nft-methods/) serve to request NFT-related data across multiple chains:

  * [`ankr_getNFTsByOwner`](/build/products/advanced-api-sdk/nft-methods/#get-nfts-by-owner) — retrieves an account-associated NFTs.
  * [`ankr_getNFTMetadata`](/build/products/advanced-api-sdk/nft-methods/#get-nft-metadata) — retrieves metadata of a particular NFT.
  * [`ankr_getNFTHolders`](/build/products/advanced-api-sdk/nft-methods/#get-nft-holders) — retrieves holders of a particular NFT.

### Query APIs

[_Query API Methods_](/build/products/advanced-api-sdk/query-methods/) serve to request info on the ranges of blocks (max range is 100) for a full list of block metadata:

  * [`ankr_getBlocks`](/build/products/advanced-api-sdk/query-methods/#get-blocks) — retrieves full info of a particular block.
  * [`ankr_getLogs`](/build/products/advanced-api-sdk/query-methods/#get-logs) — retrieves history data of a particular block range.
  * [`ankr_getTransactionsByHash`](/build/products/advanced-api-sdk/query-methods/#get-transactions-by-hash) — retrieves the details of a transaction specified by hash.

### Token APIs

[_Token API Methods_](/build/products/advanced-api-sdk/token-methods/) serve to request token-related data across multiple chains:

  * [`ankr_getAccountBalances`](/build/products/advanced-api-sdk/token-methods/#get-account-balances) — retrieves the balance of a particular account.
  * [`ankr_getCurrencies`](/build/products/advanced-api-sdk/token-methods/#get-currencies) — retrieves info on currencies available for a particular blockchain.
  * [`ankr_getTokenPrice`](/build/products/advanced-api-sdk/token-methods/#get-token-price) — retrieves the price of a particular token.
  * [`ankr_getTokenHolders`](/build/products/advanced-api-sdk/token-methods/#get-token-holders) — retrieves info on holders of a particular token.
  * [`ankr_getTokenHoldersCount`](/build/products/advanced-api-sdk/token-methods/#get-token-holders-count) — retrieves the number of token holders.

## Advanced APIs PAYG Pricing

The price of our API Credits is pegged to USD. It means that upon using ANKR tokens for PAYG, `ANKR` calculates into `API Credits` at the latest _ANKR/USD_ exchange rate.

> Our PAYG pricing model:  
> 0.10 USD = 1M API Credits  

| API Collection | Method                       | API Credits | USD/request  |
|----------------|------------------------------|-------------|--------------|
| NFT API        | `ankr_getNFTsByOwner`        | 700         | $0.00007     |
|                | `ankr_getNFTMetadata`        | 700         | $0.00007     |
|                | `ankr_getNFTHolders`         | 700         | $0.00007     |
| Query API      | `ankr_getBlocks`             | 700         | $0.00007     |
|                | `ankr_getLogs`               | 700         | $0.00007     |
|                | `ankr_getTransactionsByHash` | 700         | $0.00007     |
| Token API      | `ankr_getAccountBalances`    | 700         | $0.00007     |
|                | `ankr_getCurrencies`         | 700         | $0.00007     |
|                | `ankr_getTokenPrice`         | 700         | $0.00007     |
|                | `ankr_getTokenHolders`       | 700         | $0.00007     |
|                | `ankr_getTokenHoldersCount`  | 700         | $0.00007     |

### Support and Developer Community

<div className="p-4 border border-gray-200 dark:border-gray-900 rounded mt-6">
  [Start Building with Advanced APIs](build-with-advanced-apis/overview)↗
</div>

Our goal is to provide developers with the best user experience possible and supercharge their Web3 projects with our Advanced APIs. Join our [Discord community](http://discord.gg/ankr) to get support from our team and engage with other like-minded developers. 

We believe that community feedback fills our sails — we appreciate you proposing new features to add in our [Roadmap](https://roadmap.ankr.com/b/feature-requests/).