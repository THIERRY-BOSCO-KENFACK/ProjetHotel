import UserRow from "./UserRow";

// En-têtes du tableau, dans l'ordre exact des colonnes rendues par UserRow.
const TABLE_HEADERS = ["Nom", "Rôle", "Statut", "Action"];

// UsersSettings : tableau des comptes du personnel.
// `users` : liste d'objets issue de useSettingsData.
// `onToggleActive` : transmis à chaque UserRow pour activer/désactiver un compte.
function UsersSettings({ users, onToggleActive }) {
  return (
    <div className="settings-section">
      <h2 className="settings-section__title">Utilisateurs</h2>

      <div className="users-table__wrapper">
        <table className="users-table">
          <thead>
            <tr>
              {TABLE_HEADERS.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <UserRow key={user.id} user={user} onToggleActive={onToggleActive} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersSettings;