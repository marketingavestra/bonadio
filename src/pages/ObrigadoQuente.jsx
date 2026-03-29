// ─── Página de Obrigado — LEAD QUENTE ─────────────────────────────────────
// Perfil: Alta urgência + alto faturamento (score 5–7)
// Mensagem: Exclusividade, atenção diferenciada, CTA direto para WhatsApp

const WA_NUMBER = '5511999999999' // ← trocar pelo número do Dr. Wladmir

export default function ObrigadoQuente() {
  return (
    <div className="min-h-screen font-body"
         style={{ background: 'linear-gradient(160deg, #08080A 0%, #0F1014 60%, #1a0b30 100%)' }}>

      {/* Glow de fundo */}
      <div className="fixed top-0 right-0 w-[60%] h-[50%] bg-[#8B5CF612] blur-[150px] rounded-full pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[40%] h-[40%] bg-[#2a135910] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[640px] mx-auto px-5 py-20 text-center">

        {/* Tag de Lead Qualificado */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-10"
             style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.4)' }}>
          <span className="text-[#A78BFA] text-[10px] font-body font-bold uppercase tracking-[3px]">
            ✦ Lead Qualificado
          </span>
        </div>

        {/* Ícone */}
        <div className="w-20 h-20 rounded-full mx-auto mb-8 flex items-center justify-center text-4xl"
             style={{ background: 'linear-gradient(135deg, #7C3AED, #2a1359)', boxShadow: '0 0 40px rgba(139,92,246,0.4)' }}>
          🎯
        </div>

        {/* Headline */}
        <h1 className="font-heading text-[#E8E6E1] leading-tight mb-6"
            style={{ fontSize: 'clamp(28px, 5vw, 46px)', fontWeight: 700 }}>
          Você é exatamente o perfil que a{' '}
          <span style={{ color: '#8B5CF6' }}>Sala Secreta</span>{' '}
          foi criada.
        </h1>

        {/* Corpo */}
        <p className="text-[rgba(232,230,225,0.65)] text-base leading-relaxed mb-4 max-w-lg mx-auto">
          Inscrição confirmada. Com o seu nível de faturamento e a urgência que você
          tem para resolver esse problema, o Dr. Wladmir pode ter uma{' '}
          <strong className="text-[#E8E6E1]">atenção especial para você na aula.</strong>
        </p>
        <p className="text-[rgba(232,230,225,0.5)] text-sm leading-relaxed mb-10 max-w-md mx-auto">
          O link de acesso será enviado para o seu e-mail e WhatsApp. Mas antes da aula,
          aproveite para entrar em contato direto e já adiantar o seu contexto.
        </p>

        {/* CTA WhatsApp */}
        <a
          href={`https://wa.me/${WA_NUMBER}?text=Ol%C3%A1%20Dr.%20Wladmir!%20Me%20inscrevi%20na%20Sala%20Secreta%20e%20quero%20conversar%20mais%20sobre%20como%20aplicar%20a%20metodologia%20no%20meu%20escrit%C3%B3rio.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-[6px] font-body font-bold text-sm uppercase tracking-[0.1em] text-white transition-all duration-300 hover:-translate-y-[2px] mb-6"
          style={{ background: 'linear-gradient(135deg, #7C3AED, #2a1359)', boxShadow: '0 4px 30px rgba(139,92,246,0.4)' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Falar com o Dr. Wladmir agora
        </a>

        {/* Informação secundária */}
        <p className="text-[rgba(232,230,225,0.3)] text-xs tracking-wide">
          Ou aguarde o link de acesso no seu e-mail · Verifique também o spam
        </p>

        {/* Divisor */}
        <div className="my-12 h-[1px]"
             style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)' }} />

        {/* O que esperar */}
        <h2 className="font-heading text-[#E8E6E1] text-xl mb-6" style={{ fontWeight: 700 }}>
          O que acontece agora?
        </h2>
        <div className="space-y-4 text-left">
          {[
            { n: '01', t: 'Confirmação no e-mail', d: 'Você receberá um e-mail com o link de acesso à Sala Secreta. Verifique também a caixa de spam.' },
            { n: '02', t: 'Lembrete no WhatsApp', d: 'Vamos enviar um lembrete com o link diretamente no seu WhatsApp no dia do evento.' },
            { n: '03', t: 'Metodologia na prática', d: 'Na aula, o Dr. Wladmir vai abrir a tela e mostrar o passo a passo completo de Gestão Pós-Vendas.' },
          ].map(item => (
            <div key={item.n} className="flex gap-4 p-5 rounded-xl"
                 style={{ background: 'rgba(139,92,246,0.06)', border: '1px solid rgba(139,92,246,0.15)' }}>
              <span className="font-heading text-[#8B5CF6] text-lg font-bold flex-shrink-0" style={{ fontWeight: 700 }}>{item.n}</span>
              <div>
                <p className="font-body font-semibold text-[#E8E6E1] text-sm mb-1">{item.t}</p>
                <p className="font-body text-[rgba(232,230,225,0.5)] text-xs leading-relaxed">{item.d}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[rgba(232,230,225,0.2)] text-[10px] mt-16 uppercase tracking-widest">
          © {new Date().getFullYear()} Dr. Wladmir Bonadio Filho · OAB/SP 398.640
        </p>
      </div>
    </div>
  )
}
