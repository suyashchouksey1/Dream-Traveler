import "./index.css";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";

import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Package from "./Pages/Package";
import Destination from "./Pages/Destination";
import Booking from "./Pages/Booking";
import Process from "./Pages/Process";
import Guide from "./Pages/Guide";
import Footer from "./Components/Footer";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/packages" element={<Package />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/booking" element={<ProtectedRoute> <Booking/> </ProtectedRoute>} />
        <Route path="/process" element={<Process />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
