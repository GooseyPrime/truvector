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
| `/` | `src/pages/index.astro` — thesis, boundaries, company and contact |
| `/technology` | `src/pages/technology.astro` — pipeline, evidence object, operating profile |
| `/use-cases` | `src/pages/use-cases.astro` — six public use cases |
| `/science` | `src/pages/science.astro` — Lane Vector framing and research basis |
| `/investors` | `src/pages/investors.astro` — overview and request form |
| `/investor-request-received` | confirmation page |
| `/404` | `src/pages/404.astro` |
| `POST /api/investor-request` | `api/investor-request.js` (Vercel function) |

Legacy addresses are defined in `redirects.mjs` and consumed by
`astro.config.mjs`: `/lineage` to `/science`, and `/roadmap` to `/`.

## Legal pages

This site does not carry its own privacy policy, terms, or accessibility
statement. Those are published once on the InTellMe parent site and every domain
links to them, so there is one set of promises rather than several that drift
apart. The footer links out.

## The disclosure contract

This site no longer publishes a public capability table. The disclosure
boundary is enforced in the page copy under the rules in `SCOPE.md`: only the
capabilities listed there may be described as running, and Quorum plus the
kinematic / HRA lines must stay clearly qualified as not built or still under
test.

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
