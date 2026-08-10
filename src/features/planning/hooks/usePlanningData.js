import { useState } from "react";

// Jours affichés dans la grille (mock pour l'instant, sera calculé
// dynamiquement selon la semaine sélectionnée dans PlanningToolBar).
const DAYS = ["Lun 20/07", "Mar 21/07", "Mer 22/07", "Jeu 23/07", "Ven 24/07"];

// Données mock des chambres. Chaque chambre a une liste de "segments" :
// { type, label, span } où `span` = nombre de jours occupés par ce segment.
// La somme des `span` d'une chambre doit toujours égaler DAYS.length.
const MOCK_ROOMS = [
  {
    room: "101",
    segments: [
      { type: "reservation", label: "Dupont", span: 2 },
      { type: "free", label: "Libre", span: 1 },
      { type: "reservation", label: "Martin", span: 2 },
    ],
  },
  {
    room: "102",
    segments: [
      { type: "cleaning", label: "Nettoyage", span: 1 },
      { type: "free", label: "Libre", span: 2 },
      { type: "reservation", label: "Smith", span: 2 },
    ],
  },
  {
    room: "103",
    segments: [
      { type: "maintenance", label: "Maintenance", span: 2 },
      { type: "free", label: "Libre", span: 1 },
      { type: "reservation", label: "Leroy", span: 2 },
    ],
  },
];

// usePlanningData : hook custom centralisant les données du planning.
// Retourne { days, rooms, isLoading } — une interface stable qui ne
// changera pas le jour où ces données viendront d'un vrai fetch API.
function usePlanningData() {
  const [days] = useState(DAYS);
  const [rooms] = useState(MOCK_ROOMS);

  // Piloté par un vrai état de chargement une fois le backend branché.
  const isLoading = false;

  return { days, rooms, isLoading };
}

export default usePlanningData;