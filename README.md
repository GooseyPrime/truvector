# truvector.science

The public site for **TruVector**, an InTellMe product: a checkpoint an AI
system runs before it acts on what it just looked up. It asks where the
retrieved material came from, whether the sources are genuinely separate, and
whether they agree — then answers Allow, Review or Block.

Static Astro site, built and styled to match the InTellMe parent site at
intellmeai.com so the two read as one company. No client framework, no runtime
data fetching, and every page renders complete with JavaScript disabled.

## Before adding anything, read `SCOPE.md`

It is the most important file in this repository. It sets what this site may
say: describe the mechanism, never the stage; the approved vocabulary; and the
things that are never publishable at all.

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
| `/` | `src/pages/index.astro` — what the product does, boundaries, company and contact |
| `/technology` | `src/pages/technology.astro` — the seven stages from retrieval to decision, the result object, operating profile |
| `/use-cases` | `src/pages/use-cases.astro` — six public use cases |
| `/science` | `src/pages/science.astro` — the research this is built on |
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

## Writing the copy

`SCOPE.md` governs. In short: what the checkpoint does is written in the present
tense; a research direction is written as a research direction with the
observation that would disprove it; and no page carries a status, a roadmap, a
stage label, a figure in currency, or a benchmark number without its protocol.

There is no capability table and no per-stage badge on this site, and neither is
coming back. Nothing in the copy may reintroduce one in prose.

## Configuration

The request form needs Mailjet credentials in the Vercel project environment:

- `MJ_APIKEY_PUBLIC`
- `MJ_APIKEY_PRIVATE`
- `INVESTOR_INBOX` (optional; defaults to the address in `api/investor-request.js`)
- `INVESTOR_FROM` (optional; defaults to the no-reply address in the same file)

Without them the endpoint fails closed with a readable message telling the
sender to email directly. It never silently drops a request.

The sending domain must be validated in Mailjet with SPF and DKIM first.

## There is no login

An earlier version of this site had a client-side password gate with the
credentials written into the JavaScript bundle and committed to this public
repository. It protected nothing. Material that should not be public is not
published here at all — it is sent, after review, to people who ask through the
form.
