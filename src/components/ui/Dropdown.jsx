import { useState, useRef, useEffect } from "react";

// Dropdown : menu déroulant générique.
// `trigger` : élément déclencheur (bouton, avatar, "..." — fourni par l'appelant).
// `items` : liste de { label, icon, onClick, variant } — variant "danger"
// pour une action destructive (ex: "Supprimer"), sinon non défini/"default".
// `align` : "left" (défaut) | "right" — côté d'alignement du menu par
// rapport au trigger, utile si le trigger est proche du bord de l'écran.
function Dropdown({ trigger, items, align = "left" }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Même mécanique de fermeture au clic extérieur que DatePicker —
  // les deux composants sont des popovers custom sans overlay dédié.
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleItemClick = (onClick) => {
    onClick();
    setIsOpen(false);
  };

  return (
    <div className="dropdown" ref={containerRef}>
      <button
        type="button"
        className="dropdown__trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        {trigger}
      </button>

      {isOpen && (
        <div className={`dropdown__menu dropdown__menu--${align}`} role="menu">
          {items.map(({ label, icon: Icon, onClick, variant }, index) => (
            <button
              key={index}
              type="button"
              role="menuitem"
              className={`dropdown__item ${variant === "danger" ? "dropdown__item--danger" : ""}`}
              onClick={() => handleItemClick(onClick)}
            >
              {Icon && <Icon size={16} />}
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;