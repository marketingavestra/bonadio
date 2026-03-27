import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center bg-v4-black overflow-hidden py-24 md:py-32">
      {/* Gold glow effects */}
      <div className="absolute top-0 right-0 w-[55%] h-[65%] bg-[#8B5CF609] blur-[130px] rounded-full -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[35%] h-[35%] bg-[#8B5CF606] blur-[100px] rounded-full -ml-10 -mb-10" />

      <div className="relative z-10 max-w-content mx-auto px-5 w-full grid md:grid-cols-2 gap-14 items-center">
        <div>
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="inline-block px-6 py-2 rounded-full font-body font-semibold text-[11px] uppercase tracking-[2.5px] text-v4-blue"
                  style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)' }}>
              Sala Secreta · Evento Exclusivo
            </span>
          </motion.div>

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 }}
            className="font-body text-muted text-sm mb-4 leading-relaxed"
          >
            Se você é advogado e quer previsibilidade financeira...
          </motion.p>

          {/* H1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-7"
          >
            <h1 className="font-heading text-cream-light leading-[1.15]"
                style={{ fontSize: 'clamp(32px, 5.5vw, 58px)', fontWeight: 700 }}>
              Em 40 minutos, descubra como{' '}
              <span className="text-v4-blue">injetar R$50 mil a mais</span>{' '}
              no caixa do seu escritório
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-muted text-sm md:text-base mb-10 max-w-xl leading-relaxed"
          >
            A metodologia de <strong className="text-cream-light">Gestão Pós-Vendas</strong> que escritórios de advocacia
            estão usando para transformar clientes antigos em receita recorrente — enquanto seus concorrentes
            continuam caçando leads frios.
          </motion.p>

        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden md:block"
        >
          <div className="aspect-[4/5] rounded-2xl bg-v4-dark border border-v4-border relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <img
              src="/Foto_Expert_Wladmir.png"
              alt="Dr. Wladmir Bonadio Filho"
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.15] group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-8 left-8 right-8 z-20 space-y-3 font-body">
              <div className="bg-v4-black/70 backdrop-blur-md border border-v4-border rounded-xl p-4">
                <p className="text-[10px] text-v4-blue uppercase font-bold tracking-widest mb-1">+10 ANOS</p>
                <p className="text-sm font-semibold text-cream-light">Experiência Jurídica</p>
              </div>
              <div className="bg-v4-black/70 backdrop-blur-md border border-v4-border rounded-xl p-4 md:translate-x-10">
                <p className="text-[10px] text-v4-blue uppercase font-bold tracking-widest mb-1">METODOLOGIA EXCLUSIVA</p>
                <p className="text-sm font-semibold text-cream-light">Gestão Pós-Vendas</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
