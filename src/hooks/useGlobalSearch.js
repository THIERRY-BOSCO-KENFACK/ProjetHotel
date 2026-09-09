import { useState, useMemo } from "react";
import useClientsData from "../features/clients/hooks/useClientsData";
import useReservationsData from "../features/reservations/hooks/useReservationsData";
import usePlanningData from "../features/planning/hooks/usePlanningData";

// useGlobalSearch : recherche transversale sur clients, réservations et chambres.
// Retourne { query, setQuery, results } — results est un tableau uniforme
// { id, type, label, sublabel, path, icon } quel que soit le type de résultat,
// pour que GlobalSearch.jsx puisse tout afficher de façon générique.
function useGlobalSearch() {
  const [query, setQuery] = useState("");
  const { clients } = useClientsData();
  const { reservations } = useReservationsData();
  const { rooms } = usePlanningData();

  const results = useMemo(() => {
    const trimmedQuery = query.trim().toLowerCase();

    if (trimmedQuery === "") {
      return [];
    }

    const clientResults = clients
      .filter((client) => client.fullName.toLowerCase().includes(trimmedQuery))
      .map((client) => ({
        id: `client-${client.id}`,
        type: "client",
        label: client.fullName,
        sublabel: client.email,
        path: `/clients/${client.id}`,
      }));

    const reservationResults = reservations
      .filter(
        (reservation) =>
          reservation.clientName.toLowerCase().includes(trimmedQuery) ||
          reservation.id.toLowerCase().includes(trimmedQuery)
      )
      .map((reservation) => ({
        id: `reservation-${reservation.id}`,
        type: "reservation",
        label: `${reservation.clientName} — Chambre ${reservation.room}`,
        sublabel: reservation.id,
        // Pas de fiche détaillée pour l'instant (prévue Étape 5) —
        // redirige vers la liste complète en attendant.
        path: "/reservations",
      }));

    const roomResults = rooms
      .filter((room) => room.room.includes(trimmedQuery))
      .map((room) => ({
        id: `room-${room.room}`,
        type: "room",
        label: `Chambre ${room.room}`,
        sublabel: null,
        path: "/planning",
      }));

    return [...clientResults, ...reservationResults, ...roomResults];
  }, [query, clients, reservations, rooms]);

  return { query, setQuery, results };
}

export default useGlobalSearch;