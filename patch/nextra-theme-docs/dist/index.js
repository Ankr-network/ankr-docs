var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.tsx
import React28, { useMemo as useMemo3, useState as useState7 } from "react";
import { useRouter as useRouter8 } from "next/router";
import "focus-visible";
import { SkipNavContent } from "@reach/skip-nav";
import { ThemeProvider } from "next-themes";
import cn11 from "classnames";

// src/head.tsx
import React3 from "react";
import NextHead from "next/head";
import { useTheme } from "next-themes";

// src/utils/render-component.tsx
import React from "react";
var renderComponent = (ComponentOrNode, props, functionOnly) => {
  if (!ComponentOrNode)
    return null;
  if (typeof ComponentOrNode === "function") {
    if (functionOnly)
      return ComponentOrNode(props);
    return /* @__PURE__ */ React.createElement(ComponentOrNode, __spreadValues({}, props));
  }
  return ComponentOrNode;
};
var render_component_default = renderComponent;

// src/config.ts
import React2 from "react";
var ThemeConfigContext = React2.createContext({});
var useConfig = () => React2.useContext(ThemeConfigContext);

// src/head.tsx
function Head({ title, locale, meta }) {
  const config = useConfig();
  const { theme, systemTheme } = useTheme();
  const renderedTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = React3.useState(false);
  React3.useEffect(() => setMounted(true), []);
  return /* @__PURE__ */ React3.createElement(NextHead, null, /* @__PURE__ */ React3.createElement("title", null, title, render_component_default(config.titleSuffix, { locale, config, title, meta })), render_component_default(config.head, { locale, config, title, meta }, true), config.unstable_faviconGlyph ? /* @__PURE__ */ React3.createElement("link", {
    rel: "icon",
    href: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50' y='.9em' font-size='90' text-anchor='middle'>${config.unstable_faviconGlyph}</text><style>text{font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";fill:black}@media(prefers-color-scheme:dark){text{fill:white}}</style></svg>`
  }) : null, !mounted ? /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("meta", {
    name: "theme-color",
    content: "#ffffff",
    media: "(prefers-color-scheme: light)"
  }), /* @__PURE__ */ React3.createElement("meta", {
    name: "theme-color",
    content: "#111111",
    media: "(prefers-color-scheme: dark)"
  })) : /* @__PURE__ */ React3.createElement("meta", {
    name: "theme-color",
    content: renderedTheme === "dark" ? "#111111" : "#ffffff"
  }), /* @__PURE__ */ React3.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, viewport-fit=cover"
  }));
}

// src/navbar.tsx
import React8 from "react";
import cn3 from "classnames";
import Link3 from "next/link";
import { useRouter as useRouter3 } from "next/router";

// src/utils/get-fs-route.ts
var getFSRoute = (asPath, locale) => {
  const cleanedPath = locale ? asPath.replace(new RegExp(`.${locale}(/|$)`), "$1") : asPath;
  return cleanedPath.replace(new RegExp("/index(/|$)"), "$1").split("#")[0] || "/";
};

// src/utils/menu-context.ts
import { useContext, createContext } from "react";
var MenuContext = createContext({
  menu: false,
  setMenu: () => {
  },
  defaultMenuCollapsed: true
});
function useMenuContext() {
  return useContext(MenuContext);
}

