import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('./dist/', import.meta.url));
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.jpg':'image/jpeg','.png':'image/png','.webp':'image/webp','.svg':'image/svg+xml','.ico':'image/x-icon'};
const port = Number(process.env.PORT || 3000);
createServer(async (req,res) => {
 try {
  const url = new URL(req.url, 'http://localhost');
  let pathname = decodeURIComponent(url.pathname);
  const file = resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
  if (!file.startsWith(resolve(root) + sep)) {res.writeHead(403).end(); return;}
  if (!['GET','HEAD'].includes(req.method)) {res.writeHead(405).end(); return;}
  const info = await stat(file);
  if (!info.isFile()) {res.writeHead(404).end();return;}
  const bytes = await readFile(file);
  res.writeHead(200, {'Content-Type':types[extname(file)] || 'application/octet-stream','Cache-Control':'no-cache'});
  res.end(req.method === 'HEAD' ? undefined : bytes);
 } catch {res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'}).end('Arquivo não encontrado');}
}).listen(port,'0.0.0.0',()=>console.log(`Lume disponível na porta ${port}`));
