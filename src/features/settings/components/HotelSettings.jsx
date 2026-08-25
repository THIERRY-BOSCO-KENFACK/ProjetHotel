import { useState } from "react";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

// Devises disponibles — FCFA en premier car c'est la valeur par défaut
// utilisée ailleurs dans l'app (Accounting).
const CURRENCY_OPTIONS = ["FCFA", "EUR", "USD"];

// HotelSettings : formulaire d'édition des informations de l'établissement.
// `hotel` : { name, address, phone, currency } issu de useSettingsData.
// `onUpdate` : fonction updateHotel du hook, appelée à la sauvegarde.
function HotelSettings({ hotel, onUpdate }) {
  const [formData, setFormData] = useState({
    name: hotel.name,
    address: hotel.address,
    phone: hotel.phone,
    currency: hotel.currency,
  });
  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    setIsSaved(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(formData);
    setIsSaved(true);
  };

  return (
    <form className="settings-section" onSubmit={handleSubmit}>
      <h2 className="settings-section__title">Établissement</h2>

      <Input
        id="hotel-name"
        label="Nom de l'établissement"
        value={formData.name}
        onChange={handleChange("name")}
        required
      />

      <Input
        id="hotel-address"
        label="Adresse"
        value={formData.address}
        onChange={handleChange("address")}
        required
      />

      <Input
        id="hotel-phone"
        label="Téléphone"
        type="tel"
        value={formData.phone}
        onChange={handleChange("phone")}
      />

      <div className="settings-section__field-group">
        <label htmlFor="hotel-currency" className="input-group__label">
          Devise
        </label>
        <select
          id="hotel-currency"
          className="modal__select"
          value={formData.currency}
          onChange={handleChange("currency")}
        >
          {CURRENCY_OPTIONS.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <div className="settings-section__actions">
        <Button variant="primary" type="submit">
          Enregistrer
        </Button>
        {isSaved && <span className="settings-section__saved-hint">Modifications enregistrées ✓</span>}
      </div>
    </form>
  );
}

export default HotelSettings;