---
title: Development Details
id: dev-details
---

# Development details

To integrate with MATIC Liquid Staking, use the functions, smart contract addresses, and examples below.

## Testnet

### Stake MATIC and claim aMATICb

#### `approve(spender, value)`

Lets the PolygonPool smart contract transfer user's MATIC tokens.

##### Parameters
* `spender` (address, required) — address of the PolygonPool contract.
* `value` (uint256, required) — amount of MATIC to be staked.

##### Smart contract

[Testnet Matic](https://goerli.etherscan.io/address/0x499d11e0b6eac7c0593d8fb292dcbbf815fb29ae).

##### Example

[Live testnet transaction example](https://goerli.etherscan.io/tx/0xd21e17f7e2d2922754f89d680b57d5525d95b439834684707f7cb5ed040ed2be).

#### `stakeAndClaimBonds(amount)`

Stakes MATIC and claims aMATICb for the staked MATIC.

##### Parameters
`amount` (uint256, required) — amount of MATIC to be staked.

##### Smart contract

[Testnet PolygonPool Proxy](https://goerli.etherscan.io/address/0xAf2FdE2a233bc2E7B0B8Fa6066aD2df980B6fa67).

##### Example

[Live testnet transaction example](https://goerli.etherscan.io/tx/0x23c5a082e4e692cf16f5832ea319c31ec6fd0d0f7cc12b9bb7b9e69d3479d109).

### Stake MATIC and claim aMATICc

#### `approve(spender, value)`

Lets the PolygonPool smart contract transfer user's MATIC tokens.

##### Parameters
* `spender` (address, required) — address of the PolygonPool contract.
* `value` (uint256, required) — amount of MATIC to be staked.

##### Smart contract

[Testnet MATIC](https://goerli.etherscan.io/address/0x499d11e0b6eac7c0593d8fb292dcbbf815fb29ae).

##### Example

[Live testnet transaction example](https://goerli.etherscan.io/tx/0xf16fc3ae51b460393f7bc8d2e7407fed4867a9c129c74eda674d86e3171003e8).

#### `stakeAndClaimCerts(amount)`

Stakes MATIC and claims aMATICc for the staked MATIC.

##### Parameters

`amount` (uint256, required) — amount of MATIC to be staked.

##### Smart contract

[Testnet PolygonPool Proxy](https://goerli.etherscan.io/address/0xAf2FdE2a233bc2E7B0B8Fa6066aD2df980B6fa67).

##### Example

[Live testnet transaction example](https://goerli.etherscan.io/tx/0xd45229eb00fd9e7bc78a0e1b71677735c80b989538d6b26670c27cde5bcd2be4).


