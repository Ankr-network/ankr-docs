import { Code } from "components";
import { Bleed } from "nextra-theme-docs";
import { Callout } from "nextra-theme-docs";
import Image from 'next/image';

# An End-to-End Tutorial to Create and Deploy a Fully Decentralized Crowdfunding dApp on Polygon using Rainbowkit, Wagmi and Ankr

**By** [**Krinza Momin**](https://twitter.com/kayprasla)
____________________________________

In this tutorial, we’ll be building a donation-based crowdfunding dApp on Polygon where users can start a fundraising project for anyone to contribute and support the campaign by pledging the amount of their wish. 

By the end of this tutorial, you'll be able to:
- deploy crowdfunding smart contract on polygon
- and create a full-fledged frontend for your dApp 

<img src="/docs/learn/-EFHTGxf6.png" alt="Hello" class="responsive-pic" width="700" />

## The Functionalities

1. **Start New Campaign**  — users will be able to start a new crowdfunding project by inputting some details about the campaign like title, story and goal amount to be raised.
2. **View Projects** — users can see all the existing projects and campaign details on the homepage 
3. **Make Donation** — anyone can fund to the project they want to support in Matic tokens


## The Tech Stack

- Smart Contract Language: Solidity
- Smart Contract Deploy and Verify Scripts: Javascript
- Smart Contract Development Environment: [Hardhat](https://hardhat.org/)↗
- Frontend Language: React - TypeScript
- Wallet Connect: [Rainbowkit](https://www.rainbowkit.com/)↗
- Interacting with Contract through Frontend: [Wagmi](https://wagmi.sh/)↗
- User Interface: [TailwindCSS](https://tailwindcss.com/)↗
- RPC provider: [Ankr](https://www.ankr.com/protocol/)↗

__________________________________________


# Getting Started

**Prerequisite:** To successfully finish this guide, you'll need Node.js and Yarn installed on your machine.

We will begin the project by forking this [Crowdfunding-dApp🌈 Starter Repository](https://github.com/kaymomin/Starterkit-Crowdfunding-dApp)↗ that I have prepared which includes basic configurations, wallet connect with rainbowkit and complete structure of empty files and folders to get us started with our dApp. To clone the repo, click the **fork** button at the top-right of the linked GitHub page. 

> Note in the code block below, make sure you paste the repo URL of your own cloned repository.

Once the repository has been forked, clone it locally to get building on top of it by following the steps below:

- Navigate into a directory of your choice and run the following command in your terminal to set up a local clone of the starterkit
```bash
git clone https://github.com/kaymomin/Starterkit-Crowdfunding-dApp.git
```

- Now, let's navigate into the cloned directory and set up the development environment
```bash
cd starterkit-crowdfunding-dapp
``` 
``` bash
yarn
```

- To launch the starter kit, run the following command in the VSCode terminal
``` bash
yarn dev
```
and you will be able to see the starter-kit webpage. Here's what the site will look like at this point: 

<img src="/docs/learn/wztwdf729.png" alt="Hello" class="responsive-pic" width="700" />

## Step 1: Setup Hardhat Configs

Navigate back to the project and find the `hardhat.config.js` file in root directory and the following code: 

**File:** `hardhat.config.js`
```javascript
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("dotenv").config();
 require("@nomiclabs/hardhat-ethers");
 require("@nomiclabs/hardhat-etherscan");
 
 module.exports = {
   solidity: "0.8.15",
   defaultNetwork: "mumbai",
   networks: {
     hardhat: {},
     mumbai: {
       //ankr's free public rpc
       url: "https://rpc.ankr.com/polygon_mumbai",
       accounts: [`0x${process.env.PRIVATE_KEY}`],
     },
   },
   etherscan: {
     apiKey: {
       polygon: process.env.POLYGONSCAN_API_KEY || "",
       polygonMumbai: process.env.POLYGONSCAN_API_KEY || "",
     },
   },
 };
``` 
In this file, we have configured the solidity version, network details and plugged [Ankr's free public RPC](https://www.ankr.com/protocol/public/polygon/)↗ for Polygon Mumbai Testnet.

Did you notice how we are sourcing the PRIVATE_KEY and POLYGONSCAN_API_KEY variable in this file? We are loading them up from `process.env` using the dotenv library. So before we move ahead to next steps, let's add these variables in our `.env` file. 

- Head over to the `.env` file and create these two environment variables: 

**File:** `.env`
```bash
PRIVATE_KEY=ADD_YOUR_WALLET_PRIVATE_KEY
POLYGONSCAN_API_KEY=ADD_YOUR_POLYGONSCAN_API_KEY

```

Here, you need to set your wallet's [private key](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key)↗ and API key from [Polygonscan](https://polygonscan.com/)↗. You can follow their [tutorial](https://docs.polygonscan.com/getting-started/viewing-api-usage-statistics)↗ if you aren't familiar with how to get one. 

___________________________

## Step 2: Write Crowdfunding Smart Contract

Now that we have everything setup, we are all ready to write the smart contract for the donation based crowdfund platform. For that, navigate to `contracts` directory and you'll find `crowdfunding.sol` file. Add the following code in that file:

**File:** `contracts/crowdfunding.sol`
```javascript
// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.15;

//contract to record all crowdfunding projects
contract CrowdFactory {
    address[] public publishedProjs;

    event Projectcreated(
        string projTitle,
        uint256 goalAmount,
        address indexed ownerWallet,
        address projAddress,
        uint256 indexed timestamp
    );

    function totalPublishedProjs() public view returns (uint256) {
        return publishedProjs.length;
    }

    function createProject(
        string memory projectTitle,
        uint256 projgoalAmount,
        string memory projDescript,
        address ownerWallet
    ) public {
        //initializing CrowdfundingProject contract
        CrowdfundingProject newproj = new CrowdfundingProject(
            //passing arguments from constructor function
            projectTitle,
            projgoalAmount,
            projDescript,
            ownerWallet
        );

        //pushing project address
        publishedProjs.push(address(newproj));

        //calling Projectcreated (event above)
        emit Projectcreated(
            projectTitle,
            projgoalAmount,
            msg.sender,
            address(newproj),
            block.timestamp
        );
    }
}

contract CrowdfundingProject {
    //defining state variables
    string public projTitle;
    string public projDescription;
    uint256 public goalAmount;
    uint256 public raisedAmount;
    address ownerWallet; //address where amount to be transfered

    event Funded(
        address indexed donar,
        uint256 indexed amount,
        uint256 indexed timestamp
    );

    constructor(
        string memory projectTitle,
        uint256 projgoalAmount,
        string memory projDescript,
        address ownerWallet_
    ) {
        //mapping values
        projTitle = projectTitle;
        goalAmount = projgoalAmount;
        projDescription = projDescript;
        ownerWallet = ownerWallet_;
    }

    //donation function
    function makeDonation() public payable {
        //if goal amount is achieved, close the proj
        require(goalAmount > raisedAmount, "GOAL ACHIEVED");

        //record walletaddress of donor
        (bool success, ) = payable(ownerWallet).call{value: msg.value}("");
        require(success, "VALUE NOT TRANSFERRED");

        //calculate total amount raised
        raisedAmount += msg.value;

        emit Funded(msg.sender, msg.value, block.timestamp);
    }
}
``` 
You'll see we have initiated two contracts:
1. **CrowdfundingProject** - deals with a single project or campaign being create. It includes the `makeDonation()` function which calculates the amount raised and checks if the `goalAmount` is achieved or not while recording the wallet address of the donor.
2. **CrowdFactory** - records for all the crowdfunding projects being created and launched. 

Now, let's compile hardhat to see if everything's good to go!

```bash
yarn hardhat compile

# output
# Compiled n Solidity file successfully
``` 

__________________________________

## Step 3: Write the Deploy Script(s)

Now that we've got our contract set up, let's create the deployment scripts. There will be two scripts, one for deploying the **CrowdFactory** contract and second for a dummy campaign creation with some dummy project info. 

- For the first script, navigate to the `scripts` folder and add the following code in `deploy.js` file

**File:** `scripts/deploy.js`
```javascript
const { ethers } = require("hardhat");

async function main() {
  // Grab the contract factory
  const CrowdFactory = await ethers.getContractFactory("CrowdFactory");

  // Start deployment, returning a promise that resolves to a contract object
  const crowd = await CrowdFactory.deploy(); // Instance of the contract
  await crowd.deployed();
  console.log("Contract deployed to address:", crowd.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
``` 
- Save this file and run the following command to deploy the **CrowdFactory** contract
 
```bash
yarn hardhat run scripts/deploy.js --network mumbai
``` 
Running this command will prompt you with the address of the deployed contract. Here's the contract I [deployed](https://mumbai.polygonscan.com/address/0xA6A30bCc591107d932CA12a50FC616BAb5E58cdA).↗

***Note your contract address as you will need it in your next deployment script.***
____________________
Before we go on deploying another contract, let's save this contract address in a file named **constants.tx** under **src** directory.

**File:** `src/constants.tx`
```javascript
//add your contract's address here
export const FACTORY_CONTRACT_ADDRESS = "0xA6A30bCc591107d932CA12a50FC616BAb5E58cdA";

//just for testing purpose
export const DEBUG = false;
``` 


_______________


Now let's deploy another contract with a sudo campaign details for us to get started. For this, we are going to use **createCampaigns.js** file under `scripts` directory. Navigate to that file and save the following code.

> Note: In this file you need to edit two things. First the contract address we got in the above step. Replace your contract address with the address mentioned already in the script (check line 6). Second, on line 13, replace my wallet address with yours. 

**File:** `scripts/createCampaigns.js`
```
const { ethers } = require("hardhat");

async function main() {
const contract = await ethers.getContractAt("CrowdFactory",
//add the contract address that you just deployed in the last step
"0xA6A30bCc591107d932CA12a50FC616BAb5E58cdA") //line 6

await contract.createProject(
"first title", 
ethers.utils.parseUnits("0.1", 18), 
"description", 
//insert your wallet's public key
"0x81AE60AC85F0b81Cc00e2B294d83A03f40d1deF5") //line 13
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
``` 
Once done, run the following command to deploy this script as well:


```
yarn hardhat run scripts/createCampaigns.js --network mumbai
``` 

## Step 4: Get Contract ABI for Verified Codes
In this step, we are going to do two things:
1. we will verify our smart contracts on [Polygonscan](https://mumbai.polygonscan.com/)↗
2. get contract ABIs for verified contract source codes

**Verifying Smart Contracts**

- Go to `verify-factory.js` file under scripts folder and add the following verify script: 

> Note: In this file you need to edit one thing. The **contractAddress**  you see on line number 5 needs to be replaced by your contract's address. 

**File:** `scripts/verify-factory.js`

```javascript
const { run } = require("hardhat");

async function main() {
//add the contract address that you deployed in the prev steps
  const contractAddress = "0xA6A30bCc591107d932CA12a50FC616BAb5E58cdA"; //line 5

  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: [],
      contract: "contracts/crowdfunding.sol:CrowdFactory",
    });
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!");
    } else {
      console.log(error);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
``` 

- Now in the terminal, run this command to verify the **CrowdFactory** smart contract on polygonscan:

```
yarn hardhat run scripts/verify-factory.js --network mumbai
```
**Output of this command:**

`Successfully verified contract CrowdFactory on Etherscan.`
`https://mumbai.polygonscan.com/address/0xA6A30bCc591107d932CA12a50FC616BAb5E58cdA#code`

- Head over to the Mumbai Polygonscan link you get as the output after running the command and it will land you to the verified contract's page

- Scroll down and you'll find **Contract ABI** section

<img src="/docs/learn/28NCzlMn3n.png" alt="Hello" class="responsive-pic" width="700" />


- Copy the ABI and paste it in the `crowdfactory.json` file under `src/abis` directory

- Go back to the same polygonscan link, click on the **Read Contract **button and query "0" from the **publishedProjs**. 


> Copy and save the address it outputs, we will need it in *line 5* of the next file.

Now, we are going to follow the similar steps to first verify our dummy crowdfunding project and get the contract's ABI.

- Navigate to `verify-crowdfundingproject.js` file under **scripts** folder and insert the following code in the file:

> Replace contractAddress in the file with the one we saved above querying the 0th publishedProj and also insert your wallet address on line 9

**File:** `scripts/verify-crowdfundingproject.js`
```javascript
const { run, ethers } = require("hardhat");

async function main() {
  //replace contractAddress with the one we saved above querying the 0th publishedProj
  const contractAddress = "0xcf092E8bDCDC1FA8B15Ebeb9D97453D498067Df1"; //line5
  const args = [
    "first title", ethers.utils.parseUnits("0.1", 18), "description",
//Insert you wallet's public address here
"YOUR_WALLET_PUBLIC_ADDRESS",  //line 9

  ];

  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
      contract: "contracts/crowdfunding.sol:CrowdfundingProject",
    });
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!");
    } else {
      console.log(error);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
``` 

- Once you save the above file, run this command to verify it on polygonscan:

```
yarn hardhat run scripts/verify-crowdfundingproject.js --network mumbai
```
**Output of this command:**

`Successfully verified contract CrowdfundingProject on Etherscan.` `https://mumbai.polygonscan.com/address/0xcf092E8bDCDC1FA8B15Ebeb9D97453D498067Df1#code`

- Head over to the Mumbai Polygonscan link you get as the output after running the command and it will land you to the verified contract's page

- Scroll down, find **Contract ABI** section and copy-paste ABI in the `crowdfundingproject.json` file under `src/abis` directory

Once this is done, run the following command in the terminal:

```
yarn typechain
``` 
TypeChain is a typescript binding and code generator used to create smart contracts that features static typing and IDE support.
_____________________________________

## Step 5: Write Hooks, Utils and Read

As the heading suggests, this section will be no less than a lot of code. We will begin by updating the `hooks.ts` under `src` directory. In this file, we will be creating generic hooks to access the write and read functions of both "crowdfactory" and "CrowdfundingProject" contracts.

**File:** `src/hooks.ts`

```javascript
import { useContract, useContractRead, useContractWrite } from "wagmi";

import CROWDFACTORY_ABI from "./abis/crowdfactory.json";
import CROWNFUNDINGPROJECT_ABI from "./abis/crowdfundingproject.json";
import { FACTORY_CONTRACT_ADDRESS } from "./constants";
import type { Crowdfactory } from "./contract-types/Crowdfactory";
import type { Crowdfundingproject } from "./contract-types/Crowdfundingproject";

/*//////////////////////////////////////////////////////////////
                              CROWD FACTORY
//////////////////////////////////////////////////////////////*/

export function useCrowdFactoryContract(): Crowdfactory {
  const contract = useContract({
    addressOrName: FACTORY_CONTRACT_ADDRESS,
    contractInterface: CROWDFACTORY_ABI,
  });

  return contract as Crowdfactory;
}

// create a generic hook to access write functions of contract
export function useCrowdFactoryFunctionWriter(
  functionName: string
): ReturnType<typeof useContractWrite> {
  const contractWrite = useContractWrite({
    addressOrName: FACTORY_CONTRACT_ADDRESS,
    contractInterface: CROWDFACTORY_ABI,
    functionName: functionName,
  });

  return contractWrite;
}

export interface UseCrowdFactoryFunctionReaderProps {
  functionName: string;
  args?: any[];
}
// create a generic hook to access read functions of contract
export function useCrowdFactoryFunctionReader({
  functionName,
  args,
}: UseCrowdFactoryFunctionReaderProps): ReturnType<typeof useContractRead> {
  const contractRead = useContractRead({
    addressOrName: FACTORY_CONTRACT_ADDRESS,
    contractInterface: CROWDFACTORY_ABI,
    functionName: functionName,
    args: args,
    watch: true,
  });

  return contractRead;
}

/*//////////////////////////////////////////////////////////////
                          CROWD FUNDING PROJECT
//////////////////////////////////////////////////////////////*/

export function useCrowdfundingProjectContract(
  contractAddress: string
): Crowdfundingproject {
  const contract = useContract({
    addressOrName: contractAddress,
    contractInterface: CROWNFUNDINGPROJECT_ABI,
  });

  return contract as Crowdfundingproject;
}

export interface UseCrowdfundingProjectFunctionWriterProps {
  contractAddress: string;
  functionName: string;
}

export function useCrowdfundingProjectFunctionWriter({
  contractAddress,
  functionName,
}: UseCrowdfundingProjectFunctionWriterProps): ReturnType<
  typeof useContractWrite
> {
  const contractWrite = useContractWrite({
    addressOrName: contractAddress,
    contractInterface: CROWNFUNDINGPROJECT_ABI,
    functionName: functionName,
  });

  return contractWrite;
}

export interface UseCrowdfundingProjectFunctionReaderProps {
  contractAddress: string;
  functionName: string;
  args?: any[];
}

// create a generic hook to access read functions of contract
export function useCrowdfundingProjectFunctionReader({
  contractAddress,
  functionName,
  args,
}: UseCrowdfundingProjectFunctionReaderProps): ReturnType<
  typeof useContractRead
> {
  const contractRead = useContractRead({
    addressOrName: contractAddress,
    contractInterface: CROWNFUNDINGPROJECT_ABI,
    functionName: functionName,
    args: args,
    watch: true,
  });

  return contractRead;
}
``` 

Now, let's move to the other file named "**utils.ts**". In this file we are creating helper functions to convert wei into matic.

**File:** `src/utils.ts`

```javascript
//helper functions to convert wei into matic

import type { BigNumberish } from "ethers";
import { BigNumber, utils } from "ethers";

/**
 * Return the `value` converted to BigNumber.
 *
 * @param value string value preferred.
 * @return BigNumber value
 */
export function toBN(value: BigNumberish): BigNumber {
  return BigNumber.from(value);
}

/**
 * Return the `gasPrice` converted to gwei.
 * formatUnits(value: BigNumberish, unitName?: BigNumberish | undefined): string
 * BigNumberish -> string, BigNumber, number, BytesLike or BigInt.`https://docs.ethers.io/v5/api/utils/bignumber/#BigNumberish`
 *
 * @param gasPrice BigNumberish value to be converted, preferred is BigNumber.
 * @return string value
 */
export function toGwei(gasPrice: BigNumberish): string {
  return utils.formatUnits(gasPrice, "gwei");
}

/**
 * Return the `value` converted to BigNumber wei.
 * parseUnits(value: string, unitName?: BigNumberish | undefined): BigNumber
 * BigNumberish -> string, BytesLike, BigNumber, number or BigInt.`https://docs.ethers.io/v5/api/utils/bignumber/#BigNumberish`
 *
 * @param value the string value to be converted.
 * @param decimals decimal value or BigNumberish.
 * @return BigNumber value or undefined.
 */
export function toWei(value: string, decimals: number = 18): BigNumber {
  return utils.parseUnits(value, decimals);
}
/**
 * Return the `value` converted to string from wei.
 * formatUnits(value: BigNumberish, unitName?: BigNumberish | undefined): string
 * BigNumberish -> string, BigNumber, number, BytesLike or BigInt.`https://docs.ethers.io/v5/api/utils/bignumber/#BigNumberish`
 *
 * @param value BigNumberish value to be converted, preferred is BigNumber.
 * @param decimals decimal value or BigNumberish.
 * @return string value.
 */
export function fromWei(value: BigNumberish, decimals: number = 18): string {
  return utils.formatUnits(value, decimals);
}

/**
 * Returns true if the string value is zero in hex
 * @param hexNumberString
 */
export default function isZero(hexNumberString: string) {
  return /^0x0*$/.test(hexNumberString);
}
``` 
And last but not at all the least, "**read.ts**" under the **src** directory which will contain [view and pure functions](https://www.geeksforgeeks.org/solidity-view-and-pure-functions/).↗

**File:** `src/read.ts`
```javascript
//read function
//view and pure functions (Smartcontract)

import type { BigNumber } from "ethers";
import type { Result } from "ethers/lib/utils";

import { DEBUG } from "./constants";
import type { Crowdfactory } from "./contract-types/Crowdfactory";
import type { Crowdfundingproject } from "./contract-types/Crowdfundingproject";
import {
  useCrowdFactoryFunctionReader,
  useCrowdfundingProjectFunctionReader,
} from "./hooks";

/*//////////////////////////////////////////////////////////////
                              CROWD FACTORY
//////////////////////////////////////////////////////////////*/

export function useTotalPublishedProjs(): number | undefined {
  const totalPublishedProjsReader = useCrowdFactoryFunctionReader({
    functionName: "totalPublishedProjs",
  });
  const totalPublishedProjs:
    | Awaited<ReturnType<Crowdfactory["totalPublishedProjs"]>>
    | Result
    | undefined = totalPublishedProjsReader.data;

  DEBUG &&
    console.log("totalPublishedProjs: ", totalPublishedProjs?.toString());

  if (!totalPublishedProjs) return undefined;

  return parseInt(totalPublishedProjs.toString()) as number;
}

export function usePublishedProjs(index: number): string | undefined {
  const publishedProjsReader = useCrowdFactoryFunctionReader({
    functionName: "publishedProjs",
    args: [index],
  });
  const publishedProjs:
    | Awaited<ReturnType<Crowdfactory["publishedProjs"]>>
    | Result
    | undefined = publishedProjsReader.data;

  DEBUG && console.log("publishedProjs: ", publishedProjs);

  if (!publishedProjs) return undefined;

  return publishedProjs as unknown as string;
}

/*//////////////////////////////////////////////////////////////
                          CROWD FUNDING PROJECT
//////////////////////////////////////////////////////////////*/

export function useProjTitle(contractAddress: string): string | undefined {
  const projTitleReader = useCrowdfundingProjectFunctionReader({
    contractAddress: contractAddress,
    functionName: "projTitle",
  });

  const projTitle:
    | Awaited<ReturnType<Crowdfundingproject["projTitle"]>>
    | Result
    | undefined = projTitleReader.data;

  DEBUG && console.log("projTitle: ", projTitle);

  if (!projTitle) return undefined;

  return projTitle as unknown as string;
}

export function useProjDescription(
  contractAddress: string
): string | undefined {
  const projDescriptionReader = useCrowdfundingProjectFunctionReader({
    contractAddress: contractAddress,
    functionName: "projDescription",
  });

  const projDescription:
    | Awaited<ReturnType<Crowdfundingproject["projDescription"]>>
    | Result
    | undefined = projDescriptionReader.data;

  DEBUG && console.log("projDescription: ", projDescription);

  if (!projDescription) return undefined;

  return projDescription as unknown as string;
}

export function useGoalAmount(contractAddress: string): BigNumber | undefined {
  const goalAmountReader = useCrowdfundingProjectFunctionReader({
    contractAddress: contractAddress,
    functionName: "goalAmount",
  });

  const goalAmount:
    | Awaited<ReturnType<Crowdfundingproject["goalAmount"]>>
    | Result
    | undefined = goalAmountReader.data;

  DEBUG && console.log("goalAmount: ", goalAmount);

  if (!goalAmount) return undefined;

  return goalAmount as unknown as BigNumber;
}

export function useRaisedAmount(
  contractAddress: string
): BigNumber | undefined {
  const raisedAmountReader = useCrowdfundingProjectFunctionReader({
    contractAddress: contractAddress,
    functionName: "raisedAmount",
  });

  const raisedAmount:
    | Awaited<ReturnType<Crowdfundingproject["raisedAmount"]>>
    | Result
    | undefined = raisedAmountReader.data;

  DEBUG && console.log("raisedAmount: ", raisedAmount);

  if (!raisedAmount) return undefined;

  return raisedAmount as unknown as BigNumber;
}
``` 
__________________________
## Step 6: Create Components

In this step, we are going to head over to `components` folder under `src` directory. First up, navigate to "**CreateCampaign.tsx**" file and insert the following code. In this file, we will be using custom hook we made in hooks.ts for writing functions along with the coding the UI. 

**File:** `src/components/CreateCampaign.tsx`
```javascript

import { DEBUG } from "../constants";
import type { Crowdfactory } from "../contract-types/Crowdfactory";
import { useCrowdFactoryFunctionWriter } from "../hooks";
import { toWei } from "../utils";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { useAccount } from "wagmi";

function CreateCampaign() {
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [story, setStory] = useState<string>("");

  const { address } = useAccount();

  // custom hook we made in hooks.ts for writing functions
  const { writeAsync, isError } =
    useCrowdFactoryFunctionWriter("createProject");

  // rainbow kit txn handler
  const addRecentTransaction = useAddRecentTransaction();

  // onChange handler for title
  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const value = e.target.value;
    DEBUG && console.log("title: ", value);

    // set title
    setTitle(value);
  };

  // onChange handler for amount
  const handleAmount = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const value = e.target.value;
    DEBUG && console.log("amount: ", value);

    // set amount
    setAmount(value);
  };

  // onChange handler for story
  const handleStory = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();

    const value = e.target.value;
    DEBUG && console.log("story: ", value);

    // set story
    setStory(value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    if (!title || !amount || !story || !address) {
      return;
    }

    try {
      e.preventDefault();

      console.log("submit!");

      DEBUG && console.log({ title, amount, story });

      const amountToWei = toWei(amount);
      DEBUG && console.log("amountToWei: ", amountToWei);

      const functionArgs: Parameters<Crowdfactory["createProject"]> = [
        title,
        amountToWei,
        story,
        address,
      ];
      const tx = await writeAsync({
        args: functionArgs,
      });
      console.log("tx >>> ", tx);

      addRecentTransaction({
        hash: tx.hash,
        description: "Create Project Transaction",
      });
    } catch (error) {
      console.log("errror >>> ", error);
    }
  };

  return (
    <>
      <div className="text-center font-bold text-xl mb-2">
        Create Crowdfunding Project
      </div>

      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Campaign Title
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Campaign Title"
              onChange={handleTitle}
              required
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Required Amount
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              min={0}
              step="0.01"
              placeholder="0.00"
              onChange={handleAmount}
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Story
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Story"
              onChange={handleStory}
              required
            />
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Create Campaign
            </button>
          </div>

          {/* if error occures display text to try again */}
          {isError && (
            <p className="text-red-500 text-xs italic">
              Error occured! Please try again!.
            </p>
          )}
        </div>
      </form>
    </>
  );
}

export default CreateCampaign;
```

Now, navigate to "**Campaign.tsx**" file and the edit the following code. Again in this file, we will use custom hook we made in hooks.ts for writing functions along with the UI. This component deals with the details of a single campaign. 

**File:** `src/components/Campaign.tsx`
```javascript
import { DEBUG } from "../constants";
import { useCrowdfundingProjectFunctionWriter } from "../hooks";
import {
  useGoalAmount,
  useProjDescription,
  useProjTitle,
  usePublishedProjs,
  useRaisedAmount,
} from "../read";
import { fromWei, toWei } from "../utils";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import type { ChangeEvent, MouseEvent } from "react";
import { useState } from "react";

export type CampaignProps = { projectNumber: number };

function Campaign({ projectNumber }: CampaignProps) {
  DEBUG && console.log("projectNumber: ", projectNumber);

  const [value, setValue] = useState<string>("");

  const publishedProjsAddress = usePublishedProjs(projectNumber);

  const projTitle = useProjTitle(publishedProjsAddress || "");
  const projDescription = useProjDescription(publishedProjsAddress || "");
  const goalAmount = useGoalAmount(publishedProjsAddress || "");
  const raisedAmount = useRaisedAmount(publishedProjsAddress || "");

  DEBUG &&
    console.log({
      publishedProjsAddress,
      projTitle,
      projDescription,
      goalAmount,
      raisedAmount,
    });

  // rainbow kit txn handler
  const addRecentTransaction = useAddRecentTransaction();

  // custom hook we made in hooks.ts for writing functions
  const { writeAsync, isError } = useCrowdfundingProjectFunctionWriter({
    contractAddress: publishedProjsAddress || "",
    functionName: "makeDonation",
  });

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const inputValue = e.target.value;
    DEBUG && console.log("value: ", inputValue);

    // set value
    setValue(inputValue);
  };

  const handleDonate = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();

      const valueToWei = toWei(value);
      DEBUG && console.log("valueToWei: ", valueToWei);

      const tx = await writeAsync({
        overrides: {
          value: valueToWei,
        },
      });
      console.log("tx >>> ", tx);

      addRecentTransaction({
        hash: tx.hash,
        description: `Donate ${value} MATIC`,
      });
    } catch (error) {
      console.log("errror >>> ", error);
    }
  };

  if (
    !publishedProjsAddress ||
    !projTitle ||
    !projDescription ||
    !goalAmount ||
    !raisedAmount
  ) {
    return null;
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{projTitle}</div>
        <p className="text-gray-700 text-base">{projDescription}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Goal Amount:
          <span className="text-purple-700">{fromWei(goalAmount)} MATIC</span>
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Raised Amount:
          <span className="text-purple-700">{fromWei(raisedAmount)} MATIC</span>
        </span>

        <div className="flex items-center py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="number"
            placeholder="0.000"
            min={0}
            step="0.001"
            required
            onChange={handleValue}
          />
          <button
            className="flex-shrink-0 bg-purple-500 hover:bg-purple-400 border-purple-500 hover:border-purple-400 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
            onClick={handleDonate}
          >
            Donate
          </button>
        </div>

        {/* if error occures display text to try again */}
        {isError && (
          <p className="text-red-500 text-xs italic">
            Error occured! Please try again!.
          </p>
        )}
      </div>
    </div>
  );
}

export default Campaign;
``` 
Last, let's edit the "**Campaigns.tsx**" file and for that, navigate to `Campaigns.tsx` and add the following code:

**File:** `src/components/Campaigns.tsx`

```javascript
import { DEBUG } from "../constants";
import { useTotalPublishedProjs } from "../read";
import Campaign from "./Campaign";

function Campaigns() {
  // for testing no projects yet
  // const totalPublishedProjs = 0;

  const totalPublishedProjs = useTotalPublishedProjs();
  DEBUG &&
    console.log("totalPublishedProjs: ", totalPublishedProjs?.toString());

  // if totalPublishedProjs not present return nothing
  if (!totalPublishedProjs) {
    return <div className="font-bold text-xl mb-2">No Projects yet!</div>;
  }

  return (
    <>
      <div className="text-center font-bold text-xl mb-2">
        Crowdfunding Projects
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {/* create an array starting from 0 index  */}
        {Array.from(Array(totalPublishedProjs).keys()).map(
          (projectNumber: number, i) => {
            return (
              <div key={i}>
                <Campaign projectNumber={projectNumber} />
              </div>
            );
          }
        )}
      </div>
    </>
  );
}

export default Campaigns;
``` 
_________________

## Step 7: Displaying the UI

Now comes the moment of truth we have been waiting for. All the code, all these functions, contract, and frontend will come together in a form of a single-page application. 

In this section, we will edit our "App.tsx" file which will display everything we have been building so far. So let's go and edit the existing code in the file and replace it with this one:

**File:** `src/App.tsx`
```javascript
import Campaigns from "./components/Campaigns";
import CreateCampaign from "./components/CreateCampaign";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

function App() {
  const { isConnected } = useAccount();

  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="flex justify-center text-sm sm:text-base md:text-3xl lg:text-4xl pb-10">
        Crowdfunding 💜 Show love to your fav project!
      </h1>

      <div className="flex justify-center">
        <ConnectButton
          showBalance={false}
          accountStatus={{
            smallScreen: "avatar",
            largeScreen: "full",
          }}
        />
      </div>

      {!isConnected ? (
        <div className="text-center font-bold text-xl m-8">
          Please connect to wallet
        </div>
      ) : (
        <>
          <div className="flex gap-6 mt-8">
            <div className="flex flex-col">
              <CreateCampaign />
            </div>
          </div>

          <div className="flex gap-6 mt-8">
            <div className="flex flex-col">
              <Campaigns />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
``` 
Woah, that was a lot of code that we wrote! Now comes the crunch as we run our dApp in the local dev environment.

```
yarn dev
``` 
And, here's what you should be able to see! 

<img src="/docs/learn/-EFHTGxf6.png" alt="Hello" class="responsive-pic" width="700" />

_________________________
### Check the GitHub Repo
If you want to take a look at the full source code, find the [repo here](https://github.com/kaymomin/Crowdfunding-dApp).
______________________

### Next Steps
If you are up for a fun challenge, extend this project into a full-fleshed platform with additional functionalities in the smart contract and improved UI. 
