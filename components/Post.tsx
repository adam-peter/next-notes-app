import Image from "next/image";
import React from "react";

type Props = {
  post: any;
};

const Post = ({ post }: Props) => {

  return (
    <div>
      <h1>{post.title}</h1>
      <Image src={post.imageUrl} alt={`${post.title} image`} width={500} height={500}/>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
