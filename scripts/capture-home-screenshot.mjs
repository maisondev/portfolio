import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import { dirname } from 'path';

async function captureHomeScreenshot() {
  console.log('🔨 Capturando screenshot da home estática...');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630 });

    // Usar a página de home (que tem melhor design visual)
    const htmlPath = new URL('file:///C:/Users/maiso/WebstormProjects/portfolio/dist/pt/index.html').href;

    console.log(`📄 Carregando página home...`);

    try {
      // Esperar por resources importantes
      await page.goto(htmlPath, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });

      // Aguardar recursos renderizarem
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Scroll para uma área mais interessante (hero + tech stack)
      await page.evaluate(() => {
        window.scrollBy(0, 200);
      });

      const dir = dirname('public/projects/portfolio-preview.png');
      await fs.mkdir(dir, { recursive: true });

      await page.screenshot({
        path: 'public/projects/portfolio-preview.png',
        type: 'png',
        fullPage: false
      });
      console.log('✅ Screenshot da home salvo!');
    } catch (error) {
      console.error('❌ Erro ao capturar:', error.message);
    }

    await page.close();
  } finally {
    await browser.close();
  }
}

captureHomeScreenshot().then(() => {
  console.log('\n🎉 Concluído!');
  process.exit(0);
}).catch(error => {
  console.error('Erro fatal:', error);
  process.exit(1);
});
