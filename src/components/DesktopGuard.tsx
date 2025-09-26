import { useMediaQuery, useTheme } from "@mui/material";

interface DesktopGuardProps {
  children: React.ReactNode;
}

export const DesktopGuard = ({ children }: DesktopGuardProps) => {
  const theme = useTheme();
  
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  if (isMobile) {
    return null;
  }

  return <>{children}</>;
};
