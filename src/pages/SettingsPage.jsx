import AppLayout from "../components/layout/AppLayout";
import SettingsView from "../features/settings/SettingsView";

// SettingsPage : point d'entrée de la route "/parametres".
function SettingsPage() {
  return (
    <AppLayout pageTitle="Paramètres">
      <SettingsView />
    </AppLayout>
  );
}

export default SettingsPage;