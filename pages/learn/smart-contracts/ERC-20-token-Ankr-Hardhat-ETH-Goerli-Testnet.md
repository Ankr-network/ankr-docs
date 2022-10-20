import { Code } from "components";
import { Bleed } from "nextra-theme-docs";
import { Callout } from "nextra-theme-docs";
import Image from 'next/image';

# How to deploy your own ERC-20 token with Ankr & Hardhat on ETH Goerli Testnet

**By** [**Krinza Momin**](https://twitter.com/kayprasla)
____________________________________


If 'I wish I had my own token ' thought ever crossed your mind, then this article will serve to be your step-by-step guide for building and deploying your very own token (think of a name already).

## Getting Started
ERC-20 are widely used tokens on the Ethereum network. They are fungible, which means you don’t have to care which token you have since they’re all the same. And they are transferrable, meaning they can be sent from one address to another. This contrasts with non-fungible tokens (NFTs), which are unique and therefore not interchangeable.

Now that we briefly understand what ERC20 means, let's get started creating our very first ERC20 token.

### Step 1: Create a MetaMask Account


You will need MetaMask to access the testing networks on Ethereum. In this guide, we will use Goerli, an Ethereum test network that allows blockchain development testing before the deployment on Mainnet.

In your browser, go to [metamask.io](https://metamask.io/) and install the plugin. Once MetaMask is installed and running, select the Goerli network. 

### Step 2: Acquire Goerli ETH

To request funds, go to [Goerli Faucet](https://faucets.chain.link/goerli) and connect your metamask wallet with your newly-created test account into the UI. Wait a few moments and your wallet should be funded!

Note: ETH on testnets has no real value. 

### Step 3: Set up the Dev Environment 

To get started with the hardhat installation, we first need to set up our dev environment. To do so, create a new directory called <code>erc20-token-ankr</code>.

- Now, initialize your new npm project in the <code>erc20-token-ankr</code> directory by running the following command in the terminal.

```
npm init

``` 
```
npm install dotenv
``` 
- Once your project is ready, install Hardhat, an Ethereum development environment for testing and deploying smart contracts to the blockchain.

```
npm install --save-dev hardhat
``` 

- Run <code>npx hardhat</code>, choose "create a sample project" and say y to everything.

It might take a minute or two to install everything!

```
npx hardhat
``` 

Your project should now contain the following files and folders:
 <code>hardhat.config.js</code>,<code>node_modules</code>, <code>package.json</code>,  <code>package-lock.json</code>, <code>README.md</code>, <code>scripts</code>, and <code>contracts</code>.

- Go ahead and delete the <code>sample-script.js</code> in the <code>/scripts</code> directory and <code>Greeter.sol</code> in the <code>/contractsdirectory</code>.

- We will now install a Hardhat plugin that brings the Ethereum library [ethers.js](Link), which allows you to interact with the Ethereum blockchain in a simple way.

```
npm install --save-dev @openzeppelin/hardhat-upgrades
``` 

```
npm install --save-dev @nomiclabs/hardhat-ethers ethers
``` 

- Create a <code>.env</code> file in your project’s root folder and set the environment variable as follows. This is the private key of the account you intend to use on the Ethereum Network from MetaMask. 


```
PRIVATE_KEY=YOUR_PRIVATE_KEY
``` 

### Step 4: Setup Hardhat 

Before setting up the <code>hardhat.config.js</code> file, we will need a gateway to communicate to Ethereum blockchain. 

<img src="/docs/learn/12.png" alt="Hello" class="responsive-pic" width="700" />


For that, we will be using [Ankr's Public RPCs](https://www.ankr.com/protocol/public/eth/) to connect and send transactions on the Ethereum blockchain. Just copy the URL for the goerli testnet. No account or login is required!

Now you are ready to edit your hardhat.config.js with the following:

- Open the <code>hardhat.config.js</code> file
- Delete the code inside, and copy-paste the code below:


```javascript
require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
// Any file that has require('dotenv').config() statement 
// will automatically load any variables in the root's .env file.
require('dotenv').config();

module.exports = {
  solidity: "0.8.0",
  networks:{
    goerli:{
      // Ankr's Public RPC URL
      url: "https://rpc.ankr.com/eth_goerli",
     // PRIVATE_KEY loaded from .env file
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};

``` 
Did you notice how we are sourcing the <code>PRIVATE_KEY</code> variable in this file? We are loading them up from <code>process.env</code> using the <code>dotenv</code> library we installed while setting up the dev environment. 



### Step 5: Set Up ERC-20 Contract 

We will use an ERC-20 standard based on OpenZepplin. [OpenZepplin](https://www.openzeppelin.com/)↗ is an open-source standard for securing blockchain applications and provides security products to build, automate, and operate dApps.

For this, we will need the <code>@openzeppelin/contracts</code> package! 

```
npm install @openzeppelin/contracts
``` 

```
npm install --save-dev @nomiclabs/hardhat-waffle
``` 

Now, it is time to name your token! 

In the next steps, we will create a smart contract file (**you must match the name of the file with the name of token**). So if you're thinking to name your token <code>Buildoooor</code>, make sure to name the contract file exactly the same <code>Buildoooor.sol</code>.

- <code>cd</code> into your <code>/contracts</code> folder (which should be empty right now), and run <code>touch Buildoooor.sol</code>.

- Open the newly-create .sol file and copy-paste the following:


```javascript
//SPDX-License-Identifier: Unlicense
//Declare the version of solidity to compile this contract. 
//This must match the version of solidity in your hardhat.config.js file
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

//This function instantiates the contract and 
//classifies ERC20 for storage schema
contract Buildoooor is ERC20 {

   //Feel free to change the initial supply of 50 token 
   //Keep the (10**18) unchanged as it multiplies the number we want as our supply to have 18 decimal
    uint constant _initial_supply = 50 * (10**18);

    // make sure to replace the "Buildoooor" reference 
    //with your own ERC-20 name
    //choose a token symbol, in our this case "FIRT"
    constructor() ERC20("Buildoooor", "BUDL") {

        _mint(msg.sender, _initial_supply);
    }
}
``` 
- Save and close this file
- Compile your contract to make sure everything is good to deploy

```
npx hardhat compile

# output
# Compiled n Solidity file successfully
``` 
> Note: If you are on windows and getting "nothing to compile error" thrown at you, run <code>npm install glob@7.2.0</code> and rerun <code>npx hardhat compile</code>. This should solve the problem. Learn more [here](https://github.com/NomicFoundation/hardhat/issues/2712#issuecomment-1126722588)!


### Step 6: Deploy the ERC20 Token

Now that we've got our ERC20 contract set up, let's create the deployment script for it. 

- <code>cd ..</code> back into your project root directory
- <code>cd</code> into your scripts directory (which should be empty right now)
- Run <code>touch deploy.js</code>, open the deploy.js file and copy-paste the following:


```java
async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const weiAmount = (await deployer.getBalance()).toString();
    
    console.log("Account balance:", (await ethers.utils.formatEther(weiAmount)));
  
   // make sure to replace the "Buildoooor" reference 
   //with your own ERC-20 name
    const Token = await ethers.getContractFactory("Buildoooor");
    const token = await Token.deploy();
  
  // log the address of the Contract in our console
    console.log("Token address:", token.address);
  }
  
// run main, catch error, if any, and log in console
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
  });
``` 
- Save and close the file
- <code>cd ..</code> back into your project root directory
- Run <code>npx hardhat run scripts/deploy.js --network goerli</code>

```
npx hardhat run scripts/deploy.js --network goerli

#Deploying contracts with the account: 0x6d4779c3Dc002894C2E2108c75e6ef72C418E23f
#Account balance: 0.2
#Token address: 0x74d8C71a4aF1eBD7DA5B8eAAabe35b0D29478DF6
``` 
Your contract will be compiled and deployed to the Goerli network! 
- Now, go to [goerli.etherscan.io/](https://goerli.etherscan.io/tx/0xc7d30c40475bb3d16bb9cac24a59fd02faf03d308d324b19061e8abed6c11241) and input your token address to see your deployed ERC-20 contract on Goerli Network.

<img src="/docs/learn/i-Zfqm2nI.png" alt="Hello" class="responsive-pic" />

Buildoooors, great job deploying your own ERC-20 token on Goerli using Ankr, Hardhat, and OpenZeppelin ERC20 standard.
