---
title: Polkadot Staking Mechanics
id: dot-liquid-staking-mechanics
---
# Polkadot Staking Mechanics

DOT Liquid Staking lets the user stake their funds through the ANKR deposit address on the Polkadot network, accumulate rewards, and receive their stake+rewards when unstaking.

ANKR principles for the staking are:

* Receive DOT from the user to the ANKR deposit address.

* Mint aDOTb on Ethereum. Make all claiming aDOTb transactions on the Ethereum network.

* Use the fixed exchange rate 1:1 for aDOTb to DOT. aDOTb always represents 1 DOT token even though we sacrifice ERC-20 compatibility for this.

* aDOTb ratio changes, thus all aDOTb balances “automatically” grow.

It is well-described by its requirement, fees, rewards, validators, as well as smart contracts and workflow that shows the functions to call to interact with these smart contracts.

## Requirements

The requirements when staking are:

* Minimum value to stake — 1 DOT.

* Maximum value to stake — unlimited, at the user’s discretion.

Staking can be repeated anytime, without waiting for the current staking to completed as staking on Polkadot is done by the ANKR-owned wallet where users send their stake directly.

The requirements when unstaking are:

* Minimum value to unstake — 0 DOT.

* Maximum value to unstake — staked amount + % of the reward, up to the user’s balance.

* Release period — up to 7 days.

## Fees

When staking, the user pays:

* 2% commission on the reward, to ANKR.

When unstaking, the user pays no fees.

The user must also count in the cost for outgoing transactions.

## Rewards

Validators/delegators receive rewards daily.

ANKR backend calculates the ratio of rewards to the total stake amount weekly and publishes it to the aDOTb smart contract respectively.

## Validators

ANKR delegates the staked funds to trusted validators from Polkadot, which may change in 1 day or longer.

## Smart contract

Smart contracts addresses involved in DOT staking are:

Polkadot deposit address:

[ANKR deposit address](https://polkadot.subscan.io/account/11XAoN3fgVLJUmK4Ty2q2H5dGYYzRZe82F247SyzfwZbHpV) — address that receives the staked DOTs on Polkadot.

Ethereum:

[aDOTb](https://etherscan.io/address/0x5cc56c266143f29a5054b9ae07f3ac3513a7965e) — contract on the Ethereum network that mints or burns aDOTb tokens for the user in 1:1 ratio with the staked amount.

[PolkadotPool](https://etherscan.io/address/0x59f767EC659E9FE01ebCf930465E2aD4Cc0F208e) — contract on the Ethereum network where the user sends their request to mint or burn aDOTb.

## Staking Flow

The flow consists of two parts: staking DOT and claiming aDOTb.

### Staking DOT

The workflow is both user- and ANKR-driven. The user part is Step 1 through 3, while the ANKR part is Step 3 through 5. User interacts with ANKR and Polkadot via the ANKR frontend. 

Due to Polkadot backend architecture, we currently do not disclose our API endpoints to avoid scams or unregulated heavy traffic to the ANKR backend. 

1. User requests the ANKR deposit address via the ANKR backend.

2. User sends DOTs to the obtained ANKR deposit address via the ANKR backend.

3. User sends their extrinsic id to the ANKR backend.

4. Once the transaction has been finalized, the user can see their DOT balance on the StakeFi page the stake was made from.

5. ANKR backend monitor deposits to the ANKR deposit address. Once new DOTs are available for staking, the backend:
   1. Transfer the DOTs to one of our treasury accounts if necessary. 
   2. Bond DOTs for staking
   3. Constantly nominate a subset of validators.

### Claiming aDOTb

The workflow is user-driven. User interacts with ANKR and Polkadot via ANK frontend. 

1. User sees their claimable balance on the DOT staking dashboard. The balance is obtained from the ANKR backend; the user `address` is extracted from their Polkadot.js wallet; `claimable` is the amount that can be currently claimed and is an aggregate of the stake and reward.

2. User sees their staking history on the DOT staking dashboard. 

3. For claimable aDOTb, the user sees a suggestion to claim them. In order to claim, the user must unlock and connect their Metamask or another compatible Ethereum wallet to the Ethereum network.

4. When claiming, the user sees the claming form and inputs the amount of aDOTb to be claimed along with the user’s Ethereum address. By default, ANKR suggests the max possible claim and address from the connected user’s Ethereum wallet.  
   Upon claim confirmation, the user interacts with Polkadot.js extension to send a request to the ANKR backend to get a notarization signature. To send the request, the user needs to include a signature in it. The signature is created by signing the marshalled message `<Bytes>StakeFi Signed Message:\n[POLKADOT_PUBLIC_KEY_HEX]\n[ETHEREUM_ADDRESS]\n[CURRENT_TIMESTAMP]</Bytes>`. The resulting signature is included in the request.

6. The `claim` object in the reply contains the following fields: 

  ```{
  "claim": {
    "address": "string",
    "status": "ACTIVE"|"CLAIMED"|"EXPIRED",
    "data": {
      "network": 0,
      "claimId": "0xdeadbeef...",
      "claimBeforeBlock": 123321123,
      "amount": "12.1234",
      "nativeAmount": "12123400000000",
      "signature": "0xdeadbeef...",
      "ethAddress": "0xdeadbeef..."
    },
    "createdTimestamp": 0,
    "expiresTimestamp": 0,
    "tokenAddress": "0xdeadbeef...",
    "loanId": 0 # 0 for staking, >0 for crowdloans
  },
  "tokenAddress": "0xdeadbeef..."
  }
  ```
6. To check there are no errors, before the actual claim, the user runs a call to `PolkadotPool`:
  ```
PolkadotPool::isClaimValid(
  address token, 
  uint256 claimId, 
  uint256 claimBeforeBlock, 
  uint256 amount, 
  address to, 
  bytes memory signature
) external view returns (bool)
  ```

  If the call returns true, the user sends a transaction to claim aDOTb:

  ```
PolkadotPool::claimBonds(
  address bond, 
  uint256 claimId, 
  uint256 amount, 
  uint256 claimBeforeBlock, 
  address account, 
  bytes memory signature
) external
  ```

  All fields are taken from the `claim` payload from Step 5.

7. Once the transaction is successful, `PolkadotPool` mints aDOTb to the user's wallet. The balance shows on the staking dashboard and in Metamask (only if user added the token) via a call to `aDOTb::balanceOf(address)`.

### Daily exchange rate updates

To update the ratio, the ANKR backend:

1. Collects information about all stakes in progress and rewards to be received by the end of the current validation period.

2. Collects all aDOTb claims.

3. Collects information about the total supply of aDOTb from `aDOTb`.

4. Recalculates the aDOTb share — the aDOTb exchange rate. The share is an analog of aETHc (which historically was aETH), but for Polkadot. For example, user has 1 share, but due to ratio change, aDOTb balance grows daily.

## Unstaking Flow

1. User calls `PolkadotPool::burnBond(address bond, uint256 amount, bytes calldata polkadotRecipient)` where `bond` is the aDOTb contract address, `amount` is the amount to burn, and `polkadotRecipient` is the user’s address on Polkadot.

2. ANKR backend catches a `TokensBurned` event, emitted by `PolkadotPool` and saves the unstaking request to the database.

3. If ANKR deposit address doesn’t have the corresponding number of DOT at the moment, the ANKR backend sends an unbonding request to the Polkadot network.

4. When the ANKR deposit address has enough DOTs available to fulfill the request, the funds are sent to the user’s address on Polkadot.

5. The user sees a new `UNSTAKE` entry in their staking history on the staking dashboard.
