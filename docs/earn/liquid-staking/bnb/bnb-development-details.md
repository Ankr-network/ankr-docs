---
title: Development Details
id: dev-details
---

# Development details

To integrate with BNB Liquid Staking, use the functions, smart contract addresses, and examples below. 

## Switch aBNBb to aBNBc

### `unlockShares(shares)`
 
Switches aBNBb to aBNBc. 

#### Parameters 

`shares` (uint256, required) — amount of aBNBb to be switched to aBNBc. 

#### Smart contract

[aBNBb Proxy](https://bscscan.com/address/0xbb1aa6e59e5163d8722a122cd66eba614b59df0d)

#### Example

[Live transaction example](https://bscscan.com/tx/0x17d3db497c5ad42bbd3b5133c752f3028d79e16632319e6a2d490905357f31c4)

## Switch aBNBc to aBNBb

### `approve(spender, amount)`
 
Lets the `aBNBb` smart contract transfer user's liquid tokens.  

#### Parameters 

* `spender` (address, required) — address of the BinancePool contract.
* `amount` (uint256, required) —  amount of aBNBc to be switched to aBNBb. 

#### Smart contract

[aBNBc Proxy](https://bscscan.com/address/0xe85afccdafbe7f2b096f268e31cce3da8da2990a)

#### Example

[Live transaction example](https://bscscan.com/tx/0x5eb776f5120ad0fcefacc5325a35f50c1b65d40fab54660301bb75015daf7e94)<br /><br />

### `lockShares(shares)`
 
Switches aBNBc to aBNBb.

#### Parameters 

`shares` (uint256, required) — amount of aBNBc to be switched to aBNBb. 

#### Smart contract

[aBNBb Proxy](https://bscscan.com/address/0xbb1aa6e59e5163d8722a122cd66eba614b59df0d)

#### Example

[Live transaction example](https://bscscan.com/tx/0xc08f33b3a29e4643f2658e379aeeae3479e8c1e23be1506b7fef8550483b809b)

## Stake BNB and claim aBNBb

### `stakeAndClaimBonds(payableAmount)`
 
Stakes BNB and claims aBNBb for the staked BNB. 

#### Parameters

`payableAmount` (BNB, required) — amount of BNB to be staked.

#### Smart contract

[BinancePool Proxy](https://bscscan.com/address/0x66bea595aefd5a65799a920974b377ed20071118)

#### Example

[Live transaction example](https://bscscan.com/tx/0x4486b0861b07e11d3c457942621a88377f3f3e5b4d78d6b106f61e302b4e5d55)


## Stake BNB and claim aBNBc

### `stakeAndClaimCerts(payableAmount)`
 
Stakes BNB and claims aBNBc for the staked BNB. 

#### Parameters

`payableAmount` (BNB, required) — amount of BNB to be staked.

#### Smart contract

[BinancePool Proxy](https://bscscan.com/address/0x66bea595aefd5a65799a920974b377ed20071118)

#### Example

[Live transaction example](https://bscscan.com/tx/0xd8378256021c2a0928b9f13865dc2e6ed9f47a963805aa683930f1722a0b9424)





