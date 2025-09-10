import { FaUserCircle } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
const PlayerCard = ({ element, handleChoosePlayerBtn }) => {
  const { image, name, country, role, battingHand, bowlingHand, price } =
    element;
  return (
    <div>
      <div className="card shadow-sm border-2 border-gray-100 p-5 space-y-2">
        <div className="flex items-center">
          <img className="w-full h-64 rounded-lg" src={image} />
        </div>
        <div className="flex items-center gap-3 text-xl font-semibold">
          <FaUserCircle />
          <h2>{name}</h2>
        </div>
        <div className="flex justify-between text-base font-normal opacity-70">
          <p className="flex gap-3 items-center">
            <FaFlag />
            <span> {country}</span>
          </p>
          <button className="btn">{role}</button>
        </div>
        <h2 className="card-title pt-2 border-t-2 border-t-gray-300">Rating</h2>
        <div className="flex justify-between text-base font-normal opacity-70">
          <p>{battingHand}</p>
          <p>{bowlingHand}</p>
        </div>
        <div className="flex justify-between items-center">
          <button className="text-base font-normal opacity-70">
            Price: ${price}
          </button>
          <button
            onClick={() => handleChoosePlayerBtn(element)}
            className="btn btn-warning"
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
