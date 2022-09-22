import { Callout } from "nextra-theme-docs";

# Switching aETHc on BNB Chain

We are decommissioning an [older version of the aETHc](https://bscscan.com/token/0x973616ff3b9d8f88411c5b4e6f928ee541e4d01f) Liquid Staking token on the BNB Chain and switching to a [new aETHc](https://bscscan.com/token/0xe05a08226c49b636acf99c40da8dc6af83ce5bb3) token that is compatible with Ankr Bridge.

The reason is Binance stopped supporting an older ETH bridged version and part of our users got their older aETHc locked because of that.

To switch to the new aETHc: 
1. In your wallet, switch the account with the locked aETHc and change the network option to Binance Smart Chain. 
2. Visit [Ankr Staking Dashboard](https://www.ankr.com/staking/dashboard/). Ankr will ask you to connect your wallet if you haven't done it before. 
    <img src="/switch-old-aethc-to-new/dashboard-init.png" alt="Staking dashboard with old aETHc" class="responsive-pic" width="1000" />
3. Locate the "unsupported old version" of aETHc and click **Switch to new**.<br /> 
   <img src="/switch-old-aethc-to-new/old-aethc-click-switch.png" alt="Click Switch" class="responsive-pic" width="497"/>
   <Callout>
     If you forgot to change to Binance Smart Chain at Step 1, you may need to reconnect your wallet after changing to it.
   </Callout>
4. Confirm the switching transaction in your wallet. <br />
   <img src="/switch-old-aethc-to-new/confirm-switching.png" alt="Confirm switching" class="responsive-pic" width="310" />
5. After confirming the transaction, wait for it to finalize. <br />
   <img src="/switch-old-aethc-to-new/switching-pending.png" alt="Switching in progress" class="responsive-pic" width="550" />
6. When the transaction is finalized and switching is successful, click **Go to dashboard** to see the new aETHc. 
   You can also  add it to your wallet clicking **Add aETHCc to wallet**. <br />
   <img src="/switch-old-aethc-to-new/switching-success.png" alt="Successful switching" class="responsive-pic" width="550" />





