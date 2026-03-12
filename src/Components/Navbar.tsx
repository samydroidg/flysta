import { useState } from "react";
import logo from "../assets/Complete-logo-removed-bg.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-lg shadow-sm">
      <div className="max-w-350 mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between h-20">
        {/* LOGO */}
        <Link to="/">
          <img src={logo} alt="logo" className="h-14 sm:h-16" />
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex gap-12 text-lg font-medium text-gray-700">
          <li>
            <Link
              to="/#home"
              className="relative hover:text-black transition
              after:absolute after:left-0 after:-bottom-1 after:h-0.5
              after:w-0 after:bg-black after:transition-all hover:after:w-full"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/#about"
              className="relative hover:text-black transition
              after:absolute after:left-0 after:-bottom-1 after:h-0.5
              after:w-0 after:bg-black after:transition-all hover:after:w-full"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/#products"
              className="relative hover:text-black transition
              after:absolute after:left-0 after:-bottom-1 after:h-0.5
              after:w-0 after:bg-black after:transition-all hover:after:w-full"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              to="/#pricing"
              className="relative hover:text-black transition
              after:absolute after:left-0 after:-bottom-1 after:h-0.5
              after:w-0 after:bg-black after:transition-all hover:after:w-full"
            >
              Pricing
            </Link>
          </li>
        </ul>

        {/* CONTACT BUTTON */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button
              className="bg-[#2fa4a9] text-white px-6 py-2.5 rounded-xl
          shadow-md hover:shadow-lg hover:-translate-y-px transition"
            >
              Contact Us
            </button>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center gap-6 py-8 text-lg">
            <li>
              <Link to="/#home" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/#about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>

            <li>
              <Link to="/#products" onClick={() => setMenuOpen(false)}>
                Products
              </Link>
            </li>

            <li>
              <Link to="/#pricing" onClick={() => setMenuOpen(false)}>
                Pricing
              </Link>
            </li>

            <Link to="/contact">
              <button className="bg-[#2fa4a9] text-white px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer">
                Contact Us
              </button>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
