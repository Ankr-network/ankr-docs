import React from 'react';
import Twitter  from '../../public/socials/twitter.svg'
import Telegram  from '../../public/socials/telegram.svg'
import Discord  from '../../public/socials/discord.svg'
import Medium  from '../../public/socials/medium.svg'
import Reddit  from '../../public/socials/reddit.svg'
import Instagram  from '../../public/socials/instagram.svg'
import Youtube  from '../../public/socials/youtube.svg'
import LinkedIn  from '../../public/socials/linkedin.svg'

const ListItem = ({ children }) => (
  <li>{children}</li>
);

const List = ({ title, items }) => (
  <li className='pb-8'>
    <p className='nx-text-lg nx-font-medium nx-mb-2'>{title}</p>
    <ul>
      {items.map((item, index) => (
        <ListItem key={index}>
          <a href={item.href} target="_blank" rel="noreferrer" className={item.className}>
            {item.icon && <item.icon />}
            {item.text}
          </a>
        </ListItem>
      ))}
    </ul>
  </li>
);

const FooterMenu = () => {
  const sections = [
    {
      title: 'Products',
      items: [
        { href: 'https://www.ankr.com/remote-procedure-call/', text: 'Web3 API' },
        { href: 'https://www.ankr.com/staking-crypto/', text: 'Staking' },
        { href: 'https://www.ankr.com/rollup-as-a-service-raas/', text: 'Scaling Services' },
        { href: 'https://www.ankr.com/ankr-automate/', text: 'Automate' },
        { href: 'https://www.ankr.com/enterprise/', text: 'Enterprise Solutions' },
        { href: 'https://www.ankr.com/docs/chainscanner/block-explorer/', text: 'Block Explorer' },
        { href: 'https://www.ankr.com/about-network/', text: 'Ankr Network' },
        { href: 'https://www.ankr.com/about-network/token/', text: 'Ankr Token' },
      ]
    },
    {
        title: 'RPCs',
        items: [
          { href: 'https://www.ankr.com/remote-procedure-call/polygon-matic/', text: 'Polygon' },
          { href: 'https://www.ankr.com/rpc/eth/', text: 'Ethereum' },
          { href: 'https://www.ankr.com/rpc/avalanche/', text: 'Avalanche' },
          { href: 'https://www.ankr.com/rpc/bsc/', text: 'BSC' },
          { href: 'https://www.ankr.com/rpc/optimism/', text: 'Optimism' },
          { href: 'https://www.ankr.com/rpc/arbitrumnova/', text: 'Arbitrum' },
          { href: 'https://www.ankr.com/remote-procedure-call/', text: 'See All' },
        ]
    },
    {
        title: 'Staking',
        items: [
          { href: 'https://www.ankr.com/staking-crypto/ethereum-eth/', text: 'Ethereum' },
          { href: 'https://www.ankr.com/staking-crypto/polygon-matic/', text: 'Polygon' },
          { href: 'https://www.ankr.com/staking-crypto/avalanche-avax/', text: 'Avalanche' },
          { href: 'https://www.ankr.com/staking-crypto/binance-bnb/', text: 'BSC' },
          { href: 'https://www.ankr.com/staking-crypto/fantom-ftm/', text: 'Fantom' },
          { href: 'https://www.ankr.com/staking-crypto/', text: 'See All' },
        ]
    },
    {
        title: 'Case Studies',
        items: [
          { href: 'https://www.ankr.com/case-studies/bnb/', text: 'BNB Chain' },
          { href: 'https://www.ankr.com/case-studies/chiliz/', text: 'Chiliz' },
          { href: 'https://www.ankr.com/case-studies/polygon/', text: 'Polygon' },
          { href: 'https://www.ankr.com/case-studies/sushi/', text: 'SushiSwap' },
          { href: 'https://www.ankr.com/case-studies/meta-apes/', text: 'Meta Apes' },
          { href: 'https://www.ankr.com/case-studies/mantle/', text: 'Mantle Network' },
          { href: 'https://www.ankr.com/case-studies/', text: 'See all case studies' },
        ]
    },
    {
        title: 'Resources',
        items: [
          { href: 'https://www.ankr.com/docs', text: 'Docs' },
          { href: 'https://ankr.hashnode.dev/', text: 'Tutorials' },
          { href: 'https://github.com/Ankr-network', text: 'Github' },
          { href: 'https://www.ankr.com/ankr-whitepaper-2.0.pdf', text: 'Ankr Whitepaper 2.0' },
          { href: 'https://www.ankr.com/assets/', text: 'Brand Assets' },
        ]
      },
      {
        title: 'Company',
        items: [
          { href: 'https://www.ankr.com/about/our-purpose/', text: 'About Us' },
          { href: 'https://www.ankr.com/blog/', text: 'Blog' },
          { href: 'https://www.ankr.com/press/', text: 'Press' },
          { href: 'https://boards.greenhouse.io/ankrnetwork', text: 'Careers' },
        ]
      },
      {
        title: 'Socials',
        items: [
          { href: 'https://twitter.com/ankr', text: 'Twitter', icon: Twitter, className: 'flex' },
          { href: 'https://t.me/ankrnetwork', text: 'Telegram', icon: Telegram, className: 'flex' },
          { href: 'https://discord.ankr.com/', text: 'Discord', icon: Discord, className: 'flex' },
          { href: 'https://medium.com/ankr-network', text: 'Medium', icon: Medium, className: 'flex' },
          { href: 'https://www.reddit.com/r/Ankrofficial/', text: 'Reddit', icon: Reddit, className: 'flex' },
          { href: 'https://www.instagram.com/ankr/', text: 'Instagram', icon: Instagram, className: 'flex' },
          { href: 'https://www.youtube.com/c/AnkrOfficial', text: 'YouTube', icon: Youtube, className: 'flex' },
          { href: 'https://www.linkedin.com/company/ankr/', text: 'LinkedIn', icon: LinkedIn, className: 'flex' },
        ]
      },
  ];

  return (
    <div className='pb-8 w-full'>
      <ul className='grid grid-cols-2 md:grid-cols-7 '>
        {sections.map((section, index) => (
          <List key={index} title={section.title} items={section.items} />
        ))}
      </ul>
    </div>
  );
}

export default FooterMenu;