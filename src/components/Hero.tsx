import { Github, Mail, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback.tsx";

export function Hero() {
  return (
    <section
      id="autocomplete"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Trees */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1636144348638-a7a957e11ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXN0eSUyMGZvcmVzdCUyMHRyZWVzfGVufDF8fHx8MTc2Mjc0OTc5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e1a14]/60 via-[#0e1a14]/80 to-[#0e1a14]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6">
              <span className="text-[#e8e3d1] text-6xl">Hi! I'm </span>
              <span
                style={{
                  color: "#0f7040ff",
                  fontSize: "3.75rem", // same as text-6xl
                  fontWeight: "700",   // same as font-bold
                }}
              >
                Kevin Lin
              </span>
            </h1>


            <p className="text-[#e8e3d1]/80 mb-8">
              I'm a Systems Design Engineering student at the University of Waterloo passionate about building software that
              connects data, people, and infrastructure. 
            </p>

            <p className="text-[#e8e3d1]/70 mb-8">
              I like improving performance and building efficient data pipelines and backend systems.
              Currently exploring distributed systems and real-time data visualization.
            </p>

            <div className="flex gap-4 ">
              <a
                href="https://github.com/KLin06"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1b2b22] border border-[#89a48c]/30 flex items-center justify-center text-[#89a48c] hover:bg-[#89a48c] hover:text-[#0e1a14] transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/kevinshupenglin/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1b2b22] border border-[#89a48c]/30 flex items-center justify-center text-[#89a48c] hover:bg-[#89a48c] hover:text-[#0e1a14] transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:klin06@outlook.com"
                className="w-10 h-10 rounded-full bg-[#1b2b22] border border-[#89a48c]/30 flex items-center justify-center text-[#89a48c] hover:bg-[#89a48c] hover:text-[#0e1a14] transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right: Profile or Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
           <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#1b2b22] to-[#89a48c]/20 border border-[#89a48c]/30 backdrop-blur-sm p-2 flex items-center justify-center overflow-hidden">
            <img
              src="/IMG_2867_Original.jpg"
              alt="Selfie"
              className="w-full h-full object-cover rounded-2xl"
              style={{
                objectFit: 'cover',
                objectPosition: '45% 95%',  // focus top-right
                transform: 'scale(1.1)',
              }}

            />
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
