# AconXego — catálogo digital

Site existente: https://aconxegocatalogo.vercel.app

Antes de continuar o desenvolvimento, ler:

1. [Instruções para agentes](AGENTS.md) e [continuidade Codex](INSTRUCOES_CODEX.md).
2. [Projeto, estrutura e regras](PROJETO.md).
3. [Produtos e manutenção do cadastro](PRODUTOS.md), com fonte em [dados/produtos.json](dados/produtos.json).
4. [Histórico](HISTORICO.md) e [implantação GitHub/Vercel](DEPLOYMENT.md).

HTML/CSS/JavaScript estáticos; build Node.js sem dependências npm. Usar Node.js 20+ (validado com 24):

```sh
node --test tests/catalogo.test.mjs
node scripts/build.mjs
python3 -m http.server 4175 --bind 127.0.0.1 --directory dist
```

Publicar exclusivamente `dist/`. Não editar o snapshot legado `demo/index.html` para cadastrar produtos. Não apagar dados/fotografias ao ocultar um produto. Main aciona a Vercel; obter autorização antes de push/deploy.

O repositório é público: origens internas fora do catálogo não são confidenciais no GitHub. Nunca adicionar segredos, dados de clientes, custos ou margens.
