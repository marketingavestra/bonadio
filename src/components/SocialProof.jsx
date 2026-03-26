import Reveal from './Reveal'

const cases = [
  {
    name: 'Advogada Previdenciária',
    seg: '1.676 seguidores · OAB/SP 2 anos',
    result: '3 contratos em 45 dias',
    detail: 'Bio otimizada + 5 posts âncora geraram demanda orgânica suficiente para fechar sem tráfego pago.',
    score: '87',
  },
  {
    name: 'Advogado Trabalhista',
    seg: '4.200 seguidores · OAB/MG 5 anos',
    result: 'R$9.000 em contratos no mês 3',
    detail: 'Produto de entrada R$327 + upsell para mentoria gerou segunda fonte de receita recorrente.',
    score: '92',
  },
  {
    name: 'Advogada Família',
    seg: '2.900 seguidores · OAB/RJ 3 anos',
    result: '10 leads/mês via orgânico',
    detail: 'Calendário editorial com pilares testados + triagem automática via WhatsApp Business.',
    score: '79',
  },
]

export default function SocialProof() {
  return (
    <section className="bg-navy-mid py-20 px-5">
      <div className="max-w-content mx-auto">
        <Reveal>
          <p className="font-heading font-bold text-xs tracking-widest uppercase text-sky-light mb-3 text-center">
            Resultados reais
          </p>
          <h2 className="font-heading font-black text-cream-light text-center mb-12"
              style={{ fontSize: 'clamp(22px, 3.5vw, 36px)' }}>
            Advogados que aplicaram o método
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-navy-medium rounded-2xl p-7 border border-sky-light/15 hover:-translate-y-1 transition-transform duration-200 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-navy-mid flex items-center justify-center">
                    <span className="text-lg">⚖️</span>
                  </div>
                  <span className="font-heading font-black text-gold text-sm">Score {c.score}/100</span>
                </div>
                <h3 className="font-heading font-bold text-cream-light text-sm mb-1">{c.name}</h3>
                <p className="text-muted text-xs mb-4">{c.seg}</p>
                <p className="font-heading font-black text-sky-light text-xl mb-3">{c.result}</p>
                <p className="text-muted text-xs leading-relaxed mt-auto">{c.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
