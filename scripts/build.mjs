import { copyFile, mkdir, readFile, realpath, rm, writeFile, lstat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const assert = (condition, message) => { if (!condition) throw new Error(message); };
const slug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const forbidden = /stlflix|\bSTL\b|impress[aã]o\s*3d|filamento|custos? de (?:fabrica[cç][aã]o|produ[cç][aã]o)|margem de lucro|https?:\/\//i;
function commercial(value, label) {
  assert(typeof value === 'string' && value.trim().length > 0, `Campo obrigatório: ${label}`);
  assert(!forbidden.test(value), `Informação interna ou URL em campo público: ${label}`);
}

function card(product, category, index) {
  const photo = product.imagens[0];
  return `<article class="product" id="${product.id}"${index ? ' style="margin-top:24px"' : ''}><button type="button" class="photo photo-open" data-open-product="dialog-${product.id}" aria-label="Ver detalhes da ${escape(product.nome)}"><img src="${photo.arquivo}" width="${photo.largura}" height="${photo.altura}" alt="${escape(photo.alt)}" ${index ? 'loading="lazy"' : 'fetchpriority="high"'} decoding="async"></button><div class="info"><span class="eyebrow">${escape(category.nome)}</span><h3>${escape(product.nome)}</h3><p class="muted">${escape(product.descricao)}</p><button class="button" data-open-product="dialog-${product.id}" type="button">Conhecer a peça <span aria-hidden="true">↗</span></button><p class="pending">Contato pelo WhatsApp disponível após configuração.</p></div></article>`;
}
function details(product) {
  const photo = product.imagens[0];
  const buttons = product.imagens.map((image, i) => `<button type="button" data-photo-index="${i}" data-src="${image.arquivo}" data-alt="${escape(image.alt)}" aria-pressed="${i === 0}">${escape(image.rotulo)}</button>`).join('');
  return `<dialog id="dialog-${product.id}" data-product-dialog aria-labelledby="title-${product.id}"><button class="close" data-close-product type="button">Fechar ×</button><h2 id="title-${product.id}">${escape(product.nome)}</h2><img data-gallery-image width="${photo.largura}" height="${photo.altura}" alt="${escape(photo.alt)}"><div class="gallery" style="flex-wrap:wrap" role="group" aria-label="Fotografias da ${escape(product.nome)}">${buttons}</div><p class="gallery-status" data-gallery-status aria-live="polite">Foto 1 de ${product.imagens.length}</p><p>${escape(product.descricao)}</p></dialog>`;
}

export async function buildCatalog(root = projectRoot) {
  const catalog = JSON.parse(await readFile(path.join(root, 'dados/produtos.json'), 'utf8'));
  assert(catalog.versao === 2, 'Versão desconhecida do cadastro');
  assert(Array.isArray(catalog.categorias) && catalog.categorias.length > 0, 'Categorias obrigatórias');
  assert(Array.isArray(catalog.produtos), 'Lista de produtos obrigatória');
  const categories = new Map();
  for (const category of catalog.categorias) {
    assert(typeof category.id === 'string' && slug.test(category.id) && !categories.has(category.id), 'Categoria inválida ou duplicada');
    commercial(category.nome, 'categoria.nome');
    assert(Number.isInteger(category.ordem) && category.ordem >= 0, 'Ordem de categoria inválida');
    categories.set(category.id, category);
  }
  assert(Array.isArray(catalog.subcategorias), 'Subcategorias obrigatórias');
  const subcategories = new Map();
  for (const subcategory of catalog.subcategorias) {
    assert(typeof subcategory.id === 'string' && slug.test(subcategory.id) && !subcategories.has(subcategory.id), 'Subcategoria inválida ou duplicada');
    assert(categories.has(subcategory.categoria), 'Categoria da subcategoria inexistente');
    commercial(subcategory.nome, 'subcategoria.nome');
    assert(Number.isInteger(subcategory.ordem) && subcategory.ordem >= 0, 'Ordem de subcategoria inválida');
    subcategories.set(subcategory.id, subcategory);
  }
  const ids = new Set();
  const assets = new Map();
  const assetRoot = await realpath(path.join(root, 'demo/assets'));
  for (const product of catalog.produtos) {
    assert(typeof product.id === 'string' && slug.test(product.id) && !ids.has(product.id), 'ID de produto inválido ou duplicado');
    ids.add(product.id);
    assert(categories.has(product.categoria), `Categoria inexistente: ${product.id}`);
    assert(subcategories.has(product.subcategoria) && subcategories.get(product.subcategoria).categoria === product.categoria, `Subcategoria incompatível: ${product.id}`);
    assert(['individual', 'kit'].includes(product.tipo), `Tipo inválido: ${product.id}`);
    assert(typeof product.participacao_kits?.permitida === 'boolean' && ['base', 'imagem', 'outro'].includes(product.participacao_kits?.papel), `Participação em kits inválida: ${product.id}`);
    assert(Array.isArray(product.componentes), `Componentes ausentes: ${product.id}`);
    assert(product.tipo !== 'individual' || product.componentes.length === 0, `Produto individual com composição: ${product.id}`);
    assert(['ativo', 'oculto', 'descontinuado'].includes(product.situacao), `Situação inválida: ${product.id}`);
    assert(Number.isInteger(product.ordem) && product.ordem >= 0, `Ordem inválida: ${product.id}`);
    commercial(product.nome, `${product.id}.nome`);
    commercial(product.descricao, `${product.id}.descricao`);
    assert(Array.isArray(product.imagens) && product.imagens.length > 0, `Produto sem imagens: ${product.id}`);
    assert(typeof product.interno?.pagina_origem === 'string', `Origem interna ausente: ${product.id}`);
    for (const image of product.imagens) {
      assert(typeof image.arquivo === 'string' && /^assets\/[a-z0-9]+(?:[-a-z0-9]*)\.webp$/.test(image.arquivo), `Caminho de imagem inválido: ${image.arquivo}`);
      commercial(image.alt, `${product.id}.imagem.alt`);
      commercial(image.rotulo, `${product.id}.imagem.rotulo`);
      assert(Number.isInteger(image.largura) && image.largura > 0 && Number.isInteger(image.altura) && image.altura > 0, 'Dimensões inválidas');
      assert(/^\d{4}-\d{2}-\d{2}$/.test(image.interno?.aprovada_em ?? ''), `Imagem sem aprovação: ${image.arquivo}`);
      assert(typeof image.interno?.url_origem === 'string', `Origem da imagem ausente: ${image.arquivo}`);
      const source = await realpath(path.join(root, 'demo', image.arquivo));
      assert(source.startsWith(assetRoot + path.sep), `Imagem fora da pasta de assets: ${image.arquivo}`);
      const bytes = await readFile(source);
      assert(bytes.toString('ascii', 0, 4) === 'RIFF' && bytes.toString('ascii', 8, 12) === 'WEBP', `WebP inválido: ${image.arquivo}`);
      assert(createHash('sha256').update(bytes).digest('hex') === image.interno.sha256, `Imagem alterada sem revisão: ${image.arquivo}`);
      assets.set(image.arquivo, source);
    }
  }
  // Eligibility never creates a kit: only an explicitly registered kit has components.
  const byId = new Map(catalog.produtos.map(product => [product.id, product]));
  for (const product of catalog.produtos.filter(item => item.tipo === 'kit')) {
    assert(product.componentes.length >= 2, `Kit sem composição explícita: ${product.id}`);
    const seen = new Set();
    for (const component of product.componentes) {
      const item = byId.get(component.produto_id);
      assert(item && item.id !== product.id && item.tipo === 'individual' && item.participacao_kits.permitida, `Componente inválido: ${product.id}`);
      assert(item.categoria === product.categoria, `Componente de outra categoria: ${product.id}`);
      assert(!seen.has(item.id) && Number.isInteger(component.quantidade) && component.quantidade > 0, `Quantidade/componente duplicado inválido: ${product.id}`);
      seen.add(item.id);
    }
  }
  const active = catalog.produtos.filter(product => product.situacao === 'ativo').sort((a, b) =>
    categories.get(a.categoria).ordem - categories.get(b.categoria).ordem ||
    a.categoria.localeCompare(b.categoria) ||
    subcategories.get(a.subcategoria).ordem - subcategories.get(b.subcategoria).ordem ||
    a.subcategoria.localeCompare(b.subcategoria) ||
    a.ordem - b.ordem || a.id.localeCompare(b.id));
  const sortedCategories = [...catalog.categorias].sort((a, b) => a.ordem - b.ordem || a.id.localeCompare(b.id));
  const sections = sortedCategories.map(category => {
    const products = active.filter(product => product.categoria === category.id);
    if (!products.length) return `<section id="${category.id}" class="empty-note" aria-label="${escape(category.nome)}">${escape(category.nome)}: imagens e produtos serão incluídos após aprovação.</section>`;
    return `<section id="${category.id}" aria-labelledby="collection-${category.id}"><div class="section-head"><h2 id="collection-${category.id}">${escape(category.nome)}</h2><span>Prévia • ${products.length} ${products.length === 1 ? 'produto' : 'produtos'}</span></div>\n${products.map((product, i) => card(product, category, i)).join('\n')}</section>`;
  }).join('\n');
  let html = await readFile(path.join(root, 'templates/catalogo.html'), 'utf8');
  for (const [token, value] of Object.entries({ '{{COLECOES}}': sections, '{{DETALHES}}': active.map(details).join('\n'), '{{GALERIA_JS}}': await readFile(path.join(root, 'templates/galeria.js'), 'utf8') })) {
    assert(html.includes(token), `Marcador ausente no template: ${token}`);
    html = html.replace(token, () => value);
  }
  assert(!html.includes('{{') && !/stlflix|https?:\/\//i.test(html), 'Conteúdo interno ou marcador na saída pública');
  const output = path.join(root, 'dist');
  try { assert(!(await lstat(output)).isSymbolicLink(), 'dist não pode ser um link simbólico'); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  // Validation finishes before replacing generated output; source files are never removed.
  await rm(output, { recursive: true, force: true });
  await mkdir(path.join(output, 'assets'), { recursive: true });
  await writeFile(path.join(output, 'index.html'), html);
  const copied = new Set();
  for (const product of active) for (const image of product.imagens) {
    if (copied.has(image.arquivo)) continue;
    await copyFile(assets.get(image.arquivo), path.join(output, image.arquivo));
    copied.add(image.arquivo);
  }
  return { products: active.length, images: copied.size };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = await buildCatalog();
  console.log(`Catálogo preparado em dist/: ${result.products} produtos ativos e ${result.images} imagens. Dados internos excluídos.`);
}
