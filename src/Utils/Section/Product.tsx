import { useState } from "react";
import BookDemoForm from "../Forms/BookDemoForm";
import image from "../../assets/image.png";

function Product() {
  const [openDemo, setOpenDemo] = useState(false);

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28" id="products">
      <div className="max-w-350 mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT SIDE IMAGE */}
        <div className="flex justify-center">
          <img
            src={image}
            alt="Flysta TMS Dashboard"
            className="w-full max-w-130 rounded-2xl shadow-lg"
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="text-center lg:text-left">
          <h2
            className="font-bold text-gray-900 leading-tight
          text-3xl
          sm:text-4xl
          lg:text-5xl"
          >
            Scale Your Logistics
            <br />
            with Flysta TMS
          </h2>

          <p
            className="mt-6 text-gray-600 max-w-xl mx-auto lg:mx-0
          text-base
          sm:text-lg
          lg:text-xl"
          >
            Plan loads, track shipments in real time, optimize routes, automate
            billing, and gain complete visibility across your transport network.
            Flysta Transportation Management System helps logistics teams
            operate faster, smarter, and with full operational clarity.
          </p>

          <div className="mt-8">
            <button
              onClick={() => setOpenDemo(true)}
              className="bg-[#2fa4a9] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition"
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
