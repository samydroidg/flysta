import hero from "../assets/tms/hero.png";

function ProductHero() {

  return (
    <section className="pt-32 pb-20 bg-linear-to-b from-white to-gray-50">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Flysta Transportation
            Management System
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Flysta TMS helps logistics companies plan loads, track
            shipments in real time, automate workflows and optimize
            delivery routes from a single intelligent platform.
          </p>

          <button className="mt-8 bg-[#2fa4a9] text-white px-8 py-3 rounded-xl shadow-md hover:shadow-xl transition">
            Book a Demo
          </button>

        </div>

        <img
          src={hero}
          alt="Flysta TMS Dashboard"
          className="rounded-2xl shadow-xl"
        />

      </div>

    </section>
  );

}

export default ProductHero;