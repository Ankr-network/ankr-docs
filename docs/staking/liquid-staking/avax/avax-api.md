---
title: AVAX Liquid Staking API
id: api
---

# BNB Liquid Staking API

To integrate with AVAX Liquid Staking, use the smart contract functions and examples below.

## Stake AVAX and claim aAVAXb

### `stakeAndClaimBonds()`
 
Stakes the `msg.value` of AVAX and claims aAVAXb for it.

#### Smart contract

* [Mainnet AvalanchePool Proxy](https://snowtrace.io/address/0x7BAa1E3bFe49db8361680785182B80BB420A836D)
* [Testnet AvalanchePool Proxy](https://testnet.snowtrace.io/address/0x0c29d40cbd3c9073f4c0c96bf88ae1b4b4fe1d11)

#### Example

[Testnet live transaction example](https://testnet.snowtrace.io/tx/0xdaeada9439e5632edc1373588b20d9e204aed59355f35a19ad91af9a8ca6b00e)


## Stake AVAX and claim aAVAXc

### `stakeAndClaimCerts()`
 
Stakes the `msg.value` of AVAX and claims aAVAXc for it.

#### Smart contract

* [Mainnet AvalanchePool Proxy](https://snowtrace.io/address/0x7BAa1E3bFe49db8361680785182B80BB420A836D)
* [Testnet AvalanchePool Proxy](https://testnet.snowtrace.io/address/0x0c29d40cbd3c9073f4c0c96bf88ae1b4b4fe1d11)

#### Example

[Testnet live transaction example](https://testnet.snowtrace.io/tx/0x5213b7cda6dec4d6a40590f0450e9ee353319e15b7d95e437a1cb6cdb8f8c9af)


## Unstake aAVAXb and claim AVAX

### `claimBonds(amount)`
 
Lets AvalanchePool exchange aAVAXb for AVAX.

#### Parameters 

`amount` (uint256, required) — amount of aAVAXb to be unstaked.

#### Smart contract

* [Mainnet AvalanchePool Proxy](https://snowtrace.io/address/0x7BAa1E3bFe49db8361680785182B80BB420A836D)
* [Testnet AvalanchePool Proxy](https://testnet.snowtrace.io/address/0x0c29d40cbd3c9073f4c0c96bf88ae1b4b4fe1d11)

#### Example

[Testnet live transaction example](https://testnet.snowtrace.io/tx/0x6e030edc68a7c16dd6e37befb8ea302f2501c5a6a9efefe422dae8f518789138)


## Unstake aAVAXc and claim AVAX

### `claimCerts(amount)`
 
Lets `AvalanchePool` exchange aAVAXc for AVAX.

#### Parameters 

`amount` (uint256, required) — amount of aAVAXc to be unstaked.

#### Smart contract

* [Mainnet AvalanchePool Proxy](https://snowtrace.io/address/0x7BAa1E3bFe49db8361680785182B80BB420A836D)
* [Testnet AvalanchePool Proxy](https://testnet.snowtrace.io/address/0x0c29d40cbd3c9073f4c0c96bf88ae1b4b4fe1d11)

#### Example

[Testnet live transaction example](https://testnet.snowtrace.io/tx/0xeefdad65e8d76e2b6f427e153710d60dd50e2b9f06aeed1bf0994e36ec09e5a1)


## Get staking metrics

To integrate Ankr Staking metrics into your dashboards or use metrics like APY in your products, read [Liquid Staking Metrics](https://ankr.com/docs/staking/reference/staking-metrics).


