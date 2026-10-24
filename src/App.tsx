import { useEffect, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BrickWall,
  Check,
  ChevronDown,
  CircleHelp,
  ClipboardList,
  Construction,
  Droplets,
  HardHat,
  House,
  ListChecks,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  PaintRoller,
  Plus,
  Ruler,
  ShieldCheck,
  ShoppingBag,
  Store,
  Trash2,
  Users,
  X,
  Zap,
} from 'lucide-react'
import type { Audience, QuoteItem } from './types'

// Configure com DDI + DDD + número, somente dígitos, para habilitar o WhatsApp.
const WHATSAPP_NUMBER = ''
const ADDRESS = 'Av. Pinheiro, 522 - Limoeiro, Timóteo - MG, 35181-402'
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Lamacon Materiais de Construção, ${ADDRESS}`)}`
const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(`Lamacon Materiais de Construção, ${ADDRESS}`)}&output=embed`
const STORAGE_KEY = 'lamacon-quote-list'

const NAV_LINKS = [
  { href: '#atendimento', label: 'Atendimento' },
  { href: '#etapas', label: 'Etapas da obra' },
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#duvidas', label: 'Dúvidas' },
  { href: '#localizacao', label: 'A loja' },
]

const newItem = (): QuoteItem => ({
  id: typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
    ? crypto.randomUUID()
    : `quote-${Date.now()}-${Math.random().toString(36).slice(2)}`,
  name: '',
  quantity: '',
})

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand${footer ? ' brand--footer' : ''}`} href="#inicio" aria-label="Lamacon, início">
      <img src="/assets/lamacon-logo.png" alt="Lamacon Materiais de Construção" width={916} height={203} />
    </a>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
  }, [menuOpen])

  return (
    <>
      <div className="utility-bar">
        <div className="shell utility-bar__inner">
          <a href={MAPS_URL} target="_blank" rel="noreferrer"><MapPin size={15} /> Av. Pinheiro, 522 · Limoeiro, Timóteo–MG</a>
          <span className="utility-bar__right">Sua obra começa com uma boa escolha.</span>
        </div>
      </div>
      <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
        <div className="shell nav-wrap">
          <Brand />
          <button className="menu-button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav id="main-nav" className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} aria-label="Navegação principal">
            {NAV_LINKS.map((link) => <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>)}
            <a className="button button--blue nav-quote" href="#orcamento" onClick={closeMenu}>Pedir orçamento <ArrowUpRight size={17} /></a>
          </nav>
        </div>
      </header>
    </>
  )
}

function ArchitecturalArtwork() {
  return (
    <div className="hero-visual" aria-label="Ilustração arquitetônica de uma casa">
      <div className="visual-topline"><span>PROJETO Nº 001</span><span>LM / 26</span></div>
      <div className="visual-grid" />
      <svg className="house-drawing" viewBox="0 0 560 430" fill="none" role="img" aria-label="Casa desenhada em traços arquitetônicos">
        <path d="M72 203 280 50l208 153v176H72V203Z" stroke="white" strokeWidth="4" />
        <path d="M40 208 280 28l240 180" stroke="#ff7a1a" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M224 379V250h112v129" stroke="white" strokeWidth="4" />
        <path d="M104 236h74v72h-74zM382 236h74v72h-74z" stroke="#a9c4f8" strokeWidth="3" />
        <path d="M90 344h380M280 51v50M72 202H40m448 0h32" stroke="#a9c4f8" strokeWidth="2" strokeDasharray="6 8" />
        <path d="M257 101h46" stroke="#ff7a1a" strokeWidth="5" strokeLinecap="round" />
        <circle cx="280" cy="101" r="7" fill="#ff7a1a" />
        <path d="M224 379h112" stroke="#ff7a1a" strokeWidth="4" />
      </svg>
      <div className="visual-label"><span>CONSTRUA COM CONFIANÇA</span><strong>Seu próximo capítulo<br />começa aqui.</strong></div>
      <div className="visual-stamp"><House size={20} /><span>DA BASE AO<br /><b>ACABAMENTO</b></span></div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="shell hero__grid">
        <div className="hero-copy">
          <div className="kicker"><span /> Materiais de construção em Timóteo–MG</div>
          <h1>Um bom projeto começa com <em>boas escolhas.</em></h1>
          <p className="hero-lead">Da reforma em casa à obra profissional, conte com a Lamacon para encontrar os materiais certos para cada etapa.</p>
          <div className="hero-actions">
            <a className="button button--orange button--lg" href="#orcamento">Monte sua lista <ArrowRight size={18} /></a>
            <a className="button button--ghost button--lg" href="#atendimento">Veja como podemos ajudar</a>
          </div>
          <ul className="hero-points">
            <li><Check size={17} /> Orçamento sem compromisso</li>
            <li><Check size={17} /> Atendimento para casa e obra</li>
            <li><Check size={17} /> Loja física em Timóteo</li>
          </ul>
        </div>
        <ArchitecturalArtwork />
      </div>
    </section>
  )
}

