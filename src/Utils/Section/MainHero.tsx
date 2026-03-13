import { useState } from "react";
import BookDemoForm from "../Forms/BookDemoForm";
import image from "../../assets/ProductDashboardImage.png"

function MainHero() {

  const [openDemo, setOpenDemo] = useState(false);

  return (
    <section className="relative bg-[#f6f9fc] min-h-screen flex items-center overflow-hidden pt-24">

      {/* background glow */}
      <div className="absolute -top-40 -left-40 w-125 h-125 bg-[#2fa4a9] opacity-20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-[#243b55] opacity-20 blur-[150px] rounded-full"></div>

      <div
        className="w-full max-w-325 mx-auto
        px-6 sm:px-10 lg:px-16
        py-16 sm:py-20 lg:py-24
        grid lg:grid-cols-2 gap-16 items-center relative"
      >

        {/* LEFT */}
        <div className="text-center lg:text-left">

          {/* badge */}
          <div className="inline-flex items-center gap-2 bg-white shadow-sm px-4 py-2 rounded-full text-sm mb-6">
            🚀 AI Logistics Platform
          </div>

          <h1
            className="font-semibold text-gray-900 leading-[1.1]
            text-[40px]
            sm:text-[48px]
            md:text-[56px]
            lg:text-[64px]
            xl:text-[72px]"
          >
            AI-Powered Systems
            <br />
            to Run
            <br />
            <span className="text-[#2fa4a9]">
              Modern Supply Chains
            </span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-xl text-lg leading-relaxed">
            Flysta powers logistics companies to manage transportation, track shipments in real time, automate operations, and gain real-time insights and analytics across their supply chain.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <button
              onClick={() => setOpenDemo(true)}
              className="bg-[#2fa4a9] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition"
            >
              Book a Demo
            </button>

            <button
              className="border border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              About Us
            </button>

          </div>

        </div>

        {/* RIGHT */}
        <div className="flex justify-center">

          <div
            className="bg-white rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.15)] p-4
            rotate-2 hover:rotate-0 transition duration-300
            w-full max-w-137.5"
          >

            <img
              src={image}
              alt="dashboard"
              className="w-full h-full object-cover rounded-xl"
            />

          </div>

        </div>

      </div>

      <BookDemoForm
        isOpen={openDemo}
        onClose={() => setOpenDemo(false)}
      />

    </section>
  );
}

export default MainHero;