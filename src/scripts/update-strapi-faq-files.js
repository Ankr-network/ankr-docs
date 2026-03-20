const axios = require("axios");
const fs = require("fs");
const json2md = require("json2md");
const { join } = require("path");

const FILES_ROOT_PATH = join(process.cwd(), "pages");

const STRAPI_ROOT_URL = "https://strapi.ankr.network";

/**
 * @name filesMap
 *
 * @type {[{filePath: string, name: string, urlPath: string}]}
 */
const filesMap = [
  // delegated-staking
  {
    filePath: join(FILES_ROOT_PATH, "delegated-staking", "ankr", "faq.mdx"),
    name: "ankr",
    urlPath: `${STRAPI_ROOT_URL}/api/staking-faq-ankr?populate=*`,
  },
  {
    filePath: join(FILES_ROOT_PATH, "delegated-staking", "gnosis", "faq.mdx"),
    name: "gnosis",
    urlPath: `${STRAPI_ROOT_URL}/api/staking-faq-gno?populate=*`,
  },

  // liquid-staking
  {
    filePath: join(FILES_ROOT_PATH, "liquid-staking", "avax", "faq.mdx"),
    name: "avax",
    urlPath: `${STRAPI_ROOT_URL}/api/staking-faq-avax?populate=*`,
  },
  {
    filePath: join(FILES_ROOT_PATH, "liquid-staking", "bnb", "faq.mdx"),
    name: "bnb",
    urlPath: `${STRAPI_ROOT_URL}/api/staking-faq-bnb?populate=*`,
  },
  {
    filePath: join(FILES_ROOT_PATH, "liquid-staking", "dot", "faq.mdx"),
    name: "dot",
    urlPath: `${STRAPI_ROOT_URL}/api/staking-faq-dot?populate=*`,
  },
  {
    filePath: join(FILES_ROOT_PATH, "liquid-staking", "eth", "faq.mdx"),
    name: "eth",
    urlPath: `${STRAPI_ROOT_URL}/api/staking-faq-eth?populate=*`,
  },
  {
    filePath: join(FILES_ROOT_PATH, "liquid-staking", "flow", "faq.mdx"),
    name: "flow",
    urlPath: `${STRAPI_ROOT_URL}/api/staking-faq-flow?populate=*`,
  },
  {
    filePath: join(FILES_ROOT_PATH, "liquid-staking", "ftm", "faq.mdx"),
    name: "ftm",
    urlPath: `${STRAPI_ROOT_URL}/api/staking-faq-ftm?populate=*`,
  },
  {
    filePath: join(FILES_ROOT_PATH, "liquid-staking", "ksm", "faq.mdx"),
    name: "ksm",
    urlPath: `${STRAPI_ROOT_URL}/api/staking-faq-ksm?populate=*`,
  },
  {
    filePath: join(FILES_ROOT_PATH, "liquid-staking", "pol", "faq.mdx"),
    name: "pol",
    urlPath: `${STRAPI_ROOT_URL}/api/staking-faq-pol?populate=*`,
  },
  {
    filePath: join(FILES_ROOT_PATH, "liquid-staking", "ssv", "faq.mdx"),
    name: "ssv",
    urlPath: `${STRAPI_ROOT_URL}/api/staking-faq-ssv?populate=*`,
  },
  {
    filePath: join(FILES_ROOT_PATH, "liquid-staking", "sui", "faq.mdx"),
    name: "sui",
    urlPath: `${STRAPI_ROOT_URL}/api/staking-faq-sui?populate=*`,
  },
  {
    filePath: join(FILES_ROOT_PATH, "liquid-staking", "wnd", "faq.mdx"),
    name: "wnd",
    urlPath: `${STRAPI_ROOT_URL}/api/staking-faq-wnd?populate=*`,
  },
  {
    filePath: join(FILES_ROOT_PATH, "liquid-staking", "xdc", "faq.mdx"),
    name: "xdc",
    urlPath: `${STRAPI_ROOT_URL}/api/staking-faq-xdc?populate=*`,
  },
];

/**
 * Converts a Strapi v5 rich text node to a markdown string.
 *
 * @param {object} node
 * @returns {string}
 */
const richTextNodeToMarkdown = (node) => {
  if (!node) return "";

  if (node.type === "text") {
    let text = node.text || "";
    if (node.bold) text = `**${text}**`;
    if (node.italic) text = `_${text}_`;
    if (node.code) text = `\`${text}\``;
    return text;
  }

  if (node.type === "link") {
    const text = (node.children || []).map(richTextNodeToMarkdown).join("");
    return `[${text}](${node.url})`;
  }

  const children = (node.children || []).map(richTextNodeToMarkdown);

  if (node.type === "paragraph") {
    return children.join("");
  }

  if (node.type === "list") {
    return children
      .map((item, i) =>
        node.format === "ordered" ? `${i + 1}. ${item}` : `- ${item}`
      )
      .join("\n");
  }

  if (node.type === "list-item") {
    return children.join("");
  }

  if (node.type === "heading") {
    const prefix = "#".repeat(node.level || 2);
    return `${prefix} ${children.join("")}`;
  }

  return children.join("");
};

/**
 * Converts a Strapi v5 rich text array to a markdown string.
 *
 * @param {Array} blocks
 * @returns {string}
 */
const richTextToMarkdown = (blocks) => {
  if (!Array.isArray(blocks)) return "";
  return blocks.map(richTextNodeToMarkdown).join("\n\n");
};

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

  const items = rawData?.data?.item;

  if (!Array.isArray(items)) {
    console.log(`Error with URL: ${urlPath}`);

    throw new Error("Invalid data");
  }

  const data = items
    .sort((item1, item2) => item1.id - item2.id)
    .map(({ question, answer }) => ({
      h3: question,
      p: richTextToMarkdown(answer),
    }));

  fs.mkdirSync(filePath.replace(/\/[^/]+$/, ""), { recursive: true });
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
