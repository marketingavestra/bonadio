import Reveal from './Reveal'

const cases = [
  {
    area: 'Direito Civil · SP',
    result: '+R$38k',
    detail: 'Reativou 12 clientes antigos com sistema de follow-up pós-venda.',
    prazo: '45 dias',
  },
  {
    area: 'Direito Trabalhista · MG',
    result: '+R$52k',
    detail: 'Implementou motor de indicações — 3 a 5 leads qualificados por semana.',
    prazo: '60 dias',
  },
  {
    area: 'Direito do Consumidor · RJ',
    result: '+R$27k',
    detail: 'Criou contratos de recorrência com clientes existentes.',
    prazo: '30 dias',
  },
]

export default function SocialProof() {
  return (
    <section className="bg-v4-dark py-24 px-5 border-t border-v4-border">
      <div className="max-w-content mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <p className="font-body font-bold text-[10px] tracking-[0.3em] uppercase text-v4-blue mb-4">
              RESULTADOS REAIS
            </p>
            <h2 className="font-heading text-cream-light leading-tight"
                style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700 }}>
              Advogados que aplicaram a metodologia
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-v4-card border border-v4-border rounded-xl p-7 hover:border-[rgba(201,168,76,0.3)] hover:-translate-y-1 transition-all duration-200 h-full flex flex-col relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-[2px]"
                     style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)' }} />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-full bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.2)] flex items-center justify-center flex-shrink-0">
                    <span>⚖️</span>
                  </div>
                  <p className="text-muted text-xs font-body font-semibold uppercase tracking-wider">{c.area}</p>
                </div>
                <p className="font-heading text-v4-blue mb-3"
                   style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700 }}>
                  {c.result}
                </p>
                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{c.detail}</p>
                <div className="flex items-center gap-2 pt-4 border-t border-v4-border">
                  <span className="w-1.5 h-1.5 rounded-full bg-v4-blue opacity-70" />
                  <p className="text-v4-blue text-[11px] font-body font-semibold uppercase tracking-wider">
                    Em {c.prazo}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
