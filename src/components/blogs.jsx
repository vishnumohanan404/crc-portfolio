import React, { useEffect, useState } from "react";

const fetchBlogs = async () => {
  const query = `
    query Publication($host: String = "vishnumohanan.hashnode.dev") {
        publication(host: $host) {
            posts(first: 10) {
                edges {
                    node {
                        title
                        brief
                        slug
                        url,
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
    body: JSON.stringify({ query }),
  });

  const { data } = await response.json();
  return data.publication.posts.edges;
};

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchAndSetBlogs = async () => {
      const postsList = await fetchBlogs();
      setPosts(postsList);
    };
    fetchAndSetBlogs();
  }, []);
  return (
    <div className="p-3  text-gray-600 flex flex-col gap-3">
      {posts.map(({ node }) => (
        <div className="flex justify-between flex-col gap-1" key={node.url}>
          <p className="font-semibold text-muted-foreground">
            <a className="text-blue-500" href={node.key}>
              {node.title}
            </a>
          </p>
          <p className="font-extralight text-sm">{node.brief}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
