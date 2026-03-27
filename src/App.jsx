import BadgeBar    from './components/BadgeBar'
import UrgencyBar  from './components/UrgencyBar'
import Hero        from './components/Hero'
import MetricsBar  from './components/MetricsBar'
import Problem     from './components/Problem'
import Mechanism   from './components/Mechanism'
import HowItWorks  from './components/HowItWorks'
import Offer       from './components/Offer'
import CtaBreak    from './components/CtaBreak'
import Comparison  from './components/Comparison'
import SocialProof from './components/SocialProof'
import Bio         from './components/Bio'
import FAQ         from './components/FAQ'
import Form        from './components/Form'
import Footer      from './components/Footer'

export default function App() {
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

      {/* 09 — CTA #2 */}
      <CtaBreak text="QUERO MINHA VAGA NA SALA SECRETA" />

      {/* 10 — Comparação: Evite vs Garanta */}
      <Comparison />

      {/* 11 — Cases / Resultados reais */}
      <SocialProof />

      {/* 12 — CTA #3 */}
      <CtaBreak text="GARANTIR MINHA VAGA AGORA" />

      {/* 13 — Bio de autoridade */}
      <Bio />

      {/* 14 — FAQ */}
      <FAQ />

      {/* 15 — Formulário + Countdown */}
      <Form />

      {/* 16 — Footer */}
      <Footer />
    </div>
  )
}
