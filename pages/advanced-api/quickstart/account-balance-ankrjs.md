import { Code } from "components";
import { Bleed } from "nextra-theme-docs";
import { Callout } from "nextra-theme-docs";
import Image from 'next/image';

# Query Account Balance across Multiple Blockchains using AnkrJS

Fetch account balance across multiple blockchains:

- ETH
- Polygon
- BSC
- Fantom
- Avalanche
- Arbitrum 
- Syscoin 
- Optimism.

In this tutorial, we’ll be fetching the account balances from multiple blockchains such as Ethereum, Polygon, and Fantom, to name a few, using [Advanced APIs](https://www.ankr.com/advanced-api/)↗.

## Getting Started

**Prerequisite:** To successfully finish this guide, you'll need [Node.js](https://nodejs.org/en/)↗ and [Yarn](https://yarnpkg.com/)↗ installed on your machine.

### Step 1: Setting Up Next.js Starter Application
First up, navigate into the directory of your choice where you want to initiate this project and run the following command in your terminal to set up a new Next.js starter page:

```
yarn create next-app --ts ankrjs-account-balance
```

You'll be able to see a couple of files and folders being created for you. Let's dive into the newly created directory and start the development server on localhost:3000.

```
cd ankrjs-account-balance
```
```
yarn dev
```

Visit localhost:3000 to view the starter application and it will resemble the screen attached below: 
<br></br>

<img src="/docs/build/nextjs.png" alt="API" class="responsive-pic"  />


### Step 2: Installing and Setting Up Ankr.js

In this section, we will install and set up Ankr.js for querying account balances across multichains.

We will start by installing the ankr.js package from npm:

```
yarn add @ankr.com/ankr.js
```

Now that we have installed the Ankr.js library, let's set up Ankr.js by **creating a new file** named `apis.ts` at the root of your project directory. We will initialize Ankr.js in this file.

**File:** `./apis.ts`
```javascript
import AnkrscanProvider from '@ankr.com/ankr.js';
import type { Blockchain } from '@ankr.com/ankr.js/dist/types';

const provider = new AnkrscanProvider('');

```
To interact with Ankr's Advanced APIs, we have created a provider instance that will serve as an interface to the APIs required to fetch data.


### Step 3: Creating Function to Fetch Total Balance

In this step, we will first create a `getAccountBalance` function in the `./apis.ts` file, which will accept a `walletAddress`, and return the coin and the respective token balance. Here we are going to utilize the [getAccountBalance](https://documenter.getpostman.com/view/19024547/UVsEVUGQ#74b5cc68-fba2-415c-a53b-28c08818f970)↗ method provided by Ankr.js. 

File: `./apis.ts`

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
export const getAccountBalance = async (walletAddress: string) => {
  return provider.getAccountBalance({
    walletAddress,
  });
};

```

Let's call this function on our page i.e. `./pages/index.tsx` to check the account balances. To do so, clear the code from the **index.tsx** file and replace it with the one given below:

**File:** `./pages/index.tsx`

```javascript
import { useEffect } from 'react';

import {
  getAccountBalance,
} from '../apis';

function App() {

  useEffect(() => {
    (async () => {
      const  total  = await getAccountBalance(
        "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
      );
      console.log({ total });
    })();
  }, []);

  return (
    <div className='p-10 flex flex-col items-center'>
      <h1 className='text-3xl font-bold'>Account Balance</h1>
    </div>
  );
}

export default App;

```

Now, let's see the Account Balances of an inputted wallet address in the developer console of a browser. 

- Head over to your localhost and use `Option + ⌘ + J` (on macOS), or `Shift + CTRL + J` (on Windows/Linux). 

You should be able to see the list of chains with their respective tokens and account balances. 
<br></br>

<img src="/docs/build/accbalance.png" alt="API" class="responsive-pic"  />


## [Optional]: Calculating the Net Worth

To calculate the sum of balances (net worth) across the chains we will create a new function in the `apis.ts` file and let's call it **getTotalMultichainBalance**.

File: `./apis.ts`

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
Let's call this function on our page to check the total account balance. 

**File:** `./pages/index.tsx`
```javascript
import { useEffect } from 'react';

import {
  getTotalMultichainBalance,
} from '../apis';

function App() {

  useEffect(() => {
    (async () => {
      const  total  = await getTotalMultichainBalance(
        "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
      );
      console.log({ total });
    })();
  }, []);

  return (
    <div className='p-10 flex flex-col items-center'>
      <h1 className='text-3xl font-bold'>Net Worth</h1>
    </div>
  );
}

export default App;

```
Let's see the net worth of an inputted wallet address in the developer console of a browser.

Head over to your localhost and use Option + ⌘ + J (on macOS), or Shift + CTRL + J (on Windows/Linux).

You should be able to see the net worth.
<br></br>
<img src="/docs/build/networth.png" alt="API" class="responsive-pic"/>


