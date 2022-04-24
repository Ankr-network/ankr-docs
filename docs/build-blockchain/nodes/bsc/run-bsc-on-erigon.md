---
title: Run BSC Node on Erigon
id: run-bsc-node-on-erigon
---

# Run BSC node on Erigon

## Introduction

This guide will walk you through 3 options for setting up and launching a BSC Node on Erigon. 

Here are the main benefits of running BSC on Erigon:

* Drastically reduced disk storage - 1.2TB for Archive Node, 430GB for Pruned Node. 
* Faster sync speed > 10 blocks per second 
* Fully bootstrapped archive node in <3days. 
* Crash resilience - Erigon’s database can withstand power failures. Modularity - P2P and web3 RPC services can be run as components.

If you want to be able to run a node without buying vast disk space then Erigon is going to make a massive difference.
:::note
This guide was written for an Ubuntu Server 20.04 LTS
:::

## 00 Prerequisites

| Storage          | 2TB on a single partition, 1.6TB state 200GB temp files (can symlink or mount folder `<datadir>/etl-tmp` to another disk). |
|------------------|--------------------------------------------------------------------------------------------------------------------------|
| RAM              | 16GB                                                                                                                     |
| OS               | 64-bit  Linux                                                                                                            |
| Network settings | Open up Port 22 for SSH  Static IP settings                                                                              |

## Option A: Build from Sources

This option involves compiling and building from the latest development code.

:::warning
BE AWARE: 
This section is still being tested. We recommend the Docker options whilst this is under review. 11th Feb 2022
:::

### 01 Install Dependencies

1. Check you have Go installed. It should be at least version 1.16.

    ```
    go version 
    ```
    
    ```
    wget https://go.dev/dl/go1.17.6.linux-amd64.tar.gz
    sudo tar -xvf go1.17.6.linux-amd64.tar.gz
    sudo mv go /usr/local
    export PATH=$PATH:/usr/local/go/bin && echo "export PATH=$PATH:/usr/local/go/bin" >> ~/.profile
    ```

2. Install Build Essentials
    ```
    sudo apt update && sudo apt install build-essential
    ```
   
### 02 Clone Repository
1. Create an /srv/svc Directory and move into it.
    ```
    # -p flag ensures all files are included. 
    mkdir -p /srv/svc
    cd /srv/svc
    ```

2. Clone BSC Erigon Repo and Launch the Node
   :::info
   Binance Smart Chain mode is available on the develop branch
   ::: 

    ```   
    git clone https://github.com/ledgerwatch/erigon --recursive
    ```
   
    ```
    git checkout devel
    ```
    
    ```
    make all
    ```

   You can see the sequence of updates as follows:
   ```
   Builds erigon
   Builds hack
   Builds rpctest
   Builds state
   Builds pics
   Builds rpcdaemon
   Builds integration tests
   Builds MDBX DB File
   Builds Sentry
   Builds txpool
   ```

   To view all commands run the following
   `erigon --help`

### 03 Run Node

1. Run Erigon in BSC mode using binaries:

    ```
    # for the node
    erigon --chain=bsc --datadir=/srv/svc --metrics --metrics.addr=0.0.0.0 --metrics.port=6060 --private.api.addr=0.0.0.0:9090 --pprof --pprof.addr=0.0.0.0 --pprof.port=6061
    
    # for rpcdaemon
    rpcdaemon --datadir=/srv/svc --private.api.addr=erigon:9090 --txpool.api.addr=erigon:9090 --http.addr=0.0.0.0 --http.vhosts=* --http.corsdomain=* --http.api=eth,debug,net,trace,txpool --ws
    ```
   You should see something like this:

    ```
    $ erigon --chain=bsc --datadir=~/datadir --metrics --metrics.addr=0.0.0.0 --metrics.port=6060 --private.api.addr=0.0.0.0:9090 --pprof --pprof.addr=0.0.0.0 --pprof.port=6061
    INFO[02-04|12:44:08.488] Starting metrics server                  addr=http://0.0.0.0:6060/debug/metrics/prometheus
    INFO[02-04|12:44:08.491] Starting pprof server                    cpu="go tool pprof -lines -http=: http://0.0.0.0:6061/debug/pprof/profile?seconds=20" heap="go tool pprof -lines -http=: http://0.0.0.0:6061/debug/pprof/heap"
    INFO[02-04|12:44:08.492] Build info                               git_branch=devel git_tag=v2021.12.03 git_commit=502e933029b6d9b8b06e13f2561109434ddb8a35
    INFO[02-04|12:44:08.492] Starting Erigon on                       devnet=bsc
    INFO[02-04|12:44:08.502] Maximum peer count                       ETH=100 total=100
    INFO[02-04|12:44:08.504] Set global gas cap                       cap=50000000
    ```    

Start making requests.    

## Option C: Docker Compose

1. Install `make`, `docker` and `docker-compose` on your local machine.

2. Edit `docker-compose.bsc.yml` as follows:

    ```
    version: '2.2'
    services:
      erigon:
        #image: thorax/erigon:devel
        image: ankrnetwork/erigon-for-bsc:latest
        command: erigon --chain=bsc --datadir=/srv/svc --metrics --metrics.addr=0.0.0.0 --metrics.port=6060 --private.api.addr=0.0.0.0:9090 --pprof --pprof.addr=0.0.0.0 --pprof.port=6061
        #command: "sh /datadir/check.bash"
        volumes:
          - /root/svc/erigon:/datadir
        ports:
          - "30303:30303/tcp"
          - "30303:30303/udp"
          - "30304:30304/tcp"
          - "30304:30304/udp"
          - "9090:9090"
        restart: unless-stopped
      rpcdaemon:
        #image: thorax/erigon:devel
        image: ankrnetwork/erigon-for-bsc:latest
        command: rpcdaemon --datadir=/srv/svc --private.api.addr=erigon:9090 --txpool.api.addr=erigon:9090 --http.addr=0.0.0.0 --http.vhosts=* 
        --http.corsdomain=* --http.api=eth,debug,net,trace,txpool --ws
        pid: service:erigon # Use erigon's PID namespace. It's required to open Erigon's DB from another process (RPCDaemon local-mode)
        volumes:
          - /root/svc/erigon:/srv/svc
        ports:
          - "8545:8545"
          - "8546:8546"
        restart: unless-stopped
      nginx:
        image: nginx
        volumes:
          - /root/.acme.sh/:/root/.acme.sh/
          - ./nginx.conf:/etc/nginx/conf.d/00-default.conf
        ports:
          - "443:443"
        restart: always
    ```

3. Run docker-compose up to start your node.

   <br></br>
   With your node up and running you can start to make calls.

## Option B: Build from Docker

This option automatically builds from the latest docker image. 

1. Install Docker
   
   * Verify Installation
   
    ```
    docker --version
    ```
   * Get Docker. Read [how to get Docker](https://docs.docker.com/get-docker/).
2. Create Container and run over image

    ```
    docker run -it ankrnetwork/erigon-for-bsc:latest erigon --chain=bsc --datadir=/srv/svc --metrics --metrics.addr=0.0.0.0 --metrics.port=6060 --private.api.addr=0.0.0.0:9090 --pprof --pprof.addr=0.0.0.0 --pprof.port=6061
    ```
