import { useEffect, useState } from "react";
import "./App.css";
import Bio from "./components/bio";
import Blogs from "./components/blogs";
import Contact from "./components/contact";
import Education from "./components/education";
import GitHubContributionHeatmap from "./components/gh-commit-graph";
import Projects from "./components/projects";
import Summary from "./components/summary";
import Visits from "./components/visits";
import Work from "./components/work";
import { motion } from "framer-motion";

const fetchBlogsFromHost = async (host) => {
  const query = `
    query Publication($host: String!) {
      publication(host: $host) {
        posts(first: 5) {
          edges {
            node {
              id
              title
              brief
              slug
              url
              subtitle
            }
          }
        }
      }
    }`;

  const response = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { host } }),
  });

  const { data } = await response.json();
  return data?.publication?.posts?.edges || [];
};

const fetchBlogs = async () => {
  const hosts = ["k8s-resources.hashnode.dev", "vishnumohanan.hashnode.dev"];
  const allPosts = await Promise.all(hosts.map(fetchBlogsFromHost));
  // Flatten the result and return
  return allPosts.flat();
};
function App() {
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

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchAndSetBlogs = async () => {
      const postsList = await fetchBlogs();
      setPosts(postsList);
    };
    fetchAndSetBlogs();
  }, []);
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
              <Visits count={count} />
              <Summary />
              <GitHubContributionHeatmap />
              <Projects />
              <Work />
              <Blogs posts={posts} />
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
              <Visits count={count} />
              <Summary />
              <GitHubContributionHeatmap />
              <Projects />
              <Blogs posts={posts} />
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
