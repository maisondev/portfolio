# 🔄 Sistema Global de Loading

Sistema de loading global bonito e reutilizável para o portfolio. Perfeito para operações que demoram mais como reordenação de cursos, abertura de modais, processamento de dados.

## 🎨 Características

- ✨ **Design bonito**: Overlay com blur, spinner animado, suporte a dark/light mode
- 🔄 **Contador de tarefas**: Múltiplas operações simultâneas não fecham o loading prematuramente
- 🌍 **Global**: Disponível em todo o site via `window.showLoading()` e `window.hideLoading()`
- 📱 **Responsivo**: Funciona em todos os tamanhos de tela
- ♿ **Acessível**: Suporta temas do SO

## 🚀 Uso Básico

### API em Inglês

```javascript
// Mostrar loading
window.showLoading('Carregando dados...');

// Esconder loading
window.hideLoading();
```

### API em Português

```javascript
// Mostrar loading (alias português)
window.mostrarCarregando('Reordenando cursos...');

// Esconder loading (alias português)
window.esconderCarregando();
```

## 📋 Exemplos de Implementação

### 1. Reordenação de Cursos (CoursesList.astro)

```javascript
sortButtons?.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Mostrar loading
    window.showLoading(lang === 'pt' ? 'Reordenando cursos...' : 'Reordering courses...');

    // Operação que demora
    setTimeout(() => {
      sortCards();
      updateSortButtons();
      updateUI();

      // Esconder loading
      window.hideLoading();
    }, 200);
  });
});
```

### 2. Abertura de Modal com Operação Assíncrona

```astro
<button id="open-modal" class="px-4 py-2 bg-primary text-white rounded-lg">
  Abrir Modal
</button>

<Modal id="myModal" title="Meu Modal" lang="pt">
  <div id="modal-content">Conteúdo aqui</div>
</Modal>

<script>
  const btn = document.getElementById('open-modal');
  
  btn.addEventListener('click', async () => {
    // Mostrar loading durante a operação
    window.showLoading('Carregando dados...');

    try {
      // Simular operação assíncrona
      const data = await fetch('/api/data').then(r => r.json());
      document.getElementById('modal-content').innerHTML = `...`;
      
      // Abrir modal
      window.openMyModal?.();
    } finally {
      // Sempre esconder o loading, mesmo se houver erro
      window.hideLoading();
    }
  });
</script>
```

### 3. Filtro de Cursos (Rápido - não precisa de loading)

```javascript
techButtons?.forEach((btn) => {
  btn.addEventListener('click', () => {
    selectedTech = btn.getAttribute('data-filter-tech') || '';
    updateUI();
    // Sem loading pois é instantâneo
  });
});
```

### 4. Processamento Assíncrono

```javascript
// Exemplo: fetch com timeout
async function fetchData() {
  window.showLoading('Buscando dados do servidor...');

  try {
    const response = await fetch('/api/courses');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro:', error);
  } finally {
    window.hideLoading();
  }
}
```

## 🔐 Contador de Tarefas (Importante!)

O sistema usa um contador interno para rastrear quantas operações estão em andamento. Isso evita que o loading seja fechado quando uma das operações termina, mas outras ainda estão rodando.

```javascript
// Operação 1
window.showLoading('Fazendo algo 1...');  // counter = 1

// Operação 2
window.showLoading('Fazendo algo 2...');  // counter = 2

// Finalizar operação 1
window.hideLoading();  // counter = 1 (loading ainda visível!)

// Finalizar operação 2
window.hideLoading();  // counter = 0 (loading fecha agora)
```

## 📝 Quando Usar

✅ **Use loading quando:**
- Reordenação/filtragem de muitos itens (>100)
- Operações assíncronas (fetch, API calls)
- Abertura/fechamento de modais pesados
- Processamento de dados
- Qualquer operação que demora >100ms

❌ **NÃO use loading quando:**
- Filtros/cliques instantâneos (<50ms)
- Toggle de visibilidade simples
- Mudanças de CSS puras
- Navegação entre páginas (Astro cuida disso)

## 🎨 Customização

Para alterar o texto, cores ou comportamento:

1. **Editar componente**: `src/components/ui/LoadingOverlay.astro`
2. **Alterar cores**: Modificar classes Tailwind (ex: `text-accent-500`)
3. **Alterar animação**: Modificar `@keyframes spin` em `<style>`

## 🐛 Troubleshooting

### Loading não aparece

- [ ] Verificar se `LoadingOverlay` está importado em `BaseLayout.astro`
- [ ] Verificar se `window.showLoading` é chamado
- [ ] Abrir DevTools → Console → digitar `window.showLoading('teste')`

### Loading fecha muito rápido

- [ ] Aumentar delay no `setTimeout`
- [ ] Verificar se há múltiplas chamadas de `hideLoading()`

### Loading não some

- [ ] Verificar se `hideLoading()` é chamado
- [ ] Revisar o contador: `console.log(window.__loadingCounter)`
- [ ] Chamar `window.__loadingCounter = 0; window.hideLoading();` para forçar fechar

## 📚 Arquivos Envolvidos

- `src/components/ui/LoadingOverlay.astro` - Componente do overlay
- `src/layouts/BaseLayout.astro` - Import do componente
- `src/components/ui/CoursesList.astro` - Exemplo de implementação
- `src/components/ui/Modal.astro` - Modal com suporte a loading

---

**Última atualização:** 2026-06-05
