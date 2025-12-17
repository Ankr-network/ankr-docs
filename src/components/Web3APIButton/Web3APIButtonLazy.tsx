'use client';

import dynamic from 'next/dynamic';

export const Web3APIButtonLazy = dynamic(
  () => import('./Web3APIButton').then(module => module.Web3APIButton),
  { ssr: false, },
);
