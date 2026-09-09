import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, User, BookOpen, DoorOpen } from "lucide-react";
import useGlobalSearch from "../../hooks/useGlobalSearch";

// Icône associée à chaque type de résultat — cohérent avec le principe
// déjà établi (jamais dépendre du texte seul pour distinguer une catégorie).
const RESULT_ICONS = {
  client: User,
  reservation: BookOpen,
  room: DoorOpen,
};

const RESULT_TYPE_LABELS = {
  client: "Client",
  reservation: "Réservation",
  room: "Chambre",
};

// GlobalSearch : recherche transversale accessible depuis le Header.
function GlobalSearch() {
  const { query, setQuery, results } = useGlobalSearch();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleResultClick = (path) => {
    navigate(path);
    setQuery("");
    setIsOpen(false);
  };

  const showPanel = isOpen && query.trim() !== "";

  return (
    <div className="global-search" ref={containerRef}>
      <div className="global-search__field">
        <Search size={16} className="global-search__icon" />
        <input
          type="text"
          className="global-search__input"
          placeholder="Rechercher un client, une réservation, une chambre..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setIsOpen(true)}
        />
      </div>

      {showPanel && (
        <div className="global-search__panel">
          {results.length === 0 ? (
            <p className="global-search__empty">Aucun résultat pour "{query}".</p>
          ) : (
            results.map(({ id, type, label, sublabel, path }) => {
              const Icon = RESULT_ICONS[type];
              return (
                <button
                  key={id}
                  type="button"
                  className="global-search__result"
                  onClick={() => handleResultClick(path)}
                >
                  <Icon size={16} className="global-search__result-icon" />
                  <div className="global-search__result-text">
                    <span className="global-search__result-label">{label}</span>
                    {sublabel && <span className="global-search__result-sublabel">{sublabel}</span>}
                  </div>
                  <span className="global-search__result-type">{RESULT_TYPE_LABELS[type]}</span>
                </button>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}

export default GlobalSearch;