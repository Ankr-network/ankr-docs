import Prism from 'prism-react-renderer/prism';

export function enableAdditionalLanguagesInPrism() {
    (typeof global !== "undefined" ? global : window).Prism = Prism
    require("prismjs/components/prism-kotlin")
    require("prismjs/components/prism-csharp")
    require("prismjs/components/prism-solidity")
    require("prismjs/components/prism-shell-session")
    require("prismjs/components/prism-swift")
}