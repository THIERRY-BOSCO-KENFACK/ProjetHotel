import { createContext, useState, useCallback } from "react";
import Toast from "../components/ui/Toast";

// ToastContext : contexte brut, consommé via useToast.js (comme AuthContext
// est consommé via features/auth/hooks/useAuth.js).
const ToastContext = createContext(undefined);

// ToastProvider : enveloppe toute l'application (dans main.jsx) et affiche
// la pile de toasts actifs dans un conteneur fixe, indépendamment de la
// page actuellement affichée.
function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  // useCallback : évite de recréer showToast/removeToast à chaque render,
  // important ici car ces fonctions seront passées à travers le contexte
  // à potentiellement beaucoup de composants consommateurs.
  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  // showToast : ajoute un toast à la pile. `id` généré via Date.now() +
  // un compteur aléatoire — suffisant ici car les toasts sont éphémères
  // et jamais persistés, pas besoin d'une vraie génération d'UUID.
  const showToast = useCallback((type, message, duration) => {
    const id = `${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, type, message, duration }]);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <div className="toast-container" aria-live="polite">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onDismiss={removeToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export { ToastContext, ToastProvider };