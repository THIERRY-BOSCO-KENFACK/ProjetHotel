import AppLayout from "../components/layout/AppLayout";
import PlanningGrid from "../features/planning/PlanningGrid";

// PlanningPage : point d'entrée de la route "Planning".
// Suit exactement le même patron que DashboardPage : AppLayout + la View de la feature.
function PlanningPage() {
  return (
    <AppLayout pageTitle="Planning">
      <PlanningGrid />
    </AppLayout>
  );
}

export default PlanningPage;