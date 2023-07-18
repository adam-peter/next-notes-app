import Link from "next/link";
import React from "react";

const getPosts = async () => {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/posts/records",
    {
      cache: "no-store",
    },
  );

  const posts = await res.json();
  return posts.items;
};

const Blog = async () => {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="mx-auto w-max text-2xl">Blog</h1>
      {posts.map((post: any) => (
        <Link key={post.id} href={`blog/${post.id}`} className="px-4 py-2 bg-slate-200">
          {post.title}
        </Link>
      ))}
    </div>
  );
};

export default Blog;
