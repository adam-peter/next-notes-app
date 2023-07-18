import Post from "@/components/Post";
import React from "react";

const getPosts = async () => {
  const res = await fetch("http://127.0.0.1:8090/api/collections/posts/records", {
    cache: "no-store",
  });

  const posts = await res.json();
  return posts.items;
};

const Blog = async () => {
  const posts = await getPosts();

  return (
    <div>
      <h1>This is the blog page</h1>
      {posts.map((post: any) => <Post key={post.id} post={post}/>)}
    </div>
  );
};

export default Blog;
