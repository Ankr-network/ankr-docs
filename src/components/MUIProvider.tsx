import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { mainTheme } from "@ankr.com/ui";

interface MUIProviderProps {
  children: React.ReactNode;
}

const cache = createCache({
  key: "mui-css",
});

export const MUIProvider = ({ children }: MUIProviderProps) => {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};
