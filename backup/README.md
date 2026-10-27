# Backup de pausa — 27/10/2026

Branch de preservação; NÃO mesclar na main nem publicar seus arquivos.
O repositório é público: apenas fotografias de revisão e metadados de origem, sem credenciais ou dados comerciais confidenciais.

O arquivo tar.gz preserva todos os 51 arquivos locais de internal/, cinco imagens de propostas/original fora do cadastro e o pedido de planejamento recebido como texto. Consulte manifesto.json para nomes, tamanhos e SHA-256. Os três originais do Papai Noel não estavam acessíveis e NÃO estão neste backup. Suas escolhas estão no rascunho JSON e nos documentos.

Para recuperar, buscar esta branch e copiar o tar.gz e manifesto com git show, sem trocar a main pela branch de backup. Conferir hashes e extrair na raiz do checkout preservando arquivos preexistentes. internal/ continua ignorado, fora de dist e da hospedagem.

vercel.json desta branch possui git.deploymentEnabled=false para impedir implantação automática do backup. A configuração da main permanece intacta.
