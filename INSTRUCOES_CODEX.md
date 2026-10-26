# Instruções para continuar o projeto em qualquer sessão

## Estado atual — Sagrada Família autorizada em 26/10/2026

Usuário escolheu **fotos 1, 2, 3, 4 e 5**, definiu **foto 1 como capa** e autorizou a publicação. Produto Sagrada Família em Religiosos → Imagens religiosas grandes, após as bases e imagens pequenas. Nome e descrição comerciais, sem dimensões não confirmadas, preços ou dados de fabricação. Cinco WebP locais sem perdas, sem recorte/edição. Origens internas e numeração preservadas no cadastro; não enviadas ao navegador. Essa seleção específica de cinco fotos não deve ser reduzida ao padrão inicial de duas automaticamente.

Cadastro passa a quatro produtos e dezesseis imagens; três produtos anteriores e suas onze imagens permanecem intactos. Envio e implantação desta etapa serão confirmados em HISTORICO.md. As notas anteriores sobre pendência de seleção/publicação são históricas, superadas pela autorização expressa atual.


## Estado atual — autorização de publicação da Bandeja Alongada em 26/10/2026

Após revisar todos os originais e excluir 2, 3, 7, 8, 9, 10 e 11, o usuário autorizou publicar as **quatro imagens 1, 4, 5 e 6**, nessa ordem, sem recortes ou edições. A foto 1 é a principal; as demais aparecem nos detalhes. Essa escolha específica de quatro fotos prevalece, para este produto, sobre as propostas e bloqueios anteriores e sobre o padrão inicial de duas. Não reduzir ou substituir a seleção automaticamente.

Composição comercial: somente bandeja e porta-velas. Vela LED visível na foto 1 é de ambientação e não integra a oferta. Descrição comercial explicita essa exclusão. Os dois produtos anteriores permanecem intactos; Pomba da Paz mantém cinco fotografias. Origens e numeração original constam somente dos campos internos do cadastro, nunca da publicação.

Cadastro definitivo com três produtos e onze imagens, enviado à main no commit `d6ac145`. Vercel concluída e URL pública verificada em celular e computador; consultar HISTORICO.md. As descrições anteriores de seleção pendente são etapas históricas, não impedimentos atuais após esta autorização expressa.


## Leitura obrigatória antes de alterar arquivos

1. `AGENTS.md`, `PROJETO.md`, `PRODUTOS.md` e `HISTORICO.md`.
2. `dados/produtos.json`, `vercel.json`, `DEPLOYMENT.md`, `scripts/build.mjs` e os templates/arquivos afetados.
3. `git status --short`, `git log -8 --oneline`, branch local/remota e diferenças existentes.

Faça isso no início de cada nova tarefa e antes de cada etapa que mude produtos ou publicação. Os documentos e o Git são a memória do projeto; o chat não é requisito para reconstrução. Se houver divergência, inspecione arquivos, commits e site, relate o conflito e preserve dados. A instrução atual do usuário prevalece sobre estes documentos.

## Não reconstruir nem perder trabalho

- Usar o repositório `buniorcomj/AconXego-C-talogo` e o checkout existente. A tarefa de nuvem já é isolada; não criar worktree, novo repositório, novo projeto Vercel ou substituir a aplicação.
- Não resetar branches, fazer force push ou apagar arquivos anteriores para “organizar”. Preservar alterações e commits locais de outras tarefas. Atualizar a partir da main sem destruir mudanças.
- Não presumir que a branch local se chama main; este ambiente trabalhou em `work` e enviou commits explicitamente para `HEAD:main` após autorização.
- Revisar a lista de arquivos antes de cada commit. Nunca adicionar `internal/`, credenciais, imagens não selecionadas ou diretórios de runtime.
- Fotografias aprovadas em `demo/assets/` são patrimônio do catálogo: verificar hashes de `dados/produtos.json` e não modificar por conveniência.
- `demo/index.html` é snapshot legado para comparação; cadastrar em `dados/produtos.json`. Layout em `templates/catalogo.html`, comportamento em `templates/galeria.js`. Publicação sempre a partir de `dist` gerado.

## Produtos, aprovação e dados internos

Consultar PRODUTOS.md. Manter IDs e registros dos produtos existentes; ocultar com `situacao: "oculto"`, descontinuar com `descontinuado`, reativar com `ativo`. Não excluir cadastro nem imagens nesses fluxos.

Não inventar características, produtos, fotografias, preços ou números de contato. Não gerar imagens de produtos com IA, substituir por similares ou editar a aparência das peças. Recuperar apenas imagens do produto exato, sem contornar acesso. Apresentar seleção ao usuário e aguardar aprovação antes da publicação; verificar licença de uso comercial. Separar autorização visual, autorização de publicar e verificação de licença.

URLs de origem ficam somente nos campos `interno` do cadastro e não no navegador, nem mesmo escondidas em JSON, atributos HTML ou comentários públicos. Sem informações técnicas de fabricação, custos ou margens no conteúdo público. Não copiar documentos ou cadastro para `dist`. O repositório é público: não colocar segredos ou dados comerciais confidenciais nele. Não ler ou imprimir valores de credenciais; usar autenticação suportada e inspecionar apenas presença/status.

## Validação mínima por etapa

```sh
node --version
node --test tests/catalogo.test.mjs
node scripts/build.mjs
git diff --check
git status --short
```

