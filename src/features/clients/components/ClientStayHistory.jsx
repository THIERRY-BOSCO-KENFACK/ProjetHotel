import StatusBadge from "../../../components/ui/StatusBadge";

// Réutilise le même formatage de date que ReservationRow —
// si ce besoin apparaît une 3e fois, ce sera le bon moment pour
// l'extraire dans un utils/formatDate.js partagé.
function formatDate(isoDate) {
  const date = new Date(isoDate);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// ClientStayHistory : historique des séjours d'un client.
// `stayHistory` : tableau issu du client (voir useClientsData).
function ClientStayHistory({ stayHistory }) {
  if (stayHistory.length === 0) {
    return (
      <div className="client-stay-history__empty">
        <p>Ce client n'a encore aucun séjour enregistré.</p>
      </div>
    );
  }

  return (
    <div className="client-stay-history">
      <h3 className="client-stay-history__title">Historique des séjours</h3>

      <ul className="client-stay-history__list">
        {stayHistory.map((stay, index) => (
          <li key={index} className="client-stay-history__item">
            <span className="client-stay-history__room">Chambre {stay.room}</span>
            <span className="client-stay-history__dates">
              {formatDate(stay.checkIn)} → {formatDate(stay.checkOut)}
            </span>
            <StatusBadge status={stay.status} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientStayHistory;