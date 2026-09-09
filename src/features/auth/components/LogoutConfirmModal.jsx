import ConfirmDialog from "../../../components/ui/ConfirmDialog";

// LogoutConfirmModal : usage spécifique de ConfirmDialog pour la déconnexion.
// Garder ce fichier (plutôt que d'utiliser ConfirmDialog directement dans
// Sidebar.jsx) garde le texte de la modale colocalisé dans la feature auth,
// que Sidebar n'a pas besoin de connaître.
function LogoutConfirmModal({ isOpen, onConfirm, onCancel }) {
  return (
    <ConfirmDialog
      isOpen={isOpen}
      title="Se déconnecter ?"
      message="Tu devras te reconnecter pour continuer à utiliser Suite PMS."
      confirmLabel="Se déconnecter"
      confirmVariant="danger"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
}

export default LogoutConfirmModal;