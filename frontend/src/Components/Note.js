import React from "react";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";

export default function Note() {
  const context = useContext(noteContext);
  const { notes } = context;
  return (
    <div className="row my-3">
      {notes.map((element) => {
        return <Noteitem key={element._id} note={element} />;
      })}
    </div>
  );
}
