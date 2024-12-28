const Education = () => {
  return (
    <div className="bg-white border-zinc-200 border rounded-lg flex flex-col">
      <div className="w-full p-3 border-dotted border-spacing-2 border-x-0 border border-t-0 border-b-1 border-b-gray-400">
        <p className="font-sans font-medium ">Education</p>
      </div>
      <div className="p-3  text-gray-600 flex flex-col gap-3">
        <div className="flex justify-between flex-col gap-1">
          <p className="font-semibold text-muted-foreground">
            Bachelors In Computer Applications{" "}
            <span className="ml-2 text-xs text-gray-600">2016 - 2019</span>
          </p>
          <p className="font-extralight text-sm">
            Acharya Institute of Graduate Studies{""}
            <span className="pl-2 ml-2 text-xs  border-l-[1px] border-l-gray-300">
              Bangalore University
            </span>
          </p>
        </div>
        <div className="flex justify-between flex-col gap-1">
          <p className="font-semibold text-muted-foreground">
            Masters In Computer Applications{""}
            <span className="ml-2 text-xs text-gray-600">2024 - 2026</span>
          </p>
          <p className="font-extralight text-sm">
            Online{""}
            <span className="pl-2 ml-2 text-xs  border-l-[1px] border-l-gray-300">
              Amrita Vishwa Vidyapeetham University
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
