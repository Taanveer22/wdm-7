import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

const MainContainer = ({
  handleDeletePlayerBtn,
  handleActiveBtn,
  isActive,
  handleChoosePlayerBtn,
  chosenPlayers,
}) => {
  return (
    <div className="">
      <div className="flex justify-end gap-5 text-base font-bold">
        <button
          onClick={() => handleActiveBtn("available-btn")}
          className={`${isActive.available ? "btn btn-success" : "btn"}`}
        >
          Available
        </button>
        <button
          onClick={() => handleActiveBtn("selected-btn")}
          className={`${isActive.available ? "btn" : "btn btn-success"}`}
        >
          Selected <span>({chosenPlayers.length})</span>
        </button>
      </div>

      <div>
        {isActive.available ? (
          <AvailablePlayers
            handleChoosePlayerBtn={handleChoosePlayerBtn}
          ></AvailablePlayers>
        ) : (
          <SelectedPlayers
            handleChoosePlayerBtn={handleChoosePlayerBtn}
            handleDeletePlayerBtn={handleDeletePlayerBtn}
            chosenPlayers={chosenPlayers}
          ></SelectedPlayers>
        )}
      </div>
    </div>
  );
};

export default MainContainer;
