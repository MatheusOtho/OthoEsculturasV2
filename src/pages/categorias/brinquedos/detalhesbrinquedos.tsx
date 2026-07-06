import { useParams, Link } from "react-router-dom";

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

interface DadosProduto {
  nome: string;
  imagem: string;
  material: string;
  acabamento: string;
  garantia: string;
  indicacao: string;
}

const ESPECIFICACOES_PRODUTOS: Record<string, DadosProduto> = {
  "escorrega-da-baleia": {
    nome: "Escorrega da Baleia",
    imagem: Brinquedos1,
    material: "Resina leve reforçada com manta de fibra de vidro de alta resistência.",
    acabamento: "Pintura artística manual fina com tintas acrílicas premium e proteção de verniz.",
    garantia: "Garantia estrutural de fábrica com suporte técnico especializado e peças de reposição.",
    indicacao: "Jardins botânicos, apiários, fachadas de comércios de mel, escolas e eventos ecológicos."
  },
  "capsula-dourada": {
    nome: "Capsúla Dourada",
    imagem: Brinquedos2,
    material: "Composto laminado de fibra de vidro estrutural com alta densidade de resina ortoftálica.",
    acabamento: "Selamento de superfície em gelcoat e pintura automotiva fosca simulando texturas naturais.",
    garantia: "Garantia estendida contra trincas estruturais causadas por trepidações em transporte.",
    indicacao: "Entradas de fazendas, decoração de churrascarias, feiras agropecuárias e cenografias sertanejas."
  },
  "cavalo-carrossel": {
    nome: "Cavalo Carrossel",
    imagem: Brinquedos3,
    material: "Manta e tecido de fibra de vidro estrutural envoltos em resina catalisada reforçada.",
    acabamento: "Texturização artística epidérmica realista com acabamento em verniz PU fosco anti-UV.",
    garantia: "Homologação estrutural com laudo técnico de estabilidade e segurança física.",
    indicacao: "Parques temáticos, resorts, playgrounds de alto padrão e centros de entretenimento."
  },
  "escorrega-do-dinossauro": {
    nome: "Escorrega do Dinossauro",
    imagem: Brinquedos4,
    material: "Fibra de vidro laminada com acabamento liso flexível para contornos complexos.",
    acabamento: "Pintura artística personalizada com cores vibrantes e selador acrílico de alta vedação.",
    garantia: "Suporte completo contra intempéries climáticas e proteção cromática de alta durabilidade.",
    indicacao: "Buffets infantis, fachadas comerciais lúdicas, lojas de brinquedos e áreas de fotos (instagramável)."
  },
  "escorregador-curl": {
    nome: "Escorregador Curl",
    imagem: Brinquedos5,
    material: "Resina poliéster reforçada com fibra de vidro texturizada.",
    acabamento: "Escultura com replicação minuciosa de pelagem e chifres através de pintura automotiva e aerografia.",
    garantia: "Garantia total de fábrica com tratamento especial contra umidade severa e radiação UV.",
    indicacao: "Exposições agrícolas, fazendas boutique, decoração de restaurantes rústicos e cenários teatrais."
  },
  "escorregador-morango": {
    nome: "Escorregador Morango",
    imagem: Brinquedos6,
    material: "Sistemas complexos de laminação de fibra de vidro com espessuras calibradas para grandes volumes.",
    acabamento: "Pintura artística integrada em lote para uniformidade visual do conjunto, com selante de alto tráfego.",
    garantia: "Acompanha manual de içamento logístico seguro e garantia estendida de projeto corporativo.",
    indicacao: "Praças públicas, rotatórias urbanas, museus de história natural abertos e mega atrações turísticas."
  },
  "escorrega-do-sapo": {
    nome: "Escorrega do Sapo",
    imagem: Brinquedos7,
    material: "Fibra de vidro de engenharia avançada moldada sob matrizes de altíssima definição anatômica.",
    acabamento: "Pintura em multicamadas cromáticas realistas e revestimento com verniz automotivo premium.",
    garantia: "Garantia premium contra descascamento e blindagem química para exposição solar contínua.",
    indicacao: "Pórticos de entrada, fachadas corporativas premium, condomínios fechados e zoológicos."
  },
  "gangorra-da-foca": {
    nome: "Gangorra da Foca",
    imagem: Brinquedos8,
    material: "Compósito leve de fibra de vidro acoplado a resinas ecológicas de alta aderência.",
    acabamento: "Policromia viva simulando a fauna brasileira com finalização em verniz poliuretano fosco.",
    garantia: "Proteção biológica total integrada (100% imune a fungos, cupins ou apodrecimento).",
    indicacao: "Hotéis fazenda, áreas de preservação ambiental, receptivos turísticos e decorações tropicais."
  },
  "formiga-em-fibra": {
    nome: "Formiga em Fibra",
    imagem: Brinquedos9,
    material: "Fibra de vidro injetada com resinas flexíveis, garantindo leveza e ótima resistência estrutural.",
    acabamento: "Pintura decorativa de alto brilho com pigmentos puros que bloqueiam o desbotamento solar.",
    garantia: "Suporte técnico para projetos de ancoragem suspensa em troncos ou estruturas aéreas.",
    indicacao: "Quiosques, pet shops, parques aquáticos, áreas de lazer residenciais e lanchonetes de praia."
  },
  "gangorra-em-fibra": {
    nome: "Gangorra em Fibra",
    imagem: Brinquedos10,
    material: "Fibra de vidro maciça nas extremidades estruturais e corpo em laminação espessa de alta densidade.",
    acabamento: "Pintura artística contemporânea estilizada, selada com verniz vitrificado de altíssima resistência a riscos.",
    garantia: "Garantia especial para superfícies de alto contato físico em áreas de grande fluxo de público.",
    indicacao: "Exposições de arte urbana, saguões de hotéis de luxo, shopping centers e museus modernos."
  },
  "golfinho-em-fibra": {
    nome: "Golfinho em Fibra",
    imagem: Brinquedos11,
    material: "Fibra de vidro maciça nas extremidades estruturais e corpo em laminação espessa de alta densidade.",
    acabamento: "Pintura artística contemporânea estilizada, selada com verniz vitrificado de altíssima resistência a riscos.",
    garantia: "Garantia especial para superfícies de alto contato físico em áreas de grande fluxo de público.",
    indicacao: "Exposições de arte urbana, saguões de hotéis de luxo, shopping centers e museus modernos."
  },
  "modulo-circular": {
    nome: "Módulo Circular",
    imagem: Brinquedos12,
    material: "Fibra de vidro maciça nas extremidades estruturais e corpo em laminação espessa de alta densidade.",
    acabamento: "Pintura artística contemporânea estilizada, selada com verniz vitrificado de altíssima resistência a riscos.",
    garantia: "Garantia especial para superfícies de alto contato físico em áreas de grande fluxo de público.",
    indicacao: "Exposições de arte urbana, saguões de hotéis de luxo, shopping centers e museus modernos."
  },
  "playground-em-fibra": {
    nome: "Playground em Fibra",
    imagem: Brinquedos13,
    material: "Fibra de vidro maciça nas extremidades estruturais e corpo em laminação espessa de alta densidade.",
    acabamento: "Pintura artística contemporânea estilizada, selada com verniz vitrificado de altíssima resistência a riscos.",
    garantia: "Garantia especial para superfícies de alto contato físico em áreas de grande fluxo de público.",
    indicacao: "Exposições de arte urbana, saguões de hotéis de luxo, shopping centers e museus modernos."
  },
  "playground-em-fibra-modelo-2": {
    nome: "Playground em Fibra Modelo 2",
    imagem: Brinquedos14,
    material: "Fibra de vidro maciça nas extremidades estruturais e corpo em laminação espessa de alta densidade.",
    acabamento: "Pintura artística contemporânea estilizada, selada com verniz vitrificado de altíssima resistência a riscos.",
    garantia: "Garantia especial para superfícies de alto contato físico em áreas de grande fluxo de público.",
    indicacao: "Exposições de arte urbana, saguões de hotéis de luxo, shopping centers e museus modernos."
  },
  "rinocerount-em-fibra": {
    nome: "Rinocerounte em Fibra",
    imagem: Brinquedos15,
    material: "Fibra de vidro maciça nas extremidades estruturais e corpo em laminação espessa de alta densidade.",
    acabamento: "Pintura artística contemporânea estilizada, selada com verniz vitrificado de altíssima resistência a riscos.",
    garantia: "Garantia especial para superfícies de alto contato físico em áreas de grande fluxo de público.",
    indicacao: "Exposições de arte urbana, saguões de hotéis de luxo, shopping centers e museus modernos."
  },
  "tubarao-em-fibra": {
    nome: "Tubarão em Fibra",
    imagem: Brinquedos16,
    material: "Fibra de vidro maciça nas extremidades estruturais e corpo em laminação espessa de alta densidade.",
    acabamento: "Pintura artística contemporânea estilizada, selada com verniz vitrificado de altíssima resistência a riscos.",
    garantia: "Garantia especial para superfícies de alto contato físico em áreas de grande fluxo de público.",
    indicacao: "Exposições de arte urbana, saguões de hotéis de luxo, shopping centers e museus modernos."
  },
  "tunel-de-playground": {
    nome: "Túnel de Playground",
    imagem: Brinquedos17,
    material: "Fibra de vidro maciça nas extremidades estruturais e corpo em laminação espessa de alta densidade.",
    acabamento: "Pintura artística contemporânea estilizada, selada com verniz vitrificado de altíssima resistência a riscos.",
    garantia: "Garantia especial para superfícies de alto contato físico em áreas de grande fluxo de público.",
    indicacao: "Exposições de arte urbana, saguões de hotéis de luxo, shopping centers e museus modernos."
  },
  "mickey-e-miney": {
    nome: "Mickey e Miney",
    imagem: Brinquedos18,
    material: "Fibra de vidro maciça nas extremidades estruturais e corpo em laminação espessa de alta densidade.",
    acabamento: "Pintura artística contemporânea estilizada, selada com verniz vitrificado de altíssima resistência a riscos.",
    garantia: "Garantia especial para superfícies de alto contato físico em áreas de grande fluxo de público.",
    indicacao: "Exposições de arte urbana, saguões de hotéis de luxo, shopping centers e museus modernos."
  },
  "xicara-em-fibra": {
    nome: "Xícara em Fibra",
    imagem: Brinquedos19,
    material: "Fibra de vidro maciça nas extremidades estruturais e corpo em laminação espessa de alta densidade.",
    acabamento: "Pintura artística contemporânea estilizada, selada com verniz vitrificado de altíssima resistência a riscos.",
    garantia: "Garantia especial para superfícies de alto contato físico em áreas de grande fluxo de público.",
    indicacao: "Exposições de arte urbana, saguões de hotéis de luxo, shopping centers e museus modernos."
  },
};

