# Produtos AconXego

A fonte oficial e editável é **`dados/produtos.json`**, versionada no Git. Este documento explica o cadastro; não manter uma segunda lista divergente. Origens por fotografia, datas de aprovação e SHA-256 estão somente no cadastro de build, nunca no HTML público.

## Produtos existentes

| ID estável | Nome | Categoria | Situação | Descrição | Imagens locais em `demo/assets/` |
| --- | --- | --- | --- | --- | --- |
| `bandeja-cruz` | Bandeja Cruz com Porta-Velas | Artigos Religiosos | ativo | Uma peça para compor a decoração religiosa. | `bandeja-cruz-principal.webp` e `bandeja-cruz-secundaria.webp` |
| `pomba-da-paz` | Pomba da Paz | Artigos Religiosos | ativo | Um símbolo de paz para compor a decoração e presentear com significado. | `pomba-da-paz-01.webp` até `pomba-da-paz-05.webp` |

Os sete WebP têm 1080 × 1350 pixels. Sua aprovação ocorreu em 26/10/2026. A ordem acima e as descrições são as da publicação v0.3.0. Não há outros produtos cadastrados. Não supor inclusão de vela ou outros acessórios na bandeja. A Pomba da Paz é independente da bandeja.

Categorias: `religiosos` → Artigos Religiosos; `natalinos` → Coleção Natalina. Não criar produtos natalinos sem material real e aprovação.

## Estrutura do cadastro

- `versao`: versão do formato do cadastro, atualmente `2`; não é a versão da aplicação.
- `categorias`: IDs estáveis e nomes comerciais. O menu das duas categorias atuais está no template.
- `produtos`: todos os registros, inclusive ocultos e descontinuados.
- Produto: `id` único em letras minúsculas/números/hífens; `nome`; `categoria` (ID existente); `descricao`; `subcategoria`; `situacao`; `ordem` inteira; `tipo`; `participacao_kits`; `componentes`; `imagens`; `interno`.
- `imagens`: lista ordenada. A primeira é a principal da vitrine. Cada imagem contém `arquivo` relativo a `demo/`, `alt`, `rotulo`, `largura`, `altura`, e metadados `interno`.
- `interno` do produto: página de origem, data de publicação e observações. Não aparece no HTML.
- `interno` da imagem: URL exata de origem, recuperação/aprovação (`AAAA-MM-DD`), SHA-256 do WebP e nota de licença. Não aparece no HTML.

O build valida caminhos locais, cabeçalho WebP, hash, categoria, estado, IDs, dimensões declaradas e aprovação registrada. Não valida autorização jurídica, nem confirma novas aprovações com o usuário por conta própria. Nunca inventar uma data de aprovação. Textos comerciais não podem conter fontes externas ou termos de fabricação; não adicionar dados internos em `alt` ou rótulos.

## Adicionar ou editar

1. Inspecionar as imagens exatas e apresentar ao usuário. Não reaproveitar fotografia de outra peça. Respeitar licença e acesso.
2. Salvar os arquivos conferidos e otimizar sem modificar a aparência. Guardar novos WebP em `demo/assets/` com nomes estáveis.
3. Criar um registro com ID novo e situação `oculto` enquanto aguarda aprovação. Informações e datas não confirmadas permanecem pendentes fora da publicação; o build exige aprovação das imagens antes de aceitar o registro definitivo, mesmo oculto. Se a imagem ainda não foi aprovada, manter rascunho local fora do cadastro definitivo.
4. Preencher nomes e descrição comercial sem inventar características. Gerar SHA-256 dos arquivos, por exemplo com `sha256sum demo/assets/arquivo.webp`.
5. Após aprovação, registrar a data real, conferir a licença, definir `ativo` e validar. Aprovação de imagens não autoriza automaticamente outras mudanças ou produtos.
6. Não editar o snapshot legado `demo/index.html`, nem os HTML/JS gerados em `dist`. Não há lista de produtos fixos no build novo; o cadastro define as imagens a copiar.
7. Atualizar este resumo e HISTORICO.md, executar `node --test tests/catalogo.test.mjs` e `node scripts/build.mjs`, inspecionar localmente `dist/` e apresentar o resultado antes do push.

## Ocultar, descontinuar, reativar

- **Ocultar**: mudar somente `situacao` para `oculto`. O item sai da próxima saída pública, mas cadastro e fotografias permanecem no Git.
- **Descontinuar**: `situacao: "descontinuado"`; mesma exclusão da saída pública, mas sinaliza retirada comercial duradoura. Registrar motivo/data em `interno` e no histórico quando conhecidos.
- **Reativar**: `situacao: "ativo"`. Reutiliza o mesmo ID e imagens, sem download nem reconstrução do produto.
- **Editar**: mudar campos necessários no mesmo registro; registrar mudança no histórico. Para substituir uma imagem, obter aprovação e conservar a anterior no Git. Não remover arquivos antigos sem autorização.
- **Excluir definitivamente**: somente mediante autorização explícita, nunca como mecanismo comum de ocultação.

A sequência usa `ordem` da categoria, `ordem` da subcategoria e `ordem` do produto dentro do grupo; IDs desempatarão ordens iguais. Só ativos entram no HTML e têm imagens copiadas. URLs antigas em implantações anteriores não são revogadas por uma ocultação.

## Conferências antes de publicar

