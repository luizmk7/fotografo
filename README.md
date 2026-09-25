# Lume Fotografia

Site estático responsivo, preparado para a Vercel. HTML, CSS e JavaScript, sem dependências e sem build.

## Publicar na Vercel

1. Importe o repositório `luizmk7/fotografo`.
2. Mantenha Root Directory na raiz do repositório (`./`).
3. Framework Preset: **Other**.
4. Output Directory: **dist**.
5. Build Command e Install Command: vazios.
6. Clique em Deploy.

O arquivo `vercel.json` já define as opções de framework, saída e comandos. Não selecione Express.

## Arquivos

- `dist/index.html`: página e conteúdo.
- `dist/assets/`: todas as imagens locais.
- `dist/styles.css` e `dist/refinements.css`: visual e responsividade.
- `dist/script.js` e `dist/refinements.js`: galerias, formulário e animações.

## Antes da divulgação

Configure `WHATSAPP_NUMBER` em `dist/script.js` com DDI e DDD, somente números. Enquanto vazio, o formulário abre uma mensagem compartilhável sem destinatário definido.

Imagens, galerias, equipamentos e preços demonstrativos foram preservados do projeto. Substitua-os por conteúdo real. As galerias usam fotos da mesma categoria, não álbuns reais individuais.

## Executar localmente

Na raiz do projeto, execute `python3 -m http.server 8000 --directory dist` e abra http://localhost:8000.
