import { LogIn, LogOut, PieChart } from "lucide-react";

// Mock data des indicateurs du jour.
// Chaque entrée a une icône dédiée pour un repérage visuel rapide.
const METRICS = [
  {
    id: "arrivals",
    label: "Arrivées prévues",
    value: 12,
    icon: LogIn,
    accent: "blue",
  },
  {
    id: "departures",
    label: "Départs prévus",
    value: 8,
    icon: LogOut,
    accent: "gray",
  },
  {
    id: "occupancy",
    label: "Taux d'occupation",
    value: "85%",
    icon: PieChart,
    accent: "green",
  },
];

// MetricsCards : affiche les cartes de statistiques du jour.
// Purement présentatif, les données viendront du backend plus tard.
function MetricsCards() {
  return (
    <section className="metrics-cards">
      {METRICS.map(({ id, label, value, icon: Icon, accent }) => (
        <div key={id} className={`metric-card metric-card--${accent}`}>
          <div className="metric-card__icon">
            <Icon size={22} />
          </div>
          <div className="metric-card__info">
            <span className="metric-card__value">{value}</span>
            <span className="metric-card__label">{label}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default MetricsCards;