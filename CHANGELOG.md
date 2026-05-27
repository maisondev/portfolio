# Changelog

Todas as mudanças significativas neste portfólio estão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto segue [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [Unreleased]

### Added
- Case Studies section component
- Language Switcher component
- Multi-language support (PT/EN) com roteamento dinâmico
- Nova estrutura de páginas com suporte a i18n
- CHANGELOG.md para rastreamento de mudanças

### Changed
- Reorganização de projetos (agora em página separada)
- Atualização do Footer com links corretos (removido "Concursos" da navegação principal)
- Remover SocialLinks do Header para melhor UX
- Migração para Astro 5.18.2
- Remoção de emojis nas categorias de serviços/social
- Labels de navegação: "Serviços" → "Social"

### Fixed
- Ícone de Pós-Graduação na seção Education
- Links de navegação desatualizados no Footer
- Emojis nas categorias de social removidos

## [1.0.0] - 2026-05-26

### Added
- Portfólio inicial em Astro + TailwindCSS + TypeScript
- Seções: Home, About, Projetos, Experiência, Educação, Blog
- Página de Concursos Públicos
- Suporte a temas (dark mode)
- Social Links integrados
- Blog layout base
- Componentes reutilizáveis: Cards, Buttons, Badges

### Initial Features
- Performance otimizada (Lighthouse 90+)
- Responsive design mobile-first
- SEO-friendly metadata
- Syntax highlighting no blog (Prism.js)

---

## Como usar este CHANGELOG

### Enquanto trabalha
1. **Add**: Novas features adicionadas
2. **Changed**: Modificações em features existentes
3. **Fixed**: Bugs corrigidos
4. **Deprecated**: Features que serão removidas em breve
5. **Removed**: Features removidas
6. **Security**: Correções de segurança

### Para fazer release
```bash
# 1. Atualizar versão no package.json
# 2. Mover seção [Unreleased] para [X.Y.Z] - data
# 3. Criar nova seção [Unreleased]
# 4. Committar com: "chore: release v X.Y.Z"
```

### Exemplo de entrada
```markdown
### Added
- Case Studies com screenshots e métricas de impacto

### Fixed
- Footer links apontando para URLs antigas
```
