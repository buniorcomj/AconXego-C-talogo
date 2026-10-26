# AconXego — continuidade do projeto

Atualizado em 26/10/2026 (America/Sao_Paulo). Versão publicada de referência: **v0.3.0**, commit `9745c61`. Organização **v0.4.0 preparada localmente, sem push/publicação**; consultar HISTORICO.md para atualizações.

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

Ativos: Bandeja Cruz com Porta-Velas (duas imagens) e Pomba da Paz (cinco imagens), em **Artigos Religiosos**. **Coleção Natalina** está preparada, sem produtos aprovados. Produtos citados em conversas antigas que não constam do cadastro não são produtos publicados.

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

As sete imagens aprovadas e seus metadados necessários estão versionados, permitindo reconstruir o catálogo sem histórico de chat. Os originais não selecionados em `internal/` permanecem locais; não foram apagados e não se deve anunciar backup deles no GitHub. Fazer backup privado autorizado se passarem a ser necessários.

## Fluxo de manutenção

1. Ler AGENTS.md, INSTRUCOES_CODEX.md, este arquivo, PRODUTOS.md e HISTORICO.md, além do estado do Git e dos arquivos existentes.
2. Usar o checkout existente. Confirmar a `main` remota; preservar alterações locais e commits ainda não enviados.
3. Editar o cadastro e, quando necessário, adicionar apenas imagens conferidas e aprovadas. Seguir PRODUTOS.md.
4. Executar build, testes e conferir o site em celular/computador; preservar imagens existentes.
5. Atualizar os documentos e HISTORICO.md. Fazer commits pequenos e identificáveis, com lista explícita de arquivos; não usar `git add .` sem revisar.
6. Informar as alterações e obter autorização antes de push que publique ou deploy. Aprovações passadas não são autorização permanente para mudanças futuras.
7. Após autorização, enviar ao repositório existente, acompanhar a Vercel e validar a URL pública. Registrar o resultado, sem confundir testes locais com implantação concluída.

Publicação atual deve continuar intacta enquanto esta organização aguarda revisão. Não aplicar reset, force push, exclusões ou reconstrução do projeto para “limpar” histórico.

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

As regras desta etapa e a organização v0.4.0 continuam preparadas localmente enquanto o envio à main aguarda autorização; não confundir commits locais com persistência remota.

## Padrão fotográfico vigente — duas fotografias do produto completo

Decisão de 26/10/2026, posterior à proposta de fotos separadas. **Esta regra substitui qualquer orientação anterior de usar uma foto de cada componente.** A proposta de bandeja sozinha + porta-velas sozinho não atende ao padrão e está suspensa. O histórico das propostas anteriores permanece em HISTORICO.md.

**Padrão inicial: duas fotografias por produto.**

1. **Foto principal:** produto inteiro, com todos os componentes incluídos na venda.
2. **Foto secundária:** o mesmo produto inteiro, com os mesmos componentes, em outro ângulo real.

### Bandejas com porta-velas

Mostrar bandeja e porta-velas **juntos em ambas as fotos**. Priorizar uma vista frontal/em perspectiva e outra superior. Não substituir por uma fotografia somente da bandeja e outra somente do porta-velas. Para a Bandeja Alongada, a composição individual é somente bandeja e porta-velas: sem imagens religiosas, terços, vela LED ou outros acessórios não incluídos na oferta.

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
| Pomba da Paz | Cinco fotos aprovadas da mesma peça inteira, em ângulos reais disponíveis. As fotos 1 e 2 são candidatas para uma futura seleção de duas. | Preservar as cinco atuais. Redução para duas depende de autorização específica; não apagar arquivos. |
| Bandeja Alongada com Porta-Velas | As fotos isoladas 3 e 6 não atendem ao padrão. Os originais recuperados com os dois componentes juntos mostram vela LED e/ou outras peças, sem duas vistas adequadas confirmadas da oferta individual. | Suspender a seleção e o cadastro definitivo. Obter duas imagens do conjunto completo, ou verificar uma separação fiel e apresentar novo resultado antes de aprovação. Não editar por geração/reconstrução de áreas ocultas. |

A auditoria é visual, não comprova que a fonte seja fotografia física em vez de renderização, nem licença comercial. Não houve edição das imagens, alteração do cadastro definitivo ou publicação nesta revisão.
