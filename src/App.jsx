import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./features/auth/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import PlanningPage from "./pages/PlanningPage";
import ReservationsPage from "./pages/ReservationsPage";
import ClientsPage from "./pages/ClientsPage";
import ClientDetailPage from "./pages/ClientDetailPage";
import HousekeepingPage from "./pages/HousekeepingPage";
import AccountingPage from "./pages/AccountingPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <Routes>
      {/* Seule route publique */}
      <Route path="/login" element={<LoginPage />} />

      {/* Toutes les autres routes exigent une session active */}
      <Route path="/" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
      <Route path="/planning" element={<ProtectedRoute><PlanningPage /></ProtectedRoute>} />
      <Route path="/reservations" element={<ProtectedRoute><ReservationsPage /></ProtectedRoute>} />
      <Route path="/clients" element={<ProtectedRoute><ClientsPage /></ProtectedRoute>} />
      <Route path="/clients/:id" element={<ProtectedRoute><ClientDetailPage /></ProtectedRoute>} />
      <Route path="/entretien" element={<ProtectedRoute><HousekeepingPage /></ProtectedRoute>} />
      <Route path="/comptabilite" element={<ProtectedRoute><AccountingPage /></ProtectedRoute>} />
      <Route path="/parametres" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
    </Routes>
  );
}

export default App;