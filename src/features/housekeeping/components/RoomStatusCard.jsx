import { CheckCircle2, AlertTriangle, Clock, Wrench } from "lucide-react";

// Table de correspondance statut → { label, icon }.
// Centralisée ici, seule source de vérité pour la traduction technique → affichage.
const STATUS_CONFIG = {
  clean: { label: "Propre", icon: CheckCircle2 },
  dirty: { label: "À nettoyer", icon: AlertTriangle },
  in_progress: { label: "En cours", icon: Clock },
  out_of_order: { label: "Hors service", icon: Wrench },
};

// RoomStatusCard : carte représentant l'état de propreté d'une chambre.
// `room` : numéro de la chambre. `status` : une clé de STATUS_CONFIG.
function RoomStatusCard({ room, status }) {
  const config = STATUS_CONFIG[status] ?? { label: status, icon: AlertTriangle };
  const Icon = config.icon;

  return (
    <div className={`room-status-card room-status-card--${status}`}>
      <Icon size={20} className="room-status-card__icon" />
      <span className="room-status-card__room">Chambre {room}</span>
      <span className="room-status-card__label">{config.label}</span>
    </div>
  );
}

export default RoomStatusCard;