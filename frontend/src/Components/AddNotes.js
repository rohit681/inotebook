import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

function AddNotes() {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "Default",
  });

  const onAdd = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };
  return (
    <div>
      <div className="container my-3">
        <h2>Add Notes</h2>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={(e) =>
                setNote({ ...note, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={(e) =>
                setNote({ ...note, [e.target.name]: e.target.value })
              }
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={onAdd}>
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNotes;
