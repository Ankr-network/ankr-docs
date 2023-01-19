import { Callout } from "components";

# Time-based automation

Time-based automation Tasks allow you to automate calling a contract function on a schedule of your choice.

To create a time-based automation task, you need to:
1. Connect a wallet.
2. Create a time-based Task and specify a contract and a function to execute. 
3. Specify a time schedule.

## Connect a wallet
<Callout type="info">
We recommend MetaMask as a most adopted and tested-out wallet and use it in throughout our documentation.  
</Callout>

To connect a wallet:
1. Visit [Ankr Automation Dashboard](https://www.ankr.com/automate/dashboard/).
2. Click **Connect wallet**.
   <img src="/docs/build/automation/click-connect-wallet.jpg" alt="Click the connect wallet button" class="responsive-pic" width="800" />
3. Choose a wallet.
   <img src="/docs/build/automation/choose-wallet-to-connect.jpg" alt="Choose a wallet" class="responsive-pic" width="800" />
4. Connect the wallet.
   <img src="/docs/build/automation/connect-wallet.jpg" alt="Connect the wallet" class="responsive-pic" width="300" />
5. Successful wallet connection is indicated in the top-right corner, on the dashboard.
   <img src="/docs/build/automation/successful-wallet-connection.jpg" alt="Successful wallet connection" class="responsive-pic" width="250" />

## Create a time-based Task
<Callout type="info">
Before creating a task, make sure your wallet address has some BNB to deposit. Your automation will need BNB to pay the gas fees.
</Callout>

To create a time-based Task:
1. Visit [Ankr Automation Dashboard](https://www.ankr.com/automate/dashboard/).
2. Click **Create Task**.
   <img src="/docs/build/automation/click-create-task.jpg" alt="Click Create Task" class="responsive-pic" width="800" />
3. Enter Task details: a name, contract address, contract function to be executed, and gas limit. When done, click **Continue**.<br/> 
   Your contract doesn't have to be compatible with the Ankr Automation interface.<br/>
   If your contract hasn't been verified, it will need the ABI. If no ABI is fetched from the contract, click **Switch to custom ABI** and copy&paste the ABI code into the corresponding text box.
   <img src="/docs/build/automation/enter-task-details.jpg" alt="Enter task details" class="responsive-pic" width="500" />
4. Choose days and a time interval to execute the function: use a built-in scheduler or switch to **CRON expression** and provide a custom expression. Set a date and time for the task to initially start. When done, click **Continue**.
   <img src="/docs/build/automation/set-up-schedule.jpg" alt="Set up the schedule" class="responsive-pic" width="500" />
5. Top up your Ankr Automation account: click **Deposit** and add some BNB for the gas fees, then click **Continue**.
   <img src="/docs/build/automation/set-up-payment.jpg" alt="Enter task details" class="responsive-pic" width="500" />
6. Click **Create Task** to finish the process. 
   <img src="/docs/build/automation/finish-creating-task.jpg" alt="Finish creating the Task" class="responsive-pic" width="500" />
7. Confirm in MetMask deployment of your automation to the Ankr Automation registrar. You may be also asked to confirm a CRON wrapping transaction, so that makes up 2 txs in total.
   <img src="/docs/build/automation/confirm-deployment-of-automation.jpg" alt="Confirm deployment of automation" class="responsive-pic" width="300" />
8. You'll be redirected to [Ankr Automation Dashboard](https://www.ankr.com/automate/dashboard/) to view and manage created Tasks.
   <img src="/docs/build/automation/successfully-created-time-based-task.jpg" alt="Check created task on Ankr Automation Dashboard" class="responsive-pic" width="800" />
