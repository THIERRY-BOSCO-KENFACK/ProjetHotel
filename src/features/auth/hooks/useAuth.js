import { useContext } from "react";
import { AuthContext } from "../AuthContext";

// useAuth : hook d'accès au contexte d'authentification.
// Lève une erreur explicite si utilisé hors d'un AuthProvider — plus facile
// à déboguer qu'un plantage silencieux ou des valeurs undefined imprévisibles.
function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth doit être utilisé à l'intérieur d'un AuthProvider");
  }

  return context;
}

export default useAuth;