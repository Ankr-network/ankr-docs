import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
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
  const isInitializedRef = useRef(false);

  useEffect(() => {
    if (!isInitializedRef.current) {
      initGoogleGtm();

      isInitializedRef.current = true;
    }
  }, []);

  const router = useRouter();

  useEffect(() => {
    const mainDataLayer = {
      pageTypeName: pageProps.page || null,
      url: router.pathname,
    };

    gtmVirtualPageView(mainDataLayer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageProps]);
}
