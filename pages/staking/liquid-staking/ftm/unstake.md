import { Callout } from "components";

# Unstake FTM

## Release time
If you decide to unstake, it can take varying time, depending on the amount you want to unstake.
The unstake logic is that each time a lock-up period ends, Ankr claims all rewards for all stakes from a validator. 
It means if you want to unstake a small amount like 1 FTM, your request will likely fit rewards claimed at the end of the current validator's lock-up period, and you'll receive your FTM in 1 to 35 days. 
However, if you want to unstake 10000 FTM, this amount is unlikely to fit the current claimed rewards and will have to wait until Ankr has enough funds to fulfill the unstake request. 

## Unstake FTM
<Callout type="info">
Ensure you have a small amount of FTM to pay the Fantom gas fee for your unstaking transaction.
</Callout>

1. Open [Ankr Staking Dashboard](https://www.ankr.com/staking/dashboard/). 
2. Locate the aFTMb or aFTMc box respectively and click the **-** icon to unstake.
   <img src="/docs/staking/liquid-staking/ftm/click-minus-icon.jpg" alt="Click the minus icon" class="responsive-pic" width="800" />
3. Enter the desired amount to unstake and click **Unstake**.
   <img src="/docs/staking/liquid-staking/ftm/enter-amount-click-unstake.jpg" alt="Click Unstake" class="responsive-pic" width="400" />
6. Confirm the unstaking transaction in MetaMask.
   <img src="/docs/staking/liquid-staking/ftm/confirm-unstaking-transaction.jpg" alt="Confirm transaction in MetaMask" class="responsive-pic" width="300" />
7. On the next **Unstake in progress page**, click **Go to dashboard**.
   <img src="/docs/staking/liquid-staking/ftm/unstake-in-progress-go-to-dashboard.jpg" alt="Click Go to dashboard" class="responsive-pic" width="550" />

<Callout type="success">
Once transaction is confirmed, Ankr Staking Dashboard updates to show **Unstaking in progress** at the token box.<br/>
If you unstaked a big amount of FTM and didn't receive it in 35 days, it means your stake exceeds the current payout amount Ankr has.
In this case, please create a [support request](https://ankrnetwork.atlassian.net/servicedesk/customer/portal/10) and we'll resolve your issue shortly.
</Callout>
