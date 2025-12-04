import { useMediaQuery, useTheme } from '@mui/material';

interface MobileGuardProps {
  children: React.ReactNode;
}

export const MobileGuard = ({ children }: MobileGuardProps) => {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  if (isDesktop) {
    return null;
  }

  return <>{children}</>;
};
