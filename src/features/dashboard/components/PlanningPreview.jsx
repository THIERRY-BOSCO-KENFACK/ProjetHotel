// Colonnes du planning (5 jours affichés)
const DAYS = ["Lun 20/07", "Mar 21/07", "Mer 22/07", "Jeu 23/07", "Ven 24/07"];

// Mock data : chaque chambre a une liste de segments.
// `span` = nombre de jours occupés par ce segment (utilisé en colSpan).
// La somme des `span` d'une ligne doit toujours égaler le nombre de jours (5).
const ROOMS_PLANNING = [
  {
    room: "101",
    segments: [
      { type: "reservation", label: "Dupont", span: 2 },
      { type: "free", label: "Libre", span: 1 },
      { type: "reservation", label: "Martin", span: 2 },
    ],
  },
  {
    room: "102",
    segments: [
      { type: "cleaning", label: "Nettoyage", span: 1 },
      { type: "free", label: "Libre", span: 2 },
      { type: "reservation", label: "Smith", span: 2 },
    ],
  },
  {
    room: "103",
    segments: [
      { type: "maintenance", label: "Maintenance", span: 2 },
      { type: "free", label: "Libre", span: 1 },
      { type: "reservation", label: "Leroy", span: 2 },
    ],
  },
];

// PlanningPreview : aperçu du planning hôtelier sous forme de tableau.
// Les segments sont rendus en <td colSpan={span}> pour créer l'effet
// de "barre" s'étendant sur plusieurs colonnes/jours.
function PlanningPreview() {
  return (
    <section className="planning-preview">
      <div className="planning-preview__header">
        <h2>Planning des chambres</h2>
      </div>

      <div className="planning-preview__table-wrapper">
        <table className="planning-table">
          <thead>
            <tr>
              <th className="planning-table__room-col">Chambre</th>
              {DAYS.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {ROOMS_PLANNING.map(({ room, segments }) => (
              <tr key={room}>
                <td className="planning-table__room-col planning-table__room-number">
                  {room}
                </td>

                {segments.map((segment, index) => (
                  <td
                    key={`${room}-${index}`}
                    colSpan={segment.span}
                    className="planning-table__cell"
                  >
                    <span
                      className={`reservation-bar reservation-bar--${segment.type}`}
                    >
                      {segment.label}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default PlanningPreview;