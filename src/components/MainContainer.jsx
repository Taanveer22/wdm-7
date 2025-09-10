import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

const MainContainer = ({ handleActiveBtn, isActive }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Available Players</h1>
        <div className="flex gap-5 text-base font-bold">
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
            Selected <span>(0)</span>
          </button>
        </div>
      </div>
      <div className="">
        {isActive.available ? (
          <AvailablePlayers></AvailablePlayers>
        ) : (
          <SelectedPlayers></SelectedPlayers>
        )}
      </div>
    </div>
  );
};

export default MainContainer;
