# AconXego — instruções permanentes para agentes

Antes de editar este projeto, ler **INSTRUCOES_CODEX.md**, **PROJETO.md**, **PRODUTOS.md**, **HISTORICO.md** e os arquivos afetados, incluindo `dados/produtos.json`. Repetir a consulta a cada nova tarefa/etapa. Instruções atuais do usuário têm precedência.

- Continuar no repositório e checkout existentes; não reconstruir, criar worktree, outro repositório ou projeto Vercel.
- Cadastro oficial: `dados/produtos.json`. Situações: `ativo`, `oculto`, `descontinuado`. Não excluir informações ou imagens para ocultar produtos.
- Não modificar imagens aprovadas sem autorização. Não inventar produtos/fotografias/preços/características.
- Publicar somente `dist/` gerado por `node scripts/build.mjs`. Origens internas, documentos, dados de produção ou informações comerciais confidenciais nunca entram na saída pública.
- Não inserir segredos no Git: o repositório é público.
- Testar com `node --test tests/catalogo.test.mjs`, build e conferências relevantes de layout/galerias.
- Atualizar documentação e histórico; commits em etapas e com arquivos revisados. Não apagar trabalho anterior.
- Informar alterações e obter autorização antes de push/deploy; main está integrada à Vercel. Não confundir aprovação antiga com autorização permanente.
- Não declarar persistência no GitHub ou implantação concluída sem verificá-las.
