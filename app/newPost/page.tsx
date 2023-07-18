"use client";
import React from "react";

const NewPost = () => {
  const handleSubmit = () => {
    console.log("submit");
  };

  // TODO handle post request in api/route.ts

  return (
    <div>
      <h1 className="mx-auto w-max text-2xl">New Post</h1>
      <form onSubmit={handleSubmit} className="flex w-max flex-col gap-2">
        <div className="flex justify-between gap-2">
          <label htmlFor="title" className="self-center">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="bg-slate-300 p-2"
          />
        </div>
        <div className="flex justify-between gap-2">
          <label htmlFor="imageUrl" className="self-center">
            Image url
          </label>
          <input
            type="text"
            name="title"
            id="imageUrl"
            className="bg-slate-300 p-2"
          />
        </div>
        <div className="flex justify-between gap-4">
          <label htmlFor="content" className="py-2">
            Content
          </label>
          {/* TODO style this */}
          <textarea
            rows={20}
            name="title"
            id="content"
            className="bg-slate-300 p-2"
          />
        </div>
      </form>
    </div>
  );
};

export default NewPost;
