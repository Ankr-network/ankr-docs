---
title: Stake mGNO 
id: stake-mgno
---

# Stake mGNO token

To stake mGNO, you'll need to:
1. Purchase GNO on Ethereum.
2. Bridge GNO to Gnosis.
3. Swap the bridged GNO to mGNO.
4. Connect your wallet at Ankr Staking.
5. Stake mGNO at Ankr.

## Before you start

:::info Ensure the following:

You are using a Chrome Browser.

You have a MetaMask wallet.
:::

## Purchase GNO
Visit one of the [recommended DEXs](https://docs.gnosischain.com/ecosystems/defi#dex-aggregators) and swap your assets for the desired amount of GNO tokens.

:::tip ALSO PURCHASE xDai
You'll need a small amount of xDai for gas fees while depositing GNO and staking mGNO.
:::

## Bridge purchased GNO to Gnosis Chain

Your obtained GNO is likely to be the Ethereum Mainnet GNO version.
To use it on Gnosis, you'll need to bridge it to Gnosis Chain.

* Use the [OmniBridge](https://omni.gnosischain.com/bridge) to move GNO from Ethereum to Gnosis Chain.
* Add Gnosis to your wallet, visiting [Ankr Gnosis RPC page](https://www.ankr.com/rpc/gnosis/) and clicking **Add network**. Alternatively, use [these manual instructions](https://docs.gnosischain.com/tools/wallets/metamask) from Gnosis.

## Swap the bridged GNO to mGNO

:::warning GAS FEES AND LIQUID RESTRICTIONS
Make sure you have some xDai to pay the gas fee for your depositing transaction.

Remember that mGNO will remain locked and illiquid until ~Q4 2023 max.
This is due to Gnosis plans to enable withdrawals in the Shanghai upgrade. Shanghai is planned in 6–12 months from The Merge that is expected in ~Q3/Q4 2022.
:::

The [original Gnosis deposit instructions](https://docs.gnosischain.com/node/validator-deposits#convert-gno-to-mgno-special-cases) contain a **wrong link** in **Step 1**, so read the fixed version below.

To swap your bridged GNO: 
1. Go to https://gbc-deposit-old.herokuapp.com/ and connect your web3 wallet toGnosis on the application.
2. Connect your wallet.
3. Select the **Swap** tab. Enter the amount you would like to convert and click **Convert**. You can convert any amount, be sure to start with a leading 0 to convert less than 1 GNO. For example, 0.1 GNO will be converted to 3.2 mGNO.
4. Sign 2 transactions in your wallet. The first is a free signature request to allow the application to make the conversion. The second processes the transaction. This will require a small amount of xDai to complete.
5. The transaction should be initiated and completed within a few seconds. Once completed you can click the link to see the tx in BlockScout and add mGNO to your MetaMask wallet. The mGNO contract address is 0x722fc4DAABFEaff81b97894fC623f91814a1BF68.

When done, you're ready to stake your mGNO at Ankr. 

## Connect your wallet at Ankr Staking

1. Visit [Ankr Staking](https://www.ankr.com/staking/stake).
2. Click **Connect wallet** in the top-right corner of the page and choose **MetaMask**; approve connecting if needed.
3. If you're on a different network, you may be prompted to switch to the correct one. Click **Switch network** on the page, then allow MetaMask to switch to it.
4. Successful connection to **Ankr Staking** is indicated at top right corner by the address of wallet you connected.

You will need to make the following interactions in your wallet:

:thumbsup: **Grant access** to grant access to your wallet.

:thumbsup: **Approve** to add a new network.

:thumbsup: **Switch network** to switch to the correсt network.

## Stake mGNO

:::note GAS FEES
Make sure you have some xDai to pay the gas fee for your staking transaction.
:::

1. Visit [Ankr Staking](https://www.ankr.com/staking/stake).
2. In the **Delegated staking** section, click **Stake** under **mGNO**.
3. Enter the desired amount of mGNO to stake.
4. Choose a Node Provider (currently only Ankr; more providers in future releases).
5. Click **Approve** to approve Ankr Staking access to your mGNO.
6. Confirm approving access in MetaMask.
7. Click **Stake** to send your delegated stake to the chosen Node Provider.
8. Confirm the transaction in MetaMask.
9. On the stake progress page, click **Go to dashboard** to see the staked mGNO. You may need to wait a little for the transaction to finalize and Ankr Staking Dashboard to automatically update.
