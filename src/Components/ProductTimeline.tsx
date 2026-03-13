function ProductTimeline() {
  const steps = [
    {
      title: "Create Shipment",
      desc: "Create new shipments, assign pickup and delivery locations, and manage job details in a centralized dashboard.",
    },
    {
      title: "Assign Driver & Vehicle",
      desc: "Allocate drivers, vehicles and delivery routes while keeping operational visibility across your fleet.",
    },
    {
      title: "Real-Time Tracking",
      desc: "Monitor deliveries with GPS tracking and live vehicle updates across your logistics network.",
    },
    {
      title: "Digital Documents & POD",
      desc: "Generate manifests, collect digital proof of delivery and manage shipping documents electronically.",
    },
    {
      title: "Analytics & Performance",
      desc: "Analyze delivery performance, operational costs and efficiency using Flysta analytics dashboards.",
    },
  ];

  return (
    <section className="py-28 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-20">
          How Flysta TMS Works
        </h2>

        <div className="relative">

          {/* vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          {steps.map((step, i) => (

            <div key={i} className="relative flex gap-8 mb-16">

              {/* circle */}
              <div className="w-8 h-8 rounded-full bg-[#2fa4a9] flex items-center justify-center text-white font-bold">
                {i + 1}
              </div>

              <div>

                <h3 className="text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-2 text-gray-600 max-w-xl">
                  {step.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ProductTimeline;