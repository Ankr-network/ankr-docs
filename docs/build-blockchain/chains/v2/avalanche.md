---
Title: Avalanche
id: avalanche
---

# Avalanche RPC

Avalanche is an **ecosystem** made up of three core Blockchains optimized for specific tasks within the network. The **Exchange Chain** (X-Chain), **Platform Chain** (P-Chain), and **Contract Chain** (C-Chain).

The **C-Chain** is available via Avalanche RPC.

Avalanche was built specifically with Defi dApps and protocols in mind, focusing on security, low latency & high throughput. Avalanche uses a novel consensus protocol by utilizing two different consensus mechanisms. The consensus protocol ensures a high degree of security and fast finality even with multiple chains running simultaneously.

## Quick links

[**Avalanche**](https://www.avalabs.org)

[**Docs**](https://docs.avax.network/build/avalanchego-apis/issuing-api-calls)

[**Github**](https://github.com/ava-labs)


## Connect wallet

You can set up your **MetaMask wallet** to connect to Avalanche RPC. You can then perform transactions and interact with the network.

## Get started

1. Open your **Metamask Extension** and click the '_**Network**_' drop down menu at the top.&#x20;
2. Select '_**Custom RPC**_'.&#x20;
3. Enter the settings below:

|   Chain   | Custom RPC Category |                                    Details                                    |
| :-------: | :-----------------: | :---------------------------------------------------------------------------: |
| Avalanche |    NETWORK NAME:    |                                 Avalanche RPC                                 |
|           |     NEW RPC URL:    |        [https://rpc.ankr.com/avalanche](https://rpc.ankr.com/avalanche)       |
|           |      CHAIN ID:      |                                     43114                                     |
|           |       SYMBOL:       |                                      AVAX                                     |
|           |   BLOCK EXPLORER:   | [https://cchain.explorer.avax.network/](https://cchain.explorer.avax.network) |


## Integrate code

:::tip

**Avalanche** supports [standard JSON RPC calls](../../guides/evm-supported-requests.md) identical to [Geth's API](https://geth.ethereum.org/docs/rpc/server) for the following services:

- `web3_`
- `net_`
- `eth_`
- `personal_`

:::

## Avalanche

### web3 library

- **clientVersion**

Returns the current client version.

#### Example request

```js
curl https://rpc.ankr.com/avalanche \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}'
```

#### Example response

```js
{"jsonrpc":"2.0","id":1,"result":"v0.7.2-rc.1"}
```

### net library

- **net_version**

Returns the current network id.


#### Example request

```js
  
  curl https://rpc.ankr.com/avalanche \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"net_version","params":[],"id":67}'
```

#### Example response

```js
{"jsonrpc":"2.0","id":67,"result":"43114"}
```

### eth library

### Example request

```js

curl https://rpc.ankr.com/avalanche \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":67}'
```

### Example response

```js
{"jsonrpc":"2.0","id":67,"result":"0xaf7bf1"}
```

---
## Integrate code

### web3 

- **clientVersion**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="go" label="Go">

```go
package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "http://rpc.ankr.com/avalanche"
  method := "POST"

  payload := strings.NewReader(`{
	"jsonrpc":"2.0",
	"method":"web3_clientVersion",
	"params":[],
	"id":1
}`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Content-Type", "application/json")

  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := ioutil.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}
```
</TabItem>
</Tabs>

