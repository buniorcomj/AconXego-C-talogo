# AconXego — continuidade do projeto

## Estado atual — Sagrada Família autorizada em 26/10/2026

Usuário escolheu **fotos 1, 2, 3, 4 e 5**, definiu **foto 1 como capa** e autorizou a publicação. Produto Sagrada Família em Religiosos → Imagens religiosas grandes, após as bases e imagens pequenas. Nome e descrição comerciais, sem dimensões não confirmadas, preços ou dados de fabricação. Cinco WebP locais sem perdas, sem recorte/edição. Origens internas e numeração preservadas no cadastro; não enviadas ao navegador. Essa seleção específica de cinco fotos não deve ser reduzida ao padrão inicial de duas automaticamente.

Cadastro publicado com quatro produtos e dezesseis imagens; três produtos anteriores e suas onze imagens permanecem intactos. Commit funcional `05b9799` confirmado na main, Vercel concluída e URL pública verificada em celular e computador; ver HISTORICO.md. As notas anteriores sobre pendência de seleção/publicação são históricas, superadas pela autorização expressa atual.


## Estado atual — autorização de publicação da Bandeja Alongada em 26/10/2026

Após revisar todos os originais e excluir 2, 3, 7, 8, 9, 10 e 11, o usuário autorizou publicar as **quatro imagens 1, 4, 5 e 6**, nessa ordem, sem recortes ou edições. A foto 1 é a principal; as demais aparecem nos detalhes. Essa escolha específica de quatro fotos prevalece, para este produto, sobre as propostas e bloqueios anteriores e sobre o padrão inicial de duas. Não reduzir ou substituir a seleção automaticamente.

Composição comercial: somente bandeja e porta-velas. Vela LED visível na foto 1 é de ambientação e não integra a oferta. Descrição comercial explicita essa exclusão. Os dois produtos anteriores permanecem intactos; Pomba da Paz mantém cinco fotografias. Origens e numeração original constam somente dos campos internos do cadastro, nunca da publicação.

Cadastro definitivo com três produtos e onze imagens, enviado à main no commit `d6ac145`. Vercel concluída e URL pública verificada em celular e computador; consultar HISTORICO.md. As descrições anteriores de seleção pendente são etapas históricas, não impedimentos atuais após esta autorização expressa.


Atualizado em 26/10/2026 (America/Sao_Paulo). Versão **v0.7.0 publicada**, commit funcional `05b9799`, com quatro produtos e dezesseis imagens. Produtos anteriores e suas fotografias permanecem preservados. Implantação e URL pública verificadas em 26/10/2026; consultar HISTORICO.md para atualizações.

## Identidade e objetivo

Catálogo digital da loja AconXego para apresentar peças decorativas e religiosas a lojistas, principalmente pelo celular e por compartilhamento no WhatsApp. Visual elegante e acolhedor: bege, branco, marrom suave e detalhes dourados. Preservar o visual e os produtos aprovados ao fazer manutenção.

- Repositório existente: https://github.com/buniorcomj/AconXego-C-talogo
- Site existente: https://aconxegocatalogo.vercel.app
- Projeto Vercel existente: `acon-xego/aconxegocatalogo`.
- Branch integrada: `main`. Um push nela pode publicar automaticamente em produção.
- Não criar outro repositório, projeto Vercel ou domínio para continuar este trabalho.

## Tecnologias e estrutura

Site estático em HTML, CSS e JavaScript nativos; Node.js para build e testes. Não usa React, Vite, dependências npm, banco de dados ou backend atualmente. Não migrar a stack sem necessidade e autorização. Node.js 24 foi usado nos testes; testes exigem Node.js 20 ou superior. Python 3 é apenas uma opção para servir arquivos localmente.

