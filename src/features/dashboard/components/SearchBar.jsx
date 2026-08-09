import { useState } from "react";
import { Search } from "lucide-react";

// SearchBar : composant de recherche générique et réutilisable.
// `onSearch` : callback appelé avec la valeur saisie, à la validation.
// `placeholder` : texte d'indication, personnalisable selon le contexte d'usage.
function SearchBar({ onSearch, placeholder = "Rechercher..." }) {
  const [query, setQuery] = useState("");

  // Déclenche la recherche uniquement à la validation (Entrée ou clic),
  // pas à chaque frappe, pour rester simple sans backend/debounce.
  const triggerSearch = () => {
    if (onSearch) {
      onSearch(query.trim());
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      triggerSearch();
    }
  };

  return (
    <div className="search-bar">
      <Search size={18} className="search-bar__icon" onClick={triggerSearch} />
      <input
        type="text"
        className="search-bar__input"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default SearchBar;