import { useState } from "react";
import useSettingsData from "./hooks/useSettingsData";
import SettingsTabs from "./components/SettingsTabs";
import ProfileSettings from "./components/ProfileSettings";
import HotelSettings from "./components/HotelSettings";
import UsersSettings from "./components/UsersSettings";
import NotificationsSettings from "./components/NotificationsSettings";

// SettingsView : vue racine de la feature Settings.
// Détient l'onglet actif et redistribue les données/fonctions du hook
// à la section correspondante uniquement (pas de props inutiles transmises).
function SettingsView() {
  const {
    profile,
    hotel,
    users,
    notifications,
    isLoading,
    updateProfile,
    updateHotel,
    toggleNotification,
    toggleUserActive,
  } = useSettingsData();

  const [activeTab, setActiveTab] = useState("profile");

  if (isLoading) {
    return <p className="settings-view__loading">Chargement des paramètres...</p>;
  }

  return (
    <div className="settings-view">
      <SettingsTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="settings-view__content">
        {activeTab === "profile" && (
          <ProfileSettings profile={profile} onUpdate={updateProfile} />
        )}
        {activeTab === "hotel" && (
          <HotelSettings hotel={hotel} onUpdate={updateHotel} />
        )}
        {activeTab === "users" && (
          <UsersSettings users={users} onToggleActive={toggleUserActive} />
        )}
        {activeTab === "notifications" && (
          <NotificationsSettings notifications={notifications} onToggle={toggleNotification} />
        )}
      </div>
    </div>
  );
}

export default SettingsView;