import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import { dirname } from 'path';
import path from 'path';

async function captureStaticScreenshot() {
  console.log('🔨 Capturando screenshot da build estática...');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630 });

    // Usar arquivo local (assumindo que já foi buildado)
    const htmlPath = path.resolve('dist/pt/projects/index.html');
    const fileUrl = `file:///${htmlPath}`;

    console.log(`📄 Carregando: ${fileUrl}`);

    try {
      await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 30000 });
      await new Promise(resolve => setTimeout(resolve, 2000));

      const dir = dirname('public/projects/portfolio-preview.png');
      await fs.mkdir(dir, { recursive: true });

      await page.screenshot({ path: 'public/projects/portfolio-preview.png', type: 'png' });
      console.log('✅ Screenshot do portfolio salvo!');
    } catch (error) {
      console.error('❌ Erro ao capturar:', error.message);
    }

    await page.close();
  } finally {
    await browser.close();
  }
}

captureStaticScreenshot().then(() => {
  console.log('\n🎉 Concluído!');
  process.exit(0);
}).catch(error => {
  console.error('Erro fatal:', error);
  process.exit(1);
});
