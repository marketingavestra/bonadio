import Reveal from './Reveal'

const attempts = [
  'Investiu em tráfego pago e atraiu curiosos que nunca fecharam',
  'Postou conteúdo no Instagram e não converteu em clientes',
  'Baixou o preço dos honorários achando que o problema era a concorrência',
  'Pagou agência de marketing que não entendia a OAB',
  'Tentou networking e indicação, mas o fluxo é imprevisível',
  'Ficou dependendo de clientes novos para pagar as contas do mês',
]

export default function Problem() {
  return (
    <section className="bg-v4-black py-24 px-5 border-t border-v4-border relative overflow-hidden">
      <div className="max-w-content mx-auto relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <p className="font-body font-bold text-[10px] tracking-[0.3em] uppercase text-v4-blue mb-4">
              O PROBLEMA
            </p>
            <h2 className="font-heading text-cream-light leading-tight mb-6"
                style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700 }}>
              Você já tentou de tudo para aumentar o faturamento do escritório, não é?
            </h2>
            <p className="text-muted text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              E o resultado é sempre o mesmo: caixa apertado e a sensação de que falta algo que ninguém te ensinou.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {attempts.map((a, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="flex items-start gap-4 bg-v4-dark border border-v4-border rounded-lg px-6 py-5 group hover:border-[rgba(139,92,246,0.2)] transition-colors">
                <span className="text-[#C0392B] font-black flex-shrink-0 mt-0.5">✕</span>
                <p className="text-muted text-sm leading-relaxed group-hover:text-cream-light transition-colors">
                  {a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="bg-v4-dark border border-v4-border rounded-xl p-10 text-center relative overflow-hidden group">
            <div className="absolute inset-x-0 top-0 h-[2px]"
                 style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.4), transparent)' }} />
            <p className="text-cream-light text-base md:text-lg font-body font-semibold leading-relaxed mb-3">
              Caixa apertado, ansiedade todo dia 5 e a sensação de que{' '}
              <span className="text-v4-blue">falta algo que ninguém te ensinou.</span>
            </p>
            <p className="text-muted text-sm italic max-w-lg mx-auto">
              "O problema não é você. É a falta de um método para extrair receita de quem já confia em você."
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
