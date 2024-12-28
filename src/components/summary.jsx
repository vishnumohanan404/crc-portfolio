const Summary = () => {
  return (
    <div className="bg-white border-zinc-200 border rounded-lg flex flex-col">
      <div className="w-full p-3 border-dotted border-spacing-2 border-x-0 border border-t-0 border-b-1 border-b-gray-400">
        <p className="font-sans font-medium ">Summary</p>
      </div>
      <div className="p-3 space-y-2 text-gray-600  font-extralight text-sm">
        <p className="font-sans">
          Started building <span className="font-medium italic">UIs</span> from
          2021.
        </p>
        <p>
          Later picked interest in
          <span className="font-medium italic"> DevOps</span> roles and now
          trying to get into one.
        </p>
      </div>
    </div>
  );
};

export default Summary;