Node.js 20+; validado neste ambiente com Node.js 24. Não é necessário npm install. Só `node scripts/build.mjs` cria a saída de publicação. Servir localmente com:

```sh
python3 -m http.server 4175 --bind 127.0.0.1 --directory dist
```

Inspecionar `dist`: index.html e imagens WebP apenas dos ativos. Conferir vitrine, abertura e fechamento de detalhes, alternância de todas as fotos, setas/Escape, celular (390px) e computador (1440px), imagens quebradas e erros JavaScript. Os testes automatizados de cadastro não substituem verificação visual quando mudar layout. Uma porta local não é URL acessível ao usuário no onboarding: não enviar links internos como se fossem uma prévia pública.

Para testar ocultação/reativação, usar os testes que criam cópias temporárias. Não ocultar produtos reais só para testar nem alterar hashes para fazer uma imagem diferente passar. Fotografias não envolvidas devem continuar byte a byte iguais ao commit anterior.

## Commits, autorização e implantação

1. Documentar o que mudou e atualizar HISTORICO.md, incluindo limitações e estado de publicação.
2. Separar etapas em commits identificáveis. Listar arquivos explicitamente no staging e conferir `git diff --cached --stat` e `git diff --cached --check`.
3. Antes de push para main ou qualquer deploy, informar o conteúdo concreto e confirmar autorização no escopo atual. Push para main pode atualizar produção automaticamente. O usuário desta organização pediu aviso antes do push; não enviar esta organização só porque publicou produtos em turnos anteriores.
4. Não criar Preview por push sem autorização: também publica conteúdo. Revisão local e commits locais não alteram o site.
5. Após autorização, revalidar a main remota, preservar histórico e enviar somente os commits revisados ao repositório existente.
6. Verificar o status Vercel no commit, consultar logs se houver falha e validar o endereço HTTPS publicado. Não dar uma falha como sucesso, nem parar no primeiro erro quando houver diagnóstico possível. Não alterar configuração às cegas.
7. Atualizar o registro de publicação quando confirmado. Referir commit/versão e URL; manter distinto “preparado”, “enviado”, “implantado” e “verificado publicamente”.

Conexão GitHub/Vercel não garante login da CLI. Não assumir credenciais por causa de uma autorização antiga. Usar os meios de autenticação disponíveis; se precisar de ação do usuário, explicar qual operação está bloqueada. Não pedir tokens no chat.

## Recuperação sem conversas

Na nova sessão, abrir o checkout provisionado e os documentos versionados. Em outro computador sem checkout, clonar o mesmo repositório existente, não criar um novo. Usar `git ls-files`, `git log`, `git show` e os hashes de imagem para confirmar o material. Build e testes devem funcionar apenas com os arquivos versionados.

Para conferir persistência remota, após push autorizado, comparar o SHA de `git ls-remote origin refs/heads/main`, o commit enviado e os caminhos na API/árvore do GitHub. Uma revisão local ou `git add` não comprova versionamento remoto. Material ignorado em `internal/` não será restaurado por clone; as origens selecionadas essenciais estão no cadastro versionado. Não prometer recuperação de arquivos nunca enviados.

Reverter erro com um novo commit revisado (por exemplo revert após autorização), não apagando histórico ou resetando produção. Para recuperar dados, ler `git show <commit>:<caminho>` ou restaurar apenas o arquivo necessário preservando mudanças locais.

## Prioridade e agrupamento permanentes (26/10/2026)

Finalizar Religiosos antes de cadastrar Natalinos. Categorias principais RELIGIOSOS/NATALINOS; ordem religiosa: (1) porta-terços, bandejas e porta-velas, (2) imagens pequenas, (3) imagens grandes, (4) kits religiosos. Consultar o cadastro formato 2 e PRODUTOS.md; não colocar essa sequência em listas de produtos no código. Ordem de categoria/subcategoria/produto controla a apresentação.

Todo produto conserva ID próprio, categoria, subcategoria, fotografias e campos de participação em kits. Imagens pequenas podem ser combinadas futuramente com porta-terços; registrar apenas elegibilidade/papel. Não criar kits, composições, preços ou imagens de conjuntos automaticamente. Combinações e preços dependem de instrução futura do usuário. Kit futuro exige registro e aprovação próprios, referenciando componentes por IDs. Não adicionar carrinho, pagamento ou loja virtual nesta etapa.

Há rascunho da Bandeja Alongada com Porta-Velas aguardando conferência em `internal/elongated-tray-review/product-draft.json`; não promover à publicação sem aprovação. Preservar também os commits locais da organização ainda não enviados. Antes de push, apresentar o conjunto completo de commits pendentes, não apenas o novo produto.

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

## Situação confirmada após o push autorizado de 26/10/2026

Organização/documentação enviada à main até `82978c3`; GitHub confirmou os arquivos pelos hashes e a Vercel concluiu a implantação. URL HTTPS verificada com dois produtos e sete fotos preservadas. Novas fotos não foram publicadas. Manter as cinco da Pomba da Paz, conforme instrução expressa, sem redução automática. A revisão de fontes/recortes das bandejas está em PRODUTOS.md; não há nova seleção adequada confirmada e a Alongada permanece bloqueada. Pedir aprovação antes de qualquer mudança na vitrine.

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
