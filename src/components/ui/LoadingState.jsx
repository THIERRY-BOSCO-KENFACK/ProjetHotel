import { Loader2 } from "lucide-react";

// LoadingState : indicateur de chargement générique, texte + spinner.
// `message` : texte affiché, personnalisable selon le contexte
// (ex: "Chargement des réservations...").
function LoadingState({ message = "Chargement..." }) {
  return (
    <div className="loading-state" role="status">
      <Loader2 size={24} className="loading-state__spinner" />
      <p className="loading-state__message">{message}</p>
    </div>
  );
}

export default LoadingState;