/* ==========================================================
   CHIBO DEVELOPER · script
   ========================================================== */

/* -------- Translations -------- */
const translations = {
  pt: {
    'nav.services': 'Serviços',
    'nav.work': 'Trabalhos',
    'nav.process': 'Processo',
    'nav.about': 'Sobre',
    'nav.home': 'Início',
    'nav.cta': 'Começar projeto',

    'hero.status': 'Disponível para novos projetos',
    'hero.line1': 'Sites feitos do zero',
    'hero.line2a': 'que dão',
    'hero.line2b': ' resultado',
    'hero.sub': 'Bonito vende, funcional converte e eu faço os dois. Sob medida pra quem quer ser levado a sério.',
    'hero.cta1': 'Conversar sobre meu projeto',
    'hero.cta2': 'Ver trabalhos',
    'hero.scroll': 'role pra ver',
    'hero.stat1': 'projetos no ar',
    'hero.stat2': 'países atendidos',
    'hero.stat3': 'do zero, sem template',
    'hero.pill1': '→ resultado',
    'hero.pill2': '★ muito café',
    'hero.pill3': '{ código limpo }',
    'hero.pill4': '+ velocidade',

    'logos.title': 'Quem já confiou no meu trabalho',

    'services.title': 'O que eu faço',
    'services.lp.title': 'Landing pages que convertem',
    'services.lp.desc': 'Páginas focadas num único objetivo: gerar lead, vender produto, lançar campanha. Estrutura, copy e design pensados pro visitante agir.',
    'services.lp.tag1': 'Conversão',
    'services.lp.tag2': 'Copy',
    'services.lp.tag3': 'Performance',
    'services.inst.title': 'Sites institucionais que vendem por você',
    'services.inst.desc': 'Presença digital que comunica autoridade e fecha negócio enquanto você dorme. Performance, SEO técnico e identidade alinhada com sua marca.',
    'services.inst.tag1': 'Autoridade',
    'services.inst.tag2': 'SEO',
    'services.inst.tag3': 'Identidade',
    'services.brand.title': 'Sites de marca pessoal',
    'services.brand.desc': 'Pra criadores e profissionais que querem uma presença própria fora das redes — fácil de achar no Google e com página de links no domínio.',
    'services.brand.tag1': 'Portfólio',
    'services.brand.tag2': 'Links',
    'services.brand.tag3': 'SEO',

    'work.title': 'Trabalhos recentes',
    'work.case01.type': 'Site Institucional · EUA',
    'work.case01.status': 'Entregue',
    'work.case01.title': 'ACES Electrical Services',
    'work.case01.desc': 'Site institucional bilíngue para empreiteira elétrica norte-americana. Comunicação direta, foco em conversão B2B e captação de talentos para o setor comercial e residencial.',
    'work.case01.link': 'Ver case →',
    'work.case01.tag1': 'Bilíngue',
    'work.case01.tag2': 'B2B',
    'work.case01.tag3': 'Construção',
    'work.case02.type': 'E-commerce',
    'work.case02.status': 'Entregue',
    'work.case02.title': 'Quilombo Doces',
    'work.case02.desc': 'E-commerce para gastronomia quilombola contemporânea. Identidade editorial forte, narrativa ancestral e catálogo de doces, licores e geleias artesanais.',
    'work.case02.link': 'Ver case →',
    'work.case02.tag1': 'Editorial',
    'work.case02.tag2': 'Artesanal',
    'work.case03.type': 'Site Institucional',
    'work.case03.status': 'Entregue',
    'work.case03.title': 'Coopmed Mogi',
    'work.case03.desc': 'Site institucional para cooperativa médica em Mogi das Cruzes. Tom sóbrio e confiável, hierarquia clara de especialidades e foco em credibilidade no setor de saúde.',
    'work.case03.link': 'Ver case →',
    'work.case03.tag1': 'Saúde',
    'work.case03.tag2': 'Cooperativa',
    'work.case05.type': 'Landing Page',
    'work.case05.status': 'Entregue',
    'work.case05.title': 'Mentoria Route',
    'work.case05.desc': 'Landing page para mentoria de desenvolvimento pessoal e alta performance, conduzida por Larissa Sayuri. Foco em conversão de inscrições e comunicação aspiracional alinhada à proposta da mentora.',
    'work.case05.link': 'Ver case →',
    'work.case05.tag1': 'Mentoria',
    'work.case05.tag2': 'Alta performance',
    'work.case01.hl': '+214 obras plotadas em mapa interativo · 36 páginas',
    'work.case02.hl': 'Loja própria · checkout no WhatsApp · sem mensalidade',
    'work.case05.hl': '100/100/100/100 no Google PageSpeed',
    'work.case06.type': 'Site Institucional · B2B',
    'work.case06.status': 'Entregue',
    'work.case06.title': 'Hidro-Sul',
    'work.case06.desc': 'Site institucional multipágina para soluções hidráulicas e manutenção predial. Foco em condomínios e parcerias B2B, com migração de domínio feita sem tirar o site do ar.',
    'work.case06.link': 'Ver case →',
    'work.case06.tag1': 'B2B',
    'work.case06.tag2': 'Manutenção predial',
    'work.case06.hl': 'Multipágina · deploy na Cloudflare',
    'work.case07.type': 'Marca Pessoal',
    'work.case07.status': 'Entregue',
    'work.case07.title': 'Daphine Santana',
    'work.case07.desc': 'Site de marca pessoal com página de links personalizada, indexação no Google e animações de rolagem. Uma presença digital própria, fora da dependência das redes sociais.',
    'work.case07.link': 'Ver case →',
    'work.case07.tag1': 'Marca pessoal',
    'work.case07.tag2': 'SEO',
    'work.case07.hl': 'Indexado no Google · página de links própria',

    'testi.title': 'O que dizem do trabalho',
    'testi.sub': 'Logo prova que o cliente existe. Depoimento prova que o trabalho funcionou.',
    'testi.q1': 'Cole aqui uma frase do cliente sobre o resultado — mais contatos, mais autoridade, a sensação de finalmente ter algo profissional no ar.',
    'testi.r1': 'ACES Electrical Services · EUA',
    'testi.q2': 'Cole aqui uma frase da Larissa sobre como a landing comunicou a mentoria e converteu inscrições.',
    'testi.r2': 'Mentoria Route',
    'testi.q3': 'Cole aqui uma frase do Caio sobre o site multipágina e a migração sem dor de cabeça.',
    'testi.r3': 'Hidro-Sul',
    'testi.q4': 'Trabalhar com você foi uma experiência excelente. Além de compreender exatamente o que eu queria transmitir com o site, você conseguiu transformar minhas ideias em algo muito mais profissional, bonito e funcional do que eu imaginava. O cuidado com os detalhes, a agilidade nas entregas e a disponibilidade durante todo o processo fizeram toda a diferença no resultado final.',
    'testi.r4': 'Psicomotricista',

    'cta.eyebrow': '→ próximo passo',
    'cta.title': 'Seu próximo projeto pode ser o próximo case aqui.',
    'cta.sub': 'Uma conversa de 30 minutos, sem custo e sem compromisso. Você sai dela sabendo o que podemos construir juntos.',
    'cta.btn1': 'Começar uma conversa',
    'cta.btn2': 'Chamar no WhatsApp',

    'process.title': 'Como a gente trabalha junto',
    'process.s1.title': 'Conversa',
    'process.s1.desc': 'Entendo seu negócio, seus objetivos e onde você quer chegar. Sem briefing genérico.',
    'process.s1.meta': '~ 30 min · sem custo',
    'process.s2.title': 'Proposta',
    'process.s2.desc': 'Escopo claro, prazo realista, valor fechado. Sem surpresa no meio do caminho.',
    'process.s2.meta': 'até 2 dias úteis',
    'process.s3.title': 'Construção',
    'process.s3.desc': 'Trabalho com transparência total: você acompanha o progresso e dá feedback nos pontos certos.',
    'process.s3.meta': '1 a 6 semanas',
    'process.s4.title': 'Entrega e suporte',
    'process.s4.desc': 'Site no ar, treinamento de uso (se precisar) e suporte pós-entrega pra você não ficar na mão.',
    'process.s4.meta': '+ 30 dias de suporte',

    'about.title': 'Oi, tudo bem?',
    'about.lead': 'Eu sou o <strong>Yuri</strong>, mas pode me chamar de <strong>Chibo</strong>.',
    'about.p1': 'Sou desenvolvedor front-end e web designer, e trabalho com uma ideia simples: site não é vitrine, é ferramenta de trabalho. A maioria dos sites por aí existe só pra "ter um site", e isso desperdiça uma das ferramentas mais poderosas que um negócio pode ter.',
    'about.p2': 'O que eu faço é construir presença digital que <em>trabalha pelo seu negócio</em>. Sites que carregam rápido, comunicam bem, são fáceis de manter e, principalmente, geram resultado. Hoje atendo clientes no Brasil e nos Estados Unidos, em português e em inglês.',
    'about.p3': 'Se você chegou até aqui, provavelmente tá pensando em mexer no seu digital. Bora conversar.',
    'about.cta': 'Falar com Chibo no WhatsApp',
    'about.tag1': 'Dev front-end',
    'about.tag2': 'Web designer',
    'about.tag3': 'SEO',
    'about.tag4': 'UX',

    'faq.title': 'Dúvidas frequentes',
    'faq.q1': 'Quanto tempo leva pra ficar pronto?',
    'faq.a1': 'Depende do escopo. Uma landing page bem feita leva de 1 a 3 semanas. Um site institucional, de 3 a 6. Projetos maiores a gente alinha tudo na proposta, sem surpresa no caminho.',
    'faq.q2': 'Quanto custa?',
    'faq.a2': 'O orçamento é sob medida porque cada projeto tem um escopo diferente. Me conta o que você tá pensando e eu te mando uma proposta clara em até 2 dias úteis.',
    'faq.q3': 'Você usa template ou faz do zero?',
    'faq.a3': 'Faço do zero, alinhado com a identidade do seu negócio. Template é caminho fácil pra ficar parecido com todo mundo, e isso é o oposto do que eu faço.',
    'faq.q5': 'E depois que o site fica pronto?',
    'faq.a5': 'Ofereço suporte pós-entrega e planos de manutenção. Você não fica na mão.',
    'faq.q6': 'Você faz e-commerce ou site de agendamento?',
    'faq.a6': 'Hoje meu foco total é em sites institucionais, landing pages e marca pessoal, é onde eu entrego o melhor resultado. Loja virtual e sistema de agendamento estão no meu radar pra breve. Se é isso que você precisa, me chama mesmo assim que a gente conversa.',

    'contact.title1': 'Vamos construir',
    'contact.title2': ' algo bom',
    'contact.title3': ' juntos.',
    'contact.sub': 'Me conta sobre seu projeto. Respondo em até 24h.',
    'contact.assure1': 'Escopo, prazo e valor fechados antes de começar',
    'contact.assure2': '30 dias de suporte inclusos após a entrega',
    'contact.assure3': 'Resposta em até 24h, sempre com uma pessoa de verdade',

    'form.name': 'Nome',
    'form.email': 'E-mail',
    'form.msg': 'Me conta sua ideia',
    'form.submit': 'Enviar mensagem',
    'form.sending': 'Enviando…',
    'form.success': 'Mensagem enviada! Respondo em até 24h.',
    'form.error': 'Algo deu errado. Tenta de novo ou me chama no WhatsApp.',

    'footer.tagline': 'Bonito vende, funcional converte<br>e eu faço os dois.',
    'footer.nav': 'Navegação',
    'footer.contact': 'Contato',
    'footer.legal': 'Políticas e termos',
    'footer.copyright': '© 2026 Chibo Dev · Yuri Chiba · São Paulo, Brasil · Todos os direitos reservados',
    'footer.lang': 'Idiomas',
    'footer.langs': 'Português · Inglês',
    'footer.made': 'Feito com muito café.',
    'footer.privacy': 'Política de Privacidade',
    'footer.cookies': 'Política de Cookies',
    'footer.terms': 'Termos de Uso',
    'footer.prefs': 'Preferências de cookies',

    'modal.placeholder': 'substituir por screenshot',
    'modal.context': 'Contexto',
    'modal.delivery': 'O que foi feito',
    'modal.cta1': 'Ver site ao vivo',
    'modal.cta2': 'Quero algo parecido',
    'modal.noLive': 'Site indisponível',
  },

  en: {
    'nav.services': 'Services',
    'nav.work': 'Work',
    'nav.process': 'Process',
    'nav.about': 'About',
    'nav.home': 'Home',
    'nav.cta': 'Start a project',

    'hero.status': 'Available for new projects',
    'hero.line1': 'Websites built from scratch',
    'hero.line2a': 'that deliver',
    'hero.line2b': ' results',
    'hero.sub': "Beautiful sells, functional converts, and I do both. Custom-built for those who want to be taken seriously.",
    'hero.cta1': "Let's talk about your project",
    'hero.cta2': 'See work',
    'hero.scroll': 'scroll',
    'hero.stat1': 'projects shipped',
    'hero.stat2': 'countries served',
    'hero.stat3': 'from scratch, no templates',
    'hero.pill1': '→ results',
    'hero.pill2': '★ lots of coffee',
    'hero.pill3': '{ clean code }',
    'hero.pill4': '+ speed',

    'logos.title': 'Trusted by',

    'services.title': 'What I do',
    'services.lp.title': 'Landing pages that convert',
    'services.lp.desc': 'Pages focused on a single goal: generate leads, sell a product, launch a campaign. Structure, copy and design built to make visitors act.',
    'services.lp.tag1': 'Conversion',
    'services.lp.tag2': 'Copy',
    'services.lp.tag3': 'Performance',
    'services.inst.title': 'Company websites that sell for you',
    'services.inst.desc': 'A digital presence that communicates authority and closes deals while you sleep. Performance, technical SEO and identity aligned with your brand.',
    'services.inst.tag1': 'Authority',
    'services.inst.tag2': 'SEO',
    'services.inst.tag3': 'Identity',
    'services.brand.title': 'Personal brand websites',
    'services.brand.desc': "For creators and professionals who want a presence of their own, off the feeds — easy to find on Google, with a links page on your domain.",
    'services.brand.tag1': 'Portfolio',
    'services.brand.tag2': 'Links',
    'services.brand.tag3': 'SEO',

    'work.title': 'Recent work',
    'work.case01.type': 'Company Website · USA',
    'work.case01.status': 'Live',
    'work.case01.title': 'ACES Electrical Services',
    'work.case01.desc': 'Bilingual company website for a U.S. electrical contractor. Direct messaging, focus on B2B conversion and recruitment for the commercial and residential teams.',
    'work.case01.link': 'View case →',
    'work.case01.tag1': 'Bilingual',
    'work.case01.tag2': 'B2B',
    'work.case01.tag3': 'Construction',
    'work.case02.type': 'E-commerce',
    'work.case02.status': 'Live',
    'work.case02.title': 'Quilombo Doces',
    'work.case02.desc': 'E-commerce for contemporary quilombola gastronomy. Strong editorial identity, ancestral storytelling and a catalog of artisanal sweets, liqueurs and jams.',
    'work.case02.link': 'View case →',
    'work.case02.tag1': 'Editorial',
    'work.case02.tag2': 'Artisanal',
    'work.case03.type': 'Company Website',
    'work.case03.status': 'Live',
    'work.case03.title': 'Coopmed Mogi',
    'work.case03.desc': "Company website for a medical cooperative in Mogi das Cruzes. Sober, trustworthy tone, clear hierarchy of specialties and focus on credibility in the healthcare sector.",
    'work.case03.link': 'View case →',
    'work.case03.tag1': 'Healthcare',
    'work.case03.tag2': 'Cooperative',
    'work.case05.type': 'Landing Page',
    'work.case05.status': 'Live',
    'work.case05.title': 'Mentoria Route',
    'work.case05.desc': 'Landing page for a personal development and high-performance mentorship led by Larissa Sayuri. Focused on enrollment conversion and aspirational messaging aligned with the mentor proposal.',
    'work.case05.link': 'View case →',
    'work.case05.tag1': 'Mentorship',
    'work.case05.tag2': 'High performance',
    'work.case01.hl': '+214 projects plotted on an interactive map · 36 pages',
    'work.case02.hl': 'Own store · WhatsApp checkout · no monthly fee',
    'work.case05.hl': '100/100/100/100 on Google PageSpeed',
    'work.case06.type': 'Company Website · B2B',
    'work.case06.status': 'Live',
    'work.case06.title': 'Hidro-Sul',
    'work.case06.desc': 'Multi-page company website for hydraulic solutions and building maintenance. Focused on condominiums and B2B partnerships, with a domain migration done without taking the site offline.',
    'work.case06.link': 'View case →',
    'work.case06.tag1': 'B2B',
    'work.case06.tag2': 'Building maintenance',
    'work.case06.hl': 'Multi-page · deployed on Cloudflare',
    'work.case07.type': 'Personal Brand',
    'work.case07.status': 'Live',
    'work.case07.title': 'Daphine Santana',
    'work.case07.desc': 'Personal brand website with a custom links page, Google indexing and scroll animations. A digital presence of her own, free from depending on social media.',
    'work.case07.link': 'View case →',
    'work.case07.tag1': 'Personal brand',
    'work.case07.tag2': 'SEO',
    'work.case07.hl': 'Indexed on Google · own links page',

    'testi.title': 'What people say about the work',
    'testi.sub': 'A logo proves the client exists. A testimonial proves the work paid off.',
    'testi.q1': "Paste a client sentence here about the result — more leads, more authority, the feeling of finally having something professional online.",
    'testi.r1': 'ACES Electrical Services · USA',
    'testi.q2': 'Paste a sentence from Larissa here about how the landing page communicated the mentorship and converted sign-ups.',
    'testi.r2': 'Mentoria Route',
    'testi.q3': 'Paste a sentence from Caio here about the multi-page site and the hassle-free migration.',
    'testi.r3': 'Hidro-Sul',
    'testi.q4': "Working with you was an excellent experience. Beyond understanding exactly what I wanted to convey with the site, you turned my ideas into something far more professional, beautiful and functional than I had imagined. The attention to detail, the fast turnaround and your availability throughout the whole process made all the difference in the final result.",
    'testi.r4': 'Psychomotricity specialist',

    'cta.eyebrow': '→ next step',
    'cta.title': 'Your next project could be the next case here.',
    'cta.sub': "A 30-minute conversation, free and with no strings attached. You'll leave it knowing what we can build together.",
    'cta.btn1': 'Start a conversation',
    'cta.btn2': 'Message on WhatsApp',

    'process.title': 'How we work together',
    'process.s1.title': 'Conversation',
    'process.s1.desc': "I get to know your business, your goals and where you want to go. No generic briefing.",
    'process.s1.meta': '~ 30 min · free',
    'process.s2.title': 'Proposal',
    'process.s2.desc': 'Clear scope, realistic timeline, fixed price. No mid-project surprises.',
    'process.s2.meta': 'within 2 business days',
    'process.s3.title': 'Build',
    'process.s3.desc': "Full transparency: you follow the progress and give feedback at the right points.",
    'process.s3.meta': '1 to 6 weeks',
    'process.s4.title': 'Launch & support',
    'process.s4.desc': "Site goes live, training (if needed) and post-launch support — you're never left on your own.",
    'process.s4.meta': '+ 30 days support',

    'about.title': 'Hi, how are you?',
    'about.lead': "I'm <strong>Yuri</strong>, but you can call me <strong>Chibo</strong>.",
    'about.p1': "I'm a front-end developer and web designer, and I work from a simple idea: a website isn't a showcase, it's a working tool. Most sites out there exist just to exist, and that wastes one of the most powerful tools a business can have.",
    'about.p2': "What I do is build a digital presence that <em>works for your business</em>. Sites that load fast, communicate clearly, are easy to maintain and, above all, deliver results. Today I work with clients in Brazil and the United States, in Portuguese and English.",
    'about.p3': "If you made it this far, you're probably thinking about reworking your digital presence. Let's talk.",
    'about.cta': 'Message Chibo on WhatsApp',
    'about.tag1': 'Front-end dev',
    'about.tag2': 'Web designer',
    'about.tag3': 'SEO',
    'about.tag4': 'UX',

    'faq.title': 'Frequently asked questions',
    'faq.q1': 'How long does it take?',
    'faq.a1': 'Depends on scope. A well-made landing page takes 1–3 weeks. A company website, 3–6 weeks. Larger projects are all aligned in the proposal, with no surprises along the way.',
    'faq.q2': 'How much does it cost?',
    'faq.a2': "The price is custom because every project has a different scope. Tell me what you have in mind and I'll send you a clear proposal within 2 business days.",
    'faq.q3': 'Do you use templates or build from scratch?',
    'faq.a3': "I build from scratch, aligned with your brand identity. Templates are the easy way to look like everyone else, and that's the opposite of what I do.",
    'faq.q5': "What happens after the site is done?",
    'faq.a5': "I offer post-launch support and maintenance plans. You're never left on your own.",
    'faq.q6': 'Do you build e-commerce or booking sites?',
    'faq.a6': "Right now my full focus is on company websites, landing pages and personal brands, that's where I deliver the best results. Online stores and booking systems are on my radar for soon. If that's what you need, reach out anyway and let's talk.",

    'contact.title1': "Let's build",
    'contact.title2': ' something good',
    'contact.title3': ' together.',
    'contact.sub': "Tell me about your project. I reply within 24h.",
    'contact.assure1': 'Scope, timeline and price locked in before we start',
    'contact.assure2': '30 days of support included after launch',
    'contact.assure3': 'A reply within 24h — always from a real person',

    'form.name': 'Name',
    'form.email': 'Email',
    'form.msg': 'Tell me your idea',
    'form.submit': 'Send message',
    'form.sending': 'Sending…',
    'form.success': "Message sent! I'll reply within 24h.",
    'form.error': 'Something went wrong. Try again or message me on WhatsApp.',

    'footer.tagline': 'Beautiful sells, functional converts,<br>and I do both.',
    'footer.nav': 'Navigation',
    'footer.contact': 'Contact',
    'footer.legal': 'Policies & terms',
    'footer.copyright': '© 2026 Chibo Dev · Yuri Chiba · São Paulo, Brazil · All rights reserved',
    'footer.lang': 'Languages',
    'footer.langs': 'Portuguese · English',
    'footer.made': 'Made with lots of coffee.',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Policy',
    'footer.terms': 'Terms of Use',
    'footer.prefs': 'Cookie preferences',

    'modal.placeholder': 'replace with screenshot',
    'modal.context': 'Context',
    'modal.delivery': 'What was done',
    'modal.cta1': 'See it live',
    'modal.cta2': 'I want something like this',
    'modal.noLive': 'Site unavailable',
  }
};

