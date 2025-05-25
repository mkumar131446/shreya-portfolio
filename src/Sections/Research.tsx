import { researchPapers } from "../ConstantsData/Constants"

export default function Research() {
  return (
    <section id="research" className="bg-white py-20 px-6 text-center">
      <h2 className="text-3xl font-bold text-[#01796F] mb-6">Research & Publications</h2>

      <div className="max-w-4xl mx-auto space-y-8 shadow-lg rounded-xl hover:shadow-xl transition duration-300">
        {researchPapers.map((paper, index) => (
          <div
            key={index}
            className="bg-[#f0fffd] border border-[#f0fffd] p-6 rounded-xl shadow-md text-left"
          >
            <h3 className="text-xl font-semibold text-[#01796F] mb-2">{paper.title}</h3>
            <p className="text-sm text-gray-700 mb-4">{paper.summary}</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href={paper.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#01796F] text-white px-4 py-2 rounded hover:bg-[#01796F] transition"
              >
                📄 View Full Paper
              </a>
              <a
                href={paper.doiLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#01796F] underline hover:text-purple-800 transition"
              >
                DOI Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
