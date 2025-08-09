"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Spinner } from "@/components/ui/shadcn-io/spinner";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const HASHNODE_API = "https://gql.hashnode.com";
const HOST = "vishnumohanan.hashnode.dev";
const PAGE_SIZE = 5;

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [pageInfo, setPageInfo] = useState({
    endCursor: null,
    hasNextPage: false,
  });
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [cursors, setCursors] = useState([null]); // page → cursor

  async function fetchPosts(after = null) {
    setLoading(true);

    const query = `
      query Publication($host: String!, $first: Int!, $after: String) {
        publication(host: $host) {
          posts(first: $first, after: $after) {
            totalDocuments
            pageInfo {
              hasNextPage
              endCursor
            }
            edges {
              node {
                id
                title
                subtitle
                url
              }
            }
          }
        }
      }
    `;

    const res = await fetch(HASHNODE_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        variables: { host: HOST, first: PAGE_SIZE, after },
      }),
    });

    const json = await res.json();
    const postsData = json.data.publication.posts;
    setPosts(postsData.edges);
    setPageInfo(postsData.pageInfo);
    setTotalPages(Math.ceil(postsData.totalDocuments / PAGE_SIZE));
    setLoading(false);
  }

  useEffect(() => {
    fetchPosts(cursors[page - 1]);
  }, [page]);

  function goToPage(p) {
    if (p > page && pageInfo.hasNextPage && !cursors[p - 1]) {
      // Store new cursor for this page
      setCursors((prev) => {
        const updated = [...prev];
        updated[p - 1] = pageInfo.endCursor;
        return updated;
      });
    }
    setPage(p);
  }

  function nextPage() {
    if (page < totalPages) goToPage(page + 1);
  }

  function prevPage() {
    if (page > 1) goToPage(page - 1);
  }

  function renderPageNumbers() {
    const maxButtons = 3;
    let start = Math.max(1, page - 1);
    let end = Math.min(totalPages, start + maxButtons - 1);

    // Adjust start if we’re near the end
    if (end - start < maxButtons - 1) {
      start = Math.max(1, end - maxButtons + 1);
    }

    const pageButtons = [];
    for (let i = start; i <= end; i++) {
      pageButtons.push(
        <PaginationItem key={i}>
          <PaginationLink
            isActive={i === page}
            onClick={() => goToPage(i)}
            className={"text-muted-foreground cursor-pointer"}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return (
      <>
        {start > 1 && (
          <>
            <PaginationItem>
              <PaginationLink onClick={() => goToPage(1)}>1</PaginationLink>
            </PaginationItem>
            {start > 2 && <PaginationEllipsis />}
          </>
        )}
        {pageButtons}
        {end < totalPages && (
          <>
            {end < totalPages - 1 && <PaginationEllipsis />}
            <PaginationItem>
              <PaginationLink onClick={() => goToPage(totalPages)}>
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
      </>
    );
  }

  return (
    <motion.div
      className="bg-white border-zinc-200 border rounded-lg flex flex-col"
      transition={transition}
      variants={variants}
    >
      <div className="w-full p-3 border-dotted border-spacing-2 border-x-0 border border-t-0 border-b-1 border-b-gray-400">
        <p className="font-sans font-medium">Blogs</p>
      </div>

      <div className="p-3 text-gray-600 flex flex-col gap-3">
        {loading ? (
          <div className="text-sm text-gray-500 flex justify-center items-center p-8">
            <Spinner />
          </div>
        ) : (
          posts.map(({ node }) => (
            <div className="flex justify-between flex-col gap-1" key={node.id}>
              <p className="font-semibold text-muted-foreground hover:underline underline-offset-4">
                <a
                  className="text-blue-500 cursor-pointer flex gap-2 items-center"
                  href={node.url}
                  target="_blank"
                >
                  {node.title}
                  <ExternalLinkIcon />
                </a>
              </p>
              <p className="font-extralight text-sm">{node.subtitle}</p>
            </div>
          ))
        )}
      </div>

      <div className="border-t border-gray-200 p-2">
        <Pagination className={"flex justify-end"}>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={prevPage}
                className={
                  page === 1
                    ? "pointer-events-none opacity-50 text-muted-foreground"
                    : "text-muted-foreground cursor-pointer"
                }
              />
            </PaginationItem>
            {renderPageNumbers()}
            <PaginationItem>
              <PaginationNext
                onClick={nextPage}
                className={
                  page === totalPages
                    ? "pointer-events-none opacity-50 text-muted-foreground"
                    : "text-muted-foreground cursor-pointer"
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </motion.div>
  );
}