| Caminho | Função |
| --- | --- |
| `dados/produtos.json` | Fonte versionada dos produtos, categorias, estados e origens internas. Não enviar ao navegador. |
| `PRODUTOS.md` | Guia do cadastro e resumo dos produtos atuais. |
| `templates/catalogo.html` | Layout e estilos preservados da vitrine. Marcadores são preenchidos no build. |
| `templates/galeria.js` | Comportamento das galerias, sem informações internas. Incorporado ao HTML gerado. |
| `demo/assets/*.webp` | Fotografias selecionadas, locais e versionadas; conservar mesmo para produtos ocultos. |
| `demo/index.html` | Snapshot legado da v0.3.0, preservado para comparação; não é mais a fonte do build. Não editar para cadastrar produtos. |
| `scripts/build.mjs` | Valida cadastro, aprovações, hashes e caminhos; gera somente conteúdo público. |
| `tests/catalogo.test.mjs` | Testes de estados, reativação, validação e isolamento dos dados internos. |
| `dist/` | Saída gerada e ignorada no Git. Única pasta que a Vercel deve servir. |
| `vercel.json` | Build e pasta pública da Vercel. |
| `DEPLOYMENT.md` | Procedimento de validação e implantação. |
| `HISTORICO.md` | Histórico de versões, decisões e implantações. |
| `INSTRUCOES_CODEX.md`, `AGENTS.md` | Regras para retomar em outra sessão. |
| `internal/` | Material local de conferência legado, ignorado no Git. Não é recuperável por clone; não depender dele para os produtos ativos. |

## Produtos e regras comerciais

Ativos no cadastro: Bandeja Cruz com Porta-Velas (duas imagens), Bandeja Alongada com Porta-Velas (quatro imagens) e Pomba da Paz (cinco imagens), em **Artigos Religiosos**. **Coleção Natalina** está preparada, sem produtos aprovados. Produtos citados em conversas antigas que não constam do cadastro não são produtos publicados.

- Não inventar produtos, preços, tamanhos, materiais, disponibilidade, acessórios incluídos ou características.
- Não substituir imagens por similares nem gerar imagens de produto com IA. Não alterar cores, formato ou detalhes da peça. Conversão WebP sem perdas e sem recorte foi adotada para preservar os pixels.
- Fontes de imagens servem exclusivamente à conferência interna. Não enviar nomes, URLs de fornecedores/plataformas, arquivos digitais ou instruções técnicas ao navegador público.
- Catálogo público: nome, categoria, descrição comercial e fotografias aprovadas. Sem tempos de produção, filamento, custos ou margens. Sem carrinho nem pagamentos nesta fase.
- Aprovação visual não substitui licença comercial. Conferir permissões antes de novas reutilizações; não contornar autenticação/restrições.
- A origem oficial associa a imagem ao modelo, mas não prova fotografia física versus renderização nem aparência de uma peça produzida pela loja.
- Imagem com pomba não integra a galeria da bandeja. Pomba da Paz é um produto separado.

## Operação e limites atuais

Apenas `ativo` aparece na vitrine e nas galerias e tem imagens copiadas para `dist`. `oculto` e `descontinuado` ficam no cadastro e conservam todos os arquivos de origem. Não excluir produto ou imagem para retirar da vitrine. Para reativar, mudar a situação para `ativo`, validar e solicitar autorização de publicação. Imagens de versões anteriores podem continuar acessíveis em deploys históricos: ocultação não revoga conteúdo previamente publicado.

O primeiro item de `imagens` é o principal. A vitrine mostra só ele; os demais carregam quando selecionados nos detalhes. Há botões de galeria, setas do teclado, Escape e layout responsivo.

Ainda **não implementados**: administração autenticada, edição por interface sem Codex/Git, importação por link na administração, upload manual, área de lojistas, autenticação de clientes, preços restritos, links individuais, PDF e WhatsApp operacional. O número real da loja não foi fornecido; a vitrine informa que o contato aguarda configuração. Não inventar número ou preços. Área protegida real exige autenticação e controle no servidor; senha em JavaScript não protege informações.

## Fronteira pública e preservação

O build lê o cadastro no servidor e seleciona campos comerciais explicitamente. Gera `dist/index.html` e apenas as imagens de produtos ativos. Não copia documentos, cadastro, fontes, hashes, notas ou material técnico para `dist`. Nunca usar a raiz do repositório como diretório público.

**O repositório GitHub é público.** “Interno” aqui significa fora do catálogo e da saída pública da Vercel, não confidencial no GitHub. URLs de origem no cadastro versionado podem ser lidas por quem acessa o repositório. Nunca inserir segredos, credenciais, dados de clientes, custos ou margens nele. Dados realmente confidenciais exigem armazenamento privado ou mudança de visibilidade autorizada. `.gitignore`, `noindex` e `.vercelignore` não fornecem autenticação.

