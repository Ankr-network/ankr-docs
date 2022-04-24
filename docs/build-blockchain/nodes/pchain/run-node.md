---
title: Run a Pchain Node
id: run-node
---

# Run a Pchain node

1. Head to [app.ankr.com](https://app.ankr.com/) to deploy and click the **Create Nww Project** button.
   ![Create a project](../../../../static/img/nodes/create-new-project.png)
2. Search or scroll down to find the Stafi card, hover over it, and press **Deploy**.
   ![Click the deploy button](../../../../static/img/nodes/pchain-deploy.png)
3. Now you are taken to the configuration page. The hardware configuration is already set at the optimal system requirements, but you are allowed to increase the specifications if you wish to do so.<br /><br />
   
   The platform also recommends a cluster, which is usually the one that has the most freely available resources. In this particular case, the recommended cluster is UK cluster, but another cluster may be recommended depending on your location.
   ![Choose cluster](../../../../static/img/nodes/pchain-choose-cluster.png)
4. The application name is pre-filled. You can change it if you want. 
   ![Name app](../../../../static/img/nodes/pchain-name-app.png)
5. To deploy a Validator Node or apply for a Candidate Node, a Bls Key and a Pchain Wallet will be needed to be attached to your node. Ankr can generate a new wallet that you can download and import into your PiWallet application. Or you can use your own Pchain account.<br /><br />
   Make your selection:
   1. Let Ankr generate a Pchain account for you - the newly generated account information will be available after the node is deployed. IMPORTANT: Ankr does not offer a password retrieval mechanism so please make sure to backup your password
   2. Upload your own Pchain account by providing your Keystore and password. For information on how to download and install your own PCHAIN wallet and to create an account please consult the official documentation [here](https://pchaindoc.readthedocs.io/en/latest/wallet/GettingStart.html).<br /><br />
   By default only the main chain will be synced but you can explicitly choose to sync Pchain’s child chain at this stage by ticking the box.
   ![Sync chain](../../../../static/img/nodes/pchain-sync-chain.png)
6. Select the Payment Method, choose the number of months you want to run the node by moving the slider. The price and discount will increase when you extend the run time.<br /><br />
   If later on, you want to extend the node’s run time, you can add funds at any time
7. Click **Proceed to payment**.
   ![Proceed to payment](../../../../static/img/nodes/proceed-to-payment.png)
8. Select payment method (USDT, ANKR erc20 or add your credit card).
9. For this tutorial we will choose **Add New Credit Card**.
   ![Add card](../../../../static/img/nodes/add-card.png)  
10. Provide all requested information and click **Pay with Credit Card**.
    ![Pay with card](../../../../static/img/nodes/pay-with-card.png)
11. If all information is provided successfully the deployment will of the node will start. 
12. If all information is provided successfully the deployment will of the node will start. 
   Pchain have 12 epochs per year, and in each epoch there are 4 phases. On the Information page you can see current Epoch period.
   ![Epoch](../../../../static/img/nodes/pchain-epoch.png)
   ![Epoch](../../../../static/img/nodes/pchain-info.png)
   :::note
   If you choose to let Ankr generate a Pchain account for you - the newly generated account information should be downloaded and securely stored using the Download button.
   ![Download keystore](../../../../static/img/nodes/pchain-download-keystore.png)
   :::
13. Switch to Candidate submission tab to apply for becoming a candidate.
   :::note
   To become a candidate you need to hold at least 10,005 PI for your candidate submission to be successful.
   :::
   ![Candidate submission](../../../../static/img/nodes/pchain-candidate-submission.png)
14. You can verify your account balance and Apply to become a candidate and provide the necessary information.
   :::info
   Explanation of Commission (delegators): 

   The Commission represents a percentage of all the rewards that the validator keeps for itself and is not available to split among the delegators. For example if you set a commission of 10 this means that 10% of the rewards are kept by the validator while 90% of the rewards will be split amongst delegators.
   :::
   ![Apply for candidate](../../../../static/img/nodes/pchain-apply-for-candidate.png)<br /><br />
   After you submit your application you need to register your node to receive delegation by clicking the register button which takes you to the PChain register node page.
15. In order to become a validator you need to switch to the Voting tab and Vote.
   :::note
   To become a validator you need to hold at least 100,000 PI in your own balance or have the same amount delegated to your candidate. Delegated amounts will be displayed in the Tokens Available for voting balance.
   :::
   ![Voting](../../../../static/img/nodes/pchain-voting.png)
   ![Vote](../../../../static/img/nodes/pchain-vote.png)
16. To reveal votes you can click **Reveal**.
       ![Reveal](../../../../static/img/nodes/pchain-voting-reveal.png)
17. Enter your Account Password and click **Submit**.
   ![Reveal vote](../../../../static/img/nodes/pchain-reveal-vote.png)

:::info
In case you require more detailed information about the operations you can perform with your node please consult the official documentation [here](https://pchaindoc.readthedocs.io/en/latest/introduction/introduction.html).
:::