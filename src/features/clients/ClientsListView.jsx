import { useState, useMemo } from "react";
import useClientsData from "./hooks/useClientsData";
import ClientsToolbar from "./components/ClientsToolbar";
import ClientsTable from "./components/ClientsTable";

// ClientsListView : vue racine de la liste des clients.
// Détient l'état de recherche/filtre et calcule la liste filtrée,
// redescendue à ClientsTable pour l'affichage.
function ClientsListView() {
  const { clients, isLoading } = useClientsData();
  const [searchQuery, setSearchQuery] = useState("");
  const [vipOnly, setVipOnly] = useState(false);

  const filteredClients = useMemo(() => {
    return clients.filter((client) => {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        searchQuery.trim() === "" ||
        client.fullName.toLowerCase().includes(query) ||
        client.email.toLowerCase().includes(query);

      const matchesVip = !vipOnly || client.vip;

      return matchesSearch && matchesVip;
    });
  }, [clients, searchQuery, vipOnly]);

  if (isLoading) {
    return <p className="clients-list-view__loading">Chargement des clients...</p>;
  }

  return (
    <div className="clients-list-view">
      <ClientsToolbar onSearchChange={setSearchQuery} onVipFilterChange={setVipOnly} />
      <ClientsTable clients={filteredClients} />
    </div>
  );
}

export default ClientsListView;