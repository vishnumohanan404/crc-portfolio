const Bio = () => {
  return (
    <div className="bg-white border-zinc-200 border md:w-[80%] w-[100%] mx-auto p-6 py-3 rounded-full flex justify-between items-center">
      <div>
        <p className="font-sans">Vishnu Mohan</p>
        <p className="font-sans font-light text-sm text-gray-600">
          Software Engineer
        </p>
      </div>
      <div className="flex-col gap-1 items-center md:flex hidden">
        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          OPEN FOR WORK
        </span>
        <p className="font-sans text-xs text-gray-500 hidden md:block">
          India, Remote
        </p>
      </div>
    </div>
  );
};

export default Bio;
