import Reveal from './Reveal'

const credentials = [
  'OAB/SP 398.640 — mais de 10 anos de advocacia ativa',
  'Especialidades: Civil, Trabalhista, Consumidor, Previdenciário, Empresarial e Família',
  'Participante do Congresso Internacional de Direitos Humanos de Coimbra',
  'Mentor de advogados digitais com resultados documentados',
  '3.500 seguidores no perfil profissional — @wladmirbonadiofilho_adv',
]

export default function Bio() {
  return (
    <section className="bg-v4-dark py-24 px-5 border-t border-v4-border">
      <div className="max-w-content mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <p className="font-body font-bold text-[10px] tracking-[0.3em] uppercase text-v4-blue mb-4">
              QUEM VAI ENSINAR
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center md:items-start">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[rgba(201,168,76,0.3)] mb-5 bg-v4-card">
                <img
                  src="/Foto Perfil.jpg"
                  alt="Dr. Wladmir Bonadio Filho"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="font-heading text-cream-light text-2xl mb-1" style={{ fontWeight: 700 }}>
                Dr. Wladmir Bonadio Filho
              </h2>
              <p className="text-v4-blue font-body font-semibold text-sm mb-1">
                Advogado · Mentor de Escritórios
              </p>
              <p className="text-muted text-xs">OAB/SP 398.640</p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-4">
              <p className="text-muted text-sm leading-relaxed">
                Com mais de 10 anos de experiência em Direito Civil, Trabalhista, Consumidor, Previdenciário,
                Empresarial e Família, decidi ensinar o que nenhuma faculdade ensina:{' '}
                <strong className="text-cream-light">como transformar um escritório de advocacia em um negócio financeiramente saudável e previsível.</strong>
              </p>
              <div className="space-y-3 pt-2">
                {credentials.map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                         style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)' }}>
                      <span className="text-v4-blue text-xs">→</span>
                    </div>
                    <p className="text-muted text-sm leading-relaxed">{c}</p>
                  </div>
                ))}
              </div>
              <p className="text-v4-blue text-sm font-body font-semibold pt-2 italic"
                 style={{ borderLeft: '3px solid rgba(201,168,76,0.4)', paddingLeft: '12px' }}>
                "Quem ensina é um advogado que faz — não um coach sem OAB."
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
