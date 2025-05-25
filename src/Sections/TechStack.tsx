import { tools } from '../ConstantsData/Constants'; // if you move it to its own file

export default function TechStack() {
  return (
    <section id="tech" className="bg-gray-50 py-20 px-6 text-center">
      <h2 className="text-3xl font-bold text-purple-700 mb-10">Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="bg-white shadow-sm rounded-lg px-4 py-3 text-gray-700 font-medium hover:shadow-md transition flex items-center justify-center gap-2"
          >
            <span>{tool.icon}</span>
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
