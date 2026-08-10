import { NavLink } from "react-router-dom";
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

// Chaque item a maintenant un `path`, utilisé par NavLink pour la navigation.
const NAV_ITEMS = [
  { id: "dashboard", label: "Tableau de bord", icon: LayoutDashboard, path: "/" },
  { id: "planning", label: "Planning", icon: CalendarDays, path: "/planning" },
  { id: "reservations", label: "Réservations", icon: BookOpen, path: "/reservations" },
  { id: "clients", label: "Clients", icon: Users, path: "/clients" },
  { id: "entretien", label: "Entretien", icon: Sparkles, path: "/entretien" },
  { id: "comptabilite", label: "Comptabilité", icon: Calculator, path: "/comptabilite" },
  { id: "parametres", label: "Paramètres", icon: Settings, path: "/parametres" },
];

function Sidebar() {
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
        <button type="button" className="sidebar__nav-item sidebar__logout">
          <LogOut size={20} />
          <span>Déconnexion</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;