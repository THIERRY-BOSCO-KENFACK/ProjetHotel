// StatusBadge : badge coloré générique, partagé entre features (Reservations, Clients...).
// `status` doit correspondre à une clé de STATUS_LABELS.
const STATUS_LABELS = {
  confirmed: "Confirmée",
  pending: "En attente",
  cancelled: "Annulée",
};

function StatusBadge({ status }) {
  const label = STATUS_LABELS[status] ?? status;

  return (
    <span className={`status-badge status-badge--${status}`}>
      {label}
    </span>
  );
}

export default StatusBadge;