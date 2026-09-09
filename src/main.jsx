import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./features/auth/AuthContext.jsx";
import { ToastProvider } from "./context/ToastProvider.jsx";
import { NotificationsProvider } from "./context/NotificationsProvider.jsx";
import App from "./App.jsx";
import "./assets/styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ToastProvider>
          <NotificationsProvider>
            <App />
          </NotificationsProvider>
        </ToastProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);