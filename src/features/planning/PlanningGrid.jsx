import { useState } from "react";
import usePlanningData from "./hooks/usePlanningData";
import PlanningToolBar from "./components/PlanningToolBar";
import PlanningFilter from "./components/PlanningFilter";
import RoomRow from "./components/RoomRow";

// PlanningGrid : vue racine de la feature Planning.
// Détient l'état du filtre (activeStatuses) et le redescend à chaque RoomRow.
function PlanningGrid() {
  const { days, rooms, isLoading } = usePlanningData();
  const [activeStatuses, setActiveStatuses] = useState(null); // null = aucun filtre, tout actif

  if (isLoading) {
    return <p className="planning-grid__loading">Chargement du planning...</p>;
  }

  return (
    <div className="planning-grid">
      {/* Navigation semaine + filtre statut (fichier de ton ami) */}
      <PlanningToolBar />

      {/* Légende + filtre par statut, connecté à la grille ci-dessous */}
      <PlanningFilter onFilterChange={setActiveStatuses} />

      <div className="planning-grid__table-wrapper">
        <table className="planning-grid__table">
          <thead>
            <tr>
              <th className="planning-grid__room-header">Chambre</th>
              {days.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rooms.map(({ room, segments }) => (
              <RoomRow
                key={room}
                room={room}
                segments={segments}
                activeStatuses={activeStatuses}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PlanningGrid;