import { useState } from "react";
import logo from "../assets/Complete-logo-removed-bg.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between h-20">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-14 sm:h-16" />
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex gap-10 text-lg font-medium text-gray-700">

          {[
            { name: "Home", link: "/" },
            { name: "About", link: "/#about" },
            { name: "Products", link: "/products" },
            { name: "Pricing", link: "/pricing" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="relative hover:text-[#2fa4a9] transition
                after:absolute after:left-0 after:-bottom-1 after:h-0.5
                after:w-0 after:bg-[#2fa4a9] after:transition-all
                hover:after:w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}

        </ul>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button
              className="bg-linear-to-r from-[#2fa4a9] to-[#6fd3c4]
              text-white px-6 py-2.5 rounded-xl shadow-md
              hover:shadow-xl hover:-translate-y-0.5
              transition duration-300"
            >
              Contact Us
            </button>
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-lg">

          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/#about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/#products" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <button className="bg-[#2fa4a9] text-white px-6 py-2.5 rounded-xl shadow-md">
              Contact Us
            </button>
          </Link>

        </ul>
      </div>

    </nav>
  );
}

export default Navbar;