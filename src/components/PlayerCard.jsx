const PlayerCard = ({ element }) => {
  const { image, name, country, role, battingHand, bowlingHand, price } =
    element;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm p-5 space-y-2">
        <figure>
          <img className="w-full h-64" src={image} />
        </figure>
        <h2 className="card-title">{name}</h2>
        <div className="flex justify-between border-b-2 border-b-gray-300">
          <p className="mb-2">{country}</p>
          <p className="mb-2">{role}</p>
        </div>
        <h2 className="card-title">Rating</h2>
        <div className="flex justify-between">
          <p className="">{battingHand}</p>
          <p className="">{bowlingHand}</p>
        </div>
        <div className="card-actions justify-between items-center">
          <button>Price: {price}</button>
          <button className="btn btn-warning">Choose Player</button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