// src/search.tsx
import React4, { useMemo, useCallback, useRef, useState, useEffect } from "react";
import matchSorter from "match-sorter";
import cn from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";
var Item = ({ title, active, href, onMouseOver, search }) => {
  const highlight = title.toLowerCase().indexOf(search.toLowerCase());
  return /* @__PURE__ */ React4.createElement("li", {
    className: cn("p-2", { active })
  }, /* @__PURE__ */ React4.createElement(Link, {
    href,
    passHref: true
  }, /* @__PURE__ */ React4.createElement("a", {
    className: "block no-underline",
    onMouseOver
  }, title.substring(0, highlight), /* @__PURE__ */ React4.createElement("span", {
    className: "highlight"
  }, title.substring(highlight, highlight + search.length)), title.substring(highlight + search.length))));
};
var UP = true;
var DOWN = false;
var Search = ({ directories = [] }) => {
  const router = useRouter();
  const config = useConfig();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(null);
  const input = useRef(null);
  const results = useMemo(() => {
    if (!search)
      return [];
    return matchSorter(directories, search, { keys: ["title"] });
  }, [search]);
  const moveActiveItem = (up) => {
    const position = active !== null ? active + (up ? -1 : 1) : 0;
    const { length } = results;
    const next = (position + length) % length;
    setActive(next);
  };
  const handleKeyDown = useCallback((e) => {
    const { key, ctrlKey } = e;
    if (ctrlKey && key === "n" || key === "ArrowDown") {
      e.preventDefault();
      moveActiveItem(DOWN);
    }
    if (ctrlKey && key === "p" || key === "ArrowUp") {
      e.preventDefault();
      moveActiveItem(UP);
    }
    if (active !== null && key === "Enter" && results && results[active]) {
      router.push(results[active].route);
    }
  }, [active, results, router]);
  const handleOnBlur = useCallback((e) => {
    if (active === null) {
      setShow(false);
    }
  }, [active]);
  useEffect(() => {
    setActive(null);
  }, [search]);
  useEffect(() => {
    const inputs = ["input", "select", "button", "textarea"];
    const down = (e) => {
      var _a;
      if (document.activeElement && inputs.indexOf(document.activeElement.tagName.toLowerCase()) === -1) {
        if (e.key === "/") {
          e.preventDefault();
          (_a = input.current) == null ? void 0 : _a.focus();
        } else if (e.key === "Escape") {
          setShow(false);
        }
      }
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);
  const renderList = show && results.length > 0;
  return /* @__PURE__ */ React4.createElement("div", {
    className: "relative w-full nextra-search md:w-64"
  }, renderList && /* @__PURE__ */ React4.createElement("div", {
    className: "z-10 search-overlay",
    onClick: () => setShow(false)
  }), /* @__PURE__ */ React4.createElement("div", {
    className: "relative flex items-center"
  }, /* @__PURE__ */ React4.createElement("input", {
    onChange: (e) => {
      setSearch(e.target.value);
      setShow(true);
    },
    className: "block w-full px-3 py-2 leading-tight bg-black bg-opacity-[.03] rounded-lg appearance-none focus:outline-none focus:ring hover:bg-opacity-5 transition-colors",
    type: "search",
    placeholder: render_component_default(config.searchPlaceholder, {
      locale: router.locale
    }, true),
    onKeyDown: handleKeyDown,
    onFocus: () => setShow(true),
    onBlur: handleOnBlur,
    ref: input,
    spellCheck: false
  }), show ? null : /* @__PURE__ */ React4.createElement("div", {
    className: "hidden sm:flex absolute inset-y-0 right-0 py-1.5 pr-1.5 select-none pointer-events-none"
  }, /* @__PURE__ */ React4.createElement("kbd", {
    className: "inline-flex items-center px-1.5 font-mono text-sm font-medium bg-white text-gray-400 dark:text-gray-800 dark:border-gray-400 border rounded"
  }, "/"))), renderList && /* @__PURE__ */ React4.createElement("ul", {
    className: "absolute left-0 z-20 w-full p-0 py-2.5 m-0 mt-1 list-none border divide-y rounded shadow-md md:right-0 top-100 md:w-auto"
  }, results.map((res, i) => {
    return /* @__PURE__ */ React4.createElement(Item, {
      key: `search-item-${i}`,
      title: res.title,
      href: res.route,
      active: i === active,
      search,
      onMouseOver: () => setActive(i)
    });
  })));
};
var search_default = Search;

// src/flexsearch.js
import React5, {
  memo,
  useCallback as useCallback2,
  useRef as useRef2,
  useState as useState2,
  useEffect as useEffect2,
  Fragment
} from "react";
import Router, { useRouter as useRouter2 } from "next/router";
import cn2 from "classnames";
import Link2 from "next/link";
import FlexSearch from "flexsearch";
import { Transition } from "@headlessui/react";
var Item2 = ({
  page,
  first,
  title,
  active,
  href,
  onHover,
  onClick,
  excerpt
}) => {
  return /* @__PURE__ */ React5.createElement(React5.Fragment, null, first ? /* @__PURE__ */ React5.createElement("div", {
    className: "nextra-search-section mx-2.5 px-2.5 pb-1.5 mb-2 mt-6 first:mt-0 font-semibold uppercase text-xs text-gray-500 select-none dark:text-gray-300"
  }, page) : null, /* @__PURE__ */ React5.createElement(Link2, {
    href: href
  }, /* @__PURE__ */ React5.createElement("a", {
    className: "block no-underline",
    onMouseMove: onHover,
    onClick
  }, /* @__PURE__ */ React5.createElement("li", {
    className: cn2({ active })
  }, /* @__PURE__ */ React5.createElement("div", {
    className: "font-semibold dark:text-white leading-5"
  }, title), excerpt ? /* @__PURE__ */ React5.createElement("div", {
    className: "excerpt mt-1 text-gray-600 text-sm leading-[1.35rem] dark:text-gray-400"
  }, excerpt) : null))));
};
var MemoedStringWithMatchHighlights = memo(function StringWithMatchHighlights({ content, search }) {
  const splittedText = content.split("");
  const escapedSearch = search.trim().replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  const regexp = RegExp("(" + escapedSearch.split(" ").join("|") + ")", "ig");
  let match;
  let id = 0;
  let index = 0;
  const res = [];
  while ((match = regexp.exec(content)) !== null) {
    res.push(/* @__PURE__ */ React5.createElement(Fragment, {
      key: id++
    }, splittedText.splice(0, match.index - index).join("")));
    res.push(/* @__PURE__ */ React5.createElement("span", {
      className: "highlight",
      key: id++
    }, splittedText.splice(0, regexp.lastIndex - match.index).join("")));
    index = regexp.lastIndex;
  }
  res.push(/* @__PURE__ */ React5.createElement(Fragment, {
    key: id++
  }, splittedText.join("")));
  return res;
});
var indexes = {};
function Search2() {
  const config = useConfig();
  const router = useRouter2();
  const [loading, setLoading] = useState2(false);
  const [show, setShow] = useState2(false);
  const [search, setSearch] = useState2("");
  const [active, setActive] = useState2(0);
  const [results, setResults] = useState2([]);
  const input = useRef2(null);
  const { setMenu } = useMenuContext();
  const finishSearch = () => {
    if (input.current) {
      input.current.value = "";
      input.current.blur();
    }
    setSearch("");
    setShow(false);
    setMenu(false);
  };
  const doSearch = () => {
    var _a, _b;
    if (!search)
      return;
    const localeCode = Router.locale || "default";
    const index = indexes[localeCode];
    if (!index)
      return;
    const [pageIndex, sectionIndex] = index;
    const pageResults = (((_a = pageIndex.search(search, {
      enrich: true,
      suggest: true
    })[0]) == null ? void 0 : _a.result) || []).slice(0, 5);
    const results2 = [];
    const pageTitleMatches = {};
    for (let i = 0; i < pageResults.length; i++) {
      const result = pageResults[i];
      pageTitleMatches[i] = 0;
      const sectionResults = (((_b = sectionIndex.search(search, {
        enrich: true,
        suggest: true,
        tag: "page_" + result.id
      })[0]) == null ? void 0 : _b.result) || []).slice(0, 5);
      let firstItemOfPage = true;
      const occurred = {};
      for (let j = 0; j < sectionResults.length; j++) {
        const section = sectionResults[j];
        const isMatchingTitle = typeof section.doc.display !== "undefined";
        const content = section.doc.display || section.doc.content;
        const url = section.doc.url;
        if (isMatchingTitle) {
          pageTitleMatches[i]++;
        }
        if (occurred[url + "@" + content])
          continue;
        occurred[url + "@" + content] = true;
        results2.push({
          _page_rk: i,
          _section_rk: j,
          first: firstItemOfPage,
          route: url,
          page: result.doc.title,
          title: /* @__PURE__ */ React5.createElement(MemoedStringWithMatchHighlights, {
            content: section.doc.title,
            search
          }),
          excerpt: content ? /* @__PURE__ */ React5.createElement(MemoedStringWithMatchHighlights, {
            content,
            search
          }) : null
        });
        firstItemOfPage = false;
      }
    }
    setResults(results2.sort((a, b) => {
      if (a._page_rk === b._page_rk) {
        return a._section_rk - b._section_rk;
      }
      if (pageTitleMatches[a._page_rk] !== pageTitleMatches[b._page_rk]) {
        return pageTitleMatches[b._page_rk] - pageTitleMatches[a._page_rk];
      }
      return a._page_rk - b._page_rk;
    }));
  };
  useEffect2(doSearch, [search]);
  const handleKeyDown = useCallback2((e) => {
    switch (e.key) {
      case "ArrowDown": {
        e.preventDefault();
        if (active + 1 < results.length) {
          setActive(active + 1);
          const activeElement = document.querySelector(`.nextra-flexsearch ul > a:nth-of-type(${active + 2})`);
          if (activeElement && activeElement.scrollIntoView) {
            activeElement.scrollIntoView({
              behavior: "smooth",
              block: "nearest"
            });
          }
        }
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        if (active - 1 >= 0) {
          setActive(active - 1);
          const activeElement = document.querySelector(`.nextra-flexsearch ul > a:nth-of-type(${active})`);
          if (activeElement && activeElement.scrollIntoView) {
            activeElement.scrollIntoView({
              behavior: "smooth",
              block: "nearest"
            });
          }
        }
        break;
      }
      case "Enter": {
        router.push(results[active].route);
        finishSearch();
        break;
      }
      case "Escape": {
        setShow(false);
        input.current.blur();
        break;
      }
    }
  }, [active, results, router]);
  const load = () => __async(this, null, function* () {
    const localeCode = Router.locale || "default";
    if (!indexes[localeCode] && !loading) {
      setLoading(true);
      const data = yield (yield fetch(`${Router.basePath}/_next/static/chunks/nextra-data-${localeCode}.json`)).json();
      const pageIndex = new FlexSearch.Document({
        cache: 100,
        tokenize: "full",
        document: {
          id: "id",
          index: "content",
          store: ["title"]
        },
        context: {
          resolution: 9,
          depth: 2,
          bidirectional: true
        }
      });
      const sectionIndex = new FlexSearch.Document({
        cache: 100,
        tokenize: "full",
        document: {
          id: "id",
          index: "content",
          tag: "pageId",
          store: ["title", "content", "url", "display"]
        },
        context: {
          resolution: 9,
          depth: 2,
          bidirectional: true
        }
      });
      let pageId = 0;
      for (let route in data) {
        let pageContent = "";
        ++pageId;
        for (let heading in data[route].data) {
          const [hash, text] = heading.split("#");
          const url = route + (hash ? "#" + hash : "");
          const title = text || data[route].title;
          const paragraphs = (data[route].data[heading] || "").split("\n").filter(Boolean);
          sectionIndex.add({
            id: url,
            url,
            title,
            pageId: `page_${pageId}`,
            content: title,
            display: paragraphs[0] || ""
          });
          for (let i = 0; i < paragraphs.length; i++) {
            sectionIndex.add({
              id: url + "_" + i,
              url,
              title,
              pageId: `page_${pageId}`,
              content: paragraphs[i]
            });
          }
          pageContent += " " + title + " " + (data[route].data[heading] || "");
        }
        pageIndex.add({
          id: pageId,
          title: data[route].title,
          content: pageContent
        });
      }
      indexes[localeCode] = [pageIndex, sectionIndex];
      setLoading(false);
      setSearch((s) => s ? s + " " : s);
    }
  });
  useEffect2(() => {
    setActive(0);
  }, [search]);
  useEffect2(() => {
    const inputs = ["input", "select", "button", "textarea"];
    const down = (e) => {
      if (document.activeElement && inputs.indexOf(document.activeElement.tagName.toLowerCase()) === -1) {
        if (e.key === "/" || e.key === "k" && e.metaKey) {
          e.preventDefault();
          input.current.focus();
        } else if (e.key === "Escape") {
          setShow(false);
          input.current.blur();
        }
      }
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);
  const renderList = show && !!search;
  return /* @__PURE__ */ React5.createElement("div", {
    className: "relative w-full nextra-search nextra-flexsearch md:w-64"
  }, renderList && /* @__PURE__ */ React5.createElement("div", {
    className: "z-10 search-overlay",
    onClick: () => setShow(false)
  }), /* @__PURE__ */ React5.createElement("div", {
    className: "relative flex items-center"
  }, /* @__PURE__ */ React5.createElement("input", {
    onChange: (e) => {
      setSearch(e.target.value);
      setShow(true);
    },
    className: "block w-full px-3 py-2 leading-tight rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-gray-200 focus:bg-white hover:bg-opacity-5 transition-colors dark:focus:bg-dark dark:focus:ring-gray-100 dark:focus:ring-opacity-20",
    type: "search",
    placeholder: render_component_default(config.searchPlaceholder, {
      locale: router.locale
    }, true),
    onKeyDown: handleKeyDown,
    onFocus: () => {
      load();
      setShow(true);
    },
    ref: input,
    spellCheck: false
  }), renderList ? null : /* @__PURE__ */ React5.createElement("div", {
    className: "hidden sm:flex absolute inset-y-0 right-0 py-1.5 pr-1.5 select-none pointer-events-none"
  }, /* @__PURE__ */ React5.createElement("kbd", {
    className: "inline-flex items-center px-1.5 font-mono text-sm font-medium bg-white dark:bg-dark dark:bg-opacity-50 text-gray-400 dark:text-gray-500 dark:border-gray-100 dark:border-opacity-20 border rounded"
  }, "/"))), /* @__PURE__ */ React5.createElement(Transition, {
    show: renderList,
    as: React5.Fragment,
    leave: "transition duration-100",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /* @__PURE__ */ React5.createElement("ul", {
    className: "absolute z-20 px-0 py-2.5 m-0 mt-2 top-full rounded-xl overflow-hidden overscroll-contain shadow-xl list-none"
  }, loading ? /* @__PURE__ */ React5.createElement("span", {
    className: "p-8 text-center text-gray-400 text-sm select-none flex justify-center"
  }, /* @__PURE__ */ React5.createElement("svg", {
    className: "animate-spin -ml-1 mr-2 h-5 w-5 text-gray-400",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React5.createElement("circle", {
    className: "opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    strokeWidth: "4"
  }), /* @__PURE__ */ React5.createElement("path", {
    className: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  })), /* @__PURE__ */ React5.createElement("span", null, "Loading...")) : results.length === 0 ? render_component_default(config.unstable_searchResultEmpty, {
    locale: router.locale
  }) : results.map((res, i) => {
    return /* @__PURE__ */ React5.createElement(Item2, {
      first: res.first,
      key: `search-item-${i}`,
      page: res.page,
      title: res.title,
      href: res.route,
      excerpt: res.excerpt,
      active: i === active,
      onHover: () => setActive(i),
      onClick: () => {
        finishSearch();
      }
    });
  }))));
}

// src/icons/github.tsx
import React6 from "react";
var Github = ({ height = 40 }) => {
  return /* @__PURE__ */ React6.createElement("svg", {
    height,
    viewBox: "2 2 20 20",
    fill: "none",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React6.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z",
    fill: "currentColor"
  }));
};
var github_default = Github;

// src/icons/discord.tsx
import React7 from "react";
var DiscordIcon = ({ height = 40 }) => {
  return /* @__PURE__ */ React7.createElement("svg", {
    height,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 146 146",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React7.createElement("title", null, "Discord"), /* @__PURE__ */ React7.createElement("path", {
    d: "M107.75 125.001s-4.5-5.375-8.25-10.125c16.375-4.625 22.625-14.875 22.625-14.875-5.125 3.375-10 5.75-14.375 7.375-6.25 2.625-12.25 4.375-18.125 5.375-12 2.25-23 1.625-32.375-.125-7.125-1.375-13.25-3.375-18.375-5.375-2.875-1.125-6-2.5-9.125-4.25-.375-.25-.75-.375-1.125-.625-.25-.125-.375-.25-.5-.375-2.25-1.25-3.5-2.125-3.5-2.125s6 10 21.875 14.75c-3.75 4.75-8.375 10.375-8.375 10.375-27.625-.875-38.125-19-38.125-19 0-40.25 18-72.875 18-72.875 18-13.5 35.125-13.125 35.125-13.125l1.25 1.5c-22.5 6.5-32.875 16.375-32.875 16.375s2.75-1.5 7.375-3.625c13.375-5.875 24-7.5 28.375-7.875.75-.125 1.375-.25 2.125-.25 7.625-1 16.25-1.25 25.25-.25 11.875 1.375 24.625 4.875 37.625 12 0 0-9.875-9.375-31.125-15.875l1.75-2S110 19.626 128 33.126c0 0 18 32.625 18 72.875 0 0-10.625 18.125-38.25 19zM49.625 66.626c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875.125-7.625-5.625-13.875-12.75-13.875zm45.625 0c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875s-5.625-13.875-12.75-13.875z",
    fillRule: "nonzero",
    fill: "currentColor"
  }));
};
var discord_default = DiscordIcon;

// src/navbar.tsx
function Navbar({ flatDirectories, items }) {
  const config = useConfig();
  const { locale, asPath } = useRouter3();
  const activeRoute = getFSRoute(asPath, locale);
  const { menu, setMenu } = useMenuContext();
  const bannerKey = config.bannerKey || "nextra-banner";
  return /* @__PURE__ */ React8.createElement(React8.Fragment, null, /* @__PURE__ */ React8.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `try{if(localStorage.getItem(${JSON.stringify(bannerKey)})==='0'){document.body.classList.add('nextra-banner-hidden')}}catch(e){}`
    }
  }), config.banner ? /* @__PURE__ */ React8.createElement("div", {
    className: "nextra-banner-container text-sm h-10 sticky top-0 md:relative pl-10 flex items-center text-slate-50 bg-neutral-900  dark:text-white z-20 dark:bg-[linear-gradient(1deg,#383838,#212121)]"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "max-w-[90rem] mx-auto w-full py-1 text-center font-medium pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)] truncate whitespace-nowrap"
  }, render_component_default(config.banner, {
    locale
  })), /* @__PURE__ */ React8.createElement("button", {
    className: "mr-2 w-8 opacity-80 hover:opacity-100",
    onClick: () => {
      try {
        localStorage.setItem(bannerKey, "0");
      } catch (e) {
      }
      document.body.classList.add("nextra-banner-hidden");
    }
  }, /* @__PURE__ */ React8.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-4 w-4 mx-auto",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /* @__PURE__ */ React8.createElement("path", {
    fillRule: "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    clipRule: "evenodd"
  })))) : null, /* @__PURE__ */ React8.createElement("div", {
    className: "nextra-nav-container z-20 sticky bg-transparent w-full top-0"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "nextra-nav-container-blur absolute w-full h-full bg-white dark:bg-dark pointer-events-none"
  }), /* @__PURE__ */ React8.createElement("nav", {
    className: "flex gap-2 max-w-[90rem] mx-auto items-center left-0 right-0 h-16 pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "flex items-center mr-2 flex-auto"
  }, /* @__PURE__ */ React8.createElement(Link3, {
    href: "/"
  }, /* @__PURE__ */ React8.createElement("a", {
    className: "no-underline text-current inline-flex items-center hover:opacity-75"
  }, render_component_default(config.logo, { locale })))), /* @__PURE__ */ React8.createElement("div", {
    className: "flex-1"
  }), items ? items.map((page) => {
    if (page.hidden)
      return null;
    let href = page.href || page.route || "#";
    if (page.children) {
      href = (page.withIndexPage ? page.route : page.firstChildRoute) || href;
    }
    const isActive = page.route === activeRoute || activeRoute.startsWith(page.route + "/");
    return /* @__PURE__ */ React8.createElement(Link3, {
      href,
      key: page.route
    }, /* @__PURE__ */ React8.createElement("a", __spreadValues({
      className: cn3("nextra-nav-link", "no-underline whitespace-nowrap p-2 -ml-2 hidden md:inline-block", !isActive || page.newWindow ? "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" : "active text-current font-medium"),
      "aria-selected": isActive
    }, page.newWindow ? {
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-selected": false
    } : {}), page.title));
  }) : null, /* @__PURE__ */ React8.createElement("div", null, /* @__PURE__ */ React8.createElement("div", {
    className: "hidden md:inline-block"
  }, config.customSearch || (config.search ? config.unstable_flexsearch ? /* @__PURE__ */ React8.createElement(Search2, null) : /* @__PURE__ */ React8.createElement(search_default, {
    directories: flatDirectories
  }) : null))), config.projectLink || config.github ? /* @__PURE__ */ React8.createElement("a", {
    className: "text-current p-2",
    href: config.projectLink || config.github,
    target: "_blank",
    rel: "noreferrer"
  }, config.projectLinkIcon ? render_component_default(config.projectLinkIcon, { locale }) : /* @__PURE__ */ React8.createElement(React8.Fragment, null, /* @__PURE__ */ React8.createElement(github_default, {
    height: 24
  }), /* @__PURE__ */ React8.createElement("span", {
    className: "sr-only"
  }, "GitHub"))) : null, config.projectChatLink ? /* @__PURE__ */ React8.createElement("a", {
    className: "text-current p-2",
    href: config.projectChatLink,
    target: "_blank",
    rel: "noreferrer"
  }, config.projectChatLinkIcon ? render_component_default(config.projectChatLinkIcon, { locale }) : /* @__PURE__ */ React8.createElement(React8.Fragment, null, /* @__PURE__ */ React8.createElement(discord_default, {
    height: 24
  }), /* @__PURE__ */ React8.createElement("span", {
    className: "sr-only"
  }, "Discord"))) : null, /* @__PURE__ */ React8.createElement("button", {
    className: "nextra-menu-icon block md:hidden p-2",
    onClick: () => setMenu(!menu)
  }, /* @__PURE__ */ React8.createElement("svg", {
    fill: "none",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    className: cn3({ open: menu })
  }, /* @__PURE__ */ React8.createElement("g", null, /* @__PURE__ */ React8.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 6h16"
  })), /* @__PURE__ */ React8.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 12h16"
  }), /* @__PURE__ */ React8.createElement("g", null, /* @__PURE__ */ React8.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 18h16"
  })))))));
}

