import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import { dirname } from 'path';
import { execSync } from 'child_process';

async function waitForServer(url, maxAttempts = 60) {
  console.log(`⏳ Aguardando servidor em ${url}...`);
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        console.log('✅ Servidor pronto!');
        return true;
      }
    } catch (e) {
      // Server not ready yet
    }
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  return false;
}

async function captureWithServer() {
  console.log('🚀 Iniciando Astro preview server...');

  // Executar astro preview em background
  const serverProcess = execSync('npm run preview', {
    cwd: process.cwd(),
    detached: true,
    stdio: 'ignore',
    shell: true
  });

  const localUrl = 'http://localhost:3000/pt/';

  try {
    const serverReady = await waitForServer(localUrl);

    if (!serverReady) {
      console.log('⚠️ Servidor não respondeu a tempo, continuando mesmo assim...');
    }

    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 1200, height: 630 });

      console.log('📸 Capturando screenshot da home...');

      try {
        await page.goto(localUrl, {
          waitUntil: 'networkidle2',
          timeout: 30000
        });

        // Aguardar fonts e outros recursos
        await new Promise(resolve => setTimeout(resolve, 2000));

        const dir = dirname('public/projects/portfolio-preview.png');
        await fs.mkdir(dir, { recursive: true });

        await page.screenshot({
          path: 'public/projects/portfolio-preview.png',
          type: 'png'
        });

        console.log('✅ Screenshot salvo!');
      } catch (error) {
        console.error('❌ Erro ao capturar:', error.message);
      }

      await page.close();
    } finally {
      await browser.close();
    }
  } finally {
    console.log('🛑 Encerrando servidor...');
    // Kill do servidor
    try {
      execSync('taskkill /F /FI "WINDOWTITLE eq Astro*" 2>nul', { shell: true });
    } catch (e) {
      // Ignore if kill fails
    }
  }
}

captureWithServer().then(() => {
  console.log('\n🎉 Concluído!');
  process.exit(0);
}).catch(error => {
  console.error('Erro fatal:', error);
  process.exit(1);
});
