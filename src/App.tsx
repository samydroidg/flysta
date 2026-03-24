import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import "./App.css";
import Home from "./Pages/Home";
import Contact from "./Pages/ContactUs";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Pricing from "./Pages/Pricing";
import Product from "./Pages/FlystaTMS";
import Careers from "./Pages/Careers";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/products" element={<Product />} />
        <Route path="/career" element={<Careers />} />
      </Routes>

      <Footer />

      <Analytics />
    </>
  );
}

export default App;