As sete imagens anteriores permanecem versionadas; quatro imagens da Alongada aprovadas serão incluídas neste envio, com seus metadados. Os dados essenciais estão preservados, permitindo reconstruir o catálogo sem histórico de chat. Os originais não selecionados em `internal/` permanecem locais; não foram apagados e não se deve anunciar backup deles no GitHub. Fazer backup privado autorizado se passarem a ser necessários.

## Fluxo de manutenção

1. Ler AGENTS.md, INSTRUCOES_CODEX.md, este arquivo, PRODUTOS.md e HISTORICO.md, além do estado do Git e dos arquivos existentes.
2. Usar o checkout existente. Confirmar a `main` remota; preservar alterações locais e commits ainda não enviados.
3. Editar o cadastro e, quando necessário, adicionar apenas imagens conferidas e aprovadas. Seguir PRODUTOS.md.
4. Executar build, testes e conferir o site em celular/computador; preservar imagens existentes.
5. Atualizar os documentos e HISTORICO.md. Fazer commits pequenos e identificáveis, com lista explícita de arquivos; não usar `git add .` sem revisar.
6. Informar as alterações e obter autorização antes de push que publique ou deploy. Aprovações passadas não são autorização permanente para mudanças futuras.
7. Após autorização, enviar ao repositório existente, acompanhar a Vercel e validar a URL pública. Registrar o resultado, sem confundir testes locais com implantação concluída.

A organização foi autorizada e enviada; produtos e fotografias da publicação devem continuar intactos até autorização específica de mudança. Não aplicar reset, force push, exclusões ou reconstrução do projeto para “limpar” histórico.

## Organização religiosa e evolução — decisão de 26/10/2026

As categorias principais são **RELIGIOSOS** e **NATALINOS**. Os rótulos atuais da vitrine (Artigos Religiosos e Coleção Natalina) foram preservados. Concluir os cadastros religiosos antes de iniciar os natalinos. Não acrescentar produtos natalinos apenas para preencher a categoria.

Dentro de Religiosos, a sequência é definida em `subcategorias` no cadastro:

1. Porta-terços, bandejas e porta-velas.
2. Imagens religiosas pequenas.
3. Imagens religiosas grandes.
4. Kits religiosos.

O cadastro usa formato `versao: 2`. Categorias e subcategorias possuem `ordem`; cada produto tem ID estável, categoria, subcategoria, imagens, situação e ordem dentro do grupo. A sequência é **ordem da categoria → ordem da subcategoria → ordem do produto**, com IDs como desempate. Alterar essas ordens no cadastro dispensa mudança no código do site. Os nomes dos grupos são organizacionais; não implicam medidas comerciais inventadas. A Pomba da Paz foi organizada em pequenas (a fonte declara aproximadamente 9 cm, dimensão não publicada como oferta); a bandeja em bases/acessórios.

Cada produto individual tem `tipo: "individual"`, `participacao_kits` com `permitida` e `papel` (`base`, `imagem` ou `outro`), e `componentes: []`. Bandejas/porta-terços podem ser bases e imagens pequenas podem participar futuramente. **Elegibilidade não é combinação aprovada** e não produz novos produtos. Não há kits reais cadastrados ou preços definidos.

Um futuro kit só existirá mediante cadastro explícito de produto `tipo: "kit"`, subcategoria Kits religiosos, ID próprio, fotografias aprovadas e `componentes` com `produto_id` e `quantidade`, além da aprovação das combinações e valores pelo usuário. Os componentes apontam para IDs existentes e elegíveis, sem copiar/apagar seus registros. Não gerar fotos de composição, preço somado, descontos, kits automáticos, carrinho, pagamento ou estoque por inferência. O build apenas valida registros expressamente cadastrados; não calcula preços nem implementa loja virtual.

