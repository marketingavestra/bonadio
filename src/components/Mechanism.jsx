import Reveal from './Reveal'

export default function Mechanism() {
  return (
    <section className="bg-v4-dark py-24 px-5 border-t border-v4-border">
      <div className="max-w-content mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <p className="font-body font-bold text-[10px] tracking-[0.3em] uppercase text-v4-blue mb-4">
              O MECANISMO
            </p>
            <h2 className="font-heading text-cream-light leading-tight mb-6"
                style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700 }}>
              O que 99% dos advogados não sabe:{' '}
              <span className="text-v4-blue">o dinheiro está nos clientes que você já tem</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-muted text-base text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Enquanto todo mundo está gastando fortunas para captar leads novos, escritórios inteligentes estão aplicando{' '}
            <strong className="text-cream-light">gestão pós-vendas</strong> e extraindo receita de quem já confia neles.
          </p>
        </Reveal>

        {/* Metodologia box */}
        <Reveal delay={0.2}>
          <div className="rounded-xl p-8 md:p-12 relative overflow-hidden"
               style={{ background: '#16171C', border: '1px solid rgba(201,168,76,0.25)' }}>
            <div className="absolute inset-x-0 top-0 h-[2px]"
                 style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />

            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              <div className="flex-shrink-0">
                <span className="inline-block px-4 py-1.5 rounded-full font-body font-semibold text-[10px] uppercase tracking-[2px] text-v4-blue mb-4"
                      style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)' }}>
                  Metodologia Exclusiva
                </span>
                <h3 className="font-heading text-cream-light text-xl md:text-2xl leading-snug"
                    style={{ fontWeight: 700 }}>
                  Gestão Pós-Vendas<br />
                  <span className="text-v4-blue">para Escritórios<br />de Advocacia</span>
                </h3>
              </div>

              <div className="flex-1 space-y-4">
                <p className="text-muted text-sm leading-relaxed">
                  Um sistema estruturado para reativar clientes inativos, criar recorrência de honorários,
                  gerar indicações qualificadas e multiplicar o ticket médio do escritório —
                  tudo sem precisar de um único real em anúncios.
                </p>
                <p className="text-cream-light text-sm leading-relaxed font-body font-semibold"
                   style={{ borderLeft: '3px solid #C9A84C', paddingLeft: '16px' }}>
                  Na Sala Secreta, eu vou abrir a tela do meu computador e mostrar, passo a passo,
                  exatamente como aplicar isso no seu escritório em menos de uma semana.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