export function DetalhesAnimais() {
  const { slug } = useParams<{ slug: string }>();
  
  const slugNormalizado = slug?.trim();
  const produto = slugNormalizado ? ESPECIFICACOES_PRODUTOS[slugNormalizado] : null;

  if (!produto) {
    return (
      <div className="animate-page-fade w-full min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
        <h1 className="text-xl font-bold text-zinc-950">Produto não encontrado</h1>
        <p className="text-zinc-500 text-sm mt-1 mb-6">A peça que você está procurando não existe ou mudou de endereço.</p>
        <Link to="/animais" className="px-5 py-2.5 bg-sky-600 text-white rounded-xl text-sm font-bold shadow-sm hover:bg-sky-700 transition-colors">
          Voltar para o Catálogo
        </Link>
      </div>
    );
  }

  const numeroWhatsapp = "5511946822225"; // Insira aqui o seu número com DDD
  const textoMensagem = encodeURIComponent(`Olá, gostaria de conversar sobre ${produto.nome}`);
  const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${textoMensagem}`;

  return (
    <div className="animate-page-fade w-full min-h-screen bg-slate-50/30 text-zinc-900 antialiased py-26">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Navegação Superior Discreta */}
        <Link to="/categorias/brinquedos" className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-sky-600 hover:text-sky-700 transition-colors group mb-8">
          <svg className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Voltar para a Linha Brinquedos
        </Link>

        {/* Grid de Apresentação Técnica Compacta */}
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

          {/* Coluna Direita: Título + Mini Grid de Specs + Ações */}
          <div className="lg:col-span-7 flex flex-col pt-1">
            
            <header className="mb-6">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">Ficha Técnica Oficial</span>
              <h1 className="text-2xl md:text-4xl font-black tracking-tight text-zinc-950">{produto.nome}</h1>
            </header>

            {/* Layout Compacto em Grid de 2 Colunas */}
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 border-t border-b border-zinc-200/60 py-6 mb-6">
              
              <div className="flex flex-col gap-0.5">
                <dt className="text-[11px] font-black uppercase tracking-wider text-zinc-400">Composição</dt>
                <dd className="text-xs md:text-sm text-zinc-600 font-normal leading-relaxed">{produto.material}</dd>
              </div>

              <div className="flex flex-col gap-0.5">
                <dt className="text-[11px] font-black uppercase tracking-wider text-zinc-400">Acabamento</dt>
                <dd className="text-xs md:text-sm text-zinc-600 font-normal leading-relaxed">{produto.acabamento}</dd>
              </div>

              <div className="flex flex-col gap-0.5 pt-3 border-t border-zinc-100 sm:border-none sm:pt-0">
                <dt className="text-[11px] font-black uppercase tracking-wider text-zinc-400">Garantia & Suporte</dt>
                <dd className="text-xs md:text-sm text-zinc-600 font-normal leading-relaxed">{produto.garantia}</dd>
              </div>

              <div className="flex flex-col gap-0.5 pt-3 border-t border-zinc-100 sm:border-none sm:pt-0">
                <dt className="text-[11px] font-black uppercase tracking-wider text-zinc-400">Aplicações</dt>
                <dd className="text-xs md:text-sm text-zinc-600 font-normal leading-relaxed">{produto.indicacao}</dd>
              </div>
            </dl>

            {/* Bloco de Ações Verticais */}
            <div className="flex flex-col gap-3">
              {/* Botão Principal: WhatsApp */}
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

              {/* Botão Secundário: Voltar para o Catálogo */}
              <Link
                to="/categorias/animais"
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

export default DetalhesAnimais;