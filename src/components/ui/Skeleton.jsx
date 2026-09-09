// Convertit un nombre en valeur CSS pixel ; laisse une chaîne (ex: "60%") telle quelle.
function toCssSize(value) {
  return typeof value === "number" ? `${value}px` : value;
}

// Skeleton : placeholder de chargement générique.
// `variant` : "text" (ligne de texte, défaut), "circle" (avatar), "rect" (bloc/carte).
// `width`/`height` : nombre (px) ou chaîne CSS ; valeurs par défaut sensées selon `variant`.
// `count` : nombre de blocs répétés (ex: simuler 3 lignes de texte d'affilée).
function Skeleton({ variant = "text", width, height, count = 1, className = "" }) {
  const style = {
    width: toCssSize(width ?? (variant === "circle" ? 40 : "100%")),
    height: toCssSize(height ?? (variant === "circle" ? 40 : variant === "rect" ? 80 : 14)),
  };

  const items = Array.from({ length: count });

  return (
    <span className="skeleton-group" aria-hidden="true">
      {items.map((_, index) => (
        <span key={index} className={`skeleton skeleton--${variant} ${className}`.trim()} style={style} />
      ))}
    </span>
  );
}

export default Skeleton;