import { Link } from "react-router-dom";
import logoFooter from "../assets/logofooter.svg";

export function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="w-full relative overflow-hidden bg-zinc-950 text-zinc-400 font-sans border-t border-zinc-900/50 antialiased selection:bg-sky-600/30 selection:text-white">
      {/* Detalhe de iluminação sutil no fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        
        {/* Grid de Conteúdo Principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-14 pb-16 border-b border-zinc-900/60">
          
          {/* Coluna 1: Branding / Manifesto */}
          <div className="sm:col-span-2 lg:col-span-5 flex flex-col items-start gap-5 pr-0 lg:pr-12">
            <Link 
              to="/" 
              className="inline-block transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 rounded-xl"
            >
              <img 
                src={logoFooter} 
                alt="Logo Otho Esculturas" 
                className="h-20 w-auto brightness-0 invert object-contain" 
                loading="lazy"
              />
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-sm font-medium">
              Mais de 12 anos desenvolvendo peças e esculturas em fibra de vidro. Projetos de excelência e qualidade.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <nav aria-label="Links Rápidos do Rodapé" className="lg:col-span-2 flex flex-col gap-5">
            <h3 className="text-[11px] font-black uppercase tracking-[0.15em] text-zinc-200">
              Links Rápidos
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm font-semibold text-zinc-400/90">
              <li>
                <Link to="/" className="inline-flex items-center group transition-colors duration-300 hover:text-sky-500">
                  <span className="w-0 h-px bg-sky-500 transition-all duration-300 group-hover:w-2 group-hover:mr-2" />
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="inline-flex items-center group transition-colors duration-300 hover:text-sky-500">
                  <span className="w-0 h-px bg-sky-500 transition-all duration-300 group-hover:w-2 group-hover:mr-2" />
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="inline-flex items-center group transition-colors duration-300 hover:text-sky-500">
                  <span className="w-0 h-px bg-sky-500 transition-all duration-300 group-hover:w-2 group-hover:mr-2" />
                  Contato
                </Link>
              </li>
            </ul>
          </nav>

          {/* Coluna 3: Endereço (SEO Local) */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h3 className="text-[11px] font-black uppercase tracking-[0.15em] text-zinc-200">
              Endereço
            </h3>
            <address className="not-italic text-sm text-zinc-400/90 flex flex-col gap-1.5 font-medium leading-relaxed">
              <span>Estrada Joaquim Cardoso Filho, 704</span>
              <span className="text-zinc-400">06872-200 — Potuverá</span>
              <span className="text-zinc-400">Itapecerica da Serra — SP</span>
              
              <div className="pt-2">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800/80 text-xs font-bold text-sky-500 transition-all duration-300 hover:bg-sky-600/10 hover:border-sky-500/30 group"
                >
                  Ver no Google Maps
                  <svg className="w-3 h-3 text-zinc-500 group-hover:text-sky-500 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </address>
          </div>

          {/* Coluna 4: Horário de Atendimento */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h3 className="text-[11px] font-black uppercase tracking-[0.15em] text-zinc-200">
              Atendimento
            </h3>
            <div className="flex flex-col gap-2 text-sm leading-relaxed font-semibold">
              <span className="text-zinc-400">Segunda à Sexta</span>
              <div className="inline-flex items-center gap-1.5 text-xs text-zinc-500 bg-zinc-900/60 border border-zinc-900 px-2.5 py-1 rounded-md w-fit">
                9h — 12h &bull; 13h — 17h
              </div>
            </div>
          </div>

        </div>

        {/* Linha Inferior: Direitos Autorais e Créditos */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600 font-medium">
          <p>© {anoAtual} Otho Esculturas. Todos os direitos reservados.</p>
          <p className="tracking-wide">
            Desenvolvido por {" "}
            <a 
              href="https://github.com/matheusotho" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-500 font-bold transition-colors duration-200 hover:text-sky-500"
            >
              @matheusotho
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;