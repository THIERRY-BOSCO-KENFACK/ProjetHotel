// Configuration des notifications disponibles — libellé affiché + clé
// correspondante dans l'objet `notifications` du hook.
const NOTIFICATION_OPTIONS = [
  { key: "newReservation", label: "Nouvelle réservation reçue" },
  { key: "paymentOverdue", label: "Paiement en retard" },
  { key: "taskAssigned", label: "Tâche de nettoyage assignée" },
];

// NotificationsSettings : préférences de notifications, appliquées immédiatement.
// `notifications` : objet { [key]: boolean } issu de useSettingsData.
// `onToggle` : fonction toggleNotification du hook, appelée au clic sur un toggle.
function NotificationsSettings({ notifications, onToggle }) {
  return (
    <div className="settings-section">
      <h2 className="settings-section__title">Notifications</h2>

      <div className="notification-toggle-list">
        {NOTIFICATION_OPTIONS.map(({ key, label }) => (
          <label key={key} className="notification-toggle">
            <span className="notification-toggle__label">{label}</span>
            <input
              type="checkbox"
              className="notification-toggle__input"
              checked={notifications[key]}
              onChange={() => onToggle(key)}
            />
            <span className="notification-toggle__switch" aria-hidden="true" />
          </label>
        ))}
      </div>
    </div>
  );
}

export default NotificationsSettings;