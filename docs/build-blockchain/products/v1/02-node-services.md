---
title: 02 - Node Services
id: node-services
---

# Node services

## FULL NODES

:::warning
The Full Node deployment service for a chain will CEASE once Ankr launches a Developer API service for it. Current full nodes running will have 30 days to move the service over to the API. For most users, this represents a performance improvement at a cost savings.
:::

Full Node Deployment gives you the ability to launch nodes to 45+ chains in minutes on-demand.

This service deploys nodes in containers to bare metal servers.

## Use cases

Full Nodes are useful for building dApps without high performance requirements.

* PROS
    * Instant deployment and nodes on demand
    * Connect your application to the blockchain without complicated configuration
    * Freedom from node management pain
    * Add nodes on demand

* CONS
    * Sync delays with blockchain after initialization. Syncing can take hours, days, and for archive modes, even weeks.
    * Individual nodes aren't optimized for sudden variations in traffic. This can lead to bottlenecks and/or errors.

## Validator nodes (staking nodes)

Ankr offers validator nodes for these chains. These are accessible from [app.ankr.com](https://app.ankr.com/apps/validators) 

We also can run a private ethereum validator through our Institutional Staking experience.