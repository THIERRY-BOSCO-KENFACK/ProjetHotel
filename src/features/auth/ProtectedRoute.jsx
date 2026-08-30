import { Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

// ProtectedRoute : bloque l'accès à ses enfants si l'utilisateur n'est pas
// connecté. Utilisé dans App.jsx pour envelopper chaque route protégée
// individuellement (voir la mise à jour de App.jsx à venir).
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;