const fs = require("fs");

const lines = fs.readFileSync("tmp-home-utf8.jsx", "utf8").split(/\r?\n/);
const start = 2; // skip opening <div> and backtick line inserted by converter
const end = lines.findIndex((line) => line.includes("return (")); // stop before junk footer

const bodyLines = lines.slice(start, end);

let body = bodyLines.join("\n");

// Adjust asset and link paths for React app routing
body = body.replace(/src="assets\//g, 'src="/assets/');
body = body.replace(/href="assets\//g, 'href="/assets/');
body = body.replace(/data-background="assets\//g, 'data-background="/assets/');
body = body.replace(/href="([^"\\]+)\.html"/g, (_m, path) => {
  const route = path === "index" ? "" : path;
  return `href="/${route}"`;
});

// Remove trailing backtick line if present
const bodyLinesClean = body.split(/\r?\n/);
if (bodyLinesClean[bodyLinesClean.length - 1]?.trim() === "`") {
  bodyLinesClean.pop();
}

const bodyClean = bodyLinesClean.join("\n");
fs.writeFileSync("tmp-home-body.jsx", bodyClean, "utf8");

const jsxContent = bodyLinesClean.map((line) => `    ${line}`).join("\n");
const component = `import { useSwiper } from '../hooks/useSwiper'
import { useScripts } from '../hooks/useScripts'

function Home() {
  useSwiper()
  useScripts()

  return (
    <>
${jsxContent}
    </>
  )
}

export default Home
`;

fs.writeFileSync("src/pages/Home.jsx", component, "utf8");
console.log("body lines", bodyLinesClean.length, "chars", body.length);
