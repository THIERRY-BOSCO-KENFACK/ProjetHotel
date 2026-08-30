import Button from "../../../components/ui/Button";

// LogoutConfirmModal : modale de confirmation avant déconnexion réelle.
// `isOpen` : contrôle l'affichage. `onConfirm` : appelé si l'utilisateur
// confirme (déclenchera logout() + navigation, géré par le composant parent).
// `onCancel` : ferme la modale sans rien faire.
function LogoutConfirmModal({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onCancel();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal modal--compact">
        <div className="modal__body">
          <h2 className="logout-modal__title">Se déconnecter ?</h2>
          <p className="logout-modal__message">
            Tu devras te reconnecter pour continuer à utiliser Suite PMS.
          </p>

          <div className="modal__actions">
            <Button variant="secondary" type="button" onClick={onCancel}>
              Annuler
            </Button>
            <Button variant="danger" type="button" onClick={onConfirm}>
              Se déconnecter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoutConfirmModal;