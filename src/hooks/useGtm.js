import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { initGoogleGtm } from '../../components/gtm';

function gtmVirtualPageView(rest) {
  window.dataLayer?.push({
    event: 'VirtualPageView',
    ...rest,
  });
};

export function useGtm(pageProps) {
  useEffect(() => {
    initGoogleGtm();
  }, []);

  const router = useRouter(); 

  useEffect(() => {
    const mainDataLayer = {
      pageTypeName: pageProps.page || null,
      url: router.pathname,
    };

    gtmVirtualPageView(mainDataLayer);

  }, [pageProps]);
}