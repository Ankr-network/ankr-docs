---
title: How to Create a dApp with Remix
id: dapp-remix
---

# How to create a dApp with Remix

## About

This Tutorial shows how to build  a simple dApp with a smart contract. It is suitable for those with a basic knowledge of JavaScript. 

## 00 Let’s Get Started

 You will need:

* A code editor e.g. Visual Studio Code. ([Download Visual Studio Code](https://code.visualstudio.com/download))
* Node JS installed ([Download Node.js](https://nodejs.org/en/download/))
* A Metamask Wallet ([Download Metamask](https://metamask.io/))

## 01 Get Testnet ETH

You will need Testnet ETH to create smart contracts and interact with most smart contract functions.

Doing this on a Testnet simulates how smart contracts function without costing real ETH.

:::info Testnets vs Mainnet

Test networks are used by protocol developers or smart contract developers to test potential smart contracts in a production-like environment before deployment to Mainnet. They are the equivalent of staging servers prior to production. 

There are several Ethereum Testnets - Gorli, Ropsten, Kovan and Rinkeby.  
:::

We’re going to be using the Rinkeby Testnet.

You will probably want to make three requests so get at least 0.3 ETH to use in this tutorial. You can always come back for more if you need.


1. In your MetaMask wallet, select the Rinkeby Testnet by clicking the top drop-down menu. 
 
<!-- ![alt_text](images/image1.png "image_tooltip") -->


2. Copy your MetaMask Wallet address 




<!-- ![alt_text](images/image2.png "image_tooltip") -->


There are a number of sources of Testnet ETH



3. Check out [https://rinkeby.faucet.epirus.io/](https://rinkeby.faucet.epirus.io/)  \
Paste your MetaMask Wallet address

    Click ‘Send Ether’


    




<!-- ![alt_text](images/image3.png "image_tooltip") -->



NOTE: Due to very high demand, Faucets often run out of funds or the server may be down for some reason. You are also limited in how many times you can request TestETH. 

	

The following is a list of Rinkeby Testnet ETH faucets:

[https://rinkeby-faucet.com](https://rinkeby-faucet.com)

[https://faucet.rinkeby.io/](https://faucet.rinkeby.io/) - You need to request funds via Twitter or Facebook. 

[https://faucets.chain.link/rinkeby](https://faucets.chain.link/rinkeby)


## 03 Compile a contract in Remix

For this step, we’re going to do exciting things by leaving an indelible mark on the blockchain….we’re going to compile a contract in an online code editor called Remix. 

Remix is a great tool to learn and  get started with creating and testing solidity contracts.



1. Open Remix IDE [https://remix.ethereum.org/](https://remix.ethereum.org/)

    Inside the **File Explorer **is a folder called **Contracts**. 


    Three sample solidity contracts are here:  \
**1_Storage.sol,  \
2_Owner.sol  \
3_Ballot.sol**


    


<!-- ![alt_text](images/image4.png "image_tooltip") -->


2. Select **1_Storage.sol.** \
If you look at the comments in the file, you can see that this contract stores an integer and allows it to be retrieved. Below is a detailed description of what is going on in the file:

**NOTE: You can learn more about Solidity Contracts from [Solidity Docs. ](https://docs.soliditylang.org/en/v0.8.11/)**





<!-- ![alt_text](images/image5.png "image_tooltip") -->


**Here is a detailed walkthrough of the Solidity file: **

**Pragma solidity  First, we specify the version of solidity we are using. The Compiler looks for this version. **

**contract Storage Next we define our first contract - Contract is a keyword - it is like defining a Class in Java or Javascript. The Contract is named Storage**

**uint256 is  number. This is the storage variable for the life of the contract. uint256 (uint is an alias) is an unsigned integer which has a minimum value of 0**

**maximum value of 2^256-1 = 115792089237316195423570985008687907853269984665640564039457584007913129639935 //78 decimal digits**

**This Storage variable is automatically stored with the contract on the blockchain. This means it persists on the blockchain and can be retrieved. (unlike local variables)**

**Functions are the executable units of code.**

**Function store. This stores uint256 num as public. This  function is public which  means that anyone with an Ethereum account can access our contract and call it.**

**Function retrieve - retrieves the stored variable and is also public. ‘view’ means that it returns data but  does not modify the contract’s data (a modification would cost gas).** \




3.  Now, let’s compile this contract. 

    Click on the **_Compile_** icon below the **_Files_** icon. \
Click ‘**Compile 1_Storage.sol’**’


    


<!-- ![alt_text](images/image6.png "image_tooltip") -->



    When we compile a solidity contract, it takes the contract source code and spits out the **ABI** - JavaScript Interpretation Layer and the **Contract Bytecode **which is what is actually deployed to the Ethereum Network.

4. Now let’s click on the ‘**Compilation Details**’ button  and view the ‘**Function Hashes**’. 

    What we see in Remix are the first four bytes of the Keccak-256 hash of a full signature string.  We can use these function hashes to retrieve the data later.

5. Be sure to make a note of the ‘**Function Hashes’**. 





<!-- ![alt_text](images/image7.png "image_tooltip") -->



## 04  Deploy and Run the contract in Remix

In this step, we’re going to deploy our contract so that we can interact with it and run calls.



1. Select the**_ Deploy & Run_** icon from the left hand menu.  \

2. Switch the environment to **_‘Injected Web3_**’. \




<!-- ![alt_text](images/image8.png "image_tooltip") -->


3. You are now  prompted to connect **Remix** with **MetaMask**.  \


    



<!-- ![alt_text](images/image9.png "image_tooltip") -->


* Click **_‘Next’_** to connect your **MetaMask** 
* Click **_‘Deploy’_**
* Confirm the transaction in **MetaMask** and wait a little while for your smart contract to be deployed on the Rinkeby Testnet.
* To view the status of the transaction click on **‘Activity’** in MetaMask




<!-- ![alt_text](images/image10.png "image_tooltip") -->
    

You can view the status on Etherscan by clicking **_‘View on block explorer_**’.


<!-- ![alt_text](images/image11.png "image_tooltip") -->


You can now experiment with calling functions in **Remix** if you like. Check out ‘**_Remix Commands’_** in the Remix  docs to do so. [https://remix-ide.readthedocs.io/en/latest/remix_commands.html#id1](https://remix-ide.readthedocs.io/en/latest/remix_commands.html#id1)  



4. Be sure to add the **contract public address **to your note(Copy this from below ‘**_Deployed Contracts_**’ in Remix)

In the next step we’re going to move over to setting up our dApp to interact with our smart contract.  \



<!-- ![alt_text](images/image12.png "image_tooltip") -->


**NOTE: Understanding Gas Fees**

**Any operation e.g. add, subtract in our smart contract that modifies or stores data on the blockchain costs gas. (Create, Update, Delete). However, retrieving data costs nothing (all View/Read operations).**


## 05 Connect to the Rinkeby Network

Now that the contract is deployed we can get work on how to interact with it.

There are a number of ways to connect to the Rinkeby Network to be able to make calls to your contract.

The easiest is via Ankr.

Ankr is a specialist provider of blockchain infrastructure. You can simplify the process of setting up an Ethereum Rinkeby node with just a few clicks. You then have 2 endpoints: an** Https endpoint** and a **Websocket (Wss) endpoint** to interact with. 


#### **Create a Rinkeby Node API**



1. Go to [https://app.ankr.com](https://app.ankr.com) and sign up for a free account. 

    



<!-- ![alt_text](images/image13.png "image_tooltip") -->



    2. Sign in to the app and select **‘APIs’** from the left sidebar to open the** API market**.

*  Locate ‘**Ethereum’** and click **_‘Deploy’_**.

    


<!-- ![alt_text](images/image14.png "image_tooltip") -->



  	

3. Select the free intro plan for now \
	- On the next screen, assign a **Project name **and under **Network**, select **_‘Rinkeby’_**.

- Click **_‘Create’_**.


    


<!-- ![alt_text](images/image15.png "image_tooltip") -->



    4. Select your authentication method. This tutorial is using ‘**_Token based Authentication’_**.



* Click **_‘Create’_**

    



<!-- ![alt_text](images/image16.png "image_tooltip") -->



     5. Click on your newly created API and open the **Settings** tab. \
- Copy your endpoints to a text file. 




<!-- ![alt_text](images/image17.png "image_tooltip") -->
 \




#### **OPTION 2 - Run a Full Node with Geth**

This is another option although running a Full Node is notoriously fiddly,  frustrating. 

**NOTE: This process may take hours or days and requires a large amount of disk space. **

**If you must run a Full Node, it is better to run a light node on a testnet to be up and running in minutes. **

**A light node uses Light Sync: This only gets the current state of the chain. To verify elements, it needs to ask full (archive) nodes for the corresponding tree leaves.**

1.  Install Geth

[https://geth.ethereum.org/docs/install-and-build/installing-geth](https://geth.ethereum.org/docs/install-and-build/installing-geth)

You can download Geth from [https://geth.ethereum.org/downloads/](https://geth.ethereum.org/downloads/).

2. Run a Geth Light Node on Rinkeby Network. 

A full node synchronizes the blockchain by downloading the full chain from the genesis block to the current head block, but does not execute the transactions. Instead, it downloads all the transaction receipts along with the entire recent state. As the node downloads the recent state directly, historical data can only be queried from that block onward.

Initial processing required to synchronize is more bandwidth intensive, but is light on the CPU and has significantly reduced disk requirements. Mid range machines with HDD storage, decent CPUs and 4GB+ RAM should be enough.

To run a full node, download [rinkeby.json](https://www.rinkeby.io/rinkeby.json) and start Geth in Terminal/Command Line with:


```
geth --datadir=$HOME/.rinkeby init rinkeby.json
geth --networkid=4 --datadir=$HOME/.rinkeby --cache=512 --ethstats='yournode:Respect my authoritah!@stats.rinkeby.io' --bootnodes=enode://a24ac7c5484ef4ed0c5eb2d36620ba4e4aa13b8c84684e1b4aab0cebea2ae45cb4d375b77eab56516d34bfbd3c1a833fc51296ff084b770b94fb9028c4d25ccf@52.169.42.101:30303
```



## 06 - Creating the dApp front end

Now we get to the final stage of putting it all together to create a complete working dApp.



1. Create a folder on your machine

    Name the folder ‘**my-dApp**’ \
 \


2. Verify your Node installation by opening your Command line tool and typing

    ```
    ```
    $ node -v
    ```

    You should get a result like:

    ```
v14.16.1
```
    ```


3. Open your code editor e.g. Visual Studio Code and navigate to the folder you created. \

4. Create 2 blank files: \
*** index.html \
* app.js**


#### **Create index.html** \




1. Type HTML and select ‘HTML5 Boilerplate’

    

<!-- ![alt_text](images/image18.png "image_tooltip") -->


5. Inside the body tags insert the following code.  \
These buttons will  \
- connect the user to MetaMask  \
- call our smart contract. 

    ````


    ```
    <body>
        <button id="retrieveButton" >Retrieve Value</button>
         <button id="connectEthereumButton">Connect to Ethereum</button>

    </body>
    ```

    ```



#### **Create a package.json file**



1. In the terminal/command line,  navigate to your dApp folder and run the code below:

	````npm init````


    This opens a utility to walk you through creating your package.json file.



2. Accept all the default options by pressing ‘enter’

**Run web3 **

Install web3 by running the following code:

````npm install web3````

**Create app.js**



1. First create a button to prompt the user to connect their Metamask wallet to our dApp.


```
document.getElementById ("connectEthereumButton").addEventListener('click', () => {
   ethereum.request({ method: 'eth_requestAccounts' });
 });

```



2. Connect the dApp to the Rinkeby API to make function calls. (The URL is the API endpoint we created earlier.) \



```
const URL = 'https://apis.ankr.com/8e762df0f07a42d89678a2e8d4fd0fde/58db32cf48a131c889da154078752b8d/eth/fast/rinkeby';
 const web3 = new Web3(new Web3.providers.HttpProvider(url));
 let account;



```



3. Now use the Contract Address (copied from Remix)


```
let contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138';





```



4. Here is a function to make our smart contract call.

`window.ethereum.selectedAddress `is our connected metamask account,


```
 const handleClick = async () => {
     console.log (web3)
     let account = window.ethereum.selectedAddress
         window.ethereum

```



5. Call an RPC API Method  \


`eth_call` is the RPC API method we are calling. This method executes a new message call immediately without creating a transaction on the block chain.



6. Let’s set the Parameters for the call. \
 \
**NOTE:  All parameters must be in hexadecimal. ** \


`from: `The address the transaction is sent from i.e. our MetaMask account address

`to: `The address the transaction is directed to i.e. the contract address on the blockchain to which we deployed.

`value:` is ‘0’ as we are not performing a transaction

`gasPrice:` is the integer of the gasPrice used for each paid gas. This is 0 as we are not performing a transaction.

`gas: `has to have a minimum when making read only function calls, but no gas is actually consumed

`data: `is our function hash from our compilation details in Remix


```
 params: [
               {
                 from: 0x1701A33B1f8E9F934Dccff20A1AfcaD9BDc1caF0,
                 to: 0xd9145CCE52D386f254917e481eB44e9943F39138,
                 value: '0x0',
                 gasPrice: '0x0',
                 gas: '0x30000',
                 data: '2e64cec1'

```



7. Here a web3 Utility converts the hex to an integer:


```
.then((result) => {
             console.log (web3.utils.hexToNumber(result))
             }).catch((error) => {
               console.log(error)
             })}

```



8. Here we create a button that retrieves the data. \



```
  document.getElementById ("retrieveButton").addEventListener ("click", handleClick, false);
```


Here is the final app.js file


```
document.getElementById ("connectEthereumButton").addEventListener('click', () => {
   ethereum.request({ method: 'eth_requestAccounts' });
 });

 const URL = 'https://apis.ankr.com/8e762df0f07a42d89678a2e8d4fd0fde/58db32cf48a131c889da154078752b8d/eth/fast/rinkeby';
 const web3 = new Web3(new Web3.providers.HttpProvider(url));
 let account;
 let contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138';
  const handleClick = async () => {
     console.log (web3)
     let account = window.ethereum.selectedAddress
         window.ethereum
           .request({
             method: 'eth_call',
             params: [
               {
                 from: 0x1701A33B1f8E9F934Dccff20A1AfcaD9BDc1caF0,
                 to: 0xd9145CCE52D386f254917e481eB44e9943F39138,
                 value: '0x0',
                 gasPrice: '0x0',
                 gas: '0x30000',
                 data: '2e64cec1'
               },
             ],
           })
           .then((result) => {
             console.log (web3.utils.hexToNumber(result))
             }).catch((error) => {
               console.log(error)
             })}


  document.getElementById ("retrieveButton").addEventListener ("click", handleClick, false);
```

## 07 Run your full dApp

## 08 Summary

In this tutorial you wrote a smart contract, deployed it using Remix and then created a front end to create your final dApp. 

 
