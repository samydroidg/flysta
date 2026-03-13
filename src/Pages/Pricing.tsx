function Pricing() {
  return (
    <section className="bg-gray-50 min-h-screen py-24">

      {/* HEADER */}
      <div className="max-w-225 mx-auto text-center px-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Simple Pricing for Logistics Teams
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          Choose a Flysta plan that fits your operations. Upgrade anytime as
          your logistics network grows.
        </p>
      </div>

      {/* PRICING CARDS */}
      <div className="max-w-325 mx-auto mt-16 px-6 grid md:grid-cols-3 gap-8">

        {/* STARTER PLAN */}
        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200">

          <h3 className="text-xl font-semibold text-gray-900">
            Starter
          </h3>

          <p className="mt-2 text-gray-500">
            For small logistics teams
          </p>

          <div className="mt-6">
            <span className="text-4xl font-bold text-gray-900">
              ₹4,999
            </span>
            <span className="text-gray-500"> /month</span>
          </div>

          <ul className="mt-8 space-y-4 text-gray-600">
            <li>✔ Shipment Tracking</li>
            <li>✔ Basic Route Planning</li>
            <li>✔ Driver Management</li>
            <li>✔ Email Support</li>
          </ul>

          <button className="mt-10 w-full bg-gray-900 text-white py-3 rounded-xl hover:shadow-lg transition">
            Get Started
          </button>

        </div>

        {/* PRO PLAN */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#2fa4a9] relative">

          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2fa4a9] text-white text-sm px-4 py-1 rounded-full">
            Most Popular
          </span>

          <h3 className="text-xl font-semibold text-gray-900">
            Professional
          </h3>

          <p className="mt-2 text-gray-500">
            Best for growing logistics companies
          </p>

          <div className="mt-6">
            <span className="text-4xl font-bold text-gray-900">
              ₹9,999
            </span>
            <span className="text-gray-500"> /month</span>
          </div>

          <ul className="mt-8 space-y-4 text-gray-600">
            <li>✔ Advanced Route Optimization</li>
            <li>✔ Real-Time Shipment Tracking</li>
            <li>✔ Fleet Analytics Dashboard</li>
            <li>✔ Automated Billing</li>
            <li>✔ Priority Support</li>
          </ul>

          <button className="mt-10 w-full bg-[#2fa4a9] text-white py-3 rounded-xl hover:shadow-lg transition">
            Book Demo
          </button>

        </div>

        {/* ENTERPRISE PLAN */}
        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200">

          <h3 className="text-xl font-semibold text-gray-900">
            Enterprise
          </h3>

          <p className="mt-2 text-gray-500">
            Custom solution for large operations
          </p>

          <div className="mt-6">
            <span className="text-4xl font-bold text-gray-900">
              Custom
            </span>
          </div>

          <ul className="mt-8 space-y-4 text-gray-600">
            <li>✔ Unlimited Shipments</li>
            <li>✔ Custom Integrations</li>
            <li>✔ Dedicated Account Manager</li>
            <li>✔ AI Logistics Insights</li>
            <li>✔ 24/7 Support</li>
          </ul>

          <button className="mt-10 w-full bg-gray-900 text-white py-3 rounded-xl hover:shadow-lg transition">
            Contact Sales
          </button>

        </div>

      </div>

    </section>
  );
}

export default Pricing;