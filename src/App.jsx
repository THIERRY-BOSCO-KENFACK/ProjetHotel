import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import PlanningPage from "./pages/PlanningPage";
import ReservationsPage from "./pages/ReservationsPage";
import ClientsPage from "./pages/ClientsPage";
import ClientDetailPage from "./pages/ClientDetailPage";
import HousekeepingPage from "./pages/HousekeepingPage";
import AccountingPage from "./pages/AccountingPage";
import ComingSoonPage from "./pages/ComingSoonPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/planning" element={<PlanningPage />} />
      <Route path="/reservations" element={<ReservationsPage />} />
      <Route path="/clients" element={<ClientsPage />} />
      <Route path="/clients/:id" element={<ClientDetailPage />} />
      <Route path="/entretien" element={<HousekeepingPage />} />
      <Route path="/comptabilite" element={<AccountingPage />} />
      <Route path="/parametres" element={<ComingSoonPage title="Paramètres" />} />
    </Routes>
  );
}

export default App;