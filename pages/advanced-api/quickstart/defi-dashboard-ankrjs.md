import { Code } from "components";
import { Bleed } from "nextra-theme-docs";
import { Callout } from "nextra-theme-docs";
import Image from 'next/image';

# DeFi-Dashboard dApp using Advanced APIs

In this tutorial, we’ll be building a "What's in Your Wallet?" dApp where users can check their net worth, credits in native balance by chain, and NFTs they hold on multiple blockchains such as Ethereum, Polygon and Fantom (to name a few) using [Ankr's Advanced Multichain APIs](https://www.ankr.com/advanced-api/)↗. 

## Advanced APIs

Ankr's Advanced Multichain APIs are the collection of RPC methods created to simplify querying blockchain data. These APIs does all the heavy lifting for us so that we can query on-chain data in a matter of seconds.


Currently, it support eight EVM compatible chains: 
- ETH
- Polygon
- BSC
- Fantom
- Avalanche
- Arbitrum 
- Syscoin 
- and Optimism, with more EVM and non-EVM chains coming soon.

To interact with Advanced APIs, we are going to use a JavaScript library named [Ankr.js](https://www.npmjs.com/package/@ankr.com/ankr.js)↗. Here's the tech stack for this guide:

- Vite.js 
- [TailwindCSS](https://tailwindcss.com/docs/guides/vite)↗ as CSS framework (follow their official guide to set it up)
- Advanced APIs for querying blockchain data

Here's what you'll be able to build by the end of this tutorial:
<br></br>
<img src="/docs/build/dash01.png" alt="API" class="responsive-pic"  />


Now that we have a basic understanding of what we are building and the tools we will be using to achieve the outcome, we can start building our dApp!

_______________________

## Getting Started

**Prerequisite**: To successfully finish this guide, you'll only need [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed on your machine.

We will begin the project by forking this Vite + Tailwind CSS + RainbowKit 🌈 [starter repository](https://github.com/kaymomin/StarterKit-DefiDashboard)↗. We can do so by clicking the 'fork' button at the top-right of the linked GitHub page. It has some basic configurations and setup to get us started with our dApp.

> Note in the code block below, make sure you paste the repo URL of your own cloned repository.

Once the repository has been forked, we will clone it locally to get building on top of it by following the steps below:

- Navigate into a directory of your choice and run the following command in your terminal to set up a local clone of the starter-kit


```
git clone https://github.com/kaymomin/StarterKit-DefiDashboard
``` 
- Now, let's navigate into the cloned directory and install the dependencies in the following section

```
cd starterkit-defidashboard
```
```
yarn
```


## Installing Ankr.js

In this section, we will install and set up Ankr.js for querying NFTs and Tokens related data from the blockchain for a given wallet address.

We will start by installing the `ankr.js` package from npm:

```
yarn add @ankr.com/ankr.js
``` 

Now that we have installed the Ankr.js library, let's head to the VSCode and open the `starterkit-defidashboard` folder in our code editor.  

To launch the starter kit, run the following command in the VSCode terminal:
```
yarn dev
```
and you will be able to see the start-kit webpage. Here's the [live demo](https://defidashboard-starterkit.vercel.app/)↗ of what the site will look like at this point.

<img src="/docs/build/dash02.png" alt="API" class="responsive-pic"  />

## Setting Up Ankr.js

- Now to set up Ankr.js, create a new file named `api.ts` under the `src` directory. We will initialize Ankr.js in this file.

**File:** `src/api.ts`


```javascript
import AnkrscanProvider from '@ankr.com/ankr.js';
import type { Blockchain } from '@ankr.com/ankr.js/dist/types';

const provider = new AnkrscanProvider('');

``` 
To interact with Ankr's Advanced APIs, we have created a provider instance which will serve as an interface to the APIs required to fetch data.


## Creating Function to Fetch Total Balance

In this step, we will first create a `getAccountBalance` function in the `src/api.ts` file, which will accept a `walletAddress`, and return the coin and the respective token balances. Here we are going to utilize the [getAccountBalance](https://documenter.getpostman.com/view/19024547/UVsEVUGQ#74b5cc68-fba2-415c-a53b-28c08818f970)↗ method provided by Ankr.js to calculate the sum of balance (net worth) across the chains in the `getTotalMultichainBalance` function.

**File: **`src/api.ts`
```javascript
import AnkrscanProvider from '@ankr.com/ankr.js';
import type { Blockchain } from '@ankr.com/ankr.js/dist/types';

const provider = new AnkrscanProvider('');

//defining the list of supported blockchains
const listOfChains: Blockchain[] = ['eth', 'arbitrum', 'avalanche', 
'bsc', 'fantom', 'polygon', ];

//key-value pair mapping of chains to their native symbols
export const chainsToNativeSymbols: { [key in Blockchain]: string } = {
  eth: 'ETH',
  arbitrum: 'ETH',
  avalanche: 'AVAX',
  bsc: 'BNB',
  fantom: 'FTM',
  polygon: 'MATIC',
};

//getAccountBalance function to fetch coins and their respective token balances
export const getAccountBalance = async (
  walletAddress: string,
  blockchain: Blockchain
) => {
  return provider.getAccountBalance({
    walletAddress,
    blockchain,
  });
};

//use getAccountBalance to sum total balance across chains
export const getTotalMultichainBalance = async (walletAddress: string) => {
  let total = 0;
  for await (const chain of listOfChains) {
    const { totalBalanceUsd, assets } = await getAccountBalance(
      walletAddress,
      chain
    );
    total += +totalBalanceUsd;
  }
  return total;
};
``` 

Just to see if things are working, let's call this function on our app i.e. `./src/App.tsx` and log out the output.


```javascript
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect} from 'react';
import {
  getTotalMultichainBalance,
} from './api';

function App() {
 
  useEffect(() => {
    (async () => {
      const  total  = await getTotalMultichainBalance(
        //add your wallet address
        '0xdC4EfDac43475F434482e61805E0df96D2dC1DF4'
      );
      console.log({ total });
    })();
  }, []);

  return (
    <div className="flex flex-col items-center py-8">
    <h1 className="flex justify-center text-sm sm:text-base md:text-3xl 
lg:text-4xl pb-10">DefiDashboard 🪙 What's in your Wallet?</h1>

    <div className="flex justify-center">
      <ConnectButton showBalance={false}/>
    </div>
    <div className="flex gap-6 mt-8">
    <div className='flex flex-col'>
      </div></div></div>
  );
}

export default App;

``` 

You should be able to see the net-worth or total balance in your browser's console.

<br></br>
<img src="/docs/build/dash03.png" alt="API" class="responsive-pic"  />


You can now revert back the changes we made in the `App.tsx` file as we will work on it once we create all our functions in `api.ts` file.

### Creating More Functions

Now that we have created a function to get total balance, in this section we will write three more functions as follow:

- **getNativeCurrencyBalance:** This function will fetch account balance for a particular chain.

- **getAllNativeCurrencyBalances:** This function will serve as a loop to get all the native currency balance from the list of blockchains we declared in the above section.

- **getNfts:** Will returns the list of NFTs owned by the particular address.

**File: **`src/api.ts`
```javascript
export const getNativeCurrencyBalance = async (
    walletAddress: string,
    chain: Blockchain
  ) => {
    const { assets } = await getAccountBalance(walletAddress, chain);
    const nativeCurrencySymbol = chainsToNativeSymbols[chain];
    const nativeCurrencyBalance = assets.find(
      (asset) => asset.tokenSymbol === nativeCurrencySymbol
    );
    return nativeCurrencyBalance ? +nativeCurrencyBalance.balance : 0;
  };
  
  export const getAllNativeCurrencyBalances = async (walletAddress: string) => 
{
    const balances: { [key in Blockchain]?: number } = {};
    for await (const chain of listOfChains) {
      const nativeCurrencyBalance = await getNativeCurrencyBalance(
        walletAddress,
        chain
      );
      balances[chain] = nativeCurrencyBalance;
    }
    return balances;
  };
  
  export const getNfts = async (walletAddress: string) => {
    const { assets } = await provider.getNFTsByOwner({
      walletAddress,
      // blockchain: 'eth',
    });
    return assets;
  };
  
``` 
And with that, we have our `api.ts` file all ready where we created methods for getting account balance, calculation net worth, fetching balances by native tokens and getting NFTs by owner. You can also find the complete code for this file below: 


```javascript
import AnkrscanProvider from '@ankr.com/ankr.js';
import type { Blockchain } from '@ankr.com/ankr.js/dist/types';

const provider = new AnkrscanProvider('');

//defining the list of supported blockchains
const listOfChains: Blockchain[] = ['eth', 'arbitrum', 'avalanche', 
'bsc', 'fantom', 'polygon', ];

//key-value pair mapping of chains to their native symbols
export const chainsToNativeSymbols: { [key in Blockchain]: string } = {
  eth: 'ETH',
  arbitrum: 'ETH',
  avalanche: 'AVAX',
  bsc: 'BNB',
  fantom: 'FTM',
  polygon: 'MATIC',
};

//getAccountBalance function to fetch coins and their respective token balances
export const getAccountBalance = async (
  walletAddress: string,
  blockchain: Blockchain
) => {
  return provider.getAccountBalance({
    walletAddress,
    blockchain,
  });
};

//use getAccountBalance to sum total balance across chains
export const getTotalMultichainBalance = async (walletAddress: string) => {
  let total = 0;
  for await (const chain of listOfChains) {
    const { totalBalanceUsd, assets } = await getAccountBalance(
      walletAddress,
      chain
    );
    total += +totalBalanceUsd;
  }
  return total;
};

export const getNativeCurrencyBalance = async (
    walletAddress: string,
    chain: Blockchain
  ) => {
    const { assets } = await getAccountBalance(walletAddress, chain);
    const nativeCurrencySymbol = chainsToNativeSymbols[chain];
    const nativeCurrencyBalance = assets.find(
      (asset) => asset.tokenSymbol === nativeCurrencySymbol
    );
    return nativeCurrencyBalance ? +nativeCurrencyBalance.balance : 0;
  };
  
  export const getAllNativeCurrencyBalances = async (walletAddress: string) => {
    const balances: { [key in Blockchain]?: number } = {};
    for await (const chain of listOfChains) {
      const nativeCurrencyBalance = await getNativeCurrencyBalance(
        walletAddress,
        chain
      );
      balances[chain] = nativeCurrencyBalance;
    }
    return balances;
  };
  
  export const getNfts = async (walletAddress: string) => {
    const { assets } = await provider.getNFTsByOwner({
      walletAddress,
      // blockchain: 'eth',
    });
    return assets;
  };
  

``` 


## Creating Components and Frontend
In this section, we will work on `App.tsx` file where we will create some components that will interact with our functions in `api.ts` file and build frontend to display the results on our webpage. Here's the code for the `App.tsx` file: 

**File:** `src/App.tsx`
```javascript
import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { Blockchain, Nft } from '@ankr.com/ankr.js/dist/types';
import { useEffect, useMemo, useState } from 'react';
import { useAccount } from 'wagmi';
import {
  chainsToNativeSymbols,
  getAllNativeCurrencyBalances,
  getNfts,
  getTotalMultichainBalance,
} from './api';

function App() {
  const [totalBalance, setTotalBalance] = useState<number>();
  const [allNativeBalances, setAllNativeBalances] = useState<{
    [key in Blockchain]?: number;
  }>({});
  const [nfts, setNfts] = useState<Nft[]>([]);

  const nativeBalancesSorted = useMemo(() => {
    // sort allNativeBalances by value, descending and convert it back to an object
    const res = Object.entries(allNativeBalances).sort(([, a], [, b]) => b - a);
    return res;
  }, [allNativeBalances]);

  const { address } = useAccount();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      if (!address) {
        return;
      }
      const totalBal = await getTotalMultichainBalance(address);
      const nativeBalances = await getAllNativeCurrencyBalances(address);
      const nfts = await getNfts(address);
      setAllNativeBalances(nativeBalances);
      setTotalBalance(Math.round(totalBal));
      setNfts(nfts);
      setLoading(false);
    })();
  }, [address]);

  return (
    <div className="flex flex-col items-center py-8">

        <h1 className="flex justify-center text-sm sm:text-base md:text-3xl lg:text-4xl pb-10">
          DefiDashboard 🪙 What's in your Wallet?
        </h1>
        
        <div className="flex justify-center">
          <ConnectButton showBalance={false}/>
        </div>
        <div className="flex gap-6 mt-8">
        <div className='flex flex-col'>
          {/* Net worth */}
          {totalBalance && (
            <div className='bg-[#f1f5f9] py-4 px-8 rounded flex flex-col w-[300px] items-center mt-20'>
              <h3 className='text-blue-800 font-bold'>Net Worth</h3>
              <span className='text-3xl '>${totalBalance}</span>
            </div>
          )}

          {/* Native currency balances */}
          {nativeBalancesSorted.length > 0 && (
            <div className='bg-[#f1f5f9] py-4 px-8 rounded flex flex-col mt-4 w-[300px] items-center'>
              <h3 className='text-blue-800 font-bold'>Wallet</h3>
              <ul className='mt-4 flex flex-col gap-2'>
                {nativeBalancesSorted.map(([chain, bal], idx) => (
                  <li key={chain + idx} className='capitalize flex flex-col'>
                    <span>{chain}</span>
                    <span className='font-bold text-2xl'>
                      {/* @ts-expect-error */}
                      {bal.toFixed(2)} {chainsToNativeSymbols[chain]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* NFTs section */}
        {nfts.length > 0 && (
          <div className='mt-8'>
            <h3 className='font-bold text-3xl text-blue-800 text-center'>
              NFTs
            </h3>
            <div className='grid grid-cols-3 gap-6'>
              {nfts.map((nft) => {
                const id = `${nft.contractAddress}/${nft.tokenId}`;

                return (
                  <div
                    key={id}
                    className='bg-[#f1f5f9] py-4 px-8 rounded flex flex-col mt-4 w-[200px] items-center'
                  >
                    <img src={nft.imageUrl} className='w-32 h-32 rounded-lg' />
                    <h3 className='text-blue-800 font-bold mt-2'>{nft.name}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        )}      
  </div>
</div>
  );
}

export default App;

``` 
Woah, that's a lot of code that we wrote! Now comes the crunch as we run our dApp in the local dev environment. 


```
yarn dev
``` 

You should now be able to view your net-worth, balances by chain and their native token and ofc the NFTs!! 
<br></br>
<img src="/docs/build/dash04.png" alt="API" class="responsive-pic"  />
