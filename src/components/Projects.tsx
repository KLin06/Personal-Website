import { ExternalLink, ChevronLeft, ChevronRight, BarChart3, Smartphone, Brain, Cloud, Github } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const projects = [
  {
    title: "Search Engine Autocomplete",
    description: "A lightweight autocomplete engine that combines trie-based indexing with machine learning to deliver fast, ranked suggestions.",
    tech: ["React", "C++", "Python", "FastApi", "Machine Learning", "Algorithms", "PostgreSQL", "TailwindCSS"],
    link: "/projects#autocomplete",
    image: "https://plus.unsplash.com/premium_photo-1681487857509-abb58345e594?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    color: "#89a48c",
    github: "https://github.com/KLin06"
  },
  {
    title: "Chatterbox",
    description: "A real-time chat app built with React and Node.js that lets users send, receive, and store messages instantly.",
    tech: ["React", "Web Sockets", "Express.js", "Node.js", "MongoDB"],
    link: "/projects#chatterbox",
    image: "https://images.unsplash.com/photo-1662974770404-468fd9660389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    color: "#89a48c",
    github: "https://github.com/KLin06/Chatterbox"
  },
  {
    title: "Greenhouse Gas Analysis",
    description: "A Python analysis of greenhouse gas emissions, using datasets from the NIR, World Bank, and GHGRP to uncover trends in carbon output.",
    tech: ["Python", "Pandas", "Matplotlib"],
    link: "/projects#ghg",
    image: "https://images.unsplash.com/photo-1728919722219-9a9f1d9e08db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    color: "#89a48c",
    github: "https://github.com/KLin06/GHG-Analysis"
  },
  {
    title: "Flavour Finder",
    description: "A recipe search app built with the PERN stack and a Selenium scraper.",
    tech: ["React", "PostgreSQL", "Express.js", "Node.js", "Python", "Selenium", "BeautifulSoup"],
    link: "/projects#flavour-finder",
    image:  "https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    color: "#89a48c",
    github: "https://github.com/KLin06/FlavourFinder"
  },
  {
    title: "Stickman Badminton Game",
    description: "A Java-based badminton game featuring realistic physics, collision detection, and a bot for single-player matches.",
    tech: ["Java", "Game Development"],
    link: "/projects#badminton-game",
    image:  "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    color: "#89a48c",
    github: "https://github.com/KLin06/Badminton-Game"
  },
  {
    title: "Spam Classifier",
    description: "A Python-based spam detection model trained on email datasets using machine learning to classify messages as spam or ham.",
    tech: ["Python", "Ollama", "Pandas", "FastAPI"],
    link: "/projects#spam-classifier",
    image:  "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    color: "#89a48c",
    github: "https://github.com/KLin06/Spam-Classifier"
  },
  {
    title: "Tuber",
    description: "An iOS app that minimizes scrolling by removing Shorts from Youtube. Used the Youtube API and CoreML to generate a personalized youtube feed",
    tech: ["Swift", "SwiftUI", "Google OAuth", "Core ML", "YouTube Data API"],
    link: "/projects#tuber",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#c9484f",
    github: "https://github.com/KLin06/Tuber"
  },
];

export function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScroll);
      return () => ref.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="projects"
      className="py-20 px-6 relative bg-[#0e1a14]"
       style={{
        maxWidth: "1200px",   // limit section width
        margin: "0 auto",     // center horizontally
        paddingLeft: "4rem",  // add comfy horizontal space
        paddingRight: "4rem",
      }}
    >
      <div className=" mx-auto" > 
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h2 className="text-[#89a48c] mb-2">Projects</h2>
          <div className="h-px max-w-24 bg-[#89a48c]/30"></div>
        </motion.div>

        <div className="relative">
          {/* Navigation arrows */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#1b2b22]/90 backdrop-blur-sm border border-[#89a48c]/20 flex items-center justify-center text-[#89a48c] hover:bg-[#89a48c] hover:text-[#0e1a14] transition-all duration-300"
              style={{
                left: "-4rem",     // move it fully outside the box
              }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#1b2b22]/90 backdrop-blur-sm border border-[#89a48c]/20 flex items-center justify-center text-[#89a48c] hover:bg-[#89a48c] hover:text-[#0e1a14] transition-all duration-300"
              style={{
                right: "-4rem",     // move it fully outside the box
              }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Horizontal scroll container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide p-4 px-1"
            style={{
              padding: "1rem",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {projects.map((project, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="flex-shrink-0 w-[340px] snap-start"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="group h-full bg-gradient-to-br from-[#1b2b22] to-[#1b2b22]/60 border border-[#89a48c]/20 rounded-xl hover:border-[#89a48c]/40 transition-all duration-300 overflow-hidden">
                    <div className="relative w-full overflow-hidden" style={{ height: "220px" }}>
                      {/* Image */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center"
                      />
                      {/* Hover overlay with links */}
                       <div
                          style={{
                              position: "absolute",
                              inset: 0,
                              backgroundColor: "rgba(14,26,20,0.9)",
                              opacity: hoveredIndex === index ? 1 : 0, // only this card fades in
                              transition: "opacity 0.3s ease",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "1rem",
                          }}
                       >
                        <Link
                          to={project.link}
                          className="w-10 h-10 rounded-full bg-[#89a48c] text-[#0e1a14] flex items-center justify-center hover:bg-[#e8e3d1] transition-colors duration-300"
                          aria-label="View project"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </Link>  
                        <a
                          href={project.github}
                          className="w-10 h-10 rounded-full bg-[#89a48c] text-[#0e1a14] flex items-center justify-center hover:bg-[#e8e3d1] transition-colors duration-300"
                          aria-label="View on GitHub"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    <div className="p-6">
                      {/* Title and Link */}
                      <div className="flex items-start justify-between mb-4 mx-6">
                        <h3 className="text-[#e8e3d1]">{project.title}</h3>
                        <Link
                          to={project.link}
                          className="text-[#89a48c]/60 hover:text-[#89a48c] transition-colors duration-300"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </Link>
                      </div>

                      {/* Description */}
                      <p className="text-[#e8e3d1]/70 mb-6  mx-6">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6 mx-6">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-[#89a48c]/10 border border-[#89a48c]/20 rounded-full text-[#89a48c]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </section>
  );
}
