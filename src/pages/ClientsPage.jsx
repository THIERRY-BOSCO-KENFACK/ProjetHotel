import AppLayout from "../components/layout/AppLayout";
import ClientsListView from "../features/clients/ClientsListView";

// ClientsPage : point d'entrée de la route "Clients" (liste).
function ClientsPage() {
  return (
    <AppLayout pageTitle="Clients">
      <ClientsListView />
    </AppLayout>
  );
}

export default ClientsPage;