import { Callout } from "components";

# Hybrid infrastructure

<Callout>
To request for Hybrid Infrastructure, fill in the details for our Sales to contact you:

<iframe 
  width="100%"
  height="400px"
  src="https://4f4a8balgjw.typeform.com/to/cdgNpeZC"
  frameborder="0"
  allowfullscreen>
</iframe>
</Callout>

## What's Hybrid Infrastructure?

On request, a [Premium](/rpc-service/service-plans/#service-plans-comparison) user can be enabled to add either their own private nodes or use external providers' ones to interact with blockchains. In both instances, Ankr's load balancer would still be processing the requests, sending them to nodes, and sending the received responses back to the user. But the nodes the requests are sent to would be the ones from the private infrastructure of the user's choice (personal nodes or external providers' nodes). At the same time, Ankr's nodes would be used as a fallback option in case of any breakdown.

<Callout type="warning" emoji="❗">
The WebSocket connection is available via Ankr's infrastructure only.
</Callout>

### How it works

Upon receiving the user's request, the system employs the following algorithm to provide a response:

  1. **Response found in cache**. First, the system checks if the response is already available in the cache. If it's there, then the response is taken from the cache and sent to the user, end of the story.

  2. **Response found on private nodes**. Second, the response can't be found in the cache, and the request is sent to the user's private infrastructure, and then the valid response is sent back to the user.

  * The system checks if the user has a private node added to the infrastructure. All the nodes are being monitored, including private ones, therefore the system knows their performance readings. So, if the private node is available and live, it doesn't lag behind, and it could be regarded as reliable, then the load balancer sends the user's request to that node. If the load balancer receives a valid response from the private node, it sends that one straight to the user — end of the story.

  * If anything goes wrong, the system checks if the user has any more private nodes and if yes, the same story goes over with the next available private node. If the system is out of private nodes and still doesn't have a valid response, then it falls back to Ankr's infrastructure for sending requests.

### Pricing

According to the implemented [architecture](/rpc-service/hybrid-infrastructure/#how-it-works), the cost per request sent via Hybrid Infrastructure might fit under the following categories:

  * **Response found in cache** — standard [pricing](/rpc-service/pricing/) applies.
  * **Response found on private nodes** — 10% of the standard [pricing](/rpc-service/pricing/).

### Use case: free credits

One of the legit cases for using Hybrid Infrastructure can be to shorten the PAYG charging. Ankr charges Premium users for each request they make. The only exception is the requests sent to the user's private infrastructure enabled. Assume the user has lots of API сredits with some external providers such as, for example, Alchemy or Infura. In that case, Hybrid Infrastructure can become a single comfortable point of access to use both Alchemy's and Infura's free requests capacity before starting to be charged real credits with Ankr. And moreover, if any of those requests fail on private infrastructure, you'll be backed up by Ankr's to fall back to.

But the Premium user seeking to cut their costs has to keep one thing in mind — the algorithm we use has been intended to reduce processing times, and the first thing in the course of action upon receiving any request is to check the cache for the response already stored in it and send this cached response to the user. And the response stored in the cache might have come from Ankr's nodes. In such a case, Hybrid Infrastructure won't give the user even a chance to send the request to the infrastructure of their choice, and therefore the PAYG charging will apply as usual.

Therefore, popular requests such as those of a block number, height, etc., would most likely be already cached.

On the other hand, if the Hybrid Infrastructure user makes some rare requests that haven't been sent before (no cached answers available), then the system will use their private infrastructure to process that request, meaning no charges will apply.

### Use case: private nodes

Assume the Premium user has a private high-spec top-performing node they'd like to use. The only drawback is that the node is prone to breaking down. And the user requires a backend, service, or application to be failure-proof and to work flawlessly.

This is precisely the case the Hybrid Infrastructure can become an excellent solution for. You just add your private node to the infrastructure, and if anything goes wrong on your side, the system redirects your request to Ankr's infrastructure. And as soon as you repair your private node, you'll be able to use it as before.

## How to enable Hybrid Infrastructure

Enabling of Hybrid Infrastructure is only performed manually. The first step is to fill in the request form at the top of this page. Thus, the Sales department will contact you shortly to discuss the kind of infrastructure you'd like to be able to use. The talk with Sales usually results in having the user data such as wallet address and user token and composing a list of items the infrastructure to include — a particular blockchain you're interested in, number of nodes, etc. This info goes to the Backend team that gives you access to add the infrastructure directly in the RPC Service interface.  

The matter of principle for us is that we just provide the user with access to Hybrid Infrastructure, and then they act on their own — control the nodes, tackle the URLs, and so on. The user doesn't pass the URLs into Ankr explicitly, so we might presume that nobody knows those URLs until the user discloses that information.

## Adding private nodes

Prerequisites:

  * Having a Premium account ([connect your wallet](/rpc-service/premium-account-operations/#connect-wallet)).
  * Having your account balance [topped up](/rpc-service/premium-account-operations/#top-up).
  * Having the [Hybrid Infrastructure functionality](/rpc-service/hybrid-infrastructure/#how-to-enable-hybrid-infrastructure) enabled.

To add a private node, follow the steps:

  1. Go to [RPC Service](https://www.ankr.com/rpc/).
  2. In **Navigation**, click **Endpoints** to open the corresponding pane.
  3. In the list of available chains, click the one you have the Hybrid Infrastructure functionality enabled for.
  4. On the **Infrastructure** tab, in **My Endpoints** block, click **Add Endpoint** (+), enter the address of your node, and then click **Finish**.

<img src="/docs/hybrid-add-node.png" alt="Add private node" class="responsive-pic" width="800" />