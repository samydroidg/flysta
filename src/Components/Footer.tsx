import logo from "../assets/Complete-logo-removed-bg.png";

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300">

      <div className="max-w-350 mx-auto px-6 sm:px-10 lg:px-16 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">

        {/* LOGO + DESCRIPTION */}
        <div>
          <img src={logo} alt="Flysta logo" className="h-14 mb-4" />

          <p className="text-gray-400 leading-relaxed">
            Flysta provides AI-powered logistics and transportation
            management systems helping businesses manage shipments,
            routes, billing, and analytics in one platform.
          </p>
        </div>

        {/* PRODUCT LINKS */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Products
          </h3>

          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-white hover:underline">
                Transportation Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white hover:underline">
                Route Optimization
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white hover:underline">
                Analytics Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white hover:underline">
                Fleet Tracking
              </a>
            </li>
          </ul>
        </div>

        {/* COMPANY LINKS */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Company
          </h3>

          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-white hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Contact
          </h3>

          <ul className="space-y-3">
            <li>support@flysta.ai</li>
            <li>India</li>
            <li>+91 99999 99999</li>
          </ul>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">

            <a
              href="#"
              className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition"
            >
              🌐
            </a>

            <a
              href="#"
              className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition"
            >
              💼
            </a>

            <a
              href="#"
              className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition"
            >
              🐦
            </a>

          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Flysta. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;