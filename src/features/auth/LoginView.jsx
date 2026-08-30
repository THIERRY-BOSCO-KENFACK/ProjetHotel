import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Hotel } from "lucide-react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import useAuth from "./hooks/useAuth";

// LoginView : formulaire de connexion mock (aucune vérification côté serveur,
// puisqu'il n'y a pas de backend). Toute combinaison email/mot de passe
// non vides est acceptée comme une connexion réussie.
function LoginView() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Merci de renseigner ton email et ton mot de passe.");
      return;
    }

    login(formData);
    navigate("/");
  };

  return (
    <div className="login-view">
      <div className="login-view__card">
        <div className="login-view__logo">
          <Hotel size={28} />
          <span>Suite PMS</span>
        </div>

        <form className="login-view__form" onSubmit={handleSubmit}>
          <Input
            id="login-email"
            label="Adresse email"
            type="email"
            placeholder="marie@suitepms.com"
            value={formData.email}
            onChange={handleChange("email")}
          />

          <Input
            id="login-password"
            label="Mot de passe"
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange("password")}
          />

          {error && <p className="login-view__error">{error}</p>}

          <Button variant="primary" type="submit">
            Se connecter
          </Button>
        </form>
      </div>
    </div>
  );
}

export default LoginView;