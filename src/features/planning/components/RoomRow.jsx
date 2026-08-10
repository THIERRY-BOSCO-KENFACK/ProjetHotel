import ReservationBar from "./ReservationBar";

// RoomRow : une ligne <tr> de la grille de planning, pour une chambre donnée.
// `room` : numéro/nom de la chambre (ex: "101").
// `segments` : liste de { type, label, span } — voir usePlanningData pour le format.
// `activeStatuses` (nouveau, optionnel) : liste des types actifs selon
// PlanningFilter. Si non fourni (undefined), tous les segments restent actifs
// — RoomRow reste donc utilisable seul, sans filtre connecté.
function RoomRow({ room, segments, activeStatuses }) {
  return (
    <tr className="room-row">
      <td className="room-row__number">{room}</td>

      {segments.map((segment, index) => {
        const isActive = !activeStatuses || activeStatuses.includes(segment.type);

        return (
          <td
            key={`${room}-${index}`}
            colSpan={segment.span}
            className="room-row__cell"
          >
            <ReservationBar type={segment.type} label={segment.label} isActive={isActive} />
          </td>
        );
      })}
    </tr>
  );
}

export default RoomRow;