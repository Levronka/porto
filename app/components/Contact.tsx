export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">Get In Touch</h2>

        <p className="text-center text-slate-600 text-lg mb-12 mt-6">
          Have a project in mind? I'd love to hear from you. Get in touch with
          me via email or any of my social media accounts.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-slate-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg border-2 border-blue-100 focus:border-sky-400 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-slate-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg border-2 border-blue-100 focus:border-sky-400 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-slate-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Send me a message..."
              className="w-full px-4 py-3 rounded-lg border-2 border-blue-100 focus:border-sky-400 focus:outline-none transition-colors resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn-primary w-full justify-center flex items-center"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
