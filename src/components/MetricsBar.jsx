import Reveal from './Reveal'

const metrics = [
  { number: '+10 anos', label: 'de experiência jurídica' },
  { number: 'R$50k',    label: 'potencial de caixa extra' },
  { number: '40 min',   label: 'de aula ao vivo' },
  { number: 'R$0',      label: 'investimento em tráfego' },
]

export default function MetricsBar() {
  return (
    <section className="bg-v4-dark py-16 px-5 border-y border-v4-border relative overflow-hidden">
      <div className="max-w-content mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center relative z-10">
        {metrics.map((m, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="group">
              <p className="font-heading text-v4-blue leading-none mb-3 group-hover:text-v4-accent transition-colors duration-300"
                 style={{ fontSize: 'clamp(28px, 4.5vw, 40px)', fontWeight: 700 }}>
                {m.number}
              </p>
              <p className="text-muted text-[10px] md:text-xs uppercase font-body font-semibold tracking-widest leading-snug">
                {m.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[1px]"
           style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />
    </section>
  )
}
