import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

import Brinquedos1 from "../../../assets/categorias/brinquedos/Baleia.jpg";
import Brinquedos2 from "../../../assets/categorias/brinquedos/CapsulaDourada.jpg";
import Brinquedos3 from "../../../assets/categorias/brinquedos/CavaloCarrossel.jpg";
import Brinquedos4 from "../../../assets/categorias/brinquedos/EscorregaDino.jpg";
import Brinquedos5 from "../../../assets/categorias/brinquedos/EscorregadorCurl.jpg";
import Brinquedos6 from "../../../assets/categorias/brinquedos/EscorregadorMorango.jpg";
import Brinquedos7 from "../../../assets/categorias/brinquedos/EscorregaSapo.jpg";
import Brinquedos8 from "../../../assets/categorias/brinquedos/Foca.jpg";
import Brinquedos9 from "../../../assets/categorias/brinquedos/FormigaEmFibra.jpg";
import Brinquedos10 from "../../../assets/categorias/brinquedos/GangorraEmFibra.jpg";
import Brinquedos11 from "../../../assets/categorias/brinquedos/Golfinhos.jpg";
import Brinquedos12 from "../../../assets/categorias/brinquedos/MickeyeMiney.jpg";
import Brinquedos13 from "../../../assets/categorias/brinquedos/MóduloCircular.jpg";
import Brinquedos14 from "../../../assets/categorias/brinquedos/Playground.jpg";
import Brinquedos15 from "../../../assets/categorias/brinquedos/PlaygroundEmFibra.jpg";
import Brinquedos16 from "../../../assets/categorias/brinquedos/RinoceronteDeFibra.jpg";
import Brinquedos17 from "../../../assets/categorias/brinquedos/Tubarão.jpg";
import Brinquedos18 from "../../../assets/categorias/brinquedos/TúnelDeFibra.jpg";
import Brinquedos19 from "../../../assets/categorias/brinquedos/XicaraEmFibra.jpg";

import bannerBrinquedos from "../../../assets/categorias/brinquedos/bannerBrinquedos.jpg"

interface ItemBrinquedos {
  id: number;
  nome: string;
  slug: string;
  imagem: string;
  tag?: "Mais Visto" | "Destaque";
}

type FiltroTipo = "todos" | "destaques";

const LISTA_BRINQUEDOS: ItemBrinquedos[] = [
  { 
    id: 1, 
    nome: "Escorrega da Baleia", 
    slug: "escorrega-da-baleia", 
    imagem: Brinquedos1
  },
  {
    id: 2,
    nome: "Capsúla Dourada",
    slug: "capsula-dourada",
    imagem: Brinquedos2,
    tag: "Destaque",
  },
  {
    id: 3,
    nome: "Cavalo Carrossel",
    slug: "cavalo-carrossel",
    imagem: Brinquedos3,
  },
  {
    id: 4,
    nome: "Escorrega do Dinossauro",
    slug: "escorrega-do-dinossauro",
    imagem: Brinquedos4,
  },
  {
    id: 5,
    nome: "Escorregador Curl",
    slug: "escorregador-curl",
    imagem: Brinquedos5,
    tag: "Mais Visto",
  },
  {
    id: 6,
    nome: "Escorregador Morango",
    slug: "escorregador-morango",
    imagem: Brinquedos6,
  },
  { 
    id: 7, 
    nome: "Escorrega do Sapo", 
    slug: "escorrega-do-sapo", 
    imagem: Brinquedos7 
  },
  { 
    id: 8, 
    nome: "Gangorra da Foca", 
    slug: "gangorra-da-foca", 
    imagem: Brinquedos8 
  },
  { 
    id: 9, 
    nome: "Formiga em Fibra", 
    slug: "formiga-em-fibra", 
    imagem: Brinquedos9 
  },
  {
    id: 10,
    nome: "Gangorra em Fibra",
    slug: "gangorra-em-fibra",
    imagem: Brinquedos10,
  },
  {
    id: 11,
    nome: "Golfinho em Fibra",
    slug: "golfinho-em-fibra",
    imagem: Brinquedos11,
  },
  {
    id: 12,
    nome: "Módulo Circular",
    slug: "modulo-circular",
    imagem: Brinquedos12,
  },
  {
    id: 13,
    nome: "Playground em Fibra",
    slug: "playground-em-fibra",
    imagem: Brinquedos13,
  },
  {
    id: 14,
    nome: "Playground em Fibra Modelo 2 ",
    slug: "playground-em-fibra-modelo-2",
    imagem: Brinquedos14,
  },
  {
    id: 15,
    nome: "Rinocerounte em Fibra ",
    slug: "rinocerount-em-fibra",
    imagem: Brinquedos15,
  },
  {
    id: 16,
    nome: "Tubarão em Fibra ",
    slug: "tubarao-em-fibra",
    imagem: Brinquedos16,
  },
  {
    id: 17,
    nome: "Túnel de Playground ",
    slug: "tunel-de-playground",
    imagem: Brinquedos17,
  },
  {
    id: 18,
    nome: "Mickey e Miney ",
    slug: "mickey-e-miney",
    imagem: Brinquedos18,
  },
  {
    id: 19,
    nome: "Xícara em Fibra ",
    slug: "xicara-em-fibra",
    imagem: Brinquedos19,
  },
];

