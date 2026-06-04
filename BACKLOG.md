# 📋 Backlog do Portfolio

**Gerado em:** 4 jun 2026  
**Status:** Revisado e validado com codebase

---

## 🎯 BACKLOG FEATURES (Prioridade)

### 🔴 PRIORIDADE ALTA — Impacto + Viabilidade

```
1. [ ] Adicionar dados em PROJECTS
   ├─ Atualmente: apenas 3 projetos no hardcode
   ├─ Fazer: Mover para config/projects.ts (como courses.ts)
   ├─ Benefício: Fácil manutenção, reutilizável
   └─ Esforço: 30min

2. [ ] Adicionar dados em EXPERIENCE
   ├─ Atualmente: timeline hardcoded em Experience.astro
   ├─ Fazer: Preencher com últimas 3-5 experiências reais
   ├─ Adicionar: Stack técnico, datas, descrição
   └─ Esforço: 20min

3. [ ] Implementar Gallery de Screenshots em Projects
   ├─ Mostrar preview ao hover
   ├─ Modal lightbox ao clicar
   └─ Esforço: 1h

4. [ ] Tags de Dificuldade nos Cursos
   ├─ Usar campo `difficulty` já presente em interface
   ├─ Exibir badge (Iniciante/Intermediário/Avançado)
   ├─ Filtrar por dificuldade
   └─ Esforço: 45min

5. [ ] Seção de "Certificações Verificáveis"
   ├─ Destacar top 5 cursos com URL verificável
   ├─ Mostrar issuer (Google, Meta, Coursera, Anthropic)
   ├─ Badge visual "Verificado"
   └─ Esforço: 1h
```

### 🟡 PRIORIDADE MÉDIA — Enhancements

```
6. [ ] Timeline Visual (Experience + Education)
   ├─ Mostrar datas em linha vertical
   ├─ Destacar duração entre datas
   └─ Esforço: 1.5h

7. [ ] Filtros Avançados em Projetos
   ├─ Como em Cursos (tech + difficulty + year)
   ├─ Contar projetos: "5 projetos encontrados"
   └─ Esforço: 1h

8. [ ] Estatísticas Globais
   ├─ "45 cursos completados"
   ├─ "8 anos de experiência"
   ├─ "12 projetos"
   └─ Esforço: 30min

9. [ ] "Read More" em Descrições Longas
   ├─ Expandir/colapsar automático em cards
   ├─ Limit: 2 linhas por padrão
   └─ Esforço: 45min

10. [ ] Sitemaps.xml + Robots.txt
    ├─ SEO automático
    ├─ Vercel integração
    └─ Esforço: 20min
```

### 🟢 PRIORIDADE BAIXA — Nice-to-Have

```
11. [ ] Busca Global (Cursos + Projetos)
    ├─ Input search na header
    ├─ Client-side filtering (sem backend)
    └─ Esforço: 1.5h

12. [ ] Compartilhar em Redes
    ├─ Botões "Compartilhar no LinkedIn/Twitter"
    ├─ Por projeto ou curso
    └─ Esforço: 45min

13. [ ] Modo "Print to PDF"
    ├─ Exportar currículo/portfolio como PDF
    └─ Esforço: 1h

14. [ ] Dark Mode: Validação em 4K
    ├─ Testar contraste em monitores 4K
    ├─ Ajustar gaps/tamanhos se necessário
    └─ Esforço: 30min

15. [ ] Otimização Lighthouse
    ├─ Performance, Accessibility, SEO
    ├─ Meta: Score 95+
    └─ Esforço: 2h
```

---

## ⚠️ BACKLOG HOTFIXES (Bug/Irritantes)

### 🔴 BLOQUEADORES (Fazer HOJE)

```
[ ] Revisar contraste em Light Mode
    ├─ Social links (pode estar baixo)
    ├─ Badges em Cursos
    ├─ Tags em Projetos
    └─ Teste: F12 → DevTools → Accessibility

[ ] Testar Responsividade iPhone 12
    ├─ Gaps entre seções
    ├─ Padding em mobile
    ├─ Breakpoint: 375px
    └─ Teste: DevTools resize

[ ] Verificar Meta Tags SEO
    ├─ og:image em todas as rotas
    ├─ Title, Description
    ├─ Rotas localizadas pt/ e en/
    └─ Tool: https://seochecker.com/

[ ] Remover console.logs (Produção)
    ├─ Grep por "console.log"
    ├─ Grep por "console.warn"
    └─ Esforço: 10min
```

### ⚠️ IRRITANTES (Essa semana)

```
[ ] Otimizar Performance (Lighthouse)
    ├─ Imagens: WebP + srcset
    ├─ CSS: PurgeCSS integrado?
    ├─ JS: Zero JavaScript em PDP
    └─ Meta: 95+ score

[ ] Acessibilidade (WCAG AA)
    ├─ Todos os links têm label?
    ├─ Contraste 4.5:1?
    ├─ Navegação com Tab?
    └─ Teste: aXe DevTools

[ ] Remover Espaço em Branco Desnecessário
    ├─ Verificar: gaps entre seções
    ├─ Mobile vs Desktop
    └─ Referência: CLAUDE.md padrão
```

---

## ✅ O Que Você JÁ FECOU (Recente)

| Feature | Data | Status |
|---------|------|--------|
| Cursos com data de conclusão | ✅ | Exibindo em CourseCard |
| Design System Tokens | ✅ | CLAUDE.md documentado |
| Certificados PDF → PNG | ✅ | Convertidos |
| TADS = Ensino Superior | ✅ | Estrutura corrigida |
| Modal para certificado | ✅ | Implementado |
| Hover colors com tokens | ✅ | SocialLinks |
| Education em Grid | ✅ | Por nível (7 níveis) |
| Projects em Grid Responsivo | ✅ | 6 colunas dinâmicas |
| Tech Stack + 6 categorias | ✅ | Filtros funcionando |
| Dark + Light Mode | ✅ | Ambos testados |
| Suporte 4K | ✅ | Breakpoint 4xl |

---

## 📅 Próximas 3 Horas (Sugestão)

```
HOJE — Prioridade:

1. [15min] Revisar contraste Light Mode
   → F12 → DevTools → Accessibility Tab

2. [20min] Preencher EXPERIENCE (real data)
   → src/components/sections/Experience.astro

3. [30min] Preencher 3-5 PROJECTS favoritos
   → src/components/sections/Projects.astro
   
4. [15min] Testar mobile (iPhone 12)
   → Resize DevTools → 375px

5. [10min] Commit das melhorias

TOTAL: ~90 minutos
```

---

## 🚀 Como Usar Este Backlog

- ✅ **Checkbox**: Copie `[ ]` → `[x]` quando completar
- 📊 **Prioridade**: 🔴 = Hoje | 🟡 = Essa semana | 🟢 = Backlog
- ⏱️ **Esforço**: Tempo estimado de implementação
- 💡 **Benefício**: Por que fazer (impacto)

---

**Última atualização:** 2026-06-04  
**Revisado por:** Claude Code  
**Próxima review:** Após preencher Projects + Experience
