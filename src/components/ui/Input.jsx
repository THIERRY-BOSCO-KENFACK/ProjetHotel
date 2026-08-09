// Input : champ de saisie générique réutilisable.
// `label` est optionnel (ex: pas nécessaire pour une barre de recherche,
// mais utile pour un formulaire de réservation avec plusieurs champs).
// `icon` affiche une icône à l'intérieur du champ (à gauche), comme dans SearchBar.
// `...rest` transmet les props HTML natives (value, onChange, type, placeholder...).
function Input({ label, icon: Icon, id, ...rest }) {
  return (
    <div className="input-group">
      {label && (
        <label htmlFor={id} className="input-group__label">
          {label}
        </label>
      )}
      <div className="input-group__field">
        {Icon && <Icon size={18} className="input-group__icon" />}
        <input id={id} className="input-group__input" {...rest} />
      </div>
    </div>
  );
}

export default Input;