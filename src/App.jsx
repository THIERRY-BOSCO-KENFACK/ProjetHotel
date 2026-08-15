import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import PlanningPage from "./pages/PlanningPage";
import ReservationsPage from "./pages/ReservationsPage";
import ComingSoonPage from "./pages/ComingSoonPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/planning" element={<PlanningPage />} />
      <Route path="/reservations" element={<ReservationsPage />} />
      <Route path="/clients" element={<ComingSoonPage title="Clients" />} />
      <Route path="/entretien" element={<ComingSoonPage title="Entretien" />} />
      <Route path="/comptabilite" element={<ComingSoonPage title="Comptabilité" />} />
      <Route path="/parametres" element={<ComingSoonPage title="Paramètres" />} />
    </Routes>
  );
}

export default App;