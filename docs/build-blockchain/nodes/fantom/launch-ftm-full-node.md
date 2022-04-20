---
title: Run a Fantom Full Node
id: ftm-node-full
---

# Run a Fantom full node

## 00 Prerequisites

### Minimal Hardware Requirements
* 4 core
* 8 RAM
* 1.5TB SSD

Recommended Hardware Requirements
* 8 core
* 16 RAM
* 1.5TB SSD
* Ubuntu Server 20.04 LTS (64-bit).

Network Settings
* Open port 22 for SSH
* Open port 5050 for both TCP and UDP traffic

## 01 Install Dependencies
Whilst logged in as the new user via SSH

1.1 Install required Build Tools:

```
# Install build-essentials
$ sudo apt-get install -y build-essential
```

1.2 Install Go
```# Install go
$ wget https://dl.google.com/go/go1.15.10.linux-amd64.tar.gz
$ sudo tar -xvf go1.15.10.linux-amd64.tar.gz
$ sudo mv go /usr/local
```

   * Export the required Go paths:
    ```
    # Export go paths
    $ vi ~/.bash_aliases
    
    # Append the following lines
    export GOROOT=/usr/local/go
    export GOPATH=$HOME/go
    export PATH=$GOPATH/bin:$GOROOT/bin:$PATH
    ```

   * Verify your Go installation
    ```
    # Verify go installation
    $ go version
    ```
   
## 02 Checkout and build go-opera

```
# Checkout and build go-opera
$ git clone https://github.com/Fantom-foundation/go-opera.git
$ cd go-opera/
$ git checkout release/1.0.2-rc.5
$ make
```

   * Verify your Opera installation
```
$./build/opera help
VERSION:1.0.2-rc.5
```

   * Ensure you have the latest version of a node for the Opera Network by checking [this Fantom repo](https://github.com/Fantom-foundation/lachesis_launch).

# 03 Run your Node

1.Download the Genesis file
```
mkdir -p $HOME/fantom
wget https://opera.fantom.network/mainnet.g - P $HOME/fantom/
```
2. Start a read-only node
```
./build/opera --metrics  --cache 64000 --genesis
$HOME/fantom/mainnet.g --nousb --http --http.addr '0.0.0.0' --http.port 8545 --http.corsdomain "*" --http.vhosts "*" --ws --ws.addr '0.0.0.0' --ws.port 8546  --ws.origins '0.0.0.0' --graphql --graphql.corsdomain '*' --graphql.vhosts '*' --datadir "$HOME/fantom/node" --http.api "net,eth,web3" --ws.api "net,eth,web3"
```
