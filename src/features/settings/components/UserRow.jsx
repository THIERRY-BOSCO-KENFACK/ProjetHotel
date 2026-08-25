import { Power } from "lucide-react";
import Button from "../../../components/ui/Button";

// UserRow : une ligne <tr> du tableau des utilisateurs/personnel.
// `user` : objet complet issu de useSettingsData.
// `onToggleActive` : fonction toggleUserActive du hook, appelée au clic.
function UserRow({ user, onToggleActive }) {
  const { id, fullName, role, active } = user;

  return (
    <tr className="user-row">
      <td className="user-row__name">{fullName}</td>
      <td>{role}</td>
      <td>
        <span className={`user-status ${active ? "user-status--active" : "user-status--inactive"}`}>
          {active ? "Actif" : "Inactif"}
        </span>
      </td>
      <td>
        <Button
          variant={active ? "secondary" : "primary"}
          icon={Power}
          onClick={() => onToggleActive(id)}
        >
          {active ? "Désactiver" : "Activer"}
        </Button>
      </td>
    </tr>
  );
}

export default UserRow;