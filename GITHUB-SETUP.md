# 🚀 Setup GitHub & Deployment

## 1️⃣ Criar Repositório no GitHub

1. Acesse **https://github.com/new**
2. Preencha:
   - **Repository name:** `portfolio`
   - **Description:** `Professional portfolio - Maison Galvão`
   - **Public** (deixe público - portfolio deve ser open source)
   - **Create repository**

## 2️⃣ Push Local para GitHub

Execute estes comandos no terminal:

```bash
# Adicionar remote (substitua seu username)
git remote add origin https://github.com/maisongalvao/portfolio.git

# Fazer push da branch main
git branch -M main
git push -u origin main
```

Se pedir autenticação:
- Use seu **GitHub username**
- Use um **Personal Access Token** como senha (https://github.com/settings/tokens)

## 3️⃣ Setup Vercel para Deploy Automático

1. Acesse **https://vercel.com**
2. Clique em **"New Project"**
3. Selecione seu repositório `portfolio`
4. Vercel detectará Astro automaticamente ✅
5. Clique em **Deploy**

### Configurar Domínio Customizado

1. No Vercel, vá em **Settings** → **Domains**
2. Clique em **Add Domain**
3. Digite: `maisongalvao.dev`
4. Siga instruções para apontar DNS:
   - Vá em seu provedor de domínio (GoDaddy, Namecheap, etc)
   - Atualize NS Records para:
     ```
     ns1.vercel.com
     ns2.vercel.com
     ```

### Resultado
✅ Toda vez que fazer `git push`:
- GitHub recebe o código
- Vercel detecta automáticamente
- Site é buildado e deployado
- `maisongalvao.dev` atualiza em ~60 segundos

## 4️⃣ Checklist de Deploy

- [ ] Repositório criado no GitHub
- [ ] `git push` para GitHub feito com sucesso
- [ ] Projeto conectado ao Vercel
- [ ] Build passou no Vercel (com sucesso)
- [ ] Domínio `maisongalvao.dev` apontando para Vercel
- [ ] Site acessível em https://maisongalvao.dev

## 🔄 Workflow Diário

Quando quiser fazer atualizações:

```bash
# 1. Fazer mudanças nos arquivos
# (editar components, adicionar projetos, etc)

# 2. Testar localmente
npm run dev
# Abre em http://localhost:4321

# 3. Fazer commit
git add .
git commit -m "Descrição da mudança"

# 4. Push para GitHub (dispara deploy automático)
git push
```

**Pronto!** Site atualiza automaticamente em ~60 segundos.

## 📝 Dúvidas?

- **Problema no push?** Verifique seu Personal Access Token
- **Vercel não detectou?** Verifique se `astro.config.mjs` existe
- **Domínio não resolve?** Aguarde 24-48h para DNS propagar
