import { useState } from 'react'
import Reveal from './Reveal'

const faqs = [
  {
    q: 'A Sala Secreta é gratuita mesmo?',
    a: 'Sim. É uma aula ao vivo, 100% gratuita. Meu objetivo é mostrar o poder da metodologia de gestão pós-vendas para que você veja o resultado na prática.',
  },
  {
    q: 'Funciona para advogados que estão começando?',
    a: 'A metodologia é mais poderosa para quem já tem alguma base de clientes — mesmo que pequena. Se você já atendeu 10 clientes na vida, já pode aplicar.',
  },
  {
    q: 'Preciso investir em tráfego pago depois?',
    a: 'Não. O método ensina como extrair receita da sua base atual de clientes, gerar indicações e criar recorrência. Zero investimento em tráfego.',
  },
  {
    q: 'Vai ter gravação disponível?',
    a: 'A Sala Secreta é exclusiva e ao vivo. Não haverá replay público. Se você quer o conteúdo, precisa estar presente.',
  },
  {
    q: 'Como sei se a metodologia funciona para a minha área?',
    a: 'A gestão pós-vendas é aplicável em qualquer área do Direito. Já temos resultados em Civil, Trabalhista, Consumidor, Família e Empresarial.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="bg-v4-black py-24 px-5 border-t border-v4-border">
      <div className="max-w-content mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <p className="font-body font-bold text-[10px] tracking-[0.3em] uppercase text-v4-blue mb-4">
              DÚVIDAS FREQUENTES
            </p>
            <h2 className="font-heading text-cream-light leading-tight"
                style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700 }}>
              Perguntas Frequentes
            </h2>
          </div>
        </Reveal>

        <div className="space-y-3 max-w-2xl mx-auto">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  open === i
                    ? 'border-[rgba(139,92,246,0.3)] bg-v4-dark'
                    : 'border-v4-border bg-v4-dark hover:border-[rgba(139,92,246,0.2)]'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-body font-semibold text-sm md:text-base text-cream-light leading-snug pr-4">
                    {faq.q}
                  </span>
                  <span
                    className={`text-v4-blue font-black text-lg flex-shrink-0 transition-transform duration-200 ${
                      open === i ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </button>
                {open === i && (
                  <div className="px-6 pb-6">
                    <div className="h-[1px] bg-v4-border mb-4" />
                    <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
