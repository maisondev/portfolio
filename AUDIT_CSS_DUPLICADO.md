# 🔍 Auditoria de CSS Duplicado — Portfolio

**Data:** 2026-06-05  
**Status:** ✅ Análise Completa

---

## 📊 Resumo Executivo

- **Total de componentes auditados:** 38
- **Componentes com CSS duplicado:** 8+ cards
- **Estilos compartilhados não-abstraídos:** 12+
- **Potencial de redução:** 15-25% do CSS duplicado

---

## 🎯 Duplicações Críticas Encontradas

### 1. **Base de Todos os Cards** (CRÍTICO)
Encontrado em: `CourseCard`, `ProjectCard`, `BlogCard`, `ContestCard`, `ExperienceCard`, `EducationCard`, `CaseStudyCard`, `ServiceCard`

```astro
<!-- ❌ DUPLICADO EM 8 COMPONENTES -->
class="bg-surface-1 border border-hairline rounded-lg p-6 hover:bg-surface-2 transition-all duration-300 flex flex-col"
```

**Solução:** Criar componente wrapper `Card.astro` base com slots.

---

### 2. **Sistema de Label/Value** (ALTO)
Encontrado em: `ContestCard` define inline, `ExperienceCard`, `BlogCard`, `EducationCard`

```typescript
// ❌ DUPLICADO
const labelField = 'text-xs font-semibold text-ink-muted uppercase tracking-widest';
const valueField = 'text-sm text-ink';
```

**Impacto:** +200 bytes CSS repetidos  
**Solução:** Classe base em `global.css` ou componente `FieldLabel.astro`

---

### 3. **Transições de Hover** (MÉDIO)
Encontrado em: Praticamente todos os cards

```astro
<!-- ❌ DIFERENTES IMPLEMENTAÇÕES DO MESMO EFEITO -->
transition-all duration-300          <!-- CourseCard, ProjectCard -->
transition-colors duration-300       <!-- ExperienceCard -->
transition-colors                    <!-- ServiceCard -->
group-hover:scale-105 transition-transform  <!-- ProjectCard image -->
```

**Problema:** CSS gera múltiplas regras para efeito idêntico  
**Solução:** Padronizar em `@layer components` com classe `.card-hover`

---

### 4. **Ícones SVG Duplicados** (MÉDIO)
Encontrado em: `ExperienceCard`, `EducationCard`, `ContestCard`, `BlogCard`

```astro
<!-- ❌ SVG CHECKMARK em 3 componentes diferentes -->
<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />

<!-- ❌ SVG EXTERNAL LINK em 2 componentes -->
<path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10..." />

<!-- ❌ SVG CALENDAR em ExperienceCard e ContestCard -->
<path d="M8 7V3m8 4V3..." />
```

**Solução:** Criar componente `Icon.astro` reutilizável com slot ou usar Lucide icons (já usado em ContestCard)

---

### 5. **Tags/Badges Sistema Inconsistente** (MÉDIO)
Encontrado em: `CourseCard`, `ExperienceCard`, `ProjectCard`, `CaseStudyCard`

```astro
<!-- ❌ IMPLEMENTAÇÃO 1: CourseCard -->
<a class="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-canvas text-ink-muted border border-hairline hover:border-primary/50">

<!-- ❌ IMPLEMENTAÇÃO 2: ExperienceCard (via Badge.astro) -->
<Badge text={tech} variant="primary" />

<!-- ❌ IMPLEMENTAÇÃO 3: CaseStudyCard -->
<span class="px-3 py-1 bg-hairline text-ink-muted rounded-full text-sm border border-hairline hover:border-accent-500/50">
```

**Problema:** 3 formas diferentes de renderizar a mesma coisa  
**Solução:** Padronizar em um único `Badge.astro` com variantes

---

### 6. **Bordas Horizontais** (BAIXO)
Encontrado em: 6+ componentes

```astro
<!-- ❌ DUPLICADO -->
<div class="border-t border-hairline">
<div class="pt-4">  <!-- ou pt-3, pt-2 -->
```

**Solução:** Classe utils `.border-section` no Tailwind

---

## 📈 Matriz de Impacto

