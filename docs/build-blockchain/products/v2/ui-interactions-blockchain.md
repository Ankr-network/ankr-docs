---
title: Blockchain Interactions
id: ui-interactions-blockchain
---

# Blockchain interactions

As soon as you've [connected a wallet](/build-blockchain/products/v2/ui-interactions/#connect-wallet) and [deposited ANKR tokens](/build-blockchain/products/v2/ui-interactions/#top-up) into your account, the system generates a personal JWT token granting access to the Premium tier functionality. The **Endpoints** pane now becomes connected to your account and shows the data specific to it.

## Endpoints pane's structure

The Premium user's **Endpoints** pane contains the following items:

  * **Your stats** — the block shows the overall number of requests across all chains made for a specific timeframe (`24h`/`7d`/`30d`).
  * **Blockchains list** — a list of all the blockchains available for querying. Each of those blocks also shows the number of requests made to that particular blockchain for a specific timeframe (`24h`/`7d`/`30d`).

![Endpoints](@site/static/img/endpoints.png)

### Particular Blockchain

To interact with a blockchain, you must first select the one you need, right? So, in the block-structured list of supported blockchains, click the one you're going to add into your project to establish a connection with. That will take you to the pane of a particular blockchain you've selected.

Each blockchain has basic and specific info divided into corresponding blocks. Let's take Ethereum as an example.

#### Basic info

  * **Ethereum**: blockchain name.
  * **ETH**: Ether, cryptocurrency used on the blockchain.
  * **Archive**: type of nodes supported. 
  * **Mainnet**: the real functioning blockchain network.
  * **Testnet**: a sandbox environment simulating the blockchain network.
    * **Gorli/Rinkeby/Ropsten**: testing networks to select from.

#### Specific info

The block provides information on the means to query the blockchain, to access requests statistics, and either to view the nodes' basic parameters or to add an extra layer of security to your requests. All that information lives on the corresponding tabs:

  * **Connection**: supported connection protocols (`HTTPS`, `WSS`), your custom endpoints for each available protocol, and code snippets (in different programming languages) to establish the blockchain connection via the protocols supported.

  * **Usage Stats**: total requests processed for a specific timeframe (`24h`/`7d`/`30d`) and a diagram showing those requests.

  * **Infrastructure**: 

    * **Security**: supports creating an extra layer of security to your requests via adding a list of allowed domains or IP addresses. That means that to send a request to the endpoint, your IP address has to be indicated as an allowed one, or your request has to contain an allowed domain in the Header parameters:
      ```
      Origin: https://your-allowed-domain.com
      ```

    * **Nodes**: basic information on the nodes supporting your requests (provider, location, height, weight).

## RPC APIs for your project

Prerequisites:

  * [Connect a wallet](/build-blockchain/products/v2/ui-interactions/#connect-wallet)
  * [Top up account balance](/build-blockchain/products/v2/ui-interactions/#top-up)

As a Premium user, you have custom URLs at hand to enable your projects to interact with a blockchain.

A Premium URL consists of a connection protocol (`https` or `wss`), domain name (`rpc.ankr.com`), common path of a blockchain to use (`/eth`), and your personal JWT token as the last segment of the path:

```http request
https://rpc.ankr.com/eth/6fe08843fa0966456eaa3fb19d4828b12389e71f48829f50df25e45bc5fd6cc5
```

To enable your project to interact with a blockchain, add the blockchain's URL into the project's library or config file:

1. In **Sidebar**, click **Endpoints** to open the pane.
2. In the list of blockchains, click the one you'd like to interact with.
3. In the **Blockchain** opened, select a chain type (**Mainnet**/**Testnet**) needed for your project.
4. On the **Connection** tab, in the **Premium URLs** block, copy the URL into your project's library or config file.

Congrats — you've just added a Premium URL into your project to enable blockchain interaction.
