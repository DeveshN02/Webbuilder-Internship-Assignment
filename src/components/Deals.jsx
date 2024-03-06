import image from "../assets/img1.jpg";

const Deals = () => {
  return (
    <div className="flex flex-col gap-4 my-6 justify-center items-center shadow-xl p-4">
      <img src={image} className="h-[10rem] rounded-sm" alt="imageajd" />
      <div>
        <span className="px-2 py-1 bg-blue-200 bg-opacity-100 text-md  text-slate-900 rounded-md mx-2">
          20% Off
        </span>
        <span className="px-2 py-1 bg-blue-200 bg-opacity-100 text-md  text-slate-900 rounded-md mx-2">
          Limited Time
        </span>
      </div>
      <h3 className="text-zinc-600 font-bold text-2xl">Web Builder 1</h3>
      <p className="text-zinc-400  text-lg">
        Computer Modern Classic with Wix Support
      </p>
      <h3 className="text-2xl font-semibold text-zinc-800">
        $ 39.6{" "}
        <strike className="text-lg font-semibold text-zinc-500">$ 49.96</strike>{" "}
        <span className="text-red-500 font-semibold text-lg">20% Off</span>
      </h3>
      <button className="w-11/12 py-2 bg-blue-500 text-white text-xl font-semibold rounded-lg hover:bg-blue-200 hover:text-blue-600 transition-all duration-300 hover-border-2">
        View Deal
      </button>
    </div>
  );
};

export default Deals;
