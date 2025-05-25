import { experiences } from "../ConstantsData/Constants"

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-[#01796F] mb-12">Experience</h2>
      <div className="max-w-4xl mx-auto relative border-l-2 border-[#01796F] pl-6">
        {experiences.map((item, index) => (
          <div key={index} className="mb-12 relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[35px] top-1 w-5 h-5 bg-[#01796F] rounded-full border-4 border-white shadow" />

            {/* Header with Logo + Info */}
            <div className="flex items-start gap-4 mb-1">
              <img
                src={item.logo}
                alt={item.company}
                className="h-10 w-10 object-contain rounded"
              />
              <div>
                <p className="text-base font-semibold text-[#01796F]">
                  {item.role}
                  <span className="text-sm text-gray-600 font-normal">
                    {' '} - {item.company} · <span className="text-gray-500">{item.duration}</span>
                  </span>
                </p>
              </div>
            </div>
            {/* Bullet Description */}
            <ul className="list-disc pl-5 mt-2 text-gray-700 text-sm space-y-1">
              {item.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
