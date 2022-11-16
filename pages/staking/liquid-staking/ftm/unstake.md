import { Callout } from "components";

## Overview

If you decide to unstake, it can take varying time, depending on the amount you want to unstake.
The unstake logic is that each time a lock-up period ends, Ankr claims all rewards for all stakes from a validator. 
It means if you want to unstake a small amount like 1 FTM, your request will likely fit rewards claimed at the end of the current validator's lock-up period, and you'll receive your FTM in 1 to 35 days. 
However, if you want to unstake 10000 FTM, this amount is unlikely to fit the current claimed rewards and will have to wait until Ankr has enough funds to fulfill the unstake request. 

<Callout>
Before you start, ensure you have a small amount of FTM for the gas fee.

An unstake fee applies. It depends on the current liquidity and amount to unstake and is deducted from the unstaked amount.

Unstaking FTM tokens is a multi-step process involving sending several transactions to the FTM smart contracts.

FTM tokens are transferred to your wallet automatically when the unstaking process completes. There is no additional cost for this.
</Callout>

## Unstake FTM

<Callout>
Fantom gas fee apply when unstaking.
</Callout>

1. Open [Ankr Staking Dashboard](https://www.ankr.com/staking/dashboard/).
3. Locate the aFTMb box and click the **'-'** icon to unstake.
4. Enter the amount to unstake and click *'Unstake'*.

You will need to make the following interactions in your wallet:

👍 **Grant access** to grant access to your wallet.

👍 **Confirm** the unstaking transaction.

<Callout>
Once transaction is confirmed, Ankr Ear Dashboard updates to show '_Unstaking in progress'_.

If you unstaked a big amount of FTM and didn't receive it in 35 days, it means your stake exceeds the current payout amount Ankr has.
In this case, please create a [support request](https://ankrnetwork.atlassian.net/servicedesk/customer/portal/10) and we'll resolve your issue shortly.
</Callout>
