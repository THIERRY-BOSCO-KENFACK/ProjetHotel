import { createContext, useState, useCallback } from "react";

const INITIAL_NOTIFICATIONS = [
  {
    id: "NOTIF-001",
    type: "reservation",
    message: "Nouvelle réservation Booking.com — Chambre 102",
    time: "Il y a 12 min",
    isRead: false,
  },
  {
    id: "NOTIF-002",
    type: "housekeeping",
    message: "Chambre 102 prête",
    time: "Il y a 20 min",
    isRead: false,
  },
  {
    id: "NOTIF-003",
    type: "incident",
    message: "Incident technique signalé — Chambre 103",
    time: "Il y a 45 min",
    isRead: false,
  },
  {
    id: "NOTIF-004",
    type: "payment",
    message: "Paiement en attente — Facture INV-002",
    time: "Il y a 1h",
    isRead: true,
  },
  {
    id: "NOTIF-005",
    type: "arrival",
    message: "Arrivée imminente — Dupont, Chambre 101",
    time: "Il y a 2h",
    isRead: true,
  },
];

// NotificationsContext : consommé via context/useNotifications.js.
const NotificationsContext = createContext(undefined);

// NotificationsProvider : enveloppe toute l'application (main.jsx), sur le
// même modèle que ToastProvider — une seule source de vérité partagée
// entre Header (badge) et NotificationsPanel (liste détaillée).
function NotificationsProvider({ children }) {
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);

  const unreadCount = notifications.filter((notification) => !notification.isRead).length;

  const markAsRead = useCallback((id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
  }, []);

  const markAllAsRead = useCallback(() => {
    setNotifications((prev) => prev.map((notification) => ({ ...notification, isRead: true })));
  }, []);

  return (
    <NotificationsContext.Provider value={{ notifications, unreadCount, markAsRead, markAllAsRead }}>
      {children}
    </NotificationsContext.Provider>
  );
}

export { NotificationsContext, NotificationsProvider };