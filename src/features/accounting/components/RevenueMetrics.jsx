import { TrendingUp, Clock, AlertCircle } from "lucide-react";
import formatCurrency from "../../../utils/formatCurrency";
// Formate un montant en FCFA avec séparateurs de milliers (ex: 150000 → "150 000 FCFA").
// Fonction locale à ce fichier pour l'instant ; à extraire dans un utils/
// partagé si InvoiceRow.jsx (prochain fichier) en a besoin aussi.


// RevenueMetrics : cartes d'indicateurs financiers du mois.
// `metrics` : objet { monthlyRevenue, pendingAmount, overdueCount } issu du hook.
function RevenueMetrics({ metrics }) {
  const { monthlyRevenue, pendingAmount, overdueCount } = metrics;

  // Construit la liste des cartes ici (plutôt qu'en constante hors composant,
  // comme MetricsCards) car les valeurs dépendent des données reçues en prop.
  const cards = [
    {
      id: "revenue",
      label: "Revenus du mois",
      value: formatCurrency(monthlyRevenue),
      icon: TrendingUp,
      accent: "green",
    },
    {
      id: "pending",
      label: "Montant en attente",
      value: formatCurrency(pendingAmount),
      icon: Clock,
      accent: "amber",
    },
    {
      id: "overdue",
      label: "Factures en retard",
      value: overdueCount,
      icon: AlertCircle,
      accent: "red",
    },
  ];

  return (
    <section className="revenue-metrics">
      {cards.map(({ id, label, value, icon: Icon, accent }) => (
        <div key={id} className={`revenue-metric-card revenue-metric-card--${accent}`}>
          <div className="revenue-metric-card__icon">
            <Icon size={22} />
          </div>
          <div className="revenue-metric-card__info">
            <span className="revenue-metric-card__value">{value}</span>
            <span className="revenue-metric-card__label">{label}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default RevenueMetrics;