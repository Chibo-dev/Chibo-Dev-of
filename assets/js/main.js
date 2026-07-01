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
    'hero.pill5': 'Dev front-end',
    'hero.pill6': 'Web designer',
    'hero.pill7': 'PT / EN',

    'logos.title': 'Quem já confiou no meu trabalho',

    'services.title': 'O que eu faço',
    'services.sub': 'O que o seu negócio precisa pra ser levado a sério no digital.',
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
    'work.sub': 'Projetos no ar, rodando e gerando resultado. Nada de template pronto: cada site é feito do zero, sob medida.',
    'work.case01.type': 'Site Institucional · EUA',
    'work.case01.title': 'ACES Electrical Services',
    'work.case01.desc': 'Site institucional em inglês para empreiteira elétrica norte-americana. Comunicação direta, foco em conversão B2B e captação de talentos para o setor comercial e residencial.',
    'work.case01.link': 'Ver case →',
    'work.case01.tag1': 'Bilíngue',
    'work.case01.tag2': 'B2B',
    'work.case01.tag3': 'Construção',
    'work.case02.type': 'E-commerce',
    'work.case02.title': 'Quilombo Doces',
    'work.case02.desc': 'E-commerce para gastronomia quilombola contemporânea. Identidade editorial forte, narrativa ancestral e catálogo de geleias artesanais e doces caseiros.',
    'work.case02.link': 'Ver case →',
    'work.case02.tag1': 'Editorial',
    'work.case02.tag2': 'Artesanal',
    'work.case03.type': 'Site Institucional',
    'work.case03.title': 'Coopmed Mogi',
    'work.case03.desc': 'Site institucional para cooperativa médica em Mogi das Cruzes. Tom sóbrio e confiável, hierarquia clara de especialidades e foco em credibilidade no setor de saúde.',
    'work.case03.link': 'Ver case →',
    'work.case03.tag1': 'Saúde',
    'work.case03.tag2': 'Cooperativa',
    'work.case05.type': 'Landing Page',
    'work.case05.title': 'Mentoria Route',
    'work.case05.desc': 'Landing page para mentoria de desenvolvimento pessoal e alta performance, conduzida por Larissa Sayuri. Foco em conversão de inscrições e comunicação aspiracional alinhada à proposta da mentora.',
    'work.case05.link': 'Ver case →',
    'work.case05.tag1': 'Mentoria',
    'work.case05.tag2': 'Alta performance',
    'work.case01.hl': '+214 obras plotadas em mapa interativo · 36 páginas',
    'work.case02.hl': 'Loja própria · checkout no WhatsApp · sem mensalidade',
    'work.case05.hl': '100/100/100/100 no Google PageSpeed',
    'work.case06.type': 'Site Institucional · B2B',
    'work.case06.title': 'Hidro-Sul',
    'work.case06.desc': 'Site institucional multipágina para individualização de água e gás. Foco em condomínios e parcerias B2B, posicionando a Hidro-Sul como braço técnico confiável.',
    'work.case06.link': 'Ver case →',
    'work.case06.tag1': 'B2B',
    'work.case06.tag2': 'Manutenção predial',
    'work.case06.hl': 'Multipágina · deploy na Cloudflare',
    'work.case07.type': 'Site Profissional · Saúde',
    'work.case07.title': 'Daphine Santana',
    'work.case07.desc': 'Site profissional para psicomotricista de desenvolvimento infantil em Mogi das Cruzes. Narrativa que acolhe pais preocupados, 7 especialidades e SEO local no Alto Tietê.',
    'work.case07.link': 'Ver case →',
    'work.case07.tag1': 'SEO Local',
    'work.case07.tag2': 'Schema',
    'work.case07.hl': '7 especialidades · SEO local no Alto Tietê',

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
    'process.sub': 'Do primeiro contato à entrega. Você acompanha cada etapa.',
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
    'about.tag3': 'PT / EN',
    'about.tag4': '★ café & código',
    'about.tag5': '{ performance }',

    'faq.title': 'Dúvidas frequentes',
    'faq.sub': 'O que quase todo mundo pergunta antes de fechar.',
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
    'hero.pill5': 'Front-end dev',
    'hero.pill6': 'Web designer',
    'hero.pill7': 'PT / EN',

    'logos.title': 'Trusted by',

    'services.title': 'What I do',
    'services.sub': "What your business needs to be taken seriously online.",
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
    'work.sub': "Live projects, running and driving results. No off-the-shelf templates: every site built from scratch, made to fit.",
    'work.case01.type': 'Company Website · USA',
    'work.case01.title': 'ACES Electrical Services',
    'work.case01.desc': 'Company website in English for a U.S. electrical contractor. Direct messaging, focus on B2B conversion and recruitment for the commercial and residential teams.',
    'work.case01.link': 'View case →',
    'work.case01.tag1': 'Bilingual',
    'work.case01.tag2': 'B2B',
    'work.case01.tag3': 'Construction',
    'work.case02.type': 'E-commerce',
    'work.case02.title': 'Quilombo Doces',
    'work.case02.desc': 'E-commerce for contemporary quilombola gastronomy. Strong editorial identity, ancestral storytelling and a catalog of artisanal jams and homemade sweets.',
    'work.case02.link': 'View case →',
    'work.case02.tag1': 'Editorial',
    'work.case02.tag2': 'Artisanal',
    'work.case03.type': 'Company Website',
    'work.case03.title': 'Coopmed Mogi',
    'work.case03.desc': "Company website for a medical cooperative in Mogi das Cruzes. Sober, trustworthy tone, clear hierarchy of specialties and focus on credibility in the healthcare sector.",
    'work.case03.link': 'View case →',
    'work.case03.tag1': 'Healthcare',
    'work.case03.tag2': 'Cooperative',
    'work.case05.type': 'Landing Page',
    'work.case05.title': 'Mentoria Route',
    'work.case05.desc': 'Landing page for a personal development and high-performance mentorship led by Larissa Sayuri. Focused on enrollment conversion and aspirational messaging aligned with the mentor proposal.',
    'work.case05.link': 'View case →',
    'work.case05.tag1': 'Mentorship',
    'work.case05.tag2': 'High performance',
    'work.case01.hl': '+214 projects plotted on an interactive map · 36 pages',
    'work.case02.hl': 'Own store · WhatsApp checkout · no monthly fee',
    'work.case05.hl': '100/100/100/100 on Google PageSpeed',
    'work.case06.type': 'Company Website · B2B',
    'work.case06.title': 'Hidro-Sul',
    'work.case06.desc': 'Multi-page company website for water and gas individualization. Focused on condominiums and B2B partnerships, positioning Hidro-Sul as a trusted technical arm.',
    'work.case06.link': 'View case →',
    'work.case06.tag1': 'B2B',
    'work.case06.tag2': 'Building maintenance',
    'work.case06.hl': 'Multi-page · deployed on Cloudflare',
    'work.case07.type': 'Professional Website · Health',
    'work.case07.title': 'Daphine Santana',
    'work.case07.desc': 'Professional website for a child-development psychomotricist in Mogi das Cruzes. A caring narrative for worried parents, 7 specialties and local SEO across the Alto Tietê.',
    'work.case07.link': 'View case →',
    'work.case07.tag1': 'Local SEO',
    'work.case07.tag2': 'Schema',
    'work.case07.hl': '7 specialties · local SEO in the Alto Tietê',

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
    'process.sub': "From first contact to delivery. You follow every step.",
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
    'about.tag3': 'PT / EN',
    'about.tag4': '★ coffee & code',
    'about.tag5': '{ performance }',

    'faq.title': 'Frequently asked questions',
    'faq.sub': "What almost everyone asks before signing.",
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
const techLogos = {
  html5: { title: 'HTML5', path: 'M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z' },
  css: { title: 'CSS', path: 'M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63' },
  javascript: { title: 'JavaScript', path: 'M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z' },
  cloudflare: { title: 'Cloudflare', path: 'M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727' },
  leaflet: { title: 'Leaflet', path: 'M17.69 0c-.355.574-8.432 4.74-10.856 8.649-2.424 3.91-3.116 6.988-2.237 9.882.879 2.893 2.559 2.763 3.516 3.717.958.954 2.257 2.113 4.332 1.645 2.717-.613 5.335-2.426 6.638-7.508 1.302-5.082.448-9.533-.103-11.99A35.395 35.395 0 0 0 17.69 0zm-.138.858l-9.22 21.585-.574-.577Z' },
  github: { title: 'GitHub', path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' },
  react: { title: 'React', path: 'M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z' },
  nextjs: { title: 'Next.js', path: 'M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z' },
  wordpress: { title: 'WordPress', path: 'M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0' },
};

const caseData = {
  aces: {
    liveUrl: 'https://aceselectric.us',
    displayUrl: 'aceselectric.us',
    poster: 'assets/img/aces-desktop.webp',
    video: 'assets/videos/aces.mp4',
    pagespeed: [100, 100, 100, 100],
    stack: ['html5', 'css', 'javascript', 'leaflet', 'cloudflare'],
    pt: {
      challenge: 'Uma empreiteira elétrica com 25 anos de mercado nos EUA (DC, VA, MD) precisava de um site à altura do porte: que provasse escala pra clientes B2B e ainda servisse como canal de recrutamento.',
      solution: [
        'Site institucional em inglês, com divisões comercial e residencial pra fechar o leque de serviços',
        'Mapa interativo com clustering plotando 214 obras entregues pra marcas nacionais (AutoZone, CVS, H&M, Fogo de Chão)',
        'Pipeline de carreiras com 5 funções e formulário de candidatura (canal de recrutamento real)',
        'Credenciais de confiança em destaque: certificação SWaM e licenças em VA, MD e DC'
      ],
      result: 'No ar como prova de escala pra clientes B2B: 214 obras plotadas no mapa, credenciais SWaM/licenças em destaque e um canal de recrutamento ativo.',
      scope: ['Design + Dev', 'Multipágina', 'Mapa interativo', 'Pipeline de carreiras', 'Deploy + domínio']
    },
    en: {
      challenge: 'An electrical contractor with 25 years in the U.S. market (DC, VA, MD) needed a site worthy of its size: proof of scale for B2B clients that also worked as a recruiting channel.',
      solution: [
        'Company website in English, with commercial and residential divisions covering the full service range',
        'Interactive clustered map plotting 214 completed jobs for national brands (AutoZone, CVS, H&M, Fogo de Chao)',
        'Careers pipeline with 5 roles and an application form (a real recruiting channel)',
        'Trust credentials up front: SWaM certification and licenses in VA, MD and DC'
      ],
      result: 'Live as proof of scale for B2B clients: 214 jobs plotted on the map, SWaM/licenses front and center, and an active recruiting channel.',
      scope: ['Design + Dev', 'Multi-page', 'Interactive map', 'Careers pipeline', 'Deploy + domain']
    }
  },
  quilombo: {
    liveUrl: 'https://chibo-dev.github.io/Quilombo-Doces/',
    displayUrl: 'quilombodoces.com.br',
    poster: 'assets/img/quilombo-doces-desktop.webp',
    video: 'assets/videos/quilombo.mp4',
    pagespeed: [100, 100, 100, 100],
    stack: ['html5', 'css', 'javascript'],
    pt: {
      challenge: 'Vender geleias e doces artesanais de raiz quilombola carregando a história da Edimea e da Chapada Diamantina, sem abrir mão de funcionar como e-commerce de verdade.',
      solution: [
        'Narrativa editorial que puxa a origem (Chapada Diamantina, tradição afro-brasileira) pra dentro da vitrine',
        'Loja completa: catálogo de geleias e doces caseiros, carrinho drawer e checkout fechado no WhatsApp',
        'Mecânica de upsell embutida: order bump e desconto progressivo por quantidade',
        'Frente B2B e kits pra presentes corporativos, mais schema de produto/FAQ pra SEO'
      ],
      result: 'Loja no ar com checkout no WhatsApp, upsell ativo (order bump + desconto por quantidade) e uma frente B2B pra pedidos corporativos.',
      scope: ['Design + Dev', 'E-commerce', 'Checkout WhatsApp', 'Order bump', 'Schema SEO']
    },
    en: {
      challenge: 'Sell quilombola artisanal jams and sweets while carrying the story of the artisan and of Chapada Diamantina, without giving up on working as a real e-commerce store.',
      solution: [
        'Editorial narrative that pulls the origin (Chapada Diamantina, Afro-Brazilian tradition) into the storefront',
        'A full store: catalog of jams and homemade sweets, a cart drawer and WhatsApp checkout',
        'Built-in upsell mechanics: order bump and progressive quantity discount',
        'A B2B front and gift kits for corporate orders, plus product/FAQ schema for SEO'
      ],
      result: 'Live with WhatsApp checkout, active upsell (order bump + quantity discount) and a B2B front for corporate orders.',
      scope: ['Design + Dev', 'E-commerce', 'WhatsApp checkout', 'Order bump', 'Schema SEO']
    }
  },
  coopmed: {
    liveUrl: 'https://coopmedmogi.com',
    displayUrl: 'coopmedmogi.com',
    poster: 'assets/img/coopmed-desktop.webp',
    video: 'assets/videos/coopmed.mp4',
    pagespeed: [100, 100, 100, 100],
    stack: ['html5', 'css', 'javascript'],
    pt: {
      challenge: 'Passar a credibilidade da primeira cooperativa médica de SP registrada no CREMESP e falar com dois públicos ao mesmo tempo: pacientes buscando atendimento e médicos que ela quer trazer como cooperados.',
      solution: [
        'Site institucional que organiza as 22 especialidades num grid claro pra quem busca atendimento',
        'Página "Onde Atuamos" com mapa interativo dos municípios atendidos e resultados por cidade',
        'Funil de cooperado com CTAs dedicados pra atrair novos médicos pra rede de 150+',
        'Blog próprio pra gerar autoridade e conteúdo, mais páginas legais LGPD'
      ],
      result: 'Presença institucional no ar com as 22 especialidades, mapa de atuação e um funil ativo pra captar pacientes e novos cooperados.',
      scope: ['Design + Dev', 'Multipágina', 'Mapa interativo', 'Blog', 'Deploy + domínio']
    },
    en: {
      challenge: 'Convey the credibility of the first medical cooperative in Sao Paulo registered with CREMESP, speaking to two audiences at once: patients seeking care and doctors it wants to bring in as members.',
      solution: [
        'Company website organizing the 22 specialties in a clear grid for patients seeking care',
        'A coverage-area page with an interactive map of the municipalities served and results per city',
        'A member funnel with dedicated CTAs to attract new doctors to the 150+ network',
        'An in-house blog for authority and content, plus LGPD legal pages'
      ],
      result: 'Institutional presence live with the 22 specialties, a coverage map and an active funnel to attract patients and new members.',
      scope: ['Design + Dev', 'Multi-page', 'Interactive map', 'Blog', 'Deploy + domain']
    }
  },
  route: {
    liveUrl: 'https://larissasayuri.com',
    displayUrl: 'larissasayuri.com',
    poster: 'assets/img/mentoria-route-desktop.webp',
    video: 'assets/videos/route.mp4',
    pagespeed: [100, 100, 100, 100],
    stack: ['html5', 'css', 'javascript', 'cloudflare'],
    pt: {
      challenge: 'Traduzir a autoridade real da Larissa (engenheira, PMP, MBA USP, recordista do Guinness) numa landing bilíngue que fugisse do clichê de coach e qualificasse quem realmente quer uma transição de carreira.',
      solution: [
        'Identidade premium (dark, dourado, serifada) que sustenta a autoridade sem cair no visual de coach',
        'Autoridade em evidência: credenciais, história real e o método de 6 encontros em 3 meses',
        'Formulário de 3 passos que qualifica o lead (área atual, destino, idioma), não só captura',
        'Bilíngue PT/EN completo, com fontes self-hosted e headers de segurança no Cloudflare'
      ],
      result: 'LP bilíngue no ar convertendo, com formulário que qualifica o lead e nota máxima no PageSpeed, segurança inclusa (HSTS).',
      scope: ['Design + Dev', 'Bilíngue PT/EN', 'Form qualificador', 'Deploy + domínio', 'Performance 100']
    },
    en: {
      challenge: 'Translate real credentials (engineer, PMP, USP MBA, Guinness record) into a bilingual landing page that broke away from the coach cliché and qualified people genuinely seeking a career transition.',
      solution: [
        'Premium identity (dark, gold, serif) that holds the authority without the coach look',
        'Authority up front: credentials, real story and the 6-session, 3-month method',
        'A 3-step form that qualifies the lead (current field, target field, language), not just captures',
        'Fully bilingual PT/EN, with self-hosted fonts and security headers on Cloudflare'
      ],
      result: 'Bilingual landing live and converting, with a lead-qualifying form and top PageSpeed scores, security included (HSTS).',
      scope: ['Design + Dev', 'Bilingual PT/EN', 'Qualifying form', 'Deploy + domain', '100 performance']
    }
  },
  hidrosul: {
    liveUrl: 'https://hidro-sul.com',
    displayUrl: 'hidro-sul.com',
    poster: 'assets/img/hidro-sul-desktop.webp',
    video: 'assets/videos/hidrosul.mp4',
    pagespeed: [100, 100, 100, 100],
    stack: ['html5', 'css', 'javascript', 'cloudflare'],
    pt: {
      challenge: 'Posicionar a Hidro-Sul como o braço técnico confiável em individualização de água e gás para parceiros B2B que colocam a própria reputação em jogo, com os serviços organizados num site institucional claro.',
      solution: [
        'Site multipágina com as 4 frentes separadas (condomínios, empresas parceiras, reformas e manutenção)',
        'Página de parceiros que vende a blindagem da reputação de quem terceiriza a instalação',
        'Diferenciais em destaque: equipe própria CLT, seguro de obra e zero retrabalho',
        'Migração de DNS pra Cloudflare sem perder os e-mails do Workspace'
      ],
      result: 'Site multipágina no ar com domínio migrado, posicionando a Hidro-Sul como especialista técnico em individualização e não como prestador genérico.',
      scope: ['Design + Dev', 'Multipágina', 'Foco B2B', 'Migração de DNS', 'Performance 100']
    },
    en: {
      challenge: 'Position Hidro-Sul as the trusted technical arm for water and gas individualization, aimed at B2B partners putting their own reputation on the line, with the services organized in a clear company website.',
      solution: [
        'Multi-page site with the 4 fronts separated (condominiums, partner companies, renovations and maintenance)',
        'A partners page that sells reputation protection to whoever outsources the installation',
        'Sales differentiators up front: in-house CLT team, work insurance and zero rework',
        'DNS migration to Cloudflare without losing Workspace email'
      ],
      result: 'Multi-page site live with the domain migrated, positioning Hidro-Sul as a technical specialist in individualization rather than a generic contractor.',
      scope: ['Design + Dev', 'Multi-page', 'B2B focus', 'DNS migration', '100 performance']
    }
  },
  daphine: {
    liveUrl: 'https://daphinesantana.com.br',
    displayUrl: 'daphinesantana.com.br',
    poster: 'assets/img/daphine-santana-desktop.webp',
    video: 'assets/videos/daphine.mp4',
    pagespeed: [100, 100, 100, 100],
    stack: ['html5', 'css', 'javascript', 'cloudflare'],
    pt: {
      challenge: 'Passar confiança num tema sensível como desenvolvimento infantil e virar a busca de pais preocupados em uma primeira conversa, com presença forte nas buscas locais do Alto Tietê.',
      solution: [
        'Narrativa que acolhe: dos sinais que preocupam à explicação do cuidado, guiando o pai até o contato',
        'As 7 especialidades organizadas de forma clara, da psicomotricidade à intervenção precoce',
        'Caminho de 3 passos até o atendimento (conversa no WhatsApp, avaliação e plano individual)',
        'SEO local e dados estruturados (negócio, FAQ) pra aparecer nas buscas de Mogi e região'
      ],
      result: 'No ar e indexado no Google, com SEO local e schema (negócio + FAQ) mirando as buscas de desenvolvimento infantil em Mogi e no Alto Tietê.',
      scope: ['Design + Dev', 'SEO local', 'Dados estruturados', 'Deploy + domínio', 'Performance 100']
    },
    en: {
      challenge: 'Build trust in a sensitive area like child development and turn worried parents searching online into a first conversation, with strong presence in local Alto Tietê searches.',
      solution: [
        'A caring narrative: from the signs that worry parents to how the care works, guiding them to reach out',
        'The 7 specialties organized clearly, from psychomotricity to early intervention',
        'A 3-step path to care (WhatsApp chat, assessment and an individual plan)',
        'Local SEO and structured data (business, FAQ) to show up in Mogi-area searches'
      ],
      result: 'Live and indexed on Google, with local SEO and schema (business + FAQ) targeting child-development searches across Mogi and the Alto Tietê.',
      scope: ['Design + Dev', 'Local SEO', 'Structured data', 'Deploy + domain', '100 performance']
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
const modalTitleEl = document.getElementById('caseModalTitle');
const modalStage = document.getElementById('modalStage');
const modalChallenge = document.getElementById('modalChallenge');
const modalSolution = document.getElementById('modalSolution');
const modalResultText = document.getElementById('modalResultText');
const modalPagespeed = document.getElementById('modalPagespeed');
const modalPsScores = document.getElementById('modalPsScores');
const modalPsLink = document.getElementById('modalPsLink');
const modalScope = document.getElementById('modalScope');
const modalStack = document.getElementById('modalStack');
const modalLiveLink = document.getElementById('modalLiveLink');
const modalLiveText = document.getElementById('modalLiveText');
const modalSimilarText = document.getElementById('modalSimilarText');

let lastFocusedEl = null;

function openCaseModal(caseId) {
  const caseEl = document.querySelector(`[data-case-id="${caseId}"]`);
  const cfg = caseData[caseId];
  if (!caseEl || !cfg) return;

  const lang = document.documentElement.lang.startsWith('pt') ? 'pt' : 'en';
  const d = cfg[lang];
  if (!d) return;

  const L = lang === 'pt'
    ? { challenge: 'Desafio', solution: 'Solução', result: 'Resultado', scope: 'O que estava incluso', live: 'Ver site ao vivo', similar: 'Quero algo parecido', check: 'conferir no PageSpeed', ps: ['Desempenho', 'Acessib.', 'Práticas', 'SEO'] }
    : { challenge: 'Challenge', solution: 'Solution', result: 'Result', scope: 'What was included', live: 'View live site', similar: 'I want something like this', check: 'check on PageSpeed', ps: ['Performance', 'Accessibility', 'Best Practices', 'SEO'] };

  modalType.textContent = (caseEl.querySelector('.case__type')?.textContent || '').trim();
  modalTitleEl.textContent = (caseEl.querySelector('.case__title')?.textContent || '').trim();
  const title = modalTitleEl.textContent;

  const displayUrl = cfg.displayUrl || '';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mediaEl = (video, poster) => (video && !reduce)
    ? `<video src="${video}" poster="${poster}" muted loop autoplay playsinline preload="none"></video>`
    : `<img src="${poster}" alt="${title}" loading="lazy">`;
  const deskInner = mediaEl(cfg.video, cfg.poster);
  const phoneInner = (cfg.videoMobile || cfg.posterMobile)
    ? mediaEl(cfg.videoMobile, cfg.posterMobile)
    : `<div class="stage__phone-skeleton"><span style="width:40%"></span><span style="width:72%"></span><span class="is-accent" style="width:52%"></span><span style="width:64%"></span><span style="width:34%"></span><span style="width:58%"></span></div>`;
  modalStage.innerHTML = `<div class="stage__desktop"><div class="browser browser--modal"><div class="browser__bar"><span class="browser__dots"><i></i><i></i><i></i></span><span class="browser__url">${displayUrl}</span></div><div class="browser__screen">${deskInner}</div></div></div><div class="stage__phone" aria-hidden="true"><div class="stage__phone-screen">${phoneInner}</div></div>`;

  document.getElementById('modalChallengeLabel').textContent = L.challenge;
  modalChallenge.textContent = d.challenge;

  document.getElementById('modalSolutionLabel').textContent = L.solution;
  modalSolution.innerHTML = '';
  d.solution.forEach(s => { const li = document.createElement('li'); li.textContent = s; modalSolution.appendChild(li); });

  document.getElementById('modalResultLabel').textContent = L.result;
  modalResultText.textContent = d.result;

  if (cfg.pagespeed && cfg.pagespeed.length) {
    modalPagespeed.hidden = false;
    modalPsScores.innerHTML = cfg.pagespeed.map((s, i) => `<div class="ps-score"><div class="ps-score__num">${s}</div><div class="ps-score__label">${L.ps[i]}</div></div>`).join('');
    modalPsLink.textContent = L.check;
    modalPsLink.href = cfg.liveUrl ? ('https://pagespeed.web.dev/analysis?url=' + encodeURIComponent(cfg.liveUrl) + '&form_factor=mobile') : '#';
  } else {
    modalPagespeed.hidden = true;
  }

  document.getElementById('modalScopeLabel').textContent = L.scope;
  modalScope.innerHTML = '';
  (d.scope || []).forEach(s => { const sp = document.createElement('span'); sp.textContent = s; modalScope.appendChild(sp); });

  modalStack.innerHTML = '';
  (cfg.stack || []).forEach(key => {
    const t = techLogos[key];
    if (!t) return;
    const sp = document.createElement('span');
    sp.className = 'modal__stack-logo';
    sp.innerHTML = `<svg viewBox="0 0 24 24" role="img" aria-label="${t.title}"><title>${t.title}</title><path d="${t.path}"/></svg>`;
    modalStack.appendChild(sp);
  });

  modalLiveText.textContent = L.live;
  modalSimilarText.textContent = L.similar;
  modalLiveLink.style.display = cfg.liveUrl ? '' : 'none';
  if (cfg.liveUrl) modalLiveLink.href = cfg.liveUrl;

  lastFocusedEl = document.activeElement;
  caseModal.hidden = false;
  caseModal.setAttribute('aria-hidden', 'false');
  caseModal.dataset.openId = caseId;
  document.body.classList.add('is-modal-open');
  setTimeout(() => caseModal.querySelector('.modal__close')?.focus(), 100);
}

function closeCaseModal() {
  if (caseModal.hidden) return;
  caseModal.hidden = true;
  caseModal.setAttribute('aria-hidden', 'true');
  delete caseModal.dataset.openId;
  document.body.classList.remove('is-modal-open');

  // Limpar o stage pra parar qualquer vídeo em reprodução
  if (modalStage) modalStage.innerHTML = '';

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
