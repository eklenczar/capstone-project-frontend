import { Routes, Route } from "react-router-dom";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import KittenContainer from "./components/KittenContainer";

function App() {
  return (
    <div className="App">
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kittens" element={<KittenContainer />} />
      </Routes>
    </div>
  );
}

export default App;
