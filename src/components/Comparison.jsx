import Reveal from './Reveal'
const evite = [
  'Depender de leads frios e tráfego caro',
  'Perder clientes antigos por falta de contato',
  'Caixa imprevisível mês após mês',
  'Cobrar abaixo da tabela por medo',
  'Concorrência avançando enquanto você estagna',
]

const garanta = [
  'Método para gerar receita sem gastar em tráfego',
  'Base de clientes gerando contratos recorrentes',
  'Previsibilidade financeira no escritório',
  'Indicações qualificadas chegando toda semana',
  'Caixa R$50k mais forte em semanas',
]

export default function Comparison() {
  return (
    <section className="bg-v4-black py-24 px-5 border-t border-v4-border">
      <div className="max-w-content mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <p className="font-body font-bold text-[10px] tracking-[0.3em] uppercase text-v4-blue mb-4">
              DOIS CAMINHOS
            </p>
            <h2 className="font-heading text-cream-light leading-tight"
                style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700 }}>
              Onde você vai estar daqui a 60 dias?
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Evite */}
          <Reveal delay={0.1}>
            <div className="bg-v4-dark rounded-xl p-8 border border-[rgba(192,57,43,0.2)] h-full">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-8 h-8 rounded-full bg-[rgba(192,57,43,0.15)] border border-[rgba(192,57,43,0.3)] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C0392B] font-black text-sm leading-none">✕</span>
                </div>
                <h3 className="font-body font-bold text-[11px] uppercase tracking-[0.25em] text-[#C0392B]">
                  CONTINUE FAZENDO O MESMO
                </h3>
              </div>
              <div className="space-y-4">
                {evite.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#C0392B] font-black text-sm flex-shrink-0 mt-0.5">✕</span>
                    <p className="text-[rgba(232,230,225,0.5)] text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Garanta */}
          <Reveal delay={0.2}>
            <div className="bg-v4-dark rounded-xl p-8 border border-[rgba(139,92,246,0.25)] h-full relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #8B5CF6, transparent)' }} />
              <div className="flex items-center gap-3 mb-7">
                <div className="w-8 h-8 rounded-full bg-purple-dim border border-[rgba(139,92,246,0.3)] flex items-center justify-center flex-shrink-0">
                  <span className="text-v4-blue font-black text-sm leading-none">✓</span>
                </div>
                <h3 className="font-body font-bold text-[11px] uppercase tracking-[0.25em] text-v4-blue">
                  ENTRE NA SALA SECRETA
                </h3>
              </div>
              <div className="space-y-4">
                {garanta.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-v4-blue font-black text-sm flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-cream-light text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  )
}
