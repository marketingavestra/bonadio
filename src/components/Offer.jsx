import Reveal from './Reveal'

const items = [
  'Módulo 1 — Bio que captura: estrutura exata para indexar no buscador do Instagram',
  'Módulo 2 — Calendário editorial: pilares de conteúdo testados para área jurídica',
  'Módulo 3 — Sistema de triagem: WhatsApp Business + Calendly + CRM básico',
  'Módulo 4 — OAB Lead Qualifier: como identificar leads quentes antes de abordar',
  'Módulo 5 — Produto de entrada R$327: como criar isca qualificadora dentro das regras',
  'Bônus — Roteiros prontos para Reels e carrosséis jurídicos',
]

export default function Offer() {
  return (
    <section className="bg-v4-black py-24 px-5 border-t border-v4-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#E5393508] blur-[120px] rounded-full" />
      
      <div className="max-w-content mx-auto relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <p className="font-heading font-black text-[10px] tracking-[0.3em] uppercase text-v4-blue mb-4">
              O QUE VOCÊ VAI RECEBER
            </p>
            <h2 className="font-heading font-black text-white uppercase tracking-tighter leading-none"
                style={{ fontSize: 'clamp(28px, 4.5vw, 42px)' }}>
              SISTEMA BONADIO DE <br/><span className="text-v4-blue">CAPTAÇÃO JURÍDICA</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {items.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="flex items-start gap-4 group">
                  <div className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0 mt-1 bg-v4-blue/10 border border-v4-blue/30 group-hover:bg-v4-blue group-hover:border-v4-blue transition-all duration-300">
                    <span className="text-v4-blue group-hover:text-white font-black text-[10px] transition-colors">✓</span>
                  </div>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="relative group">
               {/* Glow effect on hover */}
               <div className="absolute -inset-1 bg-gradient-to-r from-v4-blue to-v4-blue/40 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
               
               <div className="relative bg-v4-card border border-v4-border rounded-2xl p-12 text-center shadow-2xl">
                <p className="font-heading font-black text-[10px] tracking-widest uppercase text-v4-blue mb-6">
                  PLAYBOOK DIGITAL • 2025
                </p>
                <div className="w-24 h-32 mx-auto mb-8 rounded-xl bg-v4-dark border border-v4-border flex items-center justify-center shadow-inner overflow-hidden relative group">
                   <div className="absolute inset-x-0 top-0 h-1.5 bg-v4-blue" />
                   <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-500">📄</span>
                </div>
                <h3 className="font-heading font-black text-white text-2xl mb-2 leading-tight uppercase tracking-tighter">
                  SISTEMA BONADIO
                </h3>
                <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-6">ESTRATÉGIA DE CONVERSÃO</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-v4-blue/10 border border-v4-blue/20">
                   <span className="text-[10px] text-v4-blue font-black uppercase">Dr. Wladmir Bonadio Filho</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
