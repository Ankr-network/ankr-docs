import { Callout } from "nextra-theme-docs";

# Liquid Staking SDK

Integrating with Ankr Liquid Staking has become easier. 

Now you can skip the complications of Solidity and learning how to send direct calls to Liquid Staking smart contracts. 
Instead, use Liquid Staking SDK — an npm package with compound and comprehensible JS methods that take care of the low-level logic for you.

## Multiple network support
Liquid Staking SDK supports multiple networks and allows you to interact with:
* Avalanche blockchain: aAVAXb/aAVAXc tokens and Avalanche Liquid Staking contracts.
* Binance blockchain: aBNBb/aBNBc tokens and Binance Liquid Staking contracts.
* Ethereum blockchain: aETHb/aETHc tokens and Ethereum Liquid Staking contracts; aMATICb/aMATICc tokens, and Polygon Liquid Staking contracts.
* Fantom blockchain: aFTMb/aFTMc tokens and Fantom Liquid Staking contracts.

## Install and integrate
To integrate with the SDK, install the [SDK npm package](https://www.npmjs.com/package/@ankr.com/staking-sdk):

```
# yarn
yarn add @ankr.com/staking-sdk reselect
```

```
# npm
npm i @ankr.com/staking-sdk reselect
```

<Callout>
To interact with the Testsnet smart contracts, use the `REACT_APP_API_ENV=staging` environment variable. For Mainnet smart contracts, use `REACT_APP_API_ENV=prod`.
</Callout>

## Usage examples
Here are some reference examples on how to user Liquid Stakin SDK in your project.

### Live sample
Use the [codesandbox get balance sample](https://codesandbox.io/s/ankr-staking-sdk-e1jvvi) as specific live example of interacting with `@ankr.com/staking-sdk`.<br /> 

### Polygon (on Ethereum)
1. Stake aMATICc token:
    ```
    import { PolygonOnEthereumSDK } from '@ankr.com/staking-sdk';
   
    const sdk = await PolygonOnEthereumSDK.getInstance();
   
    const { txHash } = await sdk.stake(new BigNumber(1_200), 'aMATICc');
    ```
2. Unstake aMATICc token:
   ```
   import { PolygonOnEthereumSDK } from '@ankr.com/staking-sdk';
   
   const sdk = await PolygonOnEthereumSDK.getInstance();
   
   await sdk.unstake(new BigNumber(1_200), 'aMATICc');
   ```
3. Switch aMATICb and aMATICc:
   ```
   import { PolygonOnEthereumSDK } from '@ankr.com/staking-sdk';
   
   const sdk = await PolygonOnEthereumSDK.getInstance();
   
   const lockResponse = await sdk.lockShares({ amount: new BigNumber(2.65) });
   
   const unlockResponse = await sdk.unlockShares({ amount: new BigNumber(1.98) });
   ```
4. Get MATIC transaction history:
   ```
   import { PolygonOnEthereumSDK } from '@ankr.com/staking-sdk';
   
   const sdk = await PolygonOnEthereumSDK.getInstance();
   
   const history = await sdk.getTxEventsHistory();
   ```
### Binance   
1. Stake aBNBc token:
   ```
   import { BinanceSDK } from '@ankr.com/staking-sdk';
   
   const sdk = await BinanceSDK.getInstance();
   
   const { txHash } = await sdk.stake(new BigNumber(1_200), 'aBNBc');
   ```
2. Unstake aBNBc token:
   ```
   import { BinanceSDK } from '@ankr.com/staking-sdk';
   
   const sdk = await BinanceSDK.getInstance();
   
   await sdk.unstake(new BigNumber(1_200), 'aBNBc');
   ```
3. Switch aBNBb and aBNBc:
   ```
   import { BinanceSDK } from '@ankr.com/staking-sdk';
   
   const sdk = await BinanceSDK.getInstance();
   
   const lockResponse = await sdk.lockShares({ amount: new BigNumber(2.65) });
   
   const unlockResponse = await sdk.unlockShares({ amount: new BigNumber(1.98) });
   ```
4. Get BNB transaction history:
   ```
   import { BinanceSDK } from '@ankr.com/staking-sdk';
   
   const sdk = await BinanceSDK.getInstance();
   
   const history = await sdk.getTxEventsHistory();
   ```
### Ethereum
1. Stake aETHc token:
   ```
   import { EthereumSDK } from '@ankr.com/staking-sdk';
   
   const sdk = await EthereumSDK.getInstance();
   
   const { txHash } = await sdk.stake(new BigNumber(1_200), 'aETHc');
   ```
2. Switch aETHc and aETHb:
   ```
   import { EthereumSDK } from '@ankr.com/staking-sdk';
   
   const sdk = await EthereumSDK.getInstance();
   
   const lockResponse = await sdk.lockShares({ amount: new BigNumber(2.65) });
   
   const unlockResponse = await sdk.unlockShares({ amount: new BigNumber(1.98) });
   ```
### Misc
1. Define specific providers:
   ```
   import { PolygonOnEthereumSDK, Web3KeyReadProvider, Web3KeyWriteProvider } from '@ankr.com/staking-sdk';
   
   const readProvider: Web3KeyReadProvider = { ... };
   const writeProvider: Web3KeyWriteProvider = { ... };
   const sdk = await PolygonOnEthereumSDK.getInstance({ readProvider, writeProvider });
   
   const { txHash } = await sdk.stake(new BigNumber(1_200), 'aMATICc');
   ```

## Reference
For detailed information on supported methods and parameters, refer to:
* [AvalancheSDK reference](/staking/for-integrators/sdk/liquid-staking/reference/classes/AvalancheSDK.html)
* [BinanceSDK reference](/staking/for-integrators/sdk/liquid-staking/reference/classes/BinanceSDK.html) 
* [EthereumSDK reference](/staking/for-integrators/sdk/liquid-staking/reference/classes/EthereumSDK.html)
* [FantomSDK reference](/staking/for-integrators/sdk/liquid-staking/reference/classes/FantomSDK.html)
* [PolygonSDK for Ethereum reference](/staking/for-integrators/sdk/liquid-staking/reference/classes/PolygonOnEthereumSDK.html)
* [PolygonSDK for Polygon reference](/staking/for-integrators/sdk/liquid-staking/reference/classes/PolygonOnPolygonSDK.html) 

## Flow
To understand the processes and mechanics of Liquid Staking, refer to:
* [Avalanche Liquid Staking mechanics](/staking/for-integrators/dev-details/avax-liquid-staking-mechanics/)
* [Binance Liquid Staking mechanics](/staking/for-integrators/dev-details/bnb-liquid-staking-mechanics/)
* [Ethereum Liquid Staking mechanics](/staking/for-integrators/dev-details/eth-liquid-staking-mechanics/)
* [Fantom Liquid Staking mechanics](/staking/for-integrators/dev-details/ftm-liquid-staking-mechanics/)
* [Polygon Liquid Staking mechanics](/staking/for-integrators/dev-details/matic-liquid-staking-mechanics/)

