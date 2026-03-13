import { useState } from "react";
import BookDemoForm from "../Forms/BookDemoForm";
import image from "../../assets/Hero-image2.png";

function Product() {
  const [openDemo, setOpenDemo] = useState(false);

  return (
    <section
      className="bg-linear-to-b from-white to-gray-50 py-24"
      id="products"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center relative group">

          <div className="absolute inset-0 bg-linear-to-r from-[#2fa4a9]/10 to-[#6fd3c4]/10 blur-2xl opacity-0 group-hover:opacity-100 transition"></div>

          <img
            src={image}
            alt="Flysta TMS Dashboard"
            className="relative w-full max-w-xl rounded-2xl shadow-xl border 
            hover:shadow-2xl hover:-translate-y-1 transition duration-300"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-center lg:text-left">

          <h2 className="font-bold text-gray-900 leading-tight text-3xl sm:text-4xl lg:text-5xl">
            Scale Your Logistics
            <br />
            with Flysta TMS
          </h2>

          <p className="mt-6 text-gray-600 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg lg:text-xl leading-relaxed">
            Plan loads, track shipments in real time, optimize routes,
            automate billing, and gain complete visibility across your
            transport network. Flysta Transportation Management System
            helps logistics teams operate faster, smarter, and with full
            operational clarity.
          </p>

          {/* CTA */}
          <div className="mt-8">

            <button
              onClick={() => setOpenDemo(true)}
              className="bg-linear-to-r from-[#2fa4a9] to-[#6fd3c4]
              text-white px-8 py-3 rounded-xl font-semibold
              shadow-lg hover:shadow-2xl hover:-translate-y-0.5
              transition duration-300"
            >
              Book a Demo
            </button>

          </div>
        </div>

      </div>

      <BookDemoForm isOpen={openDemo} onClose={() => setOpenDemo(false)} />

    </section>
  );
}

export default Product;