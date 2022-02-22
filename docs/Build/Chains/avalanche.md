---
Title: Avalanche
id: avalanche
---

# Avalanche

# Avalanche RPC

Avalanche is an **ecosystem** made up of three core Blockchains optimized for specific tasks within the network. The **Exchange Chain** (X-Chain), **Platform Chain** (P-Chain), and **Contract Chain** (C-Chain).&#x20;

All 3 blockchains are validated and secured by the Primary Network.

Avalanche was built specifically with Defi dApps and protocols in mind, focusing on security, low latency & high throughput. Avalanche uses a novel consensus protocol by utilizing two different consensus mechanisms. The consensus protocol ensures a high degree of security and fast finality even with multiple chains running simultaneously.

## Quick Links

[**Avalanche**](https://www.avalabs.org)

[**Docs**](https://docs.avax.network/build/avalanchego-apis/issuing-api-calls)

[**Github**](https://github.com/ava-labs)

# Integrate Wallet

You can set up your **MetaMask wallet** to connect to Avalanche RPC. You can then perform transactions and interact with the network.

### Get Started

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


# Integrate Code

## Avalanche

## web3 library

clientVersion

```
https://rpc.ankr.com/avalanche
```

### Example Request

```shell
curl https://rpc.ankr.com/avalanche \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}'
```

### Example Response

```javascript
{"jsonrpc":"2.0","id":1,"result":"v0.7.2-rc.1"}
```

## net library

###  net\_version

```
https://rpc.ankr.com/avalanche
```

Returns the current client versions

### Parameters

none

### Returns

`String` - The current client version

`"1"`: Ethereum Mainnet

`"2"`: Morden Testnet (deprecated)

`"3"`: Ropsten Testnet

`"4"`: Rinkeby Testnet

`"42"`: Kovan Testnet

### HEADERS

**Content-Type** application/json

### BODY raw

```json
{
	"jsonrpc":"2.0",
	"method":"net_version",
	"params":[],
	"id":67
}
```

### Example Request

```shell
  
  curl https://rpc.ankr.com/avalanche \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"net_version","params":[],"id":67}'
```

### Example Response

```javascript
{"jsonrpc":"2.0","id":67,"result":"1"}
```

## eth library

---
# Integrate Code

### Example Requests

#### web3 
clientVersion

{% tabs %}
{% tab title="Go" %}

```go
package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "http://rpc.ankr.com/avax"
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
{% endtab %}
{% endtabs %}

