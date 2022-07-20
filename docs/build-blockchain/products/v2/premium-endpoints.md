---
title: Premium Plan Endpoints
id: premium-endpoints
---

# Premium Tier endpoints

Premium Tier endpoints are **secure** and **private** endpoints exclusive to you. Premium endpoints provide greater reliability by interfacing with a fully distributed, ultra low latency node pool. This node network infrastructure is distinct from the public community RPC network infrastructure. 

* At times of network congestion, Premium Tier requests are prioritized.
* Establish a durable, low-latency connection via the websocket endpoint and have data pushed incrementally directly to you as soon as it is available. This makes it ideal for real-time data analytics

:::warning

The Websocket API limits the maximum number of simultaneous connections to provide protection against misuse, for example, DDoS attacks. If your WebSocket client makes too many connections at the same time, you'll receive an error message.
:::

Check out [How to connect to Premium websockets](/build-blockchain/guides/websocket-premium)
