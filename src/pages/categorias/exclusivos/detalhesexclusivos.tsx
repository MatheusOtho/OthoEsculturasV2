import { useParams, Link } from "react-router-dom";

import Exclusivos1 from "../../../assets/categorias/exclusivos/canecaemfibra.jpg"
import Exclusivos2 from "../../../assets/categorias/exclusivos/colheremfibra.jpg"
import Exclusivos3 from "../../../assets/categorias/exclusivos/garfoemfibra.jpg"
import Exclusivos4 from "../../../assets/categorias/exclusivos/garfoemfibradevidro.jpg"
import Exclusivos5 from "../../../assets/categorias/exclusivos/movelemfibra.jpg"

interface DadosProduto {
  nome: string;
  imagem: string;
  descricao: string;
  acabamento: string;
  indicacao: string;
}

const ESPECIFICACOES_PRODUTOS: Record<string, DadosProduto> = {
  "caneca-gigante-personalizada-em-fibra": {
    nome: "Caneca Gigante Personalizada em Fibra",
    imagem: Exclusivos1,
    descricao: "Escultura monumental em formato de caneca, ideal para ações de marketing, decoração temática ou fachadas comerciais. Desenvolvida em fibra de vidro de alta resistência, une impacto visual marcante com uma estrutura leve e altamente durável, perfeitamente adaptável à identidade visual da sua marca.",
    acabamento: "Pintura artística manual fina com tintas acrílicas premium e proteção de verniz de alta durabilidade.",
    indicacao: "Cafeterias, feiras de negócios, campanhas publicitárias, fachadas de comércios e eventos promocionais."
  },
  "colher-gigante-em-fibra": {
    nome: "Colher Gigante em Fibra",
    imagem: Exclusivos2,
    descricao: "Peça cenográfica em escala ampliada representando uma colher com alto nível de fidelidade anatômica. Estruturada em compósitos laminados, é perfeita para ambientação de espaços gastronômicos e cenários instagramáveis que buscam uma decoração lúdica, criativa e resistente.",
    acabamento: "Selamento de superfície em gelcoat com acabamento automotivo metalizado dourado e verniz de alto brilho.",
    indicacao: "Restaurantes, buffets, feiras gastronômicas, estúdios fotográficos e áreas instagramáveis de shoppings."
  },
  "garfo-gigante-em-fibra": {
    nome: "Garfo Gigante em Fibra",
    imagem: Exclusivos3,
    descricao: "Incrível escultura tridimensional de garfo em proporções gigantescas, projetada para decoração de impacto no segmento alimentício. Fabricada em fibra de vidro reforçada, garante estabilidade mecânica e longa vida útil, tornando-se o ponto focal visual de qualquer ambiente.",
    acabamento: "Texturização fina, detalhes em aerografia artística e acabamento em verniz poliuretano fosco anti-UV.",
    indicacao: "Praças de alimentação, decoração de restaurantes rústicos ou modernos, cenografias e eventos temáticos."
  },
  "garfo-gigante-modelo-2": {
    nome: "Garfo Gigante Modelo 2",
    imagem: Exclusivos4,
    descricao: "Nova versão de escultura de garfo monumental, apresentando linhas de design exclusivas e estilizadas para compor conjuntos cenográficos integrados. Sua estrutura robusta em fibra de vidro maciça permite exposição contínua ao tempo sem sofrer deformações.",
    acabamento: "Pintura artística personalizada com cores vibrantes e selador acrílico de alta vedação contra intempéries.",
    indicacao: "Fachadas comerciais premium, recepções de grandes empresas do setor alimentício e pontos turísticos gastronômicos."
  },
  "cadeira-em-fibra-de-vidro": {
    nome: "Cadeira em Fibra de Vidro",
    imagem: Exclusivos5,
    descricao: "Mobiliário conceitual de alta resistência com design ergonômico e exclusivo. Desenvolvida em resina poliéster reforçada, entrega uma superfície lisa, confortável e impermeável, unindo a funcionalidade de um assento premium com o apelo de uma peça decorativa vanguardista.",
    acabamento: "Superfície deslizante super polida em gelcoat brilhante e laterais com pintura automotiva e aerografia.",
    indicacao: "Saguões de hotéis de luxo, lounges corporativos, varandas de alto padrão e áreas de lazer sofisticadas."
  },
};

