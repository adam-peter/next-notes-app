import Image from "next/image";
import React from "react";

type Props = {
  params: {
    postId: string;
  };
};

const getPost = async (postId: string) => {
  console.log(postId);

  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/posts/records/${postId}`,
  );
  const post = await res.json();

  return post;
};

const Post = async ({ params }: Props) => {
  const post: any = await getPost(params.postId);

  return (
    <div>
      <h1>{post.title}</h1>
      <Image
        src={post.imageUrl}
        alt={`${post.title} image`}
        width={500}
        height={500}
      />
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
