import React from "react";
import AddNotes from "./AddNotes";
import Note from "./Note";
import UpdateNotes from "./UpdateNotes";

export default function Home() {
  return (
    <div>
      <AddNotes />
      <UpdateNotes />
      <div className="mx-3">
        <h6>Your Notes</h6>
        <Note />
      </div>
    </div>
  );
}
