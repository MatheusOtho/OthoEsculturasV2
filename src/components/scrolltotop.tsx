import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Rola instantaneamente para o topo da página ao mudar de rota
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Este componente não renderiza nada visualmente
}

export default ScrollToTop;