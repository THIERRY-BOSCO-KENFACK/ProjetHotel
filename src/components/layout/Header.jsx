import { useState } from "react";
import { Menu, Bell } from "lucide-react";
import GlobalSearch from "./GlobalSearch";
import NotificationsPanel from "./NotificationsPanel";
import useNotifications from "../../context/useNotifications";

function Header({ pageTitle = "Tableau de bord", user = { name: "Marie", role: "Réceptionniste" }, onOpenMobileMenu }) {
  const { unreadCount } = useNotifications();
  const [isNotificationsPanelOpen, setIsNotificationsPanelOpen] = useState(false);
  const initials = user.name.split(" ").map((part) => part[0]).join("").toUpperCase();

  return (
    <header className="header">
      <div className="header__left">
        <button
          type="button"
          className="header__mobile-menu-toggle"
          onClick={onOpenMobileMenu}
          aria-label="Ouvrir le menu"
        >
          <Menu size={22} />
        </button>
        <h1 className="header__title">{pageTitle}</h1>
      </div>

      <GlobalSearch />

      <div className="header__actions">
        <button
          type="button"
          className="header__notifications"
          onClick={() => setIsNotificationsPanelOpen(true)}
          aria-label="Notifications"
        >
          <Bell size={20} />
          {unreadCount > 0 && <span className="header__notifications-badge">{unreadCount}</span>}
        </button>

        <div className="header__profile">
          <div className="header__avatar">{initials}</div>
          <div className="header__profile-info">
            <span className="header__profile-name">{user.name}</span>
            <span className="header__profile-role">{user.role}</span>
          </div>
        </div>
      </div>

      <NotificationsPanel
        isOpen={isNotificationsPanelOpen}
        onClose={() => setIsNotificationsPanelOpen(false)}
      />
    </header>
  );
}

export default Header;