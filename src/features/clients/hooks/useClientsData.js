import { useState } from "react";

// Mock data des clients. `stayHistory` reprend le même format que les
// segments utilisés dans Reservations (room, checkIn, checkOut, status),
// pour rester cohérent avec les données déjà construites dans l'app.
const MOCK_CLIENTS = [
  {
    id: "CLI-001",
    fullName: "Dupont",
    email: "j.dupont@email.com",
    phone: "+237 6 12 34 56 78",
    vip: false,
    stayHistory: [
      { room: "101", checkIn: "2025-07-20", checkOut: "2025-07-22", status: "confirmed" },
    ],
  },
  {
    id: "CLI-002",
    fullName: "Martin",
    email: "s.martin@email.com",
    phone: "+237 6 98 76 54 32",
    vip: true,
    stayHistory: [
      { room: "101", checkIn: "2025-07-23", checkOut: "2025-07-24", status: "confirmed" },
      { room: "104", checkIn: "2025-05-10", checkOut: "2025-05-13", status: "confirmed" },
    ],
  },
  {
    id: "CLI-003",
    fullName: "Smith",
    email: "j.smith@email.com",
    phone: "+44 7700 900123",
    vip: false,
    stayHistory: [
      { room: "102", checkIn: "2025-07-23", checkOut: "2025-07-24", status: "pending" },
    ],
  },
  {
    id: "CLI-004",
    fullName: "Leroy",
    email: "c.leroy@email.com",
    phone: "+237 6 55 44 33 22",
    vip: false,
    stayHistory: [
      { room: "103", checkIn: "2025-07-23", checkOut: "2025-07-24", status: "confirmed" },
    ],
  },
  {
    id: "CLI-005",
    fullName: "Nguyen",
    email: "t.nguyen@email.com",
    phone: "+33 6 11 22 33 44",
    vip: false,
    stayHistory: [
      { room: "104", checkIn: "2025-07-25", checkOut: "2025-07-27", status: "cancelled" },
    ],
  },
];

// useClientsData : hook custom centralisant les données des clients.
// `getClientById` est fourni ici plutôt que recalculé dans chaque composant
// consommateur — évite de dupliquer la logique de recherche (ex: dans
// ClientDetailPage pour retrouver le client depuis l'URL /clients/:id).
function useClientsData() {
  const [clients] = useState(MOCK_CLIENTS);
  const isLoading = false;

  const getClientById = (id) => clients.find((client) => client.id === id);

  return { clients, isLoading, getClientById };
}

export default useClientsData;