function Formas() {
  return (
    <section 
      id="formas-contato" 
      className="w-full bg-white text-zinc-900 pb-20 px-6 sm:px-12 lg:px-20 border-t border-zinc-100 relative overflow-hidden"
      aria-labelledby="formas-heading"
    >
      {/* Luz sutil de estúdio ao fundo */}
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-sky-500/[0.02] blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative z-10">
        
        {/* Lado Esquerdo: Título e Contexto Semântico (SEO) */}
        <div className="lg:col-span-5 space-y-4">
          <p className="text-[10px] font-bold text-sky-600 uppercase tracking-widest font-mono">
            Atendimento Exclusivo
          </p>
          <h2 
            id="formas-heading" 
            className="text-2xl sm:text-3xl font-normal tracking-tight text-zinc-900 leading-tight"
          >
            Canais diretos de comunicação com o nosso <span className="font-serif italic text-sky-600">time</span>
          </h2>
          <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-sm">
            Escolha o canal de sua preferência. Nossa equipe está pronta para te atender.
          </p>
        </div>

        {/* Lado Direito: Bloco de Contatos envolvido na tag semântica <address> */}
        <address className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full not-italic">
          
          {/* CARTÃO 1: WHATSAPP (Ocupa duas colunas no SM para destaque) */}
          <a
            href="https://wa.me/5511946822225?text=Ol%C3%A1%21+Gostaria+de+falar+sobre+um+projeto+de+escultura."
            target="_blank"
            rel="noopener noreferrer"
            className="sm:col-span-2 group flex items-center justify-between p-6 bg-zinc-950 text-white rounded-2xl transition-all duration-300 hover:bg-zinc-900 shadow-md shadow-zinc-200"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl transition-transform group-hover:scale-110">
                <i className="fa-brands fa-whatsapp text-white" />
              </div>
              <div>
                <p className="text-xs text-zinc-400 font-medium font-mono uppercase tracking-wider">Atendimento</p>
                <p className="text-base font-semibold mt-0.5">Iniciar chat no WhatsApp</p>
              </div>
            </div>
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 text-zinc-400 group-hover:text-white">
              →
            </span>
          </a>

          {/* CARTÃO 2: TELEFONE */}
          <a
            href="tel:+5511946822225"
            className="group flex items-center gap-4 p-5 bg-zinc-50/60 hover:bg-zinc-50 border border-zinc-200/40 rounded-2xl transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200/60 flex items-center justify-center text-zinc-600 group-hover:text-sky-600 transition-colors shadow-sm">
              <i className="fa-solid fa-phone text-sm" />
            </div>
            <div>
              <p className="text-[10px] text-zinc-400 font-bold font-mono uppercase tracking-wider">Ligue para nós</p>
              <p className="text-sm font-medium text-zinc-800 mt-0.5 transition-colors group-hover:text-zinc-900">
                (11) 94682-2225
              </p>
            </div>
          </a>

          {/* CARTÃO 3: EMAIL */}
          <a
            href="mailto:contato@othoesculturas.com.br"
            className="group flex items-center gap-4 p-5 bg-zinc-50/60 hover:bg-zinc-50 border border-zinc-200/40 rounded-2xl transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200/60 flex items-center justify-center text-zinc-600 group-hover:text-sky-600 transition-colors shadow-sm">
              <i className="fa-solid fa-envelope text-sm" />
            </div>
            <div>
              <p className="text-[10px] text-zinc-400 font-bold font-mono uppercase tracking-wider">Envie um e-mail</p>
              <p className="text-sm font-medium text-zinc-800 mt-0.5 transition-colors group-hover:text-zinc-900 break-all">
                othoesculturas@yahoo.com.br
              </p>
            </div>
          </a>

        </address>

      </div>
    </section>
  );
}

export default Formas;