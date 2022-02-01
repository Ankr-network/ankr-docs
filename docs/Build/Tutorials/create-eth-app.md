---
title: How to create a dApp front end with create-eth-app
id: create-eth-app
---

# Easy Front-end for your dApp using Create-ETH-App

**Create-eth-app** makes it super easy to spin up front ends for dApps with. Create-eth-app is a fork of ‘create-react-app’ and 

works on macOS, Windows, and Linux. It is a swift alternative to writing your own code with web3 libraries or Truffle Suite Box for React. It comes bundled with ethers.js and Web3Modal to connect with wallets as well as examples on how to interface with Smart Contracts. 

Create Eth App is a Node.js package. You can find its repo here : 

[https://github.com/paulrberg/create-eth-app](https://github.com/paulrberg/create-eth-app)


## Before you Start

Ensure you have the following dependencies installed. 



1. Node.js >= version 14


```
$ node -v
v14.16.1

```



2. Node Package Manager (NPM) installed \



```
$ npm -v
6.14.12

```



3. Yarn (to enable Yarn Workspaces) \



```
$ yarn --version
1.22.11
```


.


## Get Started


### STEP ONE Install Create Eth App

In Terminal/CLI


```
yarn create eth-app my-eth-app
```


This creates a basic blockchain project. Open the project in your code editor e.g. VS Code.


### STEP TWO View Folders


```
cd my-eth-app
```


There are 3 main folders


```
CONTRACTS FOLDER
```



<!-- 
<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](img/image1.png "image_tooltip") -->


This folder contains information to connect smart contracts like ABIs and the Contract Addresses. The ABI is an interface allowing you to interact with the smart contract deployed on the Ethereum network.

REACT APP FOLDER



<!-- <p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image2.png "image_tooltip") -->


This folder is a fork of** create-react-app **and contains all the react front-end code and two key libraries -  
**Ethers.js** to connect the app to EVM compatible blockchains and **Web3modal**.  Web3modal provides support for injected providers e.g. MetaMask and WalletConnect

SUBGRAPH FOLDER 




<!-- <p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image3.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image3.png "image_tooltip") -->


This folder contains code to query smart contracts in graphql by using the graph protocol.  You can also perform advanced queries and use sub-graphs by others. 


### STEP THREE Spin up the App with default settings


```
yarn react-app:start

Compiled successfully!

You can now view @project/react-app in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.8:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```



<!-- 
<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image4.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image4.png "image_tooltip") -->



### STEP FOUR Connect Wallet

Out of the box we can connect a wallet to our app. You can use MetaMask or WalletConnect. 

(To install MetaMask, open[ metamask.io ](https://metamask.io/) and click on ‘**Download’**. BE SURE TO KEEP YOUR SECRET SAFE. )

Click **_‘Connect Wallet_**’ in your app and a pop up modal will appear.



1. Enter your MetaMask password
2. Select an account to connect with your App. (Test Account)
3. Click **_‘Connect’_** 
4. Connection is indicated in your wallet
5. The App now states your wallet address.



<!-- <p id="gdcalert5" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image5.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image5.png "image_tooltip") -->




<!-- <p id="gdcalert6" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image6.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert7">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image6.png "image_tooltip") -->




<!-- <p id="gdcalert7" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image7.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert8">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image7.png "image_tooltip") -->



### STEP FIVE Modify app.js

You can change settings and code in App.js to suit your needs. It is based on 



1. Open the** App.js** file and follow the instructions to remove the hidden prop. 



<!-- <p id="gdcalert8" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image8.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert9">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image8.png "image_tooltip") -->




2. With the Console open in the browser, click the now visible button “**_Read On-Chain Balance_**” and see what happens.

You can view the token balance. 



<!-- <p id="gdcalert9" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image9.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert10">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image9.png "image_tooltip") -->




3. As you can see we have exceeded our request rate limit.


### STEP SIX  Configure your App to use Ankr RPC API

Ankr Public RPC APIs are super fast with a market leading request rate limit. 

Plus they are free to use. If you want to go further, you can use the Premium RPCs. 

Let’s get started using the free Public RPC API on Ankr Protocol.  


```
// If you don't specify a //url//, Ethers connects to the default 
// (i.e. ``http:/\/localhost:8545``)
const provider = new ethers.providers.rpc.ankr.com/eth();

// The provider also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, we need the account signer...
const signer = provider.getSigner()
```

