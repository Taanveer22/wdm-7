import logo from "../assets/logo.png";
import { BsCoin } from "react-icons/bs";
const Header = ({ coins }) => {
  return (
    <div className="flex justify-between items-center my-6">
      <div className="w-18">
        <img className="w-full" src={logo} alt="logo" />
      </div>
      <div className="flex gap-5 items-center list-none ">
        <li className="text-base font-normal opacity-70">Home</li>
        <li className="text-base font-normal opacity-70">Fixture</li>
        <li className="text-base font-normal opacity-70">Teams</li>
        <li className="text-base font-normal opacity-70">Schedules</li>
        <button className="btn flex items-center gap-2 text-base font-semibold">
          <span>{coins}</span> <span>Coin</span>
          <span className="bg-yellow-500 rounded-full ">
            <BsCoin />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
