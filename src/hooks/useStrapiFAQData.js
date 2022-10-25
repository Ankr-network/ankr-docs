import retry from "async-retry";
import { useEffect, useState } from "react";

const getStrapiURL = (token) => {
  let tokenURLPart;

  switch (token) {
    case "AVAX":
      tokenURLPart = "/faq-avalanche-items";
      break;

    case "BNB":
      tokenURLPart = "/faq-binance-items";
      break;

    case "DOT":
      tokenURLPart = "/faq-polkadot-items";
      break;

    case "ETH":
      tokenURLPart = "/faq-ethereum-items";
      break;

    case "FTM":
      tokenURLPart = "/faq-fantom-items";
      break;

    case "KSM":
      tokenURLPart = "/faq-kusama-items";
      break;

    case "MATIC":
      tokenURLPart = "/faq-polygon-items";
      break;

    case "SSV":
      tokenURLPart = "/faq-ssv-items";
      break;

    case "WND":
      tokenURLPart = "/faq-westend-items";
      break;

    case "mGNO":
      tokenURLPart = "/faq-m-gno-items";
      break;

    case "ANKR":
    default:
      tokenURLPart = "/faq-ankr-items";
      break;
  }

  return `https://strapi.ankr.com${tokenURLPart}`;
};

const initData = async (token, stateFn) => {
  const url = getStrapiURL(token);

  const res = await retry(() => fetch(url), {
    factor: 1,
    minTimeout: 10_000,
    retries: 30,
  });

  const rawData = await res.json();

  let data = [];

  if (Array.isArray(rawData)) {
    data = rawData
      .sort((item1, item2) => item1.id - item2.id)
      .map(({ answer, id, question }) => ({ answer, id, question }));
  }

  stateFn(data);
};

export const useStrapiFAQData = ({ token }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    initData(token, setData);
  }, [setData, token]);

  return {
    data,
  };
};
