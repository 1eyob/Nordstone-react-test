import "./App.css";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { Gallery } from "./pages/Gallery/Gallery";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Calculator from "./pages/Calculator/Calculator";
import { Calc } from "./pages/Calculator/Calc";
import Notification from "./pages/Notification/Notification";
import Home from "./pages/Home/Home";
function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Gallery /> */}
      {/* <Calculator /> */}
      {/* <Calc /> */}
      {/* <Notification /> */}
      {/* <Home /> */}

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/calculator" element={<Calc />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
