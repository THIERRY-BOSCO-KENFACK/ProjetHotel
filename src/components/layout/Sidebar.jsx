import { useState } from "react";
// Importation des icônes depuis la bibliothèque lucide-react
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

// Liste des éléments de navigation.
// Centraliser la config ici facilite l'ajout/suppression d'une entrée
// et évite de dupliquer du JSX pour chaque lien.
const NAV_ITEMS = [
  { id: "dashboard", label: "Tableau de bord", icon: LayoutDashboard },
  { id: "planning", label: "Planning", icon: CalendarDays },
  { id: "reservations", label: "Réservations", icon: BookOpen },
  { id: "clients", label: "Clients", icon: Users },
  { id: "entretien", label: "Entretien", icon: Sparkles },
  { id: "comptabilite", label: "Comptabilité", icon: Calculator },
  { id: "parametres", label: "Paramètres", icon: Settings },
];

function Sidebar() {
  // Élément actif par défaut : le tableau de bord.
  // Sera remplacé par la logique de routage (useLocation) plus tard.
  const [activeItem, setActiveItem] = useState("dashboard");

  return (
    <aside className="sidebar">
      {/* Logo du PMS */}
      <div className="sidebar__logo">
        <Hotel size={24} className="sidebar__logo-icon" />
        <span className="sidebar__logo-text">Geneva PMS</span>
      </div>

      {/* Navigation principale */}
      <nav className="sidebar__nav">
        <ul className="sidebar__nav-list">
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <button
                type="button"
                className={`sidebar__nav-item ${
                  activeItem === id ? "sidebar__nav-item--active" : ""
                }`}
                onClick={() => setActiveItem(id)}
              >
                <Icon size={20} className="sidebar__nav-icon" />
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Déconnexion, séparée visuellement en bas de la sidebar */}
      <div className="sidebar__footer">
        <button type="button" className="sidebar__nav-item sidebar__logout">
          <LogOut size={20} className="sidebar__nav-icon" />
          <span>Déconnexion</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;