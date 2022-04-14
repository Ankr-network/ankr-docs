---
title: BSC Full Node with Erigon
id: erigon-bsc
---

# Launching a full node on Binance Smart Chain with Erigon

**By Corey Wooten**
<br/>

![Erigon Ankr Binance banner](https://i.imgur.com/S3k5JAw.png)

## **Introduction**

**This tutorial will demonstrate the following processes:**

1. Configuring the remote server to run a full node.
2. Building the Erigon Client on Binance Smart Chain from the source code.
3. Using Erigon to deploy the full node on Binance Smart Chain.

## **00 Getting started**

### 0.1 Essential hardware

| Specifications            | Hardware Requirements                                                          |
| ------------------------- | ------------------------------------------------------------------------------ |
| **System**                | Mac, Linux, or Windows machine with the latest operating system (OS) installed |
| **Server OS**             | Linux Ubuntu                                                                   |
| **Free Hard Drive Space** | 2 TB                                                                           |
| **RAM**                   | 16 GB                                                                          |

### 0.2 Essential software

| Specifications                 | Software Requirements                                                                                                                    |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Terminal Emulator**          | **Linux**: Terminal (native) - **Mac OS**: Terminal (native), Termius (free/paid) - **Windows**: Windows Terminal (native), PuTTy (free) |
| **Recommended Settings**       | SSH Enabled, TDP/UDP traffic enabled                                                                                                     |
| **Virtual Machine (Optional)** | [Ubuntu Desktop](https://ubuntu.com/download/desktop), [Ubuntu Server](https://ubuntu.com/download/server)                               |

### 0.3 Enabling / disabling Secure Shell (SSH)

To access the remote server, the user must enable Secure Shell (SSH) on their system.

```shell
# Enable SSH
sudo systemsetup -setremotelogin on
Password: [*****]   # System password
```

```shell
# Disable SSH
sudo systemsetup -setremotelogin off
```

## **01 Updating and configuring the server**

### **1.1 Connect to the server via SSH**

```shell
# Log in with your server admin credentials

ssh <your_username>@<server_ip_address>
Password: [*****]
```

_Tip:_

```shell
# To suspend the connection...
CTRL+Z  # For Windows/Linux
CMD+Z   # For Mac
```

### **1.2 System updates and installations**

#### 1.2.1 Run Linux updates

```shell
# Update Linux OS, upgrade packages, remove outdated programs
sudo apt update && sudo apt-dist upgrade -y && sudo apt autoremove -y
```

#### 1.2.2 Install Go – ([Get it Here](https://go.dev/doc/install))

```shell
# Download & extract the latest version of Go (current: v1.17.8)
wget -c https://go.dev/dl/go1.17.8.linux-amd64.tar.gz && sudo tar -C /usr/local -xzf go1.17.8.linux-amd64.tar.gz
```

```shell
# Create a new directory
# Set the $GOPATH environment variable
# Set the $PATH variable to include $GOROOT and $GOPATH

mkdir ~/.go
GOROOT=/usr/local/go && GOPATH=~/.go && PATH=$PATH:$GOROOT/bin:$GOPATH/bin
```

```shell
# Replace existing Go version with the latest version
sudo update-alternatives --install "/usr/bin/go" "go" "/usr/local/go/bin/go" 0 && update-alternatives --set go /usr/local/go/bin/go
```

```shell
# Check for updated version
go version
```

![Go version screenshot](https://i.imgur.com/VwU0csKm.png)

#### 1.2.3 Create the server's home folder

```shell
mkdir ~/srv/svc && cd srv/svc
```

#### 1.2.4 Install the essential Ubuntu packages

```shell
# Run as super ('sudo') user

apt install snap
apt install npm
apt install git
apt install make
apt install mdadm

# Install Axel with Snap package

snap install axel
```

## **02 Building the Erigon client**

### **2.1 Install Build essentials**

```shell
apt install build-essential
```

### **2.2 Clone the Erigon repository**

```shell
git clone https://github.com/ledgerwatch/erigon --recursive
```

![github repo](https://i.imgur.com/0iHCODNl.jpg)

### **2.3 Create a new folder to run Erigon**

```shell
mkdir erigon && cd erigon
make all
```

### **2.4 Review the Erigon files**

```shell
cd build/bin
echo $PATH
ls -ai
```

![Erigon Directory](https://i.imgur.com/UsjQJoWl.jpg)

### **2.5 Copy the Erigon files to the local directory**

```shell
sudo cp ./* /usr/local/bin
```

### **2.6 Move back into the Erigon folder**

```shell
cd ~/srv/svc/erigon/
cd ..
```

### **2.7 Verify the launch path**

```shell
which erigon
```

### **2.8 Show Erigon commands**

```shell
erigon --help
```

## **03 Running the BSC node with Erigon**

### **3.1 Update your erver's security settings**

#### 3.1.1 Block unauthorized access with Fail2Ban

```shell
sudo apt install fail2ban -y
```

#### 3.1.2 Activate Ubuntu firewall

```shell
# Check the Ubuntu Firewall (ufw) status
# Activate Ubuntu Firewall

sudo ufw status
sudo ufw allow ssh
```

![UFW](https://i.imgur.com/ur9Y2qyl.jpg)

### **3.2 Sync with Binance Smart Chain**
_This step will likely take a while to complete._

#### 3.2.1 Sync normally

```shell
erigon --chain=bsc --datadir=/srv/svc --metrics --metrics.addr=0.0.0.0 --metrics.port=6060 --private.api.addr=0.0.0.0:9090 --pprof --pprof.addr=0.0.0.0 --pprof.port=6061
```

#### 3.2.2 Sync in the background

```shell
nohup bash -c 'erigon --chain=bsc --datadir=/srv/svc --metrics --metrics.addr=0.0.0.0 --metrics.port=6060 --private.api.addr=0.0.0.0:9090 --pprof --pprof.addr=0.0.0.0 --pprof.port=6061'
```

![BSC Sync](https://i.imgur.com/b5d6ZHTl.jpg)

### **3.3 Monitor your node's performance with [NetData](https://netdata.cloud/) (optional)**

1. Register for a free account.
2. Log into the user portal and select "**Connect Nodes.**"
3. Copy the provided script and run it in the terminal.

```shell
wget -O /tmp/netdata-kickstart.sh...
```

![NetData](https://i.imgur.com/mIKbvb2l.jpg)