// src/footer.tsx
import React17 from "react";
import cn5 from "classnames";
import Link4 from "next/link";
import { useRouter as useRouter5 } from "next/router";

// src/icons/arrow-right.tsx
import React9 from "react";
var ArrowRight = (_a) => {
  var _b = _a, { childProps } = _b, props = __objRest(_b, ["childProps"]);
  return /* @__PURE__ */ React9.createElement("svg", __spreadValues({
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /* @__PURE__ */ React9.createElement("path", __spreadValues({
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 5l7 7-7 7"
  }, childProps || {})));
};
var arrow_right_default = ArrowRight;

// src/locale-switch.tsx
import React13 from "react";
import { useRouter as useRouter4 } from "next/router";

// src/select.tsx
import React11 from "react";
import cn4 from "classnames";
import { Listbox, Transition as Transition2 } from "@headlessui/react";

// src/icons/check.tsx
import React10 from "react";
function Check() {
  return /* @__PURE__ */ React10.createElement("svg", {
    viewBox: "0 0 20 20",
    width: "1em",
    height: "1em",
    fill: "currentColor"
  }, /* @__PURE__ */ React10.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

// src/select.tsx
function Menu({ options, selected, onChange }) {
  return /* @__PURE__ */ React11.createElement(Listbox, {
    value: selected,
    onChange
  }, ({ open }) => /* @__PURE__ */ React11.createElement(React11.Fragment, null, /* @__PURE__ */ React11.createElement(Listbox.Button, {
    className: cn4("rounded-md px-2 w-full text-left font-medium cursor-default text-xs h-7 transition-colors text-gray-600 dark:text-gray-400 focus:outline-none", open ? "bg-gray-200 dark:bg-primary-100 dark:bg-opacity-10 text-gray-900 dark:text-gray-50" : "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-primary-100 dark:hover:bg-opacity-5 dark:hover:text-gray-50")
  }, selected.name), /* @__PURE__ */ React11.createElement(Transition2, {
    show: open,
    as: React11.Fragment,
    leave: "transition",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /* @__PURE__ */ React11.createElement(Listbox.Options, {
    className: "menu absolute bottom-[130%] min-w-full z-20 mt-1 bg-white dark:bg-neutral-800 dark:ring-white dark:ring-opacity-20 shadow-lg max-h-64 rounded-md py-1 ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none text-sm"
  }, options.map((option) => /* @__PURE__ */ React11.createElement(Listbox.Option, {
    key: option.key,
    value: option,
    className: ({ active }) => cn4(option.key === selected.key ? "" : "", active ? "text-primary-500 bg-primary-50 dark:bg-primary-500 dark:bg-opacity-10" : "text-gray-800 dark:text-gray-100", "cursor-default select-none relative py-1.5 pl-3 pr-9 whitespace-nowrap")
  }, option.name, option.key === selected.key ? /* @__PURE__ */ React11.createElement("span", {
    className: cn4("absolute inset-y-0 right-0 flex items-center pr-3")
  }, /* @__PURE__ */ React11.createElement(Check, null)) : null))))));
}

// src/icons/globe.tsx
import React12 from "react";
function Globe() {
  return /* @__PURE__ */ React12.createElement("svg", {
    viewBox: "0 0 20 20",
    width: "1em",
    height: "1em",
    fill: "currentColor"
  }, /* @__PURE__ */ React12.createElement("path", {
    fillRule: "evenodd",
    d: "M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z",
    clipRule: "evenodd"
  }));
}

// src/locale-switch.tsx
function LocaleSwitch({ options }) {
  const router = useRouter4();
  const { locale, asPath } = router;
  const selected = options.find((l) => locale === l.locale);
  return /* @__PURE__ */ React13.createElement(Menu, {
    onChange: (option) => {
      const date = new Date(Date.now() + 365 * 24 * 60 * 60 * 1e3);
      document.cookie = `NEXT_LOCALE=${option.key}; expires=${date.toUTCString()}; path=/`;
      window.location.href = asPath;
    },
    selected: {
      key: selected.locale,
      name: /* @__PURE__ */ React13.createElement("div", {
        className: "flex items-center gap-2"
      }, /* @__PURE__ */ React13.createElement(Globe, null), /* @__PURE__ */ React13.createElement("span", null, selected.text))
    },
    options: options.map((l) => ({
      key: l.locale,
      name: l.text
    }))
  });
}

// src/theme-switch.tsx
import React16, { memo as memo2 } from "react";
import { useTheme as useTheme2 } from "next-themes";

// src/icons/sun.tsx
import React14 from "react";
function Moon() {
  return /* @__PURE__ */ React14.createElement("svg", {
    viewBox: "0 0 20 20",
    width: "1em",
    height: "1em",
    fill: "currentColor"
  }, /* @__PURE__ */ React14.createElement("path", {
    fillRule: "evenodd",
    d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
    clipRule: "evenodd"
  }));
}

// src/icons/moon.tsx
import React15 from "react";
function Sun() {
  return /* @__PURE__ */ React15.createElement("svg", {
    viewBox: "0 0 20 20",
    width: "1em",
    height: "1em",
    fill: "currentColor"
  }, /* @__PURE__ */ React15.createElement("path", {
    d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
  }));
}

// src/theme-switch.tsx
function ThemeSwitch({ lite = true }) {
  const { theme, setTheme, systemTheme } = useTheme2();
  const renderedTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = React16.useState(false);
  React16.useEffect(() => setMounted(true), []);
  return /* @__PURE__ */ React16.createElement(Menu, {
    onChange: (option) => {
      setTheme(option.key);
    },
    selected: {
      key: theme || "",
      name: /* @__PURE__ */ React16.createElement("div", {
        className: "flex items-center gap-2 capitalize"
      }, mounted && renderedTheme === "dark" ? /* @__PURE__ */ React16.createElement(Sun, null) : /* @__PURE__ */ React16.createElement(Moon, null), lite ? "" : /* @__PURE__ */ React16.createElement("span", null, mounted ? theme : "light"))
    },
    options: [
      {
        key: "light",
        name: "Light"
      },
      {
        key: "dark",
        name: "Dark"
      },
      {
        key: "system",
        name: "System"
      }
    ]
  });
}
var theme_switch_default = memo2(ThemeSwitch);

// src/footer.tsx
var NextLink = ({ route, title, isRTL }) => {
  return /* @__PURE__ */ React17.createElement(Link4, {
    href: route
  }, /* @__PURE__ */ React17.createElement("a", {
    className: cn5("text-base md:text-lg font-medium p-4 -m-4 no-underline transition-colors text-gray-600 dark:text-gray-300 dark:hover:text-primary-500 hover:text-primary-500 inline-flex items-center justify-end rounded", { "ml-2": !isRTL, "mr-2": isRTL }),
    title
  }, title, /* @__PURE__ */ React17.createElement(arrow_right_default, {
    height: 20,
    className: cn5("transform inline flex-shrink-0", {
      "rotate-180 mr-1": isRTL,
      "ml-1": !isRTL
    })
  })));
};
var PrevLink = ({ route, title, isRTL }) => {
  return /* @__PURE__ */ React17.createElement(Link4, {
    href: route
  }, /* @__PURE__ */ React17.createElement("a", {
    className: cn5("text-base md:text-lg font-medium p-4 -m-4 no-underline transition-colors text-gray-600 dark:text-gray-300 dark:hover:text-primary-500 hover:text-primary-500 flex items-center rounded", { "mr-2": !isRTL, "ml-2": isRTL }),
    title
  }, /* @__PURE__ */ React17.createElement(arrow_right_default, {
    height: 20,
    className: cn5("transform inline flex-shrink-0", {
      "rotate-180 mr-1": !isRTL,
      "ml-1": isRTL
    })
  }), title));
};
var NavLinks = ({
  flatDirectories,
  currentIndex,
  isRTL
}) => {
  const config = useConfig();
  const prev = config.prevLinks ? flatDirectories[currentIndex - 1] : null;
  const next = config.nextLinks ? flatDirectories[currentIndex + 1] : null;
  if (!prev && !next)
    return null;
  return /* @__PURE__ */ React17.createElement("div", {
    className: "nextra-navigation-links pt-8 mb-8 border-t dark:border-neutral-800 flex flex-row items-center justify-between"
  }, /* @__PURE__ */ React17.createElement("div", {
    className: "flex-1 min-w-0 flex justify-start"
  }, prev ? /* @__PURE__ */ React17.createElement(PrevLink, {
    route: prev.route,
    title: prev.title,
    isRTL
  }) : null), /* @__PURE__ */ React17.createElement("div", {
    className: "flex-1 min-w-0 flex justify-end"
  }, next ? /* @__PURE__ */ React17.createElement(NextLink, {
    route: next.route,
    title: next.title,
    isRTL
  }) : null));
};
var Footer = ({ menu }) => {
  const { locale } = useRouter5();
  const config = useConfig();
  return /* @__PURE__ */ React17.createElement("footer", {
    className: "bg-gray-100 dark:bg-neutral-900 pb-[env(safe-area-inset-bottom)]"
  }, /* @__PURE__ */ React17.createElement("div", {
    className: cn5("py-2 border-b dark:border-neutral-800 hidden md:block", menu ? "" : "md:hidden")
  }, /* @__PURE__ */ React17.createElement("div", {
    className: "max-w-[90rem] mx-auto"
  }, /* @__PURE__ */ React17.createElement("div", {
    className: "inline-flex px-4"
  }, config.i18n ? /* @__PURE__ */ React17.createElement("div", {
    className: "flex-1 relative"
  }, /* @__PURE__ */ React17.createElement(LocaleSwitch, {
    options: config.i18n
  })) : null, config.darkMode ? /* @__PURE__ */ React17.createElement("div", {
    className: "grow-0 relative"
  }, /* @__PURE__ */ React17.createElement(theme_switch_default, {
    lite: false
  })) : null))), /* @__PURE__ */ React17.createElement("div", {
    className: "max-w-[90rem] mx-auto pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)] py-12"
  }, /* @__PURE__ */ React17.createElement("div", {
    className: "flex justify-between flex-col-reverse md:flex-row items-center md:items-end"
  }, /* @__PURE__ */ React17.createElement("span", {
    className: "text-gray-600 dark:text-gray-400"
  }, render_component_default(config.footerText, { locale })), /* @__PURE__ */ React17.createElement("div", {
    className: "mt-6"
  }))));
};
var footer_default = Footer;

// src/misc/theme.tsx
import Link5 from "next/link";
import React23, {
  useEffect as useEffect4,
  useRef as useRef4,
  useState as useState4,
  useContext as useContext3
} from "react";
import "intersection-observer";

// src/misc/active-anchor.tsx
import React18, { createContext as createContext2, useContext as useContext2, useState as useState3 } from "react";
var ActiveAnchorContext = createContext2({});
var ActiveAnchorSetterContext = createContext2((s) => s);
var useActiveAnchor = () => useContext2(ActiveAnchorContext);
var useActiveAnchorSet = () => useContext2(ActiveAnchorSetterContext);
var ActiveAnchor = ({ children }) => {
  const state = useState3({});
  return /* @__PURE__ */ React18.createElement(ActiveAnchorContext.Provider, {
    value: state[0]
  }, /* @__PURE__ */ React18.createElement(ActiveAnchorSetterContext.Provider, {
    value: state[1]
  }, children));
};

// src/misc/theme.tsx
import { MDXProvider } from "@mdx-js/react";

// src/components/collapse.tsx
import React19, { useRef as useRef3, useEffect as useEffect3 } from "react";
function Collapse({
  children,
  open
}) {
  const containerRef = useRef3(null);
  const innerRef = useRef3(null);
  const animationRef = useRef3();
  const initialRender = useRef3(true);
  const initialState = useRef3(open);
  useEffect3(() => {
    if (initialRender.current)
      return;
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }
    if (open) {
      const container = containerRef.current;
      const inner = innerRef.current;
      if (container && inner) {
        const contentHeight = innerRef.current.clientHeight;
        container.style.maxHeight = contentHeight + "px";
        container.classList.remove("duration-500");
        container.classList.add("duration-300");
        inner.style.opacity = "1";
        animationRef.current = setTimeout(() => {
          const container2 = containerRef.current;
          if (container2) {
            container2.style.removeProperty("max-height");
          }
        }, 300);
      }
    } else {
      const container = containerRef.current;
      const inner = innerRef.current;
      if (container && inner) {
        const contentHeight = innerRef.current.clientHeight;
        container.style.maxHeight = contentHeight + "px";
        container.classList.remove("duration-300");
        container.classList.add("duration-500");
        inner.style.opacity = "0";
        setTimeout(() => {
          const container2 = containerRef.current;
          if (container2) {
            container2.style.maxHeight = "0px";
          }
        });
      }
    }
  }, [open]);
  useEffect3(() => {
    initialRender.current = false;
  }, []);
  return /* @__PURE__ */ React19.createElement("div", {
    ref: containerRef,
    className: "transition-all ease-in-out duration-300 overflow-hidden transform-gpu motion-reduce:transition-none",
    style: {
      maxHeight: initialState.current ? void 0 : 0
    }
  }, /* @__PURE__ */ React19.createElement("div", {
    ref: innerRef,
    className: "nextra-collapse-content transition-opacity ease-in-out duration-500 overflow-hidden transform-gpu motion-reduce:transition-none",
    style: {
      opacity: initialState.current ? 1 : 0
    }
  }, children));
}

// src/components/tabs.tsx
import React20 from "react";
import cn6 from "classnames";
import { Tab as HeadlessTab } from "@headlessui/react";
function Tabs({
  items,
  selectedIndex,
  defaultIndex,
  onChange,
  children
}) {
  return /* @__PURE__ */ React20.createElement(HeadlessTab.Group, {
    selectedIndex,
    defaultIndex,
    onChange
  }, /* @__PURE__ */ React20.createElement("div", {
    className: "p-2 -m-2 overscroll-x-contain overflow-x-auto overflow-y-hidden no-scrollbar"
  }, /* @__PURE__ */ React20.createElement(HeadlessTab.List, {
    className: "flex mt-4 pb-[1px] border-b border-gray-200 dark:border-neutral-800 w-max min-w-full"
  }, items.map((item, index) => {
    const disabled = !!(item && typeof item === "object" && "disabled" in item && item.disabled);
    return /* @__PURE__ */ React20.createElement(HeadlessTab, {
      key: index,
      disabled,
      className: ({ selected }) => cn6("p-2 mr-2 leading-5 font-medium text-md transition-colors", "select-none border-b-2 mb-[-2px] focus:outline-none focus-visible:ring ring-offset-2 rounded-[1px]", selected ? "text-primary-500 border-primary-500" : "text-gray-600 dark:text-gray-200 hover:border-gray-200 dark:hover:border-neutral-800 border-transparent hover:text-black dark:hover:text-white", disabled ? "pointer-events-none text-gray-400 dark:text-neutral-600" : "")
    }, item && typeof item === "object" && "label" in item ? item.label : item);
  }))), /* @__PURE__ */ React20.createElement(HeadlessTab.Panels, null, children));
}
function Tab({ children }) {
  return /* @__PURE__ */ React20.createElement(HeadlessTab.Panel, {
    className: "focus:outline-none focus-visible:ring"
  }, children);
}

// src/bleed.tsx
import React21 from "react";
import cn7 from "classnames";
var Bleed = ({
  full,
  children
}) => {
  return /* @__PURE__ */ React21.createElement("div", {
    className: cn7("bleed relative mt-6 -mx-6 md:-mx-8 2xl:-mx-24", { full })
  }, children);
};
var bleed_default = Bleed;

// src/callout.tsx
import React22 from "react";
var themes = {
  default: "bg-orange-50 border border-orange-100 text-orange-800 dark:text-orange-300 dark:bg-orange-400 dark:border-orange-400 dark:bg-opacity-20 dark:border-opacity-30",
  error: "bg-red-100 border border-red-200 text-red-900 dark:text-red-200 dark:bg-red-900 dark:bg-opacity-30 dark:border-opacity-30",
  info: "bg-blue-100 border border-blue-200 text-blue-900 dark:text-blue-200 dark:bg-blue-900 dark:bg-opacity-30 dark:border-opacity-30",
  warning: "bg-yellow-50 border border-yellow-100 text-yellow-900 dark:text-yellow-200 dark:bg-yellow-700 dark:bg-opacity-30"
};
var Callout = ({
  children,
  type = "default",
  emoji = "\u{1F4A1}"
}) => {
  return /* @__PURE__ */ React22.createElement("div", {
    className: `${themes[type]} flex rounded-lg nextra-callout mt-6`
  }, /* @__PURE__ */ React22.createElement("div", {
    className: "pl-3 pr-2 py-2 select-none text-xl",
    style: {
      fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    }
  }, emoji), /* @__PURE__ */ React22.createElement("div", {
    className: "pr-4 py-2"
  }, children));
};
var callout_default = Callout;

// src/misc/theme.tsx
var observer;
var setActiveAnchor;
var slugs = /* @__PURE__ */ new WeakMap();
if (typeof window !== "undefined") {
  observer = observer || new IntersectionObserver((entries) => {
    const headers = [];
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      if (entry && entry.rootBounds && slugs.has(entry.target)) {
        const [slug, index] = slugs.get(entry.target);
        const aboveHalfViewport = entry.boundingClientRect.y + entry.boundingClientRect.height <= entry.rootBounds.y + entry.rootBounds.height;
        const insideHalfViewport = entry.intersectionRatio > 0;
        headers.push([slug, index, aboveHalfViewport, insideHalfViewport]);
      }
    }
    setActiveAnchor((f) => {
      const ret = __spreadValues({}, f);
      for (const header of headers) {
        ret[header[0]] = {
          index: header[1],
          aboveHalfViewport: header[2],
          insideHalfViewport: header[3]
        };
      }
      let activeSlug = "";
      let smallestIndexInViewport = Infinity;
      let largestIndexAboveViewport = -1;
      for (let s in ret) {
        ret[s].isActive = false;
        if (ret[s].insideHalfViewport && ret[s].index < smallestIndexInViewport) {
          smallestIndexInViewport = ret[s].index;
          activeSlug = s;
        }
        if (smallestIndexInViewport === Infinity && ret[s].aboveHalfViewport && ret[s].index > largestIndexAboveViewport) {
          largestIndexAboveViewport = ret[s].index;
          activeSlug = s;
        }
      }
      if (ret[activeSlug])
        ret[activeSlug].isActive = true;
      return ret;
    });
  }, {
    rootMargin: "0px 0px -50%",
    threshold: [0, 1]
  });
}
var HeaderLink = (_a) => {
  var _b = _a, {
    tag: Tag,
    children,
    id,
    context,
    withObserver = true
  } = _b, props = __objRest(_b, [
    "tag",
    "children",
    "id",
    "context",
    "withObserver"
  ]);
  setActiveAnchor = useActiveAnchorSet();
  const obRef = useRef4(null);
  const slug = id;
  const anchor = /* @__PURE__ */ React23.createElement("span", {
    className: "subheading-anchor",
    id: slug,
    ref: obRef
  });
  const index = context.index++;
  useEffect4(() => {
    const ref = obRef;
    if (!ref.current)
      return;
    slugs.set(ref.current, [slug, index]);
    if (ref.current)
      observer.observe(ref.current);
    return () => {
      observer.disconnect();
      slugs.delete(ref.current);
      setActiveAnchor((f) => {
        const ret = __spreadValues({}, f);
        delete ret[slug];
        return ret;
      });
    };
  }, []);
  return /* @__PURE__ */ React23.createElement(Tag, __spreadValues({}, props), anchor, /* @__PURE__ */ React23.createElement("a", {
    href: "#" + slug,
    className: "anchor text-current no-underline no-outline"
  }, children, /* @__PURE__ */ React23.createElement("span", {
    className: "anchor-icon",
    "aria-hidden": true
  }, "#")));
};
var H2 = (context) => (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React23.createElement(HeaderLink, __spreadValues({
    tag: "h2",
    context
  }, props), children);
};
var H3 = (context) => (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React23.createElement(HeaderLink, __spreadValues({
    tag: "h3",
    context
  }, props), children);
};
var H4 = (context) => (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React23.createElement(HeaderLink, __spreadValues({
    tag: "h4",
    context
  }, props), children);
};
var H5 = (context) => (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React23.createElement(HeaderLink, __spreadValues({
    tag: "h5",
    context
  }, props), children);
};
var H6 = (context) => (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React23.createElement(HeaderLink, __spreadValues({
    tag: "h6",
    context
  }, props), children);
};
var A = (_a) => {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  const isExternal = props.href && props.href.startsWith("https://");
  if (isExternal) {
    return /* @__PURE__ */ React23.createElement("a", __spreadValues({
      target: "_blank",
      rel: "noreferrer"
    }, props), children);
  }
  return props.href ? /* @__PURE__ */ React23.createElement(Link5, {
    href: props.href
  }, /* @__PURE__ */ React23.createElement("a", __spreadValues({}, props), children)) : /* @__PURE__ */ React23.createElement(React23.Fragment, null);
};
var Table = ({ children }) => {
  return /* @__PURE__ */ React23.createElement("div", {
    className: "table-container"
  }, /* @__PURE__ */ React23.createElement("table", null, children));
};
var DetailsContext = React23.createContext(() => {
});
var findSummary = (children) => {
  let summary = null;
  let restChildren = [];
  React23.Children.forEach(children, (child, index) => {
    var _a;
    if (child && child.type === Summary) {
      summary = summary || child;
    } else {
      let c = child;
      if (!summary && typeof child === "object" && child && child.type !== Details && "props" in child && child.props) {
        const result = findSummary(child.props.children);
        summary = summary || result[0];
        c = React23.cloneElement(child, __spreadProps(__spreadValues({}, child.props), {
          children: ((_a = result[1]) == null ? void 0 : _a.length) ? result[1] : void 0,
          key: index
        }));
      }
      restChildren.push(c);
    }
  });
  return [summary, restChildren];
};
var Details = (_a) => {
  var _b = _a, {
    children,
    open
  } = _b, props = __objRest(_b, [
    "children",
    "open"
  ]);
  const [openState, setOpen] = useState4(!!open);
  const ref = useRef4(null);
  const [summary, restChildren] = findSummary(children);
  return /* @__PURE__ */ React23.createElement("details", __spreadValues(__spreadProps(__spreadValues({}, props), {
    ref,
    open: true
  }), openState ? { "data-open": "" } : null), /* @__PURE__ */ React23.createElement(DetailsContext.Provider, {
    value: setOpen
  }, summary), /* @__PURE__ */ React23.createElement(Collapse, {
    open: openState
  }, restChildren));
};
var Summary = (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  const setOpen = useContext3(DetailsContext);
  return /* @__PURE__ */ React23.createElement("summary", __spreadProps(__spreadValues({}, props), {
    onClick: (e) => {
      e.preventDefault();
      setOpen((v) => !v);
    }
  }), children);
};
var getComponents = (context) => ({
  h2: H2(context),
  h3: H3(context),
  h4: H4(context),
  h5: H5(context),
  h6: H6(context),
  a: A,
  table: Table,
  details: Details,
  summary: Summary,
  Nextra: {
    Bleed: bleed_default,
    Callout: callout_default,
    Tabs,
    Tab
  }
});
var MDXTheme = ({ children }) => {
  return /* @__PURE__ */ React23.createElement(MDXProvider, {
    components: getComponents({ index: 0 })
  }, children);
};

// src/sidebar.tsx
import React24, { useState as useState5, useEffect as useEffect5, useMemo as useMemo2 } from "react";
import cn8 from "classnames";
import Slugger from "github-slugger";
import { useRouter as useRouter6 } from "next/router";
import Link6 from "next/link";
import scrollIntoView from "scroll-into-view-if-needed";

// src/utils/get-heading-text.ts
function getHeadingText(heading) {
  return heading.value || "";
}

// src/sidebar.tsx
var TreeState = {};
var Folder = React24.memo(FolderImpl);
function FolderImpl({ item, anchors }) {
  const { asPath, locale } = useRouter6();
  const routeOriginal = getFSRoute(asPath, locale);
  const route = routeOriginal.split("#")[0];
  const active = route === item.route + "/" || route + "/" === item.route + "/";
  const activeRouteInside = active || route.startsWith(item.route + "/");
  const { defaultMenuCollapsed } = useMenuContext();
  const open = typeof TreeState[item.route] !== "undefined" ? TreeState[item.route] : active || activeRouteInside || !defaultMenuCollapsed;
  const rerender = useState5({})[1];
  const { setMenu } = useMenuContext();
  useEffect5(() => {
    if (activeRouteInside) {
      TreeState[item.route] = true;
    }
  }, [activeRouteInside]);
  const link = /* @__PURE__ */ React24.createElement("a", {
    className: "cursor-pointer",
    onClick: (e) => {
      const clickedToggleIcon = ["svg", "path"].includes(e.target.tagName.toLowerCase());
      if (clickedToggleIcon) {
        e.preventDefault();
      }
      if (item.withIndexPage) {
        if (active || clickedToggleIcon) {
          TreeState[item.route] = !open;
        } else {
          TreeState[item.route] = true;
          setMenu(false);
        }
        rerender({});
        return;
      }
      if (active)
        return;
      TreeState[item.route] = !open;
      rerender({});
    }
  }, /* @__PURE__ */ React24.createElement("span", {
    className: "flex items-center justify-between"
  }, item.title, /* @__PURE__ */ React24.createElement(arrow_right_default, {
    height: "1em",
    className: "ml-2 p-[2px] rounded-sm min-w-[18px] h-[18px] dark:hover:bg-gray-100 hover:bg-gray-800 hover:bg-opacity-5 dark:hover:bg-opacity-5",
    childProps: {
      className: cn8("transition-transform origin-center", open ? "rotate-90" : "")
    }
  })));
  return /* @__PURE__ */ React24.createElement("li", {
    className: cn8({ open, active })
  }, item.withIndexPage ? /* @__PURE__ */ React24.createElement(Link6, {
    href: item.route
  }, link) : link, /* @__PURE__ */ React24.createElement(Collapse, {
    open
  }, Array.isArray(item.children) && /* @__PURE__ */ React24.createElement(Menu2, {
    submenu: true,
    directories: item.children,
    base: item.route,
    anchors
  })));
}
function Separator({ title, topLevel }) {
  const hasTitle = typeof title !== "undefined";
  const { sidebarSubtitle } = useConfig();
  return /* @__PURE__ */ React24.createElement("li", {
    className: cn8(topLevel ? "first:mt-1" : "first:mt-2", hasTitle ? "mt-5 mb-2" : "my-4")
  }, hasTitle ? /* @__PURE__ */ React24.createElement("div", {
    className: "text-sm mx-2 py-1.5 font-semibold no-underline text-gray-900 dark:text-gray-100"
  }, sidebarSubtitle ? render_component_default(sidebarSubtitle, { title }) : title) : /* @__PURE__ */ React24.createElement("hr", {
    className: "mx-2 border-t border-gray-200 dark:border-primary-100 dark:border-opacity-10"
  }));
}
function File({ item, anchors, topLevel }) {
  const { asPath, locale } = useRouter6();
  const route = getFSRoute(asPath, locale);
  const active = route === item.route + "/" || route + "/" === item.route + "/";
  const slugger = new Slugger();
  const activeAnchor = useActiveAnchor();
  const { setMenu } = useMenuContext();
  const title = item.title;
  if (item.type === "separator") {
    return /* @__PURE__ */ React24.createElement(Separator, {
      title,
      topLevel
    });
  }
  if (anchors && anchors.length) {
    if (active) {
      let activeIndex = 0;
      const anchorInfo = anchors.map((anchor, i) => {
        const text = anchor;
        const slug = slugger.slug(text);
        if (activeAnchor[slug] && activeAnchor[slug].isActive) {
          activeIndex = i;
        }
        return { text, slug };
      });
      return /* @__PURE__ */ React24.createElement("li", {
        className: active ? "active" : ""
      }, /* @__PURE__ */ React24.createElement(Link6, {
        href: item.href || item.route
      }, /* @__PURE__ */ React24.createElement("a", __spreadProps(__spreadValues({}, item.newWindow ? { target: "_blank", rel: "noopener noreferrer" } : {}), {
        onClick: () => {
          setMenu(false);
        }
      }), title)), /* @__PURE__ */ React24.createElement("ul", null, anchors.map((_, i) => {
        const { slug, text } = anchorInfo[i];
        const isActive = i === activeIndex;
        return /* @__PURE__ */ React24.createElement("li", {
          key: `a-${slug}`
        }, /* @__PURE__ */ React24.createElement("a", {
          href: "#" + slug,
          className: isActive ? "active-anchor" : "",
          onClick: () => {
            setMenu(false);
          }
        }, /* @__PURE__ */ React24.createElement("span", {
          className: "flex text-sm"
        }, /* @__PURE__ */ React24.createElement("span", {
          className: "opacity-25"
        }, "#"), /* @__PURE__ */ React24.createElement("span", {
          className: "mr-2"
        }), /* @__PURE__ */ React24.createElement("span", {
          className: "inline-block"
        }, text))));
      })));
    }
  }
  return /* @__PURE__ */ React24.createElement("li", {
    className: active ? "active" : ""
  }, /* @__PURE__ */ React24.createElement(Link6, {
    href: item.href || item.route
  }, /* @__PURE__ */ React24.createElement("a", __spreadProps(__spreadValues({}, item.newWindow ? { target: "_blank", rel: "noopener noreferrer" } : {}), {
    onClick: () => {
      setMenu(false);
    }
  }), title)));
}
function Menu2({ directories, anchors, submenu }) {
  return /* @__PURE__ */ React24.createElement("ul", null, directories.map((item) => {
    if (item.children && (item.children.length || !item.withIndexPage)) {
      return /* @__PURE__ */ React24.createElement(Folder, {
        key: item.name,
        item,
        anchors
      });
    }
    return /* @__PURE__ */ React24.createElement(File, {
      key: item.name,
      item,
      anchors,
      topLevel: !submenu
    });
  }));
}
var emptyHeading = [];
function Sidebar({
  directories,
  flatDirectories,
  fullDirectories,
  asPopover = false,
  headings = emptyHeading,
  includePlaceholder
}) {
  const config = useConfig();
  const anchors = useMemo2(() => headings.filter((v) => v.children && v.depth === 2 && v.type === "heading").map((v) => getHeadingText(v)).filter(Boolean), [headings]);
  const { menu } = useMenuContext();
  useEffect5(() => {
    if (menu) {
      document.body.classList.add("overflow-hidden", "md:overflow-auto");
    } else {
      document.body.classList.remove("overflow-hidden", "md:overflow-auto");
    }
  }, [menu]);
  useEffect5(() => {
    const activeElement = document.querySelector(".nextra-sidebar li.active");
    if (activeElement) {
      scrollIntoView(activeElement, {
        block: "center",
        inline: "center",
        scrollMode: "always",
        boundary: document.querySelector(".nextra-sidebar-container")
      });
    }
  }, []);
  const hasMenu = !!(config.i18n || config.darkMode);
  return /* @__PURE__ */ React24.createElement(React24.Fragment, null, includePlaceholder && asPopover ? /* @__PURE__ */ React24.createElement("div", {
    className: "hidden xl:block w-64 h-0 flex-shrink-0"
  }) : null, /* @__PURE__ */ React24.createElement("aside", {
    className: cn8("nextra-sidebar-container nextra-scrollbar fixed flex-shrink-0 w-full md:w-64 md:sticky z-[15] top-16 self-start overflow-y-auto transform-none h-[calc(100vh-4rem)]", asPopover ? "md:hidden" : "md:block", hasMenu ? "with-menu" : "", { open: menu })
  }, /* @__PURE__ */ React24.createElement("div", {
    className: "nextra-sidebar select-none w-full h-full md:h-auto pl-[calc(env(safe-area-inset-left)-1.5rem)]"
  }, /* @__PURE__ */ React24.createElement("div", {
    className: "p-4 min-h-[calc(100vh-4rem-61px)]"
  }, /* @__PURE__ */ React24.createElement("div", {
    className: "nextra-sidebar-search mb-4 block md:hidden"
  }, config.customSearch || (config.search ? config.unstable_flexsearch ? /* @__PURE__ */ React24.createElement(Search2, null) : /* @__PURE__ */ React24.createElement(search_default, {
    directories: flatDirectories
  }) : null)), /* @__PURE__ */ React24.createElement("div", {
    className: "hidden md:block"
  }, /* @__PURE__ */ React24.createElement(Menu2, {
    directories,
    anchors: config.floatTOC ? [] : anchors
  })), /* @__PURE__ */ React24.createElement("div", {
    className: "md:hidden"
  }, /* @__PURE__ */ React24.createElement(Menu2, {
    directories: fullDirectories,
    anchors
  }))), !hasMenu ? null : /* @__PURE__ */ React24.createElement("div", {
    className: "nextra-sidebar-menu mx-4 border-t dark:border-neutral-800 shadow-[0_-12px_16px_white] dark:shadow-[0_-12px_16px_#111]"
  }, /* @__PURE__ */ React24.createElement("div", {
    className: "bg-white dark:bg-dark py-4 flex gap-1 pb-4"
  }, config.i18n ? /* @__PURE__ */ React24.createElement("div", {
    className: "flex-1 relative"
  }, /* @__PURE__ */ React24.createElement(LocaleSwitch, {
    options: config.i18n
  })) : null, config.darkMode ? /* @__PURE__ */ React24.createElement(React24.Fragment, null, /* @__PURE__ */ React24.createElement("div", {
    className: cn8("relative md:hidden", {
      locale: config.i18n,
      "flex-1": !config.i18n
    })
  }, /* @__PURE__ */ React24.createElement(theme_switch_default, {
    lite: false
  })), /* @__PURE__ */ React24.createElement("div", {
    className: cn8("relative hidden md:block", {
      locale: config.i18n
    }, config.i18n ? "grow-0" : "flex-1")
  }, /* @__PURE__ */ React24.createElement(theme_switch_default, {
    lite: !!config.i18n
  }))) : null)))));
}

// src/toc.tsx
import React25 from "react";
import cn9 from "classnames";
import Slugger2 from "github-slugger";
import parseGitUrl from "parse-git-url";
import { useRouter as useRouter7 } from "next/router";
import scrollIntoView2 from "scroll-into-view-if-needed";

// src/utils/use-mounted.ts
import { useEffect as useEffect6, useState as useState6 } from "react";
var useMounted = () => {
  const [mounted, setMounted] = useState6(false);
  useEffect6(() => {
    setMounted(true);
  }, []);
  return mounted;
};
var use_mounted_default = useMounted;

// src/toc.tsx
var createEditUrl = (repository, filepath) => {
  const repo = parseGitUrl(repository || "");
  if (!repo)
    throw new Error("Invalid `docsRepositoryBase` URL!");
  switch (repo.type) {
    case "github":
      return `https://github.com/${repo.owner}/${repo.name}/blob/${repo.branch || "main"}/${repo.subdir || "pages"}${filepath}`;
    case "gitlab":
      return `https://gitlab.com/${repo.owner}/${repo.name}/-/blob/${repo.branch || "master"}/${repo.subdir || "pages"}${filepath}`;
  }
  return "#";
};
var useCreateFeedbackUrl = (repository, filepath, labels) => {
  const mounted = use_mounted_default();
  if (!mounted)
    return "#";
  const repo = parseGitUrl(repository || "");
  if (!repo)
    throw new Error("Invalid `docsRepositoryBase` URL!");
  const pageTitle = document.title;
  switch (repo.type) {
    case "github":
      return `https://github.com/${repo.owner}/${repo.name}/issues/new?title=${encodeURIComponent(`Feedback for \u201C${pageTitle}\u201D`)}&labels=${labels || ""}`;
    case "gitlab":
      return `https://gitlab.com/${repo.owner}/${repo.name}/-/blob/${repo.branch || "master"}/${repo.subdir || "pages"}${filepath}`;
  }
  return "#";
};
var EditPageLink = ({
  repository,
  text,
  filepath
}) => {
  const url = createEditUrl(repository, filepath);
  const { locale } = useRouter7();
  return /* @__PURE__ */ React25.createElement("a", {
    className: "text-xs font-medium no-underline block text-gray-500 mb-2 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100",
    href: url,
    target: "_blank",
    rel: "noreferrer"
  }, text ? render_component_default(text, {
    locale
  }) : "Edit this page");
};
var FeedbackLink = ({
  repository,
  text,
  filepath,
  labels
}) => {
  const url = useCreateFeedbackUrl(repository, filepath, labels);
  const { locale } = useRouter7();
  return /* @__PURE__ */ React25.createElement("a", {
    className: "text-xs font-medium no-underline block text-gray-500 mb-2 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100",
    href: url,
    target: "_blank",
    rel: "noreferrer"
  }, text ? render_component_default(text, {
    locale
  }) : "Feedback");
};
var indent = (level) => {
  switch (level) {
    case 3:
      return { marginLeft: "1rem " };
    case 4:
      return { marginLeft: "2rem " };
    case 5:
      return { marginLeft: "3rem " };
    case 6:
      return { marginLeft: "4rem " };
  }
  return {};
};
var emptyHeader = [];
function Item3({
  heading,
  slug,
  activeAnchor
}) {
  const text = getHeadingText(heading);
  const state = activeAnchor[slug];
  const ref = React25.useRef(null);
  React25.useEffect(() => {
    const el = ref.current;
    const toc = document.getElementsByClassName("nextra-toc")[0];
    if ((state == null ? void 0 : state.isActive) && el && toc) {
      scrollIntoView2(el, {
        behavior: "smooth",
        block: "center",
        inline: "center",
        scrollMode: "always",
        boundary: toc
      });
    }
  }, [state == null ? void 0 : state.isActive]);
  return /* @__PURE__ */ React25.createElement("li", {
    className: "scroll-py-6 scroll-my-6",
    style: indent(heading.depth),
    ref
  }, /* @__PURE__ */ React25.createElement("a", {
    href: `#${slug}`,
    className: cn9("no-underline inline-block", heading.depth === 2 ? "font-semibold" : "", (state == null ? void 0 : state.isActive) ? "text-primary-500 subpixel-antialiased" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"),
    "aria-selected": state == null ? void 0 : state.isActive
  }, text));
}
function ToC({
  headings = emptyHeader,
  filepathWithName
}) {
  const slugger = new Slugger2();
  const activeAnchor = useActiveAnchor();
  const config = useConfig();
  const { locale } = useRouter7();
  headings = headings ? headings.filter((heading) => heading.type === "heading" && heading.depth > 1) : headings;
  const hasHeadings = headings && headings.length > 0;
  const hasMetaInfo = config.feedbackLink || config.footerEditLink || config.tocExtraContent;
  return /* @__PURE__ */ React25.createElement("div", {
    className: "nextra-toc w-64 hidden xl:block text-sm px-4 order-last flex-shrink-0"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "nextra-toc-content overflow-y-auto pr-4 -mr-4 sticky max-h-[calc(100vh-4rem-env(safe-area-inset-bottom))] top-16 pt-8"
  }, hasHeadings && headings ? /* @__PURE__ */ React25.createElement("ul", null, /* @__PURE__ */ React25.createElement("p", {
    className: "font-semibold tracking-tight mb-4"
  }, "On This Page"), headings.map((heading) => {
    const text = getHeadingText(heading);
    const slug = slugger.slug(text);
    return /* @__PURE__ */ React25.createElement(Item3, {
      heading,
      activeAnchor,
      slug,
      key: slug
    });
  })) : null, hasMetaInfo ? /* @__PURE__ */ React25.createElement("div", {
    className: cn9("nextra-toc-meta", hasHeadings ? "border-t mt-8 pt-8 shadow-[0_-12px_16px_white] dark:shadow-[0_-12px_16px_#111] bg-white dark:bg-dark" : "", "sticky pb-8 bottom-0 dark:border-neutral-800")
  }, config.feedbackLink ? /* @__PURE__ */ React25.createElement(FeedbackLink, {
    filepath: filepathWithName,
    repository: config.docsRepositoryBase,
    labels: config.feedbackLabels,
    text: config.feedbackLink
  }) : null, config.footerEditLink ? /* @__PURE__ */ React25.createElement(EditPageLink, {
    filepath: filepathWithName,
    repository: config.docsRepositoryBase,
    text: config.footerEditLink
  }) : null, config.tocExtraContent ? /* @__PURE__ */ React25.createElement("div", {
    className: "pt-4 leading-4"
  }, render_component_default(config.tocExtraContent, { locale })) : null) : null));
}

// src/misc/default.config.tsx
import React26 from "react";
var defaultTheme = {
  projectLink: "https://github.com/shuding/nextra",
  docsRepositoryBase: "https://github.com/shuding/nextra",
  titleSuffix: " \u2013 Nextra",
  nextLinks: true,
  prevLinks: true,
  search: true,
  darkMode: true,
  nextThemes: {
    defaultTheme: "system",
    storageKey: "theme",
    forcedTheme: void 0
  },
  defaultMenuCollapsed: false,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} \xA9 Nextra.`,
  footerEditLink: "Edit this page",
  gitTimestamp: "Last updated on",
  logo: /* @__PURE__ */ React26.createElement(React26.Fragment, null, /* @__PURE__ */ React26.createElement("span", {
    className: "mr-2 font-extrabold hidden md:inline"
  }, "Nextra"), /* @__PURE__ */ React26.createElement("span", {
    className: "text-gray-600 font-normal hidden md:inline"
  }, "The Next Docs Builder")),
  head: /* @__PURE__ */ React26.createElement(React26.Fragment, null, /* @__PURE__ */ React26.createElement("meta", {
    name: "msapplication-TileColor",
    content: "#ffffff"
  }), /* @__PURE__ */ React26.createElement("meta", {
    httpEquiv: "Content-Language",
    content: "en"
  }), /* @__PURE__ */ React26.createElement("meta", {
    name: "description",
    content: "Nextra: the next docs builder"
  }), /* @__PURE__ */ React26.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), /* @__PURE__ */ React26.createElement("meta", {
    name: "twitter:site",
    content: "@shuding_"
  }), /* @__PURE__ */ React26.createElement("meta", {
    property: "og:title",
    content: "Nextra: the next docs builder"
  }), /* @__PURE__ */ React26.createElement("meta", {
    property: "og:description",
    content: "Nextra: the next docs builder"
  }), /* @__PURE__ */ React26.createElement("meta", {
    name: "apple-mobile-web-app-title",
    content: "Nextra"
  })),
  searchPlaceholder: ({ locale }) => {
    if (locale === "zh-CN")
      return "\u641C\u7D22\u6587\u6863...";
    return "Search documentation...";
  },
  unstable_searchResultEmpty: () => /* @__PURE__ */ React26.createElement("span", {
    className: "block p-8 text-center text-gray-400 text-sm select-none"
  }, "No results found.")
};
var default_config_default = defaultTheme;

// src/utils/normalize-pages.tsx
import getTitle from "title";

// src/misc/theme-context.tsx
var theme_context_default = {
  navbar: true,
  sidebar: true,
  toc: true,
  pagination: true,
  footer: true,
  layout: "default",
  typesetting: "default",
  breadcrumb: true
};

// src/utils/normalize-pages.tsx
function extendMeta(meta = {}, fallback) {
  if (typeof meta === "string") {
    meta = { title: meta };
  }
  const theme = Object.assign({}, fallback.theme, meta.theme);
  return Object.assign({}, fallback, meta, { theme });
}
function findFirstRoute(items) {
  for (const item of items) {
    if (item.route)
      return item.route;
    if (item.children) {
      const route = findFirstRoute(item.children);
      if (route)
        return route;
    }
  }
}
function normalizePages({
  list,
  locale,
  defaultLocale,
  route,
  docsRoot = "",
  underCurrentDocsRoot = false,
  pageThemeContext = theme_context_default
}) {
  let _meta;
  for (let item of list) {
    if (item.name === "meta.json") {
      if (locale === item.locale) {
        _meta = item.meta;
        break;
      }
      if (!_meta) {
        _meta = item.meta;
      }
    }
  }
  const meta = _meta || {};
  const metaKeys = Object.keys(meta);
  const directories = [];
  const flatDirectories = [];
  const docsDirectories = [];
  const flatDocsDirectories = [];
  const pageDirectories = [];
  const topLevelPageItems = [];
  let activeType = void 0;
  let activeIndex = 0;
  let activeThemeContext = pageThemeContext;
  let activePath = [];
  let metaKeyIndex = -1;
  const fallbackMeta = meta["*"] || {};
  delete fallbackMeta.title;
  delete fallbackMeta.href;
  const items = list.filter((a) => a.name !== "meta.json" && !a.name.startsWith("_") && (a.locale === locale || a.locale === defaultLocale || !a.locale)).sort((a, b) => {
    const indexA = metaKeys.indexOf(a.name);
    const indexB = metaKeys.indexOf(b.name);
    if (indexA === -1 && indexB === -1)
      return a.name < b.name ? -1 : 1;
    if (indexA === -1)
      return 1;
    if (indexB === -1)
      return -1;
    return indexA - indexB;
  }).flatMap((a) => {
    const items2 = [];
    const index = metaKeys.indexOf(a.name);
    if (index !== -1) {
      for (let i = metaKeyIndex + 1; i < index; i++) {
        const key = metaKeys[i];
        if (key !== "*") {
          items2.push(__spreadValues({
            name: key,
            route: ""
          }, meta[key]));
        }
      }
      metaKeyIndex = index;
    }
    items2.push(a);
    return items2;
  });
  for (let i = metaKeyIndex + 1; i < metaKeys.length; i++) {
    const key = metaKeys[i];
    if (key !== "*") {
      items.push(__spreadValues({
        name: key,
        route: "#"
      }, meta[key]));
    }
  }
  for (let i = 0; i < items.length; i++) {
    const a = items[i];
    if (i + 1 < items.length && a.name === items[i + 1].name) {
      items[i + 1] = __spreadProps(__spreadValues({}, items[i + 1]), { withIndexPage: true });
      if (a.children && !items[i + 1].children) {
        items[i + 1].children = a.children;
      }
      continue;
    }
    const extendedMeta = extendMeta(meta[a.name], fallbackMeta);
    const type = extendedMeta.type || "doc";
    const title = extendedMeta.title || (type === "separator" ? void 0 : getTitle(a.name));
    const hidden = extendedMeta.hidden;
    const extendedPageThemeContext = __spreadValues(__spreadValues({}, pageThemeContext), extendedMeta.theme);
    const isCurrentDocsTree = route.startsWith(docsRoot);
    const normalizedChildren = a.children ? normalizePages({
      list: a.children,
      locale,
      defaultLocale,
      route,
      docsRoot: type === "page" ? a.route : docsRoot,
      underCurrentDocsRoot: underCurrentDocsRoot || isCurrentDocsTree,
      pageThemeContext: extendedPageThemeContext
    }) : void 0;
    const item = __spreadProps(__spreadValues({}, a), {
      title,
      type,
      hidden,
      children: normalizedChildren ? [] : void 0
    });
    const docsItem = __spreadProps(__spreadValues({}, a), {
      title,
      type,
      hidden,
      children: normalizedChildren ? [] : void 0
    });
    const pageItem = __spreadProps(__spreadValues({}, a), {
      title,
      type,
      hidden,
      children: normalizedChildren ? [] : void 0
    });
    if (a.route === route) {
      activePath = [item];
      activeType = type;
      activeThemeContext = __spreadValues(__spreadValues({}, activeThemeContext), extendedPageThemeContext);
      switch (type) {
        case "page":
          activeIndex = topLevelPageItems.length;
          break;
        case "doc":
          if (isCurrentDocsTree) {
            activeIndex = flatDocsDirectories.length;
          }
      }
    }
    if (hidden)
      continue;
    if (normalizedChildren) {
      if (normalizedChildren.activeIndex !== void 0 && normalizedChildren.activeType !== void 0) {
        activeThemeContext = normalizedChildren.activeThemeContext;
        activeType = normalizedChildren.activeType;
        activePath = [item, ...normalizedChildren.activePath];
        switch (activeType) {
          case "page":
            activeIndex = topLevelPageItems.length + normalizedChildren.activeIndex;
            break;
          case "doc":
            activeIndex = flatDocsDirectories.length + normalizedChildren.activeIndex;
            break;
        }
        if (a.withIndexPage) {
          if (type === "doc") {
            activeIndex++;
          }
        }
      }
    }
    if (normalizedChildren) {
      switch (type) {
        case "page":
          pageItem.children.push(...normalizedChildren.pageDirectories);
          docsDirectories.push(...normalizedChildren.docsDirectories);
          if (normalizedChildren.flatDirectories.length) {
            pageItem.firstChildRoute = findFirstRoute(normalizedChildren.flatDirectories);
            topLevelPageItems.push(pageItem);
          } else if (pageItem.withIndexPage) {
            topLevelPageItems.push(pageItem);
          }
          break;
        case "doc":
          if (isCurrentDocsTree) {
            Array.isArray(docsItem.children) && docsItem.children.push(...normalizedChildren.docsDirectories);
            pageDirectories.push(...normalizedChildren.pageDirectories);
            if (item.withIndexPage) {
              flatDocsDirectories.push(docsItem);
            }
          }
      }
      flatDirectories.push(...normalizedChildren.flatDirectories);
      flatDocsDirectories.push(...normalizedChildren.flatDocsDirectories);
      Array.isArray(item.children) && item.children.push(...normalizedChildren.directories);
    } else {
      flatDirectories.push(item);
      switch (type) {
        case "page":
          topLevelPageItems.push(pageItem);
          break;
        case "doc":
          if (isCurrentDocsTree) {
            flatDocsDirectories.push(docsItem);
          }
      }
    }
    directories.push(item);
    switch (type) {
      case "page":
        pageDirectories.push(pageItem);
        if (isCurrentDocsTree && underCurrentDocsRoot) {
          docsDirectories.push(pageItem);
        }
        break;
      case "doc":
      case "separator":
        if (isCurrentDocsTree) {
          docsDirectories.push(docsItem);
        }
    }
  }
  return {
    activeType,
    activeIndex,
    activeThemeContext,
    activePath,
    directories,
    flatDirectories,
    docsDirectories,
    flatDocsDirectories,
    pageDirectories,
    topLevelPageItems
  };
}

// src/polyfill.tsx
if (typeof window !== "undefined") {
  let resizeTimer;
  const addResizingClass = () => {
    document.body.classList.add("resizing");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resizing");
    }, 200);
  };
  window.addEventListener("resize", addResizingClass);
}

// src/breadcrumb.tsx
import React27 from "react";
import Link7 from "next/link";
import cn10 from "classnames";
function Breadcrumb({ activePath }) {
  return /* @__PURE__ */ React27.createElement("div", {
    className: "nextra-breadcrumb text-sm font-normal flex mt-2.5 text-gray-500 transition-colors cursor-default overflow-hidden"
  }, activePath.map((item, index) => {
    const isLink = !item.children || item.withIndexPage;
    const isActive = index === activePath.length - 1;
    return /* @__PURE__ */ React27.createElement(React27.Fragment, {
      key: item.route
    }, index ? /* @__PURE__ */ React27.createElement(arrow_right_default, {
      width: 14,
      className: "mx-1 select-none"
    }) : null, /* @__PURE__ */ React27.createElement("div", {
      key: item.route,
      className: cn10("transition-colors hover:text-gray-900 dark:hover:text-gray-200", {
        "text-gray-600 dark:text-gray-400 active": isActive,
        "text-ellipsis whitespace-nowrap overflow-hidden min-w-[24px]": !isActive
      })
    }, isLink && !isActive ? /* @__PURE__ */ React27.createElement(Link7, {
      href: item.route
    }, /* @__PURE__ */ React27.createElement("a", {
      className: "text-current no-underline"
    }, item.title)) : item.title));
  }));
}

// src/index.tsx
var isProduction = process.env.NODE_ENV === "production";
function useDirectoryInfo(pageMap) {
  const { locale, defaultLocale, asPath } = useRouter8();
  return useMemo3(() => {
    const fsPath = getFSRoute(asPath, locale);
    return normalizePages({
      list: pageMap,
      locale,
      defaultLocale,
      route: fsPath
    });
  }, [pageMap, locale, defaultLocale, asPath]);
}
var Body = ({
  themeContext,
  breadcrumb,
  navLinks,
  timestamp,
  children
}) => {
  const config = useConfig();
  const { locale } = useRouter8();
  const date = timestamp ? new Date(timestamp) : null;
  return /* @__PURE__ */ React28.createElement(React28.Fragment, null, /* @__PURE__ */ React28.createElement(SkipNavContent, null), themeContext.layout === "full" ? /* @__PURE__ */ React28.createElement("article", {
    className: "nextra-body full relative justify-center overflow-x-hidden pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]"
  }, /* @__PURE__ */ React28.createElement(MDXTheme, null, children), date && config.gitTimestamp ? /* @__PURE__ */ React28.createElement("div", {
    className: "text-xs text-right block text-gray-500 mt-12 mb-8 dark:text-gray-400 pointer-default"
  }, typeof config.gitTimestamp === "string" ? config.gitTimestamp + " " + date.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }) : render_component_default(config.gitTimestamp, {
    timestamp: date,
    locale
  })) : /* @__PURE__ */ React28.createElement("div", {
    className: "mt-16"
  }), navLinks) : themeContext.layout === "raw" ? /* @__PURE__ */ React28.createElement("div", {
    className: "nextra-body full relative overflow-x-hidden expand"
  }, children) : /* @__PURE__ */ React28.createElement("article", {
    className: cn11("nextra-body relative pb-8 w-full justify-center max-w-full flex min-w-0 pr-[calc(env(safe-area-inset-right)-1.5rem)]", themeContext.typesetting ? "nextra-body-typesetting-" + themeContext.typesetting : "")
  }, /* @__PURE__ */ React28.createElement("main", {
    className: "max-w-4xl px-6 md:px-8 pt-4 z-10 min-w-0 w-full"
  }, breadcrumb, /* @__PURE__ */ React28.createElement(MDXTheme, null, children), date && config.gitTimestamp ? /* @__PURE__ */ React28.createElement("div", {
    className: "text-xs text-right block text-gray-500 mt-12 mb-8 dark:text-gray-400 pointer-default"
  }, typeof config.gitTimestamp === "string" ? config.gitTimestamp + " " + date.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }) : render_component_default(config.gitTimestamp, {
    timestamp: date,
    locale
  })) : /* @__PURE__ */ React28.createElement("div", {
    className: "mt-16"
  }), navLinks)));
};
var Content = ({
  filename,
  pageMap,
  meta,
  titleText,
  headings,
  timestamp,
  children
}) => {
  const { route, locale } = useRouter8();
  const config = useConfig();
  const {
    activeType,
    activeIndex,
    activeThemeContext,
    activePath,
    topLevelPageItems,
    docsDirectories,
    flatDirectories,
    flatDocsDirectories,
    directories
  } = useDirectoryInfo(pageMap);
  const filepath = route.slice(0, route.lastIndexOf("/") + 1);
  const filepathWithName = filepath + filename;
  const title = meta.title || titleText || "Untitled";
  const isRTL = useMemo3(() => {
    if (!config.i18n)
      return config.direction === "rtl";
    const localeConfig = config.i18n.find((l) => l.locale === locale);
    return localeConfig && localeConfig.direction === "rtl";
  }, [config.i18n, locale]);
  const [menu, setMenu] = useState7(false);
  const themeContext = __spreadValues(__spreadValues({}, activeThemeContext), meta);
  const hideSidebar = !themeContext.sidebar || themeContext.layout === "raw";
  const hideToc = !themeContext.toc || themeContext.layout === "raw";
  const headingArr = headings != null ? headings : [];
  return /* @__PURE__ */ React28.createElement(React28.Fragment, null, /* @__PURE__ */ React28.createElement(Head, {
    title,
    locale,
    meta
  }), /* @__PURE__ */ React28.createElement(MenuContext.Provider, {
    value: {
      menu,
      setMenu,
      defaultMenuCollapsed: !!config.defaultMenuCollapsed
    }
  }, /* @__PURE__ */ React28.createElement("div", {
    className: cn11("nextra-container main-container flex flex-col", {
      rtl: isRTL,
      "menu-active": menu
    })
  }, themeContext.navbar ? /* @__PURE__ */ React28.createElement(Navbar, {
    isRTL,
    flatDirectories,
    items: topLevelPageItems
  }) : null, /* @__PURE__ */ React28.createElement(ActiveAnchor, null, /* @__PURE__ */ React28.createElement("div", {
    className: "max-w-[90rem] w-full mx-auto flex flex-1 items-stretch"
  }, /* @__PURE__ */ React28.createElement("div", {
    className: "flex flex-1 w-full"
  }, /* @__PURE__ */ React28.createElement(Sidebar, {
    directories: docsDirectories,
    flatDirectories,
    fullDirectories: directories,
    headings,
    isRTL,
    asPopover: activeType === "page" || hideSidebar,
    includePlaceholder: themeContext.layout === "default"
  }), activeType === "page" || hideToc || themeContext.layout !== "default" ? themeContext.layout === "full" || themeContext.layout === "raw" ? null : /* @__PURE__ */ React28.createElement("div", {
    className: "nextra-toc w-64 hidden xl:block text-sm px-4 order-last flex-shrink-0"
  }) : /* @__PURE__ */ React28.createElement(ToC, {
    headings: config.floatTOC ? headingArr : null,
    filepathWithName
  }), /* @__PURE__ */ React28.createElement(Body, {
    themeContext,
    breadcrumb: activeType === "page" ? null : themeContext.breadcrumb ? /* @__PURE__ */ React28.createElement(Breadcrumb, {
      activePath
    }) : null,
    navLinks: activeType === "page" ? null : themeContext.pagination ? /* @__PURE__ */ React28.createElement(NavLinks, {
      flatDirectories: flatDocsDirectories,
      currentIndex: activeIndex,
      isRTL
    }) : null,
    timestamp
  }, children)))), themeContext.footer && config.footer ? /* @__PURE__ */ React28.createElement(footer_default, {
    menu: activeType === "page" || hideSidebar
  }) : null)));
};
var createLayout = (opts, _config) => {
  const extendedConfig = Object.assign({}, default_config_default, _config);
  let layoutUsed = false;
  const Page = ({ children }) => {
    if (!layoutUsed && isProduction) {
      throw new Error("[Nextra] Please add the `getLayout` logic to your _app.js, see https://nextjs.org/docs/basic-features/layouts#per-page-layouts.");
    }
    return children;
  };
  Page.getLayout = (page) => {
    layoutUsed = true;
    return /* @__PURE__ */ React28.createElement(ThemeConfigContext.Provider, {
      value: extendedConfig
    }, /* @__PURE__ */ React28.createElement(ThemeProvider, __spreadValues({
      attribute: "class",
      disableTransitionOnChange: true
    }, {
      defaultTheme: extendedConfig.nextThemes.defaultTheme,
      storageKey: extendedConfig.nextThemes.storageKey,
      forcedTheme: extendedConfig.nextThemes.forcedTheme
    }), /* @__PURE__ */ React28.createElement(Content, __spreadValues({}, opts), page)));
  };
  return Page;
};
var src_default = createLayout;
export {
  src_default as default
};
