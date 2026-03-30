import { useState, useEffect } from 'react'
import Reveal from './Reveal'
import { supabase } from '../lib/supabase'
import { calcLeadTier } from '../lib/leadScore'

const WEBHOOK_URL = 'https://n8n.araxa.app/webhook/receive-webhook'

function applyWhatsAppMask(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 11) return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  return value
}

function useCountdown() {
  const [time, setTime] = useState({ h: 23, m: 59, s: 59 })

  useEffect(() => {
    const KEY = 'sala_secreta_deadline'
    let deadline = parseInt(localStorage.getItem(KEY) || '0')
    if (!deadline || deadline < Date.now()) {
      deadline = Date.now() + 23 * 3600 * 1000 + 59 * 60 * 1000
      localStorage.setItem(KEY, String(deadline))
    }
    const tick = () => {
      const diff = Math.max(0, deadline - Date.now())
      setTime({
        h: Math.floor(diff / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return time
}

function pad(n) { return String(n).padStart(2, '0') }

const inputStyle = {
  focusBorder: 'rgba(139,92,246,0.5)',
  blurBorder: 'rgba(255,255,255,0.06)',
}

const fields_config = [
  { name: 'nome',        label: 'NOME COMPLETO',                      type: 'text',   placeholder: 'Dr. Wladmir Bonadio' },
  { name: 'email',       label: 'E-MAIL PROFISSIONAL',                type: 'email',  placeholder: 'seu@email.com.br' },
  { name: 'whatsapp',    label: 'TELEFONE (WHATSAPP COM DDD)',         type: 'tel',    placeholder: '(00) 00000-0000' },
  { name: 'atuacao',     label: 'QUAL SEU RAMO DE ATUAÇÃO?',          type: 'text',   placeholder: 'Ex: Direito Previdenciário, Trabalhista...' },
  { name: 'cargo',       label: 'VOCÊ É O QUE NA EMPRESA?',           type: 'text',   placeholder: 'Ex: Sócio, Sócio-Fundador, Advogado Associado' },
  { name: 'faturamento', label: 'QUAL FATURAMENTO MÉDIO DO ESCRITÓRIO?', type: 'select', options: [
    'Ainda não faturo',
    'Até R$ 10.000/mês',
    'De R$ 10.000 a R$ 50.000/mês',
    'De R$ 50.000 a R$ 100.000/mês',
    'Mais de R$ 100.000/mês',
  ]},
  { name: 'urgencia', label: 'O QUÃO URGENTE É RESOLVER O PROBLEMA DE POUCOS LEADS QUALIFICADOS?', type: 'select', options: [
    'Não é urgente, posso esperar',
    'Tenho urgência moderada',
    'É urgente, quero resolver logo',
    'Extremamente urgente, preciso resolver agora',
  ]},
]

const EMPTY = { nome: '', email: '', whatsapp: '', atuacao: '', cargo: '', faturamento: '', urgencia: '' }

export default function Form() {
  const [fields, setFields] = useState(EMPTY)
  const [error, setError]   = useState('')
  const [loading, setLoading] = useState(false)
  const { h, m, s } = useCountdown()

  function handleChange(e) {
    const { name, value } = e.target
    setFields(f => ({
      ...f,
      [name]: name === 'whatsapp' ? applyWhatsAppMask(value) : value,
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!fields.nome.trim())                                   { setError('Informe seu nome.');              return }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))    { setError('E-mail inválido.');               return }
    if (fields.whatsapp.replace(/\D/g, '').length < 10)       { setError('Informe seu WhatsApp com DDD.'); return }
    if (!fields.faturamento)                                   { setError('Selecione o faturamento.');       return }
    if (!fields.urgencia)                                      { setError('Selecione o nível de urgência.'); return }

    setLoading(true)
    if (typeof window !== 'undefined' && window.fbq) window.fbq('track', 'Lead')
    if (typeof window !== 'undefined' && window.gtag) window.gtag('event', 'generate_lead')

    const tier = calcLeadTier(fields.faturamento, fields.urgencia)

    const payload = {
      nome:        fields.nome,
      email:       fields.email,
      whatsapp:    fields.whatsapp,
      atuacao:     fields.atuacao,
      cargo:       fields.cargo,
      faturamento: fields.faturamento,
      urgencia:    fields.urgencia,
      lead_tier:   tier,           // 'quente' | 'morno' | 'frio'
      evento:      'sala_secreta',
      source:      window.location.href,
    }

    try {
      // 1) Supabase
      const { error: dbError } = await supabase.from('leads').insert(payload)
      if (dbError) console.error('Database error:', dbError)

      // 2) Webhook
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, timestamp: new Date().toISOString() }),
      }).catch(err => console.error('Webhook error:', err))
    } catch (err) {
      console.error('Submit error:', err)
    }

    // Redireciona para a página de obrigado de acordo com o tier
    window.location.href = `/sala-secreta?obrigado=${tier}`
  }

  return (
    <section id="formulario" className="py-24 px-5 border-t border-v4-border relative overflow-hidden"
             style={{ background: 'linear-gradient(135deg, #08080A 0%, #0F1014 100%)' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#8B5CF605] blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-content mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <p className="font-body font-bold text-[10px] tracking-[0.3em] uppercase text-v4-blue mb-4">
              GARANTA SUA VAGA
            </p>
            <h2 className="font-heading text-cream-light leading-tight mb-4"
                style={{ fontSize: 'clamp(24px, 4.5vw, 44px)', fontWeight: 700 }}>
              Chega de caixa apertado. Entre na Sala Secreta e descubra como injetar{' '}
              <span className="text-v4-blue">R$50 mil</span> no seu escritório.
            </h2>
            <p className="text-muted text-sm md:text-base max-w-lg mx-auto">
              40 minutos. Uma metodologia. Zero gasto em tráfego.
            </p>
          </div>
        </Reveal>

        {/* Countdown */}
        <Reveal delay={0.1}>
          <div className="flex justify-center mb-10">
            <div className="rounded-xl px-8 py-5 flex items-center gap-3 md:gap-6"
                 style={{ background: 'rgba(139,92,246,0.07)', border: '1px solid rgba(139,92,246,0.2)' }}>
              <p className="text-muted text-[10px] uppercase tracking-widest font-body font-bold hidden md:block">
                Vagas se encerram em:
              </p>
              {[{ v: h, l: 'h' }, { v: m, l: 'm' }, { v: s, l: 's' }].map(({ v, l }, i) => (
                <div key={i} className="flex items-end gap-1">
                  <span className="font-heading text-v4-blue leading-none tabular-nums"
                        style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700 }}>
                    {pad(v)}
                  </span>
                  <span className="text-muted text-[10px] uppercase font-body mb-1">{l}</span>
                  {i < 2 && <span className="text-v4-blue font-black text-2xl mb-0.5 ml-1">:</span>}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            id="sala-secreta-form"
            onSubmit={handleSubmit}
            className="max-w-md mx-auto rounded-2xl p-8 md:p-10 shadow-card space-y-5"
            style={{ background: '#16171C', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            {fields_config.map(({ name, label, type, placeholder, options }) => (
              <div key={name} className="space-y-2">
                <label className="block font-body font-bold text-[10px] uppercase tracking-[0.2em] text-v4-blue">
                  {label}
                </label>
                {type === 'select' ? (
                  <select
                    id={`form-field-${name}`}
                    name={name}
                    required
                    value={fields[name]}
                    onChange={handleChange}
                    className="w-full bg-v4-dark border border-v4-border rounded-lg px-4 py-4 text-cream-light text-sm outline-none transition-all appearance-none"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238B5CF6' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                    onFocus={e => { e.target.style.borderColor = inputStyle.focusBorder }}
                    onBlur={e => { e.target.style.borderColor = inputStyle.blurBorder }}
                  >
                    <option value="" disabled>Selecione...</option>
                    {options.map(opt => (
                      <option key={opt} value={opt} style={{ background: '#16171C' }}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={`form-field-${name}`}
                    type={type}
                    name={name}
                    required
                    value={fields[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="w-full bg-v4-dark border border-v4-border rounded-lg px-4 py-4 text-cream-light text-sm placeholder:text-muted/40 outline-none transition-all"
                    onFocus={e => { e.target.style.borderColor = inputStyle.focusBorder }}
                    onBlur={e => { e.target.style.borderColor = inputStyle.blurBorder }}
                  />
                )}
              </div>
            ))}

            {error && (
              <p className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs py-3 px-4 rounded-lg text-center font-bold">
                ⚠️ {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full font-body font-bold text-white text-sm uppercase tracking-[0.1em] py-5 rounded-[6px] cursor-pointer transition-all duration-300 hover:-translate-y-[2px] disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'linear-gradient(135deg, #7C3AED, #2a1359)', boxShadow: '0 4px 30px rgba(139,92,246,0.35)' }}
            >
              {loading ? 'PROCESSANDO...' : 'QUERO MINHA VAGA NA SALA SECRETA'}
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              {['100% gratuito', 'Ao vivo e exclusivo', 'Vagas limitadas', 'Sem replay'].map((b, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="text-v4-blue text-xs">✓</span>
                  <span className="text-muted text-[10px] font-body font-semibold uppercase tracking-wide">{b}</span>
                </div>
              ))}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
