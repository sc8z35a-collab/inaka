import http from 'node:http';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

// Temporary test-only collector; never included in the production build.
// Accept image results only, with bounded bodies and strictly validated basenames.
const directory = path.resolve('.artifacts/visual');
await mkdir(directory, { recursive: true });
http.createServer(async (req,res) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers','Content-Type');
  res.setHeader('Access-Control-Allow-Methods','POST,OPTIONS');
  if(req.method==='OPTIONS'){res.writeHead(204);res.end();return;}
  if(req.method!=='POST'||req.url!=='/capture'){res.writeHead(404);res.end();return;}
  let body='',bytes=0;
  try{
    for await(const chunk of req){bytes+=chunk.length;if(bytes>12_000_000)throw new Error('Capture too large');body+=chunk;}
    const data=JSON.parse(body);
    if(!/^[a-z0-9-]{1,100}$/.test(data.name))throw new Error('Invalid capture name');
    if(data.png){
      if(!data.png.startsWith('data:image/png;base64,'))throw new Error('PNG required');
      await writeFile(path.join(directory,`${data.name}.png`),Buffer.from(data.png.split(',')[1],'base64'));
      delete data.png;
    }
    await writeFile(path.join(directory,`${data.name}.json`),JSON.stringify(data,null,2));
    console.log(data.name);res.writeHead(201);res.end('saved');
  }catch(error){res.writeHead(400);res.end(error.message);}
}).listen(3001,'0.0.0.0',()=>console.log('Visual capture collector listening on 3001'));
