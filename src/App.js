import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Frontend from "./components/Frontend/Frontend";
import Backend from "./components/Backend/Backend";
import Home from "./components/Frontend/Home";
import Admin from "./components/Backend/Admin";
import Header from "./components/Frontend/Header";
import Quotes from "./components/Frontend/Quotes";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Frontend />}>
          <Route index element={<Home />} />
          <Route path="/quotes" element={<Quotes />} />

        </Route>

        <Route path="/admin" element={<Backend />}>
          <Route index element={<Admin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
