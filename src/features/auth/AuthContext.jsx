import { createContext, useState } from "react";

// AuthContext : contexte brut, exporté pour que useAuth.js puisse le consommer
// via useContext — les composants de l'app n'importeront jamais ce fichier
// directement, ils passeront par le hook useAuth pour plus de clarté.
const AuthContext = createContext(undefined);

// AuthProvider : enveloppe toute l'application (dans main.jsx) et fournit
// l'état d'authentification à tous les composants descendants.
function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // login : simule une connexion réussie, sans vérification réelle
  // (pas de backend). Dérive un nom d'affichage à partir de l'email saisi
  // pour que l'interface reflète au moins ce que l'utilisateur a tapé,
  // plutôt que d'afficher un nom générique fixe.
  const login = ({ email }) => {
    const displayName = email.split("@")[0];
    const capitalizedName = displayName.charAt(0).toUpperCase() + displayName.slice(1);

    setUser({
      fullName: capitalizedName,
      email,
      role: "Réceptionniste",
    });
    setIsAuthenticated(true);
  };

  // logout : réinitialise l'état — appelé uniquement après confirmation
  // dans LogoutConfirmModal, jamais directement au clic sur le bouton Sidebar.
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };