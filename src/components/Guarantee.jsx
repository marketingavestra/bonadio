import Reveal from './Reveal'

export default function Guarantee() {
  return (
    <section className="bg-v4-black py-24 px-5 border-t border-v4-border relative overflow-hidden">
      <div className="max-w-content mx-auto flex justify-center relative z-10">
        <Reveal>
          <div className="bg-v4-card rounded-2xl p-12 border border-v4-blue/30 max-w-xl text-center shadow-glow-blue relative group">
            <div className="absolute inset-0 bg-v4-blue/5 rounded-2xl pointer-events-none" />
            <div className="text-6xl mb-8 filter grayscale group-hover:grayscale-0 transition-all">🛡️</div>
            <h2 className="font-heading font-black text-white text-3xl uppercase tracking-tighter mb-6 leading-none">
              7 DIAS DE <span className="text-v4-blue">GARANTIA BLINDADA</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-6 italic">
              "Aplique o Sistema Bonadio por 7 dias. Se você não ver como implementar o método na sua realidade jurídica ou achar que não valeu cada centavo — <strong className="text-white">devolvemos seu investimento integralmente</strong>, sem perguntas."
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-v4-blue/10 border border-v4-blue/20">
               <span className="text-[10px] text-v4-blue font-black uppercase tracking-widest">RISCO ZERO PARA VOCÊ</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
