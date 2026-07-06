import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header"
import Home from "./pages/home"
import Contato from "./pages/contato"
import Animais from "./pages/categorias/animais/animais"
import DetalheAnimais from "./pages/categorias/animais/detalhesanimais"




function App() {

  return (
    <>
      <BrowserRouter>
          <Header/>     
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/animais" element={<Animais />} />
                <Route path="/categoria-animais/:slug" element={<DetalheAnimais />} />
              </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
