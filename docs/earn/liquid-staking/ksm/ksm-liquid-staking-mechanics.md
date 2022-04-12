---
title: Staking Mechanics
id: staking-mechanics
---
# Staking mechanics

:::note
Kusama is Polkadot's canary network, so it isn't a typo when you notice `Polkadot` at the end of this document.
:::

KSM Liquid Staking lets the user stake their funds through the Ankr deposit address on the Kusama network, accumulate rewards, and receive their stake+rewards when unstaking.

Ankr principles for the staking are:

* Receive KSM from the user to the Ankr deposit address.

* Mint aKSMb on Ethereum. Make all claiming aKSMb transactions on the Ethereum network.

* Use the fixed exchange rate 1:1 for aKSMb to KSM. aKSMb always represents 1 KSM token even though we sacrifice ERC-20 compatibility for this.

* aKSMb ratio changes, thus all aKSMb balances “automatically” grow.

The following section explains staking requirements, fees, rewards, validators, smart contracts and function calls to interact with these smart contracts.

## Requirements

The requirements when staking are:

* Minimum value to stake — 1 KSM.

* Maximum value to stake — unlimited, at the user’s discretion.

Staking can be repeated anytime, without waiting for the current staking to completed as staking on Polkadot is done by the Ankr-owned wallet where users send their stake directly.

The requirements when unstaking are:

* Minimum value to unstake — 0 aKSMb.

* Maximum value to unstake — staked amount + % of the reward, up to the user’s balance.

* Release period — up to 28 days.

## Fees

The user pays 2% fee from the staking reward.

The user must also count in the gas price for outgoing transactions.

## Rewards

Validators/delegators receive rewards daily.

Ankr backend calculates the ratio of rewards to the total stake amount weekly and publishes it to the aKSMb smart contract respectively.

## Validators

Ankr delegates the staked funds to trusted validators from Kusama. Specific validators may change in >= 1 day.

## Smart contracts

Smart contracts addresses involved in KSM staking are:

Kusama deposit address:

[Ankr deposit address](https://kusama.subscan.io/account/GUDy5gwmUTaHxcX8v2U3wyYdjSF8Zswnt47ZhYBuTCobDqX) — address that receives the staked KSM on Kusama.

Ethereum:

[aKSMb](https://etherscan.io/address/0x84DA8e731172827fCB233B911678E2a82E27Baf2) — contract on the Ethereum network that mints or burns aKSMb tokens for the user in 1:1 ratio with the staked amount.

[PolkadotPool](https://etherscan.io/address/0x59f767EC659E9FE01ebCf930465E2aD4Cc0F208e) — contract on the Ethereum network where the user sends their request to mint or burn aKSMb.

## Staking flow

The flow consists of two parts: staking KSM and claiming aKSMb.

### Staking KSM

The workflow is both user and Ankr-driven. The user part is Steps 1–3, the Ankr part is Steps 3–5. User interacts with Ankr and Kusama via the Ankr Earn Dashboard.

Due to Polkadot backend architecture, we currently do not disclose our API endpoints to avoid scams or unregulated heavy traffic to the Ankr backend.

1. User requests the Ankr deposit address via the Ankr backend.

2. User sends KSM to the obtained Ankr deposit address via the Ankr backend.

3. User sends their extrinsic id to the Ankr backend. In Substate, an extrinsic is a piece of information that comes from outside the chain and is included in a block.

4. Once the transaction has been finalized, the user can see their KSM balance in Ankr Earn.

5. Ankr backend monitor deposits to the Ankr deposit address. Once new KSM are available for staking, the backend:
   1. Transfers the KSM to one of the Ankr dedicated accounts if necessary.
   2. Bonds KSM for staking.
   3. Constantly nominates a subset of validators.

### Claiming aKSMb

The workflow is user-driven. User interacts with Ankr and Kusama via the Ankr Earn Dashboard.

1. User sees their claimable balance on the KSM staking dashboard. The balance is obtained from the Ankr backend; the user `address` is extracted from their Polkadot.js wallet; `claimable` is the amount that can be currently claimed and is an aggregate of the stake and reward.

2. User sees their staking history on the KSM staking dashboard.

3. For claimable aKSMb, the user sees a suggestion to claim them. In order to claim, the user must unlock and connect their Metamask or another compatible Ethereum wallet to the Ethereum network.

4. When claiming, the user sees the claiming form and inputs the amount of aKSMb to be claimed along with the user’s Ethereum address. By default, Ankr suggests the max possible claim and address from the connected user’s Ethereum wallet.
   Upon claim confirmation, the user interacts with the Polkadot.js extension to send a request to the Ankr backend to get a notarization signature. To send the request, the user creates a signature and includes it in the request.

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

  If the call returns true, the user sends a transaction to claim aKSMb:

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

7. Once the transaction is successful, `PolkadotPool` mints aKSMb to the user's wallet. The balance shows on the staking dashboard and in Metamask (only if user added the token) via a call to `aKSMb::balanceOf(address)`.

### Daily exchange ratio updates

To update the ratio, the Ankr backend:

1. Collects information about all stakes in progress and rewards to be received by the end of the current validation period.

2. Collects all aKSMb claims.

3. Collects information about the total supply of aKSMb from `aKSMb`.

4. Recalculates the aKSMb share — the aDOTb exchange ratio. The share is an analog of aETHc (which historically was aETH), but for Kusama. For example, user has 1 share, but due to ratio change, aKSMb balance grows daily.

## Unstaking flow

1. User calls `PolkadotPool::burnBond(address bond, uint256 amount, bytes calldata polkadotRecipient)` where `bond` is the aKSMb contract address, `amount` is the amount to burn, and `polkadotRecipient` is the user’s address on Kusama.

2. Ankr backend sees a `TokensBurned` event, emitted by `PolkadotPool` and saves the unstaking request to the database.

3. If Ankr deposit address doesn’t have the corresponding number of KSM at the moment, the Ankr backend sends an unbonding request to the Kusama network.

4. When the Ankr deposit address has enough KSM available to fulfill the request, the funds are sent to the user’s address on Kusama.

5. The user sees a new `UNSTAKE` entry in their staking history on the staking dashboard.