/* -------- Case data (contexto + entregáveis por projeto e idioma) -------- */
const caseData = {
  aces: {
    pt: {
      context: 'A ACES é uma empreiteira elétrica norte-americana que atua nos setores comercial e residencial. O desafio era construir uma presença digital que comunicasse confiança, expertise técnica e capacidade de execução para clientes B2B nos EUA — ao mesmo tempo em que servisse como porta de entrada para captação de novos talentos.',
      delivery: [
        'Site institucional bilíngue (inglês como idioma principal)',
        'Hero com imagem real do time em ação e CTA direto pra contato',
        'Páginas separadas para serviços comerciais e residenciais',
        'Seção de carreiras integrada para captação de talentos',
        'Layout responsivo com performance otimizada'
      ]
    },
    en: {
      context: 'ACES is a U.S. electrical contractor working in both commercial and residential sectors. The challenge was to build a digital presence that communicates trust, technical expertise and delivery capacity to B2B clients in the U.S. — while also serving as an entry point for recruiting new talent.',
      delivery: [
        'Bilingual company website (English as primary language)',
        'Hero with real photo of the team at work and a direct contact CTA',
        'Separate pages for commercial and residential services',
        'Integrated careers section for talent acquisition',
        'Responsive layout with optimized performance'
      ]
    }
  },
  quilombo: {
    pt: {
      context: 'A Quilombo Doces é um e-commerce de gastronomia quilombola contemporânea. Cada produto carrega memória, identidade e o afeto das mulheres do quilombo. O desafio era construir uma loja virtual que vendesse não só produto, mas a história e a ancestralidade por trás dele.',
      delivery: [
        'E-commerce com identidade editorial forte e tipografia expressiva',
        'Catálogo de doces, licores, geleias e biscoitos artesanais',
        'Sistema de kits e categorias corporativas',
        'Página "Nossa História" com narrativa imersiva',
        'Carrinho integrado e fluxo de checkout simplificado'
      ]
    },
    en: {
      context: 'Quilombo Doces is an e-commerce of contemporary quilombola gastronomy. Each product carries memory, identity and the affection of the women from the quilombo. The challenge was to build an online store that sells not only products, but the history and ancestry behind them.',
      delivery: [
        'E-commerce with strong editorial identity and expressive typography',
        'Catalog of artisanal sweets, liqueurs, jams and biscuits',
        'Kits system and corporate categories',
        'Immersive "Our Story" page',
        'Integrated cart and simplified checkout flow'
      ]
    }
  },
  coopmed: {
    pt: {
      context: 'A Coopmed Mogi é uma cooperativa médica em Mogi das Cruzes, dedicada a oferecer cuidado humanizado por profissionais especializados. O desafio era construir um site institucional que transmitisse credibilidade no setor de saúde, sem perder a humanidade que diferencia uma cooperativa de uma rede tradicional.',
      delivery: [
        'Site institucional com tom sóbrio e confiável',
        'Hierarquia clara das especialidades médicas',
        'Páginas de "Quem Somos" e "Onde Atuamos"',
        'Identidade visual alinhada com o setor de saúde',
        'Estrutura preparada para captação de pacientes e cooperados'
      ]
    },
    en: {
      context: 'Coopmed Mogi is a medical cooperative in Mogi das Cruzes, dedicated to providing humanized care through specialized professionals. The challenge was to build a company website that conveys credibility in the healthcare sector without losing the humanity that sets a cooperative apart from a traditional network.',
      delivery: [
        'Company website with a sober, trustworthy tone',
        'Clear hierarchy of medical specialties',
        '"About Us" and "Where We Operate" pages',
        'Visual identity aligned with the healthcare sector',
        'Structure ready to attract patients and cooperative members'
      ]
    }
  },
  route: {
    pt: {
      context: 'A Mentoria Route é uma mentoria de desenvolvimento pessoal e alta performance, conduzida pela Larissa Sayuri. O desafio era criar uma landing page que comunicasse autoridade da mentora, gerasse desejo na audiência certa e convertesse em inscrições — sem cair no clichê visual de coach.',
      delivery: [
        'Landing page única com fluxo focado em conversão',
        'Hero aspiracional com posicionamento claro da mentora',
        'Seções de transformação, método e depoimentos',
        'Formulário de inscrição com validação',
        'Comunicação alinhada à proposta de alta performance'
      ]
    },
    en: {
      context: 'Mentoria Route is a personal development and high-performance mentorship led by Larissa Sayuri. The challenge was to create a landing page that conveys the mentor authority, generates desire in the right audience and converts to enrollments — without falling into the visual cliché of coach branding.',
      delivery: [
        'Single landing page with conversion-focused flow',
        'Aspirational hero with clear positioning of the mentor',
        'Sections for transformation, method and testimonials',
        'Enrollment form with validation',
        'Messaging aligned with the high-performance proposal'
      ]
    }
  },
  hidrosul: {
    pt: {
      context: 'A Hidro-Sul é uma empresa de soluções hidráulicas e manutenção predial que atende principalmente condomínios e parcerias B2B. O desafio era organizar uma operação com vários serviços distintos em um site institucional claro, que transmitisse confiança técnica e facilitasse o contato — além de migrar o domínio sem deixar o site fora do ar.',
      delivery: [
        'Site institucional multipágina (condomínios, B2B, reformas e manutenção)',
        'Arquitetura de CSS própria, com sistema de componentes reaproveitáveis',
        'Ilustrações em SVG com estética de planta baixa / blueprint',
        'Páginas legais e formulário de contato',
        'Migração de DNS para a Cloudflare preservando os e-mails do Google Workspace',
        'Deploy na Cloudflare Pages'
      ]
    },
    en: {
      context: 'Hidro-Sul is a hydraulic solutions and building maintenance company that mainly serves condominiums and B2B partnerships. The challenge was to organize an operation with several distinct services into a clear company website that conveys technical trust and makes contact easy — plus migrating the domain without taking the site offline.',
      delivery: [
        'Multi-page company website (condominiums, B2B, renovations and maintenance)',
        'Custom CSS architecture with a reusable component system',
        'SVG illustrations with a blueprint aesthetic',
        'Legal pages and contact form',
        'DNS migration to Cloudflare preserving Google Workspace email',
        'Deployed on Cloudflare Pages'
      ]
    }
  },
  daphine: {
    pt: {
      context: 'A Daphine queria uma presença digital própria, que não dependesse apenas das redes sociais. O desafio era criar um site de marca pessoal enxuto e rápido, com uma página de links personalizada e bem indexada no Google, servindo como ponto central de contato e divulgação.',
      delivery: [
        'Site de marca pessoal com identidade própria',
        'Página de links personalizada, no domínio próprio',
        'Indexação no Google via Search Console',
        'Sitemap e robots.txt configurados',
        'Animações de revelação no scroll'
      ]
    },
    en: {
      context: 'Daphine wanted a digital presence of her own, not dependent solely on social media. The challenge was to create a lean, fast personal brand website with a custom links page, well indexed on Google, serving as the central point for contact and promotion.',
      delivery: [
        'Personal brand website with its own identity',
        'Custom links page on her own domain',
        'Google indexing via Search Console',
        'Sitemap and robots.txt configured',
        'Scroll-reveal animations'
      ]
    }
  }
};


