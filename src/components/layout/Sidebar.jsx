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
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import Tooltip from "../ui/Tooltip";
import Drawer from "../ui/Drawer";
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

// Sidebar : navigation principale. Trois présentations possibles :
// desktop pleine largeur, desktop réduite (icônes), et Drawer mobile
// (isMobileOpen) — les trois partagent le même contenu de navigation.
function Sidebar({ isCollapsed, onToggleCollapse, isMobileOpen, onCloseMobile }) {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleConfirmLogout = () => {
    logout();
    setIsLogoutModalOpen(false);
    navigate("/login");
  };

  // withTooltipIfCollapsed : n'a de sens que pour l'affichage desktop réduit —
  // `forCollapsed` permet de désactiver le Tooltip quand on rend le même
  // contenu à l'intérieur du Drawer mobile (où le texte est toujours visible).
  const withTooltipIfCollapsed = (label, element, forCollapsed) =>
    forCollapsed ? (
      <Tooltip content={label} position="right">
        {element}
      </Tooltip>
    ) : (
      element
    );

  // renderNavContent : génère la liste de navigation + déconnexion.
  // `collapsedStyle` : true seulement pour l'affichage desktop réduit,
  // jamais à l'intérieur du Drawer mobile (toujours en texte complet là-bas).
  const renderNavContent = (collapsedStyle) => (
    <>
      <nav>
        <ul className="sidebar__nav-list">
          {NAV_ITEMS.map(({ id, label, icon: Icon, path }) => (
            <li key={id}>
              {withTooltipIfCollapsed(
                label,
                <NavLink
                  to={path}
                  end={path === "/"}
                  onClick={onCloseMobile}
                  className={({ isActive }) =>
                    `sidebar__nav-item ${isActive ? "sidebar__nav-item--active" : ""}`
                  }
                >
                  <Icon size={20} />
                  {!collapsedStyle && <span>{label}</span>}
                </NavLink>,
                collapsedStyle
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar__footer">
        {withTooltipIfCollapsed(
          "Déconnexion",
          <button
            type="button"
            className="sidebar__nav-item sidebar__logout"
            onClick={() => setIsLogoutModalOpen(true)}
          >
            <LogOut size={20} />
            {!collapsedStyle && <span>Déconnexion</span>}
          </button>,
          collapsedStyle
        )}
      </div>
    </>
  );

  return (
    <>
      {/* Sidebar desktop — masquée en CSS sous 768px */}
      <aside className={`sidebar ${isCollapsed ? "sidebar--collapsed" : ""}`}>
        <div className="sidebar__logo">
          <Hotel size={24} className="sidebar__logo-icon" />
          {!isCollapsed && <span className="sidebar__logo-text">Suite PMS</span>}
        </div>

        {renderNavContent(isCollapsed)}

        <button
          type="button"
          className="sidebar__collapse-toggle"
          onClick={onToggleCollapse}
          aria-label={isCollapsed ? "Déplier la navigation" : "Réduire la navigation"}
        >
          {isCollapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
          {!isCollapsed && <span>Réduire</span>}
        </button>
      </aside>

      {/* Menu mobile — Drawer, affiché uniquement sous 768px via le Header */}
      <Drawer isOpen={isMobileOpen} onClose={onCloseMobile} title="Suite PMS">
        <div className="sidebar__mobile-content">{renderNavContent(false)}</div>
      </Drawer>

      <LogoutConfirmModal
        isOpen={isLogoutModalOpen}
        onConfirm={handleConfirmLogout}
        onCancel={() => setIsLogoutModalOpen(false)}
      />
    </>
  );
}

export default Sidebar;