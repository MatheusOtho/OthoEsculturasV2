import { Link } from "react-router-dom";

import Carrossel1 from "../../assets/home/carrosselhome/carrossel1.png";
import Carrossel2 from "../../assets/home/carrosselhome/carrossel2.png";
import Carrossel3 from "../../assets/home/carrosselhome/carrossel3.png";
import Carrossel4 from "../../assets/home/carrosselhome/carrossel4.png";
import Carrossel5 from "../../assets/home/carrosselhome/carrossel5.png";
import Carrossel6 from "../../assets/home/carrosselhome/carrossel6.png";
import Carrossel7 from "../../assets/home/carrosselhome/carrossel7.png";
import Carrossel8 from "../../assets/home/carrosselhome/carrossel8.png";

export function Carrossel() {
  // Array de objetos contendo dados estratégicos de SEO e tags dinâmicas
  const obras = [
    { 
      id: 1, 
      src: Carrossel1, 
      // tag: "Escultura em Fibra de Vidro",
      alt: "Escultura contemporânea com acabamento fino moldada em fibra de vidro"
    },
    { 
      id: 2, 
      src: Carrossel2, 
      // tag: "Escultura em Fibra de Vidro",
      alt: "Peça de design exclusiva em fibra de vidro para arquitetura"
    },
    { 
      id: 3, 
      src: Carrossel3, 
      // tag: "Escultura em Fibra de Vidro",
      alt: "Escultura moderna com acabamento "
    },
    { 
      id: 4, 
      src: Carrossel4, 
      // tag: "Escultura em Fibra de Vidro",
      alt: "Peça decorativa em fibra de vidro de alta durabilidade"
    },
    { 
      id: 5, 
      src: Carrossel5, 
      // tag: "Escultura em Fibra de Vidro",
      alt: "Arte contemporânea moldada em resina e fibra"
    },
    { 
      id: 6, 
      src: Carrossel6, 
      // tag: "Escultura em Fibra de Vidro",
      alt: "Escultura de alto padrão com acabamento único"
    },
    { 
      id: 7, 
      src: Carrossel7, 
      // tag: "Escultura em Fibra de Vidro",
      alt: "Obra de arte sob medida produzida em fibra de vidro"
    },
    { 
      id: 8, 
      src: Carrossel8, 
      // tag: "Escultura em Fibra de Vidro",  
      alt: "Monumento e escultura de grande escala moldada com precisão artesanal"
    },
  ];

  const listaDuplicada = [...obras, ...obras];

  return (
    <section className="w-full bg-white pb-20 pt-10 overflow-hidden flex flex-col items-center">
      
      {/* Cabeçalho do Carrossel */}
      <div className="w-full max-w-7xl px-6 sm:px-12 lg:px-20 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest font-mono">
            Galeria Digital
          </p>
          <h2 className="text-2xl sm:text-3xl font-normal text-zinc-900 tracking-tight">
            Algumas de nossas <span className="font-serif italic text-sky-600">obras e esculturas</span>
          </h2>
        </div>
        
        {/* <Link
          to="/"
          className="group text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors inline-flex items-center gap-1 shrink-0"
        >
          Ver Categorias
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
            →
          </span>
        </Link> */}
      </div>

      {/* CONTAINER COM MÁSCARA DE GRADIENTE NAS BORDAS */}
      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 sm:before:w-40 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 sm:after:w-40 after:bg-gradient-to-l after:from-white after:to-transparent">
        
        {/* Track de Animação */}
        <div className="flex w-max gap-[1px] animate-marquee hover:[animation-play-state:paused] py-4">
          {listaDuplicada.map((obra, index) => (
            <figure
              key={`${obra.id}-${index}`}
              className="relative w-[340px] sm:w-[460px] md:w-[520px] aspect-video  overflow-hidden bg-zinc-50 border border-zinc-200/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/50 group select-none cursor-pointer"
            >
              {/* Imagem indexável otimizada */}
              <img
                src={obra.src}
                alt={obra.alt}
                loading="lazy"
                width="1920"
                height="1080"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              {/* Degradê interno para ganho de contraste */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Tag Superior Semântica (Figcaption para SEO contextual) */}
              {/* <figcaption className="absolute top-4 left-4 bg-white/80 backdrop-blur-md border border-zinc-200/40 px-2.5 py-1 rounded-lg shadow-sm">
                <span className="text-[10px] text-zinc-800 font-medium tracking-wide uppercase font-mono">
                  {obra.tag}
                </span>
              </figcaption> */}
              
              {/* Acabamento refinado de borda interna sub-pixel */}
              <div className="absolute inset-0 rounded-2xl border border-black/[0.04] pointer-events-none" />
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Carrossel;