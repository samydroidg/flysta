function FeatureGrid() {

  const features = [
    "Load Planning",
    "Real-time Tracking",
    "Route Optimization",
    "Fleet Management",
    "Automated Billing",
    "Analytics Dashboard"
  ];

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Core Capabilities
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {features.map((f, i) => (

            <div
              key={i}
              className="p-8 bg-white border rounded-2xl shadow-sm hover:shadow-lg transition"
            >

              <h3 className="text-xl font-semibold">
                {f}
              </h3>

              <p className="text-gray-600 mt-3">
                Powerful tools designed for modern logistics operations.
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );

}

export default FeatureGrid;