import { Callout } from "components";

In this section we're going to request testnet from a Ropsten faucet and then return testnet to a Ropsten faucet.  

Whenever you create a transaction, you're writing data to the blockchain and updating its state. There are several ways to do this: sending ETH from one account to another, calling a smart contract function that writes data, and deploying a smart contract to the blockchain.

Every transaction on Ethereum must be signed using your private key to validate that is authorized by you.

Typically, MetaMask is used in dApp development as it securely holds your private keys in the browser and whenever the front end requires a signature it can call MetaMask. In this walkthrough, your MetaMask private key is stored in a secure .env file along with your endpoint. 

<Callout type="warning">
About eth_call Transactions

`eth_call` vs `eth_sendRawTransaction`

You can interact with contracts using `eth_call` or `eth_sendRawTransaction`. The table below compares the characteristics of both calls. 

Essentially, you use `eth_call` to read data on the blockchain e.g. a balance. Use `eth_sendRawTransaction` when you are sending assets as in this walkthrough. This requires updating the state of the blockchain.

eth_call |	eth_sendRawTransaction
--------|-------------
Read-only |	Write
Invokes contract function locally |	Broadcasts to network
Does not change state of blockchain	| Updates blockchain (for example, transfers ether between accounts)
Does not consume gas |	Requires gas
Synchronous |	Asynchronous
Returns value of contract function available immediately |	Returns transaction hash only. Possible transaction may not be included in a block (for example, if the gas price is too low).
</Callout>

## Useful Resources

[Convert Wei to Gwei and ETH and vice versa](https://eth-converter.com/)

## Get Started

1) Create a project

```bash

mkdir send-tx && cd send-tx

```

2) Install [ethers.js](https://docs.ethers.io/v5/) library

 * Libraries simplify connecting an application to the Ethereum blockchain. You need to connect to Ethereum in order to read blockchain data and/or send transactions to the network.

```bash

npm install --save ethers

```

3) Request some Ropsten test ETH

* We're going to be sending a transaction on the Ropsten network, so get hold of some Ropsten from the [listed Ropsten faucets](/build/chains/ethereum/how-to/connect-metamask/#ropsten-and-faucets). 

* Make sure you configure your wallet to the [Ankr Ropsten RPC Network](/build/chains/ethereum/how-to/connect-metamask/#how-to-add-ankr-ropsten-rpc-to-your-wallet) to provide your address and to check your balance.  

* Check your wallet to see if it arrived. 


4) Create a dotenv file

* Install dotenv
    It is a good security practice to store environment variables such as API keys into a `.env` file and then use `Dotenv` to load them. 

```bash
npm i dotenv
```

5) Create a .env file in your project folder

* Add your MetaMask Account private key [How?](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key)

```
ANKR_URL = "https://rpc.ankr.com/eth_ropsten/YOUR_API_KEY"
PRIVATE_KEY = "your-metamask-private-key"
```

6) Create a **transaction.js** file

```
async function main() {
  require('dotenv').config();
  const { ANKR_URL, PRIVATE_KEY } = process.env;

  const Web3 = require('web3')
  const web3 = new Web3(ANKR_URL)
 
  const myAddress = '0x1701A33B1f8E9F934Dccff20A1AfcaD9BDc1caF0' //Add your wallet address here.
 
  const nonce = await web3.eth.getTransactionCount(myAddress, 'latest'); // nonce starts counting from 0

  const transaction = {
   'to': '0x78c115F1c8B7D0804FbDF3CF7995B030c512ee78', // faucet address to return eth
   'value': 200, // This is the amount we wish to send in wei
   'gas': 6000000, // to assess the right gas price you can check actual gas prices at ropsten.etherscan.io
   'maxPriorityFeePerGas': 1000000108, //This is the maximum you are willing to pay per gas to execute the tx
   'nonce': nonce,
   // optional data field to send message or execute smart contract
  };
 
  const signedTx = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);
  
  web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
  if (!error) {
    console.log("🎉 The hash of your transaction is: ", hash);
  } else {
    console.log("❗Something went wrong while submitting your transaction:", error)
  }
 });
}

main();
```

7) Run the code 

```
node transaction.js
```

**Example Successful Response**

```
[Running] node "/send-tx/transaction.js"
🎉 The hash of your transaction is:  0x6a6e88b10a018487629409dbf3c3c08fced94e5ca381abf54279df593bb48b5a

[Done] exited with code=0 in 88.637 seconds
```

You can verify your balance in your wallet. 

<Callout> 

## 🙌🏽 Super excellent job!!!

</Callout>



