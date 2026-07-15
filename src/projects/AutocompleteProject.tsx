import { motion } from "motion/react";
import { Github, Mail, Linkedin } from "lucide-react";

export const AutocompleteProject = () => {
  return (
    <section
      id="autocomplete"
      className="py-16 flex items-center justify-center overflow-hidden"
    >
      <div className="flex relative w-[80%] max-w-5xl mx-auto py-3 px-4 justify-center flex-col">
        <div>
          <a
            href="https://github.com/klin06"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1 right-4 w-12 h-12 rounded-lg bg-[#1b2b22] border border-[#89a48c]/20 flex items-center justify-center text-[#89a48c] hover:bg-[#89a48c] hover:text-[#0e1a14] transition-all duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <h1 className="text-[#e8e3d1] text-2xl font-bold mb-6">
            Search Engine Autocomplete
          </h1>
          <h2 className="text-[#89a48c] text-md mb-4">
            Full-stack autocomplete engine with a C++ trie backend, a Python
            FastAPI ML layer for ranking, and a React frontend for real-time
            search suggestions.
          </h2>

          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "C++",
              "Redis",
              "React",
              "Python",
              "PostgreSQL",
              "NLP",
              "FastAPI",
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
            src="/autocomplete.png"
            alt="Selfie"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-6 text-[#e8e3d1]/80 leading-relaxed tracking-wide max-w-4xl mx-auto">
          <div>
            <h3 className="text-[#89a48c] text-lg font-semibold mb-2">Problem</h3>
            <p className="text-[#e8e3d1]/70 text-md">
              Traditional autocomplete systems rely solely on static prefix matching, offering poor
              semantic understanding and slow responses when scaled to millions of records. Developers
              searching technical content need both speed and context relevance, something classic
              TF-IDF and naive Tries can’t balance well.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-[#89a48c] text-lg font-semibold mb-2">Solution</h3>
            <ul className="list-disc text-md list-outside pl-8 space-y-4 text-md text-[#e8e3d1]/80">
              <li>
                <strong className="text-[#e8e3d1]">C++ Trie Engine:</strong> optimized for compressed nodes
                and frequency-weighted lookups, enabling millisecond-level autocomplete.
              </li>
              <li>
                <strong className="text-[#e8e3d1]">Python FastAPI Backend:</strong> orchestrates Trie
                queries, applies BM25 and sentence-transformer embeddings for semantic re-ranking, and
                exposes <code>/autocomplete</code> and <code>/search</code> APIs.
              </li>
              <li>
                <strong className="text-[#e8e3d1]">Redis Caching Layer:</strong> stores frequent queries and
                pre-ranked results, improving throughput by ~70% and reducing backend load.
              </li>
              <li>
                <strong className="text-[#e8e3d1]">Distributed Node Architecture:</strong> multiple FastAPI
                instances run behind an nginx load balancer, simulating sharding, replication, and fault
                tolerance.
              </li>
              <li>
                <strong className="text-[#e8e3d1]">React + Tailwind Frontend:</strong> delivers an UI with sub-100 ms latency and smooth suggestion rendering.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
