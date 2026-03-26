import Reveal from './Reveal'

export default function Mechanism() {
  return (
    <section className="bg-navy py-20 px-5">
      <div className="max-w-content mx-auto">
        <Reveal>
          <p className="font-heading font-bold text-xs tracking-widest uppercase text-sky-light mb-3 text-center">
            O mecanismo
          </p>
          <h2 className="font-heading font-black text-cream-light text-center mb-6"
              style={{ fontSize: 'clamp(22px, 3.5vw, 36px)' }}>
            O que 99% dos advogados não sabe sobre{' '}
            <span className="text-sky-light">captar no Instagram</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-muted text-base text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            O erro não é postar pouco. É postar sem <strong className="text-cream">intenção de captação</strong>.{' '}
            O algoritmo do Instagram prioriza conteúdo que gera interação real —
            e o lead qualificado <em>já está procurando</em> um advogado da sua área antes de te seguir.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <Reveal delay={0.15}>
            <div className="bg-navy-medium rounded-2xl p-8 border border-sky-light/15">
              <div className="inline-block bg-sky-light/10 border border-sky-light/30 text-sky-light font-heading font-bold text-xs tracking-widest uppercase px-3 py-1 rounded-full mb-5">
                Mecanismo Único
              </div>
              <h3 className="font-heading font-bold text-cream-light text-lg mb-3">
                OAB Lead Qualifier
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Sistema que cruza dados públicos — OAB ativo, presença digital, CNPJ —
                e classifica cada lead em <strong className="text-gold">Quente / Morno / Frio</strong>{' '}
                antes de você gastar um segundo do seu tempo.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="bg-navy-medium rounded-2xl p-8 border border-sky-light/15">
              <div className="inline-block bg-gold/10 border border-gold/30 text-gold font-heading font-bold text-xs tracking-widest uppercase px-3 py-1 rounded-full mb-5">
                Resultado
              </div>
              <h3 className="font-heading font-bold text-cream-light text-lg mb-3">
                Você aborda só quem está pronto para contratar
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Score ≥ 70 = lead quente, abordar hoje.{' '}
                Score 45–69 = nutrir por 30 dias.{' '}
                Score &lt; 45 = ignorar e poupar energia.{' '}
                Resultado: <strong className="text-cream">conversão 12–22%</strong> vs 3–7% do mercado.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="bg-gradient-to-br from-navy-dark to-navy-mid rounded-2xl p-8 border border-sky-light/20">
            <p className="text-cream-light text-sm leading-relaxed text-center max-w-xl mx-auto">
              É por isso que um advogado com 3.000 seguidores consegue fechar mentoria de R$5.000
              enquanto outro com 30.000 seguidores não consegue nem uma consulta gratuita.{' '}
              <strong className="text-sky-light">O problema é o método, não o tamanho da audiência.</strong>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
