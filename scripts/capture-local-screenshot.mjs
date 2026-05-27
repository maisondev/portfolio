import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import { dirname } from 'path';
import { spawn } from 'child_process';

async function waitForServer(url, maxAttempts = 30) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const response = await fetch(url);
      if (response.ok) return true;
    } catch (e) {
      // Server not ready yet
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  return false;
}

async function capturePortfolioScreenshot() {
  console.log('🚀 Iniciando servidor de desenvolvimento...');

  const serverProcess = spawn('npm', ['run', 'dev'], {
    cwd: process.cwd(),
    stdio: 'ignore'
  });

  const localUrl = 'http://localhost:3000/pt/projects';

  try {
    console.log(`⏳ Aguardando servidor em ${localUrl}...`);
    const serverReady = await waitForServer(localUrl);

    if (!serverReady) {
      throw new Error('Servidor não respondeu após 30 segundos');
    }

    console.log('✅ Servidor pronto!');

    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 1200, height: 630 });

      console.log('📸 Capturando screenshot do portfolio...');
      await page.goto(localUrl, { waitUntil: 'networkidle2', timeout: 30000 });
      await page.waitForTimeout(1000);

      const dir = dirname('public/projects/portfolio-preview.png');
      await fs.mkdir(dir, { recursive: true });

      await page.screenshot({ path: 'public/projects/portfolio-preview.png', type: 'png' });
      console.log('✅ Screenshot do portfolio salvo!');

      await page.close();
    } finally {
      await browser.close();
    }
  } catch (error) {
    console.error('❌ Erro:', error.message);
  } finally {
    console.log('🛑 Parando servidor...');
    serverProcess.kill();
  }
}

capturePortfolioScreenshot().then(() => {
  console.log('\n🎉 Concluído!');
  process.exit(0);
}).catch(error => {
  console.error('Erro fatal:', error);
  process.exit(1);
});
