import { useState } from "react";

// Mock data des factures. `reservationId` référence une réservation existante
// (RES-00X) uniquement par convention de nommage — pas d'import cross-feature
// vers reservations/, juste une chaîne de caractères pour garder une trace.
const MOCK_INVOICES = [
  {
    id: "INV-001",
    clientName: "Dupont",
    reservationId: "RES-001",
    amount: 150000,
    issueDate: "2025-07-22",
    dueDate: "2025-07-29",
    status: "paid",
  },
  {
    id: "INV-002",
    clientName: "Martin",
    reservationId: "RES-002",
    amount: 45000,
    issueDate: "2025-07-24",
    dueDate: "2025-07-31",
    status: "pending",
  },
  {
    id: "INV-003",
    clientName: "Smith",
    reservationId: "RES-003",
    amount: 90000,
    issueDate: "2025-07-24",
    dueDate: "2025-07-20",
    status: "overdue",
  },
  {
    id: "INV-004",
    clientName: "Leroy",
    reservationId: "RES-004",
    amount: 60000,
    issueDate: "2025-07-24",
    dueDate: "2025-07-31",
    status: "paid",
  },
  {
    id: "INV-005",
    clientName: "Fotso",
    reservationId: "RES-006",
    amount: 120000,
    issueDate: "2025-07-18",
    dueDate: "2025-07-25",
    status: "overdue",
  },
];

// useAccountingData : hook custom centralisant les données de facturation.
// Calcule les indicateurs à la volée à partir des factures, plutôt que de
// les coder en dur — évite toute incohérence entre les chiffres affichés
// et la liste réelle des factures.
function useAccountingData() {
  const [invoices] = useState(MOCK_INVOICES);
  const isLoading = false;

  const monthlyRevenue = invoices
    .filter((invoice) => invoice.status === "paid")
    .reduce((total, invoice) => total + invoice.amount, 0);

  const pendingAmount = invoices
    .filter((invoice) => invoice.status === "pending")
    .reduce((total, invoice) => total + invoice.amount, 0);

  const overdueCount = invoices.filter((invoice) => invoice.status === "overdue").length;

  return {
    invoices,
    metrics: { monthlyRevenue, pendingAmount, overdueCount },
    isLoading,
  };
}

export default useAccountingData;