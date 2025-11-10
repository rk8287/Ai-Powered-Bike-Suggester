import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Preferences from "./Pages/Preferences";
import Recommendations from "./Pages/Recommendations";
import BikeDetails from "./Pages/BikeDetails";
import Profile from "./Pages/Profile";
import FormSuccess from "./Pages/FormSuccess";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import TestRide from "./Pages/TestRide";
import Payment from "./Pages/Payment";


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
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/test-ride/booking" element={<TestRide/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/success" element={<FormSuccess/>} />
      </Routes>
    </Router>
  );
}

export default App;
