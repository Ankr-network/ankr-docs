---
title: Connect to Premium Websockets
id: websocket-premium
---

# Connect to premium websockets

## 01 - Access your premium websocket (wss) endpoint 

Copy your wss endpoint from the [Premium Plan](https://www.ankr.com/protocol/plan/) page.

:::tip

Premium websockets are of the following format:
	
**Arbitrum wss://rpc.ankr.com/arbitrum/ws/<YOUR_PRIVATE_KEY>**

**Avalanche wss://rpc.ankr.com/avalanche/ws/<YOUR_PRIVATE_KEY>**

**Binance Smart Chain wss://rpc.ankr.com/bsc/ws/<YOUR_PRIVATE_KEY>**

**Celo wss://rpc.ankr.com/celo/ws/<YOUR_PRIVATE_KEY>**

**Ethereum wss://rpc.ankr.com/eth/ws/<YOUR_PRIVATE_KEY>**

**Fantom wss://rpc.ankr.com/fantom/ws/<YOUR_PRIVATE_KEY>**

**Polygon wss://rpc.ankr.com/polygon/ws/<YOUR_PRIVATE_KEY>**

**Solana wss://rpc.ankr.com/solana/ws/<YOUR_PRIVATE_KEY>**

:::

## 02 - Test with `wscat`

The easiest way to test out your websocket endpoint is to install a command line tool such as [`wscat`](https://github.com/websockets/wscat)

Use `wscat` to send Curl requests as in the Curl example below

## 03 - Websocket endpoint examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="bash" label="Curl">

```bash
wscat -c wss://multi-rpc.com/avalanche/ws/YOUR-PRIVATE-ENDPOINT`

Connected (press CTRL+C to quit)

> {"jsonrpc": "2.0", "id": 1, "method": "eth_subscribe", "params": ["newHeads"]}


> {"jsonrpc": "2.0", "id": 2, "method": "eth_unsubscribe", "params": ["The result value returned after successful subscription"]}
```
</TabItem>

<TabItem value="go" label="Go">

```go
package main

import (
    "context"
    "fmt"
    "github.com/ethereum/go-ethereum/core/types"
    "github.com/ethereum/go-ethereum/ethclient"
    "time"
)


func main() {
    const url = "wss://rpc.ankr.com/eth/ws/<YOUR_PRIVATE_KEY>"                
    
    client, err := ethclient.Dial(`choose url_basic or url_token by your created type`)
    
    if err != nil {
        panic(err)
    }
    
    ch := make(chan *types.Header, 1024)
    sub, err := client.SubscribeNewHead(context.Background(), ch)
    
    if err != nil {
        panic(err)
    }
    
    fmt.Println("---subscribe-----")

    go func() {
        time.Sleep(10 * time.Second)
        fmt.Println("---unsubscribe-----")
        sub.Unsubscribe()
    }()

    go func() {
        for c := range ch {
            fmt.Println(c.Number)
        }
    }()

    <-sub.Err()

}
```
</TabItem>
<TabItem value="ethers.js" label="Ethers.js">

```javascript
const ethers = require("ethers");

const url = wss://rpc.ankr.com/eth/ws/<YOUR_PRIVATE_KEY>     

const init = function () {

    const wsProvider = new ethers.providers.WebSocketProvider('wss://rpc.ankr.com/eth/ws/<YOUR_PRIVATE_KEY>');

    wsProvider.on("pending", (tx) => {
        console.log("tx", tx)
        setTimeout(function () {
            wsProvider.destroy()
        }, 1000);

    });

};

init();
```
</TabItem>
<TabItem value="web3.js" label="Web3.js">


```javascript
const WebSocket = require('ws');

const url = 'wss://rpc.ankr.com/eth/ws/<YOUR_PRIVATE_KEY>'                

const request = '{"jsonrpc": "2.0", "id": 1, "method": "eth_subscribe", "params": ["newPendingTransactions"]}';  

const ws = new WebSocket('wss://rpc.ankr.com/eth/ws/<YOUR_PRIVATE_KEY>');

ws.on('open', function open() {
    ws.send(request);
});

let count = 0;

ws.on('message', function incoming(data) {
    const res = JSON.parse(data)
    console.log(JSON.stringify(res));
    if (++count === 5) {
        process.exit(0);
    }
});
```
</TabItem>
<TabItem value="py" label="Python">

```python
import asyncio
import json
import time

import websockets


def create_req_body(r_id, method, params):
    data = {
        "jsonrpc": "2.0",
        "id": r_id,
        "method": method,
        "params": params
    }
    return json.dumps(data)


async def do_wss(url):
    req_json = create_req_body(1, "eth_subscribe", ["newHeads"])
    async with websockets.connect(url) as wss:
        await wss.send(req_json)
        subscription_response = await wss.recv()
        print(subscription_response)
        subscribe_result = json.loads(subscription_response)['result']
        req_json = create_req_body(2, "eth_unsubscribe", [subscribe_result])

        start_time = int(time.time())
        end_time = start_time + 5
        while end_time > int(time.time()):
            recv_data = await wss.recv()
            print(recv_data)
            print('\n')
        await wss.send(req_json)
        unsubscription_response = await wss.recv()
        print(unsubscription_response)


class TestWSS:

    def test_wss(self):
        url = 'wss://rpc.ankr.com/eth/ws/<YOUR_PRIVATE_KEY>' 
        asyncio.get_event_loop().run_until_complete(do_wss('wss://rpc.ankr.com/eth/ws/<YOUR_PRIVATE_KEY>'))
```

</TabItem>
</Tabs>

