# Next.js Static Site Boilerplate

A lightweight business website template using Next.js App Router, React Bootstrap,
Bootstrap 5, CSS Modules and AOS. Pages are exported as static HTML for Cloudflare Pages.

## Development and checks

Use Node.js 22.23.3 or later on the Node 22 LTS line (see `.nvmrc`).

```sh
npm ci
npm run dev
npm run lint
npm audit
npm run build
npm run start
```

Development runs at http://localhost:3000. Build creates `out/`, then the postbuild
hook writes `sitemap.xml` and `robots.txt` into that folder.
Start previews the export at http://localhost:3000 using a small local static server;
it does not run a production Next.js server or apply Cloudflare headers.

## Cloudflare Pages

- Build command: `npm run build` (required for the sitemap postbuild hook).
- Output directory: `out`.
- Set the build Node version to match `.nvmrc`.
- `public/_headers` is copied to `out/_headers` and applied by Cloudflare Pages.
- No CSP is supplied: any future CSP must be tested against exported Next.js inline scripts.
- Test deployed header responses, direct access to /contact, missing-page responses,
  canonical URLs and preview-deployment indexing before launch.

Keep static export enabled. Server Actions, request-dependent routes and the default
Next.js image optimisation server do not work on this static hosting setup.

## New client checklist

1. Update `lib/site-config.json`: name, production URL, description, contact details,
   navigation and optional agency credit (set credit to null to omit).
2. Update page copy in `app/page.js` and `app/contact/page.js`. Add navigation entries
   only after adding their routes. Sitemap generation discovers built routes automatically.
3. Customise theme colours in `app/globals.css`; check contrast and focus states.
4. Replace `app/favicon.ico`. Optionally add a sharing image in `public/` and set
   `socialImage` to its root-relative path, such as `/og-image.webp`.
   Until then, image metadata is omitted rather than pointing at a missing asset.
5. Contact fields are a disabled, clearly labelled example. Connect a hosted service
   per client before enabling submission; add validation, feedback and spam protection.
6. Add privacy/legal pages only where appropriate, then link them. Add analytics,
   consent, maps or booking integrations only when required.
7. Run lint, audit and build. Confirm sitemap, robots and headers in `out/`.
8. Test mobile navigation, keyboard/skip-link access, reduced motion, JavaScript-disabled
   content, AOS on page changes and responsive layouts. Verify on Cloudflare before launch.

## Images, fonts and animation

Compress images before adding them, preferably using WebP/AVIF where suitable.
Set width/height or an aspect ratio, supply responsive image sizes, and lazy-load
below-the-fold images. Do not lazy-load the primary hero image.

For `next/image`, use `unoptimized` (per image or in Next config) or a deliberately
configured external image loader. Unoptimized images are not automatically compressed.
No image service is required by this template.

Roboto is self-hosted by `next/font`; builds need access to Google Fonts.
AOS fades run once, refresh on route changes, respect reduced motion and keep content
visible without JavaScript. Footer copyright year updates on each build.

## Configuration and secrets

The site configuration is public information. Never put secrets or private credentials
there, in page content, or in `NEXT_PUBLIC_*` variables. Static output and browser bundles
are public; even build-only variables must not be rendered into them. Environment changes
require a rebuild. Environment files are ignored by Git. This template needs no secrets.

`npm audit` includes development dependencies. Review advisories and use compatible
updates rather than blindly applying forced major-version fixes.

Current audit limitation: the build/lint dependency chain includes `braces` 3.0.3
([GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm)),
which has no patched release. The full audit reports six high findings through this
one chain. It is not included in visitor bundles; avoid untrusted build glob patterns
and review the advisory when updating tooling. Production dependency audit is separate
(`npm audit --omit=dev`).
