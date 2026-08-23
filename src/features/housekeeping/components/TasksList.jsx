import TaskRow from "./TaskRow";

// En-têtes du tableau, dans l'ordre exact des colonnes rendues par TaskRow.
const TABLE_HEADERS = ["Chambre", "Assigné à", "Priorité", "Statut"];

// TasksList : tableau complet des tâches de nettoyage assignées.
// `tasks` : liste d'objets issue de useHousekeepingData.
function TasksList({ tasks }) {
  if (tasks.length === 0) {
    return (
      <div className="tasks-list__empty">
        <p>Aucune tâche assignée pour le moment.</p>
      </div>
    );
  }

  return (
    <div className="tasks-list__wrapper">
      <table className="tasks-list">
        <thead>
          <tr>
            {TABLE_HEADERS.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TasksList;