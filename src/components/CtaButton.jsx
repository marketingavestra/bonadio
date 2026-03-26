export default function CtaButton({ children, href = '#formulario', className = '', large = false }) {
  return (
    <a
      href={href}
      className={[
        'relative inline-flex items-center justify-center font-heading font-black uppercase tracking-widest rounded-lg',
        'bg-success text-white border-0 cursor-pointer overflow-hidden',
        'transition-all duration-300 transform',
        'hover:bg-success-hover hover:-translate-y-1 hover:scale-[1.02] hover:shadow-glow-green',
        'active:scale-95 active:translate-y-0.5',
        large ? 'text-lg px-8 py-5 w-full max-w-sm' : 'text-sm px-10 py-4',
        className,
      ].join(' ')}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20" />
    </a>
  )
}
