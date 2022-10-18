import { Callout } from "nextra-theme-docs";

## Overview

If you decide to unstake, the waiting period will depend on what network you chose when staking:
* For MATIC Liquid Staking on Ethereum, it can take up to 3-4 days before you can claim your funds. Throughout this period, your MATIC will continue to **earn staking rewards**.
* For MATIC Liquid Staking on Polygon, the unstake is fast, as what happens is your Liquid Staking token gets swapped for MATIC in a liquidity pool on Polygon. 

<Callout> 
If you're unstaking on Ethereum, ensure you have 0.025 ETH for the unstake fee.  

Unstaking MATIC tokens on Ethereum is a multi-step process involving sending several transactions to the MATIC smart-contracts deployed in Ethereum.

MATIC tokens are transferred to your wallet automatically when the unstaking process completes. There is no additional cost for this.

If you're unstaking on Polygon, a fee of 0.5% is deducted from the unstaking amount.
</Callout>

## Unstake MATIC
<Callout type="warning" emoji="❗"> 
* For unstaking on Ethereum, a fee of 0.025 ETH applies.
* For unstaking on Polygon, a fee of 0.5% is deducted from the unstaking amount.
</Callout>

1. Open [Ankr Staking Dashboard](https://www.ankr.com/staking/dashboard/).
3. Locate the aMATICb/aMATICc box respectively and click the **'-'** icon to unstake.
4. Enter the amount to unstake and click *'Unstake'*.

You will need to make the following interactions in your wallet:

👍 **Grant access** to grant access to your wallet.

👍 **Approve** the ANKR fee transaction.

👍 **Confirm** the unstaking transaction.

<Callout emoji="✅">
Once transaction is confirmed, Ankr Staking Dashboard updates to show *Unstaking in progress*.

For unstaking on Ethereum, the withdrawal period is 80 epochs and more depending on the network congestion. Typically, it takes around 1–2 days to receive your MATIC. 
Following the withdrawal period, your MATIC balance updates in your wallet and the Ankr Staking dashboard automatically.

For unstakig on Polygon, no withdrawal period applies, and you receive your MATIC instantly.
</Callout>

