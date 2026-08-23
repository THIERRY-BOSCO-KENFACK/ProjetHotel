import { useState } from "react";
import useHousekeepingData from "./hooks/useHousekeepingData";
import HousekeepingTabs from "./components/HousekeepingTabs";
import RoomStatusBoard from "./components/RoomStatusBoard";
import TasksList from "./components/TasksList";

// HousekeepingView : vue racine de la feature Housekeeping.
// Détient l'onglet actif et bascule entre les deux vues (Chambres / Tâches).
function HousekeepingView() {
  const { rooms, tasks, isLoading } = useHousekeepingData();
  const [activeTab, setActiveTab] = useState("rooms");

  if (isLoading) {
    return <p className="housekeeping-view__loading">Chargement...</p>;
  }

  return (
    <div className="housekeeping-view">
      <HousekeepingTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === "rooms" && <RoomStatusBoard rooms={rooms} />}
      {activeTab === "tasks" && <TasksList tasks={tasks} />}
    </div>
  );
}

export default HousekeepingView;