import { Bell } from "lucide-react";

// Header réutilisable sur toutes les pages.
// `pageTitle` permet d'adapter le titre affiché sans dupliquer le composant.
// `user` regroupe les infos de profil (mock data en attendant l'authentification).
function Header({ pageTitle = "Tableau de bord", user = { name: "Marie", role: "Réceptionniste" } }) {
  // Nombre de notifications non lues (donnée simulée pour l'instant)
  const unreadNotifications = 3;

  // Génère les initiales à partir du nom pour l'avatar (fallback simple sans image)
  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();


//dans const ci haut, on utilise la méthode split pour diviser le nom 
// de l'utilisateur en parties (en utilisant l'espace comme séparateur), puis on mappe
//chaque partie pour obtenir la première lettre, et enfin on joint ces lettres pour former les initiales. La méthode toUpperCase est utilisée pour s'assurer que les initiales sont en majuscules. 

  return (
    <header className="header">
      {/* Titre de la page courante */}
      <h1 className="header__title">{pageTitle}</h1>

      <div className="header__actions">
        {/* Icône de notifications avec badge */}
        <button type="button" className="header__notifications" aria-label="Notifications">

            {/* Bell est l'icône de notifications */}

          <Bell size={20} />
          {unreadNotifications > 0 && (
            <span className="header__notifications-badge">{unreadNotifications}</span>
          )}
        </button>

        {/* Profil utilisateur */}
        <div className="header__profile">
          <div className="header__avatar">{initials}</div>
          <div className="header__profile-info">
            <span className="header__profile-name">{user.name}</span>
            <span className="header__profile-role">{user.role}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;