## Architecture

The thing we stand out by is that we don't have a single centralized Gateway. Similar to the competition, our infrastructure consists of nodes behind a load balancer that gets a request from the client and calculates the fastest processing solution to route the request through.
<br/>

<img src="/docs/build/rpc-flow.png" alt="RPC Service dataflow" class="responsive-pic" width="800" />

Our fundamental distinction is that we use a whole network of geo-distributed load balancers instead of a single one for that purpose. Such an approach reduces the time needed for the request to get to a load balancer. And you don't have to work in NASA to realize that it's quicker for a user from Australia to reach the Australia-based load balancer than the one from abroad.

Secondly, we can boast of having a vast geographical distribution of nodes themselves, which never really ends to expand. And we're committed to building our network of nodes coupled by location to the network of load balancers. Thereby, we reduce the requests processing time (the time request goes from the load balancer to the node and back), making the geographical distribution and the nodes-to-load-balancers coupling a powerful solution to increase infrastructure effectiveness and reduce querying latency.

The idea behind our geo-distributed architecture of nodes and load balancers is to provide the user with the same predictable top-quality services regardless of the user's location.

## Technologies

From a technology point of view, RPC Service infrastructure relies heavily on the following pillars to provide the highest quality blockchain interaction to power your Web3 projects:

  * **Healthy nodes**  
  There is a monitoring system that checks the nodes' performance with a very high regularity. If something goes wrong with a node, it will be disconnected from a load balancer. Certainly, it's not performed instantly, but the speed is rather high. In other words, if anything goes wrong with a node, then it disconnects from the load balancer, and the load balancer doesn't regard that node as a candidate for sending user requests.

  * **Intelligent load balancers**  
  The load balancing algorithm uses a scoring system to determine the best possible node to serve an RPC request at any given time. A load balancer selects the quickest node to answer. To do so, each load balancer instance regularly sends a standard request to each node and measures their answer times to find out the quickest one. Therefore, we can say that each instance of a load balancer knows the quickest nodes to serve the requests for each of the blockchains.

  * **Info caching**  
  We cache the nodes' responses. The information is stored depending on the response type. Caching duration depends on the request type. Caching serves as an additional way to reduce request processing times.

## Service plans

The next layer, *[Service Plans](/rpc-service/service-plans/)*, deals with users and defines their RPC Service functional capabilities.

In general, the advantages the Premium plan provides over the Public one come down to the higher rate limits, the availability of the WebSockets connection, having personal requests telemetry, the better means of support, and the most notorious one — having the nodes used for processing the Premium user requests only.

The latest one, nodes, let's cover in more detail. The availability of nodes reserved specifically for the Premium user requests processing is a blue ribbon feature we provide. It helps in fencing the Premium users from competing with the Public user requests in cases of peak loads on the blockchain. In other words, the Public plan requests don't ever get routed to those Premium nodes, which brings the Premium plan request processing effectiveness to the next level.

## Data correctness

Data correctness is ensured by the monitoring system that checks the nodes' performance 24/7. The majority of nodes from the network belongs to us — it's our hardware, we roll it out, run, and optimize the nodes. We feel confident about what's going on with the nodes, what they do, and how they make calculations.

Our implemented safeguard mechanisms protect us from connecting our infrastructure with the nodes sending incorrect data to the point of almost 100 %. The reason we can't say the incorrect data probability is eliminated completely is that sometimes we temporarily use our partner's nodes to tackle the load until we meet the increased demand with a sufficient amount of our own nodes.

Moreover, we have a software update schedule in place to run the nodes on the latest software versions available. Before updating the nodes' software, we research the peculiarities of each specific version and never use it without a complete understanding of what the update brings us, whether there are any benefits in it, and how secure it is.

## User security

The security of access to the Premium Plan RPC Service is stipulated by the following conditions:

  * **Private/public key pair**
    First of all, you MUST, at all times, ensure the safety of your private/public key pair that's used on our platform for access. Keeping the private key safe protects your JWT token from being stolen. The only additional item you have to be careful about is your private endpoint. To summarize, you must ensure the safety of your private key and private endpoint.

  * **HTTPS connection**
    Our platform uses the HTTPS connection protocol. Therefore, even if the traffic has been sniffed, the data it contains still stays encrypted, and no one can hack into it.

## Premium user-service interaction

>The security of user transactions on the RPC Service platform relies on two premises.

First is that the Premium user interacts with the system via a straightforward logic of a smart contract — you can't negotiate with it, you can't outsmart it — you deposit funds (USD, ANKR) into the contract, and then you can use the corresponding amount of API Credits to make requests. Also, if you'd like to withdraw your funds, you request the operation, which will also be performed via a smart contract.

The second premise is our consensus mechanism. The consensus mechanism is the means to confirm that a user has fulfilled particular conditions and therefore qualifies for particular services. It is implemented by means of three identical oracle-like services. They receive information on the transaction being made and the user claiming to have a right for some service regarding it. Each of the consensus mechanism's parties goes to a particular blockchain involved and checks the transaction completion, verifies if that's the right smart contract the transaction made to, checks whether the transaction has been mined yet, and whether the transaction's block has at least 12 blocks on top of it.

Meeting all the conditions confirms the claimed interaction with the smart contract. If all the three parties of the consensus mechanism agree on meeting all the conditions, then a JWT token is issued for the user that enables the person to use Premium RPCs. The token issued by the consensus mechanism is encrypted. The only moment it appears in the consensus mechanism explicitly is upon generation. Then it gets stored encrypted in the database.

The system uses asymmetric encryption. It means there is a pair of keys, one of which is used for encryption and another for decryption. The user transaction data passed into the consensus mechanism contains a public encryption key by means of which the issued JWT token gets encrypted before storing. Therefore, even if anyone hacks the consensus mechanism, the only thing to be found would be encrypted data which needs private keys to be decrypted, and those private keys only the users have, so no explicit data can be found.

In the future, we are also planning to increase the number of consensus mechanism participants to involve the collaborating third parties willing to work with us. In such a case, not only our internal microservices but also the external ones would participate in the consensus mechanism to confirm its validity of providing tokens security.

## Funds security

User transactions data is stored on the backend in anonymized form. The system knows an Ethereum address the data associates with, but it doesn't know, for example, the private endpoint that has been used. We don't store that kind of information due to security reasons. Therefore, even if the inconceivable happens and someone hacks into our production database, the only thing to be seen is the existence of transactions — no one would be able to create fraudulent tokens or steal funds.

## PAYG funds security

The Premium user deposits the funds into their Premium Account. Those funds can be either spent or withdrawn. Withdrawal operations are also processed via the smart contract, and you would have to interact with it using no other address but the one from which the deposit has been made. You have deposited from a particular account of yours — you have the ability to get the funds back to that particular account. No more, no less.

And once again — it's never enough to emphasize — the security of the system is determined by the measures the user enforces to store their private key. Responsible attitude towards storing your private key safeguards your PAYG funds from being stolen.