import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import useClientsData from "./hooks/useClientsData";
import ClientProfileHeader from "./components/ClientProfileHeader";
import ClientStayHistory from "./components/ClientStayHistory";

// ClientDetailView : vue racine de la fiche client détaillée.
// L'id vient de l'URL (/clients/:id), défini dans la route de ClientDetailPage.
function ClientDetailView() {
  const { id } = useParams();
  const { getClientById, isLoading } = useClientsData();

  if (isLoading) {
    return <p className="client-detail-view__loading">Chargement du client...</p>;
  }

  const client = getClientById(id);

  // Cas où l'id de l'URL ne correspond à aucun client (lien cassé,
  // faute de frappe dans l'URL, client supprimé plus tard...).
  if (!client) {
    return (
      <div className="client-detail-view__not-found">
        <p>Client introuvable.</p>
        <Link to="/clients" className="client-detail-view__back-link">
          <ArrowLeft size={16} />
          Retour à la liste des clients
        </Link>
      </div>
    );
  }

  return (
    <div className="client-detail-view">
      <Link to="/clients" className="client-detail-view__back-link">
        <ArrowLeft size={16} />
        Retour à la liste des clients
      </Link>

      <ClientProfileHeader client={client} />
      <ClientStayHistory stayHistory={client.stayHistory} />
    </div>
  );
}

export default ClientDetailView;