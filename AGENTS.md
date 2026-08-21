# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

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

## 🔗 Rotas & Responsabilidades

| Rota | Arquivo | Dados | Componentes-Chave | Quando Mexer |
|------|---------|-------|-------------------|--------------|
| `/pt/courses` | `src/pages/[lang]/courses.astro` | `config/courses.ts` | CoursesList, CourseCard, CourseFilters | Adicione item em `courses.ts` → tudo se atualiza |
| `/pt/projects` | `src/pages/[lang]/projects.astro` | `config/` ou hardcoded | ProjectCard, ProjectGrid | Edite seção Projects ou crie `config/projects.ts` |
| `/pt/experience` | `src/pages/[lang]/experience.astro` | Hardcoded na seção | Timeline, ExperienceCard | Edite array timeline[] na seção |
| `/pt/education` | `src/pages/[lang]/education.astro` | Hardcoded na seção | Timeline, EducationCard | Edite array educationLevels[] na seção |
| `/pt` (home) | `src/pages/[lang]/index.astro` | `BaseLayout` | Hero, SocialLinks, TechStack | Altere apenas se redesign |

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

### 🌓 Dark Mode & Light Mode (OBRIGATÓRIO)

**Sempre que adicionar novo CSS ou componente, implemente AMBOS os modos:**

**1. Use classes Tailwind com prefixo `dark:`**
```astro
<!-- BG: preto no dark, branco no light -->
<div class="bg-white dark:bg-[#0a0a0a]">
  <!-- Texto: preto no light, branco no dark -->
  <p class="text-black dark:text-white">Conteúdo</p>
</div>
```

**2. Cores predefinidas já têm suporte:**
```astro
<!-- Use a paleta do tailwind.config.mjs -->
<div class="bg-canvas"><!-- automático: #fafafa light, #0a0a0a dark --></div>
<span class="text-ink"><!-- automático: #0a0a0a light, #fafafa dark --></span>
<button class="bg-accent-500"><!-- #84cc16 em ambos --></button>
```

**3. CSS customizado? Adicione ambas as variantes:**
```css
/* ❌ ERRADO */
.my-component { background: #fafafa; }

/* ✅ CORRETO */
.my-component {
  @apply bg-white dark:bg-[#0a0a0a];
}

/* OU em CSS puro */
.my-component {
  background: #fafafa; /* light */
}
@media (prefers-color-scheme: dark) {
  .my-component {
    background: #0a0a0a; /* dark */
  }
}
```

**4. Teste AMBOS os modos:**
- Dev: abra DevTools → `Ctrl+Shift+P` → "dark" → selecione tema
- Ou clique no botão de tema no site se disponível

**5. ⚠️ IMPORTANTE: Estados Hover em Light/Dark Mode**

Sempre teste hovers em **AMBOS os modos** para garantir contraste adequado:

```astro
<!-- ❌ ERRADO: Ícone pode ficar invisível no hover -->
<svg class="w-5 h-5 text-white">...</svg>

<!-- ✅ CORRETO: Sempre especifique a cor explicitamente -->
<svg class="w-5 h-5 text-white dark:text-white">...</svg>

<!-- ✅ OU use classes de hover com ambas as variantes -->
<button class="text-ink hover:text-ink-muted dark:text-white dark:hover:text-ink-muted">
```

**Checklist de Hover:**
- [ ] Ícones/textos têm cor explícita (não confie em `currentColor` sozinho)
- [ ] Hover em light mode: contraste visível
- [ ] Hover em dark mode: contraste visível
- [ ] Links: sempre `hover:text-*` com cor diferente
- [ ] Botões: sempre testar primário, secundário, terciário em ambos modos

### 📱 Mobile-First Design (OBRIGATÓRIO)

**Sempre que adicionar novo componente ou CSS, comece pelo mobile e escale para cima:**

**1. Estrutura Tailwind: mobile → tablet → desktop**

```astro
<!-- ❌ ERRADO: Desktop-first -->
<div class="text-3xl md:text-xl p-8 md:p-4">

<!-- ✅ CORRETO: Mobile-first (classes base = mobile) -->
<div class="text-lg sm:text-xl md:text-2xl lg:text-3xl p-4 sm:p-6 md:p-8">
```

