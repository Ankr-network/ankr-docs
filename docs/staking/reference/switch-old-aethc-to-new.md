---
title: Switching aETHc on BNB Chain
id: switch-aethc-binance
---
import Admonition from '@theme/Admonition';

# Switching aETHc on BNB Chain

We are decommissioning an [older version of the aETHc](https://bscscan.com/token/0x973616ff3b9d8f88411c5b4e6f928ee541e4d01f) Liquid Staking token on the BNB Chain and switching to a [new aETHc](https://bscscan.com/token/0xe05a08226c49b636acf99c40da8dc6af83ce5bb3) token that is compatible with Ankr Bridge.

The reason is Binance stopped supporting an older ETH bridged version and part of our users got their older aETHc locked because of that.<br /><br />

To switch to the new aETHc: 

1. In your wallet, switch the account with the locked aETHc and change the network option to Binance Smart Chain. 
2. Visit [Ankr Staking Dashboard](https://www.ankr.com/staking/dashboard/). Ankr will ask you to connect your wallet if you haven't done it before. 
    <img src={require('/img/switch-old-aethc-to-new/dashboard-init.png').default} alt="Staking dashboard with old aETHc" width="1000" />
3. Locate the "unsupported old version" of aETHc and click **Switch to new**. <br />
   <img src={require('/img/switch-old-aethc-to-new/old-aethc-click-switch.png').default} alt="Click Switch to new on old aETHc" width="497" />
   <div>
   <Admonition type="tip">
   <p>If you forgot to change to Binance Smart Chain at Step 1, you may need to reconnect your wallet after changing to it.</p>
   </Admonition>
   </div>
4. Confirm the switching transaction in your wallet. <br />
   <img src={require('/img/switch-old-aethc-to-new/confirm-switching.png').default} alt="Confirm switching" width="310" />
5. After confirming the transaction, wait for it to finalize. <br />
   <img src={require('/img/switch-old-aethc-to-new/switching-pending.png').default} alt="Switching in progress" width="550" />
6. When the transaction is finalized and switching is successful, click **Go to dashboard** to see the new aETHc. <br />
   You can also  add it to your wallet clicking **Add aETHCc to wallet**. <br />
   <img src={require('/img/switch-old-aethc-to-new/switching-success.png').default} alt="Successful switching" width="550" />





