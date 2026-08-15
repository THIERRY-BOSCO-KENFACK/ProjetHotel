import AppLayout from "../components/layout/AppLayout";
import ReservationsView from "../features/reservations/ReservationsView";

// ReservationsPage : point d'entrée de la route "Réservations".
function ReservationsPage() {
  return (
    <AppLayout pageTitle="Réservations">
      <ReservationsView />
    </AppLayout>
  );
}

export default ReservationsPage;