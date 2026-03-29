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

// ─── Roteamento por query param ───────────────────────────────────────────
// /?obrigado=quente  →  Lead qualificado (urgência alta + alto faturamento)
// /?obrigado=morno   →  Lead morno
// /?obrigado=frio    →  Lead frio
const OBRIGADO = new URLSearchParams(window.location.search).get('obrigado')

export default function App() {
  if (OBRIGADO === 'quente') return <ObrigadoQuente />
  if (OBRIGADO === 'morno')  return <ObrigadoMorno />
  if (OBRIGADO === 'frio')   return <ObrigadoFrio />

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
