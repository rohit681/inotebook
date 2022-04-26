import React, { useEffect } from "react";
import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const initialNotes = [];

  const [notes, setNotes] = useState(initialNotes);

  useEffect(() => {
    const fetchNote = async () => {
      const response = await fetch(`${host}/fetchnotes`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1YWRhNTcwNjg2NGU2ZmVlMWMwOWUyIn0sImlhdCI6MTY1MDE3NTc3OX0.3i0ceby7h5Y3F3HfdIQwa_VzF4m3yEkarRAJacqq9oc",
        },
      });
      const data = await response.json();
      setNotes(data);
    };
    fetchNote();
  }, []);

  const addNote = async (title, description, tag) => {
    await fetch(`${host}/addNotes`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1YWRhNTcwNjg2NGU2ZmVlMWMwOWUyIn0sImlhdCI6MTY1MDE3NTc3OX0.3i0ceby7h5Y3F3HfdIQwa_VzF4m3yEkarRAJacqq9oc",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const res = await fetch(`${host}/fetchNotes`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1YWRhNTcwNjg2NGU2ZmVlMWMwOWUyIn0sImlhdCI6MTY1MDE3NTc3OX0.3i0ceby7h5Y3F3HfdIQwa_VzF4m3yEkarRAJacqq9oc",
      },
    });

    const data = await res.json();

    setNotes(data);
  };

  const deleteNote = async (id) => {
    await fetch(`${host}/deleteNote/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1YWRhNTcwNjg2NGU2ZmVlMWMwOWUyIn0sImlhdCI6MTY1MDE3NTc3OX0.3i0ceby7h5Y3F3HfdIQwa_VzF4m3yEkarRAJacqq9oc",
      },
    });

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  const updateNote = async (note) => {
    // connection to backend
    await fetch(`${host}/updateNote/${note.id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1YWRhNTcwNjg2NGU2ZmVlMWMwOWUyIn0sImlhdCI6MTY1MDE3NTc3OX0.3i0ceby7h5Y3F3HfdIQwa_VzF4m3yEkarRAJacqq9oc",
      },
      body: JSON.stringify({
        title: note.title,
        description: note.description,
        tag: note.tag,
      }),
    });

    //update a note
    for (var i = 0; i < notes.length; i++) {
      if (notes[i]._id === note.id) {
        notes[i].title = note.title;
        notes[i].description = note.description;
      }
    }
  };

  return (
    <noteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, updateNote }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
