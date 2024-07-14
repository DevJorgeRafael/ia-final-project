import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Popularity from "./pages/Popularity";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/popularity" element={<Popularity />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
