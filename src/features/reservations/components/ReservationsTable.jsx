import ReservationRow from "./ReservationRow";

// En-têtes du tableau, dans l'ordre exact des colonnes rendues par ReservationRow.
// Centralisées ici pour garder <thead> et <tbody> synchronisés facilement.
const TABLE_HEADERS = ["N°", "Client", "Chambre", "Arrivée", "Départ", "Statut", "Source"];

// ReservationsTable : tableau complet des réservations.
// `reservations` : liste d'objets issue de useReservationsData (potentiellement filtrée).
function ReservationsTable({ reservations }) {
  if (reservations.length === 0) {
    return (
      <div className="reservations-table__empty">
        <p>Aucune réservation ne correspond à ta recherche.</p>
      </div>
    );
  }

  return (
    <div className="reservations-table__wrapper">
      <table className="reservations-table">
        <thead>
          <tr>
            {TABLE_HEADERS.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {reservations.map((reservation) => (
            <ReservationRow key={reservation.id} reservation={reservation} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReservationsTable;