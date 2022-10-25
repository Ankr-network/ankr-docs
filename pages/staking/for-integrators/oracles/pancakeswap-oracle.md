# Ankr PancakeSwap price oracle

Ankr PancakeSwap price oracle is a TWAP oracle that obtains time-weighted average price (TWAP) for a pair of tokens from [PancakeSwap](https://pancakeswap.finance/). 

TWAP is a compound price that is calculated, using data from a specific period of time.

## Workflow

To explain how the oracle works, let's show what happens when we request price of aBNBc in USD (BUSD).

Before we dive into the example, you should know two things:
* Since there is no direct pair aBNBc-BUSD on PancakeSwap, the price is calculated via 2 pairs — aBNBc-BNB and BNB-BUSD — which is done automatically, without additional user interaction. The user just asks the oracle for the price of aBNBc in BUSD.
* The oracle iteratively collects price for a pair every `periodSize` and stores it in an array of the `granularity` length. 
`periodSize` = `windowSize` / `granularity`.
   * `periodSize` — frequency which oracle queries PancakeSwap for the price of a pair with.
   * `windowSize` — desired amount of time which the moving average should be computed over.
   * `granularity` — number of observations stored for each pair, i.e. how many price observations are stored in the window.

If `granularity` = 6 and `windowSize` = 6h, then `periodSize` = `windowSize` / `granularity` = 1h.

Each `periodSize` the price of a pair of tokens is updated and stored in an array of observations. In our example, the length of the array is 6 items.
* An observation is a structure containing `timestamp`, `price0Cumulative`, and `price1Cumulative`. 
  * `timestamp` — block timestamp.
  * `price0Cumulative` — cumulative price of any asset in a pair.
  * `price1Cumulative` — cumulative price of the other asset in a pair.

To calculate the aBNBc-BUSD TWAP price, the oracle:
1. Obtains the current `timestamp`, `price0Cumulative`, and `price1Cumulative` from PancakeSwap, and the oldest observation from the array of stored observations. In our example, it's the one stored 6 hours ago. 
2. Calculates the TWAP price for the first pair — aBNBc-BNB:
   1. For token0 in the pair, the TWAP price = (currentPrice0Cumulative - oldestPrice0Cumulative) / (currentTimestamp - oldestTimestamp).
   2. For token1 the pair, the TWAP price = (currentPrice1Cumulative - oldestPrice1Cumulative) / (currentTimestamp - oldestTimestamp).
3. Repeats #1 and #2 for the second pair — BNB-BUSD.

If you need more details on cumulative prices and TWAP oracles, refer to the [Uniswap oracles documentation](https://docs.uniswap.org/protocol/V2/concepts/core-concepts/oracles).

Now that you know the flow, you can integrate with the Ankr PancakeSwap price oracle, using the functions below.

## Smart Contract API

### `peek()`
Gets time-weighted average price of a pair of tokens from PancakeSwap; a view function.

#### Parameters
The function returns two parameters:

* price (bytes32) —  time-weighted average price of aBNBc in BUSD from PancakeSwap, up to 18 decimals.
* query status (bool) — status of the attempt to get the price (success/failure).

#### Smart contracts
* [Mainnet aBNBc Oracle](https://bscscan.com/address/0xB1aD00B8BB49FB3534120b43f1FEACeAf584AE06#readProxyContract)

#### Examples

You can query for a price on the [contract page](https://bscscan.com/address/0xB1aD00B8BB49FB3534120b43f1FEACeAf584AE06#readProxyContract), anytime.

As an example, see the response for a price query in the picture below:

<img src="/docs/oracles/pancakeswap-oracle-peek-query.png" alt="response for a price query" class="responsive-pic" width="600" />
