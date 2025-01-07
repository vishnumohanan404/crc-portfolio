import { motion } from "framer-motion";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};
const Work = () => {
  return (
    <motion.div
      className="bg-white border-zinc-200 border rounded-lg flex flex-col"
      transition={transition}
      variants={variants}
    >
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
        <p>
          {" "}
          Helped build a design system, dashboards, charts, nodes and more.
        </p>
      </div>
    </motion.div>
  );
};

export default Work;
