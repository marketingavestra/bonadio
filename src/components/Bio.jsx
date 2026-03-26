import Reveal from './Reveal'

const credentials = [
  'OAB/SP 398.640 — mais de 10 anos de advocacia ativa',
  'Participante do X Congresso Internacional de Direitos Humanos de Coimbra',
  'Criador do OAB Lead Qualifier — sistema de qualificação de leads jurídicos',
  'Método testado nas 3 vertentes: processos judiciais, mentoria e B2B empresarial',
  '3 perfis ativos: @wladmirbonadiofilho_adv · @wbonadiofilho · @wladmirbonadiomentor',
]

export default function Bio() {
  return (
    <section className="bg-navy py-20 px-5">
      <div className="max-w-content mx-auto">
        <Reveal>
          <p className="font-heading font-bold text-xs tracking-widest uppercase text-sky-light mb-3 text-center">
            Quem criou
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center md:items-start">
              <div className="w-28 h-28 rounded-full bg-navy-medium border-2 border-sky-light/30 flex items-center justify-center mb-5 text-5xl">
                ⚖️
              </div>
              <h2 className="font-heading font-black text-cream-light text-2xl mb-1">
                Dr. Wladmir Bonadio Filho
              </h2>
              <p className="text-sky-light text-sm font-heading font-semibold mb-1">
                Advogado · Estrategista Digital Jurídico
              </p>
              <p className="text-muted text-xs">OAB/SP 398.640</p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-3">
              {credentials.map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-light/20 border border-sky-light/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sky-light text-xs">→</span>
                  </div>
                  <p className="text-cream/80 text-sm leading-relaxed">{c}</p>
                </div>
              ))}
              <p className="text-muted text-sm leading-relaxed pt-2">
                Ajuda advogados a transformar o Instagram em fonte previsível de clientes —
                sem depender de indicação, dentro das regras da OAB.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
