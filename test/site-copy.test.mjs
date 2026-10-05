import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import redirects from '../redirects.mjs';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const expectedRedirects = {
  '/lineage': '/science',
  '/roadmap': '/'
};

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

const arithmetic = text('src/components/Arithmetic.astro');
check(
  'homepage carries the interactive arithmetic section',
  home.includes("import Arithmetic from '../components/Arithmetic.astro';") &&
    home.includes('<Arithmetic />') &&
    arithmetic.includes('Move the numbers yourself.') &&
    arithmetic.includes('data-widget={name}') &&
    ['embedding', 'dial', 'detector', 'chart', 'firewall', 'consensus', 'alignment', 'reading'].every((n) => arithmetic.includes(`name: '${n}'`))
);
const count = (needle) => arithmetic.split(needle).length - 1;
check(
  'each paper-derived panel states its formula with its working-paper section',
  // 03, 05, 06 → WP-02 §3; 01, 02 → WP-01 §2; 04 → WP-01 §3. Panel 07 is the engine's own use of the angle and cites no paper.
  count('WP-02 \u00A73') === 3 && count('WP-01 \u00A72') === 2 && count('WP-01 \u00A73') === 1,
  `WP-02 §3 ×${count('WP-02 \u00A73')}, WP-01 §2 ×${count('WP-01 \u00A72')}, WP-01 §3 ×${count('WP-01 \u00A73')}`
);
check(
  'every panel is rendered by the server before any script runs',
  (arithmetic.match(/class="lw lw-static"/g) || []).length === 3 && // three render loops, one per group
    arithmetic.includes('id="lab-copy"') &&
    (arithmetic.match(/reading: '/g) || []).length === 8
);
check(
  'arithmetic section publishes no figure in currency',
  !/[$€£]\s?\d/.test(arithmetic) && !/\b\d[\d,]*\s?(dollars|euros|pounds)\b/i.test(arithmetic)
);
check(
  'every research direction carries the result that would disprove it',
  (arithmetic.match(/class="rail__note"/g) || []).length === 10 &&
    (arithmetic.match(/It would be disproved/g) || []).length === 10
);
check(
  'arithmetic section keeps to the site vocabulary and publishes no stage',
  !/\b(claims?|evidence|evidentiary|assertions?|witness|arbitration|lineage|sufficiency)\b/i.test(arithmetic) &&
    !/\b(roadmap|beta|pilot|coming soon|in development|not yet built|phase \d)\b/i.test(arithmetic)
);

const technology = text('src/pages/technology.astro');
check('technology separates action reading from subject checks',
  technology.includes('Separate action readings') && technology.includes('action subject score') &&
  technology.includes('In words:') && technology.includes('WP-02 §7') && !technology.includes('confidence_interval'));
check('publications route provides current documents',
  text('src/pages/publications.astro').includes('/working-papers/WP-02.pdf') &&
  text('src/pages/publications.astro').includes('/working-papers/WP-02.pdf') &&
  !text('src/pages/publications.astro').includes('.docx'));

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
check('science separates subject similarity and directional interpretation',
  science.includes('a high cosine therefore does not establish agreement') &&
  science.includes('58') && science.includes('does not estimate deployment accuracy') &&
  science.includes('https://www.lanevector.com/research'));

check(
  'science route migration is documented in astro config',
  JSON.stringify(redirects) === JSON.stringify(expectedRedirects) &&
    astroConfig.includes("import redirects from './redirects.mjs';") &&
    /redirects:\s*redirects/.test(astroConfig)
);

if (failures) process.exit(1);
