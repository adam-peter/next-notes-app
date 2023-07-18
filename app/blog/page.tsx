import Link from "next/link";
import React from "react";
import Button from "@/components/Button";

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

  const handleWriteNewBlogpost = () => {};

  return (
    <div>
      <h1 className="mx-auto w-max text-2xl">Blog</h1>
      <div className="flex justify-between">
        <div className="grid grid-cols-6 gap-2">
          {posts.map((post: any) => (
            <Link
              key={post.id}
              href={`blog/${post.id}`}
              className="bg-slate-200 px-4 py-2"
            >
              {post.title}
            </Link>
          ))}
        </div>
        <Link href="/newPost" className="rounded bg-blue-400 p-2">
          Write new Blogpost
        </Link>
      </div>
    </div>
  );
};

export default Blog;
