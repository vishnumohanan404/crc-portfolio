import { motion } from "framer-motion";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};
const Education = () => {
  return (
    <motion.div
      className="bg-white border-zinc-200 border rounded-lg flex flex-col"
      transition={transition}
      variants={variants}
    >
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
    </motion.div>
  );
};

export default Education;
