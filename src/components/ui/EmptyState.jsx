// EmptyState : état vide générique et réutilisable.
// `icon` : composant lucide optionnel (renforce visuellement le message,
// cohérent avec le principe "jamais juste du texte" déjà appliqué ailleurs).
// `title` : message principal (obligatoire).
// `message` : texte secondaire optionnel, plus explicatif.
// `action` : élément optionnel (généralement un <Button>) proposant une
// action corrective, ex: "Créer une réservation" si la liste est vide
// parce qu'il n'y a vraiment aucune donnée (pas juste un filtre trop strict).
function EmptyState({ icon: Icon, title, message, action }) {
  return (
    <div className="empty-state">
      {Icon && <Icon size={32} className="empty-state__icon" />}
      <p className="empty-state__title">{title}</p>
      {message && <p className="empty-state__message">{message}</p>}
      {action && <div className="empty-state__action">{action}</div>}
    </div>
  );
}

export default EmptyState;