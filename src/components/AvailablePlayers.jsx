import { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";

const AvailablePlayers = ({ handleChoosePlayerBtn }) => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("./playersData.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold mb-5 mt-5">Available Players</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {players.map((element) => (
          <PlayerCard
            handleChoosePlayerBtn={handleChoosePlayerBtn}
            element={element}
            key={element.id}
          ></PlayerCard>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
