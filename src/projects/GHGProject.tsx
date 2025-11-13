import { motion } from "motion/react";
import { Github, Mail, Linkedin } from "lucide-react";

export const GHGProject = () => {
  return (
    <section
      id="ghg"
      className="min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="flex relative w-[80%] max-w-5xl mx-auto py-3 px-4 justify-center flex-col">
        <div>
          <a
            href="https://github.com/KLin06/GHG-Analysis"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1 right-4 w-12 h-12 rounded-lg bg-[#1b2b22] border border-[#89a48c]/20 flex items-center justify-center text-[#89a48c] hover:bg-[#89a48c] hover:text-[#0e1a14] transition-all duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <h1 className="text-[#e8e3d1] text-2xl font-bold mb-6">
            Greenhouse Gas Emissions Analysis
          </h1>
          <h2 className="text-[#89a48c] text-md mb-4">
            Greenhouse Gas Analysis is a Python-based data science project that explores global emissions trends using datasets from the National Inventory Report (NIR), the World Bank, and the GHGRP. The analysis focuses on uncovering relationships between economic growth, industrial activity, and greenhouse gas output.
          </h2>

          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "Python",
              "Data Analysis",
              "Pandas",
              "Matplotlib",
              "Jupyter Notebooks"
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

        <div className="rounded-2xl aspect-[6/4.3] mx-auto my-4 backdrop-blur-sm flex items-center justify-center overflow-hidden">
          <img
            src="/emissions.png"
            alt="Graph of Canadian emissions by sector"
            className="w-full h-full object-cover rounded-2xl"
            style={{
              objectFit: "cover",
              objectPosition: "45% 95%",
              transform: "scale(0.9)",
            }}
          />
        </div>

        <div className="mt-6 text-[#e8e3d1]/80 leading-relaxed tracking-wide max-w-4xl mx-auto">
          <div>
            <h3 className="text-[#89a48c] text-lg font-semibold mb-2">Problem</h3>
            <p className="text-[#e8e3d1]/70 text-md">
            Industrial expansion has historically driven economic growth, but also accelerated greenhouse gas emissions. Many countries claim progress toward “decoupling” GDP growth from carbon output, but data fragmentation, inconsistent reporting standards, and gaps in historical coverage make it difficult to accurately analyze these trends or compare nations.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-[#89a48c] text-lg font-semibold mb-2">Solution</h3>
            <ul className="list-disc text-md list-outside pl-8 space-y-4 text-md text-[#e8e3d1]/80">
              <li>
            <strong className="text-[#e8e3d1]">Python Data Pipeline:</strong> ingests and normalizes greenhouse gas data from multiple public datasets, applying filtering, cleaning, and transformation for cross-source consistency.
            </li>
            <li>
            <strong className="text-[#e8e3d1]">Pandas + Matplotlib Analysis:</strong> computes per-sector emissions breakdowns, visualizes long-term trends, and performs correlation studies between GDP growth and carbon output.
            </li>
            <li>
            <strong className="text-[#e8e3d1]">Exploratory Notebook Workflow:</strong> leverages Jupyter for transparent, step-by-step data processing, reproducible research, and interactive result visualization.
            </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
