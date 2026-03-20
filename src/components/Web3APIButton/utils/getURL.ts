import { getSignInUrl } from "@ankr.com/auth";

export const getURL = (isSignedIn: boolean) => {
  if (isSignedIn) {  
    return `${window.location.origin}/rpc/home/`;
  }

  const host = window.location.host;
  const appPath =
    host && !host.includes("localhost")
      ? `${host.replace("www.", "")}/rpc/auth/`
      : process.env.NEXT_PUBLIC_WEB3_API_AUTH_APP_PATH!;

  return getSignInUrl({
    appId: process.env.NEXT_PUBLIC_WEB3_API_AUTH_APP_ID!,
    appPath,
    authPath: process.env.NEXT_PUBLIC_WEB3_API_AUTH_PATH!,
    hasClickwrapAgreement: true,
    hasReferralCodeBox: true,
    referrer: window.location.href,
  }).toString();
};
