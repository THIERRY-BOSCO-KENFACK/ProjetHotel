import Sidebar from "./Sidebar";
import Header from "./Header";
<<<<<<< HEAD
=======

>>>>>>> 392a428f111714e23f7303e2cbe097c900517c35
// AppLayout définit le squelette visuel commun à toutes les pages.
// `children` reçoit le contenu spécifique de la page (ex: DashboardView).
// `pageTitle` est transmis au Header pour afficher le bon titre selon la page.
function AppLayout({ children, pageTitle }) {
  return (
    <div className="app-layout">
      {/* Navigation latérale, fixe sur toute la hauteur */}
      <Sidebar />

      {/* Zone principale : Header + contenu de la page */}
      <div className="app-layout__main">
        <Header pageTitle={pageTitle} />

        <main className="app-layout__content">
          {children}
<<<<<<< HEAD
          {/* Ici, `children` représente le contenu spécifique de chaque page. */}
=======
>>>>>>> 392a428f111714e23f7303e2cbe097c900517c35
        </main>
      </div>
    </div>
  );
}

export default AppLayout;