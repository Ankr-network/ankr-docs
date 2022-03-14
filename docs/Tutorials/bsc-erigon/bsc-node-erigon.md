---
title: Launching a Full Node on Binance Smart Chain with Erigon
id: launching-a-full-node-on-binance-smart-chain-with-erigon
---

![Erigon Ankr Binance banner](https://i.imgur.com/S3k5JAw.png)

# **Launching a Full Node on Binance Smart Chain with Erigon**

## **Introduction**

**This tutorial will demonstrate the following processes:**

1. Configuring the remote server to run a full node.
2. Building the Erigon Client on Binance Smart Chain from the source code.
3. Using Erigon to deploy the full node on Binance Smart Chain.

## **00 Getting Started**

### 0.1 Essential Hardware

| Specifications            | Hardware Requirements                                                          |
| ------------------------- | ------------------------------------------------------------------------------ |
| **System**                | Mac, Linux, or Windows machine with the latest operating system (OS) installed |
| **Server OS**             | Linux Ubuntu                                                                   |
| **Free Hard Drive Space** | 2 TB                                                                           |
| **RAM**                   | 16 GB                                                                          |

### 0.2 Essential Software

| Specifications                 | Software Requirements                                                                                                                    |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Terminal Emulator**          | **Linux**: Terminal (native) - **Mac OS**: Terminal (native), Termius (free/paid) - **Windows**: Windows Terminal (native), PuTTy (free) |
| **Recommended Settings**       | SSH Enabled, TDP/UDP traffic enabled                                                                                                     |
| **Virtual Machine (Optional)** | [Ubuntu Desktop](https://ubuntu.com/download/desktop), [Ubuntu Server](https://ubuntu.com/download/server)                               |

### 0.3 Enabling / Disabling Secure Shell (SSH)

To access the remote server, the user must enable Secure Shell (SSH) on their system.

```Shell
# Enable SSH

sudo systemsetup -setremotelogin on
Password: [*****]   # System password
```

```Shell
# Disable SSH

sudo systemsetup -setremotelogin off
```

## **01 Updating and Configuring the Server**

### 1.1 Connect to the Server via SSH

```Shell
# Log in with your server admin credentials

ssh <your_username>@<server_ip_address>
Password: [*****]
```

**Tip:**

```Shell
# To suspend the connection...

[CTRL]+[Z]    # For Windows/Linux
[CMD]+[Z]     # For Mac
```

### 1.2 System Updates and Installations

#### 1.2.1 Run Linux Updates

```Shell
# Update Linux OS
# Upgrade packages
# Remove outdated programs

sudo apt update && sudo apt-dist upgrade -y && sudo apt autoremove -y
```

#### 1.2.2 Install Go – ([_Get it Here_](https://go.dev/doc/install))

```Shell
# Download & extract the latest version of Go
# Current: v1.17.8

wget -c https://go.dev/dl/go1.17.8.linux-amd64.tar.gz && sudo tar -C /usr/local -xzf go1.17.8.linux-amd64.tar.gz
```

```Shell
# Create a new directory
# Set the $GOPATH environment variable
# Set the $PATH variable to include $GOROOT and $GOPATH

mkdir ~/.go

GOROOT=/usr/local/go && GOPATH=~/.go && PATH=$PATH:$GOROOT/bin:$GOPATH/bin
```

```Shell
# Replace existing Go version with the latest version

sudo update-alternatives --install "/usr/bin/go" "go" "/usr/local/go/bin/go" 0 && update-alternatives --set go /usr/local/go/bin/go
```

```Shell
# Check for updated version

go version
```

![Go version screenshot](https://i.imgur.com/VwU0csKm.png)

#### 1.2.3 Create the Server's Home Folder

```Shell
mkdir ~/srv/svc && cd srv/svc
```

#### 1.2.4 Install the Essential Ubuntu Packages

```Shell
# Run as super ('sudo') user

apt install snap
apt install npm
apt install git
apt install make
apt install mdadm

# Install Axel with Snap package

snap install axel
```

## **02 Building the Erigon Client**

### 2.1 Install Build Essentials

```Shell
apt install build-essential
```

### 2.2 Clone the Erigon Repository

```Shell
git clone https://github.com/ledgerwatch/erigon --recursive
```

![github repo](https://i.imgur.com/0iHCODNl.jpg)

### 2.3 Create a New Folder to Run Erigon

```Shell
mkdir erigon && cd erigon
make all
```

### 2.4 Review the Erigon Files

```shell
cd build/bin
echo $PATH
ls -ai
```

![Erigon Directory](https://i.imgur.com/UsjQJoWl.jpg)

### 2.5 Copy the Erigon Files to the Local Directory

```shell
sudo cp ./* /usr/local/bin
```

### 2.6 Move Back into the Erigon Folder

```shell
cd ~/srv/svc/erigon/
cd ..
```

### 2.7 Verify the Launch Path

```shell
which erigon
```

### 2.8 List Erigon Commands

```shell
erigon --help
```

## **03 Running the BSC Node with Erigon**

### 3.1 Update Your Server's Security Settings

#### 3.1.1 Block Unauthorized Access with Fail2Ban

```shell
sudo apt install fail2ban -y
```

#### 3.1.2 Activate Ubuntu Firewall

```shell
# Check the Ubuntu Firewall (ufw) status
# Activate Ubuntu Firewall

sudo ufw status
sudo ufw allow ssh
```

![UFW](https://i.imgur.com/ur9Y2qyl.jpg)

### 3.2 Sync with Binance Smart Chain

_Important: This step will likely take a while to complete._

#### 3.2.1 Sync Normally

```shell
erigon --chain=bsc --datadir=/srv/svc --metrics --metrics.addr=0.0.0.0 --metrics.port=6060 --private.api.addr=0.0.0.0:9090 --pprof --pprof.addr=0.0.0.0 --pprof.port=6061
```

#### 3.2.2 Sync in the Background

```shell
nohup bash -c 'erigon --chain=bsc --datadir=/srv/svc --metrics --metrics.addr=0.0.0.0 --metrics.port=6060 --private.api.addr=0.0.0.0:9090 --pprof --pprof.addr=0.0.0.0 --pprof.port=6061'
```

![BSC Sync](https://i.imgur.com/b5d6ZHTl.jpg)

### 3.3 Monitor Your Node's Performance with [NetData](https://netdata.cloud/) (Optional)

1. Register for a free account.
2. Log into the user portal and select "**Connect Nodes.**"
3. Copy the provided script and run it in the terminal.

```shell
wget -O /tmp/netdata-kickstart.sh...
```

![NetData](https://i.imgur.com/mIKbvb2l.jpg)
