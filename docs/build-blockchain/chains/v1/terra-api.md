---
Title: Terra API
id: terra-api
---

# Terra API

## Develop on Terra

Ankr allows users to create their own Terra ‘Columbus-4’ network APIs with a variety of options for request call limits, archived data, and more. Ankr’s novel cluster technology allows APIs to draw from multiple nodes, offering a more reliable experience for our users.

:::caution
**A Websocket (WSS) Endpoint is not available on the Terra Network**
:::

### Get started on Terra

1. Login or set up an account on [app.ankr.com](https://app.ankr.com/api/)
2. [**Create API**](https://app.ankr.com/apps/api)

The official document has more detailed information :

* [docs.terra](https://docs.terra.money)

### Network types available on Ankr

* Columbus 4

### Node modes available on Ankr

* Terra

### Explorer links

[Terra Finder](https://finder.terra.money) :the official Terra block explorer\
[Stake ID ](https://terra.stake.id/#/): Terra block explorer with additional data on the latest proposals and validators\
[Figment Hubble ](https://hubble.figment.io/terra/chains/columbus-4): Terra block explorer with advanced validator data and income report functionality\
[Extraterrestria Finder ](https://finder.extraterrestrial.money): Terra block explorer with community driven features

### Terra RPC methods

Terra uses standard JSON RPC methods. 
View [Supported JSON RPC Methods](@site/docs/build-blockchain/guides/evm-supported-requests.md)

### Example calls

#### API (HTTPS) endpoint

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="go" label="Go">

```go
package main

import (
    "context"
    "fmt"
    "github.com/ethereum/go-ethereum/ethclient"
)

func main() {
    const url_auth = "https://username:password@apis.ankr.com/xxxxx/xxxxx/terra/full/columbus"    // authentication
    const url_token = "https://apis.ankr.com/xxxxx/xxxxx/terra/full/columbus"                     // token
    
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
<TabItem value="js" label="web3.js">

```javascript
const Web3 = require('web3');

const url_auth = 'https://username:password@apis.ankr.com/xxxxx/xxxxx/terra/full/columbus'    // authentication
const url_token = 'https://apis.ankr.com/xxxxx/xxxxx/terra/full/columbus'                     // token
const web3 = new Web3(new Web3.providers.HttpProvider("choose url_auth or url_token by your created type"));

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
    url_auth = 'https://username:password@apis.ankr.com/xxxxx/xxxxx/terra/full/columbus'  # authentication
    url_token = 'https://apis.ankr.com/xxxxx/xxxxx/terra/full/columbus'                   # token
    
    web3 = Web3(HTTPProvider("choose url_auth or url_token by your created type"))
    print(web3.eth.block_number)
```
</TabItem>
<TabItem value="curl" label="Curl">

```bash
# authentication
$ curl -X POST -H "Authorization: Basic MTIzNDU2OjEyMzQ1Ng==" -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' https://apis.ankr.com/xxxxx/xxxxx/terra/full/columbus

# token
$ curl -X POST -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' https://apis.ankr.com/xxxxx/xxxxx/terra/full/columbus
```
</TabItem>
</Tabs>
