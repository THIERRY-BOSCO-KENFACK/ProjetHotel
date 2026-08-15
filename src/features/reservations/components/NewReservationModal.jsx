import { useState } from "react";
import { X } from "lucide-react";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

// Chambres disponibles pour la sélection (mock — viendra d'un hook dédié
// aux chambres une fois la feature "Entretien"/inventaire des chambres développée).
const ROOM_OPTIONS = ["101", "102", "103", "104"];

// État initial du formulaire, réutilisé à l'ouverture et après soumission.
const INITIAL_FORM_STATE = {
  clientName: "",
  room: ROOM_OPTIONS[0],
  checkIn: "",
  checkOut: "",
  source: "Direct",
};

// NewReservationModal : formulaire de création d'une réservation.
// `isOpen` : contrôle l'affichage (le composant est monté mais ne rend rien si false).
// `onClose` : appelé à la fermeture (croix, clic sur l'overlay, ou après soumission).
// `onSubmit` (optionnel) : reçoit les données du formulaire à la validation.
function NewReservationModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  // On garde le composant monté même fermé (pas de unmount/remount),
  // mais on ne rend rien tant que isOpen est false — évite de perdre
  // le state du formulaire si la modale se rouvre juste après.
  if (!isOpen) {
    return null;
  }

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (onSubmit) {
      onSubmit(formData);
    }

    setFormData(INITIAL_FORM_STATE);
    onClose();
  };

  const handleOverlayClick = (event) => {
    // Ferme uniquement si le clic est sur l'overlay lui-même,
    // pas sur un enfant (le formulaire), pour éviter une fermeture accidentelle.
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <div className="modal__header">
          <h2>Nouvelle réservation</h2>
          <button type="button" className="modal__close" onClick={onClose} aria-label="Fermer">
            <X size={20} />
          </button>
        </div>

        <form className="modal__body" onSubmit={handleSubmit}>
          <Input
            id="reservation-client"
            label="Nom du client"
            placeholder="Ex : Dupont"
            value={formData.clientName}
            onChange={handleChange("clientName")}
            required
          />

          <div className="modal__field-group">
            <label htmlFor="reservation-room" className="input-group__label">
              Chambre
            </label>
            <select
              id="reservation-room"
              className="modal__select"
              value={formData.room}
              onChange={handleChange("room")}
            >
              {ROOM_OPTIONS.map((room) => (
                <option key={room} value={room}>
                  Chambre {room}
                </option>
              ))}
            </select>
          </div>

          <div className="modal__field-row">
            <Input
              id="reservation-checkin"
              label="Arrivée"
              type="date"
              value={formData.checkIn}
              onChange={handleChange("checkIn")}
              required
            />
            <Input
              id="reservation-checkout"
              label="Départ"
              type="date"
              value={formData.checkOut}
              onChange={handleChange("checkOut")}
              required
            />
          </div>

          <div className="modal__field-group">
            <label htmlFor="reservation-source" className="input-group__label">
              Source
            </label>
            <select
              id="reservation-source"
              className="modal__select"
              value={formData.source}
              onChange={handleChange("source")}
            >
              <option value="Direct">Direct</option>
              <option value="Booking.com">Booking.com</option>
              <option value="Expedia">Expedia</option>
            </select>
          </div>

          <div className="modal__actions">
            <Button variant="secondary" type="button" onClick={onClose}>
              Annuler
            </Button>
            <Button variant="primary" type="submit">
              Créer la réservation
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewReservationModal;