---
title: 01 - Public RPC Endpoints
id: public-rpc
---

# 01 - Public community RPCs

Public Community RPCs are central to the Ankr vision of mass adoption in Web 3.0 and the crypto economy. The Ankr Public RPC layer provides fast and reliable access via API endpoints to anybody in the world to connect to a growing number of networks:

Check out the latest chains on [Ankr Protocol](https://www.ankr.com/protocol/public/)

## *Simply use the public URL and start making requests instantly NO SIGN UP, NO KYC*

:::tip Have a go

Try copying this code into your command line/terminal. 

 ```bash
 curl https://rpc.ankr.com/arbitrum \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}'

```
:::


Enjoy the following benefits:

* Permissionless, Open access to multiple chains 8+ (more to come)
* Zero cost access to Public RPC API endpoints
* Exceedingly high rate-limiting
* No username or password required.
* Dashboard views of the status of individual chain public RPCs

## How it works

The Public RPC Layer sits on top of the Ankr Protocol network. It is kept stable using a backbone of multiple underlying nodes globally distributed across 200 data centres as well as individual providers' homes.

Constant system monitoring ensures that RPC endpoints are synced in real-time to underlying nodes. Whilst, network traffic monitoring uses intelligent caching to optimize speed and automate routing to the best available node at busy times.

This architecture is built for high availability and scalability.

