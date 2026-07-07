import { useParams, Link } from "react-router-dom";

import Moveis1 from "../../../assets/categorias/moveis/BalcãoModerno.jpg"
import Moveis2 from "../../../assets/categorias/moveis/BancoMoon.jpg"
import Moveis3 from "../../../assets/categorias/moveis/BancoTablet.jpg"
import Moveis4 from "../../../assets/categorias/moveis/CadeiraEróticaKiss.jpg"
import Moveis5 from "../../../assets/categorias/moveis/CadeiraEróticaSpicy.jpg"
import Moveis6 from "../../../assets/categorias/moveis/MesaEmCone.jpg"
import Moveis7 from "../../../assets/categorias/moveis/MesaGeométrica.jpg"
import Moveis8 from "../../../assets/categorias/moveis/PoltronaLiving.jpg"
import Moveis9 from "../../../assets/categorias/moveis/PoltronaQuite.jpg"
import Moveis10 from "../../../assets/categorias/moveis/PoltronaStone.jpg"

interface DadosProduto {
  nome: string;
  imagem: string;
  descricao: string;
  acabamento: string;
  indicacao: string;
}

const ESPECIFICACOES_PRODUTOS: Record<string, DadosProduto> = {
  "balcao-em-fibra": {
    nome: "Balcão em Fibra",
    imagem: Moveis1,
    descricao: "Balcão funcional com design clean e linhas contínuas, moldado em fibra de vidro de alta densidade. Sua estrutura leve e ao mesmo tempo ultra-resistente é perfeita para recepções, pontos de atendimento ou suporte comercial, oferecendo uma superfície impecável, fácil de higienizar e altamente durável.",
    acabamento: "Pintura automotiva premium de alto brilho com proteção verniz poliuretano contra riscos e manchas.",
    indicacao: "Recepções corporativas, lojas de shopping, estandes de feiras, clínicas e recepções em geral."
  },
  "banco-moon-em-fibra": {
    nome: "Banco Moon em Fibra",
    imagem: Moveis2,
    descricao: "Mobiliário urbano e interno com design orgânico inspirado nas fases lunares. Fabricado com compósitos laminados de alta resistência mecânica, este banco oferece assento anatômico e estrita durabilidade, atuando como uma peça de decoração de vanguarda e descanso simultâneo.",
    acabamento: "Acabamento em gelcoat de alta resistência com proteção anti-UV para exposição contínua ao sol e chuva.",
    indicacao: "Praças, jardins, lounges de hotéis, shoppings e áreas de convivência externas ou internas."
  },
  "banco-tablet-em-fibra": {
    nome: "Banco Tablet em Fibra",
    imagem: Moveis3,
    descricao: "Banco contemporâneo com linhas geométricas retas e visual minimalista que remete à tecnologia moderna. Sua estrutura em fibra de vidro reforçada suporta alto fluxo de usuários mantendo a leveza visual e a integridade da carcaça sob uso contínuo.",
    acabamento: "Pintura em PU acetinado de alta resistência mecânica, com cantos suavemente suavizados para segurança.",
    indicacao: "Áreas de descompressão de empresas de tecnologia, universidades, escolas e recepções modernas."
  },
  "cadeira-erotica-modelo-kiss": {
    nome: "Cadeira Erótica Modelo Kiss",
    imagem: Moveis4,
    descricao: "Mobiliário conceitual e sensorial com design curvilíneo planejado meticulosamente para oferecer ergonomia avançada, conforto e suporte ideal. Fabricada em fibra de vidro de alta espessura com reforços estruturais ocultos, une discrição, sofisticação e altíssima resistência mecânica.",
    acabamento: "Superfície perfeitamente polida em gelcoat automotivo premium de toque suave e fácil higienização.",
    indicacao: "Suítes temáticas de motéis, hotéis conceituais, quartos exclusivos e espaços privativos de alto padrão."
  },
  "cadeira-erotica-modelo-spicy": {
    nome: "Cadeira Erótica Modelo Spicy",
    imagem: Moveis5,
    descricao: "Peça de design arrojado e sinuoso que combina funcionalidade ergonômica com estética contemporânea. Desenvolvida em resina poliéster reforçada, entrega ângulos precisos projetados para o máximo conforto e estabilidade em uma estrutura inteiramente monolítica e segura.",
    acabamento: "Pintura PU de alta performance com selagem protetora impermeável, resistente a produtos de limpeza.",
    indicacao: "Motéis premium, estabelecimentos de lazer privativo e projetos cenográficos de interiores conceituais."
  },
  "mesa-com-base-em-cone": {
    nome: "Mesa com Base em Cone",
    imagem: Moveis6,
    descricao: "Mesa imponente caracterizada por sua base cônica centralizada em fibra de vidro, que elimina as pernas tradicionais e maximiza o espaço para as pernas dos usuários. Uma peça que alia engenharia de distribuição de peso com um visual limpo e extremamente elegante.",
    acabamento: "Verniz vitrificado de altíssimo brilho sobre pintura automotiva e tampo com proteção antirrisco.",
    indicacao: "Salas de jantar modernas, salas de reunião executivas, cafeterias e restaurantes de alta gastronomia."
  },
  "mesa-geometrica": {
    nome: "Mesa Geométrica",
    imagem: Moveis7,
    descricao: "Mesa de centro ou lateral com design lapidado em facetas geométricas marcantes. Moldada em fibra de vidro leve, esta peça atua como um elemento escultural no ambiente, oferecendo rigidez estrutural absoluta com um apelo visual futurista e sofisticado.",
    acabamento: "Pintura metalizada fina ou fosca com verniz PU anti-UV de alta fidelidade cromática.",
    indicacao: "Lounges corporativos, salas de estar de alto padrão, recepções de escritórios e espaços instagramáveis."
  },
  "poltrona-living": {
    nome: "Poltrona Living",
    imagem: Moveis8,
    descricao: "Poltrona de alto conforto com design envolvente que abraça o usuário. Fabricada em compósito de fibra de vidro de alta resiliência, sua concha estrutural é leve para movimentação, porém extremamente firme e robusta, ideal para receber estofamentos personalizados ou uso puro.",
    acabamento: "Acabamento polido espelhado em gelcoat acrílico, cantos arredondados e base de alta estabilidade.",
    indicacao: "Salas de estar, recepções de luxo, varandas cobertas, showrooms e halls de entrada de condomínios."
  },
  "poltrona-quite": {
    nome: "Poltrona Quite",
    imagem: Moveis9,
    descricao: "Poltrona de design minimalista e compacto, planejada para otimizar o espaço sem abrir mão do conforto ergonômico. Sua estrutura de fibra de vidro garante linhas contínuas e sem emendas aparentes, oferecendo um móvel resistente a impactos cotidianos e de fácil manutenção.",
    acabamento: "Pintura artística fosca ou brilhante com selador acrílico de alta vedação contra umidade e poeira.",
    indicacao: "Apartamentos compactos, estúdios, escritórios comerciais, consultórios e salas de espera."
  },
  "poltrona-stone": {
    nome: "Poltrona Stone",
    imagem: Moveis10,
    descricao: "Poltrona escultural inspirada no formato orgânico de pedras e rochas polidas pela natureza. Uma obra de arte em forma de assento, moldada em fibra de vidro maciça que suporta peso elevado e intempéries, ideal para integrar o paisagismo à funcionalidade de um descanso premium.",
    acabamento: "Texturização fina simulando toque mineral ou acabamento em verniz acetinado liso de alta durabilidade.",
    indicacao: "Jardins de inverno, varandas abertas, resorts, spas e áreas externas de condomínios residenciais."
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
        <Link to="/categorias/moveis" className="px-5 py-2.5 bg-sky-600 text-white rounded-xl text-sm font-bold shadow-sm hover:bg-sky-700 transition-colors">
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
        <Link to="/categorias/moveis" className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-sky-600 hover:text-sky-700 transition-colors group mb-8">
          <svg className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Voltar para a Linha Móveis
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
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">Catálogo Móveis</span>
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

export default DetalhesExclusivos;