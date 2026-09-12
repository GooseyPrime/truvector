import { defineConfig } from 'astro/config';
import redirects from './redirects.mjs';

// Same posture as the parent site: static output, no client framework, no
// runtime data fetching. Every route renders complete with JavaScript disabled.
export default defineConfig({
  site: 'https://truvector.science',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  compressHTML: true,
  devToolbar: { enabled: false },
  // Old addresses: the lineage page became The Science; the roadmap page was retired.
  redirects
});
