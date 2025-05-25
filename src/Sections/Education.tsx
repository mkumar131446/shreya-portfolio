import { education } from "../ConstantsData/Constants"

export default function Experience() {
  return (
    <section id="education" className="bg-white py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Education</h2>
      <div className="max-w-4xl mx-auto relative border-l-2 border-blue-700 pl-6">
        {education.map((item, index) => (
          <div key={index} className="mb-12 relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[35px] top-1 w-5 h-5 bg-blue-700 rounded-full border-4 border-white shadow" />

            {/* Header with Logo + Info */}
            <div className="flex items-start gap-4 mb-1">
              <img
                src={item.logo}
                alt={item.university}
                className="h-10 w-10 object-contain rounded"
              />
              <div>
                <p className="text-base font-semibold text-blue-600">
                  {item.degree}
                  <span className="text-sm text-gray-600 font-normal">
                    {' '} {item.concentration} - <span className="text-gray-500">{item.duration}</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
