export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-v4-black py-16 px-5 border-t border-v4-border relative overflow-hidden">
      <div className="max-w-content mx-auto text-center space-y-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-500">
           <span>DR. WLADMIR BONADIO FILHO</span>
           <span className="hidden md:block">•</span>
           <span>OAB/SP 398.640</span>
           <span className="hidden md:block">•</span>
           <a href="https://bonadioadvogados.com.br" target="_blank" rel="noopener noreferrer" className="text-v4-blue hover:text-white transition-colors">
             BONADIOADVOGADOS.COM.BR
           </a>
        </div>
        
        <div className="flex justify-center gap-6 italic text-gray-600 text-[10px]">
           <a href="#" className="hover:text-v4-blue transition-colors">Política de Privacidade</a>
           <a href="#" className="hover:text-v4-blue transition-colors">Termos de Uso</a>
        </div>

        <p className="text-gray-700 text-[9px] max-w-lg mx-auto leading-relaxed border-t border-v4-border pt-6 uppercase tracking-widest font-bold">
          {year} © WLADMIR BONADIO. TODOS OS DIREITOS RESERVADOS. <br/>
          ESSE MATERIAL É DE NATUREZA EDUCATIVA E NÃO CONSTITUI PROMESSA DE RESULTADO FINANCEIRO.
        </p>
      </div>
    </footer>
  )
}
