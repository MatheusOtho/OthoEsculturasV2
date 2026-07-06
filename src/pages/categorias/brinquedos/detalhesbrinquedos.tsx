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
  descricao: string;
  acabamento: string;
  indicacao: string;
}

const ESPECIFICACOES_PRODUTOS: Record<string, DadosProduto> = {
  "escorrega-da-baleia": {
    nome: "Escorrega da Baleia",
    imagem: Brinquedos1,
    descricao: "Escorregador infantil lúdico e monumental moldado em fibra de vidro de alta resistência. Sua engenharia oferece descida suave com superfícies perfeitamente polidas e sem emendas, garantindo máxima segurança para as crianças em uma estrutura que se torna o destaque visual do espaço.",
    acabamento: "Pintura artística manual fina com tintas acrílicas premium e proteção de verniz de alta durabilidade.",
    indicacao: "Playgrounds de condomínios, hotéis, buffets infantis, praças públicas e parques aquáticos."
  },
  "capsula-dourada": {
    nome: "Cápsula Dourada",
    imagem: Brinquedos2,
    descricao: "Módulo cenográfico futurista em formato de cápsula, estruturado com compósitos laminados de alta densidade. Uma peça com acabamento reluzente metalizado e impacto estético imponente, ideal para criar ambientes tecnológicos, espaços instagramáveis ou portais de entrada.",
    acabamento: "Selamento de superfície em gelcoat com acabamento automotivo metalizado dourado e verniz de alto brilho.",
    indicacao: "Feiras de tecnologia, eventos corporativos, buffets temáticos e áreas instagramáveis de shoppings."
  },
  "cavalo-carrossel": {
    nome: "Cavalo Carrossel",
    imagem: Brinquedos3,
    descricao: "Clássica escultura decorativa de carrossel moldada em fibra de vidro reforçada com tecido estrutural. Traz detalhes ricos e tradicionais que resgatam a nostalgia dos parques antigos, combinando a delicadeza visual com uma carcaça robusta e resistente ao manuseio contínuo.",
    acabamento: "Texturização fina, detalhes em aerografia artística e acabamento em verniz poliuretano fosco anti-UV.",
    indicacao: "Parques temáticos, resorts, playgrounds internos de alto padrão e decoração de festas infantis."
  },
  "escorrega-do-dinossauro": {
    nome: "Escorrega do Dinossauro",
    imagem: Brinquedos4,
    descricao: "Brinquedo interativo gigante combinando a fascinação dos dinossauros com a diversão de um escorregador estruturado. Fabricado em fibra de vidro maciça com paredes calibradas para suportar intenso fluxo de crianças, mantendo a integridade mecânica das curvas e da pista de descida.",
    acabamento: "Pintura artística personalizada com cores vibrantes e selador acrílico de alta vedação contra intempéries.",
    indicacao: "Parques de diversão, áreas externas de resorts, playgrounds de grande porte e buffets infantis."
  },
  "escorregador-curl": {
    nome: "Escorregador Curl",
    imagem: Brinquedos5,
    descricao: "Escorregador compacto com design moderno em curva espiral, maximizando a diversão e otimizando a ocupação do espaço físico. Desenvolvido em resina poliéster reforçada, entrega uma pista de alto rendimento deslizante e bordas de proteção elevadas para total segurança.",
    acabamento: "Superfície deslizante super polida em gelcoat brilhante e laterais com pintura automotiva e aerografia.",
    indicacao: "Escolas infantis, brinquedotecas de condomínios, residências e espaços de lazer compactos."
  },
  "escorregador-morango": {
    nome: "Escorregador Morango",
    imagem: Brinquedos6,
    descricao: "Módulo de playground temático em formato de morango gigante, unindo design lúdico e funcionalidade em uma única estrutura. Ideal para projetos corporativos e governamentais que buscam revitalizar áreas de lazer urbanas com brinquedos altamente atrativos e coloridos.",
    acabamento: "Pintura artística integrada em lote para uniformidade visual do conjunto, com selante de alto tráfego.",
    indicacao: "Praças públicas, rotatórias urbanas, parques municipais e shopping centers."
  },
  "escorrega-do-sapo": {
    nome: "Escorrega do Sapo",
    imagem: Brinquedos7,
    descricao: "Brinquedo temático de sapinho projetado com foco na ergonomia e segurança de crianças da primeira infância. Sua estrutura de fibra de vidro conta com degraus integrados de fácil acesso e uma pista de descida suave e segura, imune a extremidades cortantes.",
    acabamento: "Pintura em multicamadas cromáticas vibrantes e revestimento protetor com verniz automotivo premium.",
    indicacao: "Berçários, escolas de educação infantil, buffets lúdicos e playgrounds residenciais."
  },
  "gangorra-da-foca": {
    nome: "Gangorra da Foca",
    imagem: Brinquedos8,
    descricao: "Brinquedo de balanço clássico em formato de foca, desenvolvido em compósito leve de fibra de vidro com assentos anatômicos e pegadores firmes. Oferece uma movimentação suave com base reforçada e tratada, ideal para resistir ao contato com o solo e umidade constante.",
    acabamento: "Policromia viva com finalização em verniz poliuretano de alta resistência química e mecânica.",
    indicacao: "Hotéis fazenda, áreas de recreação ecológica, condomínios e playgrounds escolares."
  },
  "formiga-em-fibra": {
    nome: "Formiga em Fibra",
    imagem: Brinquedos9,
    descricao: "Escultura decorativa ou brinquedo de escalada leve em formato de formiga gigante. Fabricada com injeção de resinas flexíveis de alta aderência, é uma peça extremamente versátil que pode ser utilizada tanto fixada ao solo quanto suspensa em projetos aéreos integrados à natureza.",
    acabamento: "Pintura decorativa de alto brilho com pigmentos puros que bloqueiam o desbotamento sob ação do sol.",
    indicacao: "Parques aquáticos, áreas de lazer temáticas, quiosques e projetos cenográficos infantis."
  },
  "gangorra-em-fibra": {
    nome: "Gangorra em Fibra",
    imagem: Brinquedos10,
    descricao: "Gangorra coletiva tradicional fabricada com o máximo reforço estrutural em fibra de vidro nas extremidades e eixos de movimentação. Projetada para resistir ao uso público massivo, oferece durabilidade incomparável às gangorras comuns de plástico ou madeira.",
    acabamento: "Pintura artística contemporânea estilizada, selada com verniz vitrificado de alta resistência a riscos.",
    indicacao: "Praças públicas, clubes, condomínios residenciais e áreas de lazer de alta circulação."
  },
  "golfinho-em-fibra": {
    nome: "Golfinho em Fibra",
    imagem: Brinquedos11,
    descricao: "Escultura náutica ou brinquedo decorativo de golfinho em tamanho real. A modelagem anatômica capta o dinamismo do animal saltando, ideal para composições cenográficas em espelhos d'água, piscinas ou decorações temáticas litorâneas.",
    acabamento: "Pintura automotiva espelhada azul e branca com verniz naval para proteção total contra cloro e umidade.",
    indicacao: "Parques aquáticos, hotéis de praia, bordas de piscinas e chafarizes residenciais ou comerciais."
  },
  "mickey-e-miney": {
    nome: "Mickey e Miney",
    imagem: Brinquedos12,
    descricao: "Conjunto de esculturas decorativas inspiradas nos personagens mais queridos do mundo animado. Modelados em fibra de vidro com proporções cuidadosas para cenografia, servem como o ponto de fotos principal de qualquer espaço comercial ou festivo.",
    acabamento: "Pintura decorativa artística fina de alta fidelidade cromática, selada com verniz acrílico premium.",
    indicacao: "Buffets infantis, estúdios fotográficos, lojas de brinquedos, shoppings e recepções infantis."
  },
  "modulo-circular": {
    nome: "Módulo Circular",
    imagem: Brinquedos13,
    descricao: "Elemento modular geométrico vazado em fibra de vidro de alta espessura. Perfeito para compor circuitos de obstáculos em playgrounds modernos, permitindo que as crianças engatinhem, escalem e desenvolvam habilidades motoras em um ambiente seguro.",
    acabamento: "Pintura em PU acetinado de alta resistência mecânica, com cantos perfeitamente arredondados.",
    indicacao: "Circuitos de psicomotricidade, brinquedotecas, escolas infantis e áreas de lazer cobertas."
  },
  "playground-em-fibra": {
    nome: "Playground em Fibra",
    imagem: Brinquedos14,
    descricao: "Complexo integrado de diversão unindo escorregador, túnel e áreas de escalada em uma estrutura unificada e monolítica de fibra de vidro. Entrega o que há de mais moderno em engenharia de lazer infantil, sem parafusos ou travas expostas que ofereçam risco.",
    acabamento: "Acabamento em gelcoat colorido de alto brilho e áreas de transição com pintura automotiva premium.",
    indicacao: "Condomínios residenciais de alto padrão, clubes recreativos, resorts e parques municipais."
  },
  "playground-em-fibra-modelo-2": {
    nome: "Playground em Fibra Modelo 2",
    imagem: Brinquedos15,
    descricao: "Configuração expandida de playground temático contendo múltiplas pistas de descida e portais cenográficos customizáveis. Desenvolvido sob especificações de segurança rigorosas, utilizando laminação pesada e reforços internos metálicos vedados na fibra.",
    acabamento: "Pintura artística de alta performance com verniz vitrificado, protegendo contra riscos e pichações.",
    indicacao: "Grandes centros de entretenimento, buffets de grande porte, praças e áreas de lazer governamentais."
  },
  "rinocerount-em-fibra": {
    nome: "Rinocerounte em Fibra",
    imagem: Brinquedos16,
    descricao: "Escultura interativa gigante de rinoceronte, projetada para decoração de impacto e escalada recreativa. Sua estrutura suporta o peso de adultos e crianças simultaneamente, atuando como um marco visual fortíssimo em qualquer espaço de entretenimento.",
    acabamento: "Pintura artística texturizada simulando a pele do animal, com selador fosco automotivo anti-UV.",
    indicacao: "Zoológicos, parques de aventura, safáris temáticos e áreas externas de grandes resorts."
  },
  "tubarao-em-fibra": {
    nome: "Tubarão em Fibra",
    imagem: Brinquedos17,
    descricao: "Impressionante escultura cenográfica de tubarão com boca aberta, projetada para atuar como moldura fotográfica (instagramável) ou portal de entrada. Fabricada com matrizes detalhadas que realçam os dentes e a imponência do predador dos oceanos.",
    acabamento: "Pintura realista em aerografia e acabamento em verniz náutico brilhante de alta proteção química.",
    indicacao: "Aquários, restaurantes de frutos do mar, parques aquáticos e eventos temáticos marinhos."
  },
  "tunel-de-fibra": {
    nome: "Tunel de Fibra",
    imagem: Brinquedos18,
    descricao: "Túnel cilíndrico estruturado em fibra de vidro para circuitos de rastejamento e aventura. Sua superfície interna é perfeitamente lisa e contínua, prevenindo qualquer tipo de atrito, enquanto seu corpo externo é hiperespesso para suportar crianças escalando por cima.",
    acabamento: "Superfície interna ultrapolida com gelcoat e exterior decorado com pintura automotiva vibrante.",
    indicacao: "Playgrounds públicos e privados, brinquedotecas infantis e pet parks de agilidade."
  },
  "xicara-em-fibra": {
    nome: "Xícara em Fibra",
    imagem: Brinquedos19,
    descricao: "Brinquedo ou assento cenográfico em formato de xícara gigante. Sua laminação arredondada e base reforçada permitem seu uso tanto como elemento decorativo interativo quanto como parte de brinquedos giratórios mecânicos clássicos.",
    acabamento: "Pintura automotiva de altíssimo brilho com verniz vitrificado protetor contra riscos superficiais.",
    indicacao: "Parques de diversão, lanchonetes temáticas, buffets infantis e cafeterias instagramáveis."
  }
};

export function DetalhesBrinquedos() {
  const { slug } = useParams<{ slug: string }>();
  
  const slugNormalizado = slug?.trim();
  const produto = slugNormalizado ? ESPECIFICACOES_PRODUTOS[slugNormalizado] : null;

  if (!produto) {
    return (
      <div className="animate-page-fade w-full min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
        <h1 className="text-xl font-bold text-zinc-950">Produto não encontrado</h1>
        <p className="text-zinc-500 text-sm mt-1 mb-6">A peça que você está procurando não existe ou mudou de endereço.</p>
        <Link to="/categorias/brinquedos" className="px-5 py-2.5 bg-sky-600 text-white rounded-xl text-sm font-bold shadow-sm hover:bg-sky-700 transition-colors">
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
        <Link to="/categorias/brinquedos" className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-sky-600 hover:text-sky-700 transition-colors group mb-8">
          <svg className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Voltar para a Linha Brinquedos
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
                to="/categorias/brinquedos"
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

export default DetalhesBrinquedos;