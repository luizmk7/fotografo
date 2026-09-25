import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
const html=readFileSync('dist/index.html','utf8');
const refs=[...html.matchAll(/(?:src|href)="([^"#]+)"/g)].map(m=>m[1]).filter(s=>!s.startsWith('http')&&!s.startsWith('data:'));
for(const file of refs) if(!existsSync(resolve('dist',file))) throw new Error(`Arquivo ausente: ${file}`);
console.log('Site estático validado: HTML, estilos, scripts e imagens locais presentes.');
