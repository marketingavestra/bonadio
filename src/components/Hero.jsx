import { motion } from 'framer-motion'
import CtaButton from './CtaButton'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-v4-black overflow-hidden py-24 md:py-32">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[60%] h-[70%] bg-[#0070FF11] blur-[120px] rounded-full -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[#27AE6008] blur-[100px] rounded-full -ml-10 -mb-10" />

      <div className="relative z-10 max-w-content mx-auto px-5 w-full grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <h1 className="font-heading font-black text-3xl md:text-5xl text-white leading-tight uppercase tracking-tighter">
              DÊ O PRIMEIRO PASSO PARA <span className="text-v4-blue">CONTRATAR 10 NOVOS CLIENTES</span> EM 2025
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed"
          >
            Aprenda como o Dr. Wladmir Bonadio Filho utiliza o sistema orgânico de captação pelo Instagram para
            atrair leads qualificados <strong className="text-white">sem violar as regras da OAB</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-start gap-4"
          >
            <CtaButton large>TESTAR ESTRATÉGIA</CtaButton>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-v4-blue/40 flex items-center justify-center p-1 bg-v4-blue/10 overflow-hidden">
                <span className="text-[10px] text-v4-blue font-bold text-center leading-tight">30 DIAS GARANTIA</span>
              </div>
              <p className="text-xs text-muted max-w-[200px]">
                Acesso imediato ao Playbook + Guia de Execução rápida.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Placeholder / Photo Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden md:block"
        >
          <div className="aspect-[4/5] rounded-3xl bg-neutral-900 border border-v4-border relative overflow-hidden group shadow-2xl">
            {/* Overlay Gradient (stays on top of the image) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            
            <img 
              src="/Foto Perfil.jpg" 
              alt="Dr. Wladmir Bonadio Filho" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
            />

            {/* Lawyer Portrait Text with stats */}
            <div className="absolute bottom-8 left-8 right-8 z-20 space-y-4 font-body">
               <div className="bg-v4-black/60 backdrop-blur-md border border-white/10 rounded-xl p-4">
                  <p className="text-[10px] text-v4-blue uppercase font-black mb-1">+12 ANOS</p>
                  <p className="text-sm font-bold text-white uppercase tracking-tight">Experiência Jurídica</p>
               </div>
               <div className="bg-v4-black/60 backdrop-blur-md border border-white/10 rounded-xl p-4 md:translate-x-12">
                  <p className="text-[10px] text-success uppercase font-black mb-1">+1.000 LEADS</p>
                  <p className="text-sm font-bold text-white uppercase tracking-tight">Gerados pelo Instagram</p>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
