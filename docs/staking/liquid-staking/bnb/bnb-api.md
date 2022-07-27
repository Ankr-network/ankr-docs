---
title: BNB Liquid Staking API
id: api
---

# BNB Liquid Staking API

To integrate with BNB Liquid Staking, use the smart contract functions and examples below.

## Switch aBNBb to aBNBc

### `unlockShares(shares)`
 
Switches aBNBb to aBNBc. 

#### Parameters 

`shares` (uint256, required) — amount of aBNBb to be switched to aBNBc. 

#### Smart contract

[Mainnet aBNBb Proxy](https://bscscan.com/address/0xbb1aa6e59e5163d8722a122cd66eba614b59df0d)

#### Example

[Mainnet live transaction example](https://bscscan.com/tx/0x17d3db497c5ad42bbd3b5133c752f3028d79e16632319e6a2d490905357f31c4)

## Switch aBNBc to aBNBb

### `approve(spender, amount)`
 
Lets the `aBNBb` smart contract transfer user's liquid tokens.  

#### Parameters 

* `spender` (address, required) — address of the BinancePool contract.
* `amount` (uint256, required) —  amount of aBNBc to be switched to aBNBb. 

#### Smart contract

[Mainnet aBNBc Proxy](https://bscscan.com/address/0xe85afccdafbe7f2b096f268e31cce3da8da2990a)

#### Example

[Live transaction example](https://bscscan.com/tx/0x5eb776f5120ad0fcefacc5325a35f50c1b65d40fab54660301bb75015daf7e94)<br /><br />

### `lockShares(shares)`
 
Switches aBNBc to aBNBb.

#### Parameters 

`shares` (uint256, required) — amount of aBNBc to be switched to aBNBb. 

#### Smart contract

[Mainnet aBNBb Proxy](https://bscscan.com/address/0xbb1aa6e59e5163d8722a122cd66eba614b59df0d)

#### Example

[Mainnet live transaction example](https://bscscan.com/tx/0xc08f33b3a29e4643f2658e379aeeae3479e8c1e23be1506b7fef8550483b809b)

## Stake BNB and claim aBNBb

### `stakeAndClaimBonds(payableAmount)`
 
Stakes BNB and claims aBNBb for the staked BNB. 

#### Parameters

`payableAmount` (BNB, required) — amount of BNB to be staked.

#### Smart contract

[Mainnet BinancePool Proxy](https://bscscan.com/address/0x66bea595aefd5a65799a920974b377ed20071118)

#### Example

[Mainnet live transaction example](https://bscscan.com/tx/0x4486b0861b07e11d3c457942621a88377f3f3e5b4d78d6b106f61e302b4e5d55)


## Stake BNB and claim aBNBc

### `stakeAndClaimCerts(payableAmount)`
 
Stakes BNB and claims aBNBc for the staked BNB. 

#### Parameters

`payableAmount` (BNB, required) — amount of BNB to be staked.

#### Smart contract

[Mainnet BinancePool Proxy](https://bscscan.com/address/0x66bea595aefd5a65799a920974b377ed20071118)

#### Example

[Mainnet live transaction example](https://bscscan.com/tx/0xd8378256021c2a0928b9f13865dc2e6ed9f47a963805aa683930f1722a0b9424)

## Unstake aBNBb and get BNB

### `unstakeBonds(amount)`
 
Unstakes aBNBb and gets BNB for the unstaked aBNBb.

#### Parameters

`amount` (uint256, required) — amount of aBNBb to be unstaked.

#### Smart contract

* [Mainnet BinancePool Proxy](https://bscscan.com/address/0x66bea595aefd5a65799a920974b377ed20071118)
* [Testnet BinancePool Proxy](https://testnet.bscscan.com/address/0x3c9205b5d4b312ca7c4d28110c91fe2c74718a94)


#### Example

* [Mainnet live transaction example](https://bscscan.com/tx/0x48d6af59108c53707fd21fbd15c216a523ed6da2dd1f573e433f985ca82c65dc)
* [Testnet live transaction example](https://testnet.bscscan.com/tx/0x059df206418c4707dcb152b0014d0d19adbe2a5529c7da1de1d11b4791824821)


## Unstake aBNBc and get BNB

### `approve(spender, rawAmount)`

Lets the `aBNBb` smart contract transfer user's aBNBc tokens.

#### Parameters

* `spender` (address, required) — address of the `aBNBb`smart contract.
* `rawAmount` (uint256, required) - amount of aBNBc to be unstaked.

#### Smart contract

* [Mainnet aBNBb contract](https://bscscan.com/token/0xbb1aa6e59e5163d8722a122cd66eba614b59df0d)
* [Testnet aBNBb contract](https://testnet.bscscan.com/token/0xaB56897fE4e9f0757e02B54C27E81B9ddd6A30AE)
* [Mainnet aBNBc contract](https://bscscan.com/token/0xe85afccdafbe7f2b096f268e31cce3da8da2990a)
* [Testnet aBNBc contract](https://testnet.bscscan.com/token/0x46de2fbaf41499f298457cd2d9288df4eb1452ab)

#### Example

* [Mainnet live transaction example](https://bscscan.com/tx/0xd47702732f82703f3fef3c6f73b872faf39cf60715843871c93c786eb57627ab)
* [Testnet live transaction example](https://testnet.bscscan.com/tx/0xe84279ab822beeeb744079e305fd554dcb0c7d5827b9a2f0d78e3d0bd2b6de97)

### `unstakeCerts(shares)`

Unstakes aBNBc and gets BNB for the unstaked aBNBc.

#### Parameters
`shares` (uint256, required) — amount of aBNBc to be unstaked.

#### Smart contract
* [Mainnet BinancePool Proxy](https://bscscan.com/address/0x66bea595aefd5a65799a920974b377ed20071118)
* [Testnet BinancePool Proxy](https://testnet.bscscan.com/address/0x3c9205b5d4b312ca7c4d28110c91fe2c74718a94)

#### Example

* [Mainnet live transaction example](https://bscscan.com/tx/0x5c610a2569f06592c82b5b239c23b37a2ecee6115d899024b0a7bdebb02f392e)
* [Testnet live transaction example](https://testnet.bscscan.com/tx/0x71f95dfcfe5543777ada8900551585c124bcbbd5a52ec76d930c957e7227515f)


## Get APR

### `averagePercentageRate(uint256 day)`

Gets the APR for aBNBb or aBNBc. 

The formula is best expressed by an example. 

With `3` provided as the depth, the APR = `((((day 3 - day 2) / day 3) * 100) + ((day 2 - day 1) / day 2) * 100) + ((day 1 - current day) / day 1) * 100) / 3) * 365`.

#### Parameters

* `day` (uint256, required) — number of days to get the APR for. Max value — 7 days.

#### Smart contract

* [Mainnet aBNBb contract](https://bscscan.com/token/0xbb1aa6e59e5163d8722a122cd66eba614b59df0d)
* [Testnet aBNBb contract](https://testnet.bscscan.com/token/0xaB56897fE4e9f0757e02B54C27E81B9ddd6A30AE)

#### Example

`averagePercentageRate` being a read function, we suggest you visit the links and make a query entering a desired number of days to see an example. 
* [Mainnet function address](https://bscscan.com/readContract?m=normal&a=0xbb1aa6e59e5163d8722a122cd66eba614b59df0d&v=0xc6c4e1ca42904efce3bec150329ff637ff2b0fea#readCollapse2)
* [Testnet function address](https://testnet.bscscan.com/readContract?m=normal&a=0xaB56897fE4e9f0757e02B54C27E81B9ddd6A30AE&v=0xe94147b33a757fdf8a878bfd80562b08c954f6f9#readCollapse2)


## Get staking metrics

To integrate Ankr Staking metrics into your dashboards or use metrics like APY in your products, read [Liquid Staking Metrics](https://ankr.com/docs/staking/extra/staking-metrics).




