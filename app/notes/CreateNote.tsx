"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const createNote = async () => {
    await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //we send the data of the form as the body of the request
      body: JSON.stringify({
        title,
        content,
      }),
    });

    setTitle("");
    setContent("");

    router.refresh();
  };

  return (
    <div className="mt-4">
      <h1 className="text-xl font-bold">Create a new Note</h1>
      <form onSubmit={createNote} className="flex flex-col">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-1/2 border border-slate-600"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-1/2 border border-slate-600"
        />
        <button type="submit" className="w-max bg-slate-600 p-2 text-white">
          Create note
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
