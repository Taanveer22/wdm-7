import bannermain from "../assets/banner-main.png";
import bgshadow from "../assets/bg-shadow.png";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgshadow})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-gray-950 p-16 space-y-4 rounded-3xl mb-6"
    >
      <div className="flex justify-center items-center">
        <img className="max-w-3xs" src={bannermain} alt="bannermain" />
      </div>
      <h1 className="text-4xl font-bold text-center text-white">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p className="text-2xl font-medium text-center text-white">
        Beyond Boundaries Beyond Limits
      </p>
      <div className=" flex justify-center items-center">
        <button className="text-base font-bold btn ">Claim Free Credit</button>
      </div>
    </div>
  );
};

export default Banner;
