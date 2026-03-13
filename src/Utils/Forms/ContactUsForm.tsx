

function ContactUsForm() {
  return (
    <form
      action="https://formsubmit.co/gouravojha9999@gmail.com"
      method="POST"
      className="space-y-6"
    >
      {/* IMPORTANT hidden inputs */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_subject" value="New Flysta Contact Message" />
      <input type="hidden" name="_next" value="http://localhost:5173/" />

      {/* NAME */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2fa4a9]"
        />
      </div>

      {/* EMAIL */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2fa4a9]"
        />
      </div>
      <input
        type="hidden"
        name="_autoresponse"
        value="Thank you for your message! We will contact you soon."
      />

      {/* COMPANY */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Company</label>
        <input
          type="text"
          name="company"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2fa4a9]"
        />
      </div>

      {/* MESSAGE */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Message</label>
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
  );
}

export default ContactUsForm;
