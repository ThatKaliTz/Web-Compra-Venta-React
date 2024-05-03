import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const PublicRoute = ({ children }) => {
  const { isLogged } = useContext(AuthContext);

  if (isLogged) {
    // Si el usuario está autenticado, redirige a la página de inicio (o cualquier otra ruta adecuada)
    return <Navigate to="/home" replace />;
  } else {
    // Si el usuario no está autenticado, permite el acceso a la ruta pública
    return children;
  }
};

export default PublicRoute;
