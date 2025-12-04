'use client';

import { Button, Typography } from '@mui/material';
import { useAuthState, useSubscribeToAuthStorage } from '@ankr.com/auth';

import { DesktopGuard } from 'components/DesktopGuard';
import { MUIProvider } from 'components/MUIProvider';
import { MobileGuard } from 'components/MobileGuard';

import { getURL } from './utils/getURL';

interface Web3APIButtonProps {
  className?: string;
  visibility: 'desktop' | 'mobile';
}

export function Web3APIButton({ className, visibility }: Web3APIButtonProps) {
  const { isSignedIn } = useAuthState();

  useSubscribeToAuthStorage();

  const Guard = visibility === 'desktop' ? DesktopGuard : MobileGuard; 

  return (
    <MUIProvider>
      <Guard>
        <Button
          className={className}
          color="primary"
          href={getURL(isSignedIn)}
          size="small"
          sx={{
            height: 30,
            minHeight: 30,
            borderRadius: 0.5,

            "&:active": {
              boxShadow: "none",
            },

            "&:focus": {
              boxShadow: "none",
            },
          }}
          target="_blank"
          variant="contained"
        >
          <Typography sx={{ fontWeight: 500 }} variant="body4">
            To Web3 API
          </Typography>
        </Button>
      </Guard>
    </MUIProvider>
  );
}
