import { useParams, Link } from "react-router-dom";

import Paisagismo1 from "../../../assets/categorias/paisagismo/FloreiraEmFibra.jpg"
import Paisagismo2 from "../../../assets/categorias/paisagismo/JardineiraEmFibra.jpg"
import Paisagismo3 from "../../../assets/categorias/paisagismo/JardineiraModelo2.jpg"
import Paisagismo4 from "../../../assets/categorias/paisagismo/LixeiraComDuplaFunção.jpg"
import Paisagismo5 from "../../../assets/categorias/paisagismo/VasosCilindricos.jpg"
import Paisagismo6 from "../../../assets/categorias/paisagismo/VasosGeométricos.jpg"

interface DadosProduto {
  nome: string;
  imagem: string;
  descricao: string;
  acabamento: string;
  indicacao: string;
}

const ESPECIFICACOES_PRODUTOS: Record<string, DadosProduto> = {
  "floreira-em-fibra": {
    nome: "Floreira em Fibra",
    imagem: Paisagismo1,
    descricao: "Floreira horizontal com design clean e linhas contínuas, moldada em fibra de vidro de alta densidade. Sua estrutura leve e ultra-resistente é perfeita para organizar arranjos, delimitar ambientes ou trazer o verde para recepções e pontos comerciais de forma sofisticada e durável.",
    acabamento: "Pintura automotiva premium de alto brilho com proteção verniz poliuretano contra riscos e manchas.",
    indicacao: "Recepções corporativas, lojas de shopping, estandes de feiras, clínicas e áreas comerciais em geral."
  },
  "jardineira-em-fibra": {
    nome: "Jardineira em Fibra",
    imagem: Paisagismo2,
    descricao: "Jardineira de grande porte com design orgânico e fluido. Fabricada com compósitos laminados de alta resistência mecânica, oferece amplo espaço interno para o plantio de diversas espécies, atuando como um elemento de vanguarda no paisagismo residencial e corporativo.",
    acabamento: "Acabamento em gelcoat de alta resistência com proteção anti-UV para exposição contínua ao sol e chuva.",
    indicacao: "Praças, jardins, lounges de hotéis, shoppings e áreas de convivência externas ou internas."
  },
  "jardineira-modelo-2": {
    nome: "Jardineira Modelo 2",
    imagem: Paisagismo3,
    descricao: "Jardineira contemporânea com linhas geométricas retas e visual minimalista que remete à arquitetura moderna. Sua estrutura em fibra de vidro reforçada suporta a pressão de terra e raízes sem deformar, mantendo a leveza visual e a integridade sob uso contínuo.",
    acabamento: "Pintura em PU acetinado de alta resistência mecânica, com cantos suavemente suavizados para segurança.",
    indicacao: "Áreas de descompressão de empresas de tecnologia, universidades, condomínios e recepções modernas."
  },
  "lixeira-dupla-funcao": {
    nome: "Lixeira Dupla Função",
    imagem: Paisagismo4,
    descricao: "Lixeira dupla para coleta seletiva com design curvilíneo planejado meticulosamente para aliar funcionalidade, discrição e sofisticação. Fabricada em fibra de vidro de alta espessura com reforços estruturais ocultos, possui compartimentos internos práticos e de altíssima resistência mecânica.",
    acabamento: "Superfície perfeitamente polida em gelcoat automotivo premium de toque suave e fácil higienização.",
    indicacao: "Escritórios de alto padrão, halls de entrada, hotéis conceituais, shoppings e espaços corporativos."
  },
  "vasos-cilindricos-em-fibra": {
    nome: "Vasos Cilíndricos em Fibra",
    imagem: Paisagismo5,
    descricao: "Vasos cilíndricos com design arrojado e sinuoso que combinam funcionalidade com estética contemporânea. Desenvolvidos em resina poliéster reforçada, entregam diâmetros precisos e base estável em uma estrutura inteiramente monolítica, segura e impermeável.",
    acabamento: "Pintura PU de alta performance com selagem protetora impermeável, resistente a produtos de limpeza e umidade.",
    indicacao: "Hotéis, restaurantes, lobbies corporativos, residências premium e projetos cenográficos de interiores."
  },
  "vasos-geometricos-em-fibra": {
    nome: "Vasos Geométricos em Fibra",
    imagem: Paisagismo6,
    descricao: "Vasos geométricos imponentes com linhas facetadas que criam um jogo de luz e sombra único. Uma peça que alia engenharia de distribuição de peso com um visual limpo e extremamente elegante, ideal para destacar plantas de grande porte em decorações de alto padrão.",
    acabamento: "Verniz vitrificado de altíssimo brilho sobre pintura automotiva e estrutura com proteção antirrisco.",
    indicacao: "Salas de jantar modernas, salas de reunião executivas, cafeterias e restaurantes de alta gastronomia."
  },
};

export function DetalhesPaisagismo() {
  const { slug } = useParams<{ slug: string }>();
  
  const slugNormalizado = slug?.trim();
  const produto = slugNormalizado ? ESPECIFICACOES_PRODUTOS[slugNormalizado] : null;

  if (!produto) {
    return (
      <div className="animate-page-fade w-full min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
        <h1 className="text-xl font-bold text-zinc-950">Produto não encontrado</h1>
        <p className="text-zinc-500 text-sm mt-1 mb-6">A peça que você está procurando não existe ou mudou de endereço.</p>
        <Link to="/categorias/paisagismo" className="px-5 py-2.5 bg-sky-600 text-white rounded-xl text-sm font-bold shadow-sm hover:bg-sky-700 transition-colors">
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
        <Link to="/categorias/paisagismo" className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-sky-600 hover:text-sky-700 transition-colors group mb-8">
          <svg className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Voltar para a Linha Paisagismo
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
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">Catálogo Paisagismo</span>
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
                to="/categorias/moveis"
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

export default DetalhesPaisagismo;