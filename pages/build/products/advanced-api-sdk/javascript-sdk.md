# Ankr's JavaScript SDK

This SDK contains a compact JavaScript library to enable you interact with Ankr's [Advanced API](/build/products/advanced-api-sdk/overview/).

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

## Methods available

  * [`getLogs`](/build/products/advanced-api-sdk/javascript-sdk/#getlogs)
  * [`getBlocks`](/build/products/advanced-api-sdk/javascript-sdk/#getblocks)
  * [`getTransactionsByHash`](/build/products/advanced-api-sdk/javascript-sdk/#gettransactionsbyhash)
  * [`getAccountBalance`](/build/products/advanced-api-sdk/javascript-sdk/#getaccountbalance)
  * [`getNFTsByOwner`](/build/products/advanced-api-sdk/javascript-sdk/#getnftsbyowner)
  * [`getTokenHolders`](/build/products/advanced-api-sdk/javascript-sdk/#gettokenholders)
  * [`getTokenHoldersCount`](/build/products/advanced-api-sdk/javascript-sdk/#gettokenholderscount)
  * [`getCurrencies`](/build/products/advanced-api-sdk/javascript-sdk/#getcurrencies)
  * [`getNFTMetadata`](/build/products/advanced-api-sdk/javascript-sdk/#getnftmetadata)

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