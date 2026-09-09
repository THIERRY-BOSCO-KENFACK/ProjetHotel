import Modal from "./Modal";
import Button from "./Button";

// ConfirmDialog : modale de confirmation réutilisable pour toute action
// nécessitant une validation explicite de l'utilisateur.
// `title` : question posée (ex: "Se déconnecter ?", "Annuler la réservation ?").
// `message` : phrase d'accompagnement expliquant la conséquence.
// `confirmLabel`/`cancelLabel` : textes des boutons (défauts fournis).
// `confirmVariant` : "primary" ou "danger" selon la gravité de l'action —
// "danger" pour les actions destructives (déconnexion, suppression,
// annulation), "primary" pour une confirmation neutre.
function ConfirmDialog({
  isOpen,
  title,
  message,
  confirmLabel = "Confirmer",
  cancelLabel = "Annuler",
  confirmVariant = "primary",
  onConfirm,
  onCancel,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onCancel} size="compact">
      <h2 className="confirm-dialog__title">{title}</h2>
      {message && <p className="confirm-dialog__message">{message}</p>}

      <div className="modal__actions">
        <Button variant="secondary" type="button" onClick={onCancel}>
          {cancelLabel}
        </Button>
        <Button variant={confirmVariant} type="button" onClick={onConfirm}>
          {confirmLabel}
        </Button>
      </div>
    </Modal>
  );
}

export default ConfirmDialog;