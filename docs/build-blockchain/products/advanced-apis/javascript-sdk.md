---
title: JavaScript SDK
id: javascript-sdk
---

# Ankr's JavaScript SDK

This SDK contains a compact JavaScript library to enable you interact with Ankr's [Advanced API](/build-blockchain/products/v2/advanced-apis).

## Get started

1. Install the latest package stored on [npm](/build-blockchain/products/v2/advanced-apis/).

    ```shell
    # with npm
    npm install @ankr.com/ankr.js

    # with yarn
    yarn add @ankr.com/ankr.js
    ```

2. Initialize the provider.

    ```js
    import AnkrProvider from '@ankr.com/ankr.js';
    
    const provider = new AnkrProvider('');
    
    // or if you have a premium account
    const provider = new AnkrProvider('YOUR_API_KEY');
    ```

3. Use the provider to call either of the supported methods.

    ```js
    await provider.getNFTsByOwner({
      blockchain: 'eth',
      walletAddress: '0x0E11A192d574b342C51be9e306694C41547185DD',
    });
    ```

## Chains supported

`ankr.js` supports interaction with the following chains using their aliases:

  * Ethereum: `eth`
  * BSC: `bsc`
  * Polygon: `polygon`
  * Fantom: `fantom`
  * Arbitrum: `arbitrum`
  * Avalanche: `avalanche`
  * Syscoin NEVM: `syscoin`

## Methods available

  * [`getLogs`](/build-blockchain/products/advanced-apis/javascript-sdk/#getlogs)
  * [`getBlocks`](/build-blockchain/products/advanced-apis/javascript-sdk/#getblocks)
  * [`getTransactionsByHash`](/build-blockchain/products/advanced-apis/javascript-sdk/#gettransactionsbyhash)
  * [`getAccountBalance`](/build-blockchain/products/advanced-apis/javascript-sdk/#getaccountbalance)
  * [`getNFTsByOwner`](/build-blockchain/products/advanced-apis/javascript-sdk/#getnftsbyowner)
  * [`getTokenHolders`](/build-blockchain/products/advanced-apis/javascript-sdk/#gettokenholders)
  * [`getTokenHoldersCount`](/build-blockchain/products/advanced-apis/javascript-sdk/#gettokenholderscount)
  * [`getCurrencies`](/build-blockchain/products/advanced-apis/javascript-sdk/#getcurrencies)
  * [`getNFTMetadata`](/build-blockchain/products/advanced-apis/javascript-sdk/#getnftmetadata)

### `getLogs`

Gets the logs matching the filter indicated.

```js
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

Gets the data on the blocks within the indicated range.

```js
const blocks = async () => {
  return await provider.getBlocks({
    blockchain: 'bsc',
    fromBlock: 100,
    toBlock: 200,
  });
};
```

### `getTransactionsByHash`

Gets transaction details for a transaction specified by hash.

```js
const transactions = async () => {
  return await provider.getTransactionsByHash({
    transactionHash:
      '0x82c13aaac6f0b6471afb94a3a64ae89d45baa3608ad397621dbb0d847f51196f',
    decodeTxData: true,
  });
};
```

### `getAccountBalance`

Gets the coin and token balances of a wallet specified.

```js
const balances = async () => {
  return await provider.getAccountBalance({
    blockchain: 'eth',
    walletAddress: '0xfa9019df60d3c710d7d583b2d69e18d412257617',
  });
};
```

### `getNFTsByOwner`

Gets the data on all the NFTs (collectibles) owned by the indicated wallet.

```js
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

Gets the list of token holders for a given contract address.

```js
const tokenHolders = async () => {
  return await provider.getTokenHolders({
    blockchain: 'eth',
    contractAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  });
};
```

### `getTokenHoldersCount`

Gets current and historical data on the number of token holders for a given contract address.

```js
const tokenHoldersCount = async () => {
  return await provider.getTokenHoldersCount({
    blockchain: 'eth',
    contractAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  });
};
```

### `getCurrencies`

Gets a list of supported currencies for a given blockchain.

```js
const currencies = async () => {
  return await provider.getCurrencies({ blockchain: 'fantom' });
};
```

### `getNFTMetadata`

Gets metadata of a given NFT.

```js

```

