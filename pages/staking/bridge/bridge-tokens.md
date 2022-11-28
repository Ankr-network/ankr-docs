import { Callout } from "components";

# Bridge tokens

We're going to explain bridging, using aMATICc.

## Bridge aMATICc
1. Visit [Ankr Bridge](https://www.ankr.com/staking/bridge/) and choose aMATICc. 
2. Enter the desired aMATICc amount to bridge and click **Approve** to allow Ankr Bridge smart contracts to bridge for you.
   <img src="/docs/staking/bridge/enter-amount-click-approve.jpg" alt="Enter an amount and click Approve" class="responsive-pic" width="500" />
3. Confirm your approval in MetaMask.
   <img src="/docs/staking/bridge/confirm-approval.jpg" alt="Confirm your approval" class="responsive-pic" width="300" />
4. Click **Send** to send aMATICc to the destination network.
   <img src="/docs/staking/bridge/click-send.jpg" alt="Click Send" class="responsive-pic" width="500"/>
5. Confirm bridging aMATICc in MetMask. We recommend choosing the **high fee** value for faster transaction mining time.
   <img src="/docs/staking/bridge/confirm-sending-transaction.jpg" alt="Confirm bridging" class="responsive-pic" width="300" />
6. **Keep the page open, do not navigate away or close the tab**. Ankr Bridge shows you the sending progress. Wait till the cross-chain transaction successfully finishes. 
   <img src="/docs/staking/bridge/in-progress.jpg" alt="Don't close the next page" class="responsive-pic" width="500" />
7. Once the tokens are bridged, click **Switch to Binance SmartChain** to receive them on the destination network.
   <img src="/docs/staking/bridge/click-switch.jpg" alt="Click Switch" class="responsive-pic" width="500" />
8. Confirm switching networks.
   <img src="/docs/staking/bridge/confirm-switching-networks-binance.jpg" alt="Confirm switching networks" class="responsive-pic" width="300" />
9. Connect your wallet if asked, choosing MetaMask.
   <img src="/docs/staking/bridge/connect-wallet.jpg" alt="Connect wallet" class="responsive-pic" width="500" />
10. Click **Receive** to receive aMATICc on the destination network by clicking **Receive**. A gas fee applies.
    <img src="/docs/staking/bridge/click-receive.jpg" alt="Click Receive" class="responsive-pic" width="500" />
11. Confirm receiving aMATICc in MetaMask.
    <img src="/docs/staking/bridge/confirm-receiving.jpg" alt="Confirm receiving" class="responsive-pic" width="300" />
12. Click **Add aMATICc to wallet** to add the bridged tokens to MetaMask.<br/> You can also see the transaction in the explorer by clicking the **go-to** button next to the transaction hash.
    <img src="/docs/staking/bridge/add-token-to-wallet.jpg" alt="Click Add" class="responsive-pic" width="500" />

If something failed along the way after #5, see the **Finish Bridge** section below.

## Finish Bridge
The *Finish Bridge* functionality allows you to get back to the bridging process if anything fails. 

The bridging process may fail due to: 
* Navigating away from the Bridge page anytime during the process.
* Closing the page anytime during the process.
* Ankr Bridge failures due to network instability and other possible issues. 

If the process failed anywhere before #5 from **Bridge aMATICc**, no action is needed. Just start bridging again.

If the process failed at #5 or later: 
1. Open your wallet, find and copy the transaction ID from the **Deposit** operation.
2. Visit [Ankr Bridge](https://www.ankr.com/staking/bridge/). 
3. Click **Finish Bridge**.
   <img src="/docs/staking/bridge/click-finish-bridge.jpg" alt="Click Finish Bridge" class="responsive-pic" width="500" /> 
4. Paste the deposit transaction ID in the form and click **Proceed bridge**.
5. Check that it brought you to the **Sending progress** page, then continue from #6 in the **Bridge aMATICc** instructions above.
   <img src="/docs/staking/bridge/in-progress.jpg" alt="Don't close the next page" class="responsive-pic" width="500" />