---
title: Run a TomoX Node
id: run-node-tomox
---

# Run a TomoX Node on Ankr

1. Head to [app.ankr.com](https://app.ankr.com/) to deploy and click the **Create Nww Project** button.
   ![Create a project](../../../../static/img/nodes/create-new-project.png)
2. Search or scroll down to find the TomoChain card, hover over it, and press **Deploy** under TomoX.
   ![Click the deploy button](../../../../static/img/nodes/tomox-deploy.png)
3. Now you are taken to the configuration page. The hardware configuration is already set at the optimal system requirements, but you are allowed to increase the specifications if you wish to do so.<br /><br />
   
   The platform also recommends a cluster, which is usually the one that has the most freely available resources. In this particular case, the recommended cluster is UK cluster, but another cluster may be recommended depending on your location.
   ![Choose cluster](../../../../static/img/nodes/tomox-choose-cluster.png)
4. The application name is pre-filled. You can change it if you want. 
   ![Name app](../../../../static/img/nodes/tomox-app-name.png)
5. Choose a name for your node. 
   ![Name node](../../../../static/img/nodes/tomox-node-name.png)
6. For security reasons we advise to set up a new Tomochain wallet using [this guide](https://docs.tomochain.com/general/how-to-connect-to-tomochain-network/tomowallet). Insert the public address of TomoWallet into the Relayer Coinbase Address field from the Ankr App.
   ![Name node](../../../../static/img/nodes/tomox-node-name.png)
7. Select the Payment Method, choose the number of months you want to run the node by moving the slider. The price and discount will increase when you extend the run time.<br /><br />
   If later on, you want to extend the node’s run time, you can add funds at any time
8. Click **Proceed to payment**.
   ![Proceed to payment](../../../../static/img/nodes/proceed-to-payment.png)
9. Select payment method (USDT, ANKR erc20 or add your credit card).
10. For this tutorial we will choose **Add New Credit Card**.
    ![Add card](../../../../static/img/nodes/add-card.png)  
11. Provide all requested information and click **Pay with Credit Card**.
   ![Pay with card](../../../../static/img/nodes/pay-with-card.png)
12. If all information is provided successfully the deployment will of the node will start. Your TomoX Node is now in the process of being deployed, this process can take approximately 2-3 hours until completion.
13. After deployment is completed you will be directed to the Node details page, where you can check the status and details of your node.
   ![Node details](../../../../static/img/nodes/tomox-node-details.png)
14. After the node has fully synced we can register our DEX, go to [Tomochain Relayer](https://relayer.testnet.tomochain.com/login).
   :::note
   Please note: there is a minimum amount of 25000 TOMO required to be eligible to start your own DEX.
   :::
   ![TomoX relayer](../../../../static/img/nodes/tomox-tomo-relayer.png)
15. For more information about registration process watch [Register an Exchange with TomoRelayer](https://www.youtube.com/watch?time_continue=74&v=9aSqUQjzNFg&feature=emb_logo).
16. To see if your Coinbase Relayer Address was successfully registered, you can use the [following link](https://scan.tomochain.com/relayers) for validation.
17. After registration, the Coinbase Relayer Address needs to be added.
   ![Relayer address added](../../../../static/img/nodes/tomox-relayer-address-added.png)
18. The ANKR DEX URL should be added to the Relayer Configurations page. In order to obtain it, go to your Tomochain TomoX node on Ankr. Click on the **View** button.
   ![The view button](../../../../static/img/nodes/tomox-node-details-view-button.png)
19. Copy the URL of the DEX.
   ![Copy DEX url](../../../../static/img/nodes/tomox-copy-dex-url.png)
20. Copy URL in the Relayer Configuration.
   ![Copy relayer URL](../../../../static/img/nodes/tomox-copy-url-relayer.png)

Everything is set up now. In case you want to have your own more friendly URL you can register a new domain name and forward it to the URL of the your DEX.