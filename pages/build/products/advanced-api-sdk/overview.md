import { Code } from "../../../../components";
import { Bleed } from "nextra-theme-docs";
import { Callout } from "nextra-theme-docs";
import Image from 'next/image';

# Ankr Advanced APIs

Ankr's Advanced Multichain APIs are the collection of RPC methods created to simplify querying blockchain data. These APIs do all the heavy lifting for developers to query on-chain data in a matter of seconds.
_________________
<img src="/docs/build/API.png" alt="API" class="responsive-pic"  />

Ankr's *Advanced APIs* is a specifically-tailored collection of JSON-RPC API endpoints built to support the most popular Web3 scenarios on multiple chains at almost instant speeds. We believe it to become a single point of reference for the multi-chain requests.

Query our Advanced APIs at the following URL: `https://rpc.ankr.com/multichain`.

Check out the latest Advanced APIs collections divided into the following sections:

[//]: # (in [Postman]&#40;https://documenter.getpostman.com/view/19024547/UVsEVUGQ&#41; and look through the Advanced API docs)

## NFT APIs

[_NFT API Methods_](/build/products/advanced-api-sdk/nft-methods/) serve to request NFT-related data across multiple chains:

  * [`ankr_getNFTsByOwner`](/build/products/advanced-api-sdk/nft-methods/#ankr_getnftsbyowner) — retrieves an account-associated NFTs.
  * [`ankr_getNFTMetadata`](/build/products/advanced-api-sdk/nft-methods/#ankr_getnftmetadata) — retrieves metadata of a particular NFT.
  * [`ankr_getNFTHolders`](/build/products/advanced-api-sdk/nft-methods/#ankr_getnftholders) — retrieves holders of a particular NFT.

## Query APIs

[_Query API Methods_](/build/products/advanced-api-sdk/query-methods/) serve to request info on the ranges of blocks (max range is 100) for a full list of block metadata:

  * [`ankr_getBlocks`](/build/products/advanced-api-sdk/query-methods/#ankr_getblocks) — retrieves full info of a particular block.
  * [`ankr_getLogs`](/build/products/advanced-api-sdk/query-methods/#ankr_getlogs) — retrieves history data of a particular block range.
  * [`ankr_getTransactionsByHash`](/build/products/advanced-api-sdk/query-methods/#ankr_gettransactionsbyhash) — retrieves the details of a transaction specified by hash.

## Token APIs

[_Token API Methods_](/build/products/advanced-api-sdk/token-methods/) serve to request token-related data across multiple chains:

  * [`ankr_getAccountBalances`](/build/products/advanced-api-sdk/token-methods/#ankr_getaccountbalances) — retrieves the balance of a particular account.
  * [`ankr_getCurrencies`](/build/products/advanced-api-sdk/token-methods/#ankr_getcurrencies) — retrieves info on currencies available for a particular blockchain.
  * [`ankr_getTokenPrice`](/build/products/advanced-api-sdk/token-methods/#ankr_gettokenprice) — retrieves the price of a particular token.
  * [`ankr_getTokenHolders`](/build/products/advanced-api-sdk/token-methods/#ankr_gettokenholders) — retrieves info on holders of a particular token.

## Advanced APIs PAYG Pricing

The price of our API Credits is pegged to USD. It means that upon using ANKR tokens for PAYG, `ANKR` calculates into `API Credits` at the latest _ANKR/USD_ exchange rate.

> Our PAYG pricing model:  
> 0.10 USD = 1M API Credits  

| API Collection  | Method                       | API Credits | USD/request  |
|-----------------|------------------------------|-------------|--------------|
| NFT API         | `ankr_getNFTsByOwner`        | 700         | $0.00007     |
| NFT API         | `ankr_getNFTMetadata`        | 700         | $0.00007     |
| NFT API         | `ankr_getNFTHolders`         | 700         | $0.00007     |
| Query API       | `ankr_getBlocks`             | 700         | $0.00007     |
| Query API       | `ankr_getLogs`               | 700         | $0.00007     |
| Query API       | `ankr_getTransactionsByHash` | 700         | $0.00007     |
| Token API       | `ankr_getAccountBalances`    | 700         | $0.00007     |
| Token API       | `ankr_getCurrencies`         | 700         | $0.00007     |
| Token API       | `ankr_getTokenPrice`         | 700         | $0.00007     |
| Token API       | `ankr_getTokenHolders`       | 700         | $0.00007     |
| Token API       | `ankr_getTokenHoldersCount`  | 700         | $0.00007     |


## Save Time, Money, and Effort
Ankr’s Advanced APIs take blockchain data and optimize, index, cache, and store it to make it more readily accessible. And, to make things even better, Ankr’s Advanced APIs support all major blockchains so you can search once and get data from six different EVM-compatible blockchains.

## Supported Chains
Currently, it support eight EVM compatible chains: 
- Ethereum
- Fantom
- Binance Smart Chain
- Polygon, 
- Avalanche
- Arbitrum, 
- Syscoin,
- Optimism, with more EVM and non-EVM chains coming soon.
__________________________________________

### Support and Developer Community

<div className="p-4 border border-gray-200 dark:border-gray-900 rounded mt-6">
  [Start Building with Ankr Advanced APIs](build-with-advanced-apis/overview)↗
</div>

Our goal is to support developers with best experience possible and supercharge their dApps with our Advanced APIs. Join our [community discord](http://discord.gg/ankr) for support from our team and engage with other like-minded developers to discuss, ask questions, and vibe. 

We also value community feedback, and want you all to keep proposing new features for us to add in our [roadmap](https://roadmap.ankr.com/b/feature-requests/).

