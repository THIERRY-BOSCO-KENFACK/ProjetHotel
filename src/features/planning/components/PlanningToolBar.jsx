import { useState } from "react";
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";
import Button from "../../../components/ui/Button";

// Filtres disponibles pour le statut des chambres affichées dans la grille.
const STATUS_FILTERS = [
  { value: "all", label: "Tous les statuts" },
  { value: "reservation", label: "Réservées" },
  { value: "free", label: "Libres" },
  { value: "cleaning", label: "Nettoyage" },
  { value: "maintenance", label: "Maintenance" },
];

// PlanningToolbar : navigation par semaine + filtre de statut.
// La semaine affichée est un mock (chaîne libre) en attendant une vraie
// logique de dates ; le filtre est géré localement pour l'instant.
function PlanningToolbar() {
  const [weekLabel, setWeekLabel] = useState("Semaine du 20 au 26 juillet 2025");
  const [statusFilter, setStatusFilter] = useState("all");

  const handlePreviousWeek = () => {
    console.log("Semaine précédente");
    // TODO: recalculer weekLabel une fois la logique de dates branchée
  };

  const handleNextWeek = () => {
    console.log("Semaine suivante");
  };

  const handleToday = () => {
    console.log("Retour à la semaine courante");
    setWeekLabel("Semaine du 20 au 26 juillet 2025");
  };

  return (
    <div className="planning-toolbar">
      <div className="planning-toolbar__navigation">
        <button
          type="button"
          className="planning-toolbar__nav-btn"
          onClick={handlePreviousWeek}
          aria-label="Semaine précédente"
        >
          <ChevronLeft size={18} />
        </button>

        <span className="planning-toolbar__week-label">{weekLabel}</span>

        <button
          type="button"
          className="planning-toolbar__nav-btn"
          onClick={handleNextWeek}
          aria-label="Semaine suivante"
        >
          <ChevronRight size={18} />
        </button>

        <Button variant="secondary" onClick={handleToday}>
          Aujourd'hui
        </Button>
      </div>

      <div className="planning-toolbar__filter">
        <Filter size={16} className="planning-toolbar__filter-icon" />
        <select
          className="planning-toolbar__filter-select"
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value)}
        >
          {STATUS_FILTERS.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default PlanningToolbar;