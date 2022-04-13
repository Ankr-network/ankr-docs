---
title: How to Launch a BAS
id: bas-how-to-launch
---

To launch a BAS, follow these steps:

1. Install Docker with Docker Compose:
    ```
    #!/bin/bash
    
    # Docker for ubuntu 
    apt-get update
    apt-get inst`a`ll -y \
        apt-transport-https \
        ca-certificates \
        curl \
        software-properties-common
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
    apt-key fingerprint 0EBFCD88
    add-apt-repository \
       "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
       $(lsb_release -cs) \
       stable"
    apt-get update
    apt-get install -y  docker-ce
    curl -L https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
    
    echo "{\"dns\": [\"1.1.1.1\"],
     \"log-driver\": \"json-file\",
     \"log-opts\": { \"max-size\": \"50m\", \"max-file\": \"3\" }
    }" > /etc/docker/daemon.json
    
    service docker restart
    
    # Swap
    fallocate -l 4G /swapfile
    chmod 600 /swapfile
    mkswap /swapfile
    swapon /swapfile
    echo '/swapfile none swap sw 0 0' | tee -a /etc/fstab
    
    sysctl vm.swappiness=10
    sysctl vm.vfs_cache_pressure=50
    echo 'vm.swappiness=10' >> /etc/sysctl.conf
    echo 'vm.vfs_cache_pressure=50' >> /etc/sysctl.conf
    ```
2. Clone BAS template to your machine and `cd` to it:
    ```
    git clone https://github.com/Ankr-network/bas-template-bsc.git
    cd bas-template-bsc
   ```
3. Run a DevNet with 5 validators from the cloned sources:
   ```
   docker-compose -f ./docker-compose.build.yaml up --build -d
   ```
:::note
   it runs containers w/o volumes
:::

   If you want to run from Docker images, use this command:
   ```
   docker-compose up --build -d
   ```
4. Access an endpoint. Now you can request, for example, byte code of the staking smart contract:
   ```
   curl --data '{"method":"eth_getCode","params":["0x0000000000000000000000000000000000001000","latest"],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST http://localhost:8545
   ```