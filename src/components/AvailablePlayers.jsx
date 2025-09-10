import { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";

const AvailablePlayers = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("./playersData.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {players.map((element) => (
          <PlayerCard element={element} key={element.id}></PlayerCard>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
