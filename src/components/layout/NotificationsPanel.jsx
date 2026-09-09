import { BookOpen, Sparkles, AlertTriangle, CreditCard, LogIn } from "lucide-react";
import Drawer from "../ui/Drawer";
import EmptyState from "../ui/EmptyState";
import useNotifications from "../../context/useNotifications";

// Icône par type de notification — cohérent avec le principe déjà établi
// de ne jamais dépendre uniquement du texte pour distinguer une catégorie.
const NOTIFICATION_ICONS = {
  reservation: BookOpen,
  housekeeping: Sparkles,
  incident: AlertTriangle,
  payment: CreditCard,
  arrival: LogIn,
};

// NotificationsPanel : Drawer listant les notifications, avec marquage lu/non-lu.
// `isOpen`/`onClose` : transmis directement à Drawer.
function NotificationsPanel({ isOpen, onClose }) {
  const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotifications();

  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="Notifications">
      {notifications.length === 0 ? (
        <EmptyState title="Aucune notification" message="Tu es à jour !" />
      ) : (
        <>
          {unreadCount > 0 && (
            <button type="button" className="notifications-panel__mark-all" onClick={markAllAsRead}>
              Tout marquer comme lu ({unreadCount})
            </button>
          )}

          <ul className="notifications-panel__list">
            {notifications.map(({ id, type, message, time, isRead }) => {
              const Icon = NOTIFICATION_ICONS[type] ?? AlertTriangle;

              return (
                <li
                  key={id}
                  className={`notifications-panel__item ${isRead ? "" : "notifications-panel__item--unread"}`}
                >
                  <span className="notifications-panel__icon">
                    <Icon size={18} />
                  </span>

                  <div className="notifications-panel__content">
                    <p className="notifications-panel__message">{message}</p>
                    <span className="notifications-panel__time">{time}</span>
                  </div>

                  {!isRead && (
                    <button
                      type="button"
                      className="notifications-panel__mark-read"
                      onClick={() => markAsRead(id)}
                      aria-label="Marquer comme lu"
                    >
                      Marquer lu
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </Drawer>
  );
}

export default NotificationsPanel;