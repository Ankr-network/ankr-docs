---
title: Development Details
id: dev-details
---

# Development details

To integrate with MATIC Liquid Staking, use the functions, smart contract addresses, and examples below.

### Stake MATIC and claim aMATICb

#### `approve(spender, value)`

Lets the PolygonPool smart contract transfer user's MATIC tokens.

##### Parameters
* `spender` (address, required) — address of the PolygonPool contract.
* `value` (uint256, required) — amount of MATIC to be staked.

##### Smart contract

[Testnet Matic](https://goerli.etherscan.io/address/0x499d11e0b6eac7c0593d8fb292dcbbf815fb29ae).

##### Example

[Testnet live transaction example](https://goerli.etherscan.io/tx/0xd21e17f7e2d2922754f89d680b57d5525d95b439834684707f7cb5ed040ed2be).

#### `stakeAndClaimBonds(amount)`

Stakes MATIC and claims aMATICb for the staked MATIC.

##### Parameters
`amount` (uint256, required) — amount of MATIC to be staked.

##### Smart contract

[Testnet PolygonPool Proxy](https://goerli.etherscan.io/address/0xAf2FdE2a233bc2E7B0B8Fa6066aD2df980B6fa67).

##### Example

[Testnet live transaction example](https://goerli.etherscan.io/tx/0x23c5a082e4e692cf16f5832ea319c31ec6fd0d0f7cc12b9bb7b9e69d3479d109).

### Stake MATIC and claim aMATICc

#### `approve(spender, value)`

Lets the PolygonPool smart contract transfer user's MATIC tokens.

##### Parameters
* `spender` (address, required) — address of the PolygonPool contract.
* `value` (uint256, required) — amount of MATIC to be staked.

##### Smart contract

[Testnet MATIC](https://goerli.etherscan.io/address/0x499d11e0b6eac7c0593d8fb292dcbbf815fb29ae).

##### Example

[Testnet live transaction example](https://goerli.etherscan.io/tx/0xf16fc3ae51b460393f7bc8d2e7407fed4867a9c129c74eda674d86e3171003e8).

#### `stakeAndClaimCerts(amount)`

Stakes MATIC and claims aMATICc for the staked MATIC.

##### Parameters

`amount` (uint256, required) — amount of MATIC to be staked.

##### Smart contract

[Testnet PolygonPool Proxy](https://goerli.etherscan.io/address/0xAf2FdE2a233bc2E7B0B8Fa6066aD2df980B6fa67).

##### Example

[Testnet live transaction example](https://goerli.etherscan.io/tx/0xd45229eb00fd9e7bc78a0e1b71677735c80b989538d6b26670c27cde5bcd2be4).


### Unstake aMATICb and claim MATIC

#### unstakeFee

RESTful API endpoint that return the current fee value for the unstaking operation.

##### Parameters
* `address` (address, required) — address of the staker.

##### Request

```
GET https://api.dev.stkr.io/v1alpha/polygon/unstakeFee?address=0x0000000000000000000000000000000000000000
```

##### Response

###### 200
```
{"unstakeFee":"50000000000000000000","useBeforeBlock":6946279,"signature":"0x7ed0ac683aca82358813f0e40dd2f636b1e12e48d9c3f79194272b8da26cb770273d5c39d99981e8387f6d8c1ae69e9a3bb0dd4fd76cfb92d8ab3b1d3a0094e51c"}
```

#### `approve(spender, value)`

Lets the PolygonPool smart contract transfer user's ANKR tokens (needed to pay fees when unstaking aMATICc).

##### Parameters
* `spender` (address, required) — address of the `PolygonPool` contract.
* `value` (uint256, required) — amount of ANKR to be transfered.

##### Smart contract

* [Mainnet ANKR](https://etherscan.io/token/0x8290333cef9e6d528dd5618fb97a76f268f3edd4)
* [Testnet ANKR](https://goerli.etherscan.io/token/0x7fed49f5b0497a060cdcff50bdbd22e5d07661d8).

##### Example

* [Testnet live transaction example](https://goerli.etherscan.io/tx/0x6ab2ce2f6cec6344fd707aeb1e49811a4f88a60cc790c62c3b87a3e4a1722356)
* [Testnet live transaction example](https://etherscan.io/tx/0x508295e74e3b5480373f6611fbb7a98b65f3fd80d4671d771898e924dcd3df75)

#### `unstakeBonds(uint256 amount, uint256 fee, uint256 useBeforeBlock, bytes signature)`

Lets the `PolygonPool` smart contract transfer user's ANKR tokens (needed to pay fees when unstaking aMATICb).

##### Parameters
* `amount` (uint256, required) — amount aMATICc to be unstake.
* `fee` (uint256, required) — fee paid in ANKR for the unstaking operation. Get the value from the unstakeFee endpoint response.
* `useBeforeBlock` (uint256, required) — last valid blockchain block to unstake before. Get the value from the unstakeFee endpoint response.
* `signature` (bytes, required) — notary signature for the fees. Get the value from the unstakeFee endpoint response.

##### Smart contract

* [Mainnet PolygonPool](https://etherscan.io/address/0xCfD4B4Bc15C8bF0Fd820B0D4558c725727B3ce89)
* [Testnet PolygonPool](https://goerli.etherscan.io/address/0xAf2FdE2a233bc2E7B0B8Fa6066aD2df980B6fa67)

##### Example

* [Mainnet live transaction example](https://etherscan.io/tx/0x791b2587ac40bd9a41a38f45a92a328966dbbc1acb958500307dd0eea74b918a)


### Unstake aMATICc and claim MATIC

#### unstakeFee

RESTful API endpoint that return the current fee value for the unstaking operation.

##### Parameters
* `address` (address, required) — address of the staker.

##### Request

```
GET https://api.dev.stkr.io/v1alpha/polygon/unstakeFee?address=0x0000000000000000000000000000000000000000
```

##### Response

###### 200
```
{"unstakeFee":"50000000000000000000","useBeforeBlock":6946279,"signature":"0x7ed0ac683aca82358813f0e40dd2f636b1e12e48d9c3f79194272b8da26cb770273d5c39d99981e8387f6d8c1ae69e9a3bb0dd4fd76cfb92d8ab3b1d3a0094e51c"}
```

#### `approve(spender, value)`

Lets the PolygonPool smart contract transfer user's ANKR tokens (needed to pay fees when unstaking aMATICb).

##### Parameters
* `spender` (address, required) — address of the `PolygonPool` contract.
* `value` (uint256, required) — amount of ANKR to be transfered.

##### Smart contract

* [Mainnet ANKR](https://etherscan.io/token/0x8290333cef9e6d528dd5618fb97a76f268f3edd4)
* [Testnet ANKR](https://goerli.etherscan.io/token/0x7fed49f5b0497a060cdcff50bdbd22e5d07661d8).

##### Example

* [Testnet live transaction example](https://goerli.etherscan.io/tx/0x6ab2ce2f6cec6344fd707aeb1e49811a4f88a60cc790c62c3b87a3e4a1722356)
* [Testnet live transaction example](https://etherscan.io/tx/0x508295e74e3b5480373f6611fbb7a98b65f3fd80d4671d771898e924dcd3df75)


#### `approve(spender, amount)`

Approves the `aMATICb` smart contract to transfer user's aMATICc tokens to itself from the `aMATICc` smart contact and burn them. 

##### Parameters
* `spender` (address, required) — address of the `aMATICb` contract.
* `amount` (uint256, required) — amount of aMATICc to be burned.

##### Smart contract

* [Mainnet aMATICc](https://etherscan.io/address/0x26dcfbfa8bc267b250432c01c982eaf81cc5480c)
* [Testnet aMATICc](https://goerli.etherscan.io/address/0x148bf822cae6a61b2f278801ef4369fddd2a80df)

##### Example

* [Mainnet live transaction example](https://etherscan.io/tx/0xbd7150bb5e122460b31d4a3b1d12fe225c34178a75921b3e13b20c9d48eb03a7)
* [Testnet live transaction example](https://goerli.etherscan.io/tx/0x772e34152e3fccfbfbb0170a206e55373df792b3b50f47996596b5b137095006)


#### `unstakeCerts(uint256 shares, uint256 fee, uint256 useBeforeBlock, bytes signature)`

Lets the `PolygonPool` smart contract transfer user's ANKR tokens (needed to pay fees when unstaking aMATICc).

##### Parameters
* `shares` (uint256, required) — amount aMATICc to be unstake.
* `fee` (uint256, required) — fee paid in ANKR for the unstaking operation. Get the value from the unstakeFee endpoint response.
* `useBeforeBlock` (uint256, required) — last valid blockchain block to unstake before. Get the value from the unstakeFee endpoint response.
* `signature` (bytes, required) — notary signature for the fees. Get the value from the unstakeFee endpoint response.

##### Smart contract

* [Mainnet PolygonPool](https://etherscan.io/address/0xCfD4B4Bc15C8bF0Fd820B0D4558c725727B3ce89)
* [Testnet PolygonPool](https://goerli.etherscan.io/address/0xAf2FdE2a233bc2E7B0B8Fa6066aD2df980B6fa67)

##### Example

* [Mainnet live transaction example](https://etherscan.io/tx/0x791b2587ac40bd9a41a38f45a92a328966dbbc1acb958500307dd0eea74b918a)
* [Mainnet live transaction example](https://goerli.etherscan.io/tx/0x39ca83209a1636a5b803853a38a7294bcf209032f947684064d5034aaaf68b14)

