export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-v4-black py-14 px-5 border-t border-v4-border">
      <div className="max-w-content mx-auto text-center space-y-5">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 font-body font-bold text-[10px] uppercase tracking-[0.2em] text-muted/40">
          <span>DR. WLADMIR BONADIO FILHO</span>
          <span className="hidden md:block">·</span>
          <span>OAB/SP 398.640</span>
          <span className="hidden md:block">·</span>
          <a href="https://bonadioadvogados.com.br" target="_blank" rel="noopener noreferrer"
             className="text-v4-blue/60 hover:text-v4-blue transition-colors">
            BONADIOADVOGADOS.COM.BR
          </a>
        </div>

        <div className="flex justify-center gap-6 text-muted/30 text-[10px] italic">
          <a href="#" className="hover:text-v4-blue transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-v4-blue transition-colors">Termos de Uso</a>
        </div>

        <p className="text-muted/20 text-[9px] max-w-lg mx-auto leading-relaxed border-t border-v4-border pt-5 uppercase tracking-widest font-body font-bold">
          © {year} Dr. Wladmir Bonadio Filho. Todos os direitos reservados.<br />
          Política de Privacidade · Termos de Uso · OAB/SP 398.640<br />
          Este material tem fins educativos e informativos e não constitui consultoria jurídica individualizada.
        </p>
      </div>
    </footer>
  )
}
