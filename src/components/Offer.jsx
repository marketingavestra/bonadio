import Reveal from './Reveal'

const items = [
  { icon: '💰', title: 'O Mapa do Dinheiro Invisível', desc: 'Como identificar, na sua base atual de clientes, oportunidades de faturamento que estão passando despercebidas.' },
  { icon: '🔄', title: 'Sistema de Reativação de Clientes', desc: 'O script exato e o momento certo para entrar em contato com clientes antigos e gerar novos contratos.' },
  { icon: '📈', title: 'Motor de Indicações Qualificadas', desc: 'Como transformar cada cliente satisfeito em um canal de indicação previsível, sem parecer vendedor.' },
  { icon: '⚖️', title: 'Recorrência de Honorários', desc: 'O modelo para criar contratos que geram receita mensal previsível — saia da montanha-russa financeira.' },
  { icon: '🎯', title: 'A Conta dos R$50 mil', desc: 'Vou fazer a conta ao vivo: como chegar a R$50k de caixa adicional aplicando cada pilar da metodologia.' },
]

export default function Offer() {
  return (
    <section className="bg-v4-dark py-24 px-5 border-t border-v4-border relative overflow-hidden">
      <div className="max-w-content mx-auto relative z-10">
        <Reveal>
          <div className="text-center mb-14">
            <p className="font-body font-bold text-[10px] tracking-[0.3em] uppercase text-v4-blue mb-4">
              O QUE VOCÊ VAI APRENDER
            </p>
            <h2 className="font-heading text-cream-light leading-tight"
                style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700 }}>
              40 minutos que podem mudar a realidade financeira do seu escritório
            </h2>
          </div>
        </Reveal>

        <div className="space-y-4">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="flex items-start gap-5 bg-v4-card border border-v4-border rounded-xl px-6 py-5 group hover:border-[rgba(139,92,246,0.3)] transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-[rgba(139,92,246,0.08)] border border-[rgba(139,92,246,0.15)] flex items-center justify-center flex-shrink-0 text-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-body font-semibold text-cream-light text-sm md:text-base mb-1 group-hover:text-v4-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