export function DetalhesExclusivos() {
  const { slug } = useParams<{ slug: string }>();
  
  const slugNormalizado = slug?.trim();
  const produto = slugNormalizado ? ESPECIFICACOES_PRODUTOS[slugNormalizado] : null;

  if (!produto) {
    return (
      <div className="animate-page-fade w-full min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
        <h1 className="text-xl font-bold text-zinc-950">Produto não encontrado</h1>
        <p className="text-zinc-500 text-sm mt-1 mb-6">A peça que você está procurando não existe ou mudou de endereço.</p>
        <Link to="/categorias/exclusivos" className="px-5 py-2.5 bg-sky-600 text-white rounded-xl text-sm font-bold shadow-sm hover:bg-sky-700 transition-colors">
          Voltar para o Catálogo
        </Link>
      </div>
    );
  }

  const numeroWhatsapp = "5511946822225"; 
  const textoMensagem = encodeURIComponent(`Olá, gostaria de conversar sobre ${produto.nome}`);
  const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${textoMensagem}`;

  return (
    <div className="animate-page-fade w-full min-h-screen bg-slate-50/30 text-zinc-900 antialiased py-26">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Navegação Superior Discreta */}
        <Link to="/categorias/exclusivos" className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-sky-600 hover:text-sky-700 transition-colors group mb-8">
          <svg className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Voltar para a Linha Exclusivos
        </Link>

        {/* Grid de Apresentação Técnica */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Coluna Esquerda: Imagem */}
          <div className="lg:col-span-5 w-full aspect-[4/5] rounded-2xl overflow-hidden bg-white border border-zinc-200/50 p-2 shadow-sm lg:sticky lg:top-6">
            <img 
              src={produto.imagem} 
              alt={`Foto técnica da peça ${produto.nome}`} 
              className="w-full h-full object-cover rounded-xl select-none"
              loading="eager"
            />
          </div>

          {/* Coluna Direita: Título + Descrição Comercial + Especificações */}
          <div className="lg:col-span-7 flex flex-col pt-1">
            
            <header className="mb-4">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">Catálogo Exclusivo</span>
              <h1 className="text-2xl md:text-4xl font-black tracking-tight text-zinc-950">{produto.nome}</h1>
            </header>

            {/* Descrição de Produto Fluida */}
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed font-medium mb-6">
              {produto.descricao}
            </p>

            {/* Grid Técnico Compacto (Apenas Acabamento e Indicações) */}
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 border-t border-b border-zinc-200/60 py-6 mb-6">
              <div className="flex flex-col gap-0.5">
                <dt className="text-[11px] font-black uppercase tracking-wider text-zinc-400">Acabamento</dt>
                <dd className="text-xs md:text-sm text-zinc-600 font-normal leading-relaxed">{produto.acabamento}</dd>
              </div>

              <div className="flex flex-col gap-0.5 pt-3 border-t border-zinc-100 sm:border-none sm:pt-0">
                <dt className="text-[11px] font-black uppercase tracking-wider text-zinc-400">Aplicações Recomendadas</dt>
                <dd className="text-xs md:text-sm text-zinc-600 font-normal leading-relaxed">{produto.indicacao}</dd>
              </div>
            </dl>

            {/* Bloco de Ações Verticais */}
            <div className="flex flex-col gap-3">
              <a 
                href={linkWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-sm transition-all transform active:scale-[0.98] text-center"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.4.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.66.986 3.296 1.489 4.961 1.491 5.382.001 9.763-4.375 9.766-9.759.002-2.608-1.012-5.059-2.859-6.908C16.62 2.138 14.17 1.123 11.564 1.122c-5.385 0-9.766 4.376-9.769 9.76-.001 1.764.475 3.418 1.38 4.93L2.2 21.533l5.856-1.53c.53.21 1.03.35 1.59.35z"/>
                </svg>
                Solicitar Orçamento no WhatsApp
              </a>

              <Link
                to="/categorias/exclusivos"
                className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-800 rounded-xl text-sm font-bold shadow-sm transition-all text-center"
              >
                Voltar para o Catálogo
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default DetalhesExclusivos;