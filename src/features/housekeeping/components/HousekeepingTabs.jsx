// Onglets disponibles. Centralisés ici pour garder le rendu et la logique
// de correspondance id/label au même endroit.
const TABS = [
  { id: "rooms", label: "Chambres" },
  { id: "tasks", label: "Tâches" },
];

// HousekeepingTabs : barre d'onglets pour la feature Housekeeping.
// `activeTab` : id de l'onglet actif, détenu par le parent (HousekeepingView).
// `onTabChange` : callback appelé avec l'id de l'onglet cliqué.
function HousekeepingTabs({ activeTab, onTabChange }) {
  return (
    <div className="housekeeping-tabs" role="tablist">
      {TABS.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          role="tab"
          aria-selected={activeTab === id}
          className={`housekeeping-tabs__tab ${
            activeTab === id ? "housekeeping-tabs__tab--active" : ""
          }`}
          onClick={() => onTabChange(id)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default HousekeepingTabs;