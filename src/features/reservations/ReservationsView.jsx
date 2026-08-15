import { useState, useMemo } from "react";
import useReservationsData from "./hooks/useReservationsData";
import ReservationsToolbar from "./components/ReservationsToolbar";
import ReservationsTable from "./components/ReservationsTable";
import NewReservationModal from "./components/NewReservationModal";

// ReservationsView : vue racine de la feature Reservations.
// Détient l'état partagé (liste, recherche, filtre, modale) et le redescend
// aux sous-composants — même rôle que PlanningGrid pour la feature Planning.
function ReservationsView() {
  const { reservations: initialReservations, isLoading } = useReservationsData();

  // Copie locale en state : permet d'ajouter de nouvelles réservations
  // (via la modale) sans muter les données du hook directement.
  const [reservations, setReservations] = useState(initialReservations);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Recalculé uniquement quand une dépendance change, pas à chaque render
  // (utile ici car le filtrage tourne sur toute la liste des réservations).
  const filteredReservations = useMemo(() => {
    return reservations.filter((reservation) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        reservation.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        reservation.room.includes(searchQuery);

      const matchesStatus = statusFilter === "all" || reservation.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [reservations, searchQuery, statusFilter]);

  const handleNewReservation = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // Appelé par NewReservationModal à la soumission du formulaire.
  // Génère un id simple et assigne le statut "pending" par défaut
  // (une réservation créée manuellement attend confirmation).
  const handleCreateReservation = (formData) => {
    const newReservation = {
      id: `RES-${String(reservations.length + 1).padStart(3, "0")}`,
      ...formData,
      status: "pending",
    };

    setReservations((prev) => [newReservation, ...prev]);
  };

  if (isLoading) {
    return <p className="reservations-view__loading">Chargement des réservations...</p>;
  }

  return (
    <div className="reservations-view">
      <ReservationsToolbar
        onNewReservation={handleNewReservation}
        onSearchChange={setSearchQuery}
        onStatusFilterChange={setStatusFilter}
      />

      <ReservationsTable reservations={filteredReservations} />

      <NewReservationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleCreateReservation}
      />
    </div>
  );
}

export default ReservationsView;