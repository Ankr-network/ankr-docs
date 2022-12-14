# AVAX Liquid Staking API

To integrate with AVAX Liquid Staking, use the smart contract functions and examples below.

### Stake AVAX and claim ankrAVAX

#### `stakeAndClaimCerts()`
 
Stakes the `msg.value` of AVAX and claims ankrAVAX for it.

##### Smart contract

* [Mainnet AvalanchePool Proxy — 0x7BAa1E3bFe49db8361680785182B80BB420A836D](https://snowtrace.io/address/0x7BAa1E3bFe49db8361680785182B80BB420A836D)
* [Testnet AvalanchePool Proxy — 0x0c29d40cbd3c9073f4c0c96bf88ae1b4b4fe1d11](https://testnet.snowtrace.io/address/0x0c29d40cbd3c9073f4c0c96bf88ae1b4b4fe1d11)

##### Example

[Testnet live transaction example](https://testnet.snowtrace.io/tx/0x5213b7cda6dec4d6a40590f0450e9ee353319e15b7d95e437a1cb6cdb8f8c9af)

### Unstake ankrAVAX and claim AVAX

#### `claimCerts(amount)`
 
Lets `AvalanchePool` exchange ankrAVAX for AVAX.

##### Parameters 

`amount` (uint256, required) — amount of ankrAVAX to be unstaked.

##### Smart contract

* [Mainnet AvalanchePool Proxy — 0x7BAa1E3bFe49db8361680785182B80BB420A836D](https://snowtrace.io/address/0x7BAa1E3bFe49db8361680785182B80BB420A836D)
* [Testnet AvalanchePool Proxy — 0x0c29d40cbd3c9073f4c0c96bf88ae1b4b4fe1d11](https://testnet.snowtrace.io/address/0x0c29d40cbd3c9073f4c0c96bf88ae1b4b4fe1d11)

##### Example

[Testnet live transaction example](https://testnet.snowtrace.io/tx/0xeefdad65e8d76e2b6f427e153710d60dd50e2b9f06aeed1bf0994e36ec09e5a1)


### Get staking metrics

To integrate Ankr Staking metrics into your dashboards or use metrics like APY in your products, read [Liquid Staking Metrics](/staking/for-integrators/restful-api/staking-metrics/).


