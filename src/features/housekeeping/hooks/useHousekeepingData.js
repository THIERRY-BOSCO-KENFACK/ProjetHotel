import { useState } from "react";

// Statuts possibles d'une chambre côté entretien.
// "clean" : propre, prête à être attribuée.
// "dirty" : à nettoyer (client parti, pas encore traité).
// "in_progress" : nettoyage en cours.
// "out_of_order" : hors service (problème technique, pas juste un nettoyage).

// Mock data des chambres, vue "housekeeping" (différente de la vue Planning
// qui montre les réservations — ici on montre uniquement l'état de propreté).
const MOCK_ROOMS = [
  { room: "101", status: "clean" },
  { room: "102", status: "dirty" },
  { room: "103", status: "in_progress" },
  { room: "104", status: "out_of_order" },
];

// Mock data des tâches assignées. `assignee` reprend "Luc", déjà mentionné
// dans ActivityFeed du Dashboard ("Chambre 102 marquée propre par Luc").
const MOCK_TASKS = [
  {
    id: "TASK-001",
    room: "102",
    assignee: "Luc",
    status: "pending",
    priority: "high",
  },
  {
    id: "TASK-002",
    room: "103",
    assignee: "Luc",
    status: "in_progress",
    priority: "medium",
  },
  {
    id: "TASK-003",
    room: "104",
    assignee: "Sophie",
    status: "pending",
    priority: "high",
  },
  {
    id: "TASK-004",
    room: "101",
    assignee: "Sophie",
    status: "done",
    priority: "low",
  },
];

// useHousekeepingData : hook custom centralisant les données Housekeeping.
// Retourne les deux jeux de données nécessaires aux deux onglets de la feature.
function useHousekeepingData() {
  const [rooms] = useState(MOCK_ROOMS);
  const [tasks] = useState(MOCK_TASKS);
  const isLoading = false;

  return { rooms, tasks, isLoading };
}

export default useHousekeepingData;