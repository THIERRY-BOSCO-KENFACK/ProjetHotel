import { Plus, LogIn } from "lucide-react";
import SearchBar from "./SearchBar";

// ReceptionAction : barre d'actions rapides en haut du tableau de bord.
// Les handlers sont des placeholders (console.log) tant qu'il n'y a pas de backend.
function ReceptionAction() {
  const handleNewReservation = () => {
    console.log("Ouvrir le formulaire de nouvelle réservation");
  };

  const handleQuickCheckIn = () => {
    console.log("Ouvrir le check-in rapide");
  };

  const handleSearch = (query) => {
    console.log("Recherche :", query);
  };

  return (
    <section className="reception-actions">
      <div className="reception-actions__buttons">
        <button
          type="button"
          className="btn btn--primary"
          onClick={handleNewReservation}
        >
          <Plus size={18} />
          <span>Nouvelle réservation</span>
        </button>

        <button
          type="button"
          className="btn btn--secondary"
          onClick={handleQuickCheckIn}
        >
          <LogIn size={18} />
          <span>Check-in rapide</span>
        </button>
      </div>

      <div className="reception-actions__search">
        <SearchBar onSearch={handleSearch} placeholder="Rechercher une réservation, un client..." />
      </div>
    </section>
  );
}

export default ReceptionAction;