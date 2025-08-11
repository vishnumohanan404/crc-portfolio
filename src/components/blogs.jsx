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
  const [posts, setPosts] = useState({});
  const [pageInfo, setPageInfo] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [totalDocuments, setTotalDocuments] = useState(0);
  const [cursors, setCursors] = useState([null]); // page index → cursor

  async function fetchPosts(after = null, pageIndex = 0) {
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
                publishedAt
              }
            }
          }
        }
      }
    `;

    try {
      const res = await fetch(HASHNODE_API, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Cache-Control": "no-cache"
        },
        body: JSON.stringify({
          query,
          variables: { host: HOST, first: PAGE_SIZE, after },
        }),
      });

      const json = await res.json();
      const postsData = json.data.publication.posts;

      // Cache posts for this page
      setPosts((prev) => ({
        ...prev,
        [pageIndex]: postsData.edges,
      }));

      // Store pageInfo for this page
      setPageInfo((prev) => ({
        ...prev,
        [pageIndex]: postsData.pageInfo,
      }));

      // Store cursor for next page
      setCursors((prev) => {
        const updated = [...prev];
        updated[pageIndex + 1] = postsData.pageInfo.endCursor;
        return updated;
      });

      // Update totalDocuments and totalPages (only on first fetch to avoid inconsistencies)
      if (pageIndex === 0) {
        setTotalDocuments(postsData.totalDocuments);
        setTotalPages(Math.ceil(postsData.totalDocuments / PAGE_SIZE));
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  }

  // Initial fetch and refresh function
  async function refreshPosts() {
    // Clear cache and reset pagination
    setPosts({});
    setPageInfo({});
    setCursors([null]);
    setPage(1);
    
    // Fetch first page
    await fetchPosts(null, 0);
  }

  // Fetch posts whenever page changes
  useEffect(() => {
    if (!posts[page - 1]) {
      fetchPosts(cursors[page - 1], page - 1);
    }
  }, [page]);

  // Initial load
  useEffect(() => {
    refreshPosts();
  }, []);

  // Auto-refresh every 5 minutes to catch new posts
  useEffect(() => {
    const interval = setInterval(() => {
      refreshPosts();
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearInterval(interval);
  }, []);

  function goToPage(p) {
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
              <PaginationLink 
                onClick={() => goToPage(1)}
                className="text-muted-foreground cursor-pointer"
              >
                1
              </PaginationLink>
            </PaginationItem>
            {start > 2 && <PaginationEllipsis />}
          </>
        )}
        {pageButtons}
        {end < totalPages && (
          <>
            {end < totalPages - 1 && <PaginationEllipsis />}
            <PaginationItem>
              <PaginationLink 
                onClick={() => goToPage(totalPages)}
                className="text-muted-foreground cursor-pointer"
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
      </>
    );
  }

  const currentPosts = posts[page - 1] || [];

  return (
    <motion.div
      className="bg-white border-zinc-200 border rounded-lg flex flex-col"
      transition={transition}
      variants={variants}
    >
      <div className="w-full p-3 border-dotted border-spacing-2 border-x-0 border border-t-0 border-b-1 border-b-gray-400">
        <div className="flex justify-between items-center">
          <p className="font-sans font-medium">Blogs</p>
          <div className="text-sm text-gray-500">
            {totalDocuments} {totalDocuments === 1 ? 'Post' : 'Posts'}
            {/* <button 
              onClick={refreshPosts}
              className="ml-2 text-blue-500 hover:underline disabled:opacity-50"
              disabled={loading}
              title="Refresh to get latest posts"
            >
              {loading ? 'Refreshing...' : 'Refresh'}
            </button> */}
          </div>
        </div>
      </div>

      <div className="p-3 text-gray-600 flex flex-col gap-3">
        {loading && !currentPosts.length ? (
          <div className="text-sm text-gray-500 flex justify-center items-center p-8">
            <Spinner />
          </div>
        ) : (
          currentPosts.map(({ node }) => (
            <div className="flex justify-between flex-col gap-1" key={node.id}>
              <p className="font-semibold text-muted-foreground hover:underline underline-offset-4">
                <a
                  className="text-blue-500 cursor-pointer flex gap-2 items-center"
                  href={node.url}
                  target="_blank"
                  rel="noopener noreferrer"
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

      {totalPages > 1 && (
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
      )}
    </motion.div>
  );
}