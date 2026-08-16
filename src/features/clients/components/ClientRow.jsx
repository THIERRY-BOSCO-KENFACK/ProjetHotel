import { useNavigate } from "react-router-dom";
import { Crown } from "lucide-react";

// ClientRow : une ligne <tr> cliquable du tableau des clients.
// `client` : un objet complet issu de useClientsData.
// Le clic sur la ligne entière navigue vers la fiche détaillée du client.
function ClientRow({ client }) {
  const navigate = useNavigate();
  const { id, fullName, email, phone, vip, stayHistory } = client;

  const handleClick = () => {
    navigate(`/clients/${id}`);
  };

  return (
    <tr className="client-row" onClick={handleClick}>
      <td className="client-row__name">
        {fullName}
        {vip && (
          <span className="client-row__vip" title="Client VIP">
            <Crown size={14} />
          </span>
        )}
      </td>
      <td>{email}</td>
      <td>{phone}</td>
      <td className="client-row__stays">{stayHistory.length}</td>
    </tr>
  );
}

export default ClientRow;