import { useState } from "react";

// Tooltip : info-bulle générique, déclenchée au survol ou au focus clavier.
// `content` : texte simple ou JSX riche (ex: plusieurs lignes d'infos).
// `position` : "top" (défaut) | "bottom" | "left" | "right".
// `children` : l'élément déclencheur (bouton, texte, barre de réservation...).
function Tooltip({ content, position = "top", children }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span
      className="tooltip-trigger"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}

      {isVisible && (
        <span className={`tooltip-panel tooltip-panel--${position}`} role="tooltip">
          {content}
        </span>
      )}
    </span>
  );
}

export default Tooltip;