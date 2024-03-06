import React from "react";
import { FaRegStar } from "react-icons/fa";

function Rate({ rating, status }) {
  return (
    <div className=" sm:w-[10rem] w-10/12 flex flex-col items-center gap-3 justify-end">
      <div className="p-5 bg-blue-100 rounded-md bg-opacity-70 flex flex-col items-center gap-1">
        <p className="text-blue-900 font-semibold text-xl">{rating}</p>

        <p className="text-blue-600 font-semibold text-lg">{status}</p>
        <p className="bg-white-500">
          {<FaRegStar className="inline  text-orange-400" />}
          {<FaRegStar className="inline  text-orange-400" />}
          {<FaRegStar className="inline  text-orange-400" />}
          {<FaRegStar className="inline  text-orange-400" />}
          {<FaRegStar className="inline  text-orange-400" />}
        </p>
      </div>
      <button className=" bg-blue-500 text-white font-semibold text-xl rounded-xl w-11/12 py-2">
        View
      </button>
    </div>
  );
}

export default Rate;
