import image from "../assets/img1.jpg";
import Rate from "./Rate";
import { FaChevronDown } from "react-icons/fa";

function Card({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div className="w-full flex gap-5 border-b-4 shadow-lg flex-wrap flex-col lg:flex-row items-center justify-between my-5 border-2 p-3">
          {/* images */}
          <div className="relative">
            <p className="absolute z-20 -top-4 -left-2 text-blue-900 text-3xl font-bold">
              {item.id}
            </p>
            <img
              className="h-[10rem]  rounded-md overflow-hidden"
              src={image}
              alt="imagedsnj"
            />
          </div>

          {/* content */}
          <div className="sm:w-6/12 w-10/12 flex flex-col gap-3">
            <p className="text-zinc-700 text-lg ">
              <span className="text-xl text-black font-semibold">
                {item.title}
              </span>
              {item.titleData}
            </p>

            <p className="text-xl text-black font-semibold">
              Main Highlights :{" "}
              <span className="text-zinc-600 text-lg ">{item.highlight}</span>
            </p>

            <p className="text-blue-500 font=bold text-lg cursor-pointer">
              Show more {<FaChevronDown className="inline" />}
            </p>
          </div>

          {/* rating section */}
          <Rate rating={item.rating} status={item.status} />
        </div>
      ))}
    </div>
  );
}

export default Card;
