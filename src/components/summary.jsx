import React from "react";

const Summary = () => {
  return (
    <div className="bg-white border-zinc-200 border rounded-lg flex flex-col">
      <div className="w-full p-3 border-dotted border-spacing-2 border-x-0 border border-t-0 border-b-1 border-b-gray-400">
        <p className="font-sans font-medium ">Summary</p>
      </div>
      <div className="p-3  text-gray-600  font-extralight text-sm">
        <p className="font-sans">
          My journey began in 2021, as a software developer for a startup,
          working on JavaScript. Later on I moved to spend my time working and
          building a profile on DevOps realm.
        </p>
        <br />
        <p>
          During my last job I built an appetite for the
          <span className="font-semibold"> DevOps</span> culture and software
          development lifecycle at one of the big tech client which I worked
          for, hence decided to switch from{" "}
          <span className="font-medium italic">dev</span> to
          <span className="font-medium italic"> operations</span>
        </p>
      </div>
    </div>
  );
};

export default Summary;
