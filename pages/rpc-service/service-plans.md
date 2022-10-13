# Blockchains interaction service plans

Ankr provides the top-performing globally-distributed decentralized infrastructure of nodes to empower your Web3 projects with blockchain interaction capabilities. There is a couple of solutions we have at your disposal to query the blockchains:

  * *[RPC Service](/rpc-service/overview)* — a platform that enables your Web3 projects to start interacting with 22+ blockchains via JSON-RPC endpoints, gives you access to viewing the usage statistics for the data queried, and provides the means for RPC methods testing.

  * *[Advanced APIs](/advanced-api/overview)* — a ready-to-use collection of endpoints that supports simultaneous querying of multiple blockchains (8 currently available) for the most popular Web3 scenarios at near-instant speeds; available via [JavaScript](/advanced-api/javascript-sdk)/[Python](/advanced-api/python-sdk) SDKs and [React Hooks](/advanced-api/react-hooks). Advanced APIs' endpoints and usage statistics are also accessed via the RPC Service platform, though it is considered to be a separate product for its powerful querying performance.

## Service plans comparison

The `RPC Service` and `Advanced APIs` _blockchain interaction solutions_ come with both *Public* and *Premium* Ankr service plans but differ significantly by the rate limits and other performance features supported depending on the plan selected.

### Feature list

| Feature                                | Public                      | Premium                                                                                 |
|----------------------------------------|-----------------------------|-----------------------------------------------------------------------------------------|
| Full and Archive Data                  | ✅                           | ✅                                                                                       |
| Global node coverage                   | ✅                           | ✅                                                                                       |
| Hybrid endpoints                       | ❌                           | ✅                                                                                       |
| Usage stats and reports                | ❌                           | ✅                                                                                       |
| Private endpoints                      | ❌                           | ✅                                                                                       |
| Support *Polkadot*, *Kusama*, & *Heco* | ❌                           | ✅                                                                                       |
| Batch requests                         | ✅                           | ✅                                                                                       |
| `eth_getLogs` batch size               | `10` per batch              | `up to 1000` per batch                                                                  |
| Priority order                         | Limited during high traffic | Prioritized during high traffic                                                         |
| Connection                             | HTTPS                       | HTTPS and WebSockets                                                                    |
| Support                                | Discord and Support Portal  | Direct Email Support                                                                    |
| Terms                                  | No Contract                 | Both Contract and No Contract                                                           |
| Cost                                   | **Free**                    | **[Pay-as-you-go](/rpc-service/pricing-plans/#payg-premium-plans-usage-based-pricing)** |

### Rate limits

| Service                        | Public                                                                                                                                                                                                            | Premium                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|--------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JSON-RPC API<br/>(RPC Service) | **EVM-compatible chains**<br/>Total requests / minute:<br/>`= 15k` — guaranteed;<br/>`> 15k` — depends on the load;<br/><br/>Total requests / second:<br/>`= 250` — guaranteed;<br/>`> 250` — depends on the load | **EVM-compatible chains**<br/>Requests per endpoint / minute:<br/>`= 60k` — guaranteed;<br/>`> 60k` — depends on the load;<br/><br/>Requests per endpoint / second:<br/>`= 1k` — guaranteed;<br/>`> 1k` — depends on the load;<br/><br/>**Solana**<br/>Requests per endpoint / minute:<br/>`= 160k` — guaranteed;<br/>`> 160k` — depends on the load;<br/><br/>Requests per endpoint / second:<br/>`= 2.7k` — guaranteed;<br/>`> 2.7k` — depends on the load |
| Advanced APIs                  | `50` requests/minute                                                                                                                                                                                              | `1k+` requests/minute                                                                                                                                                                                                                                                                                                                                                                                                                                        |

## Charging model: Pay-as-you-go

_Pay-as-you-go_ (PAYG) is a usage-based charging model for the Premium Plan services. PAYG means that you commit to no subscriptions but pay for each request you make. To start using the Premium Plan features, you deposit a minimum amount of 1000 ANKR tokens and create an Ankr Premium account.

### How we charge?

Premium Plan's usage measures in *API Credits*. PAYG model charges per method used in request. Various methods have different credit values per request. A method's credit value calculates based on a method's usage intensity and multiple factors that include using the computational, memory, storage, and network resources.

[//]: # (Premium Plan supports two communication protocols:)

[//]: # ()
[//]: # (* **HTTPS** — this one is used either for individual or batch requests.)

[//]: # (* **WebSocket** — this one is used to establish a communication channel.)

We charge no matter whether a request has been successful or not. In other words, a charge is taken for each request coming to our worker, regardless of a node's response.

Here is the summary on PAYG charging:

  * **Correct request** (charged) — a request uses a supported method and has a valid JSON-RPC structure. 
  * **Incorrect request** (not charged) — a request has an invalid JSON-RPC structure or a batch request has the same ID in multiple requests. We can't parse such a request.
  * **Correct request + incorrect method** (charged default amount) — a request uses an unsupported method though has a valid JSON-RPC structure. We charge default amount of credits for the infrastructure usage.

[//]: # (## Get started with Premium)

[//]: # ()
[//]: # (1. Go to the [RPC Services]&#40;https://www.ankr.com/rpc/&#41; platform.)

[//]: # (2. [Connect your wallet]&#40;/rpc-service/premium-account-operations/#connect-wallet&#41;.)

[//]: # (3. [Deposit funds]&#40;/rpc-service/premium-account-operations/#top-up&#41;.)

[//]: # (4. [Add Premium Endpoints into your project]&#40;/rpc-service/blockchain-interactions/#rpc-apis-for-your-project&#41; to interact with a blockchain.)
