import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import FiltroTarea from "./pages/FiltroTarea.jsx";
import Navbar from "./components/Navbar.jsx";
import "./styles/main.scss";


function App() {
  return (
    <>  
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task/:status" element={<FiltroTarea />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
