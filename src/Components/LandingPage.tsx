export default function LandingPage() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-purple-50 to-white">
      <h1 className="text-5xl font-bold text-purple-700 mb-4">
        Shreya Chauhan
      </h1>
      <h2 className="text-xl text-gray-700 mb-6">
        Data Analytics Professional | MS in Information Systems
      </h2>
      <p className="text-md max-w-xl text-gray-600 mb-6">
        Transforming data into insights through visualizations, trends, and smart analytics using tools like Tableau, Power BI, SQL, and Python.
      </p>
      <a
        href="#contact"
        className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-full transition"
      >
        Let’s Connect
      </a>
    </section>
  );
}
