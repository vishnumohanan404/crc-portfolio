import "./App.css";
import Bio from "./components/bio";
import Blogs from "./components/blogs";
import Contact from "./components/contact";
import Education from "./components/education";
import Projects from "./components/projects";
import Summary from "./components/summary";
import Visits from "./components/visits";
import Work from "./components/work";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <div className="hidden md:block relative h-[100vh] w-[100vw] bg-slate-50 overflow-hidden">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
          <div className="overflow-auto h-[100%] py-[10rem]">
            <motion.div
              className="mx-auto max-w-[670px] flex flex-col gap-10"
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.04 }}
            >
              <Bio />
              <Visits />
              <Summary />
              <Projects />
              <Work />
              <Blogs />
              <Education />
              <Contact />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="md:hidden absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="p-3 absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]">
          <div className="h-[100%] py-[10rem] pt-[8rem]">
            <div className="mx-auto max-w-[670px] flex flex-col gap-10 pb-3">
              <div className="flex-col gap-1 items-center flex">
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  OPEN FOR WORK
                </span>
                <p className="font-sans text-xs text-gray-500">India, Remote</p>
              </div>
              <Bio />
              <Visits />
              <Summary />
              <Projects />
              <Blogs />
              <Education />
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
