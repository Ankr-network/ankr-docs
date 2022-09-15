---
title: Unstake BNB
id: unstake-bnb
---

## Overview
 
:::info Before you start

Ensure you have a small amount of BNB for the gas fee.

Unstaking BNB tokens is a multi-step process involving sending several transactions to the BNB smart-contracts deployed in Binance chain and BNB Chain.

BNB tokens are transferred to your wallet automatically when the unstaking process completes. There is no additional cost for this.
:::

## Unstake BNB

:::warning release time and fees

When you unstake, you have to wait for 7–14 days until your funds are released to your wallet.

This is because of the BNB Chain restriction, where the processing time of an unstaking transaction is 7 days.

1. Because of this restriction, Ankr has to accumulate all unstaking transactions from users in a pool.
2. Once every 24 hours, Ankr checks any of the 5 available validators are free, i.e. are not processing a pending unstaking transaction.
3. When such validator is found, Ankr sends it an unstaking transaction with the amount equal to the aggregate of all the user transaction since the last Ankr unstaking transaction.
4. This Ankr transaction takes 7 days to be processes, which is the BNB Chain unbond time period.
5. After the unbond time period ends, Ankr receives the unstaked funds and redistributes them to the users.

Ensure you have a small amount of BNB to pay the Binance gas fee for your unstaking transaction.
:::

1. Open [Ankr Staking Dashboard](https://www.ankr.com/staking/dashboard/).
3. Locate the aBNBb box and click the **-** icon to unstake.
4. Enter the amount to unstake and click **Unstake**.

You will need to make the following interactions in your wallet:

:thumbsup: **Grant access** to grant access to your wallet.

:thumbsup: **Confirm** the unstaking transaction.

:::tip success
Once transaction is confirmed, Ankr Staking Dashboard updates to show **Unstaking in progress**.
:::

