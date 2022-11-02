# AnkrJS SDK

_AnkrJS SDK_ contains a compact JavaScript library to enable you interact with [Advanced API](/advanced-api/overview/).

## Get started

1. Install the latest package stored on [npm](https://www.npmjs.com/package/@ankr.com/ankr.js).

```shell
# with npm
npm install @ankr.com/ankr.js

# with yarn
yarn add @ankr.com/ankr.js
```

2. Initialize the provider.

```javascript
import AnkrProvider from '@ankr.com/ankr.js';

const provider = new AnkrProvider('');

// or if you have a premium account
const provider = new AnkrProvider('YOUR_API_KEY');
```

3. Use the provider to call either of the supported methods.

```javascript
await provider.getNFTsByOwner({
  blockchain: 'eth',
  walletAddress: '0x0E11A192d574b342C51be9e306694C41547185DD',
});
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
  * Optimism: `optimism`

## Methods available

  * [`getLogs`](/advanced-api/javascript-sdk/#getlogs)
  * [`getBlocks`](/advanced-api/javascript-sdk/#getblocks)
  * [`getTransactionsByHash`](/advanced-api/javascript-sdk/#gettransactionsbyhash)
  * [`getAccountBalance`](/advanced-api/javascript-sdk/#getaccountbalance)
  * [`getNFTsByOwner`](/advanced-api/javascript-sdk/#getnftsbyowner)
  * [`getTokenHolders`](/advanced-api/javascript-sdk/#gettokenholders)
  * [`getTokenHoldersCount`](/advanced-api/javascript-sdk/#gettokenholderscount)
  * [`getCurrencies`](/advanced-api/javascript-sdk/#getcurrencies)
  * [`getNFTMetadata`](/advanced-api/javascript-sdk/#getnftmetadata)
  * [`getTokenPriceHistory`](/advanced-api/javascript-sdk/#gettokenpricehistory)

### `getLogs`

Retrieves the logs matching the filter indicated.

```javascript
const logs = async () => {
  return await provider.getLogs({
    blockchain: 'eth',
    fromBlock: 1181739,
    toBlock: 1181739,
    topics: [
      [],
      ['0x000000000000000000000000feb92d30bf01ff9a1901666c5573532bfa07eeec'],
    ],
    address: '0x3589d05a1ec4af9f65b0e5554e645707775ee43c',
    decodeLogs: false,
  });
};
```

### `getBlocks`

Retrieves the data on the blocks within the indicated range.

```javascript
const blocks = async () => {
  return await provider.getBlocks({
    blockchain: 'bsc',
    fromBlock: 100,
    toBlock: 200,
  });
};
```

### `getTransactionsByHash`

Retrieves transaction details for a transaction specified by hash.

```javascript
const transactions = async () => {
  return await provider.getTransactionsByHash({
    transactionHash:
      '0x82c13aaac6f0b6471afb94a3a64ae89d45baa3608ad397621dbb0d847f51196f',
    decodeTxData: true,
  });
};
```

### `getAccountBalance`

Retrieves the coin and token balances of the wallet specified.

```javascript
const balances = async () => {
  return await provider.getAccountBalance({
    blockchain: 'eth',
    walletAddress: '0xfa9019df60d3c710d7d583b2d69e18d412257617',
  });
};
```

### `getNFTsByOwner`

Retrieves the data on all the NFTs (collectibles) owned by the indicated wallet.

```javascript
const nfts = async () => {
  return await provider.getNFTsByOwner({
    blockchain: 'eth',
    walletAddress: '0x0E11A192d574b342C51be9e306694C41547185DD',
    filter: [
      { '0x700b4b9f39bb1faf5d0d16a20488f2733550bff4': [] },
      { '0xd8682bfa6918b0174f287b888e765b9a1b4dc9c3': ['8937'] },
    ],
  });
};
```

### `getTokenHolders`

Retrieves the list of token holders for a given contract address.

```javascript
const tokenHolders = async () => {
  return await provider.getTokenHolders({
    blockchain: 'eth',
    contractAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  });
};
```

### `getTokenHoldersCount`

Retrieves current and historical data on the number of token holders for a given contract address.

```javascript
const tokenHoldersCount = async () => {
  return await provider.getTokenHoldersCount({
    blockchain: 'eth',
    contractAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  });
};
```

### `getCurrencies`

Retrieves a list of supported currencies for a given blockchain.

```javascript
const currencies = async () => {
  return await provider.getCurrencies({ blockchain: 'fantom' });
};
```

### `getNFTMetadata`

Gets metadata of a given NFT.

```javascript

const nftMetadata = async () => {
  return await provider.getNFTMetadata({
    blockchain: 'avalanche',
    contractAddress: '0x8d01c8ee82e581e55c02117a676b5bbd4734fabb',
    tokenId: '23240',
  });
};

```

### `getTokenPriceHistory`

Retrieves the particular token's price history on the chain specified. Either of the timestamp parameters MUST be provided to build a successful request — indicating both parameters leads to an error:

  * `fromTimestamp` corresponds to the time range starting from the timestamp specified in seconds (included in the range) and moving forward in time by the number of `interval`s. The number of fetched history prices can't exceed the `limit` specified.
  * `toTimestamp` corresponds to the time range starting from the timestamp specified in seconds (included in the range) and moving backward in time by the number of `interval`s. The number of fetched history prices can't exceed the `limit` specified.

```javascript
const prices = async () => {
  return await provider.getTokenPriceHistory({
        blockchain: "eth",
        contractAddress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        fromTimestamp: 1667195581, 
        interval: 86400, // 24h
        limit: 337
  });
};
```