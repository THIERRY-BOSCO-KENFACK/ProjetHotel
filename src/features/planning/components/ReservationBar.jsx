// ReservationBar : représente un segment de la grille (réservation, statut...).
// `type` détermine la couleur via les classes .reservation-bar--{type} du CSS.
// `label` est le texte affiché (nom du client, ou libellé du statut).
// `isActive` (nouveau) : si false, le segment est visuellement estompé
// (statut filtré via PlanningFilter) sans être retiré de la grille —
// on ne peut pas le masquer complètement sans casser l'alignement des colSpan.
function ReservationBar({ type, label, isActive = true }) {
  return (
    <span
      className={`reservation-bar reservation-bar--${type} ${
        isActive ? "" : "reservation-bar--dimmed"
      }`}
    >
      {label}
    </span>
  );
}

export default ReservationBar;