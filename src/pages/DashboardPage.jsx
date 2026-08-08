import AppLayout from "../components/layout/AppLayout";
import DashboardView from "../features/dashboard/DashboardView";

// DashboardPage : point d'entrée de la route "Tableau de bord".
// Se contente d'assembler le layout global avec la vue du dashboard.
function DashboardPage() {
  return (
    <AppLayout pageTitle="Tableau de bord">
      <DashboardView />
    </AppLayout>
  );
}

export default DashboardPage;