Ordem dos breakpoints Tailwind (mobile-first):
- Nenhum prefixo = mobile (< 640px)
- `sm:` = small (≥ 640px)
- `md:` = medium (≥ 768px)
- `lg:` = large (≥ 1024px)
- `xl:` = extra large (≥ 1280px)
- `2xl:` = 2x extra large (≥ 1536px)

**2. Tipografias & Tamanhos**

```astro
<!-- Títulos: começar pequeno, crescer em telas maiores -->
<h1 class="text-2xl sm:text-3xl md:text-4xl">
<h2 class="text-xl sm:text-2xl md:text-3xl">
<h3 class="text-lg sm:text-xl md:text-2xl">
<p class="text-sm sm:text-base md:text-lg">

<!-- Ícones: dimensionar com a tela -->
<svg class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
```

**3. Espaçamento (Padding & Margin)**

```astro
<!-- Começar apertado no mobile, afrouxar em desktop -->
<div class="p-4 sm:p-6 md:p-8">      <!-- padding -->
<div class="gap-2 sm:gap-3 md:gap-4">  <!-- gaps em grids -->
```

**4. Layout & Grid**

```astro
<!-- Grid: 1 coluna mobile → múltiplas em desktop -->
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

<!-- Flexbox: direção, altura, largura -->
<div class="flex flex-col sm:flex-row gap-2 sm:gap-4">
<button class="w-full sm:w-auto">  <!-- full-width mobile, auto em cima -->
```

**5. Teste de Responsividade**

Antes de commitar, teste estes breakpoints no navegador:
- [ ] Mobile: 375px (iPhone)
- [ ] Tablet: 640px - 768px (iPad)
- [ ] Desktop: 1024px+
- [ ] 4K: 2560px+

Dica: No DevTools, use `Ctrl+Shift+M` para toggle device emulation.

**6. Checklist Mobile-First**

- [ ] Nenhuma classe base usa prefixo (`md:`, `lg:`, etc.)
- [ ] Todas as dimensões começam pequenas e crescem
- [ ] Textos legíveis em 375px (não truncados, tamanho mínimo 16px)
- [ ] Botões clicáveis (min 48×48px) em mobile
- [ ] Gaps/padding não deixam elementos encostando em bordas
- [ ] Testou em landscape (750px width em iPhone)
- [ ] Dark + Light modes funcionam em TODOS breakpoints

## 📋 Adicionando Conteúdo

### ⚠️ NUNCA invente dados — SEMPRE pergunte

**Regra de ouro:** Se você não tem uma informação (salário, data, valor, descrição), **SEMPRE pergunte** ao usuário em vez de inventar ou adivinhar.

Exemplos:
- ❌ ERRADO: Colocar `salary: 'R$ 1.730,00'` sem ter sido informado
- ✅ CORRETO: Perguntar "Qual é o salário?" e aguardar resposta

**Por quê?** Dados incorretos são piores que dados faltando. Um campo vazio deixa claro que há informação pendente; um valor errado passa despercebido e está documentado permanentemente no site.

### Padrão de Dados (TypeScript)

Sempre mantenha tipos explícitos para evitar erros de compilação:

```typescript
// Cursos
interface Course {
  name: string;
  platform: 'Coursera' | 'DataCamp' | 'Anthropic' | 'Google' | string;
  technologies: string[];
  completedAt: string;        // ex: 'jan 2026'
  certificate?: {
    url?: string;             // Link verificável (Coursera: /verify/{ID})
    credentialCode?: string;  // ID interno (não publicado)
  };
  description?: string;
  difficulty?: 'Iniciante' | 'Intermediário' | 'Avançado';
}

// Projetos
interface Project {
  title: string;
  description: string;
  technologies: string[];
  links: {
    github?: string;
    demo?: string;
    figma?: string;
  };
  year?: string;
  featured?: boolean;
}

// Experiência & Educação
interface TimelineItem {
  year: string;           // ex: '2024-2025' ou '2024'
  title: string;
  organization: string;
  description?: string;
  technologies?: string[];
}
```

### Cursos

`src/config/courses.ts` — array de objetos Course:

