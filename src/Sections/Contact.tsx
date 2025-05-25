export default function Contact() {
  return (
    <section id="contact" className="bg-purple-50 py-20 px-6 text-center">
      <h2 className="text-3xl font-bold text-[#01796F] mb-6">Get in Touch</h2>
      <p className="text-md text-gray-700 max-w-xl mx-auto mb-8">
        Whether you're reaching out for a collaboration, project opportunity, or just to connect —
        feel free to drop a message!
      </p>

      <div className="space-y-4">
        <p className="text-gray-800">
          📧{' '}
          <a
            href="mailto:shreyachauhan169@gmail.com"
            className="text-[#01796F] hover:underline"
          >
            shreyachauhan169@gmail.com
          </a>
        </p>

        <p className="text-gray-800">
          💼{' '}
          <a
            href="https://www.linkedin.com/in/Shreya1690"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#01796F] hover:underline"
          >
            linkedin.com/in/Shreya1690
          </a>
        </p>
      </div>
    </section>
  );
}
