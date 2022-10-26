const axios = require("axios");
const fs = require("fs");
const json2md = require("json2md");
const { NodeHtmlMarkdown } = require("node-html-markdown");
const { join } = require("path");

const FILES_ROOT_PATH = join(process.cwd(), "pages", "staking");

const STRAPI_ROOT_URL = "https://strapi.ankr.com";

/**
 * @name filesMap
 *
 * @type {[{filePath: string, name: string, urlPath: string}]}
 */
const filesMap = [
  // delegated-staking
  {
    filePath: join(FILES_ROOT_PATH, "delegated-staking", "ankr", "faq.md"),
    name: "ankr",
    urlPath: `${STRAPI_ROOT_URL}/faq-ankr-items`,
  },
  {
    filePath: join(FILES_ROOT_PATH, "delegated-staking", "gnosis", "faq.md"),
    name: "gnosis",
    urlPath: `${STRAPI_ROOT_URL}/faq-m-gno-items`,
  },

  // liquid-staking
  {
    filePath: join(FILES_ROOT_PATH, "liquid-staking", "avax", "faq.md"),
    name: "avax",
    urlPath: `${STRAPI_ROOT_URL}/faq-avalanche-items`,
  },
  {
    filePath: join(FILES_ROOT_PATH, "liquid-staking", "bnb", "faq.md"),
    name: "bnb",
    urlPath: `${STRAPI_ROOT_URL}/faq-binance-items`,
  },
  {
    filePath: join(FILES_ROOT_PATH, "liquid-staking", "dot", "faq.md"),
    name: "dot",
    urlPath: `${STRAPI_ROOT_URL}/faq-polkadot-items`,
  },
  {
    filePath: join(FILES_ROOT_PATH, "liquid-staking", "eth", "faq.md"),
    name: "eth",
    urlPath: `${STRAPI_ROOT_URL}/faq-ethereum-items`,
  },
  {
    filePath: join(FILES_ROOT_PATH, "liquid-staking", "eth-ssv", "faq.md"),
    name: "eth-ssv",
    urlPath: `${STRAPI_ROOT_URL}/faq-ssv-items`,
  },
  {
    filePath: join(FILES_ROOT_PATH, "liquid-staking", "ftm", "faq.md"),
    name: "ftm",
    urlPath: `${STRAPI_ROOT_URL}/faq-fantom-items`,
  },
  {
    filePath: join(FILES_ROOT_PATH, "liquid-staking", "ksm", "faq.md"),
    name: "ksm",
    urlPath: `${STRAPI_ROOT_URL}/faq-kusama-items`,
  },
  {
    filePath: join(FILES_ROOT_PATH, "liquid-staking", "matic", "faq.md"),
    name: "matic",
    urlPath: `${STRAPI_ROOT_URL}/faq-polygon-items`,
  },
];

/**
 * @function generateFAQFile
 *
 * @param urlPath {string} - Set URL path
 * @param filePath {string} - Set file path
 *
 * @returns {Promise<void>}
 */
const generateFAQFile = async (urlPath, filePath) => {
  const { data: rawData } = await axios.get(urlPath);

  if (!Array.isArray(rawData)) {
    console.log(`Error with URL: ${urlPath}`);

    throw new Error("Invalid data");
  }

  const data = rawData
    .sort((item1, item2) => item1.id - item2.id)
    .map(({ answer, question }) => ({
      h3: question,
      p: NodeHtmlMarkdown.translate(answer),
    }));

  fs.writeFileSync(filePath, json2md(data));

  console.log(`Updated: ${filePath}`);
};

/**
 * @function main
 *
 * @returns {Promise<void>}
 */
async function main() {
  for (let i = 0; i < filesMap.length; i++) {
    const { filePath, urlPath } = filesMap[i];

    await generateFAQFile(urlPath, filePath);
  }
}

/**
 * Script launching
 */
main();
