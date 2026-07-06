import escultura1 from "../../assets/contato/escultura1.png";
// import { Link } from "react-router-dom";    

function Mensagem() {
  return (
    /* Mantendo a seção semântica e o fundo branco puro */
    <section 
      id="contato-cta" 
      className="w-full bg-white text-zinc-900 py-24 px-6 sm:px-12 lg:px-20 overflow-hidden relative border-t border-zinc-100"
      aria-labelledby="cta-heading"
    >
      {/* Detalhe sutil de luz ao fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/[0.02] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Lado Esquerdo: Bloco de Texto focado em SEO */}
        <div className="lg:col-span-7 space-y-5">
          <p className="text-[10px] font-bold text-sky-600 uppercase tracking-widest font-mono">
            Projetos Corporativos & Residenciais
          </p>
          
          <h2 
            id="cta-heading" 
            className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-zinc-900 leading-[1.15]"
          >
            Traga exclusividade para o seu espaço com uma <span className="font-serif italic text-sky-600">obra sob medida.</span>
          </h2>
          
          <p className="text-zinc-500 text-sm sm:text-base max-w-xl font-light leading-relaxed">
            <span className="font-semibold"> Desenvolvemos esculturas personalizadas em fibra de vidro de alta durabilidade e fino acabamento. </span>
            Entre em contato conosco para alinhar dimensões, cores e conceitos ideais para o <span className="font-semibold">seu projeto arquitetônico.</span>
          </p>
        </div>

        {/* Lado Direito: Substituído os botões pela Imagem da Escultura Otimizada para SEO */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <figure className="relative w-full max-w-[490px] h-[500px] aspect-video rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-200/40 shadow-xl shadow-zinc-200/60 group">
            <img
              src={escultura1}
              alt="Escultura personalizada em fibra de vidro com acabamento de alto padrão para projetos de arquitetura"
              loading="lazy"
              width="1920"
              height="1080"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            {/* Acabamento refinado de borda interna sub-pixel */}
            <div className="absolute inset-0 rounded-2xl border border-black/[0.04] pointer-events-none" />
          </figure>
        </div>

      </div>
    </section>
  );
}

export default Mensagem;