# Lume — projeto restaurado para prévia no AI Studio

O visual original está em `dist`. Essa pasta é o código-fonte do site, não uma saída descartável.

## Google AI Studio

Importe o projeto e execute `npm run dev`. O servidor usa Node.js sem dependências, escuta em 0.0.0.0 e usa PORT ou 3000. Não é necessário recriar o site ou converter para React/Tailwind.

Instrução sugerida ao importar:
“Execute o site existente com npm run dev. Preserve integralmente HTML, CSS, JavaScript e as imagens em dist. Não recrie o layout e não substitua conteúdo. Se houver erro na prévia, corrija apenas a execução ou os caminhos dos arquivos.”

A execução HTTP foi conferida localmente. A importação dentro da sua conta do AI Studio ainda precisa ser conferida.

## Vercel

Root Directory: ./; Framework: Other; Output Directory: dist; comandos de instalação e build vazios. vercel.json já contém essas configurações.

## Conteúdo

Configure WHATSAPP_NUMBER em dist/script.js. Imagens, galerias, equipamentos e valores demonstrativos foram preservados e devem ser substituídos por informações reais antes da divulgação comercial.
