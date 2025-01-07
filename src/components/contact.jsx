import { motion } from "framer-motion";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};
const Contact = () => {
  return (
    <motion.div
      className="bg-white border-zinc-200 border rounded-lg flex flex-col"
      transition={transition}
      variants={variants}
    >
      <div className="w-full p-3 border-dotted border-spacing-2 border-x-0 border border-t-0 border-b-1 border-b-gray-400">
        <p className="font-sans font-medium ">Contact</p>
      </div>
      <div className="m-3 bg-gray-300 py-8 rounded-md flex gap-2 justify-center">
        <div className=" p-1 rounded-3xl flex flex-col justify-between border border-gray-400">
          <div className="flex gap-4 rounded-3xl">
            <a
              href="https://www.linkedin.com/in/404vishnu/"
              className="bg-white font-sans font-thin text-sm rounded-3xl px-3 border border-gray-400 p-1 cursor-pointer hover:text-blue-500"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/vishnumohanan404"
              className="bg-white font-sans font-thin text-sm rounded-3xl px-3 border border-gray-400 p-1 cursor-pointer hover:text-blue-500"
            >
              GitHub
            </a>
            <a
              href="https://vishnumohanan.hashnode.dev/"
              className="bg-white font-sans font-thin text-sm rounded-3xl px-3 border border-gray-400 p-1 cursor-pointer hover:text-blue-500"
            >
              Hashnode
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
