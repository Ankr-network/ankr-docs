# Redemption price oracle
Redemption price oracle is an oracle that obtains Ankr's Redemption Price.

**Although, technically, it isn't a separate oracle** contract but a method from Liquid Staking token contracts, we chose to present it as such, as logically it can be perceived as a service, and also for better discoverability. 

## What is Redemption Price?
The Redemption Price defines the exact amount of tokens that a user will get if he redeems its liquid staking after waiting its respective unbonding period, and it also defines the amount of Liquid Staking tokens that he receives when staking on the Ankr platform.

Ankr's Redemption Price should be considered as the primary market, and market prices on Exchanges should be perceived as the second market.

## Smart Contract API

### Avalanche

#### `ratio()`

Gets the aAVAXb/aAVAXc-based redemption price.

##### Parameters
The function returns:

* price (uint256) —  redemption price for aAVAXb/aAVAXc.

##### Smart contracts
* [Mainnet aAVAXb](https://snowtrace.io/address/0x6C6f910A79639dcC94b4feEF59Ff507c2E843929#readProxyContract#F16)
* [Mainnet aAVAXc](https://snowtrace.io/address/0xc3344870d52688874b06d844e0c36cc39fc727f6#readProxyContract#F10)

##### Examples

You can query for a price on the contract page by the links above, anytime.

### Binance

#### `ratio()`

Gets the aBNBb/aBNBc-based redemption price.

##### Parameters
The function returns:

* price (uint256) —  redemption price for aBNBb/aBNBc.

##### Smart contracts
* [Mainnet aBNBb](https://bscscan.com/address/0xBb1Aa6e59E5163D8722a122cd66EBA614b59df0d#readProxyContract#F14)
* [Mainnet aBNBc](https://bscscan.com/address/0xE85aFCcDaFBE7F2B096f268e31ccE3da8dA2990A#readProxyContract#F8)

##### Examples

You can query for a price on the contract page by the links above, anytime.

### Ethereum

#### `ratio()`

Gets the aETHb/aETHc-based redemption price.

##### Parameters
The function returns:

* price (uint256) —  redemption price for aETHb/aETHc.

##### Smart contracts
* [Mainnet aETHb](https://etherscan.io/address/0xD01ef7C0A5d8c432fc2d1a85c66cF2327362E5C6#readProxyContract#F9)
* [Mainnet aETHc](https://etherscan.io/token/0xE95A203B1a91a908F9B9CE46459d101078c2c3cb#readProxyContract#F8)

##### Examples

You can query for a price on the contract page by the links above, anytime.

### Fantom

#### `ratio()`

Gets the aFTMb/aFTMc-based redemption price.

##### Parameters
The function returns:

* price (uint256) —  redemption price for aFTMb/aFTMc.

##### Smart contracts
* [Mainnet aFTMb](https://ftmscan.com/address/0xB42bF10ab9Df82f9a47B86dd76EEE4bA848d0Fa2#readProxyContract#F14)
* [Mainnet aFTMc](https://ftmscan.com/address/0xCfC785741Dc0e98ad4c9F6394Bb9d43Cd1eF5179#readProxyContract#F10)

##### Examples

You can query for a price on the contract page by the links above, anytime.

### Kusama

#### `ratio()`

Gets the aKSMb-based redemption price.

##### Parameters
The function returns:

* price (uint256) —  redemption price for aKSMb.

##### Smart contracts
* [Mainnet aKSMb](https://etherscan.io/address/0x84DA8e731172827fCB233B911678E2a82E27Baf2#readProxyContract#F8)

##### Examples

You can query for a price on the contract page by the links above, anytime.

### Polkadot

#### `ratio()`

Gets the aDOTb-based redemption price.

##### Parameters
The function returns:

* price (uint256) —  redemption price for aKSMb.

##### Smart contracts
* [Mainnet aDOTb](https://etherscan.io/address/0x5cc56c266143f29a5054b9ae07f3ac3513a7965e#readProxyContract#F8)

##### Examples

You can query for a price on the contract page by the links above, anytime.

### Polygon

#### `ratio()`

Gets the aMATICb/aMATICc-based redemption price.

##### Parameters
The function returns:

* price (uint256) —  redemption price for aMATICb/aMATICc.

##### Smart contracts
* [Mainnet aMATICb](https://etherscan.io/address/0x99534Ef705Df1FFf4e4bD7bbaAF9b0dFf038EbFe#readProxyContract#F14)
* [Mainnet aMATICc](https://etherscan.io/token/0x26dcfbfa8bc267b250432c01c982eaf81cc5480c#readProxyContract#F10)

##### Examples

You can query for a price on the contract page by the links above, anytime.




