import { IoSearch } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [searchbox, setsearchbox] = useState([""]);

  function handleChange(event) {
    setsearchbox(event.target.value);
  }
  console.log(searchbox, "is the value of search");
  return (
    <div className="w-full py-5 gap-20  text-zinc-300 bg-stone-900 flex items-center md:justify-center justify-between md:flex-row flex-col flex-wrap">
      <div className="relative">
        <label
          className="text-black bg-opacity-80 absolute left-1 top-2 text-xl font-bold "
          htmlFor="search"
        >
          {<IoSearch />}
        </label>
        <input
          id="search"
          type="text"
          className="outline-none rounded-md text-zinc-900 px-7 py-1 font-semibold text-xl "
          name="searchBox"
          value={searchbox}
          onChange={handleChange}
          placeholder="Search Here"
        />
      </div>

      <span className="text-xl font-semibold cursor-pointer p-2 border-2 rounded-md border-transparent sm:block hidden hover:border-zinc-400  text-zinc-300">
        Categories
      </span>
      <span className="text-xl font-semibold cursor-pointer p-2 border-2 rounded-md border-transparent sm:block hidden  hover:border-zinc-400  text-zinc-300">
        Website Builders
      </span>
      <span className="text-xl font-semibold cursor-pointer p-2 border-2 rounded-md border-transparent sm:block hidden  hover:border-zinc-400  text-zinc-300">
        Todays deals
      </span>
    </div>
  );
};

export default Navbar;
