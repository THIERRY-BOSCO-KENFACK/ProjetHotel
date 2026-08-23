import StatusBadge from "../../../components/ui/StatusBadge";
import formatCurrency from "../../../utils/formatCurrency";

// Formate une date ISO en format lisible français — même logique que
// ReservationRow.jsx et ClientStayHistory.jsx.
function formatDate(isoDate) {
  const date = new Date(isoDate);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// InvoiceRow : une ligne <tr> du tableau des factures.
// `invoice` : objet complet issu de useAccountingData.
function InvoiceRow({ invoice }) {
  const { id, clientName, amount, dueDate, status } = invoice;

  return (
    <tr className="invoice-row">
      <td className="invoice-row__id">{id}</td>
      <td className="invoice-row__client">{clientName}</td>
      <td className="invoice-row__amount">{formatCurrency(amount)}</td>
      <td>{formatDate(dueDate)}</td>
      <td>
        <StatusBadge status={status} />
      </td>
    </tr>
  );
}

export default InvoiceRow;