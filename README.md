# Chibo Dev · Portfolio

Portfolio site for Yuri "Chibo" — front-end developer & web designer.

## Stack

HTML / CSS / JavaScript puro. Sem build, sem dependências, sem dor de cabeça.

## Estrutura

```
public/                              # output do Cloudflare Pages (raiz do deploy)
├── assets/
│   ├── css/
│   │   └── style.css                # CSS ÚNICO — design system, páginas legais, cookies, transição
│   ├── fonts/                       # (vazio) fontes self-hosted no futuro
│   ├── img/                         # logos, prints dos cases, foto
│   └── js/
│       ├── main.js                  # tema, i18n PT/EN, animações, modal de cases, índice das legais
│       └── cookie-consent.js        # consentimento LGPD (carregado em TODAS as páginas)
│
├── index.html                       # página principal (one-page)
├── politica-de-privacidade.html     # Política de Privacidade (LGPD)
├── politica-de-cookies.html         # Política de Cookies (LGPD)
├── termos-de-uso.html               # Termos de Uso
├── checklist.md                     # checklist de publicação
└── README.md
```

Todos os assets usam caminho **relativo** (`assets/...`) e as páginas se interligam por nomes longos (bom pra SEO). Como tudo fica na raiz do `public/`, o site também abre direto via `file://` (duplo-clique). O output do Cloudflare Pages deve apontar para `public`.

## Como rodar localmente

Abra `index.html` direto no navegador, ou rode um servidor local:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve

# PHP
php -S localhost:8000
```

## Recursos

- **Tema dark/light** com switch no header (lembra a escolha do visitante via localStorage).
- **Idiomas PT/EN** com switch no header (detecta idioma do navegador na primeira visita).
- **Lime accent** calibrado para os dois temas (mais saturado no dark, mais oliva no light pra não machucar os olhos).
- **Tipografia**: Geist (corpo) + Geist Mono (dados, labels e números). Google Fonts gratuitas.
- **Animações**: fade-in stagger no hero, reveal-on-scroll nas seções, microinterações nos hovers.
- **Responsivo**: testado de 320px até 4K.
- **Acessível**: respeita `prefers-reduced-motion`, tem labels semânticos, contraste AAA.
- **SEO**: meta tags Open Graph + estrutura semântica.
- **Transição entre páginas** sem flash branco (View Transitions API, CSS puro): o header e o botão de WhatsApp ficam parados e só o conteúdo faz cross-fade. Progressive enhancement — Chrome 126+/Safari 18.2+ animam; Firefox e navegadores antigos só navegam, sem quebrar nada. Respeita `prefers-reduced-motion`. Ajuste a velocidade no bloco "TRANSIÇÃO ENTRE PÁGINAS" do `style.css` (`animation-duration`, hoje `.32s`).

## Personalização

### Substituir os placeholders dos cases por screenshots reais

Cada case tem dois placeholders: laptop (desktop) e celular (mobile). Você vai precisar de 2 imagens por projeto:

- **Desktop**: 1600x1000px (proporção 16:10), JPG ou PNG
- **Mobile**: 375x800px (proporção ~9:19), JPG ou PNG

No `index.html`, procure pelo case que quer atualizar (ex: `case--aces`) e substitua os blocos `<div class="device-placeholder">...</div>` por `<img>`:

```html
<!-- Antes -->
<div class="device-laptop__screen">
  <div class="device-placeholder">
    <span class="device-placeholder__label">ACES.com</span>
    <span class="device-placeholder__hint">substituir por screenshot</span>
  </div>
</div>

<!-- Depois -->
<div class="device-laptop__screen">
  <img src="screenshots/aces-desktop.jpg" alt="ACES Site Desktop">
</div>
```

O mesmo pra `.device-phone__screen` com a imagem mobile. O CSS já trata `object-fit: cover` automaticamente.

### Trocar logos de clientes
No `index.html`, seção `.logos__row`. Hoje os clientes aparecem como texto (`<div class="logo-placeholder">`). Substitua por SVGs ou `<img>` dos logos reais quando tiver. O cliente em destaque (ACES) usa a variante `.logo-placeholder--featured` — mantenha-a no que você quiser destacar (ex.: cliente internacional).

### Preencher os depoimentos
A seção de depoimentos (`.testimonials`) vem com 3 cards pré-montados (ACES, Mentoria Route, Hidro-Sul), mas com frases de exemplo marcadas. Cada card está com a classe `is-empty`, que estiliza o texto como placeholder (itálico/apagado).

Quando tiver a frase real do cliente:
1. Substitua o texto dentro de `<blockquote class="testimonial__quote">` pela frase real (e a mesma chave no `main.js`, em `pt` e `en`, ex.: `testi.q1`).
2. **Remova a classe `is-empty`** daquele `<figure class="testimonial ...">` pra ele virar um depoimento "de verdade".
3. Ajuste nome/cargo se precisar. O avatar é só a inicial — troque por `<img>` se quiser foto.

### Configurar formulário
O formulário hoje só dá `alert` ao enviar. Para receber mensagens reais, conecte com:

- **Formspree** (gratuito até 50 envios/mês): https://formspree.io
- **Netlify Forms** (gratuito se hospedar lá): adicione `data-netlify="true"` na tag `<form>`
- **Web3Forms** (gratuito ilimitado): https://web3forms.com

### WhatsApp
Procure por `https://wa.me/` em `index.html` e substitua pelo seu número (formato `https://wa.me/5511999999999`, sem caracteres especiais).

