---
title: Build a basic dapp
id: build-eth-dapp
---

Let's get started with a super simple project using node and truffle

## Before you start

1. Make sure you have Node installed. 
    
    ```bash
    $ node --version
    v14.16.1
    ```

If it isn't installed, [download](https://nodejs.org/en/download/) it or use a [package manager](https://nodejs.org/en/download/package-manager/). 

## Create a project

In your terminal or command prompt do the following:

1. Let's create a folder for our super simple project

    ```bash
    mkdir eth-project && cd eth-project
    ```

2. Now initialize it

    ```bash
    npm init -y
    ```

## Add truffle

3. Install [Truffle](https://trufflesuite.com/). 

    This will allow you to deploy a smart contract to a blockchain. Truffle can be installed locally inside your project using `npx` to install an executable. This makes it easier to manage versions for each project you build. 

    ```tip

    Make sure you are in your project directory first. e.g. eth-project

    ```

    ```bash
    npm install --save-dev truffle
    ```

4. Initialize a truffle project inside your folder.

    ```bash
    npx truffle init

    Starting init...
    ================

    > Copying project files to /home/eth-project

    Init successful, sweet!

    Try our scaffold commands to get started:
    $ truffle create contract YourContractName # scaffold a contract
    $ truffle create test YourTestName         # scaffold a test

    http://trufflesuite.com/docs

    ```
  
5. Open your project in your preferred code editor e.g Visual Studio Code Editor to view the newly created folders - **contracts**, **migrations** and **test**. You can also see a new **truffle-config.js** file containing default code. 

    <img src={require('/img/truffle-project-folders.png').default} alt="Truffle folders" width="300" />

## Write a simple contract

This `Storage` contract is very straightforward. It stores an integer on the blockchain that can be retrieved by running the `retrieve` function. It is the same file used in [Remix](https://remix.ethereum.org/)

1. Create a new file in your **Contracts** folder and paste the code below into it. 

2. Save it as **Storage.sol**.

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

/**
 Store & retrieve value in a variable
 */
contract Storage {

    uint256 number;

    /**
     * function - Stores value in variable
     * parameter - num value to store
     */
    function store(uint256 num) public {
        number = num;
    }

    /**
     * Return value 
     * return value of 'number'
     */
    function retrieve() public view returns (uint256){
        return number;
    }
}
```

## Compile the contract

The Ethereum Virtual Machine (EVM) executes the logic defined in the smart contracts but it doesn't understand high level languages. Instead, the solidity contract needs to be compiled into executable bytecode.

1. Let's check the solidity version of our contract. It uses any version from 0.7.0 to 0.8.9. So let's ensure our `truffle-config.js` file to match. 

2. Locate the `Compilers` section, specify a compatible version and toggle the comment into code. 

    ```sol

    // Configure your compilers
    compilers: {
        solc: {
        version: "^0.8.0",  
    ``` 

3. Now you can compile with a single command:

    ```npx truffle compile```

The contract is compiled and a new **build/contracts** directory is created.




