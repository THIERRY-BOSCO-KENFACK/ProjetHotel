import { useState, useMemo } from "react";
import useAccountingData from "./hooks/useAccountingData";
import RevenueMetrics from "./components/RevenueMetrics";
import InvoicesToolbar from "./components/InvoicesToolbar";
import InvoicesTable from "./components/InvoicesTable";

// AccountingView : vue racine de la feature Accounting.
// Détient l'état de recherche/filtre et calcule la liste filtrée des factures.
// Les indicateurs (metrics) restent calculés sur la liste complète, pas la
// liste filtrée — les revenus du mois ne doivent pas varier selon une recherche.
function AccountingView() {
  const { invoices, metrics, isLoading } = useAccountingData();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredInvoices = useMemo(() => {
    return invoices.filter((invoice) => {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        searchQuery.trim() === "" ||
        invoice.clientName.toLowerCase().includes(query) ||
        invoice.id.toLowerCase().includes(query);

      const matchesStatus = statusFilter === "all" || invoice.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [invoices, searchQuery, statusFilter]);

  if (isLoading) {
    return <p className="accounting-view__loading">Chargement de la comptabilité...</p>;
  }

  return (
    <div className="accounting-view">
      <RevenueMetrics metrics={metrics} />

      <InvoicesToolbar onSearchChange={setSearchQuery} onStatusFilterChange={setStatusFilter} />

      <InvoicesTable invoices={filteredInvoices} />
    </div>
  );
}

export default AccountingView;