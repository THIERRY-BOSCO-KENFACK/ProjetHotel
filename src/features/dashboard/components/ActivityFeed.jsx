import { CheckCircle2, CalendarPlus } from "lucide-react";

// Mock data des activités récentes.
// `type` détermine l'icône affichée ; `time` reste une chaîne libre
// (sera calculé dynamiquement depuis une vraie date une fois le backend branché).
const ACTIVITIES = [
  {
    id: 1,
    type: "housekeeping",
    message: "Chambre 102 marquée propre par Luc",
    time: "Il y a 12 min",
  },
  {
    id: 2,
    type: "reservation",
    message: "Nouvelle réservation via Booking.com",
    time: "Il y a 34 min",
  },
];

// Associe chaque type d'activité à son icône.
// Centralisé ici pour éviter un if/else dans le JSX.
const ACTIVITY_ICONS = {
  housekeeping: CheckCircle2,
  reservation: CalendarPlus,
};

// ActivityFeed : liste chronologique des dernières activités de l'établissement.
function ActivityFeed() {
  return (
    <section className="activity-feed">
      <div className="activity-feed__header">
        <h2>Activités récentes</h2>
      </div>

      <ul className="activity-feed__list">
        {ACTIVITIES.map(({ id, type, message, time }) => {
          const Icon = ACTIVITY_ICONS[type];

          return (
            <li key={id} className="activity-feed__item">
              <span className={`activity-feed__icon activity-feed__icon--${type}`}>
                <Icon size={18} />
              </span>
              <div className="activity-feed__content">
                <p className="activity-feed__message">{message}</p>
                <span className="activity-feed__time">{time}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ActivityFeed;