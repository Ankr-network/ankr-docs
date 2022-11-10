import { Callout } from "components";

# Getting Started

*RPC Service* — a platform that enables users to empower their Web3 projects with the blockchain interaction capabilities (22 blockchains supported) via the top-performing globally-distributed decentralized infrastructure of nodes.

<img src="/docs/build/rpc-overview.png" alt="RPC Overview" class="responsive-pic" width="800" />

The platform has the following functionality to offer:

  * *JSON-RPC API* — the endpoints (either [public](/rpc-service/getting-started/#use-public-endpoints) or [private](/rpc-service/getting-started/#use-private-endpoints)) to integrate into your project for blockchain interaction. 
  * *[Advanced APIs](/advanced-api/overview)* — collections of endpoints that supports simultaneous querying of multiple blockchains for the most popular Web3 scenarios at near-instant speeds; available via [JavaScript](/advanced-api/javascript-sdk)/[Python](/advanced-api/python-sdk) SDKs and [React Hooks](/advanced-api/react-hooks).
  * *Usage statistics* — the means to have a full view of your blockchain interaction statistics.
  * *RPC methods testing* — a tool for RPC methods testing. 
  * *[Hybrid infrastructure](/rpc-service/hybrid-infrastructure)* — the access point for adding either private or external providers' nodes into Ankr's infrastructure.

## Basics with Public plan

What's available for the [Public plan](/rpc-service/service-plans/#service-plans-comparison) user:

  * RPC Endpoints and Advanced APIs at the corresponding [rate limits](/rpc-service/service-plans/#rate-limits).
  * Connection code snippets.
  * RPC methods testing tool.
  * Public usage data (stats on requests from all Public service users).

### Interface schema 

<img src="/docs/build/rpc-endpoints-public.png" alt="Public Endpoints" class="responsive-pic" width="800" />

### Use public endpoints

To enable your project to interact with a blockchain, add the blockchain's endpoint into the project's library or config file:

1. In **Navigation**, click **Endpoints** to open the pane.
2. In the **Chain Selection** area, click a chain you'd like to query.
3. In the **Chain** opened, select a network (**Mainnet**/**Testnet**) needed for your project.
4. In the **Endpoint** field, copy the URL and paste it into your project's library or config file.

<img src="/docs/build/use-endp-public.png" alt="Use public endpoint" class="responsive-pic" width="800" />

Congrats — you've just added a public endpoint into your project to enable blockchain interaction.

## Basics with Premium plan

What's available for the [Premium plan](/rpc-service/service-plans/#service-plans-comparison) user:

  * Premium Endpoints and Advanced APIs at the corresponding [rate limits](/rpc-service/service-plans/#rate-limits).
  * Connection code snippets.
  * RPC methods testing tool.
  * Personal usage data.
  * Access to [Hybrid infrastructure](/rpc-service/hybrid-infrastructure).
  * Requests charging and payments history data.

### Interface schema

Below is the interface of the [_Premium_ service plan](/rpc-service/service-plans/#service-plans-comparison) user that is all set to use RPC API Endpoints and Advanced APIs at the corresponding [rate limits](/rpc-service/service-plans/#rate-limits). Here is the path to access Premium and start using RPCs and Advanced APIs:
`Connect wallet` —> `Deposit funds` —> `Use private endpoints`

  * **[Connect wallet](/rpc-service/getting-started/#connect-wallet)**: first things first, connecting your MetaMask wallet is the key to access your Premium account.
  
  * **[Deposit funds](/rpc-service/getting-started/#deposit-funds)**: second, you need to have a positive account balance to make any RPC requests.
  
  * **[Use private endpoints](/rpc-service/getting-started/#use-private-endpoints)**: finally, with a wallet connected and a balance topped up, you're all set to start using private RPC API endpoints.

<img src="/docs/build/ui-premium.png" alt="Public Endpoints" class="responsive-pic" width="800" />

### Connect wallet

The wallet connection procedure is the following:

1. Go to the [RPC Service](https://www.ankr.com/rpc/) platform.
2. In the top right corner, click **Connect Wallet**, then provide your public key for encryption and confirm interactions with our platform:
   * Click **Provide** — to use your public key for token encryption.
   * Click **Sign** — to confirm interactions with our platform.

<img src="/docs/build/card-metamask.png" alt="MetaMask connection" class="responsive-pic" width="550" />

Congrats — you now have an account in RPC Service, associated with your wallet.

### Deposit funds

<Callout>
We’ve pegged the price of our API Credits to USD. It means that upon using ANKR tokens for PAYG, `ANKR` calculates into `API Credits` at the current _ANKR/USD exchange rate on the moment of block's validation_.
</Callout>

#### Initial deposit

Initial top up is a required step to access Premium services, as, upon depositing funds into your account, the system generates a personal JWT token granting access to the Premium plan functionality.

The initial top-up process is the following:

1. In **Navigation**, click **Pricing** to open the corresponding pane.
2. In **Premium** box, click **Get Started with Premium** to get scrolled to the **Deposit** box.
3. Enter the amount of ANKR tokens you'd like to deposit (min. 1000 ANKR), click **Top Up**, and then confirm the operation in MetaMask.

<img src="/docs/build/initial-deposit.png" alt="Initial deposit" class="responsive-pic" width="800" />

Congrats — you've added ANKR tokens to your account, and you're all set for using _Premium_ services.

#### Subsequent top ups

As always the case, one day your account balance goes low — that's just the fact of life — and you need to top it up to continue querying blockchains:

1. In **Navigation**, click **Billing** to open the pane.
2. In the **Top Up** section (top right), enter the amount of ANKR tokens to deposit into your account, and then click **Top Up**.
3. In the **Top Up** dialog, there are three substeps — two of them prompt you for the wallet confirmation:
   * `Confirm top-up operation` — click **Next**.  
   * `Grant ANKRs to contract` — click **Confirm**, and then approve in the wallet.  
   * `Approve spending under contract` — click **Confirm**, and then approve in the wallet.

Congrats — you've added ANKR tokens to your account, and you're all set for using _Premium_ services.

### Withdraw funds

<Callout type="warning">
We’ve pegged the price of our API Credits to USD. Currently, _withdrawals_ are to be requested via **Support** only.
</Callout>

[//]: # (Life goes fast, and it might be the case someday that you'd like to get your ANKR tokens back to your wallet. That's exactly what the withdrawal operation has been implemented for.)

[//]: # ()
[//]: # (The withdrawal procedure is the following:)

[//]: # ()
[//]: # (1. In **Navigation**, click **Billing** to open the corresponding pane.)

[//]: # (2. In the **Account Balance** section &#40;top left&#41;, click **Withdraw**.)

[//]: # (3. In the **Withdraw** dialog, there are three substeps — one of them prompts you for the wallet confirmation:)

[//]: # (   * `Confirm withdrawal operation` — click **Next**.)

[//]: # (   * `Withdrawal amount` &#40;min: 500 ANKR&#41; — enter the amount to withdraw, click **Confirm**, and then approve in the wallet.)

[//]: # (   * `Transaction validation` — click **Next** and **Done** as soon as the validation completes.)

[//]: # ()
[//]: # (Congrats — you've withdrawn ANKR tokens back to your wallet.)

### Use private endpoints

Prerequisites:

  * [Connect wallet](/rpc-service/getting-started/#connect-wallet)
  * [Deposit funds](/rpc-service/getting-started/#deposit-funds)

As a Premium user, you have private Endpoints at hand to enable your projects to interact with a blockchain.

A Premium URL consists of a connection protocol (`https` or `wss`), domain name (`rpc.ankr.com`), common path of a blockchain to use (`/eth`), and your personal JWT token as the last segment of the path:

```
https://rpc.ankr.com/eth/6fe08843fa0966456eaa3fb19d4828b12389e71f48829f50df25e45bc5fd6cc5
```

To enable your project to interact with a blockchain, add the blockchain's URL into the project's library or config file:

1. In **Navigation**, click **Endpoints** to open the pane.
2. In the **Chain Selection** area, click the chain you'd like to query.
3. In the **Chain** opened, select a network (**Mainnet**/**Testnet**) needed for your project.
4. In the **Endpoints** field, copy the `HTTPS` or `WebSocket` URL and paste it into your project's library or config file.

<img src="/docs/build/use-endpoint-premium.png" alt="Premium Endpoints" class="responsive-pic" width="800" />

Congrats — you've just added a private endpoint into your project to enable blockchain interaction.

[//]: # (## Basics with both plans)

[//]: # ()
[//]: # (### Test RPC methods)

[//]: # ()
[//]: # (### Access user statistics)



