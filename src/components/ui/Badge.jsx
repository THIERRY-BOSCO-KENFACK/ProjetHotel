// Badge : étiquette générique et libre, pour tout label non-statutaire.
// `variant` : couleur parmi la palette sémantique déjà établie dans l'app —
// "neutral" (gris, défaut), "blue", "green", "amber", "red".
// N'a pas de logique de correspondance texte/couleur comme StatusBadge :
// c'est à l'appelant de choisir le variant ET le texte.
function Badge({ children, variant = "neutral" }) {
  return <span className={`badge badge--${variant}`}>{children}</span>;
}

export default Badge;