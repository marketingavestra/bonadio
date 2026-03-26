import { useState, useRef } from 'react'
import Reveal from './Reveal'

const CHECKOUT_URL = 'https://hub.la/r/playbook-pdf'
const WEBHOOK_URL = 'https://wbn.araxa.app/webhook/receive-webhook'

function applyWhatsAppMask(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 11) return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  return value
}

export default function Form() {
  const [fields, setFields] = useState({ nome: '', email: '', whatsapp: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

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
    if (!fields.nome.trim()) { setError('Informe seu nome.'); return }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) { setError('E-mail inválido.'); return }

    setLoading(true)
    
    // Pixel/GTM tracking
    if (typeof window !== 'undefined' && window.fbq) window.fbq('track', 'Lead')
    if (typeof window !== 'undefined' && window.gtag) window.gtag('event', 'generate_lead')

    try {
      // Send to Webhook
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...fields,
          source: window.location.href,
          timestamp: new Date().toISOString()
        })
      })
    } catch (err) {
      console.error('Webhook Error:', err)
      // We continue to checkout even if webhook fails to avoid losing the sale
    }

    // Final redirection
    window.location.href = CHECKOUT_URL
  }

  return (
    <section id="formulario" className="py-24 px-5 bg-v4-black border-t border-v4-border relative overflow-hidden">
      {/* Background glow behind form */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#27AE6008] blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-content mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="font-heading font-black text-white uppercase tracking-tighter leading-none mb-4"
                style={{ fontSize: 'clamp(28px, 5vw, 48px)' }}>
              GARANTA SEU <span className="text-v4-blue text-glow-blue">ACESSO AGORA</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              Preencha seus dados abaixo para receber o Playbook completo e os bônus exclusivos no seu e-mail.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-v4-card border border-v4-border rounded-2xl p-8 md:p-10 shadow-card space-y-6"
          >
            {/* Nome */}
            <div className="space-y-2">
              <label className="block font-heading font-black text-[10px] uppercase tracking-[0.2em] text-v4-blue">
                NOME COMPLETO
              </label>
              <input
                type="text"
                name="nome"
                required
                value={fields.nome}
                onChange={handleChange}
                placeholder="Ex: Dr. Wladmir Bonadio"
                className="w-full bg-v4-dark border border-v4-border rounded-lg px-4 py-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-v4-blue focus:ring-1 focus:ring-v4-blue/20 transition-all"
              />
            </div>

            {/* E-mail */}
            <div className="space-y-2">
              <label className="block font-heading font-black text-[10px] uppercase tracking-[0.2em] text-v4-blue">
                E-MAIL PROFISSIONAL
              </label>
              <input
                type="email"
                name="email"
                required
                value={fields.email}
                onChange={handleChange}
                placeholder="seu@email.com.br"
                className="w-full bg-v4-dark border border-v4-border rounded-lg px-4 py-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-v4-blue focus:ring-1 focus:ring-v4-blue/20 transition-all"
              />
            </div>

            {/* WhatsApp */}
            <div className="space-y-2">
              <label className="block font-heading font-black text-[10px] uppercase tracking-[0.2em] text-v4-blue flex justify-between">
                <span>WHATSAPP</span>
                <span className="text-gray-600 font-normal normal-case italic">Opcional</span>
              </label>
              <input
                type="tel"
                name="whatsapp"
                value={fields.whatsapp}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
                className="w-full bg-v4-dark border border-v4-border rounded-lg px-4 py-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-v4-blue focus:ring-1 focus:ring-v4-blue/20 transition-all"
              />
            </div>

            {/* Price Preview */}
            <div className="pt-2">
              <div className="flex items-end justify-between border-t border-v4-border pt-6 mb-2">
                 <p className="text-gray-500 text-[10px] uppercase font-black tracking-widest">SUBTOTAL</p>
                 <p className="text-gray-500 text-xs line-through">R$ 385,00</p>
              </div>
              <div className="flex items-end justify-between">
                 <p className="text-white text-[10px] uppercase font-black tracking-widest">TOTAL HOJE</p>
                 <p className="text-success text-3xl font-black leading-none">R$ 47,00</p>
              </div>
            </div>

            {error && (
              <p className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs py-3 px-4 rounded-lg text-center font-bold">
                ⚠️ {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-success hover:bg-success-hover text-white font-heading font-black text-sm uppercase tracking-[0.1em] py-5 rounded-lg border-0 cursor-pointer shadow-glow-green hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <span className="relative z-10">
                {loading ? 'PROCESSANDO...' : 'LIBERAR MEU ACESSO IMEDIATO'}
              </span>
            </button>

            <div className="flex flex-col items-center gap-3 pt-2">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-success animate-pulse" />
                SISTEMA DISPONÍVEL PARA DOWNLOAD AGORA
              </p>
              <div className="flex justify-center gap-4 opacity-40 grayscale">
                 <img src="https://logodownload.org/wp-content/uploads/2014/10/cartao-visa-logo.png" alt="Visa" className="h-3" />
                 <img src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-2.png" alt="Mastercard" className="h-3" />
                 <img src="https://logodownload.org/wp-content/uploads/2015/05/pix-logo-1.png" alt="Pix" className="h-3" />
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
