// src/pages/PortfolioLayout.tsx
import Header from '../Components/Header';
import About from '../Sections/About';
import Contact from '../Sections/Contact';
import Experience from '../Sections/Experience';
import Research from '../Sections/Research';
import TechStack from '../Sections/TechStack';

export default function PortfolioLayout() {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Research />
      <TechStack />
      <Contact />
    </>
  );
}
