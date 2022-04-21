import React from "react";

export default function Noteitem(props) {
  const { note } = props;
  return (
    <div className="col md-3">
      <div className="card my-3" style={{ width: "20rem", height: "12rem" }}>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{note.title}</h5>
            <div>
              <i className="fa-solid fa-trash mx-2"></i>
              <i className="fa-solid fa-file-pen mx-2"></i>
            </div>
          </div>
          <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
}