const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  try { localStorage.setItem('chibo-theme', theme); } catch(e) {}
}

function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem('chibo-theme'); } catch(e) {}
  if (saved) { applyTheme(saved); return; }
  applyTheme('dark'); // padrão fixo: dark; o toggle ainda permite trocar pra light
}

themeToggle?.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

/* -------- Language -------- */
const langToggle = document.getElementById('langToggle');
const langOpts = document.querySelectorAll('.lang-toggle__opt');

function applyLang(lang) {
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = translations[lang]?.[key];
    if (text !== undefined) {
      // Permite HTML em algumas chaves
      if (text.includes('<')) el.innerHTML = text;
      else el.textContent = text;
    }
  });
  // Marcar a op\u00e7\u00e3o ativa visualmente, mantendo posi\u00e7\u00f5es fixas
  langOpts.forEach(opt => {
    opt.classList.toggle('is-active', opt.dataset.lang === lang);
  });
  try { localStorage.setItem('chibo-lang', lang); } catch(e) {}

  // Se modal estiver aberto, reabrir com idioma novo
  if (caseModal && !caseModal.hidden) {
    const openId = caseModal.dataset.openId;
    if (openId) {
      setTimeout(() => openCaseModal(openId), 50);
    }
  }
}

function initLang() {
  let saved = null;
  try { saved = localStorage.getItem('chibo-lang'); } catch(e) {}
  if (saved) { applyLang(saved); return; }
  const browserLang = (navigator.language || 'pt').toLowerCase();
  applyLang(browserLang.startsWith('pt') ? 'pt' : 'en');
}

