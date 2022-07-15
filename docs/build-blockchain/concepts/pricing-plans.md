---
title: Pricing
id: pricing
---

# Product pricing

## Public and Premium tiers comparison

| Feature               | Public Tier                       | Premium Tier                                                                                   |
|-----------------------|-----------------------------------|------------------------------------------------------------------------------------------------|
| Full and Archive Data | ✅                                 | ✅                                                                                              |
| Advanced API          | ❌                                 | ✅                                                                                              |
| Rate limit            | Limited during high traffic       | Unlimited                                                                                      |
| Requests per day      | Soft limit of 1M requests per day | Unlimited requests                                                                             |
| Connection            | HTTPS                             | HTTPS and WebSockets                                                                           |
| Latency               | US/EU-based nodes                 | Global node coverage                                                                           |
| Support               | Discord Support                   | Custom SLA                                                                                     |
| Terms                 | No Contract                       | No Contract                                                                                    |
| Cost                  | **FREE**                          | **[Pay-as-you-go](/build-blockchain/concepts/pricing#payg-premium-tiers-usage-based-pricing)** |

## PAYG: Premium tier's usage-based pricing

Pay-as-you-go (PAYG) is a usage-based pricing model for the Premium Tier services. PAYG means that you commit to no subscriptions but pay for each request you make. To start using the Premium Tier features, you deposit a minimum amount of 1000 ANKR tokens and create an Ankr Premium account.

### How we charge?

Premium Tier's usage measures in *credits*. Various methods have different credit values per request. A method's credit value calculates based on a method's usage intensity and multiple factors that include using the computational, memory, storage, and network resources.

PAYG model supports two ways of charging that depend on the communication protocol used:

* **Per call** — this type is used for HTTPS calls, either individual or batch ones.
* **Per subscription** — this type is used for WebSocket communication.

We charge no matter whether a request has been successful or not. In other words, a charge is taken for each request coming to our worker, regardless of a node's response.

Here is the summary on PAYG charging:

* **Correct request** (charged) — a request uses a supported method and has a valid JSON-RPC structure. 
* **Incorrect request** (not charged) — a request has an invalid JSON-RPC structure. We can't parse such a request.
* **Correct request + incorrect method** (charged default amount) — a request uses an unsupported method though has a valid JSON-RPC structure. We charge default amount of credits for the infrastructure usage.

### Pricing calculator

Below you can find our beta pricing calculator for blockchains that support standard EVM methods. For all other methods and blockchains, the default price is set to 100 credits.

<iframe 
  width="100%"
  height="400px"
  src="https://www-stage.ankr.com/tools/calculator/"
  frameborder="0"
  allowfullscreen>
</iframe>

## Getting started

1. Connect your wallet to the [Ankr Protocol](https://www.ankr.com/protocol/) page.
2. Explore the [Account Details](https://www.ankr.com/protocol/account/) section in sidebar.
3. Top up the account with the desired amount of ANKR tokens.
4. Wait for our system to generate personal endpoints for you.




