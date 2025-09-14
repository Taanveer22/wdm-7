const NewsLetter = () => {
  return (
    <div className="relative top-45">
      <div className="space-y-4 py-22 rounded-3xl bg-linear-to-r from-cyan-100 to-yellow-100 mb-6 border-2 border-solid border-slate-100 ouline-2 outline-solid outline-slate-300 outline-offset-8">
        <h1 className="text-3xl font-bold text-center">
          Subscribe to our Newsletter
        </h1>
        <p className="text-xl font-medium opacity-70 text-center">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="flex justify-center items-center">
          <div>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="text-base font-semibold opacity-60 py-3 px-6 border-2 border-gray-300 rounded-md mr-5"
            />
            <button className="btn btn-secondary text-base font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
