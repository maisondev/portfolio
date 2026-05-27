import http from 'http';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { promises as fsPromises } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, '..', 'dist');

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.gif': 'image/gif'
};

const server = http.createServer((req, res) => {
  let filePath = path.join(distPath, req.url === '/' ? 'pt/index.html' : req.url);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not Found');
      return;
    }

    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
    res.end(data);
  });
});

async function captureScreenshot() {
  console.log('🚀 Iniciando servidor HTTP...');

  const serverHandle = server.listen(3000, async () => {
    console.log('✅ Servidor rodando em http://localhost:3000');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('🔨 Iniciando Puppeteer...');
      const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });

      const page = await browser.newPage();
      await page.setViewport({ width: 1200, height: 630 });

      console.log('📸 Capturando screenshot...');
      await page.goto('http://localhost:3000/', {
        waitUntil: 'networkidle2',
        timeout: 30000
      });

      await new Promise(resolve => setTimeout(resolve, 1000));

      const dir = path.join(__dirname, '..', 'public', 'projects');
      await fsPromises.mkdir(dir, { recursive: true });

      await page.screenshot({
        path: path.join(dir, 'portfolio-preview.png'),
        type: 'png'
      });

      console.log('✅ Screenshot salvo!');

      await page.close();
      await browser.close();

      serverHandle.close();
      console.log('\n🎉 Concluído!');
      process.exit(0);
    } catch (error) {
      console.error('❌ Erro:', error.message);
      serverHandle.close();
      process.exit(1);
    }
  });
}

captureScreenshot();
