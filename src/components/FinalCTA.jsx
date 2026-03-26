import Reveal from './Reveal'
import CtaButton from './CtaButton'

export default function FinalCTA() {
  return (
    <section className="py-24 px-5 text-center"
             style={{ background: 'linear-gradient(135deg, #0D0D0D 0%, #0A0A0A 100%)' }}>
      <div className="max-w-content mx-auto">
        <Reveal>
          <h2 className="font-heading font-black text-cream-light mb-4 leading-tight"
              style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}>
            Pare de depender de indicação.{' '}
            <span className="text-gold">Comece hoje.</span>
          </h2>
          <p className="text-muted text-base mb-10 max-w-md mx-auto">
            R$47 para ter o método completo que um advogado com 10+ anos levou anos para
            construir — e você pode implementar em 47 minutos.
          </p>
          <div className="flex flex-col items-center gap-3">
            <CtaButton large>QUERO COMEÇAR AGORA</CtaButton>
            <p className="text-xs text-muted">
              ✓ Acesso imediato &nbsp;·&nbsp; ✓ Garantia 7 dias &nbsp;·&nbsp; ✓ PDF + templates + bônus
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
