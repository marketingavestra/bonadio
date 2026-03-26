import Reveal from './Reveal'
import CtaButton from './CtaButton'

export default function CtaBreak({ text = 'QUERO APLICAR O MÉTODO NA MINHA PRÁTICA' }) {
  return (
    <section className="bg-navy py-14 px-5 text-center">
      <Reveal>
        <CtaButton large>{text}</CtaButton>
        <p className="text-xs text-muted mt-3">
          ✓ Acesso imediato &nbsp;·&nbsp; ✓ R$47 com garantia de 7 dias
        </p>
      </Reveal>
    </section>
  )
}
