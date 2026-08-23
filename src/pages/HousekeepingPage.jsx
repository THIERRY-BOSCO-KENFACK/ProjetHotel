import AppLayout from "../components/layout/AppLayout";
import HousekeepingView from "../features/housekeeping/HousekeepingView";

// HousekeepingPage : point d'entrée de la route "/entretien".
function HousekeepingPage() {
  return (
    <AppLayout pageTitle="Entretien">
      <HousekeepingView />
    </AppLayout>
  );
}

export default HousekeepingPage;