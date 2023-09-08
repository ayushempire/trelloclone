import Board from "./components/Board";
import HomePage from "./screens/Homepage";
import Navbar from "./screens/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/Board" element={<Board />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
