import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout({ children, pageTitle }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={`app-layout ${isSidebarCollapsed ? "app-layout--collapsed" : ""}`}>
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed((prev) => !prev)}
        isMobileOpen={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
      />

      <div className="app-layout__main">
        <Header pageTitle={pageTitle} onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
        <main className="app-layout__content">{children}</main>
      </div>
    </div>
  );
}

export default AppLayout;