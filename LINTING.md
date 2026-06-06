# Linting & Code Quality

Este projeto usa **ESLint** e **Prettier** para manter a qualidade do código.

## 📋 Scripts Disponíveis

```bash
# Verificar problemas de lint
npm run lint

# Corrigir problemas automaticamente
npm run lint:fix

# Formatar código com Prettier
npm run format

# Verificar tipos TypeScript
npm run type-check

# Executar tudo (lint + type-check + build)
npm run build
```

## 🔧 Configuração

- **`.eslintrc.json`** — Regras ESLint para JS/TS/Astro
- **`.prettierrc.json`** — Formatação automática de código
- **`.github/workflows/ci.yml`** — Pipeline CI automático no GitHub

## 🚀 CI/CD Automático

Toda vez que você faz `git push` ou abre uma Pull Request:

1. ✅ **ESLint** valida o código
2. ✅ **TypeScript** verifica tipos
3. ✅ **Build** compila o projeto
4. ✅ **Output check** verifica se o `dist/` foi gerado

Se algo falhar, o build ❌ falha e você vê no GitHub.

## 💡 Dicas

### Antes de commitar
```bash
npm run lint:fix && npm run format && npm run build
```

### Corrigir problemas comuns
- **Espaçamento**: `npm run format`
- **Variáveis não usadas**: `npm run lint:fix`
- **Imports não utilizados**: Será detectado pelo lint

### Ignorar warnings locais
Se você tem um código legítimo que gera warning, use:

```typescript
// eslint-disable-next-line no-console
console.log('Debug info');
```

Mas **não abuse**! Se tem muitos warnings, há algo errado.

## 📚 Referências

- [ESLint Docs](https://eslint.org/docs/rules/)
- [Prettier Docs](https://prettier.io/docs/)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
