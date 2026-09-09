import { X } from "lucide-react";
import useEscapeKey from "../../hooks/useEscapeKey";
// Drawer : panneau latéral coulissant, avec overlay.
// `isOpen`/`onClose` : mêmes conventions que Modal.
// `title` : titre affiché dans l'en-tête (ex: "Notifications").
// `position` : "right" (défaut) | "left" — bord depuis lequel le panneau glisse.
// `children` : contenu du panneau.
function Drawer({ isOpen, onClose, title, position = "right", children }) {
  useEscapeKey(onClose, isOpen);
  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick} role="presentation">
      <div
        className={`drawer drawer--${position}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        <div className="drawer__header">
          <h2 id="drawer-title">{title}</h2>
          <button type="button" className="modal__close" onClick={onClose} aria-label="Fermer">
            <X size={20} />
          </button>
        </div>

        <div className="drawer__body">{children}</div>
      </div>
    </div>
  );
}

export default Drawer;