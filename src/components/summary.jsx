import React from "react";

const Summary = () => {
  return (
    <div className="bg-white border-zinc-200 border rounded-lg flex flex-col">
      <div className="w-full p-3 border-dotted border-spacing-2 border-x-0 border border-t-0 border-b-1 border-b-gray-400">
        <p className="font-sans font-medium ">Summary</p>
      </div>
      <div className="p-3  text-gray-600  font-extralight text-sm">
        <p className="font-sans">
          My journey began in 2021 as a software developer for a startup, where
          I focused on JavaScript. Over time, I transitioned into the DevOps
          realm, dedicating my efforts to building my profile in this field.
        </p>
        <br />
        <p>
          In my last job, I developed a strong interest in the DevOps culture
          and the software development lifecycle while working for a major tech
          client. This experience inspired me to switch from
          <span className="font-medium italic"> dev</span> to
          <span className="font-medium italic"> operations</span>
        </p>
      </div>
    </div>
  );
};

export default Summary;
