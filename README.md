# NorthStar Labs

A responsive React + TypeScript website built with Vite. The visual identity uses the supplied NorthStar Labs logo, dark navy surfaces, and blue/cyan accents. Fonts are bundled locally.

## Run locally

Use Node.js 22.12 or later and npm.

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite. Other available commands:

```bash
npm run typecheck
npm run build
npm run preview
```

`build` checks TypeScript, bundles assets, and pre-renders the page into the static site in `dist/`. Main content and direct contact links work without JavaScript; JavaScript enables the interactive controls. `preview` serves that build locally; it is not a production server. These commands describe how to validate the site, not a record of completed checks.

## Verify

After building, run `npm test`. The Playwright suite checks desktop/mobile navigation, filters, dialog focus, FAQ controls, validated contact handoffs, accessibility, overflow, and the page without JavaScript. It never sends a message. The configuration uses `/usr/bin/google-chrome` by default; set `PLAYWRIGHT_CHROMIUM_EXECUTABLE` to your installed Chrome/Chromium executable when needed. Run `npm run format` to format the source.

## Structure and content updates

| File                                             | Purpose                                                                                     |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| `src/App.tsx`                                    | Page sections, navigation, learning filters, detail dialogs, FAQs, and contact interactions |
| `src/data/content.ts`                            | Contact constants, learning directions, services, categories, and FAQ copy                  |
| `src/styles.css`                                 | Brand styling, layout, component states, and typography                                     |
| `src/main.tsx`                                   | Client entry point and hydration of the generated HTML                                      |
| `src/entry-server.tsx` / `scripts/prerender.mjs` | Build-time rendering for readable, indexable HTML without JavaScript                        |
| `index.html`                                     | Page title, search/social metadata, favicon, and organization structured data               |
| `public/northstar-logo.png`                      | Original supplied logo, preserved unchanged                                                 |

Update repeatable content in `src/data/content.ts`. Keep learning categories aligned with `topics` so filtering continues to work. Main section copy and illustrative project directions live in `src/App.tsx`. If contact information changes, update both the shared constants and the organization metadata in `index.html`; check any directly written contact labels as well.

Learning paths describe proposed areas of learning, not courses currently open for enrollment. Availability, schedules, entry requirements, and certificates must be confirmed before publishing specific offers. Project illustrations describe potential applications, not completed client work. Add portfolio entries only when real work and permission to publish are available. Do not add invented clients, testimonials, statistics, team members, or credentials.

Keep `public/northstar-logo.png` unchanged. Preserve its aspect ratio when displaying it; do not recolor, redraw, distort, or replace it.

## Contact behavior

The form prepares a draft and opens the visitor's email application using `mailto:` or opens WhatsApp with a prefilled message. The visitor reviews and sends the message in that service. There is no submission backend, mailing list, account system, or stored enquiry database, and the site does not claim a message was sent.

Continuing to an external service hands the draft to that app or service. If an email application is not configured or a new window is blocked, the direct email address, copy action, and WhatsApp link provide alternatives. If a submission backend is added later, update confirmation states and privacy copy to reflect its actual behavior.

## Deploy

Run `npm ci` and `npm run build`, then publish the **contents of `dist/`** with a static HTTPS host. A host that builds from the repository should use `npm run build` as its build command and `dist` as its output directory. This site currently assumes deployment at the domain root. For a subdirectory deployment, configure Vite's `base` and update root-relative asset references consistently.

Before publishing:

- Choose the actual public domain. Add a canonical link and `og:url` in `index.html` using that domain; do not publish a placeholder URL.
- Change `og:image` and `twitter:image` to absolute HTTPS URLs for the unchanged logo on the actual domain. Add the real site URL and absolute logo URL to the organization structured data.
- Confirm the supplied email, WhatsApp number, and location are correct and monitored.
- Run the type check and production build; inspect the built site on mobile, tablet, and desktop.
- Check keyboard navigation, focus states, mobile navigation, dialogs, filters, FAQ controls, and both contact handoffs. Sending an actual message remains a deliberate action in the external app.
- Review opportunity and project copy for current, verified information and review privacy copy against the chosen host's behavior.

No analytics or advertising integrations are included in the application. Revisit privacy information if tracking, embedded services, or backend data collection are introduced.
