# FTM Liquid Staking API

To integrate with FTM Liquid Staking, use the smart contract functions and examples below.

### Stake FTM and claim aFTMb

#### `stakeAndClaimBonds()`
 
Stakes the `msg.value` of FTM and claims aFTMb for it.

##### Smart contract

* [Mainnet FantomPool Proxy](https://ftmscan.com/address/0x84db6eE82b7Cf3b47E8F19270abdE5718B936670)
* [Testnet FantomPool Proxy](https://testnet.ftmscan.com/address/0x7B72E8117E69951F1b00178016EEaEE4ce715f28)

##### Example

* [Mainnet live transaction example](https://ftmscan.com/tx/0x8139d09140c1da66479c37e7ccf812a220e553912c97bd61a2c947a47db5fc7f)
* [Testnet live transaction example](https://testnet.ftmscan.com/tx/0xa1f188a65446f82fc635f10ec78272f9f8e0cf3288668a1bc944c0f7bfd5628a)


### Stake FTM and claim aFTMc

#### `stakeAndClaimCerts()`
 
Stakes the `msg.value` of FTM and claims aFTMc for it.

##### Smart contract

* [Mainnet FantomPool Proxy](https://ftmscan.com/address/0x84db6eE82b7Cf3b47E8F19270abdE5718B936670)
* [Testnet FantomPool Proxy](https://testnet.ftmscan.com/address/0x7B72E8117E69951F1b00178016EEaEE4ce715f28)

##### Example

* [Mainnet live transaction example](https://ftmscan.com/tx/0x3744426c4a36cead2d3f1048fd64c1268dc863003c283efdbbf97cee6a9545e4)
* [Testnet live transaction example](https://testnet.ftmscan.com/tx/0xe3c7af52171d3514b7b174863db1f0a4cfe6c33f0c79b3850627f97766996626)

### Unstake aFTMb and claim FTM

#### `burnBonds(amount)`
 
Burns aFTMb and gets FTM for the burned aFTMb.

##### Parameters 

`amount` (uint256, required) — amount of aFTMb to be unstaked.

##### Smart contract

* [Mainnet FantomPool Proxy](https://ftmscan.com/address/0x84db6eE82b7Cf3b47E8F19270abdE5718B936670)
* [Testnet FantomPool Proxy](https://testnet.ftmscan.com/address/0x7B72E8117E69951F1b00178016EEaEE4ce715f28)

##### Example

* [Mainnet live transaction example](https://ftmscan.com/tx/0x067abdbf4a3119d04580cb8b4de9f8af2ecf43bc0e574ba62aba3a89bddfff75)
* [Testnet live transaction example](https://testnet.ftmscan.com/tx/0x14416cf8043e0f7207779394d18b0cf507fb78aa5cbe9209fd576a20067fdec6)


### Unstake aFTMc and claim FTM

#### `burnCerts(amount)`
 
Burns aFTMc and gets FTM for the burned aFTMc.

##### Parameters 

`amount` (uint256, required) — amount of aFTMc to be unstaked.

##### Smart contract

* [Mainnet FantomPool Proxy](https://ftmscan.com/address/0x84db6eE82b7Cf3b47E8F19270abdE5718B936670)
* [Testnet FantomPool Proxy](https://testnet.ftmscan.com/address/0x7B72E8117E69951F1b00178016EEaEE4ce715f28)

##### Example

* [Mainnet live transaction example](https://ftmscan.com/tx/0x303e68588bf68dbfd515a7d1b46198c18b8b978b1bee540ff8386e871c7dc4d9)
* [Testnet live transaction example](https://testnet.ftmscan.com/tx/0x7ca2d6bda3db3d4c60119d6a1bc5e9245d24066669a30caafa275d147cf3c9fc)


### Get staking metrics

To integrate Ankr Staking metrics into your dashboards or use metrics like APY in your products, read [Liquid Staking Metrics](/staking/for-integrators/restful-api/staking-metrics/).


