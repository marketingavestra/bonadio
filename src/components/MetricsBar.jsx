import Reveal from './Reveal'

const metrics = [
  { number: '1,3M', label: 'advogados ativos no Brasil' },
  { number: '+80%', label: 'sem estratégia digital funcionando' },
  { number: 'R$3.000', label: 'ticket médio por contrato fechado' },
  { number: '10/mês', label: 'leads qualificados via orgânico' },
]

export default function MetricsBar() {
  return (
    <section className="bg-v4-black py-16 px-5 border-y border-v4-border relative overflow-hidden">
      <div className="max-w-content mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center relative z-10">
        {metrics.map((m, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="group">
              <p className="font-heading font-black text-white leading-none mb-3 group-hover:text-v4-blue transition-colors duration-300"
                 style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>
                {m.number}
              </p>
              <p className="text-gray-500 text-[10px] md:text-xs uppercase font-black tracking-widest leading-snug group-hover:text-gray-400 transition-colors uppercase">
                {m.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-v4-blue/30 to-transparent" />
    </section>
  )
}
