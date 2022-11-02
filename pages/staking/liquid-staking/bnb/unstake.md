import { Callout } from "components";

## Overview

If you decide to unstake, it can take up to 7–10 days before you receive your funds.

## Unstake BNB

<Callout type="warning">
Release time and fees

When you unstake, you have to wait for 7–10 days until your funds are released to your wallet.

This is because of the BNB Chain restriction, where the processing time of an unstaking transaction is 7 days.

1. Because of this restriction, Ankr has to accumulate all unstaking transactions from users in a pool.
2. Once every 24 hours, Ankr checks any of the 5 available validators are free, i.e. are not processing a pending unstaking transaction.
3. When such validator is found, Ankr sends it an unstaking transaction with the amount equal to the aggregate of all the user transaction since the last Ankr unstaking transaction.
4. This Ankr transaction takes 7 days to be processes, which is the BNB Chain unbond time period.
5. After the unbond time period ends, Ankr receives the unstaked funds and redistributes them to the users.

Ensure you have a small amount of BNB to pay the Binance gas fee for your unstaking transaction.
</Callout>

1. Open [Ankr Staking Dashboard](https://www.ankr.com/staking/dashboard/). 
2. Locate the aBNBb box and click the **-** icon to unstake.
3. Enter the amount to unstake and click **Unstake**.

You will need to make the following interactions in your wallet:

👍 **Grant access** to grant access to your wallet.

👍 **Confirm** the unstaking transaction.

<Callout type="success">
Once transaction is confirmed, Ankr Staking Dashboard updates to show **Unstaking in progress**.
</Callout>

