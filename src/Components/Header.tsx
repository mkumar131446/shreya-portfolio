import logo from '../assets/sc-logo.png';

export default function Header() {
  return (
    
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm px-6 py-4 flex justify-between items-center">
      <img src={logo} alt="SC Logo" className="h-10 w-10 object-contain" />
      <nav className="space-x-4 text-sm text-gray-600">
        <a href="#about" className="hover:text-purple-600">About</a>
        <a href="#experience" className="hover:text-purple-600">Experience</a>
        <a href="#research" className="hover:text-purple-600">Research & Publications</a>
        <a href="#tech" className="hover:text-purple-600">Tech Stack</a>
        <a href="#contact" className="hover:text-purple-600">Contact</a>
      </nav>
    </header>
  );
}