```typescript
{
  name: 'Course Title',
  platform: 'Coursera',        // ou 'DataCamp', 'Anthropic', etc.
  technologies: ['HTML5', 'Web Development'],
  completedAt: 'jan 2026',     // mês ano (português)
  difficulty: 'Intermediário',  // opcional: para future filtering
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

**Sugestão futura**: Mover para `config/projects.ts` (como cursos) para facilitar manutenção.

### Experiência & Educação

`src/components/sections/Experience.astro` e `Education.astro` — arrays timeline[]. Estrutura:
```typescript
{ 
  year: '2024-2025',           // Ex: 'jan 2024-dez 2024' ou '2024'
  title: 'Cargo/Curso',
  organization: 'Empresa/Universidade',
  description?: 'O que você fez/aprendeu',
  technologies?: ['Tech1', 'Tech2']
}
```

## 🔄 Git Workflow & Commits

### Padrão de Commits

```bash
# Formato: <tipo>: <descrição em português>
# Tipos: Feat, Fix, Docs, Refactor, Style, Perf, Test

git commit -m "Feat: adicionar filtro por tecnologia nos cursos"
git commit -m "Fix: corrigir contraste em light mode nos botões"
git commit -m "Docs: melhorar AGENTS.md com guia de componentes"
```

⚠️ **IMPORTANTE**: NÃO adicionar `Co-Authored-By` nas mensagens. Codex gerencia isso automaticamente.

### Fluxo Padrão

1. Edite arquivos → salve
2. Teste localmente: `npm run dev` → abra no navegador
3. Se correto: Codex faz commit automático com mensagem descritiva
4. Codex faz push automático para `origin/main`
5. Vercel detecta → redeploy automático

---

## 🌐 Internacionalização (i18n)

**Rotas automáticas:** `/pt/courses`, `/en/courses` (sem `/pt` na rota é redirect para `/pt`)

**Tradução:** `src/i18n/{pt,en}.json` — chaves globais (menu, footer, etc.)
- Componentes seções têm strings hardcoded em português
- Para multi-idioma, extraia strings para i18n JSON e use `useTranslations()` do `i18n/utils.ts`

**Adicionar idioma novo:**
1. `astro.config.mjs` → adicione locale à lista `locales`
2. `src/i18n/{new-lang}.json` → cópia com traduções
3. `src/i18n/routes.ts` → mapeamento de rotas se diferentes

### ⚠️ IMPORTANTE: Novo Texto = Tradução Obrigatória

**Sempre que adicionar novo texto ao site:**
- ✅ Adicione versão em **português** primeiro
- ✅ **Imediatamente após**, adicione versão em **inglês**
- ✅ Se o texto é global (header, footer, menu) → `src/i18n/{pt,en}.json`
- ✅ Se o texto é dentro de componentes → use `{lang === 'pt' ? 'texto-pt' : 'texto-en'}`

**Exemplo em componente:**
```astro
<h3>{lang === 'pt' ? 'Meus Projetos' : 'My Projects'}</h3>
```

**Exemplo em JSON i18n:**
```json
// src/i18n/pt.json
{ "about_title": "Sobre Mim" }

// src/i18n/en.json
{ "about_title": "About Me" }
```

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

## 🧩 Componentes Críticos (Sistema Nervoso)

Se mexer nesses, avise! Eles afetam todo o site:

| Componente | Localização | Impacto | Quando Mexer |
|-----------|-------------|--------|------------|
| **BaseLayout** | `src/layouts/BaseLayout.astro` | Meta tags, SEO, `<head>` | Mudanças em título, og:image, favicon |
| **Header** | `src/components/layout/Header.astro` | Navegação global | Adicionar menu, links, idiomas |
| **Footer** | `src/components/layout/Footer.astro` | Links, redes sociais | Adicionar redes, contatos, copyright |
| **TechStack** | `src/components/sections/TechStack.astro` | Display de tecnologias | Categorizar ou adicionar novas techs |
| **CourseCard** | `src/components/ui/CourseCard.astro` | Renderização dos cursos | Novo layout, mudança em props |
| **SocialLinks** | `src/components/sections/SocialLinks.astro` | Contatos/redes | Trocar cores, adicionar rede, hover |

**Padrão ao mexer em componentes críticos:**
1. Teste em `npm run dev` (light + dark mode)
2. Teste em mobile (iPhone + Android widths)
3. Teste em telas 4K (se aplicável)
4. Abra no navegador ANTES de commitar

---

## 🔗 Úteis

- **Docs:** [astro.build](https://docs.astro.build) | [tailwindcss.com](https://tailwindcss.com/docs)
- **Deploy:** Vercel com GitHub integration — configura-se em vercel.com, depois git push = deploy automático
- **SEO:** `BaseLayout.astro` gerencia `<head>` (meta tags, title, og:image)

## 🔧 Troubleshooting Comum

### Build Falha / Build Lento

```bash
# Solução 1: Limpar cache do Astro
rm -r .astro dist node_modules
npm install
npm run build

