import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import { mainTheme } from '@ankr.com/ui';

interface MUIProviderProps {
  children: React.ReactNode;
}

const cache = createCache({
  key: 'mui-css',
});

export function MUIProvider({ children }: MUIProviderProps) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
    </CacheProvider>
  );
}
