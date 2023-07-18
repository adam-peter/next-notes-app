//fetches all notes from pocketbase
//provides a form to create new notes

import Note from "@/components/Note";
import React from "react";
import PocketBase from "pocketbase";
import CreateNote from "./CreateNote";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

const getNotes = async () => {
  // const res = await fetch(
  //   "http://127.0.0.1:8090/api/collections/notes/records?page1&perPage=30",
  //   {cache: "no-store"}
  // );
  // const data = await res.json();

  const pb = new PocketBase("http://127.0.0.1:8090");
  const data = await pb.collection("notes").getList();

  return data?.items as any[];
};

const NotesPage = async () => {
  const notes = await getNotes();

  return (
    <div>
      <h1 className="mx-auto w-max text-2xl">Notes</h1>
      <CreateNote />
      <div className="grid grid-flow-col grid-rows-2 gap-2">
        {notes?.map((note) => <Note key={note.id} note={note} />)}
      </div>
    </div>
  );
};

export default NotesPage;
