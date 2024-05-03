import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Este componente se encargará de hacer scroll hacia arriba cada vez que cambie la ubicación
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
