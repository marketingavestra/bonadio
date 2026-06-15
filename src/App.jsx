import BadgeBar       from './components/BadgeBar'
import UrgencyBar     from './components/UrgencyBar'
import Hero           from './components/Hero'
import MetricsBar     from './components/MetricsBar'
import Problem        from './components/Problem'
import Mechanism      from './components/Mechanism'
import HowItWorks     from './components/HowItWorks'
import Offer          from './components/Offer'
import Comparison     from './components/Comparison'
import SocialProof    from './components/SocialProof'
import Bio            from './components/Bio'
import FAQ            from './components/FAQ'
import Form           from './components/Form'
import Footer         from './components/Footer'

import ObrigadoQuente from './pages/ObrigadoQuente'
import ObrigadoMorno  from './pages/ObrigadoMorno'
import ObrigadoFrio   from './pages/ObrigadoFrio'
import LinksPage      from './pages/LinksPage'

// ─── Roteamento por pathname + query param ─────────────────────────────────
// /                        →  Página de links (link-in-bio)
// /sala-secreta            →  Landing page principal
// /sala-secreta?obrigado=quente  →  Lead qualificado
// /sala-secreta?obrigado=morno   →  Lead morno
// /sala-secreta?obrigado=frio    →  Lead frio
const PATHNAME = window.location.pathname
const OBRIGADO = new URLSearchParams(window.location.search).get('obrigado')

export default function App() {
  const IS_FORM = PATHNAME.startsWith('/formsvp1')
  const IS_ROOT = PATHNAME === '/' || PATHNAME === ''
  const IS_LANDING = PATHNAME === '/sala-secreta'

  // Se for o formulário estático, deixa o servidor servir o arquivo da /public
  if (IS_FORM) return null

  // Raiz do site → página de links
  if (IS_ROOT) return <LinksPage />

  // Processa as páginas de agradecimento (Obrigado)
  if (OBRIGADO === 'quente') return <ObrigadoQuente />
  if (OBRIGADO === 'morno')  return <ObrigadoMorno />
  if (OBRIGADO === 'frio')   return <ObrigadoFrio />

  // Só mostra a landing page se estiver no caminho correto (/sala-secreta)
  if (!IS_LANDING) {
    // Outros caminhos não autorizados retornam vazio (para permitir arquivos estáticos)
    return null
  }

  return (
    <div className="font-body">
      {/* 01 — Filtro de elegibilidade */}
      <BadgeBar />

      {/* 02 — Urgência */}
      <UrgencyBar />

      {/* 03 — Hero */}
      <Hero />

      {/* 04 — Métricas de credibilidade */}
      <MetricsBar />

      {/* 05 — Agitação do problema */}
      <Problem />

      {/* 06 — Mecanismo único */}
      <Mechanism />

      {/* 07 — Como funciona (3 passos) */}
      <HowItWorks />

      {/* 08 — O que vai aprender */}
      <Offer />

      {/* 09 — Comparação: Evite vs Garanta */}
      <Comparison />

      {/* 10 — Cases / Resultados reais */}
      <SocialProof />

      {/* 11 — Bio de autoridade */}
      <Bio />

      {/* 12 — Formulário + Countdown */}
      <Form />

      {/* 13 — FAQ */}
      <FAQ />

      {/* 14 — Footer */}
      <Footer />
    </div>
  )
}
