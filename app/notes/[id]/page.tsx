import React from "react";

const getNote = async (noteId: string) => {
  //retrieves individual item from database based on its id
  //this is a dynamic route - wont cache every request; we still customize it - add Incremental Static Regeneration after 10 secs
  
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    { next: { revalidate: 10 } },
  );

  const data = await res.json();
  return data;
};

const NotePage = async ({ params }: any) => {
  const note = await getNote(params.id);

  return (
    <div className="mx-auto w-max bg-slate-200">
      <div>
        <h1>Note {note.id} Page</h1>
        <p className="text-xl font-bold">{note.title}</p>
        <p>{note.content}</p>
        <p>{note.created}</p>
      </div>
    </div>
  );
};

export default NotePage;
