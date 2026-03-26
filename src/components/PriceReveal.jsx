import Reveal from './Reveal'
import CtaButton from './CtaButton'

export default function PriceReveal() {
  return (
    <section className="py-24 px-5 text-center"
             style={{ background: 'linear-gradient(135deg, #0A0A0A 0%, #050505 100%)' }}>
      <div className="max-w-content mx-auto">
        <Reveal>
          <p className="font-heading font-bold text-xs tracking-widest uppercase text-sky-light mb-8">
            Valor total que você recebe
          </p>

          <p className="font-heading font-black text-muted text-xl line-through mb-2">
            R$385,00
          </p>
          <p className="text-muted text-sm mb-8">(playbook + 3 bônus)</p>

          <div className="inline-block bg-white/5 border border-white/10 rounded-3xl px-12 py-10 mb-8">
            <p className="text-muted text-sm mb-2 font-heading font-semibold uppercase tracking-widest">
              Por apenas
            </p>
            <p className="font-heading font-black text-gold leading-none mb-3"
               style={{ fontSize: 'clamp(64px, 10vw, 96px)' }}>
              R$47
            </p>
            <p className="text-muted text-sm">acesso único &nbsp;·&nbsp; PDF + templates</p>
          </div>

          <p className="text-sky-light/70 text-xs mb-10">
            Condição de lançamento — pode mudar a qualquer momento
          </p>

          <div className="flex flex-col items-center gap-3">
            <CtaButton large>SIM! QUERO ACESSO AGORA POR R$47</CtaButton>
            <p className="text-xs text-muted">
              ✓ Checkout seguro &nbsp;·&nbsp; ✓ Entrega imediata &nbsp;·&nbsp; ✓ Garantia 7 dias
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
