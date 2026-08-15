import { useState } from "react";

// Statuts possibles d'une réservation.
// "confirmed" : réservation validée et payée (ou acompte versé).
// "pending" : en attente de confirmation (ex: demande non encore traitée).
// "cancelled" : annulée par le client ou l'établissement.

// Mock data des réservations. `source` reprend les canaux déjà évoqués
// dans ActivityFeed (Booking.com) pour rester cohérent avec le reste de l'app.
const MOCK_RESERVATIONS = [
  {
    id: "RES-001",
    clientName: "Dupont",
    room: "101",
    checkIn: "2025-07-20",
    checkOut: "2025-07-22",
    status: "confirmed",
    source: "Direct",
  },
  {
    id: "RES-002",
    clientName: "Martin",
    room: "101",
    checkIn: "2025-07-23",
    checkOut: "2025-07-24",
    status: "confirmed",
    source: "Booking.com",
  },
  {
    id: "RES-003",
    clientName: "Smith",
    room: "102",
    checkIn: "2025-07-23",
    checkOut: "2025-07-24",
    status: "pending",
    source: "Booking.com",
  },
  {
    id: "RES-004",
    clientName: "Leroy",
    room: "103",
    checkIn: "2025-07-23",
    checkOut: "2025-07-24",
    status: "confirmed",
    source: "Direct",
  },
  {
    id: "RES-005",
    clientName: "Nguyen",
    room: "104",
    checkIn: "2025-07-25",
    checkOut: "2025-07-27",
    status: "cancelled",
    source: "Expedia",
  },
];

// useReservationsData : hook custom centralisant les données des réservations.
// Retourne { reservations, isLoading } — même contrat que usePlanningData,
// pour garder une cohérence d'API entre les hooks de l'app.
function useReservationsData() {
  const [reservations] = useState(MOCK_RESERVATIONS);
  const isLoading = false;

  return { reservations, isLoading };
}

export default useReservationsData;