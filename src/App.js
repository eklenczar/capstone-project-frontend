import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFoster } from "./components/fostersSlice";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FosterHeader from "./components/FosterHeader";
import Header from "./components/Header";
import Home from './components/Home';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import KittenContainer from "./components/KittenContainer";

function App() {
  const foster = useSelector((state) => state.fosters);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((foster) => {
          dispatch(setFoster(foster));
        });
      }
    });
  }, [dispatch]);

  console.log(foster)

  return (
    <div className="App">
      {foster ? (
        <div>
          <FosterHeader />
          <div>
            <h1>Welcome {foster.name}!</h1>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/kittens" element={<KittenContainer />} />
          </Routes>
        </div>
      ) : (
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
