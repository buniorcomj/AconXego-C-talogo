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

### Próximo rascunho, bloqueado por falta de duas fotografias adequadas

**Bandeja Alongada com Porta-Velas** (`bandeja-alongada`), Religiosos → Porta-terços, bandejas e porta-velas; base potencial para kits, sem combinação. Descrição proposta preservada: “Bandeja alongada com acabamento canelado e porta-velas para compor a decoração.”

O padrão vigente exige bandeja e porta-velas juntos em duas vistas reais. As seleções anteriores (foto com vela LED + bandeja superior; depois bandeja sozinha + porta-velas sozinho) foram preservadas, mas não devem ser promovidas automaticamente. Composição confirmada: somente bandeja e porta-velas. Não incluir outros acessórios nem inventar partes para removê-los. Rascunho em `internal/elongated-tray-review/product-draft.json` deve permanecer bloqueado até duas fotografias adequadas e aprovação final. Os arquivos não foram excluídos.

## Padrão fotográfico vigente — duas fotografias do produto completo

Decisão de 26/10/2026, posterior à proposta de fotos separadas. **Esta regra substitui qualquer orientação anterior de usar uma foto de cada componente.** A proposta de bandeja sozinha + porta-velas sozinho não atende ao padrão e está suspensa. O histórico das propostas anteriores permanece em HISTORICO.md.

**Padrão inicial: duas fotografias por produto.**

1. **Foto principal:** produto inteiro, com todos os componentes incluídos na venda.
2. **Foto secundária:** o mesmo produto inteiro, com os mesmos componentes, em outro ângulo real.

### Bandejas com porta-velas

Cada fotografia deve mostrar **SOMENTE a bandeja e o porta-velas daquele produto, JUNTOS e completos**. A primeira fotografia deve apresentar o conjunto em perspectiva. A segunda deve mostrar o mesmo conjunto em outro ângulo real, preferencialmente em vista superior. Não permitir imagens religiosas, estátuas, terços, vela LED ou outros acessórios não pertencentes à oferta. Não substituir por uma fotografia somente da bandeja e outra somente do porta-velas. Para a Bandeja Alongada, a composição individual é somente bandeja e porta-velas: sem imagens religiosas, terços, vela LED ou outros acessórios não incluídos na oferta.

Remover visualmente outros produtos da composição original somente se for possível preservar fielmente as peças reais, sem mudar cores, proporções, formato, textura, detalhes ou acessórios próprios. Preferir originais adequados. Uma separação/corte não pode esconder componentes incluídos ou inventar áreas encobertas. Não reconstruir partes ocultas, simular novo ângulo, gerar fotografia fictícia, fazer composição que sugira foto original ou usar imagem de produto semelhante. Se a remoção exigir inventar características da peça, parar e informar a limitação; solicitar originais adequados ou uma alternativa expressamente aprovada.

### Estátuas e imagens religiosas

Duas fotos da mesma peça completa, a primeira mostrando-a inteira e a segunda em outro ângulo real. Preservar cores, proporções, detalhes e acessórios originais. Não preencher a quantidade com fotos técnicas, imagens de outros modelos ou vistas inventadas.

### Kits futuros

Cada uma das duas fotografias deve mostrar **a composição completa aprovada**: todos os produtos do kit juntos, em vistas reais diferentes. Não usar fotos avulsas dos componentes para simular a composição nem criar kits automaticamente. Combinações, fotografias e preços continuam sujeitos à definição e aprovação do usuário.

### Aprovação e exceções existentes

Antes de cadastrar definitivamente ou publicar um novo produto, verificar que há duas fotografias originais adequadas, apresentar os arquivos finais por links acessíveis e aguardar aprovação. Se não houver, avisar antes do cadastro; manter apenas rascunho bloqueado. Não completar a galeria com imagens inadequadas para atingir duas. Conversão WebP é preparação de arquivo, não aprovação visual nem licença comercial.

Aplicar o padrão aos próximos produtos e auditar os existentes. **Não trocar, editar, retirar ou reduzir fotografias já aprovadas sem nova autorização específica.** Produtos antigos podem conservar temporariamente sua seleção aprovada, registrando a divergência; não impor limite automático de duas fotos que retire imagens antigas. Conservar fotos e dados anteriores, inclusive propostas não utilizadas, sem apagá-los para adequar a quantidade.

### Auditoria atual (sem alteração de produto ou imagem)

| Produto | Conferência | Ação |
| --- | --- | --- |
| Bandeja Cruz com Porta-Velas | Duas fotos, mas a secundária mostra somente a bandeja; não mostra o conjunto completo em ambas. A principal também mostra vela LED, cuja inclusão comercial não foi confirmada. | Preservar as duas fotos aprovadas. Solicitar duas vistas reais adequadas e aprovação antes de qualquer troca. |
| Pomba da Paz | Cinco fotos aprovadas da mesma peça inteira, em ângulos reais disponíveis. O usuário determinou manter todas as cinco. | Manter as cinco sem alterações; padrão de duas fotos aplica-se aos novos produtos, sem exclusão automática de fotos já aprovadas. |
| Bandeja Alongada com Porta-Velas | As fotos isoladas 3 e 6 não atendem ao padrão. Os originais recuperados com os dois componentes juntos mostram vela LED e/ou outras peças, sem duas vistas adequadas confirmadas da oferta individual. | Suspender a seleção e o cadastro definitivo. Obter duas imagens do conjunto completo, ou verificar uma separação fiel e apresentar novo resultado antes de aprovação. Não editar por geração/reconstrução de áreas ocultas. |

