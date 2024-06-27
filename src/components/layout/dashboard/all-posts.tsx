"use client";
import { useRetrieveAllPostsQuery } from "@/lib/features/posts-endpoints";
import PostCard from "./post-card";
import SectionHeader from "./section-header";

const AllPosts = () => {
  const { isLoading, data } = useRetrieveAllPostsQuery(null);
  return (
    <>
      <SectionHeader name="All Posts" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.results.map((post) => {
          return <PostCard data={post} />;
        })}
      </div>
    </>
  );
};

export default AllPosts;
