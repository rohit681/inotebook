import React from "react";

export default function Noteitem(props) {
  const { note } = props;
  return (
    <div className="col md-3">
      <div className="card my-3" style={{ width: "18rem", height: "12rem" }}>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
}