A auditoria é visual, não comprova que a fonte seja fotografia física em vez de renderização, nem licença comercial. Não houve edição das imagens, alteração do cadastro definitivo ou publicação nesta revisão.

## Revisão de fontes e recortes — 26/10/2026

Acesso público refeito: galeria da Bandeja Cruz com nove imagens e da Alongada com dez, sem fotos novas; miniaturas oficiais também conferidas. A vista em perspectiva/superior da Cruz com os dois componentes contém uma pomba apoiada na bandeja e uma vela LED. A vista superior da Alongada com os dois componentes contém outras imagens religiosas e vela LED. As miniaturas repetem a vista principal e não fornecem outro ângulo adequado.

Avaliação de recorte: as peças extras sobrepõem-se ao interior das bandejas. Um corte retangular que as elimine excluiria partes da bandeja/conjunto completo; sua remoção por preenchimento exigiria recriar áreas encobertas. Não foi feito recorte, montagem ou edição por geração. Não há nova fotografia selecionada para substituição da Cruz nem duas fotos adequadas confirmadas para cadastrar a Alongada. Os originais e todas as candidatas anteriores permanecem preservados. Obter fotografias reais do conjunto completo em dois ângulos, ou outra fonte original adequada, antes de propor publicação.

A Pomba da Paz permanece com as cinco fotografias aprovadas, por instrução expressa do usuário. Nenhum produto ou fotografia foi alterado no push da organização. Apenas os dois produtos ativos e sete imagens aprovadas entram em dist.

### Critério estrito de seleção e situação atual — 26/10/2026

Fotos com outros produtos devem ser apresentadas na conferência preliminar, sem descarte automático. O usuário selecionará o que aproveitar; essa escolha não equivale a aprovação de publicação. Só chamar de seleção final a etapa posterior de conferência e aprovação. Recorte ou edição fiel só é aceitável mantendo o conjunto completo e as características reais; quando objetos encobrem partes da peça, não inventar o que está por baixo. Se não for possível obter duas fotos corretas, declarar a dificuldade e manter o novo produto pendente.

Nos originais já conferidos das bandejas, os acessórios nas vistas superiores sobrepõem-se ao interior. Um recorte não os remove mantendo a peça completa; preencher a área exigiria inventar detalhes encobertos. Não existe dupla final adequada selecionada para a Alongada e não há substituição aprovada para a Cruz. Nenhuma edição foi produzida. Manter Alongada pendente, Cruz inalterada e as cinco fotos aprovadas da Pomba da Paz intactas. Aguardar novas fotografias reais adequadas ou outra fonte original verificável, e apresentar o resultado final ao usuário antes de publicar.

## Procedimento vigente de seleção — primeiro todos os originais

Decisão posterior de 26/10/2026. Para cada novo produto ou revisão de seleção:

1. Recuperar **todas as imagens originais públicas disponíveis do produto exato**, inclusive as que mostrem acessórios, composições, variantes e imagens técnicas; mostrar também a capa oficial identificada separadamente quando existir. Não contornar acesso.
2. Apresentar visualmente todas, numeradas de forma estável e com links diretos acessíveis. Identificar o tipo sem descartar nem escolher pelo usuário. A quantidade apresentada para escolha não fica limitada às duas fotos pretendidas para a publicação.
3. **Aguardar a seleção do usuário antes de fazer recortes, edições, montagens, tratamentos ou alterações.** Não apresentar um descarte automático como se fosse a decisão final. Selecionar uma imagem não autoriza modificá-la nem publicar.
4. Só depois da escolha, avaliar junto ao usuário se há tratamento necessário e fiel. Nunca inventar vistas, modificar características reais ou recriar peças encobertas. Apresentar os resultados finais para aprovação específica antes de publicação/substituição.
5. Manter o catálogo atual, arquivos e aprovações anteriores. Não publicar nem substituir fotografias sem autorização. A Pomba da Paz conserva suas cinco fotos aprovadas.

O padrão pretendido para novos produtos continua sendo duas vistas do produto completo, mas é objetivo da seleção final, **não filtro para ocultar originais do usuário**. Esta instrução substitui a orientação anterior de não apresentar fotos com extras como candidatas à escolha. Todo material pode ser apresentado na conferência preliminar; o usuário decide o que aproveitar. Não chamar essa apresentação de fotografias finais prontas para publicação.

Rodada atual: começar pela Bandeja Alongada, dez imagens da galeria na ordem original (1–10), mais a capa oficial (11). Nenhuma descartada ou editada. Aguardar a escolha antes de preparar tratamento. Depois apresentar a Bandeja Cruz também integralmente, sem modificar sua seleção publicada. Originais e mapa de numeração estão localmente em `internal/elongated-tray-review/galeria-completa.json`; arquivos de conferência permanecem fora do conteúdo público.
