import { Code } from "components";
import { Bleed } from "nextra-theme-docs";
import { Callout } from "components";
import Image from 'next/image';

# Advanced APIs Overview

<Callout>
Advanced APIs is a unique feature that comes along with other extensive capabilities provided to our [Premium Plan](/rpc-service/pricing-plans/) users.
</Callout>

*Advanced APIs* is a specifically-tailored collection of JSON-RPC API endpoints built to support the most popular Web3 scenarios on multiple chains at almost instant speeds. We believe it to become a single point of reference for the multi-chain requests.
<br/>

<img src="/docs/build/API.png" alt="API" class="responsive-pic" />

Advanced APIs optimize, index, cache, and store blockchain data to make it access-ready for you. To make things even better, our Advanced APIs support querying eight EVM-compatible blockchains in a single request.

## Chains Supported

Currently, Advanced APIs work with the following EVM-compatible chains:

**Mainnets**:

  * Ethereum
  * Fantom
  * BNB Smart Chain
  * Polygon 
  * Avalanche
  * Arbitrum 
  * Syscoin
  * Optimism

**Testnets**:

  * Ethereum Goerli
  * Polygon Mumbai
  * Avalanche Fuji

And more EVM and non-EVM chains coming soon.

[//]: # (in [Postman]&#40;https://documenter.getpostman.com/view/19024547/UVsEVUGQ&#41; and look through the Advanced API docs)

## API Methods Supported

Query our Advanced APIs at the following URL:

> `https://rpc.ankr.com/multichain`

Check out the latest Advanced APIs for various Web3 scenarios:

### NFT API

[_NFT API Methods_](/advanced-api/nft-methods/) serve to request NFT-related data across multiple chains:

  * [`ankr_getNFTsByOwner`](/advanced-api/nft-methods/#ankr_getnftsbyowner) — retrieves an account-associated NFTs.
  * [`ankr_getNFTMetadata`](/advanced-api/nft-methods/#ankr_getnftmetadata) — retrieves metadata of a particular NFT.
  * [`ankr_getNFTHolders`](/advanced-api/nft-methods/#ankr_getnftholders) — retrieves holders of a particular NFT.
  * [`ankr_getNftTransfers`](/advanced-api/nft-methods/#ankr_getnfttransfers) — retrieves NFT transfers info of a particular address.

### Query API

[_Query API Methods_](/advanced-api/query-methods/) serve to request info on the ranges of blocks (max range is 100) for a full list of block metadata:

  * [`ankr_getBlocks`](/advanced-api/query-methods/#ankr_getblocks) — retrieves full info of a particular block.
  * [`ankr_getLogs`](/advanced-api/query-methods/#ankr_getlogs) — retrieves history data of a particular block range.
  * [`ankr_getTransactionsByHash`](/advanced-api/query-methods/#ankr_gettransactionsbyhash) — retrieves the details of a transaction specified by hash.
  * [`ankr_getTransactionsByAddress`](/advanced-api/query-methods/#ankr_gettransactionsbyaddress) — retrieves the details of a transaction specified by wallet address.
  * [`ankr_getInteractions`](/advanced-api/query-methods/#ankr_getinteractions) — retrieves blockchains interacted with a particular wallet.
  * [`ankr_getInternalTransactionsByBlockNumber`](/advanced-api/query-methods/#ankr_getinternaltransactionsbyblocknumber) — retrieves info on internal transactions by block number.
  * [`ankr_getInternalTransactionsByParentHash`](/advanced-api/query-methods/#ankr_getinternaltransactionsbyparenthash) — retrieves info on internal transactions by parent hash. 

### Token API

[_Token API Methods_](/advanced-api/token-methods/) serve to request token-related data across multiple chains:

  * [`ankr_getAccountBalance`](/advanced-api/token-methods/#ankr_getaccountbalance) — retrieves the balance of a particular account.
  * [`ankr_getCurrencies`](/advanced-api/token-methods/#ankr_getcurrencies) — retrieves a list of currencies used on a particular blockchain.
  * [`ankr_getTokenPrice`](/advanced-api/token-methods/#ankr_gettokenprice) — retrieves the price of a particular token.
  * [`ankr_getTokenHolders`](/advanced-api/token-methods/#ankr_gettokenholders) — retrieves info on holders of a particular token.
  * [`ankr_getTokenHoldersCount`](/advanced-api/token-methods/#ankr_gettokenholderscount) — retrieves the number of token holders.
  * [`ankr_getTokenTransfers`](/advanced-api/token-methods/#ankr_gettokentransfers) — retrieves token transfers info.

[//]: # (  * [`ankr_getTokenPriceHistory`]&#40;/advanced-api/token-methods/#ankr_gettokenpricehistory&#41; — retrieves the token's price history on the chain.)

## Advanced APIs PAYG Pricing

The price of our API Credits is pegged to USD. It means that upon using ANKR tokens for PAYG, `ANKR` calculates into `API Credits` at the latest _ANKR/USD_ exchange rate.

> Our PAYG pricing model:  
> 0.10 USD = 1M API Credits  

| API Collection | Method                                      | API Credits | USD/request |
|----------------|---------------------------------------------|-------------|-------------|
| NFT API        | `ankr_getNFTsByOwner`                       | 700         | $0.00007    |
|                | `ankr_getNFTMetadata`                       | 700         | $0.00007    |
|                | `ankr_getNFTHolders`                        | 700         | $0.00007    |
|                | `ankr_getNftTransfers`                      | 700         | $0.00007    |
| Query API      | `ankr_getBlocks`                            | 700         | $0.00007    |
|                | `ankr_getLogs`                              | 700         | $0.00007    |
|                | `ankr_getTransactionsByHash`                | 700         | $0.00007    |
|                | `ankr_getTransactionsByAddress`             | 700         | $0.00007    |
|                | `ankr_getInteractions`                      | 700         | $0.00007    |
|                | `ankr_getInternalTransactionsByBlockNumber` | 700         | $0.00007    |
|                | `ankr_getInternalTransactionsByParentHash`  | 700         | $0.00007    |
| Token API      | `ankr_getAccountBalance`                    | 700         | $0.00007    |
|                | `ankr_getCurrencies`                        | 700         | $0.00007    |
|                | `ankr_getTokenPrice`                        | 700         | $0.00007    |
|                | `ankr_getTokenHolders`                      | 700         | $0.00007    |
|                | `ankr_getTokenHoldersCount`                 | 700         | $0.00007    |
|                | `ankr_getTokenTransfers `                   | 700         | $0.00007    |

[//]: # (|                | `ankr_getTokenPriceHistory`     | 700         | $0.00007    |)

## Support and Developer Community

<div className="p-4 border border-gray-200 dark:border-gray-900 rounded mt-6">
  [Start Building with Advanced APIs](build-with-advanced-apis/overview)↗
</div>

Our goal is to provide developers with the best user experience possible and supercharge Web3 projects with our Advanced APIs. Also, we strongly believe that community feedback fills our sails. So, let's team up — join our [Discord community](http://discord.gg/ankr) to get support from our team, engage with like-minded developers, and propose new features that we can add in our Roadmap.