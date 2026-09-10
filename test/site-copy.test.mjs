import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));

function text(path) {
  return readFileSync(join(root, path), 'utf8');
}

function check(name, cond, detail = '') {
  if (!cond) {
    console.error(`FAIL  ${name}${detail ? '  — ' + detail : ''}`);
    failures++;
  } else {
    console.log(`PASS  ${name}`);
  }
}

let failures = 0;

const footer = text('src/components/Footer.astro');
check(
  'footer names parent authority',
  footer.includes('If this site and <a href="https://www.intellmeai.com/" rel="noopener">intellmeai.com</a> disagree, this site is wrong. The parent is authoritative.')
);

const home = text('src/pages/index.astro');
check(
  'homepage uses evidence-quality wording',
  home.includes('does not rely on source reputation alone.') &&
    home.includes('It scores evidence quality, disagreement, and independence under an auditable policy.')
);
check(
  'homepage removes retired reputation wording',
  !home.includes('does not rank sources by reputation')
);
check(
  'homepage adds HRA disclaimer',
  home.includes('HRA is not a probability that a claim is true.')
);
check(
  'homepage adds kinematic disclaimer',
  home.includes('This is a research signal about how support moves over time. It is not a claim that information obeys conservation laws.')
);

const technology = text('src/pages/technology.astro');
check(
  'technology page adds kinematic disclaimer',
  technology.includes('This is a research signal about how support moves over time. It is not a claim that information obeys conservation laws.')
);

const investors = text('src/pages/investors.astro');
check(
  'investor page adds hypothesis disclaimers',
  investors.includes('HRA is not a probability that a claim is true.') &&
    investors.includes('Kinematic validation is a research signal about how support moves over time; it is not a claim that information obeys conservation laws.')
);

const useCasesPath = join(root, 'src/pages/use-cases.astro');
const hasUseCases = existsSync(useCasesPath);
check('use-cases page exists', hasUseCases);
const useCases = hasUseCases ? readFileSync(useCasesPath, 'utf8') : '';
check(
  'use-cases page includes the requested illustration cards',
  [
    'Internal agent about to file a record',
    'Research report that must keep contradictions attached',
    'News briefing that must not count wire copies as independent sources',
    'Procurement certificate copies',
    'Incident-response status-page echoes',
    'Public-records minutes versus blogs that quote them'
  ].every((label) => useCases.includes(label))
);
check(
  'use-cases page avoids excluded examples',
  !useCases.includes('emergency-room triage') &&
    !useCases.includes('CAC') &&
    !useCases.includes('customer logos') &&
    !useCases.includes('production-proven')
);

const lineagePath = join(root, 'src/pages/lineage.astro');
const hasLineage = existsSync(lineagePath);
check('lineage page exists', hasLineage);
const lineage = hasLineage ? readFileSync(lineagePath, 'utf8') : '';
check(
  'lineage page includes four requested beats and lanevector link',
  [
    'Dec 2025',
    'SEO intent expected-value model',
    'Later',
    'Kinematic vocabulary as analogy',
    '2026',
    'TruVector evidence arbitration',
    'Current',
    'Capability table',
    'https://www.lanevector.com'
  ].every((needle) => lineage.includes(needle))
);

if (failures) process.exit(1);
