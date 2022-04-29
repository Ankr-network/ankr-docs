---
title: Connect your wallet
id: connect-ethereum
---

MetaMask uses `window.ethereum` to 


## MAINNET

This is the primary Ethereum production blockchain. Transactions on the Ethereum Mainnet occur on the blockchain and incur costs (ETH).

```
https://rpc.ankr.com/eth
``` 

## How to add Ethereum Mainnet to your wallet

There are default settings in MetaMask for connecting a wallet to Ethereum Mainnet. However, it is possible to add additional RPC networks. It is generally better to have multiple networks to choose from for redundancy. 

1. In MetaMask, select **Add Network** and add the details below. 

  *Make sure you include backslashes and don't add any whitespace.*

  | **Chain** | **Custom RPC Category** | **Details**               |
  | --------- | ----------------------- | ------------------------- |
  | Ethereum  | NETWORK NAME:           | Ethereum RPC              |
  |           | NEW RPC URL:            | https://rpc.ankr.com/eth/ |
  |           | CHAIN ID:               | 1                         |
  |           | SYMBOL:                 | ETH                       |
  |           | BLOCK EXPLORER URL:     | https://etherscan.io/     |

2. Ignore the **Chain ID warning** and click **Save**.

<img src={require('/img/rinkeby-rpc-metamask.png').default} alt="Rinkeby RPC MetaMask" width="600" />



## TESTNETS

For building dapps, it is important to validate contract code on a Testnet before deploying to Mainnet. Most testnets use a proof-of-authority consensus mechanism. Using Test ETH incurs no real value. 

:::info🚰 

Be aware that Testnet faucets vary in their reliability and Testnet ETH may take a while to arrive!

:::

## RINKEBY:

Rinkeby is for Geth Client users only. It uses proof-of-authority consensus. 

```
https://rpc.ankr.com/eth_rinkeby
```

*Rinkeby Faucets*

https://faucets.chain.link/rinkeby

https://www.rinkebyfaucet.com

https://fauceth.komputing.org/

https://faucet.paradigm.xyz/ (Requires Social media posting)

https://faucet.rinkeby.io/ (Requires Social media posting)


## How to add Ankr Rinkeby RPC to your wallet

There are default settings in MetaMask for connecting a wallet to Ethereum Rinkeby but it is possible to add additional RPC networks. It is generally better to have multiple networks to choose from for redundancy. 

1. In MetaMask, select **Add Network** and add the details below. 

 *Make sure you include backslashes and don't add any whitespace.*

  | **Chain** | **Custom RPC Category** | **Details**               |
  | --------- | ----------------------- | ------------------------- |
  | Ethereum  | NETWORK NAME:           | Rinkeby RPC              |
  |           | NEW RPC URL:            | https://rpc.ankr.com/eth_rinkeby/|
  |           | CHAIN ID:               | 4                        |
  |           | SYMBOL:                 | RIN                     |
  |           | BLOCK EXPLORER URL:     | https://rinkeby.etherscan.io/    |

2. Ignore the **Chain ID warning** and click **Save**

<img src={require('/img/rinkeby-rpc-metamask.png').default} alt="Rinkeby RPC MetaMask" width="600" />



## ROPSTEN:

Ropsten is for Geth, Parity, Nethermind and Hyperledger Besu Client users. It is the only proof-of-work Testnet. It most closely resembles the current Ethereum network. It can have unpredictable block times. 

```
https://rpc.ankr.com/eth_ropsten
```

*Ropsten Faucets*

https://faucet.paradigm.xyz/ (Requires Social media posting)

https://faucet.dimensions.network/ 


## How to add Ankr Ropsten RPC to your wallet

There are default settings in MetaMask for connecting a wallet to Ropsten Testnet but it is possible to add additional RPC networks. It is generally better to have multiple networks to choose from for redundancy. 


1. In MetaMask, select **Add Network** and add the details below. 

  *Make sure to not add any whitespace and to include backslashes*

  | **Chain** | **Custom RPC Category** | **Details**               |
  | --------- | ----------------------- | ------------------------- |
  | Ethereum  | NETWORK NAME:           | Ropsten RPC              |
  |           | NEW RPC URL:            | https://rpc.ankr.com/eth_rinkeby/|
  |           | CHAIN ID:               | 4                        |
  |           | SYMBOL:                 | RIN                     |
|           | BLOCK EXPLORER URL:     | https://rinkeby.etherscan.io/    |

2. Ignore the **Chain ID warning** and click **Save**

  <img src={require('/img/rinkeby-rpc-metamask.png').default} alt="Rinkeby RPC MetaMask" width="600" />




## GOERLI:

Goerli can be used with any client. It uses proof-of-authority consensus.

```
https://rpc.ankr.com/eth_goerli
```

*Goerli Faucets*

https://goerlifaucet.com/


## How to add Ankr Goerli RPC to your wallet

There are default settings in MetaMask for connecting a wallet to Goerli Testnet but it is possible to add additional RPC networks. It is generally better to have multiple networks to choose from for redundancy. 


1. In MetaMask, select **Add Network** and add the details below. 

  *Make sure to not add any whitespace and to include backslashes*

  | **Chain** | **Custom RPC Category** | **Details**               |
  | --------- | ----------------------- | ------------------------- |
  | Ethereum  | NETWORK NAME:           | Ropsten RPC              |
  |           | NEW RPC URL:            | https://rpc.ankr.com/eth_rinkeby/|
  |           | CHAIN ID:               | 4                        |
  |           | SYMBOL:                 | RIN                     |
|           | BLOCK EXPLORER URL:     | https://rinkeby.etherscan.io/    |

2. Ignore the **Chain ID warning** and click **Save**

  <img src={require('/img/rinkeby-rpc-metamask.png').default} alt="Rinkeby RPC MetaMask" width="600" />



