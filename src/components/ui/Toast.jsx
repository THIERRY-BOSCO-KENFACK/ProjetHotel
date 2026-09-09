import { useEffect } from "react";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

// Icône associée à chaque type de toast — cohérent avec le principe déjà
// établi dans l'app (ne jamais dépendre uniquement de la couleur).
const TOAST_ICONS = {
  success: CheckCircle2,
  error: AlertCircle,
  info: Info,
};

// Toast : notification temporaire unique.
// `id` : identifiant, utilisé par le parent pour le retirer de sa liste.
// `type` : "success" | "error" | "info" (défaut "info").
// `message` : texte affiché.
// `duration` : délai en ms avant disparition automatique (défaut 4000).
// `onDismiss` : appelé (avec `id`) à la fermeture, manuelle ou automatique.
function Toast({ id, type = "info", message, duration = 4000, onDismiss }) {
  // Disparition automatique après `duration` — le timer est nettoyé si le
  // composant est démonté avant (ex: fermeture manuelle avant l'échéance),
  // pour éviter un appel à onDismiss sur un toast déjà retiré.
  useEffect(() => {
    const timer = setTimeout(() => onDismiss(id), duration);
    return () => clearTimeout(timer);
  }, [id, duration, onDismiss]);

  const Icon = TOAST_ICONS[type] ?? Info;

  return (
    <div className={`toast toast--${type}`} role="status">
      <Icon size={18} className="toast__icon" />
      <span className="toast__message">{message}</span>
      <button
        type="button"
        className="toast__close"
        onClick={() => onDismiss(id)}
        aria-label="Fermer la notification"
      >
        <X size={14} />
      </button>
    </div>
  );
}

export default Toast;