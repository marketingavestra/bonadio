export default function CtaButton({ children, href = '#formulario', className = '', large = false }) {
  return (
    <a
      href={href}
      className={[
        'relative inline-flex items-center justify-center font-body font-bold uppercase tracking-[0.1em] rounded-[6px]',
        'text-[#0A0A0A] border-0 cursor-pointer overflow-hidden animate-pulse-cta',
        'transition-all duration-300 transform',
        'hover:-translate-y-[2px] hover:shadow-glow-gold',
        'active:scale-95 active:translate-y-0.5',
        large ? 'text-sm px-8 py-5 w-full max-w-md' : 'text-sm px-10 py-4',
        className,
      ].join(' ')}
      style={{ background: 'linear-gradient(135deg, #C9A84C, #B8942F)', boxShadow: '0 4px 30px rgba(201,168,76,0.25)' }}
    >
      <span className="relative z-10">{children}</span>
    </a>
  )
}
