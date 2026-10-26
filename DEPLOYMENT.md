# Implantação do catálogo

Projeto existente na Vercel: `acon-xego/aconxegocatalogo`.

O commit inicial continha apenas README.md. Os arquivos locais do catálogo precisam integrar a branch implantada; uma implantação Ready não garante que exista index.html na saída.

Configuração esperada na Vercel:

- Root Directory: raiz do repositório (campo vazio ou `.`), não `demo`.
- Framework Preset: Other.
- Build Command: `node scripts/build.mjs` (definido em vercel.json).
- Output Directory: `dist` (definido em vercel.json).
- Install Command: vazio; o catálogo não usa dependências.

Antes de atualizar a main, usar uma branch de revisão e a implantação Preview da integração para verificar `/`, a galeria e os dois WebP. Um push para main pode acionar uma implantação Production automaticamente e requer autorização do usuário. Não executar `vercel --prod` ou promover aliases nesta etapa.

Validação local:

```sh
node scripts/build.mjs
python3 -m http.server 4175 --bind 127.0.0.1 --directory dist
```

A saída contém exclusivamente index.html e as duas imagens aprovadas. Não publicar a raiz do repositório. As pastas internal/ e os originais não selecionados ficam fora do Git e da saída pública. O cabeçalho noindex é apropriado para a avaliação; não fornece controle de acesso.

WhatsApp continua sem número configurado. Não existe área administrativa nesta entrega.
