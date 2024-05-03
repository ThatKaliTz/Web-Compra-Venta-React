import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const { isLogged } = useContext(AuthContext);

  if (!isLogged) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
