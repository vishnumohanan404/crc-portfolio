import { motion } from "framer-motion";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const Blogs = ({posts}) => {
  
  return (
    <motion.div
      className="bg-white border-zinc-200 border rounded-lg flex flex-col"
      transition={transition}
      variants={variants}
    >
      <div className="w-full p-3 border-dotted border-spacing-2 border-x-0 border border-t-0 border-b-1 border-b-gray-400">
        <p className="font-sans font-medium ">Blogs</p>
      </div>
      <div className="p-3  text-gray-600 flex flex-col gap-3">
        {posts.map(({ node }) => (
          <div className="flex justify-between flex-col gap-1" key={node.url}>
            <p className="font-semibold text-muted-foreground">
              <a className="text-blue-500 cursor-pointer" href={node.url}>
                {node.title}
              </a>
            </p>
            <p className="font-extralight text-sm">{node.subtitle}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Blogs;
