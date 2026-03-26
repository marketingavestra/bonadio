import Reveal from './Reveal'

const attempts = [
  'Colocar o número do WhatsApp na bio sem otimização alguma',
  'Postar conteúdo genérico sobre "dicas jurídicas"',
  'Fazer vídeos sem CTA e sem método de captação',
  'Esperar que o seguidor virasse cliente por conta própria',
  'Tentar tráfego pago sem posicionamento claro e jogar dinheiro fora',
  'Criar um site que ninguém encontra porque não tem SEO',
]

export default function Problem() {
  return (
    <section className="bg-v4-black py-24 px-5 border-t border-v4-border relative overflow-hidden">
      <div className="max-w-content mx-auto relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <p className="font-heading font-black text-[10px] tracking-[0.3em] uppercase text-v4-blue mb-4">
              O CENÁRIO ATUAL
            </p>
            <h2 className="font-heading font-black text-white uppercase tracking-tighter leading-none mb-6"
                style={{ fontSize: 'clamp(28px, 4.5vw, 42px)' }}>
              VOCÊ JÁ TENTOU TUDO E <br/><span className="text-v4-blue">NADA FUNCIONOU</span>, NÉ?
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              O mês fecha e você continua dependendo das mesmas indicações de sempre, sem previsibilidade e sem escala.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {attempts.map((a, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="flex items-start gap-4 bg-v4-card border border-v4-border rounded-lg px-6 py-5 group hover:border-v4-blue/30 transition-colors">
                <span className="text-v4-blue font-black flex-shrink-0 mt-1">✕</span>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white transition-colors uppercase font-bold tracking-tight">
                  {a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="bg-v4-dark border border-v4-blue/20 rounded-xl p-10 text-center relative overflow-hidden group">
            <div className="absolute inset-x-0 top-0 h-1 bg-v4-blue opacity-50 group-hover:opacity-100 transition-opacity" />
            <p className="text-white text-lg md:text-xl font-black uppercase tracking-tighter leading-tight mb-4">
              RESULTADO: <span className="text-v4-blue">+80% DOS SEUS CLIENTES</span> AINDA VÊM DE INDICAÇÃO
            </p>
            <p className="text-gray-500 text-sm italic max-w-lg mx-auto">
              "Sem previsibilidade, sem escala, sem controle. O problema não é você, mas sim a falta de um método que respeite as regras da OAB."
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
