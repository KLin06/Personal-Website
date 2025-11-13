import { motion } from "motion/react";
import { Github, Mail, Linkedin } from "lucide-react";

export const BadmintonGameProject = () => {
  return (
    <section
      id="badminton-game"
      className="min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="flex relative w-[80%] max-w-5xl mx-auto py-3 px-4 justify-center flex-col">
        <div>
          <a
            href="https://github.com/KLin06/Badminton-Game"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1 right-4 w-12 h-12 rounded-lg bg-[#1b2b22] border border-[#89a48c]/20 flex items-center justify-center text-[#89a48c] hover:bg-[#89a48c] hover:text-[#0e1a14] transition-all duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <h1 className="text-[#e8e3d1] text-2xl font-bold mb-6">
            Stickman Badminton Game
          </h1>
          <h2 className="text-[#89a48c] text-md mb-4">
            This badminton game is a fully interactive 2D sports simulation built in Java Swing, featuring real-time physics, collision detection, animation, and reactive bots. It recreates a competitive badminton experience with both single-player (AI) and two-player (local) modes, complete with serving logic, jump mechanics, scoring, and progression through levels.
          </h2>

          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "Java", "Game Development"
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

        <div className="rounded-2xl aspect-[5/3] mx-auto my-4 bg-gradient-to-br from-[#1b2b22] to-[#89a48c]/20 border border-[#89a48c]/30 backdrop-blur-sm flex items-center justify-center overflow-hidden">
          <video
            src="/BadmintonGame.mp4"
            controls
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};
