import { motion } from 'framer-motion'
import resume from '../assets/ShreyaChauhanResume.pdf'

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 bg-white text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-blue-600 mb-6">About Me</h2>
      <motion.p
        className="max-w-3xl mx-auto text-gray-700 text-md leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        I’m Shreya Chauhan, a Data Analytics professional with a Master’s in Information Systems from Pace University.
        I specialize in exploring and analyzing large datasets to discover insights and trends,
        and I love creating dashboards with Tableau and Power BI to make data tell a story.
        I bring a strong foundation in tools like Python, R, SQL, and Excel — blending technical know-how with business insights.
      </motion.p>

      <motion.a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-full transition mt-8"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        📄 View My Resume
      </motion.a>
    </motion.section>
  )
}
