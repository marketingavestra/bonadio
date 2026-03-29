// ─── Página de Obrigado — LEAD MORNO ──────────────────────────────────────
// Perfil: Tem faturamento mas pouca urgência, ou urgência sem alto faturamento (score 2–4)

const WA_NUMBER = '5511999999999' // ← trocar pelo número do Dr. Wladmir

export default function ObrigadoMorno() {
  return (
    <div className="min-h-screen font-body"
         style={{ background: 'linear-gradient(160deg, #08080A 0%, #0F1014 100%)' }}>

      <div className="fixed top-0 right-0 w-[50%] h-[40%] bg-[#8B5CF60A] blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[640px] mx-auto px-5 py-20 text-center">

        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-10"
             style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)' }}>
          <span className="text-[#8B5CF6] text-[10px] font-body font-bold uppercase tracking-[3px]">
            Inscrição Confirmada
          </span>
        </div>

        {/* Ícone */}
        <div className="w-20 h-20 rounded-full mx-auto mb-8 flex items-center justify-center text-4xl"
             style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.3)' }}>
          ✅
        </div>

        {/* Headline */}
        <h1 className="font-heading text-[#E8E6E1] leading-tight mb-6"
            style={{ fontSize: 'clamp(26px, 4.5vw, 42px)', fontWeight: 700 }}>
          Ótimo! Sua vaga na{' '}
          <span style={{ color: '#8B5CF6' }}>Sala Secreta</span>{' '}
          está garantida.
        </h1>

        {/* Corpo */}
        <p className="text-[rgba(232,230,225,0.65)] text-base leading-relaxed mb-4 max-w-lg mx-auto">
          Você tem o perfil certo para aplicar a metodologia de Gestão Pós-Vendas.
          Quando sentir que chegou o momento de acelerar, a Sala Secreta vai te dar
          o caminho completo.
        </p>
        <p className="text-[rgba(232,230,225,0.45)] text-sm leading-relaxed mb-10 max-w-md mx-auto">
          O link de acesso será enviado para o e-mail e WhatsApp que você informou.
          Esteja presente nos 40 minutos de aula — não haverá replay.
        </p>

        {/* CTA WhatsApp (secundário) */}
        <a
          href={`https://wa.me/${WA_NUMBER}?text=Ol%C3%A1%20Dr.%20Wladmir!%20Me%20inscrevi%20na%20Sala%20Secreta%20e%20quero%20saber%20mais%20sobre%20a%20metodologia.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[6px] font-body font-bold text-sm uppercase tracking-[0.1em] transition-all duration-300 hover:-translate-y-[2px] mb-4"
          style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.3)', color: '#A78BFA' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Entrar em contato pelo WhatsApp
        </a>

        <p className="text-[rgba(232,230,225,0.25)] text-xs tracking-wide mb-12">
          Ou aguarde o link no seu e-mail
        </p>

        {/* Divisor */}
        <div className="h-[1px] mb-10"
             style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.2), transparent)' }} />

        {/* O que esperar */}
        <h2 className="font-heading text-[#E8E6E1] text-xl mb-6" style={{ fontWeight: 700 }}>
          O que acontece agora?
        </h2>
        <div className="space-y-3 text-left">
          {[
            { n: '01', t: 'Confirmação no e-mail', d: 'Você receberá o link de acesso à Sala Secreta. Verifique a caixa de spam.' },
            { n: '02', t: 'Lembrete no WhatsApp', d: 'Enviaremos um lembrete com o link no dia do evento.' },
            { n: '03', t: 'Aula ao vivo de 40 minutos', d: 'O Dr. Wladmir apresenta a Metodologia de Gestão Pós-Vendas completa, sem replay.' },
          ].map(item => (
            <div key={item.n} className="flex gap-4 p-4 rounded-xl"
                 style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <span className="font-heading text-[#8B5CF6] text-base font-bold flex-shrink-0" style={{ fontWeight: 700 }}>{item.n}</span>
              <div>
                <p className="font-body font-semibold text-[#E8E6E1] text-sm mb-0.5">{item.t}</p>
                <p className="font-body text-[rgba(232,230,225,0.45)] text-xs leading-relaxed">{item.d}</p>
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
