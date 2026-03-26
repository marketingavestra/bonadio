import Reveal from './Reveal'

const steps = [
  {
    n: '01',
    title: 'Baixe e leia o documento',
    desc: 'Em 47 minutos você absorve o método completo — sistema de posicionamento, captação e qualificação de leads dentro das regras da OAB.',
  },
  {
    n: '02',
    title: 'Implemente os 3 pilares',
    desc: 'Bio otimizada, conteúdo educativo que atrai lead qualificado e triagem automática via WhatsApp Business + Calendly.',
  },
  {
    n: '03',
    title: 'Receba 10 leads/mês via orgânico',
    desc: 'Leads que chegam com intenção real de contratar. Sem depender de indicação. Sem gastar com tráfego pago no início.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-v4-black py-24 px-5 border-t border-v4-border overflow-hidden">
      <div className="max-w-content mx-auto">
        <Reveal>
          <div className="text-center mb-20">
            <p className="font-heading font-black text-[10px] tracking-[0.3em] uppercase text-v4-blue mb-4">
              PROCESSO DE IMPLEMENTAÇÃO
            </p>
            <h2 className="font-heading font-black text-white uppercase tracking-tighter leading-none"
                style={{ fontSize: 'clamp(28px, 4.5vw, 42px)' }}>
              3 PASSOS PARA ATRAIR <br/><span className="text-v4-blue">10 LEADS POR MÊS</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-heading font-black text-5xl md:text-6xl text-v4-blue/20 group-hover:text-v4-blue transition-colors duration-500 leading-none">
                    {s.n}
                  </span>
                  <div className="h-[1px] flex-1 bg-v4-border group-hover:bg-v4-blue/40 transition-colors duration-500" />
                </div>
                <h3 className="font-heading font-black text-white text-lg uppercase tracking-tight mb-4 group-hover:text-v4-blue transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors italic">
                  "{s.desc}"
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
