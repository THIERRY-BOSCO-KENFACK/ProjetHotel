import { useContext } from "react";
import { ToastContext } from "./ToastProvider";

// useToast : hook d'accès au système de notifications toast.
// Lève une erreur explicite si utilisé hors d'un ToastProvider — même
// principe que useAuth.js dans features/auth/hooks/.
function useToast() {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error("useToast doit être utilisé à l'intérieur d'un ToastProvider");
  }

  return context;
}

export default useToast;