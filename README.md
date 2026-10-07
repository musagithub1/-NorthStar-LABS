# NorthStar Labs

An eight-page React + TypeScript website built with Vite. It uses the supplied logo unchanged, locally hosted fonts, navy surfaces, and blue/cyan accents.

## Run

Use Node.js 22.12 or later and npm:

```bash
npm ci
npm run dev
```

Open the URL printed by Vite. `npm run build` checks TypeScript, bundles the assets, and pre-renders every page into `dist/`. `npm run preview` serves that production build locally. The preview command is not a production hosting service.

## Pages and content

| Route           | Purpose                                                                               |
| --------------- | ------------------------------------------------------------------------------------- |
| `/`             | The NorthStar mission and student/client starting points                              |
| `/internships/` | Free skill-based internships, expectations, focus areas, and WhatsApp CV applications |
| `/learn/`       | Filterable learning directions and free resource enquiries                            |
| `/community/`   | Peer learning, shared responsibility, and the earning vision                          |
| `/services/`    | Client services and enquiries with the selected service carried into the contact form |
| `/projects/`    | Clearly labeled illustrative project directions                                       |
| `/about/`       | The story from shared resources to internships and team growth                        |
| `/contact/`     | Email/WhatsApp enquiry drafts, direct contacts, and CV application links              |

All routes have their own generated HTML, title, and description. Ordinary links make direct navigation work on a static host without a client-side routing rewrite. Main content and direct contact links work without JavaScript; filters, dialogs, and the form use JavaScript. `dist/404.html` provides a custom missing-page screen.

| Source                             | Update here                                                                |
| ---------------------------------- | -------------------------------------------------------------------------- |
| `src/pages/`                       | Main page copy and composition                                             |
| `src/data/content.ts`              | Contact details, learning directions, services, and general FAQs           |
| `src/data/community.ts`            | Internship benefits/FAQs, values, journey, and CV introduction             |
| `src/data/pages.ts`                | Route list, page titles, and descriptions                                  |
| `src/components/`                  | Shared navigation, footer, forms, dialogs, and sections                    |
| `src/styles.css` / `src/pages.css` | Brand styling, component states, and responsive layouts                    |
| `scripts/prerender.mjs`            | Static HTML, domain metadata, sitemap, and robots generation               |
| `index.html`                       | Shared metadata, favicon, organization details, and no-JavaScript contacts |
| `public/northstar-logo.png`        | Original logo; preserve this file and its aspect ratio                     |

The owner has confirmed that NorthStar began by sharing free courses/resources and is introducing free skill-based internships. Intake dates, schedules, duration, certificate criteria, and current project availability remain enquiries rather than invented details. Learning directions are not a scheduled course catalog. The client-work and contribution-based revenue-sharing model is a stated vision, not a promised salary or guaranteed income. Project illustrations describe potential work, not completed case studies.

If contact details change, update the shared constants, directly written labels, and organization/no-JavaScript contacts in `index.html`.

## Contact behavior

CV links open WhatsApp with an introduction. Applicants attach their CV and send it themselves. The site does not upload or store CVs.

The form prepares an email or WhatsApp draft. The visitor reviews and sends it in their chosen service. There is no submission backend, account system, or stored enquiry database, and no claim that a message was sent. Reopen/copy/view controls preserve a usable draft if an app does not open. Editing the form clears the old draft. Opening an external app shares the draft with that service under its privacy policy.

## Checks

```bash
npm run typecheck
npm run build
npm test
```

Playwright checks all eight pages on desktop/mobile, automated WCAG A/AA checks, filters, dialog focus, CV links, service enquiry subjects, contact drafts, navigation, and content without JavaScript. No test sends a message. Tests use the system Chrome executable when available; otherwise install Playwright Chromium with `npx playwright install chromium`, or set `PLAYWRIGHT_CHROMIUM_EXECUTABLE` to your browser executable. Use `npm run format` to format the source.

## Static deployment

Publish the contents of `dist/` to an HTTPS static host. For repository builds, use `npm run build` and output directory `dist`. The site assumes deployment at the domain root and uses `/route/index.html` files; preserve this directory structure. Configure the host to use `404.html` for missing pages.

Copy `.env.example` to `.env` and set `SITE_URL` to the actual public HTTPS origin before building for publication. It must contain only the origin, with no path, credentials, query, or hash. Alternatively set `SITE_URL` in the host's build environment.

When configured, the build generates each page's canonical and Open Graph URL, absolute social/organization logo URLs, `sitemap.xml`, and its robots reference. When blank, local previews use relative image URLs and no invented public domain or sitemap.

Review current intake details and contact information before publication. No analytics or advertising integrations are included; update privacy copy if tracking or a submission backend is added.