- Produto, categoria, descrição e sequência das fotografias corretos.
- Principal na vitrine; demais fotografias sob demanda nos detalhes.
- Cadastros ocultos/descontinuados ausentes do HTML, dos botões de galeria e de `dist/assets/` quando exclusivos deles.
- Nenhum arquivo do cadastro, URL de origem, documento interno, custo ou dado técnico em `dist`.
- Fotografias dos produtos não alterados idênticas aos hashes já registrados.
- Commit revisado, autorização de push/publicação confirmada e implantação verificada conforme DEPLOYMENT.md.

## Subcategorias e prioridade de cadastro (26/10/2026)

Concluir **RELIGIOSOS** antes de iniciar **NATALINOS**. Não criar produtos, tamanhos ou variantes apenas para completar grupos.

| Ordem | ID de subcategoria | Grupo | Produtos existentes |
| --- | --- | --- | --- |
| 10 | `porta-tercos-bandejas-porta-velas` | Porta-terços, bandejas e porta-velas | Bandeja Cruz com Porta-Velas |
| 20 | `imagens-pequenas` | Imagens religiosas pequenas | Pomba da Paz |
| 30 | `imagens-grandes` | Imagens religiosas grandes | Nenhum |
| 40 | `kits-religiosos` | Kits religiosos | Nenhum; não criar automaticamente |

Categorias e subcategorias têm IDs e `ordem` próprios no JSON. Toda subcategoria declara sua categoria. Cada produto precisa de uma subcategoria válida da mesma categoria; produtos futuros seguem a ordenação do cadastro sem listas fixas no código. As categorias principais são registradas como RELIGIOSOS e NATALINOS, preservando os rótulos atuais da vitrine.

### Participação em kits

- `tipo: "individual"` para os produtos atuais.
- `participacao_kits.permitida: true` significa possibilidade futura, não aprovação de kit.
- `participacao_kits.papel`: `base` para bandeja/porta-terço; `imagem` para imagem; `outro` quando necessário.
- `componentes: []` em todo produto individual. Não preencher combinações por conta própria.
- Kit futuro é outro produto, com ID, categoria/subcategoria, fotos e composição expressamente aprovados. Usar `tipo: "kit"` e `componentes: [{"produto_id": "id-existente", "quantidade": 1}, ...]`. Todos os IDs devem existir, ser individuais, elegíveis e da mesma categoria; não incluir o próprio kit nem kits aninhados. O sistema valida, mas não cria esses registros.
- Preços e combinações serão definidos posteriormente. Não gerar valores automáticos, fotografias de conjuntos ou funcionalidades de loja.

### Próximo rascunho, aguardando aprovação final das fotografias

**Bandeja Alongada com Porta-Velas** (`bandeja-alongada`), Religiosos → Porta-terços, bandejas e porta-velas; base potencial para kits, sem combinação. Descrição proposta: “Bandeja alongada com acabamento canelado e porta-velas para compor a decoração.”

Duas fotografias finais propostas: original 3 da galeria (bandeja sozinha) como principal e original 6 (porta-velas vazio) como secundária. Composição do produto individual confirmada pelo usuário: somente bandeja e seu porta-velas. Não incluir vela LED, imagens religiosas, terços ou acessórios. A seleção anterior com vela LED foi substituída na proposta, sem apagar seus arquivos. Rascunho e origens em `internal/elongated-tray-review/`; novos candidatos WebP `bandeja-alongada-bandeja.webp` e `bandeja-alongada-porta-velas.webp`, sem recorte, montagem ou alteração de pixels. Aguardar aprovação final antes de cadastrar definitivamente, commitar o produto ou publicar. Não inventar `aprovada_em`.

## Fotografia do produto individual — regra de 26/10/2026

A Bandeja Alongada com Porta-Velas é composta **somente pela bandeja e seu porta-velas**. Não incluir imagens religiosas, terços, vela LED ou acessórios extras como parte da oferta individual. A foto principal deve mostrar apenas os componentes reais dessa oferta; quando não houver original adequado dos dois juntos, apresentar fotos originais separadas da bandeja e do porta-velas. Deixar clara a composição comercial e não confundir itens fotografados com kit aprovado.

Preferir imagens originais da própria galeria que já mostrem os componentes isolados. Não remover objetos de modo que seja necessário inventar partes encobertas, deformar produtos, mudar cores/texturas/proporções ou gerar uma nova aparência. Se os originais não permitirem separação fiel, informar a limitação e solicitar fotografia adequada. Qualquer edição eventualmente necessária exige conferência das imagens finais antes de publicar. Não usar fotografia de produto semelhante ou de outro modelo.

Fotos de composição com outras peças ficam restritas à conferência de possíveis kits futuros; não criam kit, preço ou inclusão de acessórios. Combinações exigem aprovação própria. Produtos e imagens já publicados permanecem preservados; não aplicar mudanças retroativas sem autorização.

Conferência da Bandeja Alongada: a seleção anterior tinha uma vela LED visível na principal. A nova proposta usa **original 3, bandeja sozinha**, e **original 6, porta-velas vazio**. São arquivos originais convertidos para WebP sem perdas, sem montagem nem edição da peça. As candidatas anteriores foram preservadas localmente, sem exclusão. As duas fotos finais aguardam aprovação; esta instrução suspende a publicação até a conferência final solicitada pelo usuário.
