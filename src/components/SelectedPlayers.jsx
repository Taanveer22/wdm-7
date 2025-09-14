import { RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";
import AvailablePlayers from "./AvailablePlayers";

const SelectedPlayers = ({
  chosenPlayers,
  handleDeletePlayerBtn,
  handleChoosePlayerBtn,
}) => {
  const [displayComponent, setDisplayComponent] = useState("");
  const handleAddMorePlayersBtn = () => {
    setDisplayComponent("add-more-btn");
  };
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold mb-5 mt-5">
        Selected Players ({chosenPlayers.length} / 6)
      </h1>
      {chosenPlayers.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center p-5 my-5 rounded-sm border-2 border-slate-300"
        >
          <div className="flex gap-5 items-center">
            <img className="w-20 h-20 rounded-md" src={item.image} />
            <div className="flex flex-col gap-1">
              <h1>{item.name}</h1>
              <p>{item.role}</p>
              <p>$ {item.price}</p>
            </div>
          </div>
          <button onClick={() => handleDeletePlayerBtn(item)}>
            <RiDeleteBinLine className="text-2xl font-bold text-red-500"></RiDeleteBinLine>
          </button>
        </div>
      ))}
      <button onClick={handleAddMorePlayersBtn} className="btn btn-warning">
        Add More Players
      </button>
      {displayComponent === "add-more-btn" && (
        <AvailablePlayers
          handleChoosePlayerBtn={handleChoosePlayerBtn}
        ></AvailablePlayers>
      )}
    </div>
  );
};

export default SelectedPlayers;
