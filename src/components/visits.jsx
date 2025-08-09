"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};
const Visits = () => {
  const [count, setCount] = useState("");

  useEffect(() => {
    const sessionData = sessionStorage.getItem("count");

    // alert("Useeffect ran", sessionData);
    if (sessionData) {
      setCount(JSON.parse(sessionData));
    } else {
      (async () => {
        const updateCount = await fetch(
          import.meta.env.VITE_API_GATEWAY_ENDPOINT + "/visitors",
          {
            method: "PUT",
          }
        );
        const countObj = await new Response(updateCount.body).json();
        sessionStorage.setItem("count", JSON.stringify(countObj.count));
        setCount(countObj.count);
      })();
    }
  }, []);
  return (
    <motion.div
      className="w-min m-auto rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 "
      transition={transition}
      variants={variants}
    >
      <div className="rounded-[calc(1.5rem-1px)] p-1 py-0 bg-white dark:bg-gray-900">
        <span className="text-nowrap text-muted-foreground font-light text-sm px-1 whitespace-nowrap">
          <span className="font-medium">{count}</span> Visits
        </span>
      </div>
    </motion.div>
  );
};

export default Visits;
