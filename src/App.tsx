import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scrolltotop"; // Certifique-se de criar este arquivo na sua pasta de componentes
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Contato from "./pages/contato";
import Animais from "./pages/categorias/animais/animais";
import DetalheAnimais from "./pages/categorias/animais/detalhesanimais";
import Destaques from "./pages/home/destaques";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> 
      <Header />     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/categorias/animais" element={<Animais />} />
          <Route path="/categoria-animais/:slug" element={<DetalheAnimais />} />
          <Route path="/destaques" element={<Destaques />} />
        </Routes>      
      <Footer />     
    </BrowserRouter>
  );
}

export default App;