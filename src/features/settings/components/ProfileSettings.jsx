import { useState } from "react";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

// ProfileSettings : formulaire d'édition du profil utilisateur.
// `profile` : { fullName, email, role } issu de useSettingsData.
// `onUpdate` : fonction updateProfile du hook, appelée à la sauvegarde.
function ProfileSettings({ profile, onUpdate }) {
  // State local du formulaire, initialisé depuis les props — permet à
  // l'utilisateur de modifier les champs sans impacter le profil réel
  // tant qu'il n'a pas cliqué sur "Enregistrer".
  const [formData, setFormData] = useState({
    fullName: profile.fullName,
    email: profile.email,
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
      <h2 className="settings-section__title">Profil</h2>

      <Input
        id="profile-fullname"
        label="Nom complet"
        value={formData.fullName}
        onChange={handleChange("fullName")}
        required
      />

      <Input
        id="profile-email"
        label="Adresse email"
        type="email"
        value={formData.email}
        onChange={handleChange("email")}
        required
      />

      <div className="settings-section__field-group">
        <label className="input-group__label">Rôle</label>
        <p className="settings-section__readonly-value">{profile.role}</p>
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

export default ProfileSettings;