import { Link } from "react-router-dom";

import Destaque1 from "../../assets/home/destaques/BolasNatalinas.jpg";
import Destaque2 from "../../assets/home/destaques/CavaloDeCarrossel.jpg";
import Destaque3 from "../../assets/home/destaques/DinossauroGameHorizon.jpg";
import Destaque4 from "../../assets/home/destaques/MickeyeMiney.jpg";
import Destaque5 from "../../assets/home/destaques/MóduloCircular.jpg";
import Destaque6 from "../../assets/home/destaques/NinhoDeAraras.jpg";
import Destaque7 from "../../assets/home/destaques/PoltronaStone.jpg";
import Destaque8 from "../../assets/home/destaques/UrsoNatalinoComBalão.jpg";
import Destaque9 from "../../assets/home/destaques/UrsoNatalinoSentado.jpg";
import Destaque10 from "../../assets/home/destaques/UrsosComCoracao.jpg";

interface ItemDestaque {
  id: number;
  nome: string;
  categoria: string;
  imagem: string;
  altSEO: string;
  linkDestino: string;
}

// Array estruturado para facilitar a manutenção e leitura limpa do código
const LISTA_DESTAQUES: ItemDestaque[] = [
  {
    id: 1,
    nome: "Bolas Natalinas",
    categoria: "Decoração Natalina",
    imagem: Destaque1,
    altSEO: "Cenografia natalina com bolas de Natal gigantes produzidas em fibra de vidro para shopping center.",
    linkDestino: "/categoria-natal/bolas-natalinas"
  },
  {
    id: 2,
    nome: "Cavalo de Carrossel",
    categoria: "Peças Temáticas",
    imagem: Destaque2,
    altSEO: "Escultura clássica de cavalo de carrossel em fibra de vidro com pintura detalhada.",
    linkDestino: "/categoria-brinquedos/cavalo-de-carrossel"
  },
  {
    id: 3,
    nome: "Dinossauro Horizon",
    categoria: "Cenografia & Games",
    imagem: Destaque3,
    altSEO: "Replica em tamanho real de dinossauro do game Horizon feita em fibra de vidro para eventos geek.",
    linkDestino: "/categoria-realismo/dinossauro-game-horizon"
  },
  {
    id: 4,
    nome: "Mickey e Minnie",
    categoria: "Personagens",
    imagem: Destaque4,
    altSEO: "Esculturas gigantes dos personagens Mickey e Minnie Mouse decorativas em fibra de vidro.",
    linkDestino: "/categoria-brinquedos/mickey-e-minnie"
  },
  {
    id: 5,
    nome: "Módulo Circular",
    categoria: "Mobiliário Comercial",
    imagem: Destaque5,
    altSEO: "Módulos circulares de fibra de vidro de alta resistência.",
    linkDestino: "/categoria-moveis/modulo-circular"
  },
  {
    id: 6,
    nome: "Ninho de Araras",
    categoria: "Linha Animais",
    imagem: Destaque6,
    altSEO: "Escultura de araras brasileiras no ninho modelada em resina e fibra de vidro de alta durabilidade.",
    linkDestino: "/categoria-animais/ninho-de-araras"
  },
  {
    id: 7,
    nome: "Poltrona Stone",
    categoria: "Mobiliário Conceito",
    imagem: Destaque7,
    altSEO: "Poltrona de design orgânico Stone fabricada em fibra de vidro com acabamento brilhante premium.",
    linkDestino: "/categoria-moveis/poltrona-stone"
  },
  {
    id: 8,
    nome: "Urso Natalino com Balão",
    categoria: "Decoração Natalina",
    imagem: Destaque8,
    altSEO: "Escultura instagramável de urso de natal gigante segurando balão decorativo em fibra de vidro.",
    linkDestino: "/categoria-tematicos/urso-com-balao"
  },
  {
    id: 9,
    nome: "Urso Natalino Sentado",
    categoria: "Decoração Natalina",
    imagem: Destaque9,
    altSEO: "Urso de pelúcia gigante cenográfico esculpido em fibra de vidro para fachadas comerciais.",
    linkDestino: "/categoria-tematicos/urso-natalino-sentado"
  },
  {
    id: 10,
    nome: "Ursos com Coração",
    categoria: "Peças Temáticas",
    imagem: Destaque10,
    altSEO: "Conjunto de esculturas de ursos com coração gigante para decoração de Dia dos Namorados.",
    linkDestino: "/categoria-tematicos/ursos-com-coracao"
  }
];

export function Destaques() {
  return (
    <section className="w-full bg-slate-50/50 py-16 md:py-24 border-t border-zinc-200/50 antialiased" id="destaques">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Cabeçalho da Seção focado em conversão e SEO */}
        <header className="mb-12 md:mb-16 max-w-2xl">
          <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-sky-600 block mb-3">
            Portfólio Premium
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-950">
            Projetos em Destaque
          </h2>
          <p className="mt-3 text-sm md:text-base text-zinc-500 leading-relaxed">
            Conheça as nossas principais criações em fibra de vidro. Peças personalizadas desenvolvidas sob medida para cenografia, grandes decorações comerciais e marcas de renome.
          </p>
        </header>

        {/* Grid Responsivo Avançado (Visualização Estúdio) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-12 md:gap-x-5 md:gap-y-14">
          {LISTA_DESTAQUES.map((item) => (
            <Link
              key={item.id}
              to={item.linkDestino}
              className="group relative flex flex-col rounded-3xl bg-white/[0.5] backdrop-blur-md border border-white/90 p-2.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white hover:border-white hover:-translate-y-1 hover:shadow-[0_24px_48px_-15px_rgba(14,165,233,0.1),inset_0_0_0_1px_rgba(14,165,233,0.02)]"
            >
              <article className="w-full flex flex-col">
                
                {/* Imagem Proporção Estúdio (4:5) */}
                <div className="relative w-full aspect-[4/5] rounded-[18px] overflow-hidden bg-zinc-100 border border-zinc-200/40">
                  
                  {/* Tag Superior Discreta */}
                  <span className="absolute top-2.5 left-2.5 z-20 bg-zinc-950/90 text-white text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded shadow-sm backdrop-blur-sm border border-white/5 select-none">
                    Destaque
                  </span>

                  <img
                    src={item.imagem}
                    alt={item.altSEO} // SEO Otimizado
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />

                  {/* Efeito Hover de Cortina Escura */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-zinc-950/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                  {/* Indicador de Ação Fluido */}
                  <div className="absolute inset-x-2.5 bottom-2.5 z-20 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hidden lg:block">
                    <div className="w-full h-9 inline-flex items-center justify-center gap-1.5 px-4 bg-white/95 text-[11px] font-bold text-zinc-950 rounded-lg shadow-sm backdrop-blur-sm border border-zinc-200/30">
                      Ver Projeto
                      <svg className="w-3 h-3 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bloco de Informações Tipográficas */}
                <div className="flex flex-col pt-3 pb-1 px-1">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 block mb-0.5">
                    {item.categoria}
                  </span>
                  <h3 className="text-sm font-bold text-zinc-900 tracking-tight transition-colors duration-300 group-hover:text-sky-600 line-clamp-1">
                    {item.nome}
                  </h3>
                </div>

              </article>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Destaques;