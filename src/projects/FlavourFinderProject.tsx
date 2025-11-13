import { motion } from "motion/react";
import { Github, Mail, Linkedin } from "lucide-react";

export const FlavourFinderProject = () => {
  return (
    <section
      id="flavour-finder"
      className="min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="flex relative w-[80%] max-w-5xl mx-auto py-3 px-4 justify-center flex-col">
        <div>
          <a
            href="https://github.com/KLin06/FlavourFinder"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1 right-4 w-12 h-12 rounded-lg bg-[#1b2b22] border border-[#89a48c]/20 flex items-center justify-center text-[#89a48c] hover:bg-[#89a48c] hover:text-[#0e1a14] transition-all duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <h1 className="text-[#e8e3d1] text-2xl font-bold mb-6">
            Flavour Finder Project
          </h1>
          <h2 className="text-[#89a48c] text-md mb-4">
            FlavourFinder is a full‐stack recipe discovery application built on a PERN (PostgreSQL, Express, React, Node.js) stack with a Selenium web-scraper. Users input available ingredients, and the app retrieves matching recipes from AllRecipes, then displays results with images, ingredient lists, and direct links.
          </h2>

          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "React", "Express.js", "Node.js", "PostgreSQL", "Selenium", "BeautifulSoup"
            ].map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-[#89a48c]/10 border border-[#89a48c]/20 rounded-full text-[#89a48c]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl mx-auto my-4 bg-gradient-to-br from-[#1b2b22] to-[#89a48c]/20 border border-[#89a48c]/30 backdrop-blur-sm flex items-center justify-center overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
            alt="Selfie"
            className="w-full h-full object-cover rounded-2xl"
            style={{
              objectFit: "cover",
              objectPosition: "45% 95%",
              transform: "scale(1.2)",
            }}
          />
        </div>

        <div className="mt-6 text-[#e8e3d1]/80 leading-relaxed tracking-wide max-w-4xl mx-auto">
          <div>
            <h3 className="text-[#89a48c] text-lg font-semibold mb-2">Problem</h3>
            <p className="text-[#e8e3d1]/70 text-md">
              Home cooks often have random ingredients on hand but don’t know what recipes to make. Many recipe search tools force users to select categories or filters, making discovery inefficient. This app solves that by letting users simply bridge “what I have” → “what can I cook”.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-[#89a48c] text-lg font-semibold mb-2">Solution</h3>
            <ul className="list-disc text-md list-outside pl-8 space-y-4 text-md text-[#e8e3d1]/80">
             <li>
            <strong className="text-[#e8e3d1]">Node.js + Express Backend:</strong> implements RESTful endpoints to fetch, store, and serve recipe data from user ingredient inputs.
            </li>
            <li>
            <strong className="text-[#e8e3d1]">Selenium Web Scraper:</strong> automates recipe extraction from AllRecipes, collecting over 15000+ titles, ingredients, and links based on user queries.
            </li>
            <li>
            <strong className="text-[#e8e3d1]">PostgreSQL Database:</strong> stores recipe metadata, ingredient lists, and user-saved entries for fast and reliable lookup.
            </li>
            <li>
            <strong className="text-[#e8e3d1]">React Frontend:</strong> provides a responsive interface for entering ingredients, browsing recipe results, and managing saved favorites.
            </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
