# FTM Liquid Staking API

To integrate with FTM Liquid Staking, use the smart contract functions and examples below.

### Stake FTM and claim aFTMc

#### `stakeAndClaimCerts()`
 
Stakes the `msg.value` of FTM and claims aFTMc for it.

##### Smart contract

* [Mainnet FantomPool Proxy](https://ftmscan.com/address/0x84db6eE82b7Cf3b47E8F19270abdE5718B936670)
* [Testnet FantomPool Proxy](https://testnet.ftmscan.com/address/0x7B72E8117E69951F1b00178016EEaEE4ce715f28)

##### Example

* [Mainnet FantomPool Proxy — 0x84db6eE82b7Cf3b47E8F19270abdE5718B936670](https://ftmscan.com/address/0x84db6eE82b7Cf3b47E8F19270abdE5718B936670)
* [Testnet FantomPool Proxy — 0x7B72E8117E69951F1b00178016EEaEE4ce715f28](https://testnet.ftmscan.com/address/0x7B72E8117E69951F1b00178016EEaEE4ce715f28)

### Unstake aFTMc and claim FTM

#### `burnCerts(amount)`
 
Burns aFTMc and gets FTM for the burned aFTMc.

##### Parameters 

`amount` (uint256, required) — amount of aFTMc to be unstaked.

##### Smart contract

* [Mainnet FantomPool Proxy — 0x84db6eE82b7Cf3b47E8F19270abdE5718B936670](https://ftmscan.com/address/0x84db6eE82b7Cf3b47E8F19270abdE5718B936670)
* [Testnet FantomPool Proxy — 0x7B72E8117E69951F1b00178016EEaEE4ce715f28](https://testnet.ftmscan.com/address/0x7B72E8117E69951F1b00178016EEaEE4ce715f28)

##### Example

* [Mainnet live transaction example](https://ftmscan.com/tx/0x303e68588bf68dbfd515a7d1b46198c18b8b978b1bee540ff8386e871c7dc4d9)
* [Testnet live transaction example](https://testnet.ftmscan.com/tx/0x7ca2d6bda3db3d4c60119d6a1bc5e9245d24066669a30caafa275d147cf3c9fc)


### Get staking metrics

To integrate Ankr Staking metrics into your dashboards or use metrics like APY in your products, read [Liquid Staking Metrics](/staking/for-integrators/restful-api/staking-metrics/).


