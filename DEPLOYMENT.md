# Implantação do catálogo

Projeto existente Vercel: **`acon-xego/aconxegocatalogo`**. Repositório: **`buniorcomj/AconXego-C-talogo`**. URL: **https://aconxegocatalogo.vercel.app**.

Ler PROJETO.md, INSTRUCOES_CODEX.md, PRODUTOS.md e HISTORICO.md antes de mudar arquivos ou publicar. Main está ligada à implantação automática: o push precisa de autorização no escopo atual. A organização v0.4.0 aguarda revisão antes do push; a publicação v0.3.0 deve permanecer intacta até lá.

## Configuração esperada

| Campo | Valor |
| --- | --- |
| Root Directory | raiz do repositório (vazio ou `.`), nunca `demo` |
| Framework Preset | Other (`framework: null`) |
| Build Command | `node scripts/build.mjs` |
| Output Directory | `dist` |
| Install Command | vazio; sem dependências npm |

Os campos de build estão em `vercel.json`. Não reintroduzir `directoryListing`: foi rejeitado pelo schema Vercel e corrigido em `262cef9`. Não mudar projeto/domínio ou promover aliases para contornar erro de build.

O build usa `dados/produtos.json` e `templates/`; copia exclusivamente campos comerciais e imagens locais de ativos para `dist`. Esses arquivos de entrada precisam estar disponíveis no ambiente de build, mas não são servidos ao navegador. `.vercelignore` exclui material local legado; não excluir cadastro ou templates do upload necessário ao build. Documentos e testes podem estar no Git sem entrar na saída pública.

## Verificação local

```sh
node --test tests/catalogo.test.mjs
node scripts/build.mjs
python3 -m http.server 4175 --bind 127.0.0.1 --directory dist
```

Verificar página, produtos, imagens e galerias em celular e computador. Inspecionar `dist`: somente index.html e os WebP dos ativos. Cadastro, origens, hashes, documentos e registros ocultos/descontinuados não podem aparecer no HTML ou em arquivos servidos. `dist` é gerada e não deve ser commitada.

## Publicar após autorização

1. Revisar arquivos, commits locais e alterações remotas; não sobrescrever trabalho concorrente.
2. Confirmar o escopo autorizado antes de qualquer push/deploy. Uma branch de revisão pode criar Preview automaticamente; isso também requer autorização de publicação.
3. Enviar commits revisados à main existente. Neste ambiente a branch local pode ser `work`; conferir antes de usar `git push origin HEAD:main`. Nunca usar force.
4. Conferir o status Vercel do SHA exato pelo GitHub, por exemplo `gh api repos/buniorcomj/AconXego-C-talogo/commits/<sha>/status`. GitHub autenticado não prova autenticação da CLI Vercel.
5. Se falhar, consultar Build Logs do deployment. Corrigir o erro demonstrado, sem alterar imagens/produtos alheios. Não considerar Ready suficiente: abrir `/` e conferir o catálogo.
6. Testar a URL HTTPS, imagem principal, todas as fotos nos detalhes, Escape/setas, celular e computador; comparar os arquivos com os hashes aprovados. Conferir que documentos e dados internos não estão acessíveis no site.
7. Atualizar HISTORICO.md com commit, verificação e estado real da implantação. Separar etapa local, push, deployment e teste público.

O cabeçalho `X-Robots-Tag: noindex, nofollow` continua ativo para avaliação. Ele não protege conteúdo nem autentica usuários. Ocultação não apaga deployments antigos. Não publicar a raiz do repositório como saída.

## Recuperação

Consultar Git antes de qualquer restauração. Reverter por novo commit e publicação autorizada; não apagar histórico nem fazer reset/force push para voltar uma versão. Manter o cadastro de produtos ocultos e imagens originais versionadas. O material local ignorado em `internal/` não é backup remoto; os dados essenciais dos produtos publicados estão no cadastro e assets versionados.
