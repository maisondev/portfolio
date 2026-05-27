import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import { dirname } from 'path';

const projects = [
  {
    url: 'https://maisongalvao.dev',
    filename: 'public/projects/portfolio-preview.png',
    name: 'Portfolio'
  }
];

async function captureScreenshots() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    for (const project of projects) {
      console.log(`📸 Capturando screenshot de ${project.name}...`);

      const page = await browser.newPage();
      await page.setViewport({ width: 1200, height: 630 });

      try {
        await page.goto(project.url, {
          waitUntil: 'load',
          timeout: 45000
        });

        // Dar tempo para página carregar completamente
        await page.waitForTimeout(2000);

        // Criar diretório se não existir
        const dir = dirname(project.filename);
        await fs.mkdir(dir, { recursive: true });

        // Capturar screenshot
        await page.screenshot({ path: project.filename, type: 'png' });
        console.log(`✅ Screenshot salvo: ${project.filename}`);
      } catch (error) {
        console.error(`❌ Erro ao capturar ${project.name}:`, error.message);
        console.log(`   Tentando capturar de localhost em vez de ${project.url}`);
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
  }
}

captureScreenshots().then(() => {
  console.log('\n🎉 Captura de screenshots concluída!');
}).catch(error => {
  console.error('Erro fatal:', error);
  process.exit(1);
});
