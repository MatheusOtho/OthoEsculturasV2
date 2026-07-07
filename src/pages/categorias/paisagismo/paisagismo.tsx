import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

import Paisagismo1 from "../../../assets/categorias/paisagismo/FloreiraEmFibra.jpg"
import Paisagismo2 from "../../../assets/categorias/paisagismo/JardineiraEmFibra.jpg"
import Paisagismo3 from "../../../assets/categorias/paisagismo/JardineiraModelo2.jpg"
import Paisagismo4 from "../../../assets/categorias/paisagismo/LixeiraComDuplaFunção.jpg"
import Paisagismo5 from "../../../assets/categorias/paisagismo/VasosCilindricos.jpg"
import Paisagismo6 from "../../../assets/categorias/paisagismo/VasosGeométricos.jpg"

import bannerPaisagismo from "../../../assets/categorias/paisagismo/bannerPaisagismo.jpg"

interface itemPaisagismo {
  id: number;
  nome: string;
  slug: string;
  imagem: string;
  tag?: "Mais Visto" | "Destaque";
}

type FiltroTipo = "todos" | "destaques";

const LISTA_PAISAGISMO: itemPaisagismo[] = [
  { 
    id: 1, 
    nome: "Floreira em Fibra", 
    slug: "floreira-em-fibra", 
    imagem: Paisagismo1
  },
  {
    id: 2,
    nome: "Jardineira em Fibra",
    slug: "jardineira-em-fibra",
    imagem: Paisagismo2,
    tag: "Destaque",
  },
  {
    id: 3,
    nome: "Jardineira Modelo 2",
    slug: "jardineira-modelo-2",
    imagem: Paisagismo3,
  },
  {
    id: 4,
    nome: "Lixeira Dupla Função",
    slug: "lixeira-dupla-funcao",
    imagem: Paisagismo4,
  },
  {
    id: 5,
    nome: "Vasos Cilíndricos em Fibra",
    slug: "vasos-cilindricos-em-fibra",
    imagem: Paisagismo5,
    tag: "Mais Visto",
  },
  {
    id: 6,
    nome: "Vasos Geométricos em Fibra",
    slug: "vasos-geometricos-em-fibra",
    imagem: Paisagismo6,
    tag: "Mais Visto",
  },
];

export function Paisagismo() {
  const [filtroAtivo, setFiltroAtivo] = useState<FiltroTipo>("todos");

  const paisagismoFiltrados = useMemo(() => {
    return LISTA_PAISAGISMO.filter((item) =>
      filtroAtivo === "destaques" ? item.tag : true,
    );
  }, [filtroAtivo]);

  return (
    <div className="animate-page-fade relative w-full min-h-screen mb-20 bg-slate-50/40 overflow-hidden antialiased selection:bg-sky-500/10">

      {/* Banner Superior Modificado */}
      <div className="w-full px-4 mx-auto mt-24 mb-12">
        <div className="w-full h-[200px] md:h-[350px] lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-100 shadow-sm border border-zinc-200/40">
          <img 
            src={bannerPaisagismo}
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
                to="/"
                className="hover:text-sky-700 transition-colors duration-200 focus:outline-none focus:underline"
              >
                Coleções
              </Link>
              <span className="text-zinc-300" aria-hidden="true">
                /
              </span>
              <span className="text-zinc-500 font-bold" aria-current="page">
                Paisagismo
              </span>
            </nav>

            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-950">
              Linha Paisagismo
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
            aria-label="Filtrar galeria de Paisagismo"
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
                  ? `Ver Todos (${LISTA_PAISAGISMO.length})`
                  : "Destaques"}
              </button>
            ))}
          </div>
        </header>

        {/* Grid de Produtos - Todo o Card é um Link */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-16">
          {paisagismoFiltrados.map((item) => (
            <Link
              key={item.id}
              to={`/categoria-paisagismo/${item.slug}`}
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

export default Paisagismo;