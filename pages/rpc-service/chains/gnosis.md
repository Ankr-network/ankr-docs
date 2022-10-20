import { Callout } from "nextra-theme-docs";

# Gnosis

**Gnosis Chain** (Formerly the xDai Chain) provides stability, scalability and an extendable beacon chain framework.

Development on Gnosis Chain is straightforward for Ethereum developers as it is an EVM compatible chain. Smart contracts can be written and deployed in the same way as for Ethereum just by setting a different RPC endpoint.

Any contract that works on the Ethereum mainnet can be redeployed to the Gnosis chain. Transaction costs are minimized, and all fees and transactions are paid with a single token (xDai). Many tools supporting Ethereum development are compatible with Gnosis Chain. 

## Quick links

[**Gnosis Chain**](https://www.xdaichain.com/)

[**Docs**](https://www.xdaichain.com/)

[**Github**](https://github.com/xdaichain)


## Connect wallet

You can set up your **MetaMask wallet** to connect to Gnosis RPC. You can then perform transactions and interact with the network.

## Get started

1. Open your **Metamask Extension** and click the '_**Network**_' drop down menu at the top.
2. Select '_**Custom RPC**_'
3. Enter the settings below:

| Chain    | Custom RPC Category   |                              Details                                         |
|:--------:|:---------------------:|:----------------------------------------------------------------------------:|
|  Gnosis  |     NETWORK NAME:     |                                  Gnosis RPC                                  |
|          |     NEW RPC URL:      |          [https://rpc.ankr.com/gnosis](https://rpc.ankr.com/gnosis)          |
|          |       CHAIN ID:       |                                     0x64                                     |
|          |        SYMBOL:        |                                     xDai                                     |
|          |    BLOCK EXPLORER:    | [https://blockscout.com/xdai/mainnet/](https://blockscout.com/xdai/mainnet/) |


## Integrate code

<Callout>
**Gnosis** supports standard JSON RPC calls.
</Callout>

## Gnosis

### web3 library

- **clientVersion**

Returns the current client version.

#### Example request

```
curl https://rpc.ankr.com/gnosis \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}'
```



#### Example response

```
{"jsonrpc":"2.0","result":"OpenEthereum//v3.3.0-rc.15-stable-88eb7d325-20211104/x86_64-linux-gnu/rustc1.48.0","id":1}
```

### net library

- **net_version**

Returns the current network id.


#### Example request

```
  
  curl https://rpc.ankr.com/gnosis \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"net_version","params":[],"id":67}'
```

#### Example response

```
{"jsonrpc":"2.0","result":"100","id":67}
```

### eth library

### Example request

**eth_estimateGas**

Returns the gas price for the transaction in hex.

```

curl https://rpc.ankr.com/gnosis \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
    "jsonrpc":"2.0",
    "method":"eth_estimateGas",
    "params":[{
    "from": "0x8D97689C9818892B700e27F316cc3E41e17fBeb9",
    "to": "0xd3CdA913deB6f67967B99D67aCDFa1712C293601",
    "value": "0x186a0"
    }],
    "id":1
}'
```

### Example response

```
{"jsonrpc":"2.0","result":"0x5208","id":1}
```

---
## Integrate code

<Callout type="warning" emoji="❗">
Be aware! Gnosis RPC calls do not work with URLs that specify a Port Number. 
</Callout>

### web3 

- **clientVersion**

```go
package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "http://rpc.ankr.com/gnosis"
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

