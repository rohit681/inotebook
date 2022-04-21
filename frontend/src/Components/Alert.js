import React, { useContext } from "react";
import alertContext from "../context/Alert/alertContext";

export default function Alert() {
  const context = useContext(alertContext);
  const { alert } = context;
  return (
    alert && (
      <div>
        <div class="alert alert-primary" role="alert">
          {alert.message}
        </div>
      </div>
    )
  );
}