Próximo item em conferência: **Bandeja Alongada com Porta-Velas**, em Porta-terços, bandejas e porta-velas. Rascunho e fontes locais em `internal/elongated-tray-review/product-draft.json`; propostas WebP preservadas em `demo/assets/`, suspensas pelo novo padrão de duas fotos do conjunto completo e fora do cadastro definitivo e de `dist`. Não publicar nem incluir em kit até aprovação. Arquivos ignorados de conferência não estão no GitHub; após aprovação, promover o registro e imagens necessários para o cadastro versionado.

As regras e a organização foram enviadas à main com autorização expressa e persistência remota verificada. Novas fotografias continuam aguardando aprovação; não confundir autorização de documentação com autorização de alterar a vitrine.

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

## Fontes diversas e fotografias manuais — 26/10/2026

O catálogo aceita produtos provenientes de **STLflix, MakerWorld e outras fontes**, além de fotografias próprias enviadas manualmente. Não vincular o cadastro a um fornecedor único nem exigir URL externa para uma fotografia enviada pelo usuário. Reconhecer a fonte pelo link informado; o modelo MakerWorld 2113086 não é um produto STLflix.

O build já aceita metadados de procedência genéricos, mantendo compatibilidade com os registros atuais:

- Produto por link: `interno.origem = {"tipo":"link","plataforma":"makerworld","url":"https://..."}`. O nome da plataforma é informativo, não uma lista limitada a dois serviços.
- Produto cadastrado manualmente: `interno.origem = {"tipo":"manual","descricao":"Acervo próprio"}`.
- Imagem obtida por link: `imagem.interno.origem = {"tipo":"link","url":"https://..."}`.
- Imagem enviada manualmente: `imagem.interno.origem = {"tipo":"upload","arquivo_original":"foto.jpg","recebida_em":"AAAA-MM-DD"}`. Não inventar URL de origem. Preservar o original recebido, converter para WebP após seleção/aprovação e registrar arquivo local, hash, dimensões e data de aprovação como nas demais fotos.
- Campos legados `pagina_origem` e `url_origem` continuam aceitos; não é necessário reescrever cadastros/imagens já aprovados.

Todas as imagens efetivamente publicadas são locais em `demo/assets/`, com origem interna e aprovação, e o build continua enviando somente campos comerciais e WebP de produtos ativos para `dist`. Nenhum link/fornecedor/nome de arquivo original de upload deve chegar ao catálogo público.

**Isso prepara o cadastro de dados, não uma interface de upload nem um importador web.** A administração autenticada continua não implementada; o envio manual atual é pelo chat e o recebimento/registro precisa ser executado no projeto. Importação automática futura exige rotas públicas permitidas e, se implementada como serviço, autenticação e validação no servidor. Não contornar HTTP 402/403, autenticação, desafio antibot ou restrições. Não adivinhar URLs de CDN nem usar imagens semelhantes. Verificar licença antes de reutilização comercial.

Antes de solicitar download manual, investigar os dados públicos permitidos: HTML/JSON/OG quando acessíveis e índices públicos que possam indicar imagens do produto exato. Se a página não fornece metadados por bloqueio e não houver URL de imagem confirmada por uma fonte pública permitida, informar os testes efetivamente feitos e manter o produto pendente. Não declarar que inexiste qualquer outra imagem na internet: declarar a limitação de acesso observada. Primeiro apresentar todos os originais recuperados e aguardar seleção; nenhuma publicação sem aprovação.

### Resultado da investigação MakerWorld 2113086

A página pública do modelo respondeu HTTP 402 com “Please contact the site owner for access.” O corpo não contém HTML, Open Graph ou galeria. `/robots.txt` e `/sitemap-0.xml` também terminaram em 402. `/sitemap.xml`, o índice público anunciado `/sitemaps/index.xml` e a primeira página pública de modelos `/sitemaps/models.xml?p=0` responderam 200. Os índices consultados contêm links de páginas, sem URLs de fotografia do produto confirmado. Não se percorreu o catálogo inteiro nem se tentou contornar o bloqueio do modelo, autenticação ou adivinhar arquivos. Nenhuma URL original de imagem do modelo 2113086 foi confirmada por essas vias.

Produto permanece pendente; o próximo passo disponível é o usuário fornecer manualmente os originais ou links diretos de imagens desse modelo aos quais tenha acesso permitido. Nenhuma imagem foi substituída/gerada e nenhum produto novo foi publicado nesta investigação.
