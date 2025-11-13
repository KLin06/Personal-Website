export function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-[#89a48c]/10">
      {/* Plant SVG as top border decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 45 C 30 45, 25 35, 20 30 C 15 25, 10 25, 10 20 C 10 15, 15 10, 20 15 C 25 20, 28 25, 30 30"
            stroke="#89a48c"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M30 45 C 30 45, 35 35, 40 30 C 45 25, 50 25, 50 20 C 50 15, 45 10, 40 15 C 35 20, 32 25, 30 30"
            stroke="#89a48c"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M30 30 L 30 50"
            stroke="#89a48c"
            strokeWidth="2"
            opacity="0.4"
          />
          <circle cx="30" cy="50" r="2" fill="#89a48c" opacity="0.3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#e8e3d1]/40">
            © 2025 Kevin • built with react + tailwind
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/klin06"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#89a48c]/60 hover:text-[#89a48c] transition-colors duration-300"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/kevinshupenglin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#89a48c]/60 hover:text-[#89a48c] transition-colors duration-300"
            >
              Linkedin
            </a>
            <a
              href="mailto:klin06@outlook.com"
              className="text-[#89a48c]/60 hover:text-[#89a48c] transition-colors duration-300"
            >
              Email
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#89a48c]/60 hover:text-[#89a48c] transition-colors duration-300"
            >Resume</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
