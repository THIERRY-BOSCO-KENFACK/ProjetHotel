import { User, Building2, Users, Bell } from "lucide-react";

// Onglets disponibles, avec une icône chacun — utile ici car 4 onglets
// côte à côte sont moins immédiatement lisibles que les 2 de Housekeeping,
// l'icône aide à les distinguer rapidement.
const TABS = [
  { id: "profile", label: "Profil", icon: User },
  { id: "hotel", label: "Hôtel", icon: Building2 },
  { id: "users", label: "Utilisateurs", icon: Users },
  { id: "notifications", label: "Notifications", icon: Bell },
];

// SettingsTabs : barre d'onglets pour la feature Settings.
// `activeTab` : id de l'onglet actif, détenu par le parent (SettingsView).
// `onTabChange` : callback appelé avec l'id de l'onglet cliqué.
function SettingsTabs({ activeTab, onTabChange }) {
  return (
    <div className="settings-tabs" role="tablist">
      {TABS.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          type="button"
          role="tab"
          aria-selected={activeTab === id}
          className={`settings-tabs__tab ${
            activeTab === id ? "settings-tabs__tab--active" : ""
          }`}
          onClick={() => onTabChange(id)}
        >
          <Icon size={16} />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}

export default SettingsTabs;