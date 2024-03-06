const Footer = () => {
  return (
    <div className="w-full mt-20 h-fit flex sm:flex-row flex-col gap-10 py-20 justify-evenly items-center bg-zinc-900 text-zinc-100">
      <div className="flex flex-col gap-3 items-center text-zinc-200">
        <h3 className=" font-semibold text-xl text-zinc-200">Category</h3>
        <p className="  text-md text-zinc-400">Web Builder</p>
        <p className="  text-md text-zinc-400">Hosting</p>
        <p className="  text-md text-zinc-400">Data center</p>
        <p className="  text-md text-zinc-400">Robotic Automation</p>
      </div>

      <div className="flex flex-col gap-3 items-center text-zinc-200">
        <h3 className=" font-semibold text-xl text-zinc-200">Contact</h3>
        <p className="  text-md text-zinc-400">Contact</p>
        <p className="  text-md text-zinc-400">Privacy Policy</p>
        <p className="  text-md text-zinc-400">Term and Conditions</p>
        <p className="  text-md text-zinc-400">Categories </p>
        <p className="  text-md text-zinc-400">About </p>
      </div>
      <div>
        <h3 className=" font-semibold text-xl items-center text-zinc-200 my-3">
          Country
        </h3>
        <select
          className="px-4 py-1 rounded-lg items-center text-zinc-200 bg-zinc-800"
          name="country"
          id="country"
        >
          <option className=" px-2 py-1 text-md text-zinc-400" value="India">
            India
          </option>
          <option className="  text-md text-zinc-400" value="US">
            US
          </option>
          <option className="  text-md text-zinc-400" value="UK">
            Uk
          </option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
