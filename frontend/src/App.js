import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";

// ✅ Main pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Properties from "./pages/Properties";
import Blog from "./pages/BlogPage";
import Contact from "./pages/ContactPage";
import About from "./pages/About";

// ✅ Dropdown pages
import ResidentialProperties from "./pages/ResidentialProperties";
import CommercialProperties from "./pages/CommercialProperties";
import RentLeaseServices from "./pages/RentLeaseServices";
import ServicesSection from "./components/ServicesSection"; // component

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* 🏠 Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

          {/* 🔐 Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* 🏡 Properties Dropdown */}
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/residential" element={<ResidentialProperties />} />
          <Route path="/properties/commercial" element={<CommercialProperties />} />

          {/* 🛠️ Services Dropdown */}
          <Route path="/services/rent-lease" element={<RentLeaseServices/>} />
          <Route path="/services/buy-sell" element={<ServicesSection />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
