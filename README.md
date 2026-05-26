# 🚀 Portfolio - maisongalvao.dev

Um portfolio minimalista moderno construído com **Astro 5**, **TypeScript** e **Tailwind CSS**.

## 📋 Stack

- **Framework:** Astro 5.x (Zero-JS por padrão)
- **Estilização:** Tailwind CSS v3.4
- **Linguagem:** TypeScript strict mode
- **Deploy:** Vercel (automático com GitHub)
- **Fonts:** Geist (Google Fonts)

## 📁 Estrutura do Projeto

```
portfolio/
├── src/
│   ├── components/
│   │   ├── layout/          # Componentes estruturais (Header, Footer)
│   │   ├── sections/        # Seções principais (Hero, About, Projects)
│   │   └── ui/              # Componentes reutilizáveis (Button, Badge, Card)
│   ├── layouts/
│   │   └── BaseLayout.astro # Layout padrão com SEO
│   ├── pages/
│   │   └── index.astro      # Página principal
│   └── styles/
│       └── global.css       # Estilos globais
├── public/
│   └── favicon.svg          # Favicon
├── astro.config.mjs         # Configuração do Astro
├── tailwind.config.mjs      # Configuração do Tailwind
└── tsconfig.json            # Configuração do TypeScript
```

## 🎨 Design System

### Cores
- **Fundo:** `#0a0a0a` (preto profundo)
- **Texto:** `#fafafa` (branco suave)
- **Accent:** `#3b82f6` (azul elétrico)
- **Secundário:** `#d4d4d8` (cinza claro)

### Componentes

#### Button (`src/components/ui/Button.astro`)
```astro
<Button href="/projects" variant="primary">
  Projetos
</Button>
```

**Variantes:** `primary` | `secondary`

#### Badge (`src/components/ui/Badge.astro`)
```astro
<Badge text="TypeScript" variant="primary" />
```

**Variantes:** `primary` | `secondary`

#### ProjectCard (`src/components/ui/ProjectCard.astro`)
```astro
<ProjectCard
  title="Projeto X"
  description="Descrição do projeto"
  tags={['TypeScript', 'React']}
  github="https://github.com/..."
  demo="https://projeto.com"
/>
```

## 🚀 Comandos

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Visualizar build de produção
npm run preview
```

## 📝 Adicionando Novos Projetos

Edite `src/components/sections/Projects.astro`:

```astro
const projects = [
  {
    title: 'Novo Projeto',
    description: 'Descrição aqui',
    tags: ['Tech1', 'Tech2'],
    github: 'https://github.com/...',
    demo: 'https://...',
  },
  // Adicione aqui
];
```

## 🌐 Deploy (Vercel)

1. **Crie um repositório no GitHub:** `maisongalvao/portfolio`
2. **Push do código:**
   ```bash
   git remote add origin https://github.com/maisongalvao/portfolio.git
   git push -u origin main
   ```
3. **No Vercel:**
   - Conecte seu repositório GitHub
   - Deploy é automático a cada push
   - Configure o domínio `maisongalvao.dev`

## 🧠 Por que Astro?

- ✅ **Zero JavaScript por padrão** — muito rápido
- ✅ **SEO excelente** — meta tags automáticas
- ✅ **Componentes `.astro`** — HTML puro com lógica TypeScript
- ✅ **TypeScript nativo** — type-safe desde o início
- ✅ **Tailwind integrado** — sem setup manual
- ✅ **Deploy trivial** — conteúdo estático em um click

## 📚 Aprendendo Astro

### Anatomia de um componente `.astro`

```astro
---
// 1️⃣ Script TypeScript (roda no servidor)
interface Props {
  title: string;
}
const { title } = Astro.props;
---

<!-- 2️⃣ Template HTML (com reatividade) -->
<h1>{title}</h1>

<style>
  /* 3️⃣ CSS escopado (opcional com Tailwind) */
  h1 { /* ... */ }
</style>
```

### Passando props entre componentes

```astro
---
// Parent.astro
import Child from './Child.astro';
---

<Child title="Olá" count={5} />
```

```astro
---
// Child.astro
interface Props {
  title: string;
  count: number;
}
const { title, count } = Astro.props;
---

<p>{title} - {count}</p>
```

### Usando Tailwind (não precisa de CSS)

```astro
<button class="bg-accent-500 text-white px-4 py-2 rounded-lg hover:bg-accent-600">
  Clique aqui
</button>
```

## 🔗 Links Úteis

- [Documentação Astro](https://docs.astro.build)
- [Documentação Tailwind](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vercel Docs](https://vercel.com/docs)

## 📄 Licença

MIT - Fique livre para usar como quiser!
