import { useParams } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import ClientDetailView from "../features/clients/ClientDetailView";
import useClientsData from "../features/clients/hooks/useClientsData";

// ClientDetailPage : point d'entrée de la route "Fiche client".
// Récupère le client ici uniquement pour personnaliser le titre du Header —
// ClientDetailView refait sa propre recherche pour rester autonome.
function ClientDetailPage() {
  const { id } = useParams();
  const { getClientById } = useClientsData();
  const client = getClientById(id);

  return (
    <AppLayout pageTitle={client ? client.fullName : "Client"}>
      <ClientDetailView />
    </AppLayout>
  );
}

export default ClientDetailPage;