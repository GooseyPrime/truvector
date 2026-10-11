import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const text = (path) => readFileSync(join(root, path), 'utf8');

let failures = 0;
function check(name, cond, detail = '') {
  if (!cond) {
    console.error(`FAIL  ${name}${detail ? '  — ' + detail : ''}`);
    failures++;
  } else {
    console.log(`PASS  ${name}`);
  }
}

const study = text('src/pages/publications/word-overlap-vs-meaning.astro');
const paper = text('docs/working-papers/WP-04-word-overlap-vs-meaning.md');
const publications = text('src/pages/publications.astro');
const science = text('src/pages/science.astro');
const technology = text('src/pages/technology.astro');

// The headline figures of Study TV-001, as the study report prints them.
const headline = ['101 of 300', '282 of 300', '33.7%', '94.0%', '28.6% to 39.2%', '90.7% to 96.2%', '1.1e-50', '0.296', '0.465', '0.997', '0.907'];
check('study page carries the headline figures of the study report',
  headline.every((n) => study.includes(n)), headline.filter((n) => !study.includes(n)).join(', '));
check('WP-04 source carries the same headline figures',
  headline.every((n) => paper.includes(n)), headline.filter((n) => !paper.includes(n)).join(', '));
check('study page draws both decision tables from the report',
  study.includes('[[1, 31, 88], [0, 1, 59], [0, 21, 99]]') && study.includes('[[108, 12, 0], [0, 57, 3], [0, 3, 117]]'));
check('study page states the weak spot and the limits plainly',
  study.includes('The weak spot is recent events.') && study.includes('25 of 40') &&
    study.includes('One test set, built by the same team.') && study.includes('It would be disproved'));
check('every section of the study page ends in plain terms',
  (study.match(/<strong>In plain terms\.<\/strong>/g) || []).length === 8);
check('the graphics need no script',
  !/<script/.test(study) && (study.match(/type="radio"/g) || []).length === 3);

const vocabulary = /\b(claims?|evidence|evidentiary|assertions?|witness|arbitration|lineage|sufficiency)\b/i;
const stage = /\b(roadmap|beta|pilot|coming soon|in development|not yet built|phase \d|milestones?|grant|revenue)\b/i;
for (const [name, body] of [['study page', study], ['WP-04 source', paper]]) {
  check(`${name} keeps to the site vocabulary and publishes no stage`, !vocabulary.test(body) && !stage.test(body));
}

check('publications lists the study page and WP-04',
  publications.includes('href="/publications/word-overlap-vs-meaning"') && publications.includes('/working-papers/WP-04.pdf'));
check('science and technology state the result and link to the study',
  [science, technology].every((p) => p.includes('href="/publications/word-overlap-vs-meaning"') && p.includes('282') && p.includes('25 of 40')));

const pdf = readFileSync(join(root, 'public/working-papers/WP-04.pdf'));
const manifest = JSON.parse(text('public/working-papers/manifest.json'));
check('WP-04 PDF is published and matches the manifest size',
  pdf.subarray(0, 5).toString() === '%PDF-' && manifest.files['WP-04.pdf'].bytes === pdf.length);

if (failures) process.exit(1);
