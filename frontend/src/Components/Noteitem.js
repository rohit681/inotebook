import React, { useContext } from "react";
import alertContext from "../context/Alert/alertContext";
import noteContext from "../context/notes/noteContext";
import UpdateNotes from "./UpdateNotes";
// import UpdateNotes from "./UpdateNotes";

export default function Noteitem(props) {
  const noteCon = useContext(noteContext);
  const context = useContext(alertContext);
  const { deleteNote, updateNote } = noteCon;
  const { setAlert } = context;
  const { note } = props;

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const onDel = () => {
    deleteNote(note._id);
    showAlert("Note deleted Successfully", "Delete");
  };

  const onClickUpdate = (note) => {};

  return (
    <div className="col md-3">
      <div className="card my-3" style={{ width: "20rem", height: "12rem" }}>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{note.title}</h5>
            <div>
              <i className="fa-solid fa-trash mx-2" onClick={onDel}></i>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={() => onClickUpdate(note)}
                style={{ borderColor: "transparent" }}
              >
                <i
                  className="fa-solid fa-file-pen mx-2"
                  // onClick={() =>
                  //   showAlert("Note updated Successfully", "Update")
                  // }
                ></i>
              </button>
            </div>
          </div>
          <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
}