function TrustStrip() {
  const items = [
    { icon: Users, title: 'Para sua casa', text: 'Reformas, reparos e melhorias' },
    { icon: Construction, title: 'Para sua obra', text: 'Da fundação ao acabamento' },
    { icon: HardHat, title: 'Para profissionais', text: 'Listas e atendimento ágil' },
    { icon: Store, title: 'Loja em Timóteo', text: 'Av. Pinheiro, 522 · Limoeiro' },
  ]
  return (
    <section className="trust-strip" aria-label="Por que escolher a Lamacon">
      <div className="shell trust-strip__grid">
        {items.map(({ icon: Icon, title, text }) => (
          <div className="trust-item" key={title}>
            <span className="trust-item__icon"><Icon size={22} strokeWidth={1.9} /></span>
            <div><strong>{title}</strong><span>{text}</span></div>
          </div>
        ))}
      </div>
    </section>
  )
}

function SectionIntro({ eyebrow, title, children, center = false, light = false }: { eyebrow: string; title: ReactNode; children?: ReactNode; center?: boolean; light?: boolean }) {
  return (
    <div className={`section-intro${center ? ' section-intro--center' : ''}${light ? ' section-intro--light' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  )
}

function ServiceSection() {
  const services = [
    { icon: House, tag: 'Casa & reforma', title: 'Renove no seu ritmo.', text: 'Conte o que está planejando para a sua casa. A equipe ajuda a organizar os materiais que você procura.', link: 'Falar da minha reforma' },
    { icon: Construction, tag: 'Construtores', title: 'Sua obra, etapa por etapa.', text: 'Envie sua relação de materiais e converse com a loja sobre as necessidades do seu projeto.', link: 'Conversar sobre uma obra' },
    { icon: HardHat, tag: 'Profissionais', title: 'Atendimento para quem constrói.', text: 'Pedreiros, mestres de obras, engenheiros e profissionais podem solicitar atendimento para suas listas.', link: 'Enviar minha lista' },
  ]

  return (
    <section className="section" id="atendimento">
      <div className="shell">
        <SectionIntro eyebrow="Gente que entende de obra" title="Qual é o seu próximo projeto?" center>
          Atendimento próximo para quem está construindo, reformando ou trabalhando em uma obra.
        </SectionIntro>
        <div className="service-grid">
          {services.map(({ icon: Icon, tag, title, text, link }) => (
            <article className="service-card" key={tag}>
              <span className="service-card__icon"><Icon size={26} strokeWidth={1.8} /></span>
              <span className="service-card__tag">{tag}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#orcamento">{link}<ArrowRight size={17} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function StagesSection() {
  const stages = [
    { icon: BrickWall, title: 'Fundação e estrutura', text: 'Comece pela base da obra: informe as medidas e o que você precisa para levantar o projeto.' },
    { icon: Droplets, title: 'Hidráulica', text: 'Instalações de água e esgoto para construção nova, reforma de banheiro ou cozinha.' },
    { icon: Zap, title: 'Elétrica', text: 'Itens para instalação e manutenção elétrica de casas e pequenas obras.' },
    { icon: PaintRoller, title: 'Acabamento', text: 'A fase final do projeto: detalhes que deixam o ambiente pronto para usar.' },
  ]
  return (
    <section className="section section--cloud" id="etapas">
      <div className="shell">
        <div className="stages-head">
          <SectionIntro eyebrow="Da base ao acabamento" title="Materiais para cada etapa da sua obra.">
            Organize seu pedido por fase. Assim a equipe da Lamacon entende melhor o seu projeto e agiliza o atendimento.
          </SectionIntro>
          <a className="button button--blue" href="#orcamento">Montar minha lista <ArrowRight size={17} /></a>
        </div>
        <ol className="stage-grid">
          {stages.map(({ icon: Icon, title, text }, index) => (
            <li className="stage-card" key={title}>
              <div className="stage-card__top">
                <span className="stage-card__icon"><Icon size={24} strokeWidth={1.8} /></span>
                <span className="stage-card__step">Etapa {String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function CatalogSection() {
  return (
    <section className="catalog-section" id="catalogo">
      <div className="shell catalog-section__inner">
        <div className="catalog-section__copy">
          <span className="eyebrow eyebrow--light">Showroom digital</span>
          <h2>O catálogo está <em>ganhando forma.</em></h2>
          <p>Estamos preparando a seleção de produtos e categorias da Lamacon. Enquanto isso, mande sua lista para a equipe da loja.</p>
          <div className="catalog-actions">
            <a className="button button--orange" href="#orcamento">Solicitar orçamento <ArrowRight size={17} /></a>
            <a className="button button--outline-light" href="#localizacao">Visitar a loja</a>
          </div>
        </div>
        <div className="catalog-section__empty" aria-label="Espaço reservado para categorias e produtos">
          <div className="empty-frame">
            <span className="empty-frame__icon"><ShoppingBag size={28} /></span>
            <strong>Seleção Lamacon</strong>
            <small>Novidades em breve</small>
          </div>
          <div className="empty-slots" aria-hidden="true"><span /><span /><span /><span /></div>
        </div>
        <span className="catalog-section__watermark" aria-hidden="true">LAMACON</span>
      </div>
    </section>
  )
}

function QuoteSection() {
  const [items, setItems] = useState<QuoteItem[]>([newItem()])
  const [name, setName] = useState('')
  const [audience, setAudience] = useState<Audience | ''>('')
  const [notes, setNotes] = useState('')
  const [notice, setNotice] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const addItem = () => setItems((current) => [...current, newItem()])
  const removeItem = (id: string) => setItems((current) => current.length > 1 ? current.filter((item) => item.id !== id) : [{ ...current[0], name: '', quantity: '' }])
  const updateItem = (id: string, key: 'name' | 'quantity', value: string) => setItems((current) => current.map((item) => item.id === id ? { ...item, [key]: value } : item))
  const filledCount = items.filter((item) => item.name.trim() || item.quantity.trim()).length

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as QuoteItem[]
        if (Array.isArray(parsed) && parsed.length) setItems(parsed)
      } catch { localStorage.removeItem(STORAGE_KEY) }
    }
  }, [])

  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)) }, [items])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const filled = items.filter((item) => item.name.trim() || item.quantity.trim())
    if (!filled.length) { setSubmitted(false); setNotice('Inclua pelo menos um material na sua lista.'); return }
    const lines = [
      'Olá, Lamacon! Gostaria de solicitar um orçamento.',
      name.trim() ? `\nNome: ${name.trim()}` : '',
      audience ? `\nAtendimento: ${audience}` : '',
      '\n\nMateriais:',
      ...filled.map((item) => `\n• ${item.name.trim() || 'Material'}${item.quantity.trim() ? ` — ${item.quantity.trim()}` : ''}`),
      notes.trim() ? `\n\nDetalhes: ${notes.trim()}` : '',
      '\n\nAguardo o retorno. Obrigado(a)!',
    ].join('')

    if (WHATSAPP_NUMBER) {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`, '_blank', 'noopener,noreferrer')
      setSubmitted(true)
      setNotice('Mensagem pronta no WhatsApp. Confira os itens e envie para a Lamacon.')
    } else {
      setSubmitted(true)
      setNotice('Sua lista ficou organizada. O WhatsApp comercial será conectado assim que o número da loja for informado.')
    }
  }

  return (
    <section className="section quote-section" id="orcamento">
      <div className="shell quote-layout">
        <div className="quote-copy">
          <SectionIntro eyebrow="Orçamento sem complicação" title="Sua lista. Seu projeto. Um próximo passo.">
            Organize os itens que procura e envie uma solicitação para a equipe da Lamacon.
          </SectionIntro>
          <ol className="quote-steps">
            <li><span>1</span><div><strong>Inclua os materiais</strong><p>Escreva o nome de cada item e a quantidade ou medida.</p></div></li>
            <li><span>2</span><div><strong>Revise os detalhes</strong><p>Conte um pouco sobre o projeto para facilitar o atendimento.</p></div></li>
            <li><span>3</span><div><strong>Envie para a loja</strong><p>A mensagem fica pronta para o atendimento da Lamacon.</p></div></li>
          </ol>
          <div className="quote-help"><CircleHelp size={20} /><span>Não sabe o nome de algum item? Descreva o que precisa no campo de detalhes.</span></div>
        </div>

        <form className="quote-form" onSubmit={handleSubmit} noValidate>
          <div className="quote-form__header">
            <div><span>Fale com a Lamacon</span><h3>Monte sua lista</h3></div>
            <span className="quote-form__badge"><ClipboardList size={18} /> {filledCount} {filledCount === 1 ? 'item' : 'itens'}</span>
          </div>
          <div className="quote-fields">
            <label className="input-group"><span>Seu nome <small>opcional</small></span><input value={name} onChange={(event) => setName(event.target.value)} placeholder="Como podemos chamar você?" autoComplete="name" /></label>
            <label className="input-group"><span>Tipo de atendimento</span><div className="select-wrap"><select value={audience} onChange={(event) => setAudience(event.target.value as Audience | '')}><option value="">Selecione uma opção</option><option>Pessoa física</option><option>Construção ou reforma</option><option>Profissional da construção</option></select><ChevronDown size={18} /></div></label>
          </div>
          <div className="items-head"><span>Materiais que procura</span><button type="button" onClick={addItem}><Plus size={17} /> Adicionar item</button></div>
          <div className="quote-items">
            {items.map((item, index) => (
              <div className="quote-item" key={item.id}>
                <span className="quote-item__number">{String(index + 1).padStart(2, '0')}</span>
                <input aria-label={`Material ${index + 1}`} value={item.name} onChange={(event) => updateItem(item.id, 'name', event.target.value)} placeholder="Material / produto" />
                <input aria-label={`Quantidade ${index + 1}`} value={item.quantity} onChange={(event) => updateItem(item.id, 'quantity', event.target.value)} placeholder="Qtd. / medida" />
                <button className="remove-item" type="button" aria-label={`Remover material ${index + 1}`} onClick={() => removeItem(item.id)}><Trash2 size={18} /></button>
              </div>
            ))}
          </div>
          <label className="input-group input-group--notes"><span>Detalhes do projeto <small>opcional</small></span><textarea value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="Tamanho, modelo, local da obra ou outras informações" rows={3} /></label>
          {notice && <div className={`form-notice${submitted ? ' form-notice--success' : ''}`} role="status">{submitted ? <Check size={18} /> : <CircleHelp size={18} />}<span>{notice}</span></div>}
          <button className="button button--orange button--lg quote-submit" type="submit">Preparar mensagem <MessageCircle size={19} /></button>
          <p className="quote-disclaimer"><ShieldCheck size={15} /> A disponibilidade e as condições serão confirmadas pela equipe da loja.</p>
        </form>
      </div>
    </section>
  )
}

