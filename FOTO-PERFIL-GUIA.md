# 📸 Guia: Adicionar Foto Profissional ao Portfolio

## 🎯 O que Você Precisa Fazer

### **Passo 1: Gerar Foto com Headshot AI**

1. **Acesse:** https://www.headshotai.com/
2. **Tire 15-20 fotos** com seu celular (ver "Dicas de Foto" abaixo)
3. **Upload das fotos** no site
4. **Aguarde 1-2 horas** para a IA processar
5. **Receba email** quando estiver pronto
6. **Escolha as 3-5 melhores fotos**
7. **Download** em alta qualidade

---

## 📸 Dicas para Tirar Boas Fotos

### **Ambiente**
- ✅ Iluminação natural (perto de janela)
- ✅ Fundo neutro (branco, cinza, ou parede lisa)
- ✅ Sem sombras no rosto
- ✅ Câmera em altura do rosto (nem muito alto, nem muito baixo)

### **Quantidade & Variedade**
- ✅ 15-20 fotos (quanto mais, melhor)
- ✅ Diferentes ângulos: frontal, 3/4, perfil
- ✅ Diferentes expressões: sério, sorriso leve
- ✅ Com e sem óculos (se usar)
- ✅ Diferentes roupas: camiseta, camisa, blazer

### **Configurações do Celular**
- ✅ Modo retrato (melhor foco)
- ✅ Máxima resolução
- ✅ Luz natural (evite flash)

---

## 🖼️ Preparar Foto para o Portfolio

Depois de fazer download da foto no Headshot AI:

### **Dimensões Ideais**
- **Tamanho:** 500x500px
- **Formato:** PNG ou JPG
- **Arquivo:** < 500KB

### **Se Precisar Editar**

**Remover fundo:**
1. Acesse: https://remove.bg
2. Upload da foto
3. Download com fundo transparente (grátis)

**Redimensionar:**
1. Acesse: https://picresize.com
2. Upload da foto
3. Redimensione para 500x500px
4. Download

---

## 📁 Upload da Foto no Portfolio

### **Onde Colocar a Foto**

1. **Salve como:** `profile.jpg` (ou `profile.png`)
2. **Coloque em:** `public/profile.jpg`
3. **Na pasta raiz do projeto:**
   ```
   portfolio/
   ├── public/
   │   ├── favicon.svg
   │   └── profile.jpg  ← COLOQUE AQUI
   └── ... resto dos arquivos
   ```

### **Fazer Upload para GitHub**

```bash
# 1. Copie a foto para public/
cp ~/Downloads/seu-profile.jpg ./public/profile.jpg

# 2. Faça commit
git add public/profile.jpg
git commit -m "Adicionar foto de perfil profissional"

# 3. Push para GitHub (atualiza automaticamente no Vercel)
git push
```

---

## 🎨 Componentes Criados

O portfolio já tem estrutura pronta para foto:

### **Componente: ProfileImage** 
- Localização: `src/components/ui/ProfileImage.astro`
- Tamanhos: `sm`, `md`, `lg`, `xl`
- Usa: `public/profile.jpg`

### **Componente: HeroWithProfile**
- Localização: `src/components/sections/HeroWithProfile.astro`
- Hero com foto do lado
- Pronto para usar na Home

---

## 🔄 Usar a Foto no Portfolio

Depois que fizer upload, vou integrar em:

### **Opção 1: Home Page (Recomendado)**
```astro
<HeroWithProfile
  name="Maison Galvão"
  title="Senior Developer & Tech Lead"
  description="..."
/>
```

### **Opção 2: Página About**
```astro
<ProfileImage size="lg" />
```

### **Opção 3: Cards de Projetos**
```astro
<ProfileImage size="md" />
```

---

## ✅ Checklist

- [ ] Tirou 15-20 fotos com celular
- [ ] Fez upload no Headshot AI
- [ ] Escolheu as 3-5 melhores fotos
- [ ] Fez download em alta qualidade
- [ ] Redimensionou para 500x500px (se necessário)
- [ ] Removeu fundo (se necessário)
- [ ] Salvou como `profile.jpg`
- [ ] Colocou em `public/profile.jpg`
- [ ] Fez `git push`
- [ ] Verificou em https://maisongalvao.dev

---

## 🚀 Depois Que Fazer Upload

1. **Avisa aqui** que a foto está em `public/`
2. **Eu integro** nos componentes
3. **Faz commit** final
4. **Site atualiza** automaticamente em 60s

---

## 💡 Dúvidas?

- **Qual tamanho escolher no Headshot AI?** Portrait ou Business (recomendado)
- **Quantas fotos escolher?** 1 séria (LinkedIn) + 1 com sorriso (site)
- **Que formato usar?** JPG (menor) ou PNG (se remover fundo)
- **Custa quanto?** ~$29 USD (~R$ 150)

---

**Agora é com você! Tira as fotos e me avisa quando estiver pronto! 🚀**
