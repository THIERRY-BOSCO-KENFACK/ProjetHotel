// Table de correspondance statut → libellé affiché.
// Centralisée ici pour que le composant reste la seule source de vérité
// sur la traduction technique ("confirmed") → texte utilisateur ("Confirmée").
const STATUS_LABELS = {
  confirmed: "Confirmée",
  pending: "En attente",
  cancelled: "Annulée",
};

// ReservationStatusBadge : badge coloré représentant le statut d'une réservation.
// `status` doit correspondre à une clé de STATUS_LABELS (voir useReservationsData).
function ReservationStatusBadge({ status }) {
  const label = STATUS_LABELS[status] ?? status;

  return (
    <span className={`reservation-status reservation-status--${status}`}>
      {label}
    </span>
  );
}

export default ReservationStatusBadge;