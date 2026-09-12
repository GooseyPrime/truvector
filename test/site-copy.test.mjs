import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import redirects from '../redirects.mjs';

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
  'footer uses the new tagline and science link',
  footer.includes('Check before you act.') &&
    footer.includes('href="/science">The science</a>') &&
    !footer.includes('The parent is authoritative.')
);
check(
  'footer links include use cases and not lineage',
  footer.includes('href="/use-cases">Use cases</a>') &&
    !footer.includes('href="/lineage">Lineage</a>') &&
    !footer.includes('href="/roadmap">Roadmap</a>')
);

const nav = text('src/components/Nav.astro');
const astroConfig = text('astro.config.mjs');
check(
  'primary nav includes use cases and science links',
  nav.includes("{ label: 'Use cases', href: '/use-cases' }") &&
    nav.includes("{ label: 'The science', href: '/science' }") &&
    !nav.includes("{ label: 'Lineage',    href: '/lineage' }") &&
    !nav.includes("{ label: 'Roadmap',    href: '/roadmap' }")
);

const home = text('src/pages/index.astro');
check(
  'homepage uses the new hero and three questions',
  home.includes('Your AI is about to act on something it read. TruVector checks it first.') &&
    home.includes('Three questions before every action.') &&
    home.includes('Where did this come from?') &&
    home.includes('Are these really separate sources?') &&
    home.includes('Do the sources agree?')
);
check(
  'homepage removes retired status-table era disclaimers',
  !home.includes('HRA is not a probability that a claim is true.') &&
    !home.includes('This is a research signal about how support moves over time. It is not a claim that information obeys conservation laws.') &&
    !home.includes('Capability table')
);
check(
  'homepage keeps the company section',
  home.includes('Built by an engineer who measured things for a living.') &&
    home.includes('U.S. Patent 11,949,124.')
);

const technology = text('src/pages/technology.astro');
check(
  'technology page qualifies the unbuilt decision-rule stage',
  technology.includes('This stage is specified, not yet built') &&
    technology.includes('The intended decision rule')
);
check(
  'technology example includes disagreement check state',
  technology.includes('"disagreement_check":  "checked" | "not_checked"') &&
    technology.includes('The technical brief carries the full schema.')
);

const investors = text('src/pages/investors.astro');
check(
  'investor page uses the new fundraising position',
  investors.includes('Self-funded so far. Raising a pre-seed round.') &&
    !investors.includes('pre-revenue') &&
    !investors.includes('sole proprietor') &&
    !investors.includes('public GitHub')
);

const useCasesPath = join(root, 'src/pages/use-cases.astro');
const hasUseCases = existsSync(useCasesPath);
check('use-cases page exists', hasUseCases);
const useCases = hasUseCases ? readFileSync(useCasesPath, 'utf8') : '';
check(
  'use-cases page includes the six current public use cases',
  [
    'Customer service AI',
    'Purchasing agents',
    'AI research and report writers',
    'Tools that react to news',
    'Publishing and outreach agents',
    'Record-keeping agents'
  ].every((label) => useCases.includes(label))
);
check(
  'use-cases page avoids excluded examples',
  !useCases.includes('emergency-room triage') &&
    !useCases.includes('CAC') &&
    !useCases.includes('customer logos') &&
    !useCases.includes('production-proven')
);

const sciencePath = join(root, 'src/pages/science.astro');
const hasScience = existsSync(sciencePath);
check('science page exists', hasScience);
const science = hasScience ? readFileSync(sciencePath, 'utf8') : '';
check(
  'science page frames the research basis and qualifies the decision rule',
  [
    'The math of how reactions move, applied to how information moves.',
    'TruVector is being built to turn the measurements above into Allow, Review or Block on that basis.',
    'Terms like velocity and acceleration are used as working models for how information spreads. They are hypotheses under test',
    'https://www.lanevector.com'
  ].every((needle) => science.includes(needle))
);
check(
  'science route migration is documented in astro config',
  redirects['/lineage'] === '/science' &&
    redirects['/roadmap'] === '/' &&
    astroConfig.includes('redirects')
);

if (failures) process.exit(1);
