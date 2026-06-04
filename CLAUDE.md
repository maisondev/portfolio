# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🏗️ Stack e Tecnologias

**Astro 5** com **TypeScript** (strict mode) e **Tailwind CSS v3.4**

- Zero JavaScript por padrão — apenas HTML/CSS em produção
- Deploy estático em Vercel (automático com GitHub)
- Internacionalização nativa: português (padrão) e inglês
- Fonte customizada: Geist (Google Fonts)

## 📁 Arquitetura do Projeto

```
src/
├── components/
│   ├── layout/          # Header, Footer (estrutura global)
│   ├── sections/        # Seções temáticas: Hero, About, Projects, Experience, Education, Courses
│   └── ui/              # Componentes reutilizáveis: Button, Badge, Card, CourseCard, etc.
├── config/              # Dados estruturados: courses.ts, services.ts
├── pages/               # Rotas Astro (index.astro, projects.astro, etc.)
│   └── [lang]/          # Rotas localizadas (pt/ e en/ automáticos)
├── layouts/
│   └── BaseLayout.astro # Meta tags, SEO, estrutura HTML padrão
├── i18n/                # Tradução: pt.json, en.json, routes.ts, utils.ts
├── styles/              # CSS global (Geist import, estilos base)
└── utils/               # Utilitários: icons, helpers
```

## 🎨 Sistema de Design

### Paleta de Cores (Tailwind customizado)

- **Fundo:** `#0a0a0a` (preto profundo)
- **Texto primário:** `#fafafa` (branco suave)nas paginas 
- **Accent:** `accent-500` = `#84cc16` (verde elétrico) — mude em `tailwind.config.mjs`
- **Texto secundário:** `#d4d4d8` (cinza claro)
- **Bordas:** `#2a2a2a` (cinza escuro)

### Convenções de Componentes

Todos em `.astro`. Props via interface TypeScript:

```astro
---
interface Props {
  title: string;
  variant?: 'primary' | 'secondary';
}
const { title, variant = 'primary' } = Astro.props;
---
<button class="..."></button>
```

## 📋 Adicionando Conteúdo

### Cursos

`src/config/courses.ts` — array de objetos Course:

```typescript
{
  name: 'Course Title',
  platform: 'Coursera',        // ou 'DataCamp', 'Anthropic', etc.
  technologies: ['HTML5', 'Web Development'],
  completedAt: 'jan 2026',     // mês ano (português)
  certificate?: {
    url?: 'https://...',       // Link verificável (Coursera: /verify/{ID})
    credentialCode?: 'ABC123',  // ID interno da credencial
  },
  description?: 'Competências: ...',
}
```

Renderizado em: `CoursesList.astro` (com filtros por tech/platform) → `CourseCard.astro` (botão "Verificar" se houver URL).

### Projetos

`src/components/sections/Projects.astro` — array projects[]. Renderizado como grid de cards com ícones do GitHub/Demo.

### Experiência & Educação

`src/components/sections/Experience.astro` e `Education.astro` — arrays timeline[]. Estrutura:
```
{ year, title, organization, description? }
```

## 🌐 Internacionalização (i18n)

**Rotas automáticas:** `/pt/courses`, `/en/courses` (sem `/pt` na rota é redirect para `/pt`)

**Tradução:** `src/i18n/{pt,en}.json` — chaves globais (menu, footer, etc.)
- Componentes seções têm strings hardcoded em português
- Para multi-idioma, extraia strings para i18n JSON e use `useTranslations()` do `i18n/utils.ts`

**Adicionar idioma novo:**
1. `astro.config.mjs` → adicione locale à lista `locales`
2. `src/i18n/{new-lang}.json` → cópia com traduções
3. `src/i18n/routes.ts` → mapeamento de rotas se diferentes

## 🚀 Comandos Principais

```bash
# Desenvolvimento
npm run dev         # Servidor em http://localhost:4321 (ou próxima porta livre)

# Produção
npm run build       # Build estático em dist/
npm run preview     # Preview do build em http://localhost:3000

# Utilitários
npm run astro ...   # Acesso direto ao Astro CLI
```

## 🔑 Patterns Importantes

### Props e Reatividade

Astro roda **componentes no servidor** — props são estáticas. Não há `useState`. Lógica dinâmica via `<script>` inline ou atributos `data-*`:

```astro
---
const items = [...];
---
<div data-items={JSON.stringify(items)}>
  {items.map(item => <p>{item.name}</p>)}
</div>

<script define:vars={{ items }}>
  // Aqui é client-side JavaScript
  console.log(items); // Variáveis injetadas via define:vars
</script>
```

### Navegação Localizada

Importar `getLocalizedPath()` de `i18n/utils.ts`:

```astro
---
import { getLocalizedPath } from '@/i18n/utils';
const lang = 'pt'; // ou 'en'
const path = getLocalizedPath(lang, '/courses'); // → /pt/courses ou /en/courses
---
<a href={path}>Cursos</a>
```

### Estilos

Prefira **Tailwind direto no atributo `class`**. CSS escopado apenas se necessário (raro):

```astro
<style>
  :global(body) { /* Afeta globalmente */ }
  .local { /* Escopado a este componente */ }
</style>
```

## 🧪 Testes & Verificação

Não há test suite configurada. Validações manuais:
- Dev: `npm run dev` → abra `/courses`, `/projects`, `/[lang]/...` no navegador
- Build: `npm run build` → verifique `dist/` gerado
- TypeScript: Erros ao salvar (strict mode ativo em `tsconfig.json`)

## 🔗 Úteis

- **Docs:** [astro.build](https://docs.astro.build) | [tailwindcss.com](https://tailwindcss.com/docs)
- **Deploy:** Vercel com GitHub integration — configura-se em vercel.com, depois git push = deploy automático
- **SEO:** `BaseLayout.astro` gerencia `<head>` (meta tags, title, og:image)

## ⚡ Dicas de Desenvolvimento

1. **Hot reload:** Astro recompila ao salvar — sem reinício manual
2. **Imports:** Use alias `@/` (configurado em `tsconfig.json`)
3. **Build lento?** Limpe `.astro/` e `dist/`, rode `npm install` novamente
4. **TypeScript strict:** Sempre tipifique props e variáveis — nenhum `any`
5. **Tailwind customizado:** Cores/fonts em `tailwind.config.mjs`, não em CSS
6. **Servidor de dev:** Nunca iniciar novo servidor com `npm run dev` — sempre há um rodando para testes em tempo real. Verifique as mudanças no navegador do servidor existente.
