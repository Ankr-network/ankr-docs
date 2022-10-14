# Pricing

Premium Plan's RPC usage measures in *API Credits*. Our Pay-as-you-go (PAYG) model charges per method used in request. Various methods have different credit values per request. A method's credit value calculates based on a method's usage intensity and multiple factors that include using the computational, memory, storage, and network resources.

**The price of our API Credits is pegged to USD**. It means that upon using ANKR tokens for PAYG, `ANKR` calculates into `API Credits` at the latest _ANKR/USD_ exchange rate.

> **Our PAYG pricing model:**  
> **0.10 USD = 1M API Credits**

## EVM-compatible chains

| Method                                     | API Credits | USD/request |
|:-------------------------------------------|-------------|-------------|
| `eth_getLogs`                              | 200         | $0.00002    |
| `eth_estimateGas`                          | 200         | $0.00002    |
| `eth_sendRawTransaction`                   | 200         | $0.00002    |
| `eth_call`                                 | 200         | $0.00002    |
| `eth_getCode`                              | 200         | $0.00002    |
| `web3_clientVersion`                       | 200         | $0.00002    |
| `web3_sha3`                                | 200         | $0.00002    |
| `eth_getBlockByNumber`                     | 200         | $0.00002    |
| `eth_getBlockByHash`                       | 200         | $0.00002    |
| `eth_getTransactionReceipt`                | 200         | $0.00002    |
| `eth_getUncleByBlockHashAndIndex`          | 200         | $0.00002    |
| `eth_chainId`                              | 200         | $0.00002    |
| `eth_getBlockTransactionCountByHash`       | 200         | $0.00002    |
| `eth_accounts`                             | 200         | $0.00002    |
| `eth_gasPrice`                             | 200         | $0.00002    |
| `eth_getBlockTransactionCountByNumber`     | 200         | $0.00002    |
| `eth_getCompilers`                         | 200         | $0.00002    |
| `eth_getUncleByBlockNumberAndIndex`        | 200         | $0.00002    |
| `eth_getTransactionByHash`                 | 200         | $0.00002    |
| `eth_getUncleCountByBlockNumber`           | 200         | $0.00002    |
| `eth_uninstallFilter`                      | 200         | $0.00002    |
| `eth_compileSolidity`                      | 200         | $0.00002    |
| `eth_getTransactionByBlockHashAndIndex`    | 200         | $0.00002    |
| `eth_getTransactionByBlockNumberAndIndex`  | 200         | $0.00002    |
| `eth_subscribe`                            | 200         | $0.00002    |
| `eth_unsubscribe`                          | 200         | $0.00002    |
| `eth_getTransactionCount`                  | 200         | $0.00002    |
| `eth_blockNumber`                          | 200         | $0.00002    |
| `eth_newBlockFilter`                       | 200         | $0.00002    |
| `eth_getBalance`                           | 200         | $0.00002    |
| `eth_getStorageAt`                         | 200         | $0.00002    |

## Solana

| Method                                     | API Credits | USD/request |
|:-------------------------------------------|-------------|-------------|
| `getBlockHeight`                           | 500         | $0.00005    |
| `getSignatureStatuses`                     | 500         | $0.00005    |
| `sendTransaction`                          | 500         | $0.00005    |
| `simulateTransaction`                      | 500         | $0.00005    |
| `requestAirdrop`                           | 500         | $0.00005    |
| `getAccountInfo`                           | 500         | $0.00005    |
| `getBalance`                               | 500         | $0.00005    |
| `getMultipleAccounts`                      | 500         | $0.00005    |
| `getProgramAccounts`                       | 500         | $0.00005    |
| `getTokenAccountBalance`                   | 500         | $0.00005    |
| `getBlockTime`                             | 500         | $0.00005    |
| `getFees`                                  | 500         | $0.00005    |
| `getFirstAvailableBlock`                   | 500         | $0.00005    |
| `getLargestAccounts`                       | 500         | $0.00005    |
| `getTokenLargestAccounts`                  | 500         | $0.00005    |
| `getRecentBlockhash`                       | 500         | $0.00005    |
| `getSlot`                                  | 500         | $0.00005    |
| `getVersion`                               | 500         | $0.00005    |
| `getClusterNodes`                          | 500         | $0.00005    |
| `getGenesisHash`                           | 500         | $0.00005    |
| `getIdentity`                              | 500         | $0.00005    |
| `getRecentPerformanceSamples`              | 500         | $0.00005    |
| `getSnapshotSlot`                          | 500         | $0.00005    |
| `getBlock`                                 | 500         | $0.00005    |
| `getBlocks`                                | 500         | $0.00005    |
| `getBlocksWithLimit`                       | 500         | $0.00005    |
| `getFeeCalculatorForBlockhash`             | 500         | $0.00005    |
| `getStakeActivation`                       | 500         | $0.00005    |
| `getSupply`                                | 500         | $0.00005    |
| `getTokenSupply`                           | 500         | $0.00005    |
| `getTransaction`                           | 500         | $0.00005    |
| `getConfirmedBlock` (deprecated)           | 500         | $0.00005    |
| `getConfirmedBlocks` (deprecated)          | 500         | $0.00005    |
| `getConfirmedBlocksWithLimit` (deprecated) | 500         | $0.00005    |
| `getConfirmedTransaction` (deprecated)     | 500         | $0.00005    |
| `getProgramAccounts`                       | 500         | $0.00005    |
| `getTokenLargestAccounts`                  | 500         | $0.00005    |
| `getTokenAccountsByDelegate`               | 500         | $0.00005    |
| `getTokenAccountsByOwner`                  | 500         | $0.00005    |

## Advanced APIs

| APIs Collection | Method                       | API Credits | USD/request |
|:----------------|:-----------------------------|-------------|-------------|
| NFT API         | `ankr_getNFTsByOwner`        | 700         | $0.00007    |
|                 | `ankr_getNFTMetadata`        | 700         | $0.00007    |
|                 | `ankr_getNFTHolders`         | 700         | $0.00007    |
| Query API       | `ankr_getBlocks`             | 700         | $0.00007    |
|                 | `ankr_getLogs`               | 700         | $0.00007    |
|                 | `ankr_getTransactionsByHash` | 700         | $0.00007    |
|                 | `ankr_getInteractions`       | 700         | $0.00007    |
| Token API       | `ankr_getAccountBalances`    | 700         | $0.00007    |
|                 | `ankr_getCurrencies`         | 700         | $0.00007    |
|                 | `ankr_getTokenPrice`         | 700         | $0.00007    |
|                 | `ankr_getTokenHolders`       | 700         | $0.00007    |
|                 | `ankr_getTokenHoldersCount`  | 700         | $0.00007    |