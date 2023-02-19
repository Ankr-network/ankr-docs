# Redemption price oracle
The oracle allows you to get the latest ratio and calculate the Redemption Price by one of the formulas mentioned in the Redemption Price explanation.

**Although, technically, it isn't a separate oracle** contract but a method from Liquid Staking token contracts, we chose to present it as such, as logically it can be perceived as a service, and also for better discoverability. 

## What is Redemption Price?
The Redemption Price defines the exact amount of tokens that a user will get if he redeems its liquid staking after waiting its respective unbonding period, and it also defines the amount of Liquid Staking tokens that he receives when staking on the Ankr platform.

The formula is:
1. `1 * ratio` when the user stakes their assets. This is why the user gets less Liquid Staking tokens than the number of the staked assets.
2. `1 / ratio` when the user redeems their Liquid Staking tokens for the assets, i.e., unstakes their assets. This is why the user gets more assets than the number of the redeemed Liquid Staking tokens.

All this is due to Liquid Staking tokens increasing in value overtime to the originally staked assets, which happens because `ratio = TVL / (TVL + rewards)`. 

Ankr's Redemption Price should be considered as the primary market, and market prices on Exchanges should be perceived as the second market.

## Smart Contract API

### Avalanche

#### `ratio()`

Returns how many ankrAVAX tokens the user gets when staking their AVAX. Practically, the returned value is also ratio, since `1 * ratio` is effectively `ratio`.

##### Parameters
The function returns:

* price (uint256) — ankrAVAX ratio.

##### Smart contracts
* [Mainnet ankrAVAX](https://snowtrace.io/address/0xc3344870d52688874b06d844e0c36cc39fc727f6#readProxyContract#F10)

##### Examples

You can query for a ratio on the contract page by the links above, anytime.

### Binance

#### `ratio()`

Returns how many ankrBNB tokens the user gets when staking their BNB. Practically, the returned value is also ratio, since `1 * ratio` is effectively `ratio`.

##### Parameters
The function returns:

* price (uint256) — ankrBNB ratio.

##### Smart contracts
* [Mainnet ankrBNB](https://bscscan.com/address/0xE85aFCcDaFBE7F2B096f268e31ccE3da8dA2990A#readProxyContract#F8)

##### Examples

You can query for a ratio on the contract page by the links above, anytime.

### Ethereum

#### `ratio()`

Returns how many ankrETH tokens the user gets when staking their ETH. Practically, the returned value is also ratio, since `1 * ratio` is effectively `ratio`.

##### Parameters
The function returns:

* price (uint256) — ankrETH ratio.

##### Smart contracts
* [Mainnet ankrETH](https://etherscan.io/token/0xE95A203B1a91a908F9B9CE46459d101078c2c3cb#readProxyContract#F8)

##### Examples

You can query for a ratio on the contract page by the links above, anytime.

### Fantom

#### `ratio()`

Returns how many ankrFTM tokens the user gets when staking their FTM. Practically, the returned value is also ratio, since `1 * ratio` is effectively `ratio`.

##### Parameters
The function returns:

* price (uint256) — ankrFTM ratio.

##### Smart contracts
* [Mainnet ankrFTM](https://ftmscan.com/address/0xCfC785741Dc0e98ad4c9F6394Bb9d43Cd1eF5179#readProxyContract#F10)

##### Examples

You can query for a ratio on the contract page by the links above, anytime.

### Kusama

#### `ratio()`

Returns how many aKSMb tokens the user gets when staking their KSM. Practically, the returned value is also ratio, since `1 * ratio` is effectively `ratio`.

##### Parameters
The function returns:

* price (uint256) — aKSMb ratio.

##### Smart contracts
* [Mainnet aKSMb](https://etherscan.io/address/0x84DA8e731172827fCB233B911678E2a82E27Baf2#readProxyContract#F8)

##### Examples

You can query for a ratio on the contract page by the links above, anytime.

### Polkadot

#### `ratio()`

Returns how many aDOTb tokens the user gets when staking their DOT. Practically, the returned value is also ratio, since `1 * ratio` is effectively `ratio`.

##### Parameters
The function returns:

* price (uint256) — aDOTb ratio.

##### Smart contracts
* [Mainnet aDOTb](https://etherscan.io/address/0x5cc56c266143f29a5054b9ae07f3ac3513a7965e#readProxyContract#F8)

##### Examples

You can query for a ratio on the contract page by the links above, anytime.

### Polygon

#### `ratio()`

Returns how many ankrMATIC tokens the user gets when staking their MATIC. Practically, the returned value is also ratio, since `1 * ratio` is effectively `ratio`.

##### Parameters
The function returns:

* price (uint256) — ankrMATIC ratio.

##### Smart contracts
* [Mainnet ankrMATIC](https://etherscan.io/token/0x26dcfbfa8bc267b250432c01c982eaf81cc5480c#readProxyContract#F10)

##### Examples

You can query for a ratio on the contract page by the links above, anytime.




