import InvoiceRow from "./InvoiceRow";

// En-têtes du tableau, dans l'ordre exact des colonnes rendues par InvoiceRow.
const TABLE_HEADERS = ["N°", "Client", "Montant", "Échéance", "Statut"];

// InvoicesTable : tableau complet des factures.
// `invoices` : liste d'objets issue de useAccountingData (potentiellement filtrée).
function InvoicesTable({ invoices }) {
  if (invoices.length === 0) {
    return (
      <div className="invoices-table__empty">
        <p>Aucune facture ne correspond à ta recherche.</p>
      </div>
    );
  }

  return (
    <div className="invoices-table__wrapper">
      <table className="invoices-table">
        <thead>
          <tr>
            {TABLE_HEADERS.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {invoices.map((invoice) => (
            <InvoiceRow key={invoice.id} invoice={invoice} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InvoicesTable;