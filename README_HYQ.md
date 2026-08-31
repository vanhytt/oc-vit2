# HYQ Hardwares Website Clone

Reconstrução completa do website https://www.hyq-hardwares.cn/ usando Next.js 16 + React 19 + Tailwind CSS v4.

## 🚀 Quick Start

```bash
# 1. Iniciar servidor de desenvolvimento
npm run dev

# 2. Abrir no navegador
# http://localhost:3000/hyq

# 3. Ver documentação completa
cat SETUP_GUIDE.md
```

## 📚 Documentação

- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Guia completo de uso
- **[PROJECT_COMPLETE.md](./PROJECT_COMPLETE.md)** - Detalhes do projeto
- **[docs/research/](./docs/research/hyq-hardwares-cn-e8f3a1b2/)** - Documentação de design (9 arquivos)
- **[docs/design-references/](./docs/design-references/hyq-hardwares-cn-e8f3a1b2/)** - Screenshots (12 arquivos)

## ✨ O Que Está Incluído

### Componentes React (8)
- `Button` - Botões com 3 variantes
- `Card` - Cards com imagem e conteúdo
- `Container` - Layout responsivo
- `Header` - Navegação com menu mobile
- `Footer` - Rodapé com 4 colunas
- `Hero` - Banner hero com CTA
- `ProductCard` - Cards de produtos
- `Section` - Wrapper de seções

### Design System
- 10+ cores definidas
- Tipografia completa (Microsoft YaHei)
- Escala de espaçamento (4px - 80px)
- 3 breakpoints responsivos
- Tokens de sombra e border-radius

### Páginas
- `/hyq` - Página principal com hero, produtos, about, footer

## 📊 Estatísticas

| Item | Valor |
|------|-------|
| Componentes | 8 |
| Linhas de Código | 835 |
| Screenshots | 12 (5.4 MB) |
| Documentos | 9 |
| Status | ✅ Completo |

## 🎨 Design System

**Cores Principais:**
- Red: `#E74C3C` (accent)
- Dark: `#2C3E50` (headings)
- Light: `#ECF0F1` (backgrounds)

**Responsive:**
- Mobile: < 768px
- Tablet: 768px - 1199px
- Desktop: 1200px+

## 📖 Como Usar

### Visualizar Página Clone
```bash
npm run dev
# Abra http://localhost:3000/hyq
```

### Ver Screenshots de Referência
```bash
# Abrir pasta de screenshots
# docs/design-references/hyq-hardwares-cn-e8f3a1b2/root-a4d2c9e1/
```

### Ler Documentação de Design
```bash
# Documentos principais:
# - docs/research/.../DESIGN_ANALYSIS.md
# - docs/research/.../COMPONENT_INVENTORY.md
# - docs/research/.../COLOR_PALETTE.md
```

## 🛠️ Scripts Disponíveis

```bash
npm run dev          # Inicia dev server
npm run build        # Production build
npm run start        # Inicia servidor de produção
npm run lint         # ESLint check
npm run typecheck    # TypeScript check
npm run check        # Lint + typecheck + build
npm run scrape:hyq   # Executar scraper Puppeteer
```

## 📁 Estrutura de Arquivos

```
oc-vit2/
├── src/
│   ├── app/hyq/page.tsx                 # Página principal
│   ├── components/sites/hyq-hardwares-cn-e8f3a1b2/
│   │   └── shared/                      # Componentes reutilizáveis
│   ├── lib/design-system.ts             # Design tokens
│   └── ...
├── docs/
│   ├── research/                        # Documentação de design (9 arquivos)
│   └── design-references/               # Screenshots (12 arquivos)
├── scripts/scrape-hyq-hardwares.mjs    # Script de scraping
├── SETUP_GUIDE.md                       # Guia completo
├── PROJECT_COMPLETE.md                  # Detalhes do projeto
└── README.md                            # Este arquivo
```

## ✅ Status do Projeto

- ✅ Website extraction (screenshots + HTML)
- ✅ Design system documentado
- ✅ 8 componentes React implementados
- ✅ Página principal construída
- ✅ TypeScript checks passed
- ✅ Responsive design (mobile/tablet/desktop)
- ✅ Pronto para uso/customização

## 🔮 Próximas Melhorias

- [ ] Carousel de produtos com Swiper
- [ ] Formulários com validação
- [ ] Scroll animations (Framer Motion)
- [ ] Páginas de detalhe de produto
- [ ] Dark mode
- [ ] i18n (Chinese/English)

## 📝 Notas

- Todos os componentes são TypeScript com tipos completos
- Tailwind CSS v4 com design tokens customizados
- Layout totalmente responsivo
- Pronto para deployment no Vercel

---

**Criado:** 2026-08-31  
**Status:** ✅ Completo  
**Próximo Passo:** `npm run dev`
