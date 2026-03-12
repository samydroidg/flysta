type DemoModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function DemoModal({ isOpen, onClose }: DemoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">

      {/* MODAL BOX */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-900">
          Book a Demo
        </h2>

        <p className="text-gray-600 mt-2">
          See how Flysta can transform your logistics operations.
        </p>

        <form
          action="https://formsubmit.co/YOUR_EMAIL@gmail.com"
          method="POST"
          className="mt-6 space-y-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2fa4a9]"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2fa4a9]"
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2fa4a9]"
          />

          <textarea
            name="message"
            placeholder="Tell us about your logistics needs"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2fa4a9]"
          />

          <button
            type="submit"
            className="w-full bg-[#2fa4a9] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition"
          >
            Book Demo
          </button>

        </form>

      </div>
    </div>
  );
}

export default DemoModal;