import { Crown, Mail, Phone } from "lucide-react";

// ClientProfileHeader : en-tête de la fiche client détaillée.
// `client` : objet complet issu de useClientsData (via getClientById).
function ClientProfileHeader({ client }) {
  const { fullName, email, phone, vip } = client;

  // Génère les initiales à partir du nom, même logique que Header.jsx,
  // pour garder un pattern d'avatar cohérent dans toute l'app.
  const initials = fullName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <div className="client-profile-header">
      <div className="client-profile-header__avatar">{initials}</div>

      <div className="client-profile-header__info">
        <div className="client-profile-header__name-row">
          <h2 className="client-profile-header__name">{fullName}</h2>
          {vip && (
            <span className="client-profile-header__vip-badge">
              <Crown size={14} />
              VIP
            </span>
          )}
        </div>

        <div className="client-profile-header__contact">
          <span className="client-profile-header__contact-item">
            <Mail size={16} />
            {email}
          </span>
          <span className="client-profile-header__contact-item">
            <Phone size={16} />
            {phone}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ClientProfileHeader;