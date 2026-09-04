import { defineConfig } from 'astro/config';

// Same posture as the parent site: static output, no client framework, no
// runtime data fetching. Every route renders complete with JavaScript disabled.
export default defineConfig({
  site: 'https://truvector.science',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  compressHTML: true,
  devToolbar: { enabled: false }
});
