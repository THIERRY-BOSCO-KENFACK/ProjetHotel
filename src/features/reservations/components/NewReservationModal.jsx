import { useState } from "react";
import Modal from "../../../components/ui/Modal";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";
import Button from "../../../components/ui/Button";

const ROOM_OPTIONS = ["101", "102", "103", "104"].map((room) => ({
  value: room,
  label: `Chambre ${room}`,
}));

const SOURCE_OPTIONS = [
  { value: "Direct", label: "Direct" },
  { value: "Booking.com", label: "Booking.com" },
  { value: "Expedia", label: "Expedia" },
];

const INITIAL_FORM_STATE = {
  clientName: "",
  room: ROOM_OPTIONS[0].value,
  checkIn: "",
  checkOut: "",
  source: "Direct",
};

// NewReservationModal : formulaire de création, maintenant bâti sur Modal/Select
// génériques au lieu de dupliquer overlay + <select> bruts.
function NewReservationModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit && onSubmit(formData);
    setFormData(INITIAL_FORM_STATE);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Nouvelle réservation">
      <form onSubmit={handleSubmit} className="modal__form">
        <Input
          id="reservation-client"
          label="Nom du client"
          placeholder="Ex : Dupont"
          value={formData.clientName}
          onChange={handleChange("clientName")}
          required
        />

        <Select
          id="reservation-room"
          label="Chambre"
          options={ROOM_OPTIONS}
          value={formData.room}
          onChange={handleChange("room")}
        />

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

        <Select
          id="reservation-source"
          label="Source"
          options={SOURCE_OPTIONS}
          value={formData.source}
          onChange={handleChange("source")}
        />

        <div className="modal__actions">
          <Button variant="secondary" type="button" onClick={onClose}>
            Annuler
          </Button>
          <Button variant="primary" type="submit">
            Créer la réservation
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default NewReservationModal;