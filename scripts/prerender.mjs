import { mkdir, readFile, writeFile, rm } from "node:fs/promises";
import { loadEnv } from "vite";
import { render, sitePages } from "../.ssr/entry-server.js";

const output = new URL("../dist/", import.meta.url);
const template = await readFile(new URL("index.html", output), "utf8");
const mount = '<div id="root"></div>';
if (!template.includes(mount))
  throw new Error("Cannot find the application mount for prerendering.");
const config = loadEnv("production", process.cwd(), "SITE_");
const configuredURL = (process.env.SITE_URL ?? config.SITE_URL ?? "").trim();
let origin;
if (configuredURL) {
  const url = new URL(configuredURL);
  if (
    url.protocol !== "https:" ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      "SITE_URL must be an HTTPS origin without a path, credentials, query, or hash.",
    );
  }
  origin = url.origin;
}
const escape = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

function documentFor(page) {
  let html = template.replace(
    mount,
    `<div id="root">${render(page.path)}</div>`,
  );
  html = html.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${escape(page.title)}</title>`,
  );
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escape(page.description)}" />`,
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escape(page.title)}" />`,
  );
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escape(page.title)}" />`,
  );
  for (const [attribute, name] of [
    ["property", "og:description"],
    ["name", "twitter:description"],
  ]) {
    html = html.replace(
      new RegExp(`<meta\\s+${attribute}="${name}"\\s+content="[^"]*"\\s*\\/?>`),
      `<meta ${attribute}="${name}" content="${escape(page.description)}" />`,
    );
  }
  if (origin && page.path !== "/404/") {
    const url = `${origin}${page.path}`;
    html = html.replace(
      "</head>",
      `<link rel="canonical" href="${escape(url)}" /><meta property="og:url" content="${escape(url)}" /></head>`,
    );
  }
  if (origin) {
    html = html.replace(
      /content="\/northstar-logo.png"/g,
      `content="${escape(origin)}/northstar-logo.png"`,
    );
    html = html.replace(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
      (_, json) => {
        const organization = {
          ...JSON.parse(json),
          url: `${origin}/`,
          logo: `${origin}/northstar-logo.png`,
        };
        return `<script type="application/ld+json">${JSON.stringify(organization).replace(/</g, "\\u003c")}</script>`;
      },
    );
  }
  if (page.path === "/404/")
    html = html.replace(
      "</head>",
      '<meta name="robots" content="noindex" /></head>',
    );
  return html;
}

for (const page of sitePages) {
  const directory = new URL(page.path.slice(1), output);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL("index.html", directory), documentFor(page));
}
await writeFile(
  new URL("404.html", output),
  documentFor({
    path: "/404/",
    title: "Page Not Found | NorthStar Labs",
    description:
      "Find your direction with NorthStar Labs. Explore learning, internships, community, and services.",
  }),
);
if (origin) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitePages.map((page) => `<url><loc>${escape(origin + page.path)}</loc></url>`).join("")}</urlset>\n`;
  await writeFile(new URL("sitemap.xml", output), sitemap);
  await writeFile(
    new URL("robots.txt", output),
    `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`,
  );
}
await rm(new URL("../.ssr/", import.meta.url), {
  recursive: true,
  force: true,
});
console.log(
  `Prerendered ${sitePages.length} pages and a 404 page${origin ? " with domain metadata and sitemap" : ""}.`,
);