| Duplicação | Severidade | Arquivos | Ganho Potencial | Esforço |
|-----------|-----------|----------|-----------------|---------|
| Base Card | 🔴 CRÍTICA | 8 | 8-12KB CSS | 2h |
| Label/Value | 🟠 ALTO | 4 | 2-3KB | 30m |
| Transições | 🟠 ALTO | 8+ | 1-2KB | 1h |
| SVG Icons | 🟡 MÉDIO | 6 | 500b (bytes) | 1h |
| Tags/Badges | 🟡 MÉDIO | 4 | 2-4KB | 1.5h |
| Bordas/Spacing | 🟢 BAIXO | 6+ | 500b-1KB | 30m |

---

## ✅ Recomendações de Refatoração

### **PRIORIDADE 1: Card Base (2h)**
```astro
<!-- Novo: src/components/ui/Card.astro -->
interface Props {
  variant?: 'primary' | 'secondary';
  hoverable?: boolean;
  class?: string;
}

<div class="card-base {variant}" ...>
  <slot />
</div>
```

**Afeta:** CourseCard, ProjectCard, BlogCard, ExperienceCard, EducationCard, CaseStudyCard

---

### **PRIORIDADE 2: Badge Sistema Unificado (1.5h)**
```astro
<!-- Melhorar: src/components/ui/Badge.astro -->
interface Props {
  text: string;
  variant: 'primary' | 'secondary' | 'accent';
  clickable?: boolean;
}
```

**Afeta:** CourseCard, ExperienceCard, ProjectCard, CaseStudyCard

---

### **PRIORIDADE 3: Icon Component (1h)**
```astro
<!-- Novo: src/components/ui/Icon.astro -->
interface Props {
  name: 'checkmark' | 'external-link' | 'calendar' | 'document';
  size?: 'sm' | 'md' | 'lg';
}
```

**Afeta:** CourseCard, ExperienceCard, ContestCard, EducationCard

---

### **PRIORIDADE 4: CSS Utils (1h)**
```css
/* Novo: src/styles/components.css */
@layer components {
  .card-base {
    @apply bg-surface-1 border border-hairline rounded-lg p-6 hover:bg-surface-2 transition-all duration-300 flex flex-col;
  }
  .card-hover {
    @apply transition-all duration-300;
  }
  .label-field {
    @apply text-xs font-semibold text-ink-muted uppercase tracking-widest;
  }
  .value-field {
    @apply text-sm text-ink;
  }
}
```

---

## 🎨 Antes vs Depois (Estimativa)

### Antes (Status Atual)
```
CourseCard.astro:    174 linhas (60 CSS inline)
ProjectCard.astro:   55 linhas  (20 CSS inline)
BlogCard.astro:      45 linhas  (18 CSS inline)
ExperienceCard.astro: 70 linhas  (25 CSS inline)
EducationCard.astro:  62 linhas  (22 CSS inline)
CaseStudyCard.astro:  97 linhas  (30 CSS inline)
ServiceCard.astro:    58 linhas  (20 CSS inline)
─────────────────────────────────
TOTAL: ~461 linhas, ~195 CSS inlined
```

### Depois (Refatorado)
```
Card.astro:          30 linhas (base reutilizável)
Badge.astro:         20 linhas (melhorado)
Icon.astro:          25 linhas (novo)
components.css:      50 linhas (utils)

CourseCard.astro:    130 linhas (-44, -25%)
ProjectCard.astro:   35 linhas (-20, -36%)
BlogCard.astro:      30 linhas (-15, -33%)
ExperienceCard.astro: 50 linhas (-20, -29%)
EducationCard.astro:  40 linhas (-22, -35%)
CaseStudyCard.astro:  65 linhas (-32, -33%)
ServiceCard.astro:    35 linhas (-23, -40%)
─────────────────────────────────
TOTAL: ~305 linhas, ~85 CSS (+base)
Redução: 156 linhas (-34%), -110 CSS inlined (-56%)
```

---

## 🚀 Próximas Etapas

1. ✅ Auditoria completa (concluído)
2. ⏳ Implementar Card.astro base (Task #2.1)
3. ⏳ Refatorar Badge.astro (Task #2.2)
4. ⏳ Criar Icon.astro (Task #2.3)
5. ⏳ Adicionar CSS utils em components.css (Task #2.4)
6. ⏳ Refatorar cada card individualmente (Task #2.5)
7. ⏳ Testar visual em light/dark mode (Task #2.6)

---

**Estimativa Total:** 6-7 horas  
**Ganho Bundle Size:** 10-15%  
**Redução de Código:** 30-35%

