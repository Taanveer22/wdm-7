import logofooter from "../assets/logo-footer.png";
const Footer = () => {
  return (
    <div className="pt-60 bg-indigo-950 text-white">
      <div className="mb-16">
        <img className="max-w-36 mx-auto" src={logofooter} alt="lf" />
      </div>
      <div className="flex gap-5 flex-col lg:flex-row justify-between lg:justify-evenly items-baseline-last lg:items-start">
        <div className="space-y-4">
          <h6 className="text-lg font-semibold">About Us</h6>
          <p className="text-base font-normal opacity-60">
            We are a passionate team dedicated to providing <br />
            the best services to our customers.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <h6 className="text-lg font-semibold">Quick Links</h6>
          <ul className="list-disc list-inside text-base font-normal opacity-60">
            <li>Home</li>
            <li>Service</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <form>
          <h6 className="text-lg font-semibold mb-4">Newsletter</h6>
          <fieldset className="w-80">
            <label className="text-base font-normal opacity-60">
              Subscribe to our newsletter for the latest updates.
            </label>
            <div className="join mt-4">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input input-bordered join-item"
              />
              <button className="btn btn-secondary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>
      <hr className="text-gray-400 mt-16"></hr>
      <div className="flex justify-center items-center py-8">
        <p className="text-base font-normal opacity-60">
          @2025 Rocket BPL All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
