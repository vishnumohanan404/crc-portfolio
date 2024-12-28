import { useEffect, useState } from "react";

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
    <div className="w-min m-auto rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
      <div className="rounded-[calc(1.5rem-1px)] p-1 py-0 bg-white dark:bg-gray-900">
        <span className="text-nowrap text-muted-foreground font-light text-sm px-1 whitespace-nowrap">
          <span className="font-medium">{count}</span> Visits
        </span>
      </div>
    </div>
  );
};

export default Visits;
