import { readFile, readdir, stat, access } from 'node:fs/promises';
import { dirname, resolve, relative, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const required = [
  'README.md', 'LICENSE', 'CONTEXT.md', 'CONTRIBUTING.md', 'SECURITY.md',
  'docs/product/spec.md', 'docs/product/source-specification.md',
  'docs/architecture.md', 'docs/testing.md', 'docs/roadmap.md',
  'docs/adr/README.md', 'docs/brand/README.md', 'docs/brand/memolume-logo.png',
];
for (const path of required) {
  try { await access(resolve(root, path)); }
  catch { errors.push(`Arquivo obrigatório ausente: ${path}`); }
}
const instructions = [];
for (const name of ['AGENTS.md', 'CLAUDE.md']) {
  try { await access(resolve(root, name)); instructions.push(name); }
  catch { /* Only the selected instruction file is required. */ }
}
if (instructions.length > 1) errors.push('Escolha apenas um arquivo de instruções: AGENTS.md ou CLAUDE.md.');
else if (instructions.length === 1 && !(await readFile(resolve(root, instructions[0]), 'utf8')).includes('## Agent skills')) {
  errors.push('Arquivo de instruções precisa do bloco Agent skills.');
}
if (instructions.length === 1) {
  for (const path of ['docs/agents/issue-tracker.md', 'docs/agents/domain.md', 'docs/agents/triage-labels.md']) {
    try { await access(resolve(root, path)); }
    catch { errors.push(`Configuração de agentes ausente: ${path}`); }
  }
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const paths = [];
  for (const entry of entries) {
    if (['.git', 'node_modules', '.scratch', 'work', 'private-data', 'local-data'].includes(entry.name)) continue;
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) paths.push(...await walk(path));
    else if (entry.isFile() && extname(path) === '.md') paths.push(path);
  }
  return paths;
}
const markdown = await walk(root);
for (const file of markdown) {
  const text = await readFile(file, 'utf8');
  const prose = text.replace(/^```[^\n]*\n[\s\S]*?^```\s*$/gm, '');
  for (const match of prose.matchAll(/!?\[[^\]\n]*\]\(([^)\n]+)\)|<img\b[^>]*\bsrc="([^"]+)"[^>]*>/g)) {
    const target = (match[1] ?? match[2]).trim().replace(/^<|>$/g, '');
    if (/^[a-z][a-z\d+.-]*:/i.test(target) || target.startsWith('#')) continue;
    const path = target.split(/[?#]/, 1)[0];
    const absolute = resolve(dirname(file), decodeURIComponent(path));
    if (absolute !== root && !absolute.startsWith(root + sep)) {
      errors.push(`${relative(root, file)}: link fora do repositório: ${target}`);
      continue;
    }
    try { await stat(absolute); }
    catch { errors.push(`${relative(root, file)}: link local inexistente: ${target}`); }
  }
}

const specification = await readFile(resolve(root, 'docs/product/spec.md'), 'utf8');
for (const heading of ['Problem Statement', 'Solution', 'User Stories', 'Implementation Decisions', 'Testing Decisions', 'Out of Scope', 'Further Notes']) {
  if (!specification.includes(`## ${heading}\n`)) errors.push(`Spec sem seção: ${heading}`);
}
const pkg = JSON.parse(await readFile(resolve(root, 'package.json'), 'utf8'));
if (pkg.name !== 'memolume' || pkg.license !== 'MIT') errors.push('Metadados de nome/licença inválidos.');
if (!pkg.private) errors.push('Scaffold documental precisa manter publicação npm desativada.');
const png = await readFile(resolve(root, 'docs/brand/memolume-logo.png'));
if (png.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') errors.push('Logo não é um PNG válido.');
if (png[25] !== 6) errors.push('Logo deve preservar canal alpha RGBA.');

if (errors.length) {
  for (const error of errors) process.stderr.write(`- ${error}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write(`OK: ${markdown.length} documentos, links locais, spec, metadados e logo.\n`);
  if (!instructions.length) process.stdout.write('Setup de agentes pendente da revisão solicitada pelas skills.\n');
}
