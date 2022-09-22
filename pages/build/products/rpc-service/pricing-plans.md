# Ankr RPC Pricing Plans

## Public and Premium plans comparison

| Feature               | Public Plan                                                                                                | Premium Plan                                                                                   |
|-----------------------|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| Full and Archive Data | ✅                                                                                                          | ✅                                                                                              |
| Advanced API          | ❌                                                                                                          | ✅                                                                                              |
| Priority order        | Inferior to Premium;<br/>Limited during high traffic                                                       | Superior to Public;<br/>Prioritized during high traffic                                        |
| Requests per minute   | `= 45k / all blockchains` — guaranteed;<br/>`> 45k / all blockchains` — possible (depends on overall load) | `= 60k / endpoint` — guaranteed;<br/>`> 60k / endpoint` — possible (depends on overall load)   |
| Connection            | HTTPS                                                                                                      | HTTPS and WebSockets                                                                           |
| Support               | Discord Support                                                                                            | Custom SLA                                                                                     |
| Terms                 | No Contract                                                                                                | Both Contract and No Contract                                                                  |
| Cost                  | **FREE**                                                                                                   | **[Pay-as-you-go](/build-blockchain/concepts/pricing#payg-premium-tiers-usage-based-pricing)** |

## PAYG: Premium plan's usage-based pricing

Pay-as-you-go (PAYG) is a usage-based pricing model for the Premium Plan services. PAYG means that you commit to no subscriptions but pay for each request you make. To start using the Premium Plan features, you deposit a minimum amount of 1000 ANKR tokens and create an Ankr Premium account.

### How we charge?

Premium Plan's usage measures in *credits*. PAYG model charges per method used. Various methods have different credit values per request. A method's credit value calculates based on a method's usage intensity and multiple factors that include using the computational, memory, storage, and network resources.

Premium Plan supports two communication protocols:

* **HTTPS** — this one is used either for individual or batch requests.
* **WebSocket** — this one is used to establish a communication channel.

We charge no matter whether a request has been successful or not. In other words, a charge is taken for each request coming to our worker, regardless of a node's response.

Here is the summary on PAYG charging:

* **Correct request** (charged) — a request uses a supported method and has a valid JSON-RPC structure. 
* **Incorrect request** (not charged) — a request has an invalid JSON-RPC structure or a batch request has the same ID in multiple requests. We can't parse such a request.
* **Correct request + incorrect method** (charged default amount) — a request uses an unsupported method though has a valid JSON-RPC structure. We charge default amount of credits for the infrastructure usage.

### Pricing calculator

Use our beta pricing calculator for standard EVM methods. For all other methods and blockchains that don't support standard EVM methods, the default price is set to 100 credits.

<iframe 
  width="100%"
  height="400px"
  src="https://www-stage.ankr.com/tools/calculator/"
  frameborder="0"
  allowfullscreen>
</iframe>

## Get started with Premium

1. Go to the [RPC Services](https://www.ankr.com/rpc/) platform.
2. [Connect your wallet](/build-blockchain/products/v2/ui-interactions/#connect-wallet).
3. [Top up account balance](/build-blockchain/products/v2/ui-interactions/#top-up).
4. [Add Premium URLs into your project](/build-blockchain/products/v2/ui-interactions-blockchain/#rpc-apis-for-your-project) to interact with a blockchain.