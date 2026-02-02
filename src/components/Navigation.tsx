import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      // If you're on another page, go home first (and include the hash)
      navigate(`/#${id}`);
    } else {
      // If already home, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0e1a14]/90 backdrop-blur-xl border-b border-[#89a48c]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* 🟢 Click name → go home (and scroll to hero) */}
        <button
          onClick={() => scrollToSection("hero")}
          className="text-[#89a48c] hover:text-[#e8e3d1] transition-colors duration-300 font-normal text-lg"
        >
          Kevin Lin
        </button>

        <div className="flex gap-10">
          <button
            onClick={() => scrollToSection("timeline")}
            className="text-[#e8e3d1]/60 hover:text-[#89a48c] transition-colors duration-300 font-normal"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-[#e8e3d1]/60 hover:text-[#89a48c] transition-colors duration-300 font-normal"
          >
            Projects
          </button>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e8e3d1]/60 hover:text-[#89a48c] transition-colors duration-300 font-normal"
          >
            Resume
          </a>
          <a
            href="mailto:klin06@outlook.ca"
            className="text-[#e8e3d1]/60 hover:text-[#89a48c] transition-colors duration-300 font-normal"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
