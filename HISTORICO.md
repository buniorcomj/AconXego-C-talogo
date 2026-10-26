# Histórico AconXego

Datas em America/Sao_Paulo. As versões abaixo são marcos documentais; não existem tags Git de versão criadas até esta organização. Os hashes são a referência dos commits efetivos. Não reescrever este histórico para apagar decisões ou falhas; acrescentar correções.

| Data | Versão / estado | Commit | Mudança e verificação |
| --- | --- | --- | --- |
| 26/10/2026 | v0.0.0 — inicial | `4469d0a` | Repositório com apenas README. Sem aplicação ou dependências. |
| 26/10/2026 | v0.1.0 — primeira entrega | `f8619ce` | Catálogo estático com Bandeja Cruz com Porta-Velas, duas imagens locais aprovadas, Artigos Religiosos e galeria. Build com saída isolada em dist; implantação falhou por configuração não aceita pela Vercel. |
| 26/10/2026 | v0.2.0 — publicação corrigida | `262cef9` | Removida exclusivamente a propriedade inválida `directoryListing` de vercel.json. JSON e build válidos; implantação Vercel concluída; site público HTTP 200, imagens e galeria conferidas. |
| 26/10/2026 | v0.3.0 — publicada | `9745c61` | Adicionada Pomba da Paz em Artigos Religiosos após aprovação, com cinco imagens locais WebP sem perdas e galeria. Bandeja preservada. Push para main; Vercel concluída; sete imagens públicas comparadas byte a byte aos arquivos aprovados; galerias verificadas em 390px e 1440px. |
| 26/10/2026 | v0.4.0 — preparada, não enviada | commits locais desta organização (consultar `git log`) | Documentos de continuidade, cadastro versionado com origens e hashes, renderização por estado e testes de ocultação/reativação. Sem alterações nas sete imagens, nomes, descrições ou situações dos produtos publicados. Não houve push/deploy desta organização; publicação de referência continua v0.3.0 até autorização e confirmação. |

## Decisões preservadas

- Um único repositório e um único projeto Vercel existentes; URL https://aconxegocatalogo.vercel.app.
- Stack atual: HTML/CSS/JavaScript estáticos + build Node.js; sem migração para React/Vite ou backend nesta etapa.
- Fontes usadas somente para recuperação/conferência das imagens; não devem aparecer no catálogo público. Aprovação visual não comprova licença comercial.
- Imagens WebP locais sem perdas. Nada gerado por IA para representar produtos. Bandeja sem composição com pomba; Pomba da Paz é outro produto.
- WhatsApp ainda sem número; sem preços, pagamentos, administração autenticada ou área de lojistas implementados.
- Situações `ativo`, `oculto` e `descontinuado`; conservar cadastro e fotografias. Exclusão definitiva exige autorização.
- GitHub público: documentos e origens versionados não são confidenciais; não registrar dados sensíveis.
- Main está integrada à Vercel: push pode publicar; pedir autorização para cada mudança de escopo conforme as instruções do usuário. Nesta organização, o usuário exige revisar antes do push.

## Como registrar próximas mudanças

Acrescentar data, versão/marco, problema, produtos/campos afetados, resultado das verificações, commit quando disponível e situação de publicação (local, enviado, implantação pendente, concluída ou falha). Para uma autorização de publicação, registrar o escopo concreto; não presumir autorização permanente. Não anunciar “publicado” com base somente em um build local ou push.

Se precisar corrigir uma versão anterior, preservar a linha original e acrescentar uma nova. Usar `git log --date=iso-strict --oneline`, `git show <hash>` e `git diff` para recuperar detalhes; não depender de transcrições de conversas.

## Validação da organização v0.4.0 (local, antes do push)

- Seis testes automatizados de cadastro/estados, isolamento e validação passaram.
- Vitrine comparada com o snapshot v0.3.0 em 390px e 1440px: capturas idênticas pixel a pixel; estilos, nomes, descrições e ordem preservados.
- Galerias de duas e cinco imagens, botões, setas e Escape verificados em ambas as larguras.
- Sete imagens conferidas byte a byte com o commit publicado e com os SHA-256 do cadastro; nenhuma alterada.
- A verificação de persistência remota dos novos documentos só pode ser concluída após push autorizado. Até lá, os novos commits são apenas locais.

## 26/10/2026 — v0.5.0 preparada, não publicada