function FaqSection() {
  const faqs = [
    { q: 'Posso comprar pelo site?', a: 'O site é um showroom digital, sem checkout. Você monta sua lista de materiais e envia para a equipe da Lamacon, que confirma disponibilidade e condições.' },
    { q: 'Preciso saber o nome exato de cada material?', a: 'Não. Descreva o que precisa com suas palavras no campo de detalhes — tamanho, uso ou etapa da obra — e a equipe ajuda a identificar os itens.' },
    { q: 'O atendimento é só para profissionais?', a: 'Não. A Lamacon atende quem está reformando em casa, quem está construindo e também profissionais como pedreiros, mestres de obras e engenheiros.' },
    { q: 'Minha lista fica salva?', a: 'Sim. Os itens que você digita ficam guardados neste navegador, então você pode voltar depois e continuar de onde parou.' },
    { q: 'Onde fica a loja?', a: `A Lamacon fica na ${ADDRESS}. Use o botão “Abrir rota no Google Maps” para traçar o caminho.` },
  ]
  return (
    <section className="section section--cloud" id="duvidas">
      <div className="shell faq-layout">
        <SectionIntro eyebrow="Dúvidas frequentes" title="Tudo o que você precisa saber antes de pedir.">
          Ainda ficou alguma dúvida? Venha conversar com a equipe na loja.
        </SectionIntro>
        <div className="faq-list">
          {faqs.map(({ q, a }, index) => (
            <details className="faq-item" key={q} open={index === 0}>
              <summary>{q}<span className="faq-item__icon"><Plus size={18} /></span></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function StoreSection() {
  return (
    <section className="section store-section" id="localizacao">
      <div className="shell store-layout">
        <div className="store-copy">
          <SectionIntro eyebrow="A loja" title={<>De Timóteo, <em>para o seu projeto.</em></>}>
            Venha conversar com a equipe da Lamacon e conte o que você está construindo.
          </SectionIntro>
          <div className="address-card">
            <span className="address-card__icon"><MapPin size={22} /></span>
            <div><b>Lamacon Materiais de Construção</b><span>{ADDRESS}</span></div>
          </div>
          <div className="store-actions">
            <a className="button button--blue" href={MAPS_URL} target="_blank" rel="noreferrer">Abrir rota no Google Maps <Navigation size={17} /></a>
            <a className="button button--ghost" href="#orcamento">Pedir orçamento</a>
          </div>
        </div>
        <div className="store-map">
          <iframe title="Mapa da Lamacon Materiais de Construção em Timóteo" src={MAPS_EMBED_URL} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <div className="map-chip"><span /> LAMACON <small>Av. Pinheiro, 522</small></div>
        </div>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="final-cta">
      <div className="shell final-cta__inner">
        <div>
          <span className="eyebrow eyebrow--light">Comece por aqui</span>
          <h2>O próximo passo da sua obra pode ser uma conversa.</h2>
        </div>
        <a className="button button--orange button--lg" href="#orcamento">Fale com a Lamacon <ArrowRight size={18} /></a>
        <Ruler className="final-cta__mark" size={180} strokeWidth={0.6} aria-hidden="true" />
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-main">
        <div className="footer-brand">
          <Brand footer />
          <p>Materiais de construção para os projetos de Timóteo e região.</p>
        </div>
        <div className="footer-column">
          <span>Explore</span>
          {NAV_LINKS.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </div>
        <div className="footer-column">
          <span>Atendimento</span>
          <a href="#orcamento"><ListChecks size={16} /> Pedir orçamento</a>
          <a href="#duvidas"><CircleHelp size={16} /> Dúvidas frequentes</a>
        </div>
        <div className="footer-column">
          <span>Encontre a loja</span>
          <a href={MAPS_URL} target="_blank" rel="noreferrer"><MapPin size={16} /> Av. Pinheiro, 522</a>
          <p>Limoeiro · Timóteo, MG<br />CEP 35181-402</p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Lamacon Materiais de Construção</span>
        <span>Feito para construir bons projetos.</span>
      </div>
    </footer>
  )
}

function FloatingActions() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className={`floating-actions${visible ? ' floating-actions--visible' : ''}`}>
      {WHATSAPP_NUMBER && (
        <a className="floating-actions__whats" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" aria-label="Conversar no WhatsApp"><MessageCircle size={24} /></a>
      )}
      <a className="floating-actions__top" href="#inicio" aria-label="Voltar ao início"><ArrowUp size={20} /></a>
    </div>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <TrustStrip />
        <ServiceSection />
        <StagesSection />
        <CatalogSection />
        <QuoteSection />
        <FaqSection />
        <StoreSection />
        <FinalCta />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
