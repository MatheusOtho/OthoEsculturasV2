import { useState } from "react";
import { Link } from "react-router-dom";

import Animais1 from "../../../assets/categorias/animais/AbelhaEmFibra.jpg";
import Animais2 from "../../../assets/categorias/animais/BoisNaCarroceria.jpg";
import Animais3 from "../../../assets/categorias/animais/DinossauroEmFibra.jpg";
import Animais4 from "../../../assets/categorias/animais/DinossauroTemático.jpg";
import Animais5 from "../../../assets/categorias/animais/EsculturaDeBode.jpg";
import Animais6 from "../../../assets/categorias/animais/GrupoDinossaurosEmFibra.jpg";
import Animais7 from "../../../assets/categorias/animais/LeãoDetalhado.jpg";
import Animais8 from "../../../assets/categorias/animais/NinhoDeArara.jpg";
import Animais9 from "../../../assets/categorias/animais/PapagaioFeliz.jpg";
import Animais10 from "../../../assets/categorias/animais/PinturaArtisticaElefante.jpg";

interface ItemAnimal {
  id: number;
  nome: string;
  slug: string;
  imagem: string;
  tag?: string;
}

const listaAnimais: ItemAnimal[] = [
  { id: 1, nome: "Abelha em Fibra", slug: "abelha-em-fibra", imagem: Animais1 },
  { id: 2, nome: "Bois na Carroceria", slug: "bois-na-carroceria", imagem: Animais2 },
  { id: 3, nome: "Dinossauro em Fibra", slug: "dinossauro-em-fibra", imagem: Animais3, tag: "Mais Visto" },
  { id: 4, nome: "Dinossauro Temático", slug: "dinossauro-tematico", imagem: Animais4 },
  { id: 5, nome: "Escultura de Bode", slug: "escultura-de-bode", imagem: Animais5 },
  { id: 6, nome: "Grupo Dinossauros em Fibra", slug: "grupo-dinossauros-em-fibra", imagem: Animais6, tag: "Premium" },
  { id: 7, nome: "Leão Detalhado", slug: "leao-detalhado", imagem: Animais7 },
  { id: 8, nome: "Ninho de Arara", slug: "ninho-de-arara", imagem: Animais8 },
  { id: 9, nome: "Papagaio Feliz", slug: "papagaio-feliz", imagem: Animais9 },
  { id: 10, nome: "Pintura Artística Elefante", slug: "pintura-artistica-elefante", imagem: Animais10 },
];

export function Animais() {
  const [filtroAtivo, setFiltroAtivo] = useState("todos");

  return (
    // Alterado para um wrapper relativo com fundo cinza-slate ultra claro
    <div className="relative w-full min-h-screen bg-slate-50/50 overflow-hidden antialiased selection:bg-sky-500/10">
      
      {/* ─── ELEMENTOS DE CENÁRIO ATRÁS DE TUDO (BACKGROUND ART) ─── */}
      <div className="absolute inset-0 pointer-events-none z-0">

        {/* Holofote de Luz Esférica Azul (Sky-600) no topo superior direito */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-sky-400/10 to-transparent blur-[120px] rounded-full" />
        
        {/* Segunda Aura Ambient Soft no lado esquerdo inferior */}
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-sky-600/30 to-transparent blur-[100px] rounded-full" />
      </div>

      {/* ─── CONTEÚDO PRINCIPAL (Z-INDEX 10) ─── */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 md:py-24 text-zinc-900">
        
        {/* Top Header - Estilo Minimalista de Luxo */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200/60 pb-8 mb-12 gap-6">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-600 mb-3">
              <Link to="/categorias" className="hover:opacity-80 transition-opacity">Coleções</Link>
              <span className="text-zinc-300">/</span>
              <span className="text-zinc-500 font-bold">Animais</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-950">
              Linha Animais
            </h1>
            <p className="mt-3 text-sm md:text-base text-zinc-500 max-w-xl font-normal leading-relaxed">
              Esculturas em fibra de vidro de alta durabilidade, combinando modelagem anatômica precisa e acabamento artístico profissional.
            </p>
          </div>

          {/* Micro-Filtros Rápidos Inline */}
          <div className="flex flex-wrap gap-2 text-xs font-medium">
            {["todos", "destaques"].map((tipo) => (
              <button
                key={tipo}
                onClick={() => setFiltroAtivo(tipo)}
                className={`px-4 py-2 rounded-full border transition-all duration-300 uppercase tracking-wider font-bold backdrop-blur-sm ${
                  filtroAtivo === tipo
                    ? "bg-zinc-950 border-zinc-950 text-white shadow-md shadow-zinc-950/10"
                    : "bg-white/80 border-zinc-200 text-zinc-500 hover:border-zinc-300 hover:bg-white"
                }`}
              >
                {tipo === "todos" ? `Todos (${listaAnimais.length})` : "Destaques"}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Otimizado */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
          {listaAnimais
            .filter((item) => (filtroAtivo === "destaques" ? item.tag : true))
            .map((item) => (
              <div 
                key={item.id} 
                className="group relative flex flex-col p-2.5 rounded-[28px] bg-white/40 backdrop-blur-md border border-white/60 transition-all duration-500 md:hover:bg-white md:hover:border-white md:hover:shadow-[0_32px_60px_-20px_rgba(14,165,233,0.08)]"
              >
                {/* Card Container com Proporção Vertical Elegante (4:5) */}
                <div className="relative w-full aspect-[4/5] rounded-[20px] overflow-hidden bg-zinc-100 border border-zinc-200/30 mb-4 transition-all duration-500">
                  
                  {/* Badge Flutuante Minimalista */}
                  {item.tag && (
                    <span className="absolute top-3 left-3 z-20 bg-white/90 backdrop-blur-sm text-sky-600 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg border border-sky-100/50 shadow-sm">
                      {item.tag}
                    </span>
                  )}

                  {/* Imagem com Escalonamento Suave */}
                  <img
                    src={item.imagem}
                    alt={item.nome}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out md:group-hover:scale-105"
                  />
                  
                  {/* Overlay Escuro Gradual no Hover do Desktop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10" />

                  {/* Botão de Ação Flutuante Inteligente */}
                  <div className="absolute inset-x-3 bottom-3 z-20 transform translate-y-2 md:translate-y-4 opacity-90 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300 ease-out">
                    <Link
                      to={`/produto/${item.slug}`}
                      className="w-full h-8 inline-flex items-center justify-center gap-1.5 px-4 bg-white/95 backdrop-blur-md text-xs font-bold text-zinc-950 rounded-xl border border-zinc-200/50 shadow-md transition-all duration-200 hover:bg-sky-600 hover:text-white hover:border-sky-600 active:scale-[0.98]"
                    >
                      Ver Detalhes
                      <svg 
                        className="w-3.5 h-3.5" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Informações Inferiores Limpas */}
                <div className="flex flex-col px-2 pb-1">
                  <h3 className="text-sm md:text-base font-bold text-zinc-900 tracking-tight transition-colors duration-300 group-hover:text-sky-600 line-clamp-1">
                    {item.nome}
                  </h3>
                  <span className="text-xs text-zinc-400 font-medium mt-0.5 uppercase tracking-wider">
                    Fibra de Vidro
                  </span>
                </div>
              </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Animais;