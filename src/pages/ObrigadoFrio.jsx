// ─── Página de Obrigado — LEAD FRIO ───────────────────────────────────────
// Perfil: Baixo faturamento e/ou sem urgência (score 0–1)
// Mensagem: Confirmação simples + conteúdo educativo de nutrição

export default function ObrigadoFrio() {
  return (
    <div className="min-h-screen font-body"
         style={{ background: '#08080A' }}>

      <div className="fixed top-0 right-0 w-[40%] h-[30%] bg-[#8B5CF607] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[600px] mx-auto px-5 py-20 text-center">

        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-10"
             style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="text-[rgba(232,230,225,0.5)] text-[10px] font-body font-bold uppercase tracking-[3px]">
            Inscrição Realizada
          </span>
        </div>

        {/* Ícone */}
        <div className="w-16 h-16 rounded-full mx-auto mb-8 flex items-center justify-center text-3xl"
             style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          📩
        </div>

        {/* Headline */}
        <h1 className="font-heading text-[#E8E6E1] leading-tight mb-5"
            style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: 700 }}>
          Inscrição realizada com sucesso!
        </h1>

        {/* Corpo */}
        <p className="text-[rgba(232,230,225,0.55)] text-base leading-relaxed mb-4 max-w-md mx-auto">
          O link de acesso será enviado para o e-mail e WhatsApp que você informou.
          Verifique também a caixa de spam.
        </p>
        <p className="text-[rgba(232,230,225,0.4)] text-sm leading-relaxed mb-12 max-w-md mx-auto">
          Aproveite os 40 minutos de aula para entender como a Metodologia de Gestão Pós-Vendas
          pode criar a base financeira que o seu escritório precisa — mesmo que você ainda esteja
          construindo sua carteira de clientes.
        </p>

        {/* Divisor */}
        <div className="h-[1px] mb-10"
             style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />

        {/* O que esperar */}
        <h2 className="font-heading text-[#E8E6E1] text-lg mb-5" style={{ fontWeight: 700 }}>
          Próximos passos
        </h2>
        <div className="space-y-3 text-left">
          {[
            { n: '01', t: 'Verifique seu e-mail', d: 'O link de acesso à Sala Secreta será enviado para o endereço cadastrado. Cheque também o spam.' },
            { n: '02', t: 'Reserve os 40 minutos', d: 'A aula é ao vivo e não terá replay. Separe o horário na sua agenda.' },
            { n: '03', t: 'Assista com atenção', d: 'O Dr. Wladmir vai mostrar como construir previsibilidade financeira independente do seu volume atual de clientes.' },
          ].map(item => (
            <div key={item.n} className="flex gap-4 p-4 rounded-xl"
                 style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <span className="font-heading text-[rgba(139,92,246,0.6)] text-base font-bold flex-shrink-0" style={{ fontWeight: 700 }}>{item.n}</span>
              <div>
                <p className="font-body font-semibold text-[rgba(232,230,225,0.8)] text-sm mb-0.5">{item.t}</p>
                <p className="font-body text-[rgba(232,230,225,0.4)] text-xs leading-relaxed">{item.d}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[rgba(232,230,225,0.15)] text-[10px] mt-16 uppercase tracking-widest">
          © {new Date().getFullYear()} Dr. Wladmir Bonadio Filho · OAB/SP 398.640
        </p>
      </div>
    </div>
  )
}
