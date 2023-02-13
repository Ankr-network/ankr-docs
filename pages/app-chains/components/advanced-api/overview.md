import { Code } from "components";
import { Bleed } from "nextra-theme-docs";
import { Callout } from "components";
import Image from 'next/image';

# Advanced APIs Overview

<Callout>
Advanced APIs is a unique premium feature that can be added to the AppChains package.
</Callout>

*Advanced APIs* is a specifically-tailored collection of JSON-RPC API endpoints built to support the most popular Web3 scenarios on multiple chains at almost instant speeds.
<br/>

<img src="/docs/build/API.png" alt="API" class="responsive-pic" />

Advanced APIs optimize, index, cache, and store blockchain data to make it access-ready for you. To make things even better, our Advanced APIs support querying several blockchains in a single request.

## Chains Supported

Currently, Advanced APIs feature is implemented for the following chains:

  * BAS Bomb Chain (Mainnet/Testnet)
  * BAS Meta Apes Chain (Mainnet/Testnet)

## API Methods Supported

Query our Advanced APIs for AppChains at the following URL:

> `https://rpc.chainscanner.xyz/multichain`

Check out the latest Advanced APIs for various Web3 scenarios:

### NFT API

[_NFT API Methods_](/app-chains/components/advanced-api/nft-methods/) serve to request NFT-related data across multiple chains:

  * [`ankr_getNFTsByOwner`](/app-chains/components/advanced-api/nft-methods/#ankr_getnftsbyowner) — retrieves an account-associated NFTs.
  * [`ankr_getNFTMetadata`](/app-chains/components/advanced-api/nft-methods/#ankr_getnftmetadata) — retrieves metadata of a particular NFT.
  * [`ankr_getNFTHolders`](/app-chains/components/advanced-api/nft-methods/#ankr_getnftholders) — retrieves holders of a particular NFT.
  * [`ankr_getNftTransfers`](/app-chains/components/advanced-api/nft-methods/#ankr_getnfttransfers) — retrieves NFT transfers info of a particular address.

### Query API

[_Query API Methods_](/app-chains/components/advanced-api/query-methods/) serve to request info on the ranges of blocks (max range is 100) for a full list of block metadata:

  * [`ankr_getBlocks`](/app-chains/components/advanced-api/query-methods/#ankr_getblocks) — retrieves full info of a particular block.
  * [`ankr_getLogs`](/app-chains/components/advanced-api/query-methods/#ankr_getlogs) — retrieves history data of a particular block range.
  * [`ankr_getTransactionsByHash`](/app-chains/components/advanced-api/query-methods/#ankr_gettransactionsbyhash) — retrieves the details of a transaction specified by hash.
  * [`ankr_getTransactionsByAddress`](/app-chains/components/advanced-api/query-methods/#ankr_gettransactionsbyaddress) — retrieves the details of a transaction specified by address.
  * [`ankr_getBlockchainStats`](/app-chains/components/advanced-api/query-methods/#ankr_getblockchainstats) — retrieves blockchain statistics.
  * [`ankr_getInteractions`](/app-chains/components/advanced-api/query-methods/#ankr_getinteractions) — retrieves blockchains interacted with a particular wallet.

### Token API

[_Token API Methods_](/app-chains/components/advanced-api/token-methods/) serve to request token-related data across multiple chains:

  * [`ankr_getAccountBalance`](/app-chains/components/advanced-api/token-methods/#ankr_getaccountbalance) — retrieves the balance of a particular account.
  * [`ankr_getTokenHolders`](/app-chains/components/advanced-api/token-methods/#ankr_gettokenholders) — retrieves info on holders of a particular token.
  * [`ankr_getTokenHoldersCount`](/app-chains/components/advanced-api/token-methods/#ankr_gettokenholderscount) — retrieves the number of token holders.
  * [`ankr_getTokenTransfers`](/app-chains/components/advanced-api/token-methods/#ankr_gettokentransfers) — retrieves token transfers info.
