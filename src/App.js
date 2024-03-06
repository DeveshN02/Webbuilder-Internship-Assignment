import "./App.css";
import data from "./data";
import Navbar from "./components/Navbar";
import { GoVerified } from "react-icons/go";
import { MdErrorOutline } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import Card from "./components/Card";
import Deals from "./components/Deals";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="w-full h-fit bg-orange-50">
      <Navbar />

      {/* mainpage */}

      <div className="lg:w-8/12 w-11/12 mx-auto flex flex-col gap-5 text-center lg:text-start py-10">
        <h1 className="text-5xl font-semibold text-zinc-800">
          Best Website builder in the US
        </h1>

        {/* update status */}
        <div className="flex justify-between border-y-4 py-2 gap-5 font-semibold text-xl flex-col sm:flex-row text-slate-900 items-center">
          <p className="flex gap-4 items-center">
            <span>
              {<GoVerified className="inline" />} Last Updated - Februry 22,
              2020
            </span>
            <span>
              {<MdErrorOutline className="inline" />} Advertising Disclosure
            </span>
          </p>
          <p>
            <span className="sm:block hidden">
              Top Relevant {<FaChevronDown className="inline cursor-pointer" />}
            </span>
          </p>
        </div>

        {/* feature bar */}

        <div className=" font-semibold text-slate-900 text-lg  w-full md:w-9/12 flex md:flex-row flex-col gap-5 justify-around items-center ">
          <p className="text-zinc-800 font-semibold text-lg hover:border-b-2 py-2 cursor-pointer">
            Tools
          </p>
          <p className="text-zinc-800 font-semibold text-lg hover:border-b-2 py-2 cursor-pointer">
            AWS Builder
          </p>
          <p className="text-zinc-800 font-semibold text-lg hover:border-b-2 py-2 cursor-pointer">
            Start Build
          </p>
          <p className="text-zinc-800 font-semibold text-lg hover:border-b-2 py-2 cursor-pointer">
            Build Supply
          </p>
          <p className="text-zinc-800 font-semibold text-lg hover:border-b-2 py-2 cursor-pointer">
            Toolling
          </p>
          <p className="text-zinc-800 font-semibold text-lg hover:border-b-2 py-2 cursor-pointer">
            Blue Hosting
          </p>
        </div>

        {/* card */}
        <Card data={data} />

        {/* other deal */}

        <h2 className="text-4xl mt-20 font-semibold text-zinc-800 text-center">
          Related Deals you might Like for
        </h2>
        <div className="flex  gap-3 md:flex-row flex-col items-center justify-between ">
          <Deals />
          <Deals />
          <Deals />
        </div>

        {/* signup  */}

        <div className="flex sm:justify-between justify-center gap-4 flex-wrap my-2  shadow-md items-center px-3 py-4">
          <h3 className="sm:text-2xl text-lg font-semibold text-zinc-800 text-center">
            Sign Up and get Exclusive special Deals
          </h3>
          <button className=" bg-blue-500 text-white font-semibold text-xl rounded-r-xl px-4 py-2">
            Sign Up
          </button>
        </div>
      </div>
      {/* footer */}

      <Footer />
    </div>
  );
}

export default App;
