import { useEffect, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleHelp,
  ClipboardList,
  Construction,
  HardHat,
  House,
  MapPin,
  Menu,
  MessageCircle,
  Plus,
  Ruler,
  ShoppingBag,
  Trash2,
  X,
} from 'lucide-react'
import type { Audience, QuoteItem } from './types'

// Configure com DDI + DDD + número, somente dígitos, para habilitar o WhatsApp.
const WHATSAPP_NUMBER = ''
const ADDRESS = 'Av. Pinheiro, 522 - Limoeiro, Timóteo - MG, 35181-402'
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Lamacon Materiais de Construção, ${ADDRESS}`)}`

const newItem = (): QuoteItem => ({ id: crypto.randomUUID(), name: '', quantity: '' })

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand${footer ? ' brand--footer' : ''}`} href="#inicio" aria-label="Lamacon, início">
      <img src="/assets/lamacon-logo.png" alt="Lamacon Materiais de Construção" />
    </a>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="utility-bar">
        <div className="shell utility-bar__inner">
          <span><MapPin size={13} /> Av. Pinheiro, 522 <i /> Limoeiro, Timóteo–MG</span>
          <span className="utility-bar__right">Sua obra começa com uma boa escolha.</span>
        </div>
      </div>
      <header className="site-header">
        <div className="shell nav-wrap">
          <Brand />
          <button className="menu-button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} aria-label="Navegação principal">
            <a href="#atendimento" onClick={closeMenu}>Atendimento</a>
            <a href="#catalogo" onClick={closeMenu}>Catálogo</a>
            <a href="#localizacao" onClick={closeMenu}>A loja</a>
            <a className="nav-quote" href="#orcamento" onClick={closeMenu}>Pedir orçamento <ArrowUpRight size={15} /></a>
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
      <div className="visual-stamp"><House size={19} /><span>DA BASE AO<br /><b>ACABAMENTO</b></span></div>
      <span className="visual-index">01 — 04</span>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="shell hero__grid">
        <div className="hero-copy">
          <div className="kicker"><span /> MATERIAIS DE CONSTRUÇÃO · TIMÓTEO</div>
          <h1>Um bom projeto<br />começa com <em>boas escolhas.</em></h1>
          <p>Da reforma em casa à obra profissional, conte com a Lamacon para encontrar os materiais certos para cada etapa.</p>
          <div className="hero-actions">
            <a className="button button--orange" href="#orcamento">Monte sua lista <ArrowRight size={16} /></a>
            <a className="text-link" href="#atendimento">Veja como podemos ajudar <ArrowDownRight size={16} /></a>
          </div>
          <div className="hero-location"><MapPin size={15} /><span>Av. Pinheiro, 522 <b>·</b> Limoeiro <b>·</b> Timóteo–MG</span></div>
        </div>
        <ArchitecturalArtwork />
      </div>
      <div className="shell hero-ribbon">
        <span><i>01</i> Para sua casa</span><span><i>02</i> Para sua obra</span><span><i>03</i> Para profissionais</span>
        <a href="#atendimento">Descubra o atendimento <ArrowRight size={14} /></a>
      </div>
    </section>
  )
}

function SectionIntro({ eyebrow, title, children, number }: { eyebrow: string; title: string; children?: ReactNode; number: string }) {
  return (
    <div className="section-intro">
      <div><span className="section-intro__eyebrow">{eyebrow}</span><h2>{title}</h2>{children && <p>{children}</p>}</div>
      <span className="section-intro__number">{number}</span>
    </div>
  )
}

function ServiceSection() {
  const services = [
    { icon: House, tag: 'CASA & REFORMA', title: 'Renove no seu ritmo.', text: 'Conte o que está planejando para a sua casa. A equipe ajuda a organizar os materiais que você procura.', link: 'Falar da minha reforma' },
    { icon: Construction, tag: 'CONSTRUTORES', title: 'Sua obra, etapa por etapa.', text: 'Envie sua relação de materiais e converse com a loja sobre as necessidades do seu projeto.', link: 'Conversar sobre uma obra' },
    { icon: HardHat, tag: 'PROFISSIONAIS', title: 'Atendimento para quem constrói.', text: 'Pedreiros, mestres de obras, engenheiros e profissionais podem solicitar atendimento para suas listas.', link: 'Enviar minha lista' },
  ]

  return (
    <section className="section services-section" id="atendimento">
      <div className="shell">
        <SectionIntro eyebrow="GENTE QUE ENTENDE DE OBRA" title="Qual é o seu próximo projeto?" number="01">
          Atendimento próximo para quem está construindo, reformando ou trabalhando em uma obra.
        </SectionIntro>
        <div className="service-grid">
          {services.map(({ icon: Icon, tag, title, text, link }, index) => (
            <article className={`service-card service-card--${index + 1}`} key={tag}>
              <div className="service-card__top"><span className="service-card__icon"><Icon size={21} strokeWidth={1.8} /></span><span>{tag}</span></div>
              <h3>{title}</h3><p>{text}</p>
              <a href="#orcamento">{link}<ArrowRight size={15} /></a>
              <span className="service-card__index">0{index + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CatalogSection() {
  return (
    <section className="catalog-section" id="catalogo">
      <div className="shell catalog-section__inner">
        <div className="catalog-section__copy">
          <span className="section-intro__eyebrow">SHOWROOM DIGITAL</span>
          <h2>O catálogo está<br /><em>ganhando forma.</em></h2>
          <p>Estamos preparando a seleção de produtos e categorias da Lamacon. Enquanto isso, mande sua lista para a equipe da loja.</p>
          <a className="button button--white" href="#orcamento">Solicitar orçamento <ArrowRight size={16} /></a>
        </div>
        <div className="catalog-section__empty" aria-label="Espaço reservado para categorias e produtos">
          <div className="empty-frame"><ShoppingBag size={25} /><span>SELEÇÃO LAMACON</span><small>Novidades em breve</small></div>
          <span className="empty-caption">CATEGORIAS & PRODUTOS</span>
        </div>
        <span className="catalog-section__watermark">LAMACON</span>
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

  useEffect(() => {
    const saved = localStorage.getItem('lamacon-quote-list')
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as QuoteItem[]
        if (Array.isArray(parsed) && parsed.length) setItems(parsed)
      } catch { localStorage.removeItem('lamacon-quote-list') }
    }
  }, [])

  useEffect(() => { localStorage.setItem('lamacon-quote-list', JSON.stringify(items)) }, [items])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const filled = items.filter((item) => item.name.trim() || item.quantity.trim())
    if (!filled.length) { setNotice('Inclua pelo menos um material na sua lista.'); return }
    const lines = [
      'Olá, Lamacon! Gostaria de solicitar um orçamento.',
      name.trim() ? `\nNome: ${name.trim()}` : '',
      audience ? `\nAtendimento: ${audience}` : '',
      '\n\nMateriais:',
      ...filled.map((item) => `• ${item.name.trim() || 'Material'}${item.quantity.trim() ? ` — ${item.quantity.trim()}` : ''}`),
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
    <section className="quote-section" id="orcamento">
      <div className="shell quote-layout">
        <div className="quote-copy">
          <SectionIntro eyebrow="ORÇAMENTO SEM COMPLICAÇÃO" title="Sua lista. Seu projeto. Um próximo passo." number="02">
            Organize os itens que procura e envie uma solicitação para a equipe da Lamacon.
          </SectionIntro>
          <div className="quote-steps">
            <div><span>01</span><p>Inclua os materiais<br />e as quantidades</p></div>
            <div><span>02</span><p>Revise os detalhes<br />do seu projeto</p></div>
            <div><span>03</span><p>Prepare a mensagem<br />para atendimento</p></div>
          </div>
          <div className="quote-help"><CircleHelp size={17} /><span>Não sabe o nome de algum item? Descreva o que precisa no campo de detalhes.</span></div>
        </div>

        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="quote-form__header"><div><span>FALE COM A LAMACON</span><h3>Monte sua lista</h3></div><ClipboardList size={23} /></div>
          <div className="quote-fields">
            <label className="input-group"><span>Seu nome <small>OPCIONAL</small></span><input value={name} onChange={(event) => setName(event.target.value)} placeholder="Como podemos chamar você?" autoComplete="name" /></label>
            <label className="input-group"><span>Tipo de atendimento</span><div className="select-wrap"><select value={audience} onChange={(event) => setAudience(event.target.value as Audience | '')}><option value="">Selecione uma opção</option><option>Pessoa física</option><option>Construção ou reforma</option><option>Profissional da construção</option></select><ChevronDown size={16} /></div></label>
          </div>
          <div className="items-head"><span>Materiais que procura</span><button type="button" onClick={addItem}><Plus size={15} /> Adicionar item</button></div>
          <div className="quote-items">
            {items.map((item, index) => (
              <div className="quote-item" key={item.id}>
                <span className="quote-item__number">{String(index + 1).padStart(2, '0')}</span>
                <input aria-label={`Material ${index + 1}`} value={item.name} onChange={(event) => updateItem(item.id, 'name', event.target.value)} placeholder="Material / produto" />
                <input aria-label={`Quantidade ${index + 1}`} value={item.quantity} onChange={(event) => updateItem(item.id, 'quantity', event.target.value)} placeholder="Qtd. / medida" />
                <button className="remove-item" type="button" aria-label={`Remover material ${index + 1}`} onClick={() => removeItem(item.id)}><Trash2 size={15} /></button>
              </div>
            ))}
          </div>
          <label className="input-group input-group--notes"><span>Detalhes do projeto <small>OPCIONAL</small></span><textarea value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="Tamanho, modelo, local da obra ou outras informações" rows={3} /></label>
          {notice && <div className={`form-notice${submitted ? ' form-notice--success' : ''}`} role="status">{submitted && <Check size={16} />}{notice}</div>}
          <button className="button button--orange quote-submit" type="submit">Preparar mensagem <MessageCircle size={17} /></button>
          <p className="quote-disclaimer">A disponibilidade e as condições serão confirmadas pela equipe da loja.</p>
        </form>
      </div>
    </section>
  )
}

function StoreSection() {
  return (
    <section className="store-section" id="localizacao">
      <div className="shell store-layout">
        <div className="store-copy">
          <span className="section-intro__eyebrow">A LOJA</span>
          <h2>De Timóteo,<br /><em>para o seu projeto.</em></h2>
          <p>Venha conversar com a equipe da Lamacon e conte o que você está construindo.</p>
          <div className="address-card"><span className="address-card__icon"><MapPin size={19} /></span><div><b>Lamacon Materiais de Construção</b><span>{ADDRESS}</span></div></div>
          <a className="button button--blue" href={MAPS_URL} target="_blank" rel="noreferrer">Abrir rota no Google Maps <ArrowUpRight size={16} /></a>
        </div>
        <div className="store-graphic" aria-label="Localização da loja em Timóteo"><div className="street street--one"/><div className="street street--two"/><div className="street street--three"/><div className="street street--four"/><div className="map-label map-label--north">LIMOEIRO</div><div className="map-label map-label--south">TIMÓTEO · MG</div><div className="store-pin"><MapPin size={23} fill="currentColor" /></div><div className="map-chip"><span /> LAMACON <small>AV. PINHEIRO, 522</small></div><div className="map-coordinates">19°32' S<br />42°38' W</div></div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-main"><div className="footer-brand"><Brand footer /><p>Materiais de construção para os projetos de Timóteo e região.</p></div><div className="footer-column"><span>EXPLORE</span><a href="#atendimento">Atendimento</a><a href="#catalogo">Catálogo</a><a href="#orcamento">Pedir orçamento</a></div><div className="footer-column"><span>ENCONTRE A LOJA</span><a href={MAPS_URL} target="_blank" rel="noreferrer">Av. Pinheiro, 522</a><p>Limoeiro · Timóteo, MG</p></div><a className="back-top" href="#inicio" aria-label="Voltar ao início"><ArrowUpRight size={19} /></a></div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Lamacon Materiais de Construção</span><span>Feito para construir bons projetos.</span></div>
    </footer>
  )
}

export default function App() {
  return <><Header /><main><Hero /><ServiceSection /><CatalogSection /><QuoteSection /><StoreSection /><section className="final-cta"><div className="shell final-cta__inner"><div><span>COMECE POR AQUI</span><h2>O próximo passo da sua obra pode ser uma conversa.</h2></div><a className="button button--orange" href="#orcamento">Fale com a Lamacon <ArrowRight size={16} /></a><Ruler className="final-cta__mark" size={130} strokeWidth={0.7} /></div></section></main><Footer /></>
}
