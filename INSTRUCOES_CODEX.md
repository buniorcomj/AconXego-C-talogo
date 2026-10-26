# Instruções para continuar o projeto em qualquer sessão

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
