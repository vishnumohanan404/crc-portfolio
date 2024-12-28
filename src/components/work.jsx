const Work = () => {
  return (
    <div className="bg-white border-zinc-200 border rounded-lg flex flex-col">
      <div className="w-full p-3 border-dotted border-spacing-2 border-x-0 border border-t-0 border-b-1 border-b-gray-400">
        <p className="font-sans font-medium ">Work</p>
      </div>
      <div className="p-3 space-y-2 text-gray-600  font-extralight text-sm">
        <p className="font-extralight text-sm">
          Frontend Developer
          <span className="pl-2 ml-2 text-xs font-medium  border-l-[1px] border-l-gray-300">
            Rhombuz.io <span className="font-medium italic"> (2021-2023)</span>
          </span>
        </p>
        <p> Helped build a design system, dashboards, charts, nodes and more.</p>
      </div>
    </div>
  );
};

export default Work;
