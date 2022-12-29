import { Callout } from "components";

# Unstake ANKR token

## Before you start
Ensure the following:
1. You have a small amount of ETH for the gas fee.
2. You know about the lockup period.<br/> ANKR delegated staking has a locking period of 84–91 days. You are only able to unstake ANKR or claim your rewards after this period has ended. The period applies to each of your staking transactions independently.
3. You know about the undelegate period.<br/> When unstaking, an undelegate period of 1 next epoch (7 days) applies. After this period, you can claim your unstaked ANKR to the connected wallet address.
For example, if the epoch starts on Monday, and you unstaked on Monday, you'll wait 14 days (current_epoch + next_epoch), on Tuesday — 13 days, and so on.


## Unstake ANKR
We designed ANKR Staking with multiple Node Providers in mind, so there is no **Unstake all** button.
This button would be impossible with you staking with different Node Providers.
You can unstake your ANKR by specific staking transaction you made. 
<Callout type="info">
Multiple Node Providers support is coming soon.
</Callout>
## Unstake ANKR by specific staking transaction
1. Open [Ankr Staking Dashboard](https://www.ankr.com/staking/dashboard/).
2. Locate the ANKR box and click the **Manage**.
   <img src="/docs/staking/delegated-staking/ankr/click-manage.jpg" alt="Locate ANKR and click Manage" class="responsive-pic" width="900" />
3. Under **Active Staking**, locate a stake that is past the locking period and has the **Unlocked** or **Partially unlocked** status and click the downward arrow.
   <img src="/docs/staking/delegated-staking/ankr/clik-downward-arrow.jpg" alt="Locate unlocked stake and click downward arrow" class="responsive-pic" width="900" />
4. Locate a fully unlocked stake and click **Unstake** next to.
   <img src="/docs/staking/delegated-staking/ankr/click-unstake.jpg" alt="Click Unstake next to unlocked stake " class="responsive-pic" width="900" />
5. On the next page, click **Unstake**.
   <img src="/docs/staking/delegated-staking/ankr/next-page-click-unstake.jpg" alt="Locate unlocked stake and click downward arrow" class="responsive-pic" width="500" />
6. Confirm the unstaking transaction in MetaMask.
   <img src="/docs/staking/delegated-staking/ankr/confirm-unstaking-transaction.jpg" alt="Confirm unstaking transaction" class="responsive-pic" width="300" />
7. On the next **Unstake in pending**, click **Go to dashboard**.
   <img src="/docs/staking/delegated-staking/ankr/unstake-pending-go-to-dashboard.jpg" alt="Click Go to dashboard" class="responsive-pic" width="550" />
8. Wait for the undelegate period of 7–14 days to end.
9. When ended, repeat #1 and #2 and go to the **Unstaking** tab.
   <img src="/docs/staking/delegated-staking/ankr/unstake-tab.jpg" alt="Go to Unstaking tab" class="responsive-pic" width="900" />
10. Click **Claim** next to the unstaked ANKR to send it to the address you connected via MetaMask.
    <img src="/docs/staking/delegated-staking/ankr/claim-unstaked-ankr.jpg" alt="Go to Unstaking tab" class="responsive-pic" width="900" />
