import { Callout } from "nextra-theme-docs";

This section walks you through how to connect a MetaMask wallet to Ethereum Mainnet and Testnets.

## How to add Ethereum Mainnet to your wallet

This is the primary Ethereum production blockchain. Transactions on the Ethereum Mainnet occur on the blockchain and incur costs (ETH).

```
https://rpc.ankr.com/eth
```

There are default settings in MetaMask for connecting a wallet to Ethereum Mainnet. However, it is possible to add additional RPC networks. It is generally better to have multiple networks to choose from for redundancy.

1. In MetaMask, select **Add Network** and add the details below.

   _Make sure you include backslashes and don't add any whitespace._

| **Chain** | **Custom RPC Category** | **Details**               |
| --------- | ----------------------- | ------------------------- |
| Ethereum  | NETWORK NAME:           | Ankr Ethereum RPC         |
|           | NEW RPC URL:            | https://rpc.ankr.com/eth/ |
|           | CHAIN ID:               | 1                         |
|           | SYMBOL:                 | ETH                       |
|           | BLOCK EXPLORER URL:     | https://etherscan.io/     |

2. Ignore the **Chain ID warning** and click **Save**.

<img src="/docs/ankr-eth-mainnet-metamask.png" alt="Rinkeby RPC MetaMask" class="responsive-pic" width="310" />

## About Ethereum Testnets

For building dapps, it is important to validate contract code on a Testnet before deploying to Mainnet. Most testnets use a proof-of-authority consensus mechanism. Using Test ETH incurs no real value.

The following RPC Testnets are available:

- Rinkeby
- Ropsten
- Goerli

<Callout type="warning" emoji="🚰">
Be aware that Testnet faucets vary in their reliability and Testnet ETH may take a while to arrive!
</Callout>

## Rinkeby and faucets

Rinkeby is for Geth Client users only. It uses proof-of-authority consensus.

```
https://rpc.ankr.com/eth_rinkeby
```

_Rinkeby Faucets_

https://faucets.chain.link/rinkeby

https://www.rinkebyfaucet.com

https://fauceth.komputing.org/

https://faucet.paradigm.xyz/ (Requires Social media posting)

https://faucet.rinkeby.io/ (Requires Social media posting)

## How to add Ankr Rinkeby RPC to your wallet

There are default settings in MetaMask for connecting a wallet to Ethereum Rinkeby but it is possible to add additional RPC networks. It is generally better to have multiple networks to choose from for redundancy.

1. In MetaMask, select **Add Network** and add the details below.

_Make sure you include backslashes and don't add any whitespace._

| **Chain** | **Custom RPC Category** | **Details**                       |
| --------- | ----------------------- | --------------------------------- |
| Ethereum  | NETWORK NAME:           | Ankr Rinkeby RPC                  |
|           | NEW RPC URL:            | https://rpc.ankr.com/eth_rinkeby/ |
|           | CHAIN ID:               | 4                                 |
|           | SYMBOL:                 | RIN                               |
|           | BLOCK EXPLORER URL:     | https://rinkeby.etherscan.io/     |

2. Ignore the **Chain ID warning** and click **Save**

<img src="/docs/ankr-rinkeby-metamask.png" alt="Rinkeby RPC MetaMask" class="responsive-pic" width="600" />

## Ropsten and faucets

Ropsten is for Geth, Parity, Nethermind and Hyperledger Besu Client users. It is the only proof-of-work Testnet. It most closely resembles the current Ethereum network. It can have unpredictable block times.

```
https://rpc.ankr.com/eth_ropsten
```

_Ropsten Faucets_

https://faucet.paradigm.xyz/ (Requires Social media posting)

https://faucet.dimensions.network/

## How to add Ankr Ropsten RPC to your wallet

There are default settings in MetaMask for connecting a wallet to Ropsten Testnet but it is possible to add additional RPC networks. It is generally better to have multiple networks to choose from for redundancy.

1. In MetaMask, select **Add Network** and add the details below.

   _Make sure to not add any whitespace and to include backslashes_

| **Chain** | **Custom RPC Category** | **Details**                       |
| --------- | ----------------------- | --------------------------------- |
| Ethereum  | NETWORK NAME:           | Ankr Ropsten RPC                  |
|           | NEW RPC URL:            | https://rpc.ankr.com/eth_ropsten/ |
|           | CHAIN ID:               | 3                                 |
|           | SYMBOL:                 | ROP                               |
|           | BLOCK EXPLORER URL:     | https://ropsten.etherscan.io/     |

2. Ignore the **Chain ID warning** and click **Save**

<img src="/docs/ankr-ropsten-metamask.png" alt="Rinkeby RPC MetaMask" class="responsive-pic" width="600" />

## Goerli and faucets

Goerli can be used with any client. It uses proof-of-authority consensus.

```
https://rpc.ankr.com/eth_goerli
```

_Goerli Faucets_

https://goerlifaucet.com/

## How to add Ankr Goerli RPC to your wallet

There are default settings in MetaMask for connecting a wallet to Goerli Testnet but it is possible to add additional RPC networks. It is generally better to have multiple networks to choose from for redundancy.

1. In MetaMask, select **Add Network** and add the details below.

   _Make sure to not add any whitespace and to include backslashes_

| **Chain** | **Custom RPC Category** | **Details**                      |
| --------- | ----------------------- | -------------------------------- |
| Ethereum  | NETWORK NAME:           | Ankr Goerli RPC                  |
|           | NEW RPC URL:            | https://rpc.ankr.com/eth_goerli/ |
|           | CHAIN ID:               | 5                                |
|           | SYMBOL:                 | GOR                              |
|           | BLOCK EXPLORER URL:     | https://goerli.etherscan.io/     |

2. Ignore the **Chain ID warning** and click **Save**

<img src="/docs/ankr-goerli-metamask.png" alt="Rinkeby RPC MetaMask" class="responsive-pic" width="600" />
