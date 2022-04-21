import React, { useState } from "react";
import AlertContext from "./alertContext";

const AlertState = (props) => {
  const [alert, setAlert] = useState({
    type: "",
    message: "",
  });

  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
