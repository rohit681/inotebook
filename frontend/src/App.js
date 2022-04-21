import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./context/notes/NoteState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alert from "./Components/Alert";
import AlertState from "./context/Alert/AlertState";

function App() {
  return (
    <div className="App">
      <AlertState>
        <NoteState>
          <BrowserRouter>
            <Navbar />
            <Alert />
            <div className="container">
              <Routes>
                <Route exact path="home" element={<Home />} />
                <Route exact path="about" element={<About />} />
              </Routes>
            </div>
          </BrowserRouter>
        </NoteState>
      </AlertState>
    </div>
  );
}

export default App;
