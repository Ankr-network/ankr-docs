import dynamic from 'next/dynamic';
const BaseAskCookbook = dynamic(() => import('@cookbookdev/docsbot/react-fixed'), { ssr: false });

/** It's going to be exposed in HTTP requests anyway so it's fine to just hardcode it here */
const COOKBOOK_PUBLIC_API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmE5OGQ2NGNhMjA3NDg1NDU1OWFlNjMiLCJpYXQiOjE3MjIzODc4MTIsImV4cCI6MjAzNzk2MzgxMn0.PjwUYZ6_mvOkDD3RtI51UjwxIL8E93pPoMcVatUi2ik';

export const AskCookbook = () => {
  return (
    <BaseAskCookbook apiKey={COOKBOOK_PUBLIC_API_KEY} />
  );
};
