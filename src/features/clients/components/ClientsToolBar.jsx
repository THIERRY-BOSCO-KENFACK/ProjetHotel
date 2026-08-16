import { Search } from "lucide-react";
import Input from "../../../components/ui/Input";

// ClientsToolbar : recherche + filtre VIP au-dessus du tableau des clients.
// `onSearchChange` : appelé à chaque frappe (filtrage en direct, liste déjà en mémoire).
// `onVipFilterChange` : appelé au clic sur la case "VIP uniquement".
function ClientsToolbar({ onSearchChange, onVipFilterChange }) {
  return (
    <div className="clients-toolbar">
      <Input
        id="clients-search"
        icon={Search}
        placeholder="Rechercher un nom, un email..."
        onChange={(event) => onSearchChange && onSearchChange(event.target.value)}
      />

      <label className="clients-toolbar__vip-filter">
        <input
          type="checkbox"
          onChange={(event) => onVipFilterChange && onVipFilterChange(event.target.checked)}
        />
        <span>VIP uniquement</span>
      </label>
    </div>
  );
}

export default ClientsToolbar;