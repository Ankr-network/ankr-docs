# Ankr Pricing Plans

## Public and Premium plans comparison

| Feature               | Public Plan                                                                                                | Premium Plan                                                                                         |
|-----------------------|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| RPC Service           | ✅                                                                                                          | ✅                                                                                                    |
| Advanced APIs         | ❌                                                                                                          | ✅                                                                                                    |
| Full and Archive Data | ✅                                                                                                          | ✅                                                                                                    |
| Priority order        | Limited during high traffic                                                                                | Prioritized during high traffic                                                                      |
| Requests per minute   | `= 45k / all blockchains` — guaranteed;<br/>`> 45k / all blockchains` — possible (depends on overall load) | `= 60k / endpoint` — guaranteed;<br/>`> 60k / endpoint` — possible (depends on overall load)         |
| Connection            | HTTPS                                                                                                      | HTTPS and WebSockets                                                                                 |
| Support               | Discord Support                                                                                            | Direct Email Support                                                                                 |
| Terms                 | No Contract                                                                                                | Both Contract and No Contract                                                                        |
| Cost                  | **FREE**                                                                                                   | **[Pay-as-you-go](/rpc-service/pricing-plans/#payg-premium-plans-usage-based-pricing)**              |

## PAYG: Premium plan's usage-based pricing

Pay-as-you-go (PAYG) is a usage-based pricing model for the Premium Plan services. PAYG means that you commit to no subscriptions but pay for each request you make. To start using the Premium Plan features, you deposit a minimum amount of 1000 ANKR tokens and create an Ankr Premium account.

### How we charge?

Premium Plan's usage measures in *API Credits*. PAYG model charges per method used. Various methods have different credit values per request. A method's credit value calculates based on a method's usage intensity and multiple factors that include using the computational, memory, storage, and network resources.

Premium Plan supports two communication protocols:

* **HTTPS** — this one is used either for individual or batch requests.
* **WebSocket** — this one is used to establish a communication channel.

We charge no matter whether a request has been successful or not. In other words, a charge is taken for each request coming to our worker, regardless of a node's response.

Here is the summary on PAYG charging:

* **Correct request** (charged) — a request uses a supported method and has a valid JSON-RPC structure. 
* **Incorrect request** (not charged) — a request has an invalid JSON-RPC structure or a batch request has the same ID in multiple requests. We can't parse such a request.
* **Correct request + incorrect method** (charged default amount) — a request uses an unsupported method though has a valid JSON-RPC structure. We charge default amount of credits for the infrastructure usage.

## Get started with Premium

1. Go to the [RPC Services](https://www.ankr.com/rpc/) platform.
2. [Connect your wallet](/rpc-service/premium-account-operations/#connect-wallet).
3. [Deposit funds](/rpc-service/premium-account-operations/#top-up).
4. [Add Premium Endpoints into your project](/rpc-service/blockchain-interactions/#rpc-apis-for-your-project) to interact with a blockchain.

## PAYG pricing per request

The price of our API Credits is pegged to USD. It means that upon using ANKR tokens for PAYG, `ANKR` calculates into `API Credits` at the latest _ANKR/USD_ exchange rate.

> Our PAYG pricing model:  
> 0.10 USD = 1M API Credits

### EVM-compatible chains

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

### Solana

| Method                          | API Credits | USD/request |
|:--------------------------------|-------------|-------------|
| `getBlockHeight`                | 500         | $0.00005    |
| `getSignatureStatuses`          | 500         | $0.00005    |
| `sendTransaction`               | 500         | $0.00005    |
| `simulateTransaction`           | 500         | $0.00005    |
| `requestAirdrop`                | 500         | $0.00005    |
| `getAccountInfo`                | 500         | $0.00005    |
| `getBalance`                    | 500         | $0.00005    |
| `getMultipleAccounts`           | 500         | $0.00005    |
| `getProgramAccounts`            | 500         | $0.00005    |
| `getTokenAccountBalance`        | 500         | $0.00005    |
| `getBlockTime`                  | 500         | $0.00005    |
| `getFees`                       | 500         | $0.00005    |
| `getFirstAvailableBlock`        | 500         | $0.00005    |
| `getLargestAccounts`            | 500         | $0.00005    |
| `getTokenLargestAccounts`       | 500         | $0.00005    |
| `getRecentBlockhash`            | 500         | $0.00005    |
| `getSlot`                       | 500         | $0.00005    |
| `getVersion`                    | 500         | $0.00005    |
| `getClusterNodes`               | 500         | $0.00005    |
| `getGenesisHash`                | 500         | $0.00005    |
| `getIdentity`                   | 500         | $0.00005    |
| `getRecentPerformanceSamples`   | 500         | $0.00005    |
| `getSnapshotSlot`               | 500         | $0.00005    |
| `getBlock`                      | 500         | $0.00005    |
| `getBlocks`                     | 500         | $0.00005    |
| `getBlocksWithLimit`            | 500         | $0.00005    |
| `getFeeCalculatorForBlockhash`  | 500         | $0.00005    |
| `getStakeActivation`            | 500         | $0.00005    |
| `getSupply`                     | 500         | $0.00005    |
| `getTokenSupply`                | 500         | $0.00005    |
| `getTransaction`                | 500         | $0.00005    |
| `getConfirmedBlock`             | 500         | $0.00005    |
| `getConfirmedBlocks`            | 500         | $0.00005    |
| `getConfirmedBlocksWithLimit`   | 500         | $0.00005    |
| `getConfirmedTransaction`       | 500         | $0.00005    |
| `getProgramAccounts`            | 500         | $0.00005    |
| `getTokenLargestAccounts`       | 500         | $0.00005    |
| `getTokenAccountsByDelegate`    | 500         | $0.00005    |
| `getTokenAccountsByOwner`       | 500         | $0.00005    |

### Advanced APIs

| APIs Collection | Method                                     | API Credits | USD/request |
|:----------------|:-------------------------------------------|-------------|-------------|
| NFT API         | `ankr_getNFTsByOwner`                      | 700         | $0.00007    |
|                 | `ankr_getNFTMetadata`                      | 700         | $0.00007    |
|                 | `ankr_getNFTHolders`                       | 700         | $0.00007    |
| Query API       | `ankr_getBlocks`                           | 700         | $0.00007    |
|                 | `ankr_getLogs`                             | 700         | $0.00007    |
|                 | `ankr_getTransactionsByHash`               | 700         | $0.00007    |
| Token API       | `ankr_getAccountBalances`                  | 700         | $0.00007    |
|                 | `ankr_getCurrencies`                       | 700         | $0.00007    |
|                 | `ankr_getTokenPrice`                       | 700         | $0.00007    |
|                 | `ankr_getTokenHolders`                     | 700         | $0.00007    |
|                 | `ankr_getTokenHoldersCount`                | 700         | $0.00007    |