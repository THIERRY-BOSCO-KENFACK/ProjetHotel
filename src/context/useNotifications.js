import { useContext } from "react";
import { NotificationsContext } from "./NotificationsProvider";

function useNotifications() {
  const context = useContext(NotificationsContext);

  if (context === undefined) {
    throw new Error("useNotifications doit être utilisé à l'intérieur d'un NotificationsProvider");
  }

  return context;
}

export default useNotifications;