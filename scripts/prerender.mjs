import { readFile, writeFile, rm } from "node:fs/promises";
import { render } from "../.ssr/entry-server.js";

const file = new URL("../dist/index.html", import.meta.url);
const template = await readFile(file, "utf8");
const mount = '<div id="root"></div>';
if (!template.includes(mount))
  throw new Error("Cannot find the application mount for prerendering.");
await writeFile(
  file,
  template.replace(mount, `<div id="root">${render()}</div>`),
);
await rm(new URL("../.ssr", import.meta.url), { recursive: true, force: true });
console.log("Prerendered page content into dist/index.html.");
