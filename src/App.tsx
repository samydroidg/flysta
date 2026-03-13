import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Contact from "./Pages/ContactUs";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Pricing from "./Pages/Pricing";
import Product from "./Pages/FlystaTMS";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/products" element={<Product />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;