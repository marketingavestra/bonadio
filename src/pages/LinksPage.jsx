const LINKS = [
  {
    href: '/sala-secreta',
    title: 'Sala Secreta — Aula Gratuita',
    subtitle: 'Como injetar R$ 50 mil no caixa do seu escritório sem gastar com tráfego pago',
    primary: true,
  },
  {
    href: '/blog/',
    title: 'Blog Jurídico CLT',
    subtitle: 'Guias gratuitos sobre rescisão, horas extras, FGTS e seus direitos no trabalho',
  },
  {
    href: 'https://www.instagram.com/wladmirbonadiofilho_adv/',
    title: 'Instagram',
    subtitle: '@wladmirbonadiofilho_adv',
    external: true,
  },
  {
    href: 'https://wa.me/5534991839854',
    title: 'WhatsApp',
    subtitle: 'Falar diretamente com o Dr. Wladmir',
    external: true,
  },
]

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-v4-black flex items-center justify-center px-5 py-16 relative overflow-hidden">
      {/* Glows */}
      <div className="absolute top-0 right-0 w-[55%] h-[55%] bg-[#8B5CF609] blur-[130px] rounded-full -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[#4B21A60D] blur-[120px] rounded-full -ml-10 -mb-10" />

      <div className="relative z-10 w-full max-w-[420px] text-center">
        <img
          src="/Foto_Expert_Wladmir.png"
          alt="Dr. Wladmir Bonadio Filho"
          className="w-28 h-28 rounded-full object-cover mx-auto mb-5 border-2 border-v4-blue/40 shadow-glow-purple"
        />

        <h1 className="font-heading text-2xl md:text-3xl font-extrabold text-cream mb-1">
          Dr. Wladmir Bonadio Filho
        </h1>
        <p className="font-body text-xs uppercase tracking-[3px] text-v4-blue mb-8">
          Advocacia Trabalhista · OAB/SP 398.640
        </p>

        <div className="flex flex-col gap-4">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className={
                link.primary
                  ? 'group block rounded-2xl px-6 py-5 text-left bg-v4-blue text-v4-black shadow-glow-purple transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-purple'
                  : 'group block rounded-2xl px-6 py-5 text-left bg-v4-card border border-v4-border transition-all duration-300 hover:-translate-y-1 hover:border-v4-blue/50'
              }
            >
              <span className={`font-heading font-bold text-base ${link.primary ? 'text-v4-black' : 'text-cream'}`}>
                {link.title}
              </span>
              <span className={`block font-body text-[13px] mt-1 ${link.primary ? 'text-v4-black/70' : 'text-muted'}`}>
                {link.subtitle}
              </span>
            </a>
          ))}
        </div>

        <p className="font-body text-[11px] text-muted mt-10 tracking-wide">
          © {new Date().getFullYear()} Wladmir Bonadio Filho Advocacia
        </p>
      </div>
    </div>
  )
}
