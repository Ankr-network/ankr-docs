---
title: Send transactions
id: ethereum-transactions
---

This section follows on from make-requests so it assumes that you have done the following:
* set up an app, 
* created a web3 instance and 
* set the provider to Ankr.

Every transaction must be signed using your private key to validate that it is definitely being sent by you. Typically, MetaMask is used as it securely holds your private keys in the browser and whenever the front end requires a signature it can call MetaMask.

1) Create a project

```bash

mkdir send-tx && cd send-tx

```

2) Install [web3.js](https://web3js.readthedocs.io/en/v1.2.7/index.html) library

 * Libraries simplify connecting an application to the Ethereum blockchain. You need to connect to Ethereum in order to read blockchain data and/or send transactions to the network.

```bash

npm install web3

```

3) Request some Ropsten test ETH

* We're going to be sending a transaction on the Ropsten network, so get hold of some Ropsten from the [listed Ropsten faucets](connect-ethereum#ropsten). 

* Make sure you configure your wallet to the [Ankr Ropsten RPC Network](connect-ethereum#ropsten) to provide your address and to check your balance.  

* Let's check our wallet balance using **eth_balance**

4) Add your Ankr Endpoint and MetaMask wallet address for Ropsten.

```js
const Web3 = require("web3")

const web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/eth_ropsten/YOUR_API_KEY") //if you have a premium endpoint. 

web3.eth.getBalance("0x1701A33B1f8E9F934Dccff20A1AfcaD9BDc1caF0", function(err, result) {
  if (err) {
    console.log(err)
  } else {
    console.log(web3.utils.fromWei(result, "ether") + " ETH")
  }
})
```


```{ "jsonrpc": "2.0", "id": 0, "result": "0x2B5E3AF16B1880000" }



:::tip 

Each testnet has its own currency

:::

4) Create a dotenv file

* Install dotenv
    It is a good security practice to store environment variables such as API keys into a `.env` file and then use `Dotenv` to load them. 

```bash
npm i dotenv
```

* Add your Premium Plan API Endpoint

* Add your MetaMask Account private key [How?](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key)

```
ANKR_URL = "https://rpc.ankr.com/eth_ropsten/YOUR_API_KEY"
PRIVATE_KEY = "your-metamask-private-key""

