---
Title: Ethereum API
id: ethereum-api
---

# Ethereum API

## Develop on Ethereum


Ethereum offers a decentralized platform on which to build dApps using Solidity scripting language and the Ethereum Virtual Machine (EVM). Smart Contracts execute and verify application code across the network and allow decentralized transactions. 

Developers benefit from the rich Ethereum Ecosystem of frameworks, tooling and libraries. 

Ankr allows users to create their own Ethereum full and archive APIs with a variety of options for request call limits, archived data, and more. Ankr’s novel cluster technology allows APIs to draw from multiple nodes, offering a more reliable experience for our users.

### Get started on Ethereum

1. Login or set up an account on [app.ankr.com](https://app.ankr.com/api/)
2. [**Create API**](https://app.ankr.com/apps/api)

### Network types available on Ankr

​[Geth Clients](https://github.com/ethereum/go-ethereum)​

* Mainnet Network;
* Ropsten Network;
* Rinkeby Network;
* Görli  Network;


### Node modes available on Ankr

* Archive Node
* Full Node

### Explorer links

Mainnet - [https://etherscan.io/](https://etherscan.io)​

Ropsten - [https://ropsten.etherscan.io/](https://ropsten.etherscan.io)​

Rinkeyby - [https://rinkeby.etherscan.io/](https://rinkeby.etherscan.io)​

Gorli - [https://goerli.etherscan.io/](https://goerli.etherscan.io)​

Kovan - [https://kovan.etherscan.io/](https://kovan.etherscan.io)​

### JSON-RPC methods

Official RPC documentation: [https://eth.wiki/json-rpc/API](https://eth.wiki/json-rpc/API)​

## **Example calls**

**API (HTTPS) Endpoint**

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
    const basic url = 'https://projectname:password@apis.ankr.com/xxxxx/xxxxx/eth/fast/rinkeby' // base authentication url
    const token url = "https://apis.ankr.com/TOKEN-ENDPOINT/eth/fast/rinkeby"  // token authentication url 
    
    rpcClient,err := ethclient.Dial(url)
    
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
const basic_url = 'https://projectname:password@apis.ankr.com/xxxxx/xxxxx/eth/fast/rinkeby' // base authentication url
const token_url = "https://apis.ankr.com/TOKEN-ENDPOINT/eth/fast/rinkeby"  // token authentication url 
const web3 = new Web3(new Web3.providers.HttpProvider(url));

web3.eth.getBlockNumber((error, blockNumber) => {
    if(!error){
        console.log(blockNumber);
    }else{
        console.log(error);
    }
});
```
</TabItem>
<TabItem value="py" label="Python">

```python
from web3 import Web3
          
def test_block_number(self):
    basic_url = 'https://projectname:password@apis.ankr.com/xxxxx/xxxxx/eth/fast/rinkeby'  # base authentication url
    token_url = 'https://apis.ankr.com/TOKEN-ENDPOINT/eth/fast/rinkeby'  # token auth url
    
    web3 = Web3(HTTPProvider(url))
    print(web3.eth.block_number)
```
</TabItem>
<TabItem value="curl" label="Curl">

```bash
curl -X POST https://projectname:passwor@apis.ankr.com/xxxxx/xxxxx/eth/fast/rinkeby -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' # base authentication url

curl -X POST https://apis.ankr.com/xxxxx/xxxxx/eth/fast/rinkeby -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'# token authentication
```
</TabItem>
</Tabs>
