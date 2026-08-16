import ClientRow from "./ClientRow";

// En-têtes du tableau, dans l'ordre exact des colonnes rendues par ClientRow.
const TABLE_HEADERS = ["Nom", "Email", "Téléphone", "Séjours"];

// ClientsTable : tableau complet des clients.
// `clients` : liste d'objets issue de useClientsData (potentiellement filtrée).
function ClientsTable({ clients }) {
  if (clients.length === 0) {
    return (
      <div className="clients-table__empty">
        <p>Aucun client ne correspond à ta recherche.</p>
      </div>
    );
  }

  return (
    <div className="clients-table__wrapper">
      <table className="clients-table">
        <thead>
          <tr>
            {TABLE_HEADERS.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {clients.map((client) => (
            <ClientRow key={client.id} client={client} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientsTable;