## Raiz - Ícones e preview
- [ ] `favicon.ico` — fallback universal
- [ ] `favicon.svg` — moderno, vetorial, suporta dark mode
- [ ] `apple-touch-icon.png` — 180×180px (iOS)
- [ ] `icon-192.png` — 192×192px (manifest, Android)
- [ ] `icon-512.png` — 512×512px (manifest, Android)
- [ ] `og-image.jpg` — 1200×630px (preview de link)
> PNG tem que ser PNG real, não JPEG renomeado.

## Raiz - SEO técnico
- [ ] `robots.txt` — domínio correto + caminho do sitemap
- [ ] `sitemap.xml` — URLs reais + `lastmod` (deixar `links.html` de fora)

## Raiz - Cloudflare + manifest
- [ ] `_headers` — headers de segurança
- [ ] `_redirects` — www → domínio raiz
- [ ] `site.webmanifest` — referencia os ícones 192×192px e 512×512px

## Raiz - HTML
- [ ] `index.html`
- [ ] `404.html`
- [ ] `links.html` (se aplicável — linktree, noindex)
- [ ] `politica-de-privacidade.html` (se aplicável)
- [ ] `politica-de-cookies.html` (se aplicável)
- [ ] `termos-de-uso.html` (se aplicável)

## Dentro do <head> - SEO (por página)
- [ ] `charset`, `viewport`, `lang`, `theme-color`
- [ ] `title` + `meta description` únicos com no máximo 55 caracteres para o title e 150 caracteres para o meta description 
- [ ] `canonical` + `meta robots` (noindex no `links.html`)
- [ ] Open Graph + Twitter Card (og:image → og-image.jpg)
- [ ] JSON-LD `LocalBusiness` (ou subtipo)

## Métricas / validação externa
- [ ] PageSpeed Insights — 100/100/100/100 + Core Web Vitals "Aprovado" (campo)
- [ ] Performance comprovada — testada em mobile real / conexão lenta (LCP/INP/CLS reais, não só o lab)
- [ ] Imagens otimizadas — todas WebP/AVIF, dimensionadas (srcset) e lazy; peso total dentro do orçamento
- [ ] securityheaders.com — nota A/A+ (valida teu _headers)
- [ ] W3C Validator — 0 erros de HTML
- [ ] WAVE / axe — 0 erros de acessibilidade
- [ ] SSL Labs — A/A+ (geralmente já vem automático no Cloudflare)
- [ ] Search Console — site enviado, indexado, sem erros de cobertura

## Verificação antes de publicar
- [ ] Favicon aparece na aba
- [ ] Preview renderiza (testar no WhatsApp)
- [ ] Links de WhatsApp / contato abrindo
- [ ] Imagens carregando, sem caminho quebrado
- [ ] Caminhos absolutos (`/assets/...`)
- [ ] JSON-LD validado no Rich Results Test
- [ ] Output do Cloudflare apontando pra `public`

Fez isso aqui tudo? Ótimo, já é diferenciado mas nada além da obrigação .
(Mas isso já me torna diferente da maioria)
Mas para estar no 1% melhor, preciso que os projetos tenham:

- Design impecável
- Copy persuasiva
- O site precisa CONVERTER
- Navegação clara com links descritivos e hierarquia lógica entre as páginas