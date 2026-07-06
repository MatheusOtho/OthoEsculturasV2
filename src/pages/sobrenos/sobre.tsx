export function Sobre() {
  const pontosFortes = [
    "Vasos decorativos premium",
    "Pratos sob medida para vasos",
    "Esculturas sob encomendas especiais",
    "Formas profissionais em silicone e fibra de vidro",
    "Fundição em resina translúcida, pó de mármore e fibra de vidro",
    "Estátuas e monumentos",
    "Personagens e cenografia temáticas",
    "Animais de qualquer tamanho sob encomenda",
    "Restauração especializada de obras artísticas",
    "Pinturas e acabamentos de alto padrão",
    "Modelagem de qualquer trabalho artístico personalizado"
  ];

  return (
    <main className="w-full bg-white text-zinc-900 font-sans antialiased selection:bg-sky-600/30">
      
      {/* Hero Section / Cabeçalho da Página */}
      <section className="w-full bg-slate-50 border-b border-zinc-200/50 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <title className="text-xs md:text-sm font-black uppercase tracking-widest text-sky-600 block mb-4">
            Conheça nossa história
          </title>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-950 mb-6">
            Quem Somos
          </h1>
          <div className="w-12 h-1 bg-sky-600 mx-auto rounded-full mb-8" />
          <p className="text-base md:text-lg text-zinc-600 leading-relaxed max-w-3xl mx-auto font-medium">
            A <strong className="text-zinc-950 font-bold">OTHO ESCULTURAS</strong> é uma empresa brasileira de pequeno porte nascida da paixão pela Arte. Foi fundada em 2011 pelo empresário Claudio Otho Ribeiro, com o objetivo claro de transformar criações artísticas e desenhos abstratos em esculturas tridimensionais tangíveis.
          </p>
        </div>
      </section>

      {/* O Que Fazemos & Pontos Fortes */}
      <section className="w-full py-20 md:py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Bloco de Texto Conceitual */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-sky-600">
            Foco & Atuação
          </span>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-zinc-950">
            Afinal, o que fazemos?
          </h2>
          <p className="text-sm md:text-base text-zinc-600 leading-relaxed font-medium">
            Somos uma empresa especializada no ramo de modelagem e fabricação de esculturas em fibra de vidro. Produzimos vasos de alta durabilidade voltados para grandes empresas e projetos que atuam diretamente no setor de paisagismo, arquitetura e ambientação comercial.
          </p>
        </div>

        {/* Lista de Pontos Fortes (Grid Interno) */}
        <div className="lg:col-span-7 p-6 md:p-8 rounded-3xl bg-zinc-950 text-white border border-zinc-900 shadow-xl">
          <h3 className="text-xs font-black uppercase tracking-widest text-sky-500 mb-6">
            Nosso Ponto Forte de Fabricação
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm font-semibold text-zinc-300">
            {pontosFortes.map((ponto, index) => (
              <li key={index} className="flex items-start gap-2.5 group">
                <svg className="w-4 h-4 text-sky-500 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="leading-tight group-hover:text-white transition-colors">
                  {ponto}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Diretrizes Estratégicas (Missão, Visão, Valores) */}
      <section className="w-full bg-slate-50/50 border-t border-zinc-200/40 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Missão */}
            <article className="flex flex-col gap-4 p-8 rounded-2xl bg-white border border-zinc-200/60 shadow-sm transition-all duration-300 hover:border-sky-500/20 hover:shadow-md">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center border border-sky-100">
                <svg className="w-5 h-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-black tracking-tight text-zinc-950">Missão</h3>
              <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                Tornar sonhos em realidade e transformar desenhos artísticos em belas esculturas. Atuar com total comprometimento com o cliente, garantindo entregas rigorosas e satisfação absoluta.
              </p>
            </article>

            {/* Visão */}
            <article className="flex flex-col gap-4 p-8 rounded-2xl bg-white border border-zinc-200/60 shadow-sm transition-all duration-300 hover:border-sky-500/20 hover:shadow-md">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center border border-sky-100">
                <svg className="w-5 h-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-black tracking-tight text-zinc-950">Visão</h3>
              <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                Crescer de maneira sólida a cada dia e consolidar a marca como referência indiscutível no mercado artístico nacional — tanto no setor de recuperação e restauração de obras complexas quanto em modelagem e fabricação em larga escala.
              </p>
            </article>

            {/* Valores */}
            <article className="flex flex-col gap-4 p-8 rounded-2xl bg-white border border-zinc-200/60 shadow-sm transition-all duration-300 hover:border-sky-500/20 hover:shadow-md">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center border border-sky-100">
                <svg className="w-5 h-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-black tracking-tight text-zinc-950">Valores</h3>
              <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                Valorização mútua de clientes, parceiros e fornecedores. Acreditamos no potencial máximo da nossa criação, respeitamos as individualidades de nossos colaboradores, analisamos rigorosamente as não-conformidades e celebramos resultados de sucesso.
              </p>
            </article>

          </div>
        </div>
      </section>

    </main>
  );
}

export default Sobre;