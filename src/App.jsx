import { useState } from "react";
import "./App.css";
import Bio from "./components/bio";
import Blogs from "./components/blogs";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Summary from "./components/summary";
import Visits from "./components/visits";

function App() {
  return (
    <div className="relative h-[100vh] w-[100vw] bg-slate-50 overflow-hidden">
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div className="overflow-auto h-[100%] py-[10rem]">
          <div className="mx-auto max-w-[670px] flex flex-col gap-10">
            <Bio />
            <Visits />
            <Summary />
            <Projects />
            <Blogs />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
