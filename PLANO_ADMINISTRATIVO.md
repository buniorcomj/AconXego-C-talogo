# Plano administrativo AconXego — ADIADO

Decisão mais recente: **26/10/2026**. O usuário adiou Supabase, banco, login e painel antes do início da implementação. Este documento preserva o planejamento, não autoriza executá-lo. Não criar infraestrutura, instalar backend, contratar serviço ou publicar implementação até nova autorização.

## Trabalho atual

Continuar no mesmo repositório e projeto Vercel, pelo Codex. Links de STLflix, MakerWorld, PinkyWings e outras plataformas e uploads manuais (inclusive fotos produzidas para Shopee) têm igual valor. Apresentar todos os originais, numerados e sem edição; aguardar escolha, ordem e autorização de publicação. Fotos com fundo branco e ambientadas são aceitas. Não impor número fixo. Não confundir acessórios decorativos com componentes da venda. Preservar originais e produtos já aprovados. Concluir Religiosos antes de Natalinos; manter categorias/subcategorias e preparação para kits, sem criar kits/preços automaticamente.

## Objetivo futuro

Painel visual /admin para celular/computador, independente de edição de JSON ou acesso manual ao GitHub. Reutilizar aplicação, repositório e projeto Vercel existentes, sem recriação. GitHub guarda código/documentação/migrações; banco persistente será fonte de produtos somente após migração autorizada e validada, evitando duas fontes editáveis divergentes.

## Arquitetura proposta, ainda não implementada

- Supabase Auth para contas administrativas autorizadas, sem cadastro público. Permissões no banco/servidor, nunca senha simulada no navegador.
- PostgreSQL para produtos com IDs estáveis, categorias/subcategorias, ordenação, estados, referências de componentes de kits e histórico recuperável.
- Supabase Storage com originais preservados em área privada e versões de fotografias aprovadas em armazenamento próprio para o catálogo. Remover da vitrine não apaga originais. Segredos não vão para o código público ou GitHub.
- Interface administrativa responsiva: criar/editar/ocultar/reativar/descontinuar produtos, selecionar/remover da vitrine/reordenar/substituir/adicionar fotos, escolher capa, pré-visualizar e publicar quantidade livre de fotos aprovadas.
- Importação no servidor por meios públicos permitidos, apresentando todos os candidatos sem descarte prévio; quando bloqueada, oferecer upload manual sem impedir rascunho. Não derrotar bloqueios/autenticação nem adivinhar arquivos. Recuperação por plataforma pode falhar, inclusive MakerWorld.
- Separar rascunhos da versão publicada; somente versão comercial aprovada chega ao público, sem fontes/URLs internas, documentos ou controles administrativos. Alterações de cadastro pelo painel não devem exigir edição de código/GitHub pelo lojista.
- Preservar visual e todo cadastro/fotografias durante migração. Não criar preços, estoque, carrinho, pedidos ou pagamentos nesta primeira implementação; IDs e referências permitem evolução futura.

## Backup e recuperação propostos

Histórico de versões e restauração no painel, exportação completa de cadastros/histórico/fotografias e cópia periódica fora do provedor. Backups do banco Supabase **não incluem os arquivos do Storage**; planejar backup das imagens separadamente. Fazer ensaio de restauração e migração antes de ativar a nova fonte dos dados. Não depender de localStorage nem do histórico de chat.

## Custos de referência consultados em 26/10/2026

Não há contratação autorizada ou feita. Confirmar condições vigentes antes da retomada.

| Serviço | Plano de teste | Produção proposta |
| --- | --- | --- |
| Supabase | Free: US$ 0, banco 500 MB, arquivos 1 GB; pausa após uma semana de inatividade; sem backup automático. | Pro a partir de US$ 25/mês, com 100 GB de arquivos e backups diários do banco. |
| Vercel | Hobby gratuito é pessoal/não comercial. | Pro a partir de US$ 20/mês e eventuais excedentes; verificar o plano já contratado. |

Referência base combinada: cerca de US$ 45/mês, antes de impostos/câmbio/excedentes, sem duplicar cobrança de Vercel Pro já existente. E-mail de recuperação de senha pode exigir provedor/SMTP/domínio; cotar na retomada. Nenhum gasto adicional foi autorizado.

Fontes oficiais: https://supabase.com/pricing ; https://vercel.com/pricing ; https://vercel.com/docs/plans/hobby ; https://supabase.com/docs/guides/platform/backups .

## Etapas futuras, somente após nova autorização

1. Confirmar arquitetura/custos e configurar contas com valores seguros fora do chat.
2. Backup do catálogo existente, esquema de dados, autenticação e permissões.
3. Armazenamento privado e interface funcional de produtos/categorias/fotografias.
4. Importação, upload, prévia e publicação controlada.
5. Migrar todos os produtos/fotos existentes; testar persistência, autorização, galerias, estados, recuperação e ausência de dados internos no público.
6. Apresentar resultado; obter autorização antes de push/implantação/migração pública. Verificar Vercel e URL depois de publicação autorizada.

Até lá, a publicação atual continua sendo gerada por `node scripts/build.mjs`, a partir do cadastro versionado e imagens locais aprovadas. Não alterar esse fluxo antecipadamente.
