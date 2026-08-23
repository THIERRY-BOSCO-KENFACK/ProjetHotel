// formatCurrency : formate un montant en FCFA avec séparateurs de milliers.
// Ex : formatCurrency(150000) → "150 000 FCFA"
function formatCurrency(amount) {
  return `${amount.toLocaleString("fr-FR")} FCFA`;
}

export default formatCurrency;