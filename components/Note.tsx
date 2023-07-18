import React from "react";
import Link from "next/link";

const Note = ({ note }: any) => {
  const { id, title, content, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className="w-full rounded bg-slate-600 p-4 text-white no-underline transition-colors duration-200 hover:bg-slate-700">
        <div className="mx-auto w-max">
          <h1>{title}</h1>
          <p>{content}</p>
          <p>{created}</p>
        </div>
      </div>
    </Link>
  );
};

export default Note;
