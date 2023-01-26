import { Callout } from "components";

# Getting Started

*RPC Service* — a platform that enables users to empower their Web3 projects with the blockchain interaction capabilities ([22+ chains supported](/rpc-service/chains/chains-list/)) via the top-performing globally-distributed decentralized infrastructure of nodes.
<br/>

<img src="/docs/build/rpc-overview.png" alt="RPC Overview" class="responsive-pic" width="800" />

The platform has the following functionality to offer:

  * *JSON-RPC API* — the endpoints (either [public](/rpc-service/getting-started/#use-public-endpoints) or [private](/rpc-service/getting-started/#use-private-endpoints)) to integrate into your project for blockchain interaction. 
  * *[Advanced APIs](/advanced-api/overview)* — collections of endpoints that supports simultaneous querying of multiple blockchains for the most popular Web3 scenarios at near-instant speeds; available via [JavaScript](/advanced-api/javascript-sdk)/[Python](/advanced-api/python-sdk) SDKs and [React Hooks](/advanced-api/react-hooks).
  * *Usage statistics* — the means to have a full view of your blockchain interaction statistics.
  * *RPC methods testing* — a tool for RPC methods testing.

## Interface schema
<br/>

<img src="/docs/build/ui-schema.png" alt="UI Schema" class="responsive-pic" width="800" />

## Basics with Public plan

What's available for the [Public service plan](/rpc-service/service-plans/#service-plans-comparison) user:

  * RPC Endpoints and Advanced APIs at the corresponding [rate limits](/rpc-service/service-plans/#rate-limits).
  * Connection code snippets.
  * RPC methods testing tool.
  * Public usage data (stats on requests from all Public service users).

### Use public endpoints

To enable your project to interact with a blockchain, add the blockchain's endpoint into the project's library or config file:

1. In **Navigation**, click **Endpoints** to open the pane.
2. In the **Chain Selection** area, click a chain you'd like to query.
3. In the **Chain** opened, select a network (**Mainnet**/**Testnet**) needed for your project.
4. In the **Endpoint** field, copy the URL and paste it into your project's library or config file.

<img src="/docs/build/use-endp-public.png" alt="Use public endpoint" class="responsive-pic" width="800" />

Congrats — you've just added a public endpoint into your project to enable blockchain interaction.

---

## Basics with Premium plan

The [Premium service plan](/rpc-service/service-plans/#service-plans-comparison) enables using the RPC API Endpoints and Advanced APIs at the corresponding [rate limits](/rpc-service/service-plans/#rate-limits). Here is the path to access Premium and start using its functionality:

`Interface schema` —> `Sign in` —> `Deposit funds` —> `Use private endpoints`

  * **[Interface schema](/rpc-service/getting-started/#interface-schema)**: surely, it's always helpful to orient yourself in a new environment. Hardcore users can skip this step and proceed to the following one.

  * **[Sign in](/rpc-service/getting-started/#sign-in)**: first things first, the road to using Premium starts with signing in into your account (so we can provide you with the private endpoints and know which account to charge under the [PAYG model](/rpc-service/service-plans/#charging-model-pay-as-you-go) for the requests you make).
  
  * **[Deposit funds](/rpc-service/getting-started/#deposit-funds)**: second, the positive balance of [API Credits](/rpc-service/service-plans/#how-we-charge) in your account is a must to be able to query the endpoints. That's why you'll have to deposit funds (we support both *Web3 wallet* and *credit card* payment flows) to be converted into API Credits and stored into your account to make requests. It might be useful to know the [prices](/rpc-service/pricing/) before depositing funds.

  * **[Use private endpoints](/rpc-service/getting-started/#use-private-endpoints)**: finally, after you've signed in and deposited funds into your account, you're all set to start using private RPC API endpoints.

### Sign in

RPC Service supports two authentication options:

  * [**Google account**](/rpc-service/getting-started/#via-google-account) — sign in with your Google account. This option provides for the credit card payment flow only, though you can connect your wallet anytime to use the Web3 wallet payment flow.
  * [**Web3 wallet**](/rpc-service/getting-started/#via-web3-wallet) — connect your wallet to sign in. This option enables using both Web3 wallet and credit card payment flows.

#### Via Google account

The Google sign in procedure is the following:

1. Go to the [RPC Service](https://www.ankr.com/rpc/) platform.
2. In the top right corner, click **Sign in >** **Continue with Google**, and then select the account to use.

<img src="/docs/build/getting-started/gauth.png" alt="Google authentication" class="responsive-pic" width="500" />

Congrats — you've signed in into RPC Service using your Google account.

#### Via Web3 wallet

The Web3 wallet sign in procedure is the following:

1. Go to the [RPC Service](https://www.ankr.com/rpc/) platform.
2. In the top right corner, click **Sign in**, select the wallet to use (example: **MetaMask**), and then go through required steps:
   * Click **Provide** — to use your public key for token encryption.
   * Click **Sign** — to confirm interactions with our platform.

<img src="/docs/build/card-metamask.png" alt="MetaMask connection" class="responsive-pic" width="550" />

Congrats — you now have an account with RPC Service, associated with your wallet.

### Deposit funds

<Callout>
We’ve pegged the price of our API Credits to USD. It means that upon using ANKR tokens for PAYG, `ANKR` calculates into `API Credits` at the current _ANKR/USD exchange rate on the moment of block's validation_.
</Callout>

Depending on the [sign-in](/rpc-service/getting-started/#sign-in) option selected, you can deposit funds the following way:

  * [Web3 wallet flow](/rpc-service/getting-started/#web3-wallet-flow)
  * [Credit card flow](/rpc-service/getting-started/#credit-card-flow)

#### Web3 wallet flow

The Web3 wallet flow has the following parts to it:

  * [Initial deposit](/rpc-service/getting-started/#initial-deposit)
  * [Subsequent top ups](/rpc-service/getting-started/#subsequent-top-ups)

##### Initial deposit

Initial deposit is a required step to access Premium services, as, upon depositing funds into your account, the system generates a personal JWT token granting access to the Premium service plan functionality.

Prerequisites:

  * [Sign in](/rpc-service/getting-started/#via-web3-wallet)

The initial top-up process is the following:

1. In **Navigation**, click **Pricing** to open the corresponding pane.
2. In **Premium** box, click **Get Started with Premium** to get scrolled to the **Deposit** box.
3. Enter the amount of ANKR tokens you'd like to deposit (min. 1000 ANKR), click **Top Up**, and then confirm the operation in your wallet.

<img src="/docs/build/initial-deposit.png" alt="Initial deposit" class="responsive-pic" width="800" />

Congrats — you've made payment in ANKR tokens to get the API Credits into your account, and you're all set for using _Premium_ services.

##### Subsequent top ups

As always the case, one day your account balance goes low — that's just the fact of life — and you need to top it up to continue querying blockchains:

1. In **Navigation**, click **Billing** to open the pane.
2. In the **Top Up** section (top right), enter the amount of ANKR tokens to deposit into your account, and then click **Top Up**.
3. In the **Top Up** dialog, there are three substeps — two of them prompt you for the wallet confirmation:
   * `Confirm top-up operation` — click **Next**.  
   * `Grant ANKRs to contract` — click **Confirm**, and then approve in the wallet.  
   * `Approve spending under contract` — click **Confirm**, and then approve in the wallet.

Congrats — you've made payment in ANKR tokens to get the API Credits into your account, and you're all set for using _Premium_ services.

#### Credit card flow

The credit card flow has the following parts to it:

  * [Initial deposit](/rpc-service/getting-started/#initial-deposit-1)
  * [Subsequent top ups](/rpc-service/getting-started/#subsequent-top-ups-1)

##### Initial deposit

Initial deposit is a required step to access Premium services, as, upon depositing funds into your account, the system generates a personal JWT token granting access to the Premium service plan functionality.

Prerequisites:

  * [Sign in](/rpc-service/getting-started/#via-google-account)

The initial top-up process is the following:

1. In **Navigation**, click **Pricing** to open the corresponding pane.
2. In the **Premium** box, click **Get Started with Premium** to get scrolled to the **Deposit** box.

<img src="/docs/build/usd-initial-deposit.png" alt="Initial deposit" class="responsive-pic" width="800" />

3. Select one of the payment options to cover your query demands (see [Pricing](/rpc-service/pricing/)), and then click **Top Up**:
    * **One time** — a single top up by the amount you indicate in the field below (min.: 10 USD); requires manual action for [subsequent top ups](/rpc-service/getting-started/#subsequent-top-ups-1).  
    * **$15/mo** — an automatic monthly recurrent top up by 15 USD.
    * **$50/mo** — an automatic monthly recurrent top up by 50 USD.
    * **$300/mo** — an automatic monthly recurrent top up by 300 USD.
4. On the **Pay with card** page, fill in the required fields and click **Pay** to get things done.

<img src="/docs/build/card-stripe.png" alt="Initial deposit" class="responsive-pic" width="800" />

Congrats — you've made a USD payment to get the API Credits into your account, and you're all set for using _Premium_ services.

##### Subsequent top ups

If you've selected the **One time** payment option upon the [initial deposit](/rpc-service/getting-started/#initial-deposit-1), then one day your account balance goes low — that's just the fact of life — and you need to top it up to continue querying blockchains:

1. In **Navigation**, click **Billing** to open the pane.
2. In the **Top Up** section (top right), set the toggle to **USD**.

<img src="/docs/build/usd-subsequent-deposit.png" alt="Initial deposit" class="responsive-pic" width="800" />

3. Select one of the payment options to cover your query demands (see [Pricing](/rpc-service/pricing/)), and then click **Top Up**:
    * **One time** — a single top up by the amount you indicate in the field below (min.: 10 USD); requires manual action for subsequent top ups.  
    * **$15/mo** — an automatic monthly recurrent top up by 15 USD.
    * **$50/mo** — an automatic monthly recurrent top up by 50 USD.
    * **$300/mo** — an automatic monthly recurrent top up by 300 USD.
4. On the **Pay with card** page, fill in the required fields and click **Pay** to get things done.

<img src="/docs/build/card-stripe.png" alt="Initial deposit" class="responsive-pic" width="800" />

Congrats — you've made a USD payment to get the API Credits into your account, and you're all set to continue using _Premium_ services.

[//]: # (### Withdraw funds)

[//]: # ()
[//]: # (<Callout type="warning">)

[//]: # (We’ve pegged the price of our API Credits to USD. Currently, _withdrawals_ are to be requested via **Support** only.)

[//]: # (</Callout>)

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

  * [Sign in](/rpc-service/getting-started/#sign-in)
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



