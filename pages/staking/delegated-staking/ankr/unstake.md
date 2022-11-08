import { Callout } from "components";

# Unstake ANKR token

## Before you start
Ensure the following:
1. You have a small amount of ETH for the gas fee.
2. You remember about the lockup period.<br/> ANKR delegated staking has a locking period of 84–91 days. You are only able to unstake ANKR or claim your rewards after this period has ended. The period applies to each of your staking transactions independently.
3. You remember about the undelegate period.<br/> When unstaking, an undelegate period of 1 next epoch (7 days) applies. After this period, you can claim your unstaked ANKR to the connected wallet address.
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
3. Under **Active Staking**, locate a stake that is past the locking period and has the **Unlocked** status.
4. Click **Unstake** next to it and confirm your action in MetaMask if needed.
5. Wait for the undelegate period of 7–14 days to end.
6. When ended, repeat #1 and #2 and go to the **Unstaking** tab.
7. Click **Claim** next to the unstaked ANKR to send it to the address you connected via MetaMask.
