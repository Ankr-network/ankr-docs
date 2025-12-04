import { Web3APIButtonLazy } from 'components/Web3APIButton';
import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
  index: 'Welcome to Ankr Docs',
  'info-map': 'Information Map',
  privacy: 'Privacy Policy',
  'whats-new': "What's New",
  '-- Building': {
    title: 'Building With Ankr',
    type: 'separator',
  },
  'rpc-service': 'Node API',
  'advanced-api': 'Advanced API',
  'node-snapshot': 'Blockchain Node Snapshots',
  'node-runners': {
    display: 'hidden',
    title: 'Node Runners',
  },
  automation: 'Contract Automation',
  '-- Tutorials': {
    title: 'Ankr Tutorials',
    type: 'separator',
  },
  'basic-tutorials': 'Basic Tutorials',
  'smart-contract-tutorials': 'Smart Contract Development',
  'advanced-tutorials': 'Advanced Tutorials',
  '-- Scaling with Asphere': {
    type: 'separator',
    title: 'Scaling with Asphere',
  },
  'scaling-services-overview': 'Scaling Services Overview',
  'scaling-services-nocode-deployer': 'No-Code Deployer',
  'scaling-services-bsi': 'Bitcoin Secured Infrastructure',
  'scaling-services-rollups': 'Rollups',
  'scaling-services-sidechains': 'Sidechains',
  '-- Staking': {
    title: 'Staking With Ankr',
    type: 'separator',
  },
  'staking-overview': 'Overview',
  'staking-for-developers': 'For Developers',
  'delegated-staking': 'Delegated Staking',
  'liquid-staking': 'Liquid Staking',
  'liquid-crowdloan': 'Liquid Crowdloan',
  defi: 'DeFi',
  bridge: 'Bridge',
  switch: 'Switch',
  'staking-extra': 'Extra',
  '-- Gaming': {
    title: 'Making Games',
    type: 'separator',
  },
  'gaming-overview': 'Mirage Gaming',

  '-- Support': {
    title: 'Support',
    type: 'separator',
  },
  support: {
    href: 'https://ankrnetwork.atlassian.net/servicedesk/customer/portal/10',
    title: 'Request Support',
  },
  'knowledge-base': {
    href: 'https://ankrnetwork.atlassian.net/wiki/spaces/EUSKB/overview',
    title: 'Knowledge Base',
  },
  ankr: {
    href: 'https://ankr.com',
    title: 'To Ankr',
    type: 'page',
  },
  web3APIButton: {
    title: <Web3APIButtonLazy visibility="mobile" />,
    type: 'separator',
  },
};

export default meta;
