import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarDays,
  BookOpen,
  Users,
  Sparkles,
  Calculator,
  Settings,
  LogOut,
  Hotel,
} from "lucide-react";
import useAuth from "../../features/auth/hooks/useAuth";
import LogoutConfirmModal from "../../features/auth/components/LogoutConfirmModal";

const NAV_ITEMS = [
  { id: "dashboard", label: "Tableau de bord", icon: LayoutDashboard, path: "/" },
  { id: "planning", label: "Planning", icon: CalendarDays, path: "/planning" },
  { id: "reservations", label: "Réservations", icon: BookOpen, path: "/reservations" },
  { id: "clients", label: "Clients", icon: Users, path: "/clients" },
  { id: "entretien", label: "Entretien", icon: Sparkles, path: "/entretien" },
  { id: "comptabilite", label: "Comptabilité", icon: Calculator, path: "/comptabilite" },
  { id: "parametres", label: "Paramètres", icon: Settings, path: "/parametres" },
];

// Sidebar : navigation principale + déclenchement du flux de déconnexion.
// Le clic sur "Déconnexion" n'appelle jamais logout() directement —
// il ouvre uniquement la modale de confirmation (isLogoutModalOpen).
function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleConfirmLogout = () => {
    logout();
    setIsLogoutModalOpen(false);
    navigate("/login");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <Hotel size={24} className="sidebar__logo-icon" />
        <span className="sidebar__logo-text">Suite PMS</span>
      </div>

      <nav>
        <ul className="sidebar__nav-list">
          {NAV_ITEMS.map(({ id, label, icon: Icon, path }) => (
            <li key={id}>
              <NavLink
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  `sidebar__nav-item ${isActive ? "sidebar__nav-item--active" : ""}`
                }
              >
                <Icon size={20} />
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar__footer">
        <button
          type="button"
          className="sidebar__nav-item sidebar__logout"
          onClick={() => setIsLogoutModalOpen(true)}
        >
          <LogOut size={20} />
          <span>Déconnexion</span>
        </button>
      </div>

      <LogoutConfirmModal
        isOpen={isLogoutModalOpen}
        onConfirm={handleConfirmLogout}
        onCancel={() => setIsLogoutModalOpen(false)}
      />
    </aside>
  );
}

export default Sidebar;