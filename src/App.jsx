import { useState } from "react";
import "./App.css";
import Blogs from "./components/blogs";
import Contact from "./components/contact";
import Projects from "./components/projects";

function App() {

  return (
    <div className="relative h-[100vh] w-[100vw] bg-slate-50 overflow-hidden">
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div className="overflow-auto h-[100%] py-[10rem]">
          <div className="mx-auto max-w-[670px] flex flex-col gap-10">
            <div className="bg-white border-zinc-200 border w-[80%] mx-auto p-6 py-3 rounded-full flex justify-between items-center">
              <div>
                <p className="font-sans">Vishnu Mohan</p>
                <p className="font-sans font-light text-sm text-gray-500">
                  Software Engineer, DevOps | Ex - Rhombuz.io
                </p>
              </div>
              <div>
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  OPEN FOR WORK
                </span>
                <p
                  className="font-sans text-sm text-gray-500"
                  id="locationField"
                >
                  India, Remote
                </p>
              </div>
            </div>
            <div className="w-min m-auto rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
              <div className="rounded-[calc(1.5rem-1px)] p-1 py-0 bg-white dark:bg-gray-900">
                <span className="text-nowrap text-muted-foreground font-light text-sm">
                  153 Visits
                </span>
              </div>
            </div>
            <div className="bg-white border-zinc-200 border rounded-lg flex flex-col">
              <div className="w-full p-3 border-dotted border-spacing-2 border-x-0 border border-t-0 border-b-1 border-b-gray-400">
                <p className="font-sans font-medium ">Summary</p>
              </div>
              <div className="p-3  text-gray-600  font-extralight text-sm">
                <p className="font-sans">
                  My journey began in 2021, as a software developer for a
                  startup, working on JavaScript. Later on I moved to spend my
                  time working and building a profile on DevOps realm.
                </p>
                <br />
                <p>
                  During my last job I built an appetite for the
                  <span className="font-semibold"> DevOps</span> culture and
                  software development lifecycle at one of the big tech client
                  which I worked for, hence decided to switch from{" "}
                  <span className="font-medium italic">dev</span> to
                  <span className="font-medium italic"> operations</span>
                </p>
              </div>
            </div>
            <div className="bg-white border-zinc-200 border rounded-lg flex flex-col">
              <div className="w-full p-3 border-dotted border-spacing-2 border-x-0 border border-t-0 border-b-1 border-b-gray-400">
                <p className="font-sans font-medium ">Projects</p>
              </div>
              <Projects />
            </div>
            <div className="bg-white border-zinc-200 border rounded-lg flex flex-col">
              <div className="w-full p-3 border-dotted border-spacing-2 border-x-0 border border-t-0 border-b-1 border-b-gray-400">
                <p className="font-sans font-medium ">Blogs</p>
              </div>
              <Blogs />
            </div>
            <div className="bg-white border-zinc-200 border rounded-lg flex flex-col">
              <div className="w-full p-3 border-dotted border-spacing-2 border-x-0 border border-t-0 border-b-1 border-b-gray-400">
                <p className="font-sans font-medium ">Contact</p>
              </div>
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
