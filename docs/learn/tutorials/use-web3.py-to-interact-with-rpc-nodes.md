---
title: Connect to RPCs - Python
id: connect-web3py
---

# 🐍 Use web3.py to interact with RPC nodes

**By Anita Diamond**
<br/>

This tutorial explains how to use the web3.py library to connect and interact with Ethereum nodes.

You can develop two different types of applications with Ethereum

**1. Smart contracts** 
- Writing programs that run on the blockchain with the Solidity programming language. 

**2. Clients**
- Clients that talk to the blockchain - code that reads and writes new transaction data or executes business logic from smart contracts.

Use **web3.py** to do the second.

### What do we mean by clients?

By clients, we mean transacting with the blockchain by reading information from it, writing new transaction data to it or executing business logic with smart contracts.

:::info

“Ethereum node” and “Ethereum client” are used interchangeably. 
In either case, it refers to the software that a participant in the Ethereum network runs. This software can read block data, receive updates when new blocks are added to the chain ("mined"), broadcast new transactions, and more.
:::

### About Web3.py

Web3.py is a collection of libraries that enable you to create clients and applications that connect with the Ethereum blockchain.

Web3.py allows us to make RPC API requests to the Ethereum network with JSON RPC, (which stands for "Remote Procedure Call" protocol). It's very similar to making HTTP requests to a JSON API on a web server.

## 00 - Let's get started

1) **Install Python or verify installation**

We need to use Python3 so let's install it.

:::caution

Installing Python can be highly problematic. It can be useful and easier to set up inside a virtual environment instead.

This way you can create an isolated Python installation without interfering with the system Python interpreter. Using virtual environments requires the installation of the “virtualenv” package (for further documentation, visit this [tutorial](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)).
:::

Verify existing installation

```python
python --version
```

OR:

```python
python3 --version
```

**2. Install web3.py library**

Install the Web3.py library with `pip` in your shell/terminal like this:

```python
pip3 install web3
```

## 01 - Connect to Ankr RPC nodes

You could run your own Ethereum node but this requires you to download a HUGE QUANTITY of data from the blockchain and keep it in sync. This is a huge headache if you've ever tried to do this before.

It’s way easier to _**get started straight away with a remote node for free**_.

You can use the Ankr Public RPC node for free with any of our open access public URLs.

In this example, we'll be interacting with the Ethereum Network.

```
https://rpc.ankr.com/eth
```

:::info

You can also use **10000 ANKR** tokens to access exclusive premium endpoints, websockets and prioritized requests by launching the [**Ankr Protocol app**](https://www.ankr.com/ankr-protocol/) and signing up for the premium plan.
:::

1**. Run the Python Shell**

```
python3
```

:::tip 

You know you are in the shell as you see $.
You know you are in the console when you see >>>
:::

2**. Create a Python script**

Use your favourite code editor to write a script. e.g. VSCode.&#x20;

Name it `rpc-eth.py`

3**. Import Web3.py library**

Add the following to your script:

```python
from web3 import Web3
```

This creates a variable to connect to.

5**. Assign RPC URL**

To generate a Web3 connection we must assign the Ankr RPC URL.

Add the following to your script:

```
ankr_url = 'https://rpc.ankr.com/eth'
```

## 02 - Instantiate a live connection

Now you can instantiate a live Web3 connection to communicate with the ethereum mainnet.

**1. Add the following to your script**

```
web3 = Web3(Web3.HTTPProvider(ankr_url))
```

**2. **Check you are connected**

Add the following to your script:

```
print(web3.isConnected())
```

**3. Run your script**

To run the script in the command line, change to its directory and type:

```python
./Python3 rpc-eth.py
```

You should see `True` similar to this:

![Python true](python-true.png)

(If you don’t see ‘`true`’, in the first instance troubleshoot your Python installation and consider setting up an environment. (See earlier Note)).

:::info
We have now successfully connected to the Ankr Public RPC Ethereum Node.
:::

## 03 - Let's make some requests

Now we're set up, our instance allows us to get interesting information.

:::tip

The **web3.eth** object exposes the properties and methods to interact with the RPC APIs under the eth_ namespace.

Often, when a property or method returns a mapping of keys to values, it will return an **`AttributeDict`** which acts like a **`dict`** but you can access the keys as attributes and cannot modify its fields.
:::



#### Web3.eth.get_block()

This requests allows us to get a block by its number.

For example:

```
web3.eth.get_block(12345)
```

Example Response:

```
AttriAttributeDict({'difficulty': 735512610763, 'extraData': HexBytes('0x476574682f76312e302e302f6c696e75782f676f312e342e32'), 'gasLimit': 5000, 'gasUsed': 0, 'hash': HexBytes('0x767c2bfb3bdee3f78676c1285cd757bcd5d8c272cef2eb30d9733800a78c0b6d'), 'logsBloom': HexBytes('0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'miner': '0xad5C1768e5974C231b2148169da064e61910f31a', 'mixHash': HexBytes('0x31d9ec7e3855aeba37fd92aa1639845e70b360a60f77f12eff530429ef8cfcba'), 'nonce': HexBytes('0x549f882c5f356f85'), 'number': 12345, 'parentHash': HexBytes('0x4b3c1d7e65a507b62734feca1ee9f27a5379e318bd52ae62de7ba67dbeac66a3'), 'receiptsRoot': HexBytes('0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421'), 'sha3Uncles': HexBytes('0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347'), 'size': 539, 'stateRoot': HexBytes('0xca495e22ed6b88c61714d129dbc8c94f5bf966ac581c09a57c0a72d0e55e7286'), 'timestamp': 1438367030, 'totalDifficulty': 3862140487204603, 'transactions': [], 'transactionsRoot': HexBytes('0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421'), 'uncles': []})

```

