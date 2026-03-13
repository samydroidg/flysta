import { FaBolt, FaChartLine, FaUsers, FaRoute, FaCloud, FaClock } from "react-icons/fa";

function Features() {

  const features = [
    {
      icon: <FaBolt />,
      title: "Workflow Automation",
      desc: "Automate repetitive logistics processes and reduce manual work."
    },
    {
      icon: <FaChartLine />,
      title: "Smart Analytics",
      desc: "Gain insights into operations with powerful analytics dashboards."
    },
    {
      icon: <FaUsers />,
      title: "Team Collaboration",
      desc: "Keep your entire logistics team connected in one platform."
    },
    {
      icon: <FaRoute />,
      title: "Route Optimization",
      desc: "Find the most efficient delivery routes automatically."
    },
    {
      icon: <FaCloud />,
      title: "Cloud Infrastructure",
      desc: "Access your operations anywhere with secure cloud technology."
    },
    {
      icon: <FaClock />,
      title: "Real-Time Tracking",
      desc: "Track orders and deliveries in real time with full transparency."
    }
  ];

  return (
    <section className="py-28 bg-linear-to-b from-white to-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <h2 className="text-4xl font-bold mb-4">
            Powerful Tools for Modern Logistics
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto">
            Everything you need to automate, optimize, and scale your logistics operations.
          </p>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {features.map((feature, index) => (

            <div
              key={index}
              className="group relative p-8 rounded-2xl border bg-white shadow-sm 
              hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-teal-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition"></div>

              {/* Icon */}
              <div className="relative w-14 h-14 flex items-center justify-center rounded-xl 
              bg-linear-to-r from-teal-400 to-cyan-400 text-white text-xl mb-6">

                {feature.icon}

              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;