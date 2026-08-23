import RoomStatusCard from "./RoomStatusCard";

// RoomStatusBoard : grille des chambres avec leur statut de propreté.
// `rooms` : liste d'objets { room, status } issue de useHousekeepingData.
function RoomStatusBoard({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="room-status-board__empty">
        <p>Aucune chambre à afficher.</p>
      </div>
    );
  }

  return (
    <div className="room-status-board">
      {rooms.map(({ room, status }) => (
        <RoomStatusCard key={room} room={room} status={status} />
      ))}
    </div>
  );
}

export default RoomStatusBoard;