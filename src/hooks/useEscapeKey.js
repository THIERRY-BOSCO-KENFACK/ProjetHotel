import { useEffect } from "react";

// useEscapeKey : appelle `onEscape` quand la touche Échap est pressée.
// `isActive` : permet de désactiver l'écoute sans démonter le composant
// appelant — nécessaire car ce hook doit être appelé de façon inconditionnelle
// (règles des Hooks React), même quand Modal/Drawer sont fermés (isOpen=false).
function useEscapeKey(onEscape, isActive = true) {
  useEffect(() => {
    if (!isActive) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onEscape();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onEscape, isActive]);
}

export default useEscapeKey;