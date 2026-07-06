import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoHeader from "../assets/logoheader.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false); // Menu mobile geral
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false); // Modal/Menu de categorias
  const location = useLocation();

  // Itens de navegação principal
  const navItems = [
    { label: "Início", path: "/" },
    { label: "Contato", path: "/contato" },
    { label: "Sobre Nós", path: "/sobrenos" },
  ];

  // Subcategorias estratégicas mapeadas com foco em SEO (Palavras-chave de cauda longa)
  const categoriasSEO = [
    { label: "Animais", path: "/categorias/animais", desc: "Esculturas de animais em fibra de vidro." },
    { label: "Brinquedos", path: "/categorias/brinquedos", desc: "Peças em fibra de vidro." },
    { label: "Exclusivos", path: "/categorias/exclusivos", desc: "Esculturas exclusivas em fibra de vidro" },
    { label: "Temáticos", path: "/categorias/natal", desc: "Esculturas comemorativas." },
    { label: "Paisagismo", path: "/categorias/paisagismo", desc: "Vasos, jardineiras e decorações únicas." },
    { label: "Realismo", path: "/categorias/realismo", desc: "Peças, obras e esculturas fabricadas em fibra de vidro." },
    { label: "Troféus", path: "/categorias/trofeus", desc: "Troféus personalizados em fibra de vidro." },
  ];

  return (
    <>
      {/* Header Principal Semântico */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Otimizada */}
          <Link 
            to="/inicio" 
            className="flex items-center focus:outline-none"
            onClick={() => { setIsOpen(false); setIsCategoriesOpen(false); }}
            aria-label="Ir para a página inicial da Otho Esculturas"
          >
            <img 
              src={logoHeader} 
              alt="Logo oficial da Otho Esculturas - Esculturas Contemporâneas e Design de Luxo" 
              width="180"
              height="60"
              className="h-15 w-auto object-contain" 
            />
          </Link>

          {/* Links de Navegação Desktop */}
          <nav className="hidden lg:block" aria-label="Navegação principal">
            <ul className="flex items-center gap-8">
              {/* Link de Início */}
              <li>
                <Link
                  to="/inicio"
                  className={`group relative py-1 text-sm font-medium transition-colors duration-200 block ${
                    location.pathname === "/" ? "text-sky-600" : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  Início
                  <span className={`absolute bottom-0 left-0 h-[1.5px] bg-sky-600 transition-all duration-300 ${location.pathname === "/" ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              </li>

              {/* ABA DE CATEGORIAS COM MODAL SUSPENSO */}
              <li 
                className="relative"
                onMouseEnter={() => setIsCategoriesOpen(true)}
                onMouseLeave={() => setIsCategoriesOpen(false)}
              >
                <button
                  aria-expanded={isCategoriesOpen}
                  aria-haspopup="true"
                  aria-controls="modal-categorias"
                  className={`group flex items-center gap-1 py-1 text-sm font-medium transition-colors duration-200 focus:outline-none ${
                    location.pathname.startsWith("/categorias") ? "text-sky-600" : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  <span>Categorias</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${isCategoriesOpen ? "rotate-180 text-sky-600" : "text-zinc-400 group-hover:text-zinc-600"}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* MODAL SUSPENSO DESKTOP (Mega Menu) */}
                <div
                  id="modal-categorias"
                  className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[500px] transition-all duration-300 ${
                    isCategoriesOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-zinc-100/80 grid grid-cols-1 gap-1">
                    <p className="text-[10px] font-bold tracking-wider text-zinc-400 uppercase font-mono px-3 mb-2">
                      Obras & Esculturas
                    </p>
                    {categoriasSEO.map((cat) => (
                      <Link
                        key={cat.path}
                        to={cat.path}
                        onClick={() => setIsCategoriesOpen(false)}
                        className="group/item flex flex-col p-3 rounded-xl hover:bg-zinc-50 transition-colors"
                      >
                        <span className="text-sm font-medium text-zinc-800 group-hover/item:text-sky-600 transition-colors">
                          {cat.label}
                        </span>
                        <span className="text-xs text-zinc-400 mt-0.5 line-clamp-1">
                          {cat.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              {/* Demais Itens de Navegação */}
              {navItems.slice(1).map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className={`group relative py-1 text-sm font-medium transition-colors duration-200 block ${
                        isActive ? "text-sky-600" : "text-zinc-600 hover:text-zinc-900"
                      }`}
                    >
                      {item.label}
                      <span className={`absolute bottom-0 left-0 h-[1.5px] bg-sky-600 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Botão de Ação Desktop */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/5511946822225"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-transparent hover:bg-blue-50 text-[14px] font-semibold text-zinc-800 hover:text-green-600 px-4 py-2 rounded-full border border-zinc-200/60 hover:border-green-200 transition-all duration-250 ease-out"
            >
              <i className="fa-brands fa-whatsapp text-lg text-black group-hover:text-green-600 transition-colors duration-250" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Botão Hambúrguer Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex lg:hidden flex-col justify-center items-center w-10 h-10 rounded-full hover:bg-zinc-50 transition-colors focus:outline-none z-50"
            aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
            aria-expanded={isOpen}
          >
            <div className="relative w-5 h-3 flex flex-col justify-between">
              <span className={`w-full h-[1.5px] bg-zinc-900 rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
              <span className={`w-full h-[1.5px] bg-zinc-900 rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[5.5px]" : ""}`} />
            </div>
          </button>

        </div>
      </header>

      {/* Menu Lateral Mobile (Right Drawer) */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${isOpen ? "visible" : "invisible"}`}>
        
        {/* Backdrop de Fundo */}
        <div 
          className={`absolute inset-0 bg-zinc-900/20 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Painel Lateral */}
        <aside 
          className={`absolute top-0 right-0 bottom-0 w-80 bg-white p-8 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Navegação Mobile com Acordeão Interno para Categorias */}
          <div className="pt-20 overflow-y-auto max-h-[calc(100vh-160px)]">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 text-lg font-medium ${location.pathname === "/" ? "text-sky-600" : "text-zinc-800"}`}
                >
                  Início
                </Link>
              </li>

              {/* Acordeão de Categorias Mobile */}
              <li className="border-b border-zinc-100/80 pb-2">
                <button
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  className="w-full flex items-center justify-between py-2 text-lg font-medium text-zinc-800 focus:outline-none"
                >
                  <span>Categorias</span>
                  <svg 
                    className={`w-5 h-5 text-zinc-500 transition-transform duration-200 ${isCategoriesOpen ? "rotate-180" : ""}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Links Internos do Acordeão */}
                <div className={`grid transition-all duration-300 ease-in-out ${isCategoriesOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden flex flex-col gap-2 pl-4 border-l border-zinc-100">
                    {categoriasSEO.map((cat) => (
                      <Link
                        key={cat.path}
                        to={cat.path}
                        onClick={() => setIsOpen(false)}
                        className={`py-1.5 text-sm font-medium ${location.pathname === cat.path ? "text-sky-600" : "text-zinc-500"}`}
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              {/* Demais Links do Mobile */}
              {navItems.slice(1).map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 text-lg font-medium transition-colors ${isActive ? "text-sky-600" : "text-zinc-800"}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Rodapé do Menu Mobile */}
          <div className="border-t border-zinc-100 pt-6">
            <a
              href="https://wa.me/5511946822225"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-zinc-950 hover:bg-sky-600 text-white font-medium py-3.5 rounded-lg transition-colors duration-200 w-full text-sm"
            >
              <i className="fa-brands fa-whatsapp text-base" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </aside>

      </div>
    </>
  );
}

export default Header;