langToggle?.addEventListener('click', () => {
  const current = document.documentElement.lang.startsWith('pt') ? 'pt' : 'en';
  applyLang(current === 'pt' ? 'en' : 'pt');
});

/* -------- Header sticky shadow -------- */
const header = document.getElementById('header');
function updateHeader() {
  if (!header) return;
  if (window.scrollY > 20) header.classList.add('is-scrolled');
  else header.classList.remove('is-scrolled');
}
window.addEventListener('scroll', updateHeader, { passive: true });

/* -------- Reveal on scroll -------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

document.querySelectorAll(
  '.service, .case, .step, .faq__item, .section-head, .channel, .logo-placeholder, .testimonial'
).forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

/* -------- Process: animação de progresso ativa no scroll -------- */
const processProgress = document.getElementById('processProgress');
const steps = document.querySelectorAll('.step');

function updateProcessProgress() {
  if (!steps.length || !processProgress) return;

  const processSection = document.querySelector('.process__list');
  if (!processSection) return;

  const rect = processSection.getBoundingClientRect();
  const viewportH = window.innerHeight;

  // Começa a preencher assim que a seção entra (topo a 80% da tela) e completa
  // quando ela chega ao centro da tela. Antes era 70%→30%, o que só enchia
  // tudo bem no fim do scroll.
  const start = viewportH * 0.8;
  const end = viewportH * 0.5;

  let progress = 0;
  if (rect.top <= start && rect.bottom >= end) {
    const total = start - end;
    const current = start - rect.top;
    progress = Math.max(0, Math.min(1, current / total));
  } else if (rect.top < end) {
    progress = 1;
  }

  // Atualiza barra de progresso
  processProgress.style.width = (progress * 100) + '%';

  // A linha agora termina no 04, com os nós equidistantes (0, 1/3, 2/3, 1).
  // Cada nó acende quando o preenchimento chega NELE — sincronizado com a linha.
  const last = steps.length - 1;
  let activeIdx = 0;
  for (let i = 0; i < steps.length; i++) {
    if (progress >= (last ? i / last : 0) - 0.001) activeIdx = i;
  }
  steps.forEach((step, idx) => {
    step.classList.toggle('is-passed', idx < activeIdx);
    step.classList.toggle('is-active', idx === activeIdx);
  });
}

