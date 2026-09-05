# truvector.science

The public site for **TruVector**, the core research programme of InTellMe:
pre-execution evidentiary arbitration for AI systems.

Static Astro site, built and styled to match the InTellMe parent site at
intellmeai.com so the two read as one company. No client framework, no runtime
data fetching, and every page renders complete with JavaScript disabled.

## Before adding anything, read `SCOPE.md`

It defines the disclosure boundary this site must stay inside — what may be
published as running, what must be described as unbuilt, and what may not appear
at all. It is the most important file in the repository.

## Commands

```
npm install
npm run dev      # local dev server
npm run build    # static build into dist/
npm run preview  # serve the build
npm run check    # Astro + TypeScript diagnostics
npm test         # request endpoint, against a fake req/res
npm run verify   # check + test + build, the same gate CI runs
```

## Routes

| Route | File |
|-------|------|
| `/` | `src/pages/index.astro` — thesis, capability states, boundaries |
| `/technology` | `src/pages/technology.astro` — pipeline, evidence object, prior work |
| `/roadmap` | `src/pages/roadmap.astro` — three stages |
| `/investors` | `src/pages/investors.astro` — overview and request form |
| `/investor-request-received` | confirmation page |
| `/404` | `src/pages/404.astro` |
| `POST /api/investor-request` | `api/investor-request.js` (Vercel function) |

## Legal pages

This site does not carry its own privacy policy, terms, or accessibility
statement. Those are published once on the InTellMe parent site and every domain
links to them, so there is one set of promises rather than several that drift
apart. The footer links out.

## The capability table

Six capabilities, each with its own state, defined once in `src/pages/index.astro`.
The pipeline stages in `src/pages/technology.astro` each carry the state of the
capability they depend on. The same table is published on intellmeai.com.

**If the two sites ever disagree, the parent site is authoritative.** A
capability that changes state changes in three places in the same commit.

## Configuration

The request form needs Mailjet credentials in the Vercel project environment:

- `MJ_APIKEY_PUBLIC`
- `MJ_APIKEY_PRIVATE`
- `INVESTOR_INBOX` (optional, defaults to brandon@intellmeai.com)
- `INVESTOR_FROM` (optional, defaults to no-reply@intellmeai.com)

Without them the endpoint fails closed with a readable message telling the
sender to email directly. It never silently drops a request.

The sending domain must be validated in Mailjet with SPF and DKIM first.

## There is no login

The previous version of this site had a client-side password gate with the
credentials written into the JavaScript bundle and committed to this public
repository. It protected nothing. Material that should not be public is not
published here at all — it is sent, after review, to people who ask through the
form.