- Regras permanentes: finalizar Religiosos antes dos Natalinos; categorias principais RELIGIOSOS/NATALINOS e quatro grupos religiosos ordenados pelo cadastro.
- Cadastro migrado do formato 1 ao 2, mantendo IDs, nomes, descrições, situações, sete imagens e metadados existentes. Acrescentadas subcategorias, ordens hierárquicas, tipo individual, participação potencial em kits e componentes vazios.
- Bandeja Cruz organizada como base em porta-terços/bandejas/porta-velas; Pomba da Paz como imagem pequena. Nenhum kit ou preço criado. Fluxo futuro de composição explícita por IDs validado apenas em testes temporários.
- Recuperadas dez imagens do produto exato Bandeja Alongada com Porta-Velas; propostas duas candidatas (principal com porta-vela e vista superior). Composição com outras peças, variantes lisas e imagens técnicas não incluídas na proposta. WebP sem perdas preparado localmente; aprovação visual e licença comercial continuam pendentes. Cadastro definitivo e saída pública mantêm somente os dois produtos aprovados.
- Não houve push desta etapa. Commits locais de v0.4.0 também continuam pendentes; verificar o escopo completo antes de qualquer envio à main.

Validação local desta etapa: dez testes passaram; o HTML gerado é idêntico ao da organização anterior; campos preexistentes do cadastro e sete imagens preservados byte a byte. A Bandeja Alongada não aparece em `dist`. O commit de regras/estrutura é local; as duas imagens candidatas do novo produto ainda não foram commitadas nem enviadas.

## 26/10/2026 — conferência final da Bandeja Alongada (sem publicação)

Usuário aprovou a continuidade, mas exigiu nova aprovação das fotografias finais antes da publicação. Composição individual definida: somente bandeja e porta-velas. A principal anterior mostrava vela LED; substituída na proposta por original 3 (bandeja sozinha), acompanhado de original 6 (porta-velas vazio). Ambas são imagens da galeria exata, convertidas para WebP sem perdas e verificadas pixel a pixel. Nenhuma montagem, geração, remoção de objeto ou reconstrução da peça. Fotos anteriores preservadas localmente; nada apagado. Regra permanente registrada nos documentos e instruções. Dois produtos publicados e sete imagens existentes continuam intactos. Não houve push nem deploy; seleção final aguarda conferência do usuário.

## 26/10/2026 — padrão inicial de duas fotografias completas (não publicado)

Regra vigente substitui a proposta anterior de separar bandeja e porta-velas em duas fotos: todo produto novo precisa de duas vistas reais do produto completo. Bandejas mostram ambos juntos; estátuas mostram a peça inteira; kits futuros mostram todos os componentes juntos em ambas. Separar extras só com fidelidade, sem inventar ângulos ou áreas ocultas. Faltando duas imagens adequadas, informar e bloquear cadastro em vez de preencher com fotos inadequadas. Apresentação e aprovação final obrigatórias antes de publicação. Produtos e imagens já aprovados não serão alterados sem autorização específica.

Auditoria: Bandeja Cruz tem secundária sem porta-velas e principal com vela LED (inclusão comercial não confirmada); seleção aprovada preservada. Pomba da Paz tem cinco imagens aprovadas; possível seleção futura das fotos 1 e 2, mas nenhuma redução autorizada. Bandeja Alongada: fotos isoladas não atendem; não foram identificadas duas fotos adequadas do conjunto completo sem extras entre os originais recuperados. Rascunho bloqueado; todas as propostas/arquivos mantidos. Atualizados PROJETO.md, INSTRUCOES_CODEX.md, PRODUTOS.md e AGENTS.md para evitar instruções conflitantes. Sem edição de fotografias, alteração do cadastro definitivo, push ou deploy.

## 26/10/2026 — organização enviada e implantação verificada

Autorização expressa do usuário para enviar apenas documentação e organização à main. Enviados os commits `dd463ef`, `79c75d6`, `584fd44`, `b3804c0` e `82978c3`; nenhuma nova foto foi commitada/enviada. GitHub confirmou documentos, cadastro, templates, build e testes pelos hashes dos arquivos. Vercel do commit `82978c3` concluída: https://vercel.com/acon-xego/aconxegocatalogo/7FcRPw655cnNBPTEbyFnLJuCmK7x.

Site https://aconxegocatalogo.vercel.app retornou o HTML esperado; sete imagens comparadas byte a byte; dois produtos e galerias 2+5 testados em 390px e 1440px, sem erros JS ou overflow. Documentos e cadastro verificaram HTTP 404 no site. Dez testes locais passaram. Registros anteriores de “preparado/não enviado” descrevem a situação naquelas etapas, agora sucedida por este envio confirmado.

Nova revisão das fontes públicas: Cruz com nove imagens e Alongada com dez, sem imagens novas; miniaturas oficiais sem ângulo adicional adequado. Fotos superiores/com ambos componentes incluem peças que encobrem a bandeja; recorte fiel não remove extras mantendo o produto completo. Não foi feita edição ou proposta inadequada para aprovação. Pomba da Paz manterá as cinco fotografias, por determinação expressa. Cruz sem substituição e Alongada sem publicação. Este registro de resultado atualiza somente documentação.

## 26/10/2026 — reforço do critério estrito, sem mudança de vitrine

Usuário esclareceu: cada fotografia deve mostrar somente bandeja e porta-velas juntos; primeira em perspectiva, segunda preferencialmente superior, sem imagens religiosas, estátuas, terços ou extras. Atualizada a formulação vigente nos documentos e AGENTS.md. Originais com acessórios são apenas evidência de avaliação e não uma seleção final; não reapresentá-los como fotos prontas para aprovação. Recorte/edição só quando fiel e sem inventar características ocultas. Nos originais já avaliados, a sobreposição impede eliminar extras por recorte mantendo o conjunto inteiro. Nenhuma dupla adequada confirmada; Alongada pendente, Cruz sem substituição e cinco fotos da Pomba da Paz preservadas. Atualização exclusivamente documental, dentro do envio de documentação autorizado; nenhuma fotografia ou cadastro de produto foi alterado.

## 26/10/2026 — novo procedimento: galeria original completa antes da seleção

Por instrução do usuário, não filtrar nem descartar antecipadamente fotos por acessórios. Apresentar todas as imagens públicas originais do produto exato, numeradas e com links acessíveis; aguardar escolha antes de recortes, edições ou tratamento. Depois avaliar juntos o tratamento e obter aprovação final antes de publicar/substituir. Essa regra substitui o veto anterior a apresentar candidatos com extras; não autoriza publicar fotos sem aprovação. Começar pela Alongada: dez imagens da galeria, incluindo técnicas/variantes/composição, mais capa oficial como item 11. Nenhuma edição ou mudança no catálogo. Em seguida, apresentar os originais da Cruz; manter as cinco fotos da Pomba da Paz.

## 26/10/2026 — primeira exclusão na seleção da Bandeja Alongada

Usuário retirou as imagens 2, 3 e 7 da seleção. Restam 1, 4, 5, 6, 8, 9, 10 e 11, mantendo a numeração original. Exclusão apenas da seleção, sem apagar arquivos, alterar fotos, cadastrar definitivamente ou publicar o produto. Escolha final e tratamentos seguem pendentes.

## 26/10/2026 — segunda exclusão na seleção da Bandeja Alongada

Usuário retirou também 8, 9, 10 e 11; restam 1, 4, 5 e 6. Mantidos originais e numeração. Nenhuma edição, exclusão física, mudança na vitrine ou publicação.

## 26/10/2026 — v0.6.0, publicação da Bandeja Alongada autorizada

Após exclusões explícitas, o usuário autorizou publicar a seleção restante 1, 4, 5 e 6, sem editar fotos. Cadastro individual Bandeja Alongada com Porta-Velas em Religiosos → Porta-terços, bandejas e porta-velas; ordem 2, depois da Bandeja Cruz e antes das imagens pequenas. Principal 1, quatro imagens na galeria. Essa autorização específica supera as seleções pendentes e conserva os quatro originais, sem impor duas imagens por automatismo. Apenas bandeja e porta-velas vendidos; descrição explicita vela LED não incluída. Não foram criados kits, preços, carrinho ou pagamentos. Bandeja Cruz e cinco fotos da Pomba da Paz preservadas. Dez testes passaram; build gera três produtos e onze WebP, sem origens ou documentos públicos. Commit/push e resultado Vercel serão verificados a seguir.

### v0.6.0 — implantação confirmada

Commit `d6ac145` enviado e confirmado na main do GitHub. Vercel concluída: https://vercel.com/acon-xego/aconxegocatalogo/2kcqHioBNJMjUre5bKMcQEBdoJGy. Site https://aconxegocatalogo.vercel.app verificado: HTML igual ao build, onze WebP públicos idênticos aos arquivos locais aprovados, três produtos, principal da Alongada original 1 e galeria em ordem 1/4/5/6. Galerias completas de 2/4/5 fotos, abertura/fechamento e layout testados em 390px e 1440px, sem erros JavaScript nem overflow. Produtos anteriores intactos; nenhuma foto excluída ou editada. Registro posterior apenas documental.