### E-mail
Procure por `contato@chibodev.com` em `index.html` e substitua se necessário.

### Cores
Em `style.css`, blocos `[data-theme="dark"]` e `[data-theme="light"]`. Os accents lime estão na variável `--accent`.

## Páginas legais e cookies (LGPD)

Três páginas — **Privacidade**, **Cookies** e **Termos** — mais o sistema de consentimento de cookies. Todas reaproveitam o `style.css` (tokens, header, footer, botões), então herdam a identidade do site automaticamente. O conteúdo está em **português** (a LGPD é lei brasileira); o site principal continua bilíngue.

### Preencher os placeholders
Os campos em **lime tracejado** (classe `.legal-ph`) precisam ser preenchidos antes de publicar:

- `[razão social completa]` — em `politica-de-privacidade.html` (§1) e `termos-de-uso.html` (§2)
- `[CNPJ]` — nas mesmas páginas
- `[comarca]` — em `termos-de-uso.html` (§10). Já vem com São Paulo/SP como padrão; ajuste se o seu foro for outro.

Procure por `legal-ph` em cada arquivo. Depois de preencher, pode remover a classe se quiser tirar o destaque visual.

### Banner e preferências de cookies
- `cookie-consent.js` é carregado em **todas** as páginas (o CSS do banner/modal já está no `style.css`).
- No primeiro acesso aparece o banner (**Aceitar todos** / **Recusar não essenciais** / **Personalizar**). A escolha fica salva em `localStorage` (`chibo-cookie-consent`).
- O link **"Preferências de cookies"** no rodapé (qualquer elemento com `data-cookie-prefs`) reabre o modal a qualquer momento.
- Três categorias: **Necessários** (sempre ativos), **Desempenho e análise** e **Funcionalidade**.

### Ligar o Google Analytics (ou similar) ao consentimento
O script expõe uma API. Carregue o analytics **só depois** da autorização:

```js
CookieConsent.onChange(function (consent) {
  if (consent.analytics) {
    // inicialize aqui o GA / Plausible / etc.
  }
});
```

`onChange` dispara assim que o consentimento existe (inclusive em acessos seguintes), então o callback roda mesmo que você o registre depois do carregamento.

### Recomendação: self-hostar as fontes
Hoje a Geist/Geist Mono vêm do Google Fonts — por isso a Política de Cookies declara, com honestidade, que o Google pode receber o IP do visitante. Se as fontes forem hospedadas no próprio domínio (`.woff2` + `@font-face`), essa cláusula sai **e** o PageSpeed melhora. Vale fazer.

> **Aviso:** os textos foram montados com base na LGPD e numa referência sólida, mas isto **não é aconselhamento jurídico**. Para uma empresa formal, vale uma revisão de advogado antes de publicar — principalmente a limitação de responsabilidade e o foro nos Termos.

## Deploy

### Vercel (recomendado)
1. Crie conta em https://vercel.com
2. `vercel` no terminal (CLI) ou conecte o repo do GitHub
3. Pronto. Apontando `chibodev.com` no painel.

### Netlify
1. Arraste a pasta inteira em https://app.netlify.com/drop
2. Ou conecte o repo do GitHub
3. Configure o domínio.

### GitHub Pages
1. Suba o repo no GitHub
2. Settings → Pages → Deploy from branch → main
3. Configure o domínio em `Settings → Pages → Custom domain`.

## Próximos passos sugeridos

- Substituir os placeholders pelos screenshots reais dos 6 projetos
- Trocar os textos de exemplo dos depoimentos por frases reais (e remover `is-empty`)
- Substituir os nomes de cliente em `.logos__row` pelos logos reais
- Criar as páginas `/privacidade` e `/termos` (o footer já aponta pra elas)
- Preencher os links reais de GitHub/LinkedIn/Instagram no footer
- Configurar o backend do formulário (Formspree, Web3Forms ou Netlify Forms)
- Configurar Google Analytics ou Plausible
- Adicionar blog (opcional, mas excelente pra SEO)
