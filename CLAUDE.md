# ponfitt-cms

Online menu for Pizzeria Ponfitt. Phase 1: static bilingual (IT/EN) menu from
a typed fixture. Phase 2 (not now): backend + `/admin` so the owner edits the
menu himself — `lib/menu-client.ts` is the one-file seam to swap the fixture
for a real fetch.

Structure and conventions follow `lipari-website-fe` (layered, no barrels,
colocated tests, `@/` aliases, `type` only with `T` prefix, `ROUTES` const,
Tailwind only, Prettier: no semicolons/trailing commas). Not copied on
purpose: Motion, Playwright, CI/CD UAT/prod flow, debug layout.

## Stack

Next.js (App Router) + React 18.3.1 + TypeScript · Tailwind v4 · Yarn 4
(node-modules linker) · ESLint + Prettier + Husky/lint-staged · Vitest + RTL ·
Deploy: Vercel (no `vercel.json` needed).

## Layout

- Single route `/`. i18n with **typesafe-i18n** (same setup as `aspire-crm`):
  base locale `it`, `en` second. Translations in `src/i18n/{it,en}/index.ts`
  (`it` is `BaseTranslation`, `en` is `Translation`, so a missing/extra key in
  `en` is a TS error). `i18n-*.ts(x)` and `i18n-types.ts` are **generated**
  (`yarn i18n`, also run by `dev`/`build`) and committed — never edit them.
  Use `const { LL } = useI18nContext()` → `LL.ui.soldOut()`.
- `I18nProvider` loads both locales synchronously, renders the base locale on
  the server/first paint, then applies stored (`localStorage["lang"]`) or
  browser language via `useSyncExternalStore`; anything non-Italian → `en`.
  `<html lang>` follows the locale.
- Menu ids are data, so category/item keys can't be typed statically:
  `lib/menu-i18n.ts` holds the single cast, `menu-i18n.test.ts` guarantees
  every category and item has a translation in every locale. `content/menu.ts`
  keeps only ids, names (proper nouns), prices, availability.
- Mobile-first showcase (no ordering). Routes: `/` home (lunch-of-the-day card, two promo
  cards, shortcuts to menu groups, review card), `/lunch` (weekly lunch menu),
  `/promo/[slug]` (offers of a promo; data in `content/promos.ts`), `/menu?cat=pizze|paninoni|schiacciate`
  (chips; `constant/menuGroups.ts` maps chips → categories, pizze = pizze +
  specials + vegetariane), `/info` (call, address, hours, services, delivery partners, Instagram, review),
  `/menu` reads `searchParams`, so it is server-rendered.
- Chrome: `components/layout/Header` = logo + `LanguageToggle` (IT/EN); `TabBar`
  (client) is a full-width bottom bar: Home, Menu, Info and, on the right, a
  slightly wider/taller **Call** cell (`tel:`). No settings page.
- `views/<page>/` — page composition + `sections/` (client components using `useI18nContext`)
- `content/business.ts` — phone, address, hours, socials, review URL.
  Real data from the Google Maps listing; the Place ID behind `reviewUrl` is
  derived (unverified) and there is no Facebook page yet.
- `lib/` — `env.ts` (Zod), `menu-client.ts` (server data fetcher), `menu-i18n.ts`

## Design tokens (`app/globals.css`)

`eban #160B04` · `terracotta #D26928` · `sabbia #E2D8B9` · `alabastro #F9F5ED`
(`bg-alabastro`, `text-terracotta`, ...). Big text: `font-display` (Tackerlen,
`next/font/local`); body: Helvetica Neue stack (system font, no webfont).
Global defaults live in `@layer base` — unlayered rules would beat utilities.

**Style: Swiss grid + vintage print.** Flat colour, no shadows, square corners
(`rounded-xs` at most), 1px eban hairlines for structure, solid thick rules (`border-b-6`, `border-y-6`)
for page titles and the review block, wide-tracked uppercase
labels, dotted leaders between dish and price, `Est. 1990` as a recurring mark.
Shared pieces: `components/ui/Button` (variants primary/secondary/dark),
`components/ui/SectionHeading`.

## Branches & deploy

`develop` (work) → PR → `main`. Vercel's Git integration deploys `main` to
production and `develop` as a preview, no Actions deploy and no secrets.
`ci.yml` (lint, typecheck, test, build) runs on PRs to `develop`/`main` and
pushes to `develop`; make it required on `main` via branch protection
(Settings → Branches) so a red PR can't be merged.

## Gotchas

- Typecheck with `yarn typecheck` (runs `next typegen` first). `next-env.d.ts` is gitignored
  and holds the `*.png` module types, so a bare `tsc` on a fresh checkout/CI fails.
- Set `NEXT_PUBLIC_SITE_URL` on Vercel, otherwise the canonical URL points to localhost.
- Metadata (title/description) is Italian only: language is client-side state, so
  crawlers see the Italian page. Revisit if English SEO matters.
- Menu copy transcribed from the owner's PDF as-is (typos like "Pane Consato"
  kept). Only five categories exist (pizze, specials, vegetariane, paninoni,
  schiacciate); the PDF's extra untitled sandwich block was dropped on purpose.
