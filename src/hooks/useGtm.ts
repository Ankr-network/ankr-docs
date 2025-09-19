import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { initGoogleGtm } from 'components';

interface MainDataLayer {
  pageTypeName: string | null;
  url: string;
}

function gtmVirtualPageView(rest: MainDataLayer) {
  window.dataLayer?.push({
    event: 'VirtualPageView',
    ...rest,
  });
}

interface UseGTMProps {
  page?: string;
}

export function useGtm(pageProps: UseGTMProps) {
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