# Solução 2: Verificar syntax TypeScript
# Abra DevTools no editor (WebStorm) → aba Problems/Errors
```

### Validar Mudanças Antes de Commitar

```
✅ PADRÃO: Lint + Build (não rodar servidor local)

1. Edite os arquivos
2. Rode: npm run build
3. Se passar → seguro para commit
4. Você testa no servidor que já está rodando
```

### TypeScript Strict Mode — Erros de Tipos

```typescript
// ❌ ERRADO
const items: any[] = [...];

// ✅ CORRETO
interface Course {
  name: string;
  platform: string;
}
const courses: Course[] = [...];
```

**Dica**: Não ignore erros com `// @ts-ignore` — tipifique corretamente. Strict mode evita bugs futuros.

### Componentes não Renderizam Esperado

1. Verifique se o componente foi importado
2. Verifique props obrigatórias (interface)
3. Abra DevTools → aba Network → veja se há erros 404
4. Verifique se classes Tailwind estão geradas (`class="...dark:..."`)

### Dark Mode não Funciona em Novo Componente

```astro
<!-- ❌ ERRADO -->
<div class="bg-white text-black">

<!-- ✅ CORRETO -->
<div class="bg-white dark:bg-[#0a0a0a] text-black dark:text-white">
```

Lembre: **SEMPRE** adicione `dark:` variant quando adicionar novo CSS.

### Imagens Não Aparecem

```astro
<!-- ❌ ERRADO (caminho relativo) -->
<img src="./image.png" alt="..." />

<!-- ✅ CORRETO (caminho absoluto ou import) -->
<img src="/images/image.png" alt="..." />

<!-- OU -->
---
import MyImage from '@/assets/image.png';
---
<img src={MyImage.src} alt="..." />
```

Astro serve assets de `public/` em `/` (raiz). Use imports para assets dinâmicos.

### Deploy em Vercel com 404

- Verifique se `npm run build` passa localmente
- Verifique se há erros TypeScript (`npm run build` mostra todos)
- Verifique se arquivos foram commitados (`git status`)
- Push para GitHub → Vercel redeploy automático

---

## ⚡ Dicas de Desenvolvimento

1. **Build antes de commit:** Rode `npm run build` — valida tudo (TypeScript, Tailwind, assets)
2. **Imports:** Use alias `@/` (configurado em `tsconfig.json`)
3. **Build lento?** Limpe `.astro/` e `dist/`, rode `npm install` novamente
4. **TypeScript strict:** Sempre tipifique props e variáveis — nenhum `any`
5. **Tailwind customizado:** Cores/fonts em `tailwind.config.mjs`, não em CSS
6. **Servidor de dev já rodando:** Você já tem servidor local ativo, salve arquivo → mudanças aparecem em tempo real
7. **Dark mode testing:** `Ctrl+Shift+P` → "dark" no DevTools para simular preferência
8. **Responsividade:** Teste em breakpoints: mobile (375px), tablet (768px), desktop (1024px), 4K (2560px)

---

## 📝 Checklist Antes de Commitar

- [ ] Rodou `npm run build` sem erros?
- [ ] Se novo texto: adicionou tradução em pt.json E en.json?
- [ ] Se novo componente: adicionou dark mode?
- [ ] Se mexeu em layout: testou em telas 4K (você vê no servidor)?
- [ ] TypeScript está tipado (sem `any`)?
- [ ] Pronto para você testar no navegador (servidor já está rodando)
