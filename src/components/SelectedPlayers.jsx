import { RiDeleteBinLine } from "react-icons/ri";

const SelectedPlayers = ({ chosenPlayers }) => {
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
          <button>
            <RiDeleteBinLine className="text-2xl font-bold text-red-500"></RiDeleteBinLine>
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectedPlayers;
