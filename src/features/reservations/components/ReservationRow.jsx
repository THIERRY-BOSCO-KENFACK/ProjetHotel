import ReservationStatusBadge from "./ReservationStatusBadge";

// Formate une date ISO ("2025-07-20") en format lisible français ("20 juil. 2025").
// Fonction locale car spécifique à l'affichage de cette ligne — si un autre
// composant en a besoin plus tard, on l'extraira dans un fichier utils/ partagé.
function formatDate(isoDate) {
  const date = new Date(isoDate);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// ReservationRow : une ligne <tr> du tableau des réservations.
// `reservation` : un objet complet issu de useReservationsData.
function ReservationRow({ reservation }) {
  const { id, clientName, room, checkIn, checkOut, status, source } = reservation;

  return (
    <tr className="reservation-row">
      <td className="reservation-row__id">{id}</td>
      <td className="reservation-row__client">{clientName}</td>
      <td>{room}</td>
      <td>{formatDate(checkIn)}</td>
      <td>{formatDate(checkOut)}</td>
      <td>
        <ReservationStatusBadge status={status} />
      </td>
      <td className="reservation-row__source">{source}</td>
    </tr>
  );
}

export default ReservationRow;