window.addEventListener('scroll', updateProcessProgress, { passive: true });
window.addEventListener('resize', updateProcessProgress, { passive: true });
updateProcessProgress();

/* -------- Process: linha termina no centro do círculo 04 (ancorada no nó) -------- */
function layoutProcessTrack() {
  const wrap = document.querySelector('.process__wrap');
  const track = document.querySelector('.process__track');
  const lastNum = document.querySelector('.process__list .step:last-child .step__num');
  if (!wrap || !track || !lastNum) return;
  // Em telas onde a track some (tablet/mobile), deixa o CSS no controle.
  if (getComputedStyle(track).display === 'none') { track.style.right = ''; return; }
  const wrapRect = wrap.getBoundingClientRect();
  const numRect = lastNum.getBoundingClientRect();
  const centerX = numRect.left + numRect.width / 2 - wrapRect.left;
  track.style.right = Math.max(0, wrapRect.width - centerX) + 'px';
}
window.addEventListener('load', layoutProcessTrack, { passive: true });
window.addEventListener('resize', layoutProcessTrack, { passive: true });
layoutProcessTrack();

/* -------- Form submit (Web3Forms) -------- */
// Cole sua access key do Web3Forms aqui (https://web3forms.com).
// Enquanto estiver com o valor padrão, o envio é bloqueado e avisa no console.
const WEB3FORMS_KEY = 'COLE_SUA_ACCESS_KEY_AQUI';

const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const formSubmit = document.getElementById('contactSubmit');

function currentLang() {
  return document.documentElement.lang.startsWith('pt') ? 'pt' : 'en';
}
function t(key) {
  const lang = currentLang();
  return (translations[lang] && translations[lang][key]) || '';
}
function setFormStatus(key, kind) {
  if (!formStatus) return;
  formStatus.textContent = t(key);
  formStatus.classList.remove('form__status--ok', 'form__status--err');
  if (kind) formStatus.classList.add('form__status--' + kind);
  formStatus.hidden = false;
}
function setSubmitting(isSubmitting) {
  if (!formSubmit) return;
  formSubmit.disabled = isSubmitting;
  const label = formSubmit.querySelector('[data-i18n="form.submit"]');
  if (label) label.textContent = isSubmitting ? t('form.sending') : t('form.submit');
}

form?.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Honeypot: bot preencheu o campo escondido — finge sucesso e ignora
  if (form.querySelector('[name="botcheck"]')?.checked) {
    setFormStatus('form.success', 'ok');
    form.reset();
    return;
  }

  // Validação nativa (o form usa novalidate, então disparamos manualmente)
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  if (WEB3FORMS_KEY === 'COLE_SUA_ACCESS_KEY_AQUI') {
    console.warn('[Chibo Dev] Defina WEB3FORMS_KEY em main.js para ativar o formulário.');
    setFormStatus('form.error', 'err');
    return;
  }

  const payload = new FormData(form);
  payload.append('access_key', WEB3FORMS_KEY);
  payload.append('subject', 'Novo contato pelo site — Chibo Dev');
  payload.append('from_name', 'Site Chibo Dev');

  setSubmitting(true);
  setFormStatus('form.sending', null);

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: payload
    });
    const data = await res.json();
    if (res.ok && data.success) {
      setFormStatus('form.success', 'ok');
      form.reset();
    } else {
      setFormStatus('form.error', 'err');
    }
  } catch (err) {
    setFormStatus('form.error', 'err');
  } finally {
    setSubmitting(false);
  }
});

