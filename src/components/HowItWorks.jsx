import Reveal from './Reveal'

const steps = [
  {
    n: '01',
    title: 'Inscreva-se gratuitamente',
    desc: 'Preencha seus dados abaixo e garanta sua vaga na Sala Secreta. São poucas vagas para manter a qualidade da aula.',
  },
  {
    n: '02',
    title: 'Assista os 40 minutos ao vivo',
    desc: 'Eu vou mostrar na tela a metodologia completa, com exemplos reais e números. Sem enrolação, sem pitch de 2 horas.',
  },
  {
    n: '03',
    title: 'Aplique e veja o caixa crescer',
    desc: 'Com o passo a passo que você vai receber, é possível implementar o método em 7 dias e ver os primeiros resultados nas próximas semanas.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-v4-black py-24 px-5 border-t border-v4-border overflow-hidden">
      <div className="max-w-content mx-auto">
        <Reveal>
          <div className="text-center mb-20">
            <p className="font-body font-bold text-[10px] tracking-[0.3em] uppercase text-v4-blue mb-4">
              COMO FUNCIONA
            </p>
            <h2 className="font-heading text-cream-light leading-tight"
                style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700 }}>
              3 passos simples
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-heading text-v4-blue/20 group-hover:text-v4-blue transition-colors duration-500 leading-none"
                        style={{ fontSize: 'clamp(48px, 6vw, 64px)', fontWeight: 700 }}>
                    {s.n}
                  </span>
                  <div className="h-[1px] flex-1 bg-v4-border group-hover:bg-[rgba(201,168,76,0.4)] transition-colors duration-500" />
                </div>
                <h3 className="font-heading text-cream-light text-lg mb-4 group-hover:text-v4-blue transition-colors"
                    style={{ fontWeight: 700 }}>
                  {s.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed group-hover:text-cream/70 transition-colors">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
