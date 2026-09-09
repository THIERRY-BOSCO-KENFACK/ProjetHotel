import { X } from "lucide-react";
import useEscapeKey from "../../hooks/useEscapeKey";

function Modal({ isOpen, onClose, title, size = "default", children }) {
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
        className={`modal ${size === "compact" ? "modal--compact" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
      >
        {title && (
          <div className="modal__header">
            <h2 id="modal-title">{title}</h2>
            <button type="button" className="modal__close" onClick={onClose} aria-label="Fermer">
              <X size={20} />
            </button>
          </div>
        )}

        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
}

export default Modal;