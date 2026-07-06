import { Link } from "react-router-dom";

import imgCategoria1 from "../../assets/home/categorias-icones/CategoriaAnimais.jpg";
import imgCategoria2 from "../../assets/home/categorias-icones/CategoriaBrinquedos.jpg";
import imgCategoria3 from "../../assets/home/categorias-icones/CategoriaExclusivos.jpg";
import imgCategoria4 from "../../assets/home/categorias-icones/CategoriaMoveis.jpg";
import imgCategoria5 from "../../assets/home/categorias-icones/CategoriaNatal.jpg";
import imgCategoria6 from "../../assets/home/categorias-icones/CategoriaPaisagismo.jpg";
import imgCategoria7 from "../../assets/home/categorias-icones/CategoriaRealismo.jpg";
import imgCategoria8 from "../../assets/home/categorias-icones/CategoriaTrofeus.jpg";

interface CategoriaItem {
  id: number;
  nome: string;
  subtitulo: string;
  slug: string;
  imagem: string;
  gridClass: string; 
}

const listaCategorias: CategoriaItem[] = [
  { 
    id: 3, 
    nome: "Exclusivos", 
    subtitulo: "Projetos Únicos em fibra de vidro", 
    slug: "exclusivos", 
    imagem: imgCategoria3, 
    gridClass: "md:col-span-2 md:row-span-2 md:h-[320px]" 
  },
  { 
    id: 1, 
    nome: "Animais", 
    subtitulo: "Esculturas e vida selvagem", 
    slug: "animais", 
    imagem: imgCategoria1, 
    gridClass: "md:col-span-1 md:row-span-1 md:h-[150px]" 
  },
  { 
    id: 7, 
    nome: "Realismo", 
    subtitulo: "Escultura com alto detalhismo", 
    slug: "realismo", 
    imagem: imgCategoria7, 
    gridClass: "md:col-span-1 md:row-span-1 md:h-[150px]" 
  },
  { 
    id: 4, 
    nome: "Móveis", 
    subtitulo: "Móveis Fabricados com Fibra de Vidro", 
    slug: "moveis", 
    imagem: imgCategoria4, 
    gridClass: "md:col-span-2 md:row-span-1 md:h-[150px]" 
  },
  { 
    id: 8, 
    nome: "Troféus", 
    subtitulo: "Trófeus com designs únicos", 
    slug: "trofeus", 
    imagem: imgCategoria8, 
    gridClass: "md:col-span-1 md:row-span-1 md:h-[150px]" 
  },
  { 
    id: 2, 
    nome: "Brinquedos", 
    subtitulo: "Brinquedos em fibra de vidro", 
    slug: "brinquedos", 
    imagem: imgCategoria2, 
    gridClass: "md:col-span-1 md:row-span-1 md:h-[150px]" 
  },
  { 
    id: 6, 
    nome: "Paisagismo", 
    subtitulo: "Vasos e Jardineiras em Fibra de Vidro", 
    slug: "paisagismo", 
    imagem: imgCategoria6, 
    gridClass: "md:col-span-1 md:row-span-1 md:h-[150px]" 
  },
  { 
    id: 5, 
    nome: "Temáticos", 
    subtitulo: "Magia das datas comemorativas", 
    slug: "tematicos", 
    imagem: imgCategoria5, 
    gridClass: "md:col-span-1 md:row-span-1 md:h-[150px]" 
  },
];

export function Categorias() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-5 md:py-20 bg-white text-zinc-900 antialiased overflow-hidden">
      
      {/* Cabeçalho alinhado e compacto */}
      <div className="flex flex-col items-start mb-8 md:mb-8 max-w-2xl">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold tracking-wider text-sky-600 uppercase bg-sky-50 rounded-full mb-3 border border-sky-100/70">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
          Coleções
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-950">
          Explore por Categorias
        </h2>
      </div>

      {/* Container de Navegação */}
      <nav aria-label="Categorias de produtos" className="w-full">
        {/* 
          Mobile: Carrossel Horizontal Nativo, Sem Quebra de Linha, Rolagem Fluida 
          Desktop: Transforma-se no Bento Grid assimétrico
        */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-4 pb-5 md:pb-0 scrollbar-none snap-x snap-mandatory md:snap-none -mx-4 px-4 md:mx-0 md:px-0">
          {listaCategorias.map((categoria) => (
            <Link
              key={categoria.id}
              to={`/${categoria.slug}`}
              className={`
                group relative overflow-hidden rounded-2xl bg-zinc-50 border border-zinc-100 p-5 flex flex-col justify-end transition-all duration-500 ease-out 
                hover:border-sky-200 hover:shadow-[0_15px_30px_-10px_rgba(2,132,199,0.06)]
                
                /* Configurações Mobile (Impedem o empilhamento vertical) */
                flex-shrink-0 w-[170px] h-[130px] snap-start
                
                /* Reset para Desktop aplicando o Bento Grid */
                md:w-full md:flex-shrink text-left ${categoria.gridClass}
              `}
            >
              {/* Imagem com Máscara e Altura Compacta */}
              <div className="absolute inset-0 z-0">
                <img
                  src={categoria.imagem}
                  alt={`Categoria ${categoria.nome}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-center brightness-[0.95] group-hover:scale-103 group-hover:brightness-[0.9] transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-95 group-hover:opacity-90 transition-opacity duration-500 z-10" />
              </div>

              {/* Textos Otimizados */}
              <div className="relative z-20 flex flex-col transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                <h3 className="text-sm md:text-base font-bold text-white flex items-center gap-0.5 group-hover:text-sky-500 transition-colors duration-300">
                  {categoria.nome}
                  <svg 
                    className="w-3.5 h-3.5 opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300 text-sky-600 hidden md:block" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </h3>
                
                {/* Subtítulo oculto no mobile minúsculo para manter o minimalismo limpo, visível no desktop */}
                <p className="text-[11px] text-white mt-0.5 font-normal line-clamp-1 hidden md:block group-hover: transition-colors">
                  {categoria.subtitulo}
                </p>
              </div>

              {/* Linha Ativa inferior do Sky-600 */}
              <div className="absolute bottom-0 left-0 h-[2.5px] w-0 bg-sky-600 transition-all duration-500 ease-out group-hover:w-full z-30" />
            </Link>
          ))}
        </div>
      </nav>
    </section>
  );
}

export default Categorias;