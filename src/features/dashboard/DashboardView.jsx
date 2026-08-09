import ReceptionAction from "./components/ReceptionAction";
import MetricsCard from "./components/MetricsCard";
import PlanningPreview from "./components/PlanningPreview";
import ActivityFeed from "./components/ActivityFeed";
<<<<<<< HEAD
=======
// import "../styles/global.css";
>>>>>>> 392a428f111714e23f7303e2cbe097c900517c35

// DashboardView : assemble les sections du tableau de bord.
// Chaque section est un composant autonome avec ses propres mock data,
// ce qui garde ce fichier simple et facile à réorganiser.
function DashboardView() {
  return (
    <div className="dashboard-view">
      {/* Zone d'actions rapides : nouvelle réservation, check-in, recherche */}
      <ReceptionAction />

      {/* Cartes de statistiques du jour */}
      <MetricsCard />

      {/* Aperçu du planning hôtelier */}
      <PlanningPreview />

      {/* Activités récentes */}
      <ActivityFeed />
    </div>
  );
}

export default DashboardView;