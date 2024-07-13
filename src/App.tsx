import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Popularity from "./pages/Popularity";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/popularity" element={<Popularity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
