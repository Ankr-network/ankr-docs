# Redemption price oracle
Redemption price oracle is an oracle that obtains Ankr's Redemption Price.

**Although, technically, it isn't a separate oracle** contract but a method from Liquid Staking token contracts, we chose to present it as such, as logically it can be perceived as a service, and also for better discoverability. 

## What is Redemption Price?
The Redemption Price defines the exact amount of tokens that a user will get if he redeems its liquid staking after waiting its respective unbonding period, and it also defines the amount of Liquid Staking tokens that he receives when staking on the Ankr platform.

Ankr's Redemption Price should be considered as the primary market, and market prices on Exchanges should be perceived as the second market.

## Smart Contract API

### Avalanche

#### `ratio()`

Gets the ankrAVAX-based (ex-aAVAXc) redemption price.

##### Parameters
The function returns:

* price (uint256) — redemption price for ankrAVAX.

##### Smart contracts
* [Mainnet ankrAVAX](https://snowtrace.io/address/0xc3344870d52688874b06d844e0c36cc39fc727f6#readProxyContract#F10)

##### Examples

You can query for a price on the contract page by the links above, anytime.

### Binance

#### `ratio()`

Gets the ankrBNB-based (ex-aBNBc) redemption price.

##### Parameters
The function returns:

* price (uint256) — redemption price for ankrBNB.

##### Smart contracts
* [Mainnet ankrBNB](https://bscscan.com/address/0xE85aFCcDaFBE7F2B096f268e31ccE3da8dA2990A#readProxyContract#F8)

##### Examples

You can query for a price on the contract page by the links above, anytime.

### Ethereum

#### `ratio()`

Gets the ankrETH-based (ex-aETHc) redemption price.

##### Parameters
The function returns:

* price (uint256) — redemption price for ankrETH.

##### Smart contracts
* [Mainnet ankrETH](https://etherscan.io/token/0xE95A203B1a91a908F9B9CE46459d101078c2c3cb#readProxyContract#F8)

##### Examples

You can query for a price on the contract page by the links above, anytime.

### Fantom

#### `ratio()`

Gets the ankrFTM-based (ex-aFTMc) redemption price.

##### Parameters
The function returns:

* price (uint256) — redemption price for ankrFTM.

##### Smart contracts
* [Mainnet ankrFTM](https://ftmscan.com/address/0xCfC785741Dc0e98ad4c9F6394Bb9d43Cd1eF5179#readProxyContract#F10)

##### Examples

You can query for a price on the contract page by the links above, anytime.

### Kusama

#### `ratio()`

Gets the aKSMb-based redemption price.

##### Parameters
The function returns:

* price (uint256) — redemption price for aKSMb.

##### Smart contracts
* [Mainnet aKSMb](https://etherscan.io/address/0x84DA8e731172827fCB233B911678E2a82E27Baf2#readProxyContract#F8)

##### Examples

You can query for a price on the contract page by the links above, anytime.

### Polkadot

#### `ratio()`

Gets the aDOTb-based redemption price.

##### Parameters
The function returns:

* price (uint256) — redemption price for aKSMb.

##### Smart contracts
* [Mainnet aDOTb](https://etherscan.io/address/0x5cc56c266143f29a5054b9ae07f3ac3513a7965e#readProxyContract#F8)

##### Examples

You can query for a price on the contract page by the links above, anytime.

### Polygon

#### `ratio()`

Gets the ankrMATIC-based (ex-aMATICc) redemption price.

##### Parameters
The function returns:

* price (uint256) — redemption price for ankrMATIC.

##### Smart contracts
* [Mainnet ankrMATIC](https://etherscan.io/token/0x26dcfbfa8bc267b250432c01c982eaf81cc5480c#readProxyContract#F10)

##### Examples

You can query for a price on the contract page by the links above, anytime.




