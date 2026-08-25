import { useState } from "react";

// Profil de l'utilisateur connecté — reprend "Marie" déjà utilisée dans Header.jsx,
// pour rester cohérent avec l'identité affichée dans toute l'application.
const INITIAL_PROFILE = {
  fullName: "Marie",
  email: "marie@suitepms.com",
  role: "Réceptionniste",
};

// Informations de l'établissement.
const INITIAL_HOTEL = {
  name: "Suite PMS Hôtel",
  address: "Douala, Cameroun",
  phone: "+237 6 00 11 22 33",
  currency: "FCFA",
};

// Mock data du personnel. `role` reprend des intitulés déjà évoqués
// dans l'app (Réceptionniste) ou cohérents avec Housekeeping (Luc, Sophie).
const INITIAL_USERS = [
  { id: "USR-001", fullName: "Marie", role: "Réceptionniste", active: true },
  { id: "USR-002", fullName: "Luc", role: "Agent d'entretien", active: true },
  { id: "USR-003", fullName: "Sophie", role: "Agent d'entretien", active: true },
  { id: "USR-004", fullName: "Paul", role: "Comptable", active: false },
];

// Préférences de notifications — chaque clé est un toggle indépendant.
const INITIAL_NOTIFICATIONS = {
  newReservation: true,
  paymentOverdue: true,
  taskAssigned: false,
};

// useSettingsData : hook custom centralisant toutes les données Paramètres.
// Expose les données ET des fonctions de mise à jour (updateProfile,
// updateHotel, toggleNotification) — contrairement aux autres hooks
// de l'app qui sont en lecture seule, celui-ci gère aussi l'écriture locale.

function useSettingsData() {
  const [profile, setProfile] = useState(INITIAL_PROFILE);
  const [hotel, setHotel] = useState(INITIAL_HOTEL);
  const [users, setUsers] = useState(INITIAL_USERS); // désormais modifiable
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const isLoading = false;

  const updateProfile = (updates) => {
    setProfile((prev) => ({ ...prev, ...updates }));
  };

  const updateHotel = (updates) => {
    setHotel((prev) => ({ ...prev, ...updates }));
  };

  const toggleNotification = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // toggleUserActive : inverse le statut actif/inactif d'un utilisateur donné.
  const toggleUserActive = (userId) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId ? { ...user, active: !user.active } : user
      )
    );
  };

  return {
    profile,
    hotel,
    users,
    notifications,
    isLoading,
    updateProfile,
    updateHotel,
    toggleNotification,
    toggleUserActive,
  };
}

export default useSettingsData;