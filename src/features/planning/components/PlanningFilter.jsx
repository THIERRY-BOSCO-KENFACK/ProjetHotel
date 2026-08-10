import { useState } from "react";

// Statuts disponibles, avec leur couleur associée (classes définies dans global.css).
// Même liste de `type` que dans usePlanningData/ReservationBar, pour rester cohérent.
const STATUSES = [
  { type: "reservation", label: "Réservé" },
  { type: "free", label: "Libre" },
  { type: "cleaning", label: "Nettoyage" },
  { type: "maintenance", label: "Maintenance" },
];

// PlanningFilter : légende + filtre par statut, sous forme de chips cliquables.
// `onFilterChange` (optionnel) : callback appelé avec la liste des statuts
// actifs à chaque clic — permet à PlanningGrid de filtrer les lignes plus tard.
// Tant que la connexion n'est pas faite, le composant reste utilisable seul
// (légende visuelle pure) sans passer de prop.
function PlanningFilter({ onFilterChange }) {
  // Tous les statuts sont actifs par défaut (aucun filtre appliqué au départ).
  const [activeStatuses, setActiveStatuses] = useState(
    STATUSES.map((status) => status.type)
  );

  const toggleStatus = (type) => {
    const updated = activeStatuses.includes(type)
      ? activeStatuses.filter((status) => status !== type)
      : [...activeStatuses, type];

    setActiveStatuses(updated);

    if (onFilterChange) {
      onFilterChange(updated);
    }
  };

  return (
    <div className="planning-filter">
      {STATUSES.map(({ type, label }) => {
        const isActive = activeStatuses.includes(type);

        return (
          <button
            key={type}
            type="button"
            className={`planning-filter__chip planning-filter__chip--${type} ${
              isActive ? "planning-filter__chip--active" : ""
            }`}
            onClick={() => toggleStatus(type)}
            aria-pressed={isActive}
          >
            <span className="planning-filter__dot" />
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default PlanningFilter;