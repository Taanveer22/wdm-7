import logo from "../assets/logo.png";
import { BsCoin } from "react-icons/bs";

const Header = ({ coins }) => {
  return (
    <div className="flex justify-between items-center my-6">
      <div className="w-36 sm:w-18">
        <img className="w-full" src={logo} alt="logo" />
      </div>
      <div className="flex flex-col sm:flex-row gap-5 items-center list-none ">
        <li className="text-base font-normal opacity-70">Home</li>
        <li className="text-base font-normal opacity-70">Fixture</li>
        <li className="text-base font-normal opacity-70">Teams</li>
        <li className="text-base font-normal opacity-70">Schedules</li>
        <button className="btn flex items-center gap-2 text-base font-semibold">
          {coins} Coin
          <BsCoin className="text-yellow-600 text-lg font-black"></BsCoin>
        </button>
      </div>
    </div>
  );
};

export default Header;
