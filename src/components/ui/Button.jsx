// Button : composant bouton générique, variantes de style via `variant`.
// `icon` accepte un composant icône (lucide-react) affiché avant le label.
// Toutes les autres props HTML natives (onClick, disabled, type...) sont
// transmises via `...rest`, pour rester flexible sans multiplier les props.
function Button({
  children,
  variant = "primary",
  icon: Icon,
  type = "button",
  ...rest
}) {
  return (
    <button type={type} className={`btn btn--${variant}`} {...rest}>
      {Icon && <Icon size={18} />}
      <span>{children}</span>
    </button>
  );
}

export default Button;