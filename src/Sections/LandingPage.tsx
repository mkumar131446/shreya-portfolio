import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-purple-50 to-white">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">Shreya Chauhan</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-xl">
        Data Analytics Professional | MS in Information Systems
      </p>
      <button
        onClick={() => navigate('/portfolio')}
        className="bg-blue-600 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full transition"
      >
        View Portfolio
      </button>
    </section>
  )
}
