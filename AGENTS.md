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

- Finalizar Religiosos antes dos Natalinos. Ordem por cadastro: porta-terços/bandejas/porta-velas → imagens pequenas → imagens grandes → kits religiosos.
- Formato 2: cada produto tem subcategoria e possibilidade de participar de kits. Só preparar referências; não criar kits ou preços automaticamente, nem carrinho/pagamento. Preservar IDs e imagens.

- Fotografias por link e upload têm o mesmo valor, inclusive Shopee. Aceitar fundos brancos e ambientações. Quantidade livre (uma ou mais aprovadas), sem reduzir galerias existentes; preservar originais. Ver regras vigentes no início de INSTRUCOES_CODEX.md e PROJETO.md.

- Não alterar características reais nem apresentar acessórios de ambientação como parte da venda. Não descartar previamente fotos por composição ou fundo. Produto novo é rascunho até aprovação.

- Procedimento vigente: primeiro apresentar TODAS as imagens originais numeradas e com links, sem filtrar por acessórios; aguardar a escolha do usuário ANTES de recortar/editar/tratar. Depois avaliar juntos os tratamentos e pedir aprovação final antes de publicar/substituir. Não existe quantidade fixa na galeria final; a seleção e a ordem dependem do usuário.

- Cadastro de múltiplas fontes: STLflix, MakerWorld, outras e uploads manuais. Não exigir URL externa para upload. Usar metadados internos de origem, arquivos locais aprovados e investigar caminhos públicos permitidos antes de pedir envio manual. Nunca contornar bloqueios; interface administrativa/importador web ainda não implementados.

- Fontes previstas incluem STLflix, MakerWorld, PinkyWings e outras. Links e uploads são equivalentes. Supabase, banco, login e painel estão adiados: não implementar agora. Continuar pelo Codex; preservar plano em PLANO_ADMINISTRATIVO.md e não publicar produtos sem aprovação.

- Decisão mais recente: priorizar concluir produtos religiosos e depois natalinos. Apresentar todos os originais por link ou upload, aguardar seleção e autorização de publicação. Não desenvolver a administração até nova autorização explícita.
