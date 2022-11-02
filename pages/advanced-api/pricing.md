import { Callout } from "components";

# Advanced APIs Pricing

<Callout>
Advanced APIs is a unique feature available for the [Premium Plan](/rpc-service/service-plans/) users.
</Callout>

Being a Premium Plan's feature, _Advanced APIs_ usage measures in API Credits under the [Pay-as-you-go](/rpc-service/service-plans/#charging-model-pay-as-you-go) (PAYG) charging model.

## Pricing

We charge per method used in request. A method's credit value calculates based on a method's usage intensity and multiple factors that include using the computational, memory, storage, and network resources.

**The price of our API Credits is pegged to USD**. It means that upon using ANKR tokens for PAYG, `ANKR` calculates into `API Credits` at the latest _ANKR/USD_ exchange rate.

> **Our PAYG pricing model:**  
> **0.10 USD = 1M API Credits**

### NFT API Methods

| Method                 | API Credits | USD/request |
|:-----------------------|-------------|-------------|
| `ankr_getNFTsByOwner`  | 700         | $0.00007    |
| `ankr_getNFTMetadata`  | 700         | $0.00007    |
| `ankr_getNFTHolders`   | 700         | $0.00007    |

### Query API Methods

| Method                        | API Credits | USD/request |
|:------------------------------|-------------|-------------|
| `ankr_getBlocks`              | 700         | $0.00007    |
| `ankr_getLogs`                | 700         | $0.00007    |
| `ankr_getTransactionsByHash`  | 700         | $0.00007    |
| `ankr_getInteractions`        | 700         | $0.00007    |

### Token API Methods

| Method                        | API Credits | USD/request |
|:------------------------------|-------------|-------------|
| `ankr_getAccountBalances`     | 700         | $0.00007    |
| `ankr_getCurrencies`          | 700         | $0.00007    |
| `ankr_getTokenPrice`          | 700         | $0.00007    |
| `ankr_getTokenHolders`        | 700         | $0.00007    |
| `ankr_getTokenHoldersCount`   | 700         | $0.00007    |
| `ankr_getTransfersByAddress`  | 700         | $0.00007    |
