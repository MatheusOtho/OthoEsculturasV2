import Hero from ".//home/hero"
import Carrossel from ".//home/carrossel"
import Categorias from ".//home/categorias"


function Home() {
  return (
    <>
      <main className="animate-page-fade">
        <Hero/>
        <Carrossel/>
        <Categorias/>
      </main>
    </>
  );
}

export default Home;
