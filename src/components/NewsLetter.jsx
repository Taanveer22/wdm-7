const NewsLetter = () => {
  return (
    <div className="relative top-45">
      <div className="space-y-4 py-22 rounded-3xl bg-linear-to-r from-cyan-100 to-yellow-100 mb-6 border-2 border-solid border-slate-100 ouline-2 outline-solid outline-slate-300 outline-offset-8">
        <h1 className="text-lg lg:text-3xl font-bold text-center">
          Subscribe to our Newsletter
        </h1>
        <p className="text-sm lg:text-xl font-medium opacity-70 text-center">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="flex justify-center items-center">
          <div>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="text-xs lg:text-base font-semibold opacity-60 border-2 border-gray-300 rounded-md p-2"
            />
            <button className="btn btn-secondary btn-sm lg:btn-lg  text-xs lg:text-base font-bold ml-5">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