/* -------- Modal de case detail -------- */
const caseModal = document.getElementById('caseModal');
const modalType = document.getElementById('modalType');
const modalStatus = document.getElementById('modalStatus');
const modalTitleEl = document.getElementById('caseModalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalTags = document.getElementById('modalTags');
const modalDevices = document.getElementById('modalDevices');
const modalVideo = document.getElementById('modalVideo');
const modalVideoWrap = document.getElementById('modalVideoWrap');
const modalContext = document.getElementById('modalContext');
const modalDelivery = document.getElementById('modalDelivery');
const modalLiveLink = document.getElementById('modalLiveLink');

let lastFocusedEl = null;

// Detecta tipo de vídeo e gera o embed correto
function buildVideoEmbed(videoUrl) {
  if (!videoUrl) return '';

  // YouTube
  const ytMatch = videoUrl.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]+)/);
  if (ytMatch) {
    return `<iframe src="https://www.youtube.com/embed/${ytMatch[1]}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }

  // Vimeo
  const vimeoMatch = videoUrl.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) {
    return `<iframe src="https://player.vimeo.com/video/${vimeoMatch[1]}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
  }

  // MP4 ou outro vídeo direto
  if (/\.(mp4|webm|ogg)$/i.test(videoUrl)) {
    return `<video src="${videoUrl}" controls preload="metadata"></video>`;
  }

  // Fallback: trata como iframe genérico
  return `<iframe src="${videoUrl}" allowfullscreen></iframe>`;
}

// Clona os devices do próprio card pra dentro do modal
function cloneDevicesFromCard(caseEl) {
  const sourceMockup = caseEl.querySelector('.device-mockup');
  if (!sourceMockup) return;

  const clone = sourceMockup.cloneNode(true);
  // Garantir variante featured no modal sempre
  clone.classList.add('device-mockup--featured');

  modalDevices.innerHTML = '';
  modalDevices.appendChild(clone);
}

function openCaseModal(caseId) {
  const caseEl = document.querySelector(`[data-case-id="${caseId}"]`);
  if (!caseEl) return;

  const lang = document.documentElement.lang.startsWith('pt') ? 'pt' : 'en';
  const data = caseData[caseId]?.[lang];
  if (!data) return;

  // Preencher header
  modalType.textContent = caseEl.querySelector('.case__type')?.textContent || '';
  const sourceStatus = caseEl.querySelector('.case__status');
  modalStatus.textContent = sourceStatus?.textContent || '';
  modalStatus.className = 'modal__status' + (sourceStatus?.classList.contains('case__status--featured') ? ' is-featured' : '');

  modalTitleEl.textContent = caseEl.querySelector('.case__title')?.textContent || '';
  modalDesc.textContent = caseEl.querySelector('.case__desc')?.textContent.trim() || '';

  // Tags
  modalTags.innerHTML = '';
  caseEl.querySelectorAll('.case__tags span').forEach(tag => {
    const newTag = document.createElement('span');
    newTag.textContent = tag.textContent;
    modalTags.appendChild(newTag);
  });

  // Devices (clone do card)
  cloneDevicesFromCard(caseEl);

  // Vídeo
  const videoUrl = caseEl.dataset.caseVideo;
  if (videoUrl && videoUrl.trim()) {
    modalVideoWrap.innerHTML = buildVideoEmbed(videoUrl.trim());
    modalVideo.hidden = false;
  } else {
    modalVideoWrap.innerHTML = '';
    modalVideo.hidden = true;
  }

  // Contexto + entregáveis
  modalContext.textContent = data.context;
  modalDelivery.innerHTML = '';
  data.delivery.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    modalDelivery.appendChild(li);
  });

  // Live link
  const liveUrl = caseEl.dataset.caseUrl;
  if (liveUrl && liveUrl.trim()) {
    modalLiveLink.href = liveUrl;
    modalLiveLink.style.display = '';
  } else {
    modalLiveLink.style.display = 'none';
  }

  // Abrir modal
  lastFocusedEl = document.activeElement;
  caseModal.hidden = false;
  caseModal.setAttribute('aria-hidden', 'false');
  caseModal.dataset.openId = caseId;
  document.body.classList.add('is-modal-open');

  // Foco no botão fechar (mais acessível)
  setTimeout(() => caseModal.querySelector('.modal__close')?.focus(), 100);
}

