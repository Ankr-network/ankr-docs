import { Button, Typography } from "@mui/material";
import { useAuthState, useSubscribeToAuthStorage } from "@ankr.com/auth";

import { getURL } from "./utils/getURL";

export const Web3APIButton = () => {
  const { isSignedIn } = useAuthState();

  useSubscribeToAuthStorage();

  return (
    <Button
      className="order-1"
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
  );
};
