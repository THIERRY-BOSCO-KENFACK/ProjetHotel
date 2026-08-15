import { useState } from "react";
import { Plus, Search } from "lucide-react";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

// Filtres de statut disponibles, mêmes clés que dans useReservationsData/ReservationStatusBadge.
const STATUS_FILTERS = [
  { value: "all", label: "Tous les statuts" },
  { value: "confirmed", label: "Confirmées" },
  { value: "pending", label: "En attente" },
  { value: "cancelled", label: "Annulées" },
];

// ReservationsToolbar : actions et filtres au-dessus du tableau des réservations.
// `onNewReservation` : ouvre la modale de création (état géré par le parent).
// `onSearchChange` : appelé à chaque frappe dans la recherche (filtrage en direct,
// contrairement à SearchBar qui attend la validation — ici la liste est déjà en
// mémoire, donc pas besoin d'attendre pour rester réactif).
// `onStatusFilterChange` : appelé au changement de statut sélectionné.
function ReservationsToolbar({ onNewReservation, onSearchChange, onStatusFilterChange }) {
  const [statusFilter, setStatusFilter] = useState("all");

  const handleStatusChange = (event) => {
    const value = event.target.value;
    setStatusFilter(value);
    if (onStatusFilterChange) {
      onStatusFilterChange(value);
    }
  };

  return (
    <div className="reservations-toolbar">
      <Button variant="primary" icon={Plus} onClick={onNewReservation}>
        Nouvelle réservation
      </Button>

      <div className="reservations-toolbar__filters">
        <Input
          id="reservations-search"
          icon={Search}
          placeholder="Rechercher un client, une chambre..."
          onChange={(event) => onSearchChange && onSearchChange(event.target.value)}
        />

        <select
          className="reservations-toolbar__status-select"
          value={statusFilter}
          onChange={handleStatusChange}
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

export default ReservationsToolbar;