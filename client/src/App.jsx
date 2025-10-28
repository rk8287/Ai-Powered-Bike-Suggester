import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Preferences from "./Pages/Preferences";
import Recommendations from "./Pages/Recommendations";
import BikeDetails from "./Pages/BikeDetails";
import Profile from "./Pages/Profile";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/preferences" element={<Preferences/>} />
        <Route path="/recommendations" element={<Recommendations/>} />
        <Route path="/details/:id" element={<BikeDetails/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;
