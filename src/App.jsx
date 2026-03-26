import BadgeBar    from './components/BadgeBar'
import Hero        from './components/Hero'
import MetricsBar  from './components/MetricsBar'
import HowItWorks  from './components/HowItWorks'
import Problem     from './components/Problem'
import Mechanism   from './components/Mechanism'
import SocialProof from './components/SocialProof'
import CtaBreak    from './components/CtaBreak'
import Offer       from './components/Offer'
import BonusStack  from './components/BonusStack'
import PriceReveal from './components/PriceReveal'
import Guarantee   from './components/Guarantee'
import Bio         from './components/Bio'
import Form        from './components/Form'
import FinalCTA    from './components/FinalCTA'
import Footer      from './components/Footer'

export default function App() {
  return (
    <div className="font-body">
      {/* 01 — Filtro de elegibilidade */}
      <BadgeBar />

      {/* 02 — Hero / Hook */}
      <Hero />

      {/* 03 — Métricas de credibilidade */}
      <MetricsBar />

      {/* 04 — Como funciona */}
      <HowItWorks />

      {/* 05 — Agitação do problema */}
      <Problem />

      {/* 06 — Mecanismo único */}
      <Mechanism />

      {/* 07 — Prova social */}
      <SocialProof />

      {/* 08 — CTA #2 */}
      <CtaBreak text="QUERO APLICAR O MÉTODO NA MINHA PRÁTICA" />

      {/* 09 — Oferta core */}
      <Offer />

      {/* 10 — Stack de bônus */}
      <BonusStack />

      {/* 11 — Reveal de preço */}
      <PriceReveal />

      {/* 12 — Garantia */}
      <Guarantee />

      {/* 13 — Bio de autoridade */}
      <Bio />

      {/* 14 — Formulário → checkout */}
      <Form />

      {/* 15 — CTA final */}
      <FinalCTA />

      {/* 16 — Footer */}
      <Footer />
    </div>
  )
}
