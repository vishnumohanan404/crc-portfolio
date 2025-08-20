import { motion } from "framer-motion";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};
const Summary = () => {
  return (
    <motion.div
      className="bg-white border-zinc-200 border rounded-lg flex flex-col"
      transition={transition}
      variants={variants}
    >
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
          <span className="font-medium italic"> Infrastructure</span> &
          <span className="font-medium italic"> DevOps</span> space, focusing on{" "}
          <span className="font-medium italic">Kubernetes</span> and{" "}
          <span className="font-medium italic">Cloud Native</span> tech.
        </p>
      </div>
    </motion.div>
  );
};

export default Summary;
