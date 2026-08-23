// Table de correspondance priorité → libellé + couleur (via className).
const PRIORITY_LABELS = {
  high: "Haute",
  medium: "Moyenne",
  low: "Basse",
};

// Table de correspondance statut de tâche → libellé affiché.
const TASK_STATUS_LABELS = {
  pending: "À faire",
  in_progress: "En cours",
  done: "Terminée",
};

// TaskRow : une ligne <tr> du tableau des tâches de nettoyage.
// `task` : objet complet issu de useHousekeepingData.
function TaskRow({ task }) {
  const { room, assignee, status, priority } = task;

  return (
    <tr className="task-row">
      <td className="task-row__room">Chambre {room}</td>
      <td>{assignee}</td>
      <td>
        <span className={`task-priority task-priority--${priority}`}>
          {PRIORITY_LABELS[priority] ?? priority}
        </span>
      </td>
      <td>
        <span className={`task-status task-status--${status}`}>
          {TASK_STATUS_LABELS[status] ?? status}
        </span>
      </td>
    </tr>
  );
}

export default TaskRow;