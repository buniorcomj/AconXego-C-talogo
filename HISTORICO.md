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