export function Brinquedos() {
  const [filtroAtivo, setFiltroAtivo] = useState<FiltroTipo>("todos");

  const brinquedosFiltrados = useMemo(() => {
    return LISTA_BRINQUEDOS.filter((item) =>
      filtroAtivo === "destaques" ? item.tag : true,
    );
  }, [filtroAtivo]);

  return (
    <div className="animate-page-fade relative w-full min-h-screen mb-20 bg-slate-50/40 overflow-hidden antialiased selection:bg-sky-500/10">

      {/* Banner Superior Modificado */}
      <div className="w-full px-4 mx-auto mt-24 mb-12">
        <div className="w-full h-[200px] md:h-[350px] lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-100 shadow-sm border border-zinc-200/40">
          <img 
            src={bannerBrinquedos}
            alt="Catálogo Geral de Esculturas Temáticas em Fibra de Vidro"
            className="w-full h-full object-cover select-none pointer-events-none"
            loading="eager"
          />
        </div>
      </div>

      {/* ─── BACKGROUND INDUSTRIAL ART ─── */}
      <div
        className="absolute inset-0 pointer-events-none z-0 select-none"
        aria-hidden="true"
      >
        <div className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-br from-sky-400/15 to-transparent blur-[140px] rounded-full" />
        <div className="absolute bottom-[15%] left-[-15%] w-[600px] h-[600px] bg-gradient-to-tr from-sky-500/10 to-transparent blur-[120px] rounded-full" />
      </div>

      {/* ─── CONTEÚDO ESTRUTURADO ─── */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 text-zinc-900">
        
        {/* Header Principal */}
        <header className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200/80 pb-8 mb-16 gap-6">
          <div className="flex flex-col items-start">
            <nav
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-600 mb-3"
              aria-label="Breadcrumb"
            >
              <Link
                to="/categorias"
                className="hover:text-sky-700 transition-colors duration-200 focus:outline-none focus:underline"
              >
                Coleções
              </Link>
              <span className="text-zinc-300" aria-hidden="true">
                /
              </span>
              <span className="text-zinc-500 font-bold" aria-current="page">
                Brinquedos
              </span>
            </nav>

            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-950">
              Linha Brinquedos
            </h1>

            <p className="mt-4 text-sm md:text-base text-zinc-500 max-w-2xl font-normal leading-relaxed">
              Esculturas exclusivas em fibra de vidro de alta durabilidade.
              Peças projetadas com modelagem anatômica precisa e acabamento
              artístico profissional de alto padrão.
            </p>
          </div>

          {/* Filtros Rápidos */}
          <div
            className="flex flex-wrap gap-2 text-xs font-medium"
            role="tablist"
            aria-label="Filtrar galeria de Brinquedos"
          >
            {(["todos", "destaques"] as FiltroTipo[]).map((tipo) => (
              <button
                key={tipo}
                role="tab"
                aria-selected={filtroAtivo === tipo}
                onClick={() => setFiltroAtivo(tipo)}
                className={`px-5 py-2.5 rounded-full border transition-all duration-300 uppercase tracking-wider font-bold text-[11px] focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${
                  filtroAtivo === tipo
                    ? "bg-zinc-950 border-zinc-950 text-white shadow-lg shadow-zinc-950/10"
                    : "bg-white/80 border-zinc-200/80 text-zinc-500 hover:border-zinc-300 hover:bg-white backdrop-blur-sm"
                }`}
              >
                {tipo === "todos"
                  ? `Ver Todos (${LISTA_BRINQUEDOS.length})`
                  : "Destaques"}
              </button>
            ))}
          </div>
        </header>

        {/* Grid de Produtos - Todo o Card é um Link */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-16">
          {brinquedosFiltrados.map((item) => (
            <Link
              key={item.id}
              to={`/categoria-brinquedos/${item.slug}`}
              className="group relative flex flex-col rounded-3xl bg-white/[0.45] backdrop-blur-xl border border-white/80 p-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white hover:border-white hover:-translate-y-1 hover:shadow-[0_32px_64px_-20px_rgba(14,165,233,0.14),inset_0_0_0_1px_rgba(14,165,233,0.03)]"
            >
              <article className="w-full flex flex-col">
                {/* Container da Imagem */}
                <div className="relative w-full aspect-[4/5] rounded-[18px] overflow-hidden bg-gradient-to-b from-zinc-50 to-zinc-100 border border-zinc-200/40">
                  
                  {/* Badge Flutuante */}
                  {item.tag && (
                    <span className="absolute top-3 left-3 z-20 bg-zinc-950/90 text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md shadow-sm backdrop-blur-sm border border-white/10 select-none">
                      {item.tag}
                    </span>
                  )}

                  {/* Imagem com Zoom */}
                  <img
                    src={item.imagem}
                    alt={`Escultura artística em fibra de vidro de ${item.nome}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />

                  {/* Gradiente de Proteção de Contraste */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-zinc-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                  {/* Botão Indicativo Visual (Simula a ação anterior de forma fluida) */}
                  <div className="absolute inset-x-3 bottom-3 z-20 transform translate-y-2 lg:translate-y-4 opacity-100 lg:opacity-0 lg:group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <div className="w-full h-10 inline-flex items-center justify-center gap-2 px-4 bg-white group-hover:bg-sky-600 text-xs font-bold text-zinc-950 group-hover:text-white rounded-xl border border-zinc-200/50 shadow-sm transition-all duration-300">
                      <span>Detalhes</span>
                      <svg
                        className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Informações da Peça */}
                <div className="flex flex-col pt-3 pb-1 px-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="text-sm md:text-[15px] font-bold text-zinc-900 tracking-tight transition-colors duration-300 group-hover:text-sky-600 line-clamp-1">
                      {item.nome}
                    </h2>
                  </div>

                  {/* Metadados técnicos */}
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-[10px] font-medium text-zinc-400">
                      Escultura em Fibra de Vidro
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Brinquedos;