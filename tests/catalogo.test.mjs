import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile, copyFile, cp, readdir, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildCatalog } from '../scripts/build.mjs';
const root = fileURLToPath(new URL('../', import.meta.url));

async function fixture(t) {
  const directory = await mkdtemp(path.join(tmpdir(), 'aconxego-test-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  await mkdir(path.join(directory, 'dados'), { recursive: true });
  await mkdir(path.join(directory, 'demo/assets'), { recursive: true });
  await cp(path.join(root, 'templates'), path.join(directory, 'templates'), { recursive: true });
  const catalog = JSON.parse(await readFile(path.join(root, 'dados/produtos.json'), 'utf8'));
  for (const product of catalog.produtos) for (const image of product.imagens) await copyFile(path.join(root, 'demo', image.arquivo), path.join(directory, 'demo', image.arquivo));
  const save = () => writeFile(path.join(directory, 'dados/produtos.json'), JSON.stringify(catalog));
  await save();
  return { directory, catalog, save, html: () => readFile(path.join(directory, 'dist/index.html'), 'utf8') };
}

test('cadastro gera apenas HTML e sete imagens aprovadas; origens e campos internos não vazam', async t => {
  const f = await fixture(t);
  f.catalog.produtos[0].interno.nota_privada = 'MARCADOR_PRIVADO_NAO_PUBLICAR';
  await f.save();
  assert.deepEqual(await buildCatalog(f.directory), { products: 2, images: 7 });
  const html = await f.html();
  assert.equal((html.match(/<article class="product"/g) ?? []).length, 2);
  assert.doesNotMatch(html, /stlflix|MARCADOR_PRIVADO|url_origem|pagina_origem|sha256|aprovada_em|licenca/);
  assert.deepEqual((await readdir(path.join(f.directory, 'dist'))).sort(), ['assets', 'index.html']);
  assert.equal((await readdir(path.join(f.directory, 'dist/assets'))).length, 7);
});

test('ocultar remove da saída; reativar restaura os mesmos dados e fotografias', async t => {
  const f = await fixture(t);
  await buildCatalog(f.directory);
  const original = await f.html();
  const product = f.catalog.produtos[1];
  const photo = path.join(f.directory, 'demo', product.imagens[0].arquivo);
  const bytes = await readFile(photo);
  product.situacao = 'oculto';
  await f.save();
  assert.deepEqual(await buildCatalog(f.directory), { products: 1, images: 2 });
  assert.doesNotMatch(await f.html(), /Pomba da Paz|pomba-da-paz/);
  assert.deepEqual(await readFile(photo), bytes);
  assert.equal(f.catalog.produtos.length, 2);
  product.situacao = 'ativo';
  await f.save();
  await buildCatalog(f.directory);
  assert.equal(await f.html(), original);
});

test('descontinuados e catálogo sem ativos preservam registros e não publicam galerias ou imagens', async t => {
  const f = await fixture(t);
  for (const product of f.catalog.produtos) product.situacao = 'descontinuado';
  await f.save();
  assert.deepEqual(await buildCatalog(f.directory), { products: 0, images: 0 });
  assert.doesNotMatch(await f.html(), /<article class="product"|<dialog/);
  for (const product of f.catalog.produtos) await readFile(path.join(f.directory, 'demo', product.imagens[0].arquivo));
});

test('edição, categoria e ordenação vêm do cadastro; textos são escapados', async t => {
  const f = await fixture(t);
  f.catalog.produtos[1].nome = 'Pomba & Paz <especial>';
  f.catalog.produtos[1].categoria = 'natalinos';
  f.catalog.produtos[0].descricao = 'Descrição revisada para o teste.';
  await f.save();
  await buildCatalog(f.directory);
  const html = await f.html();
  assert.match(html, /Pomba &amp; Paz &lt;especial&gt;/);
  assert.match(html, /Descrição revisada para o teste/);
  assert.match(html, /<section id="natalinos" aria-labelledby="collection-natalinos"/);
  f.catalog.produtos[1].categoria = 'religiosos';
  f.catalog.produtos[1].ordem = 0;
  await f.save();
  await buildCatalog(f.directory);
  const reordered = await f.html();
  assert.ok(reordered.indexOf('id="pomba-da-paz"') < reordered.indexOf('id="bandeja-cruz"'));
});

test('erros de cadastro e fotografias são rejeitados antes de substituir a saída', async t => {
  const f = await fixture(t);
  await buildCatalog(f.directory);
  const html = await f.html();
  const original = structuredClone(f.catalog);
  for (const change of [
    c => { c.produtos[1].id = c.produtos[0].id; },
    c => { c.produtos[1].situacao = 'inexistente'; },
    c => { c.produtos[1].categoria = 'inexistente'; },
    c => { c.produtos[0].imagens = []; },
    c => { c.produtos[0].imagens[0].arquivo = '../internal/imagem.webp'; },
    c => { c.produtos[0].imagens[0].interno.sha256 = '0'.repeat(64); },
    c => { delete c.produtos[0].imagens[0].interno.aprovada_em; },
    c => { c.produtos[0].descricao = 'Veja https://platform.stlflix.com/'; },
  ]) {
    Object.assign(f.catalog, structuredClone(original));
    change(f.catalog);
    await f.save();
    await assert.rejects(buildCatalog(f.directory));
    assert.equal(await f.html(), html);
  }
});

test('adicionar produto usa o cadastro e as imagens locais; ocultar não deixa arquivos antigos em dist', async t => {
  const f = await fixture(t);
  // Test fixture only: a duplicated record is never written into the actual catalog.
  const extra = structuredClone(f.catalog.produtos[0]);
  extra.id = 'produto-de-teste'; extra.nome = 'Produto de teste'; extra.ordem = 3;
  f.catalog.produtos.push(extra); await f.save();
  assert.deepEqual(await buildCatalog(f.directory), { products: 3, images: 7 });
  extra.situacao = 'oculto';
  f.catalog.produtos[1].situacao = 'oculto'; await f.save();
  assert.deepEqual(await buildCatalog(f.directory), { products: 1, images: 2 });
  assert.equal((await readdir(path.join(f.directory, 'dist/assets'))).length, 2);
});
