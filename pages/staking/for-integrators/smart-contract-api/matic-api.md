# MATIC Liquid Staking API

To integrate with MATIC Liquid Staking, use the smart contract functions and examples below.

### Stake MATIC and claim aMATICb

#### `approve(spender, value)`

Lets the PolygonPool smart contract transfer user's MATIC tokens.

##### Parameters
* `spender` (address, required) — address of the PolygonPool contract.
* `value` (uint256, required) — amount of MATIC to be staked.

##### Smart contract

* [Mainnet MATIC — 0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0](https://etherscan.io/token/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0)
* [Testnet MATIC — 0x499d11e0b6eac7c0593d8fb292dcbbf815fb29ae](https://goerli.etherscan.io/address/0x499d11e0b6eac7c0593d8fb292dcbbf815fb29ae)

##### Example

[Testnet live transaction example](https://goerli.etherscan.io/tx/0xd21e17f7e2d2922754f89d680b57d5525d95b439834684707f7cb5ed040ed2be)

#### `stakeAndClaimBonds(amount)`

Stakes MATIC and claims aMATICb for the staked MATIC.

##### Parameters
`amount` (uint256, required) — amount of MATIC to be staked.

##### Smart contract

* [Mainnet PolygonPool Proxy — 0xCfD4B4Bc15C8bF0Fd820B0D4558c725727B3ce89](https://etherscan.io/address/0xCfD4B4Bc15C8bF0Fd820B0D4558c725727B3ce89)
* [Testnet PolygonPool Proxy — 0xAf2FdE2a233bc2E7B0B8Fa6066aD2df980B6fa67](https://goerli.etherscan.io/address/0xAf2FdE2a233bc2E7B0B8Fa6066aD2df980B6fa67)

##### Example

[Testnet live transaction example](https://goerli.etherscan.io/tx/0x23c5a082e4e692cf16f5832ea319c31ec6fd0d0f7cc12b9bb7b9e69d3479d109)

### Stake MATIC and claim aMATICc

#### `approve(spender, value)`

Lets the PolygonPool smart contract transfer user's MATIC tokens.

##### Parameters
* `spender` (address, required) — address of the PolygonPool contract.
* `value` (uint256, required) — amount of MATIC to be staked.

##### Smart contract

* [Mainnet MATIC — 0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0](https://etherscan.io/token/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0)
* [Testnet MATIC — 0x499d11e0b6eac7c0593d8fb292dcbbf815fb29ae](https://goerli.etherscan.io/address/0x499d11e0b6eac7c0593d8fb292dcbbf815fb29ae)

##### Example

[Testnet live transaction example](https://goerli.etherscan.io/tx/0xf16fc3ae51b460393f7bc8d2e7407fed4867a9c129c74eda674d86e3171003e8)

#### `stakeAndClaimCerts(amount)`

Stakes MATIC and claims aMATICc for the staked MATIC.

##### Parameters

`amount` (uint256, required) — amount of MATIC to be staked.

##### Smart contract

* [Mainnet PolygonPool Proxy — 0xCfD4B4Bc15C8bF0Fd820B0D4558c725727B3ce89](https://etherscan.io/address/0xCfD4B4Bc15C8bF0Fd820B0D4558c725727B3ce89)
* [Testnet PolygonPool Proxy — 0xAf2FdE2a233bc2E7B0B8Fa6066aD2df980B6fa67](https://goerli.etherscan.io/address/0xAf2FdE2a233bc2E7B0B8Fa6066aD2df980B6fa67)

##### Example

[Testnet live transaction example](https://goerli.etherscan.io/tx/0xd45229eb00fd9e7bc78a0e1b71677735c80b989538d6b26670c27cde5bcd2be4)


### Unstake aMATICb and claim MATIC

#### `ethUnstakeFee()`

Get the current unstake fee in ETH.

##### Smart contract

* [Mainnet PolygonPool Proxy — 0xCfD4B4Bc15C8bF0Fd820B0D4558c725727B3ce89](https://etherscan.io/address/0xCfD4B4Bc15C8bF0Fd820B0D4558c725727B3ce89)
* [Testnet PolygonPool Proxy — 0xAf2FdE2a233bc2E7B0B8Fa6066aD2df980B6fa67](https://goerli.etherscan.io/address/0xAf2FdE2a233bc2E7B0B8Fa6066aD2df980B6fa67)

#### `unstakeBonds(uint256 amount, uint256 fee, uint256 useBeforeBlock, bytes signature)`

Lets `PolygonPool` to exchange aMATICb for MATIC.

##### Parameters
* `payableValue` (ETH, required) – amount received querying `ethUnstakeFee()`.
* `amount` (uint256, required) — amount aMATICc to be unstake.
* `fee` (uint256, required) — legacy param, should be set to `0`.
* `useBeforeBlock` (uint256, required) — legacy param, should be set to `0`.
* `signature` (bytes, required) — legacy param, should be `0x0`.

##### Smart contract

* [Mainnet PolygonPool Proxy — 0xCfD4B4Bc15C8bF0Fd820B0D4558c725727B3ce89](https://etherscan.io/address/0xCfD4B4Bc15C8bF0Fd820B0D4558c725727B3ce89)
* [Testnet PolygonPool Proxy — 0xAf2FdE2a233bc2E7B0B8Fa6066aD2df980B6fa67](https://goerli.etherscan.io/address/0xAf2FdE2a233bc2E7B0B8Fa6066aD2df980B6fa67)

##### Example

* [Mainnet live transaction example](https://etherscan.io/tx/0xabd8e4111093141cda17925cee573d52d2342c763e40a7da6def860f4aaa8c41)
* [Testnet live transaction example](https://goerli.etherscan.io/tx/0xeb9c65c181753a2f08a9d7335bf3cb041ba83618e72785c85d1e61174f05a6a4)


### Unstake aMATICc and claim MATIC

#### `ethUnstakeFee()`

Get the current unstake fee in ETH.

##### Smart contract

* [Mainnet PolygonPool Proxy — 0xCfD4B4Bc15C8bF0Fd820B0D4558c725727B3ce89](https://etherscan.io/address/0xCfD4B4Bc15C8bF0Fd820B0D4558c725727B3ce89)
* [Testnet PolygonPool Proxy — 0xAf2FdE2a233bc2E7B0B8Fa6066aD2df980B6fa67](https://goerli.etherscan.io/address/0xAf2FdE2a233bc2E7B0B8Fa6066aD2df980B6fa67)

#### `approve(spender, amount)`

Approves the `aMATICb` smart contract to transfer user's aMATICc tokens to itself from the `aMATICc` smart contact and burn them. 

##### Parameters
* `spender` (address, required) — address of the `aMATICb` contract.
* `amount` (uint256, required) — amount of aMATICc to be burned.

##### Smart contract

* [Mainnet aMATICc — 0x26dcfbfa8bc267b250432c01c982eaf81cc5480c](https://etherscan.io/address/0x26dcfbfa8bc267b250432c01c982eaf81cc5480c)
* [Testnet aMATICc — 0x148bf822cae6a61b2f278801ef4369fddd2a80df](https://goerli.etherscan.io/address/0x148bf822cae6a61b2f278801ef4369fddd2a80df)

##### Example

* [Mainnet live transaction example](https://etherscan.io/tx/0xbd7150bb5e122460b31d4a3b1d12fe225c34178a75921b3e13b20c9d48eb03a7)
* [Testnet live transaction example](https://goerli.etherscan.io/tx/0x772e34152e3fccfbfbb0170a206e55373df792b3b50f47996596b5b137095006)


#### `unstakeCerts(uint256 shares, uint256 fee, uint256 useBeforeBlock, bytes signature)`

Lets the `PolygonPool` to exchange aMATICc for MATIC.

##### Parameters
* `payableValue` (ETH, required) – amount received querying `ethUnstakeFee()`.
* `shares` (uint256, required) — amount aMATICc to be unstake.
* `fee` (uint256, required) — legacy param, should be set to `0`.
* `useBeforeBlock` (uint256, required) — legacy param, should be set to `0`.
* `signature` (bytes, required) — legacy param, should be `0x0`.

##### Smart contract

* [Mainnet PolygonPool Proxy — 0xCfD4B4Bc15C8bF0Fd820B0D4558c725727B3ce89](https://etherscan.io/address/0xCfD4B4Bc15C8bF0Fd820B0D4558c725727B3ce89)
* [Testnet PolygonPool Proxy — 0xAf2FdE2a233bc2E7B0B8Fa6066aD2df980B6fa67](https://goerli.etherscan.io/address/0xAf2FdE2a233bc2E7B0B8Fa6066aD2df980B6fa67)

##### Example

* [Testnet live transaction example](https://goerli.etherscan.io/tx/0x354074f3cc047f6ce02d956746f6dafe70c41d906feb116b8869a63a80ae2791)

### Get APR

#### `averagePercentageRate(uint256 day)`

Gets the APR for aMATICb or aMATICc. 

The formula is best expressed by an example. 

With `3` provided as the depth, the APR = `((((day 3 - day 2) / day 3) * 100) + ((day 2 - day 1) / day 2) * 100) + ((day 1 - current day) / day 1) * 100) / 3) * 365`.

##### Parameters

* `day` (uint256, required) — number of days to get the APR for. Max value — 7 days.
* `address` (address, required) — address of the token contract to determine which token to get the APR for. Possible values: aMATICb — 0x99534Ef705Df1FFf4e4bD7bbaAF9b0dFf038EbFe, aMATICc — 0x26dcfbfa8bc267b250432c01c982eaf81cc5480c.

##### Smart contract

* [Mainnet APR contract — 0xEf3C162450E1d08804493aA27BE60CDAa054050F](https://polygonscan.com/address/0xEf3C162450E1d08804493aA27BE60CDAa054050F)

##### Example

`averagePercentageRate` being a read function, we suggest you visit the links and make a query entering a desired number of days to see an example. 
* [Mainnet function address](https://polygonscan.com/readContract?m=normal&a=0xEf3C162450E1d08804493aA27BE60CDAa054050F&v=0xb902b8024cab7a17500d9dbab77a4c060d5c10f2&t=false#readCollapse1)

### Get staking metrics

To integrate Ankr Staking metrics into your dashboards or use metrics like APY in your products, read [Liquid Staking Metrics](/staking/for-integrators/restful-api/staking-metrics/).