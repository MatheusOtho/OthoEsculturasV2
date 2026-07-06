import Hero from ".//home/hero"
import Carrossel from ".//home/carrossel"
import Categorias from ".//home/categorias"
import Destaques from ".//home/destaques"


function Home() {
  return (
    <>
      <main className="animate-page-fade">
        <Hero/>
        <Carrossel/>
        <Categorias/>
        <Destaques/>
      </main>
    </>
  );
}

export default Home;
