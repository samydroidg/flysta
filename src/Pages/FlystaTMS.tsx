import TMSHero from "../assets/TMS/TMSHero.png";
import shipment from "../assets/TMS/ShipmentAndJobManagement.png";
import tracking from "../assets/TMS/Real-TimeDeliveryUpdates.png";
import analytics from "../assets/TMS/AdvanceDashboardAndAnalytics.png";
import workflow from "../assets/TMS/OperationalWorkflowAutomation.png";
import ProductTimeline from "../Components/ProductTimeline";
import { useState } from "react";
import BookDemoForm from "../Utils/Forms/BookDemoForm";

function FlystaTMS() {
  const [openDemo, setOpenDemo] = useState(false);

  const goToTMS = () => {
    window.location.href = "https://skytrans.co.in";
  };

  return (
    <div className="bg-white text-gray-800">
      {/* HERO */}

      <section className="pt-36 pb-24 bg-linear-to-b from-white to-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight bg-linear-to-r from-[#243b55] to-[#2fa4a9] text-transparent bg-clip-text">
              Flysta Transportation Management System
            </h1>

            <p className="mt-6 text-gray-600 text-lg max-w-xl">
              Flysta powers logistics companies to manage transportation, track shipments in real time, automate operations, and gain real-time insights and analytics across their supply chain.
            </p>

            <div className="mt-10 flex gap-5">
              <button
                onClick={() => setOpenDemo(true)}
                className="bg-[#2fa4a9] hover:bg-[#258e92] transition text-white px-8 py-3 rounded-xl shadow-lg"
              >
                Book Demo
              </button>
            </div>
          </div>

          <img src={TMSHero} className="rounded-3xl shadow-2xl border" />
        </div>
      </section>

      {/* PRODUCT OVERVIEW */}

      <section className="py-28">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">
            Built for Modern Logistics Operations
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Transportation companies struggle with fragmented systems, manual
            paperwork and lack of real-time visibility. Flysta TMS unifies all
            logistics operations into a single intelligent platform that manages
            shipments, drivers, vehicles and delivery performance from one
            central dashboard.
          </p>
        </div>
      </section>

      {/* CORE CAPABILITIES */}

      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20">
            Core Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Shipment Management",
                desc: "Create, manage and track shipments across the entire delivery lifecycle.",
              },
              {
                title: "Fleet Tracking",
                desc: "Monitor vehicles and drivers with real-time GPS tracking.",
              },
              {
                title: "Route Optimization",
                desc: "Automatically calculate optimal delivery routes to reduce fuel costs.",
              },
              {
                title: "Workflow Automation",
                desc: "Automate operational processes and eliminate manual tasks.",
              },
              {
                title: "Analytics Dashboard",
                desc: "Track KPIs and logistics performance through powerful dashboards.",
              },
              {
                title: "Digital Documentation",
                desc: "Generate manifests, delivery notes and documents digitally.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white border rounded-2xl shadow-sm hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHIPMENT MANAGEMENT */}

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <img src={shipment} className="rounded-3xl shadow-2xl order-1 lg:order-1" />

          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold">Shipment & Job Management</h2>

            <p className="mt-4 text-gray-600">
              Manage shipments from order creation to delivery completion.
              Assign drivers, track status and coordinate logistics operations
              from one centralized control system.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Shipment lifecycle tracking</li>
              <li>✔ Driver & fleet coordination</li>
              <li>✔ Automated job assignments</li>
              <li>✔ Delivery completion monitoring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* REAL TIME TRACKING */}

      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold">Real-Time Delivery Tracking</h2>

            <p className="mt-4 text-gray-600">
              Gain full operational visibility with live vehicle tracking,
              driver monitoring and real-time delivery updates across your
              entire logistics network.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Live GPS tracking</li>
              <li>✔ Delivery status updates</li>
              <li>✔ Driver monitoring</li>
              <li>✔ Operational visibility</li>
            </ul>
          </div>

          <img src={tracking} className="rounded-3xl shadow-2xl order-1 lg:order-1" />
        </div>
      </section>

      {/* ANALYTICS */}

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <img src={analytics} className="rounded-3xl shadow-2xl order-1 lg:order-1" />

          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold">
              Logistics Analytics & Insights
            </h2>

            <p className="mt-4 text-gray-600">
              Analyze delivery performance, operational efficiency and logistics
              costs through powerful analytics dashboards and data-driven
              insights.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Delivery success metrics</li>
              <li>✔ Operational performance insights</li>
              <li>✔ Automated reports</li>
              <li>✔ Data-driven decisions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WORKFLOW AUTOMATION */}

      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold">
              Operational Workflow Automation
            </h2>

            <p className="mt-4 text-gray-600">
              Automate repetitive operational tasks including shipment
              notifications, documentation generation and status-based workflow
              updates.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Status-based automation</li>
              <li>✔ Document workflows</li>
              <li>✔ Automated alerts</li>
              <li>✔ Reduced manual effort</li>
            </ul>
          </div>

          <img src={workflow} className="rounded-3xl shadow-2xl order-1 lg:order-1" />
        </div>
      </section>

      <ProductTimeline />

      {/* CTA */}

      <section className="py-28 text-center bg-linear-to-r from-[#243b55] to-[#2fa4a9] text-white">
        <h2 className="text-4xl font-bold">
          Ready to Modernize Your Logistics?
        </h2>

        <p className="mt-4 opacity-90">
          Start using Flysta TMS to streamline operations, track deliveries and
          scale your logistics business.
        </p>

        <button
          onClick={() => setOpenDemo(true)}
          className="mt-8 bg-white text-black px-8 py-3 rounded-xl font-medium shadow-lg hover:scale-105 transition"
        >
          Book a Demo
        </button>
      </section>
      <BookDemoForm isOpen={openDemo} onClose={() => setOpenDemo(false)} />
    </div>
  );
}

export default FlystaTMS;
