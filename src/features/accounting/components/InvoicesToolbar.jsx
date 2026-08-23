import { Search } from "lucide-react";
import Input from "../../../components/ui/Input";

// Filtres de statut disponibles, alignés sur les statuts gérés par StatusBadge
// pour la facturation (paid/pending/overdue).
const STATUS_FILTERS = [
  { value: "all", label: "Tous les statuts" },
  { value: "paid", label: "Payées" },
  { value: "pending", label: "En attente" },
  { value: "overdue", label: "En retard" },
];

// InvoicesToolbar : recherche + filtre par statut au-dessus du tableau des factures.
// `onSearchChange` : appelé à chaque frappe (filtrage en direct).
// `onStatusFilterChange` : appelé au changement de statut sélectionné.
function InvoicesToolbar({ onSearchChange, onStatusFilterChange }) {
  return (
    <div className="invoices-toolbar">
      <Input
        id="invoices-search"
        icon={Search}
        placeholder="Rechercher un client, une facture..."
        onChange={(event) => onSearchChange && onSearchChange(event.target.value)}
      />

      <select
        className="invoices-toolbar__status-select"
        onChange={(event) => onStatusFilterChange && onStatusFilterChange(event.target.value)}
        defaultValue="all"
      >
        {STATUS_FILTERS.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InvoicesToolbar;