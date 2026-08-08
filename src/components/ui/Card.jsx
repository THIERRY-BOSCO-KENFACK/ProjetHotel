// Card : conteneur générique réutilisable (fond blanc, ombre, radius).
// `title` est optionnel : certaines cartes (ex: MetricsCards) n'en ont pas besoin.
// `className` permet d'ajouter des classes supplémentaires si un composant
// a besoin d'un style spécifique en plus du style de base de la carte.
function Card({ title, children, className = "" }) {
  return (
    <div className={`card ${className}`.trim()}>
      {title && (
        <div className="card__header">
          <h2 className="card__title">{title}</h2>
        </div>
      )}
      <div className="card__body">{children}</div>
    </div>
  );
}

export default Card;