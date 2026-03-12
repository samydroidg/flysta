function Contact() {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center py-20">

      <div className="max-w-300 mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Contact Our Team
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-lg">
            Have questions about Flysta or want to see how our
            Transportation Management System can transform your logistics
            operations? Reach out to our team and we’ll get back to you
            within 24 hours.
          </p>

          <div className="mt-8 space-y-4 text-gray-700">

            <p>📧 support@flysta.ai</p>
            <p>📍 India</p>
            <p>📞 +91 99999 99999</p>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white p-10 rounded-2xl shadow-lg">

          <form
            action="https://formsubmit.co/gouravojha9999@gmail.com"
            method="POST"
            className="space-y-6"
          >

            {/* NAME */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2fa4a9]"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2fa4a9]"
              />
            </div>

            {/* COMPANY */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                name="company"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2fa4a9]"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2fa4a9]"
              ></textarea>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#2fa4a9] text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;