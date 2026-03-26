import Reveal from './Reveal'

const bonuses = [
  {
    n: 1,
    title: 'Templates de Bio Jurídica',
    value: 'R$97',
    desc: '12 modelos prontos de bio por especialidade (previdenciário, família, trabalhista, consumidor…)',
  },
  {
    n: 2,
    title: 'Checklist OAB Digital',
    value: 'R$67',
    desc: 'Lista completa do que o Provimento 205/21 permite e proíbe — evite advertência na OAB.',
  },
  {
    n: 3,
    title: 'Planilha de Score de Leads',
    value: 'R$127',
    desc: 'Versão manual do OAB Lead Qualifier em Google Sheets — classifique leads sem nenhum conhecimento técnico.',
  },
]

const total = 'R$338'

export default function BonusStack() {
  return (
    <section className="bg-v4-black py-24 px-5 border-t border-v4-border relative overflow-hidden">
      <div className="max-w-content mx-auto relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <p className="font-heading font-black text-[10px] tracking-[0.3em] uppercase text-v4-blue mb-4">
              OFERTA EXCLUSIVA
            </p>
            <h2 className="font-heading font-black text-white uppercase tracking-tighter leading-none"
                style={{ fontSize: 'clamp(28px, 4.5vw, 42px)' }}>
              VOCÊ TAMBÉM LEVA <br/><span className="text-v4-blue">INTEIRAMENTE GRÁTIS</span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-4 mb-12">
          {bonuses.map((b, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-v4-card rounded-xl p-6 md:p-8 border border-v4-border hover:border-v4-blue/30 transition-all duration-300 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left group">
                <div className="w-16 h-16 rounded-2xl bg-v4-dark border border-v4-border flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-3xl filter grayscale group-hover:grayscale-0">🎁</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 mb-3">
                    <div>
                      <span className="text-v4-blue font-heading font-black text-[10px] uppercase tracking-[0.2em] mb-1 block">
                        BÔNUS #{b.n}
                      </span>
                      <h3 className="font-heading font-black text-white text-xl uppercase tracking-tighter group-hover:text-v4-blue transition-colors">
                        {b.title}
                      </h3>
                    </div>
                    <div className="md:text-right flex-shrink-0 bg-success/10 border border-success/20 px-4 py-2 rounded-lg">
                      <p className="text-gray-500 text-[10px] line-through leading-none mb-1 uppercase font-bold">{b.value}</p>
                      <p className="font-heading font-black text-success text-xs tracking-widest leading-none">GRÁTIS</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-2xl italic">
                    {b.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="bg-v4-dark border border-v4-blue/20 rounded-2xl p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-v4-blue to-transparent opacity-50" />
            <p className="text-gray-500 text-[10px] uppercase font-black tracking-widest mb-2">VALOR TOTAL DOS BÔNUS ECONOMIZADO:</p>
            <p className="font-heading font-black text-white text-4xl md:text-5xl tracking-tighter mb-4 opacity-40 line-through">
              {total}
            </p>
            <p className="text-success font-heading font-black text-xs md:text-sm uppercase tracking-[0.2em] animate-pulse">
              ✓ TUDO INCLUÍDO NO SEU ACESSO POR R$ 47
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
