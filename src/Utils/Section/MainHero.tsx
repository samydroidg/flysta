import { useState } from "react";
import BookDemoForm from "../Forms/BookDemoForm";
import image from "../../assets/ProductDashboardImage.jpg"

function MainHero() {

  const [openDemo, setOpenDemo] = useState(false);
  
  return (
    <section className="bg-linear-to-r from-[#243b55] via-[#2fa4a9] to-[#6fd3c4] min-h-screen flex items-center">

      <div
        className="w-full max-w-350 xl:max-w-400 mx-auto
        px-6 sm:px-10 lg:px-16 xl:px-24
        py-16 sm:py-20 lg:py-24
        grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 items-center"
      >

        {/* LEFT */}
        <div className="text-white text-center lg:text-left">

          <h1
            className="font-bold leading-[1.05]
            text-[34px]
            sm:text-[42px]
            md:text-[50px]
            lg:text-[60px]
            xl:text-[68px]"
          >
            AI-Powered Systems
            <br />
            to Run Modern
            <br />
            Supply Chains
          </h1>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <button onClick={() => setOpenDemo(true)} className="bg-white text-black px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition cursor-pointer">
              Book a Demo
            </button>

            <button className="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-black transition cursor-pointer">
              About Us
            </button>

          </div>

        </div>

        {/* RIGHT */}
        <div className="flex justify-center">

          <div
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-6
            w-full
            max-w-105
            sm:max-w-130
            lg:max-w-155
            h-65
            sm:h-80
            lg:h-95"
          >

            <div className="bg-white/20 h-full rounded-xl flex items-center justify-center text-white text-lg font-medium">
              <img src={image} alt="" className="w-full h-full object-cover rounded-xl" />
            </div>

          </div>

        </div>

      </div>
      <BookDemoForm isOpen={openDemo} onClose={() => setOpenDemo(false)} />
    </section>
  );
}

export default MainHero;