# Blockchain interactions

As soon as you've [connected a wallet](/build/products/rpc-service/premium-account-operations/#connect-wallet) and [deposited ANKR tokens](/build/products/rpc-service/premium-account-operations/#top-up) into your account, the system generates a personal JWT token granting access to the Premium plan functionality. The **Endpoints** pane now becomes connected to your account and shows the data specific to it.

## Endpoints pane's structure

The Premium user's **Endpoints** pane contains the following items:

  * **Your stats** — the block shows the overall number of requests across all chains made for a specific timeframe (`24h`/`7d`/`30d`).
  * **Blockchains list** — a list of all the blockchains available for querying. Each of those blocks also shows the number of requests made to that particular blockchain for a specific timeframe (`24h`/`7d`/`30d`).

<img src="/docs/endpoints.png" alt="Endpoints" class="responsive-pic" width="700" />

### Particular Chain

To interact with a blockchain, you must first select the one you need, right? So, in the block-structured list of supported chains, click the one you're going to add into your project to establish a connection with. That will take you to the pane of a particular chain you've selected.

Each blockchain has basic and specific info divided into corresponding blocks. Let's take Ethereum as an example.

#### Basic info

  * **Ethereum**: chain name.
  * **ETH**: Ether, cryptocurrency used on the blockchain.
  * **Archive**: a type of nodes supported. 
  * **Mainnet**: a network type — the real functioning blockchain network.
  * **Testnet**: a network type — a sandbox environment simulating the blockchain network.
    * **Gorli/Rinkeby/Ropsten**: testing networks to select from.
  * **Endpoint**: an Endpoint to use for RPC API requests.

#### Specific info

The block provides information on the means to query the blockchain, to access requests statistics, and either to view the nodes' basic parameters or to add an extra layer of security to your requests. All that information lives on the corresponding tabs:

  * **Connection**: supported connection protocols (`HTTPS`, `WSS`), your custom endpoints for each available protocol, and code snippets (in different programming languages) to establish the blockchain connection via the protocols supported.

  * **Usage Stats**: total requests processed for a specific timeframe (`24h`/`7d`/`30d`) and a diagram showing those requests.

  * **Infrastructure**: 

    * **Security**: enables creating an extra layer of security to your requests via adding allowed domains or IP addresses into the whitelist. That means that to send a request to the endpoint, your domain or IP address has to be indicated as an allowed one, and your request has to contain that allowed domain or IP address in either the `origin` or `referer` header parameters:

      ```shell
      origin: https://your-allowed-domain.com
      referer: https://your-allowed-domain.com
      ```
      Note that the **Security** block allows you to indicate a domain without the communication protocol it uses (example: `your-allowed-domain.com`). At the same time, the `origin` or `referer` header parameters require the *absolute URL* to be specified (example: `https://your-allowed-domain.com`) to make a successful request.

    * **Nodes**: basic information on the nodes supporting your requests (provider, location, height, weight).

## RPC APIs for your project

Prerequisites:

  * [Connect a wallet](/build/products/rpc-service/premium-account-operations/#connect-wallet)
  * [Top up account balance](/build/products/rpc-service/premium-account-operations/#top-up)

As a Premium user, you have custom URLs at hand to enable your projects to interact with a blockchain.

A Premium URL consists of a connection protocol (`https` or `wss`), domain name (`rpc.ankr.com`), common path of a blockchain to use (`/eth`), and your personal JWT token as the last segment of the path:

```
https://rpc.ankr.com/eth/6fe08843fa0966456eaa3fb19d4828b12389e71f48829f50df25e45bc5fd6cc5
```

To enable your project to interact with a blockchain, add the blockchain's URL into the project's library or config file:

1. In **Sidebar**, click **Endpoints** to open the pane.
2. In the list of chains, click the one you'd like to interact with.
3. In the **Chain** opened, select a network (**Mainnet**/**Testnet**) needed for your project.
4. In the **Endpoint** field, copy the URL and paste it into your project's library or config file.

Congrats — you've just added a Premium Endpoint into your project to enable blockchain interaction.