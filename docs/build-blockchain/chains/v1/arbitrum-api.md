---
Title: Arbitrum API
id: arb-api
---

# Arbitrum API

## Develop on Arbitrum

Ankr allows users to create their own Arbitrum full APIs with a variety of options for request call limits, archived data, and more. Ankr’s novel cluster technology allows APIs to draw from multiple nodes, offering a more reliable experience for our users.

## Get started on Arbitrum

1. Login or set up an account on [app.ankr.com](https://app.ankr.com/api/)
2. [**Create API**](https://app.ankr.com/apps/api)

### **Node types available on Ankr**

* Full Node

## Network types available on Ankr

* Mainnet
* Testnet

## Explorer links

[https://explorer.offchainlabs.com/](https://explorer.offchainlabs.com)​​

### **View available endpoints**

Select 'Settings' to view API & & Websocket endpoints

### JSON-RPC methods

Arbitrum nodes support the [Ethereum JSON-RPC API](https://eth.wiki/json-rpc/API)

[**View Arbitrum Docs**](https://developer.offchainlabs.com/docs/developer\_quickstart)

## **Example calls**

**API (HTTPS) endpoint**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
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
    const url_auth = "https://username:password@apis.ankr.com/xxxxx/xxxxx/arbitrum/full/main"    // authentication
    const url_token = "https://apis.ankr.com/xxxxx/xxxxx/arbitrum/full/main"                     // token
    
    rpcClient,err := ethclient.Dial("choose url_auth or url_token by your created type")
    
    if err != nil {
        panic(err)
    }
    
    blockNumber, err := rpcClient.BlockNumber(context.Background())
    
    if err != nil {
        panic(err)
    }
    
    fmt.Println(blockNumber)
}
```
</TabItem>
<TabItem value="js" label="JavaScript">

```javascript
const Web3 = require('web3');


const url_auth = 'https://username:password@apis.ankr.com/xxxxx/xxxxx/arbitrum/full/main'    // authentication
const url_token = 'https://apis.ankr.com/xxxxx/xxxxx/arbitrum/full/main'                     // token

const web3 = new Web3(new Web3.providers.HttpProvider('choose url_auth or url_token by your created type'));

web3.eth.getBlockNumber((error, blockNumber) => {
    if(!error){
        console.log(blockNumber);
    }else{
        console.log(error);
    }
})
```
</TabItem>
<TabItem value="py" label="Python">

```python
from web3 import Web3


def test_block_number(self):
    url_auth = 'https://username:password@apis.ankr.com/xxxxx/xxxxx/arbitrum/full/main'  # authentication
    url_token = 'https://apis.ankr.com/xxxxx/xxxxx/arbitrum/full/main'                   # token
    
    web3 = Web3(HTTPProvider('choose url_auth or url_token by your created type'))
    print(web3.eth.block_number)
```
</TabItem>
<TabItem value="curl" label="Curl">

```bash
# authentication
$ curl -H "Content-Type: application/json" -u "username:password" -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' https://apis.ankr.com/xxxxx/xxxxx/arbitrum/full/main
$ curl -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' https://username:password@apis.ankr.com/xxxxx/xxxxx/arbitrum/full/main

# token
$ curl -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' https://apis.ankr.com/xxxxx/xxxxx/arbitrum/full/main
```
</TabItem>
</Tabs>

