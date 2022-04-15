---
Title: Clover API
id: clover-api
---

# Clover API


## Develop on Clover

The Clover Finance chain is a powerful multi-chain tool that helps to enable a more interconnected Web 3.0 environment. They also offer a developer incentive program to encourage building on the platform.

Ankr allows users to create their own full Clover APIs with a variety of options for request call limits, archived data, and more. Ankr’s novel cluster technology allows APIs to draw from multiple nodes, offering a more reliable experience for our users.

## Get started on Clover

1. Login or set up an account on [app.ankr.com](https://app.ankr.com/api/)
2. [**Create API**](https://app.ankr.com/apps/api)

## Network types available on Clover

* Mainnet

## Node modes available on Ankr

* Full Node

## Explorer links

Clover Cross-Chain Explorer ([https://tx.clover.finance/](https://tx.clover.finance)) shows information about cross chain transactions​.

## JSON-RPC methods

Clover's approach to JSON-RPC methods is unique and not the same as the standard Ethereum JSON-RPC methods.

* [Clover JSON RPC docs](https://docs.clover.finance/technical-documentation/web3-compatibility)
* [gsrpc-repo](https://github.com/centrifuge/go-substrate-rpc-client)
* [gsrpc-docs](https://pkg.go.dev/github.com/centrifuge/go-substrate-rpc-client)
* [rpc-call](https://apps-ivy.clover.finance/#/rpc)

## Example calls

#### API (HTTPS) endpoint

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="go" label="Go">

```go
package main

import (
    "fmt"
    "github.com/centrifuge/go-substrate-rpc-client/client"
    "github.com/centrifuge/go-substrate-rpc-client/rpc/author"
    "github.com/centrifuge/go-substrate-rpc-client/rpc/chain"
    "github.com/centrifuge/go-substrate-rpc-client/rpc/state"
    "github.com/centrifuge/go-substrate-rpc-client/rpc/system"
)

func main() {
    const url_auth = "https://username:password@apis.ankr.com/xxxxx/xxxxx/clover/full/main"    // authentication
    const url_token = "https://apis.ankr.com/xxxxx/xxxxx/clover/full/main"                     // token
    
    cl,err := client.Connect("choose url_auth or url_token by your created type")
    
    if err != nil {
        panic(err)
    }

    newRPC, err := NewRPC(cl)
    if err != nil {
        panic(err)
    }

    hash, err := newRPC.Chain.GetFinalizedHead()
    if err != nil {
        panic(err)
    }

    fmt.Println(hash.Hex())

}

type RPC struct {
    Author *author.Author
    Chain *chain.Chain
    State *state.State
    System *system.System
    Client *client.Client
}

func NewRPC(cl client.Client) (*RPC, error) {
    st := state.NewState(cl)
    return &RPC{
        Author: author.NewAuthor(cl),
        Chain: chain.NewChain(cl),
        State: st,
        System: system.NewSystem(cl),
        client: cl,
    }, nil
}
```
</TabItem>
<TabItem value="curl" label="curl">

```bash
# authentication
$ curl -H "Content-Type: application/json" -u "username:password" -d '{"jsonrpc":"2.0","method":"chain_getBlock","params":[],"id":1}' https://apis.ankr.com/xxxxx/xxxxx/clover/full/main
$ curl -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","method":"chain_getBlock","params":[],"id":1}' https://username:password@apis.ankr.com/xxxxx/xxxxx/clover/full/main

# token
$ curl -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","method":"chain_getBlock","params":[],"id":1}' https://apis.ankr.com/xxxxx/xxxxx/clover/full/main
```
</TabItem>
</Tabs>

#### Websocket (WSS) endpoint

<Tabs>
<TabItem value="go" label="Go">

```go
package main

import (
    "fmt"
    "github.com/centrifuge/go-substrate-rpc-client/client"
    "github.com/centrifuge/go-substrate-rpc-client/rpc/author"
    "github.com/centrifuge/go-substrate-rpc-client/rpc/chain"
    "github.com/centrifuge/go-substrate-rpc-client/rpc/state"
    "github.com/centrifuge/go-substrate-rpc-client/rpc/system"
    "time"
)

func main() {
    const url_auth = "wss://username:password@apis.ankr.com/wss/xxxxx/xxxxx/clover/full/main"    // authentication
    const url_token = "wss://apis.ankr.com/wss/xxxxx/xxxxx/clover/full/main"                     // token
    
    cl,err := client.Connect("choose url_auth or url_token by your created type")
    
    if err != nil {
        panic(err)
    }

    newRPC, err := NewWebsocket(cl)
    if err != nil {
        panic(err)
    }

    sub, err := newRPC.Chain.SubscribeNewHeads()
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
        for c := range sub.Chan {
            fmt.Println(c.Number)
        }
    }()

    <-sub.Err()
}

type Websocket struct {
    Author *author.Author
    Chain *chain.Chain
    State *state.State
    System *system.System
    Client *client.Client
}

func NewWebsocket(cl client.Client) (*Websocket, error) {
    st := state.NewState(cl)
    return &Websocket{
        Author: author.NewAuthor(cl),
        Chain: chain.NewChain(cl),
        State: st,
        System: system.NewSystem(cl),
        client: cl,
    }, nil
}
```
</TabItem>
<TabItem value="curl" label="Curl">

```bash
# authentication
$ wscat -c wss://username:password@apis.ankr.com/wss/xxxxx/xxxxx/clover/full/main


# token
$ wscat -c wss://apis.ankr.com/wss/xxxxx/xxxxx/clover/full/main

wait connected...

# subscribe
> {"jsonrpc":"2.0","method":"chain_subscribeNewHeads","params":[],"id":1}


# unsubscribe
> {"jsonrpc":"2.0","method":"chain_unsubscribeNewHeads","params":["0xxxxxxxxxxxxxxx"],"id":1}
```
</TabItem>
</Tabs>