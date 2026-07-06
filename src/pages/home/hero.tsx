import { Link } from "react-router-dom";
import imgHero from "../../assets/home/hero.svg";

export function Hero() {
  return (
    <main className="w-full bg-white pt-32 pb-24 px-6 sm:px-12 lg:px-20">
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* LADO ESQUERDO: CONTEÚDO */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Badge Minimalista */}
            <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-[10px] font-semibold bg-zinc-100 text-zinc-800 mb-6 uppercase tracking-widest border border-zinc-200/40">
              <span className="w-1 h-1 rounded-full bg-sky-500 animate-pulse" />
              Esculturas Exclusivas
            </span>

            {/* Título Principal */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-normal text-zinc-900 tracking-tight leading-[1.05] mb-6">
              A solidez da arte <br />
              <span className="font-serif italic bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
                moldada em fibra.
              </span>
            </h1>

           {/* Descrição */}
            <p className="text-zinc-600 text-sm md:text-base max-w-xl mb-10 leading-relaxed font-light">
              Transformamos conceitos abstratos em <span className="font-medium text-zinc-900">esculturas em fibra de vidro </span> 
              e peças de design único. Unimos a imponência das grandes formas à leveza, sofisticação e resistência de obras 
              feitas para <span className="font-medium text-zinc-900">ambientes internos e externos.</span>
            </p>

            {/* Grupo de Ações */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="https://wa.me/5511946822225"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 bg-zinc-900 hover:bg-green-800 text-white font-medium text-sm px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-zinc-950/10 active:scale-[0.98]"
              >
                <i className="fa-brands fa-whatsapp text-lg text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Encomendar Obra Sob Medida</span>
              </a>

              <Link
                to="/categorias"
                className="group flex items-center justify-center gap-1.5 text-sm font-medium text-zinc-600 hover:text-sky-600 transition-colors duration-200 py-3 px-6 rounded-xl hover:bg-zinc-50"
              >
                <span>Explorar Galeria</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

           {/* Grid de Diferenciais */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4 border-t border-zinc-200/60 w-full">
              <div className="space-y-1">
                <h3 className="text-zinc-900 font-medium text-sm tracking-tight">Capacidade Produtiva</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Estrutura técnica para executar <span className="text-zinc-700 font-normal">esculturas</span> e projetos de alta qualidade.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-zinc-900 font-medium text-sm tracking-tight">Fidelidade ao Projeto</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Modelagem e <span className="text-zinc-700 font-normal">fabricação sob medida</span> que traduzem conceitos digitais em peças físicas de alta precisão.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-zinc-900 font-medium text-sm tracking-tight">Engenharia e Acabamento</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Estruturas reforçadas em <span className="text-zinc-700 font-normal">fibra de vidro de alta resistência</span> com acabamento e pintura impecável.
                </p>
              </div>
            </div>

          </div>

          {/* LADO DIREITO: SEU SVG PURO E TRANSPARENTE */}
          <div className="lg:col-span-5 w-full flex items-center justify-center lg:justify-end">
            <div className="group relative w-full flex items-center justify-center lg:justify-end overflow-visible">
              
              {/* SVG flutuando de forma limpa sobre o fundo branco */}
              <img
                src={imgHero}
                alt="Escultura contemporânea fluida"
                className="w-[280px] sm:w-[440px] md:w-[520px] lg:w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:drop-shadow-[0_30px_60px_rgba(0,0,0,0.1)]"
              />
              
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Hero;