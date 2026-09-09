// Select : champ de sélection générique réutilisable.
// `label` : optionnel, même comportement que dans Input.
// `options` : tableau de { value, label } — format standardisé pour tous
// les usages, y compris les filtres de statut déjà existants ailleurs.
// `id` : requis pour lier <label htmlFor>. `...rest` : value, onChange, etc.
function Select({ label, id, options, ...rest }) {
  return (
    <div className="input-group">
      {label && (
        <label htmlFor={id} className="input-group__label">
          {label}
        </label>
      )}
      <select id={id} className="select-field" {...rest}>
        {options.map(({ value, label: optionLabel }) => (
          <option key={value} value={value}>
            {optionLabel}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;