function closeCaseModal() {
  if (caseModal.hidden) return;
  caseModal.hidden = true;
  caseModal.setAttribute('aria-hidden', 'true');
  delete caseModal.dataset.openId;
  document.body.classList.remove('is-modal-open');

  // Limpar vídeo pra parar a reprodução
  modalVideoWrap.innerHTML = '';
  modalVideo.hidden = true;

  // Restaurar foco
  if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') {
    lastFocusedEl.focus();
  }
}

// Wire up: botões de abrir
document.querySelectorAll('[data-case-open]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    openCaseModal(btn.getAttribute('data-case-open'));
  });
});

// Wire up: clicar no card inteiro também abre (UX melhor)
document.querySelectorAll('[data-case]').forEach(card => {
  card.addEventListener('click', (e) => {
    // Não abrir se clicar em link/botão dentro do card
    if (e.target.closest('a, button')) return;
    const id = card.getAttribute('data-case-id');
    if (id) openCaseModal(id);
  });
});

// Wire up: fechar
document.querySelectorAll('[data-modal-close]').forEach(el => {
  el.addEventListener('click', closeCaseModal);
});

// Wire up: ESC fecha
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && caseModal && !caseModal.hidden) {
    closeCaseModal();
  }
});


/* -------- Init -------- */
initTheme();
initLang();
updateHeader();


/* -------- FAQ: accordion com animação de altura -------- */
(function () {
  var items = document.querySelectorAll('.faq__item');
  if (!items.length) return;
  // Quem prefere menos movimento (ou se o JS não rodar): <details> abre/fecha
  // nativo, texto visível e ícone girando via [open]. Sem flash de layout aqui.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  items.forEach(function (item) {
    var summary = item.querySelector('summary');
    var answer = item.querySelector('.faq__answer');
    if (!summary || !answer) return;
    var p = answer.querySelector('p');

    summary.addEventListener('click', function (e) {
      e.preventDefault();
      if (item.dataset.animating) return;
      item.dataset.animating = '1';
      var closing = item.open;

      var onEnd = function (ev) {
        if (ev.target !== answer || ev.propertyName !== 'height') return;
        answer.removeEventListener('transitionend', onEnd);
        answer.style.height = '';
        if (p) { p.style.opacity = ''; p.style.transform = ''; }
        delete item.dataset.animating;
        if (closing) item.open = false; // ícone volta a + ao terminar de fechar
      };
      answer.addEventListener('transitionend', onEnd);

      if (!closing) {
        item.open = true; // ícone gira pra − na hora; conteúdo passa a renderizar
        var h = answer.scrollHeight;
        answer.style.height = '0px';
        if (p) { p.style.opacity = '0'; p.style.transform = 'translateY(6px)'; }
        answer.offsetHeight; // reflow: fixa o ponto de partida
        answer.style.height = h + 'px';
        if (p) { p.style.opacity = '1'; p.style.transform = 'translateY(0)'; }
      } else {
        answer.style.height = answer.scrollHeight + 'px';
        answer.offsetHeight; // reflow
        answer.style.height = '0px';
        if (p) { p.style.opacity = '0'; p.style.transform = 'translateY(6px)'; }
      }
    });
  });
})();


/* -------- Depoimentos: carrossel (scroll-snap + setas) -------- */
(function () {
  var track = document.getElementById('testiTrack');
  var controls = document.getElementById('testiControls');
  if (!track || !controls) return;
  var prev = controls.querySelector('[data-testi="prev"]');
  var next = controls.querySelector('[data-testi="next"]');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function pageWidth() {
    var card = track.querySelector('.testimonial');
    if (!card) return track.clientWidth;
    var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    var cardStep = card.offsetWidth + gap;
    // quantos cards completos cabem na área visível (3 / 2 / 1 conforme a tela)
    var perPage = Math.max(1, Math.round((track.clientWidth + gap) / cardStep));
    return perPage * cardStep;
  }
  function update() {
    var max = track.scrollWidth - track.clientWidth - 1;
    var overflowing = track.scrollWidth > track.clientWidth + 1;
    controls.style.display = overflowing ? '' : 'none';
    if (prev) prev.disabled = track.scrollLeft <= 0;
    if (next) next.disabled = track.scrollLeft >= max;
  }
  function go(dir) {
    track.scrollBy({ left: dir * pageWidth(), behavior: reduce ? 'auto' : 'smooth' });
  }
  if (prev) prev.addEventListener('click', function () { go(-1); });
  if (next) next.addEventListener('click', function () { go(1); });
  track.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  window.addEventListener('load', update);
  update();
})();


/* ==========================================================
   PÁGINAS LEGAIS · índice (accordion + scroll-spy) e voltar ao topo
   No-op em páginas sem esses elementos (ex.: index). Tema e header
   sticky já são tratados acima (mesmos ids em todas as páginas).
   ========================================================== */
(function () {
  'use strict';
  var toc = document.querySelector('.legal-toc');
  var tocTitle = toc && toc.querySelector('.legal-toc__title');
  if (toc && tocTitle) {
    tocTitle.addEventListener('click', function () {
      if (window.matchMedia('(max-width: 960px)').matches) toc.classList.toggle('is-open');
    });
  }
  var tocLinks = Array.prototype.slice.call(document.querySelectorAll('.legal-toc__list a'));
  var sections = tocLinks.map(function (a) {
    var id = a.getAttribute('href');
    return id && id.charAt(0) === '#' ? document.querySelector(id) : null;
  }).filter(Boolean);
  if (sections.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = '#' + entry.target.id;
          tocLinks.forEach(function (a) { a.classList.toggle('is-current', a.getAttribute('href') === id); });
        }
      });
    }, { rootMargin: '-96px 0px -65% 0px', threshold: 0 });
    sections.forEach(function (s) { spy.observe(s); });
  }
  tocLinks.forEach(function (a) {
    a.addEventListener('click', function () {
      if (window.matchMedia('(max-width: 960px)').matches && toc) toc.classList.remove('is-open');
    });
  });
  document.querySelectorAll('[data-to-top]').forEach(function (el) {
    el.addEventListener('click', function (e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
  });
})();
