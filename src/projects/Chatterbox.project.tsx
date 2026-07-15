import { Github } from "lucide-react";

export const ChatterboxProject = () => {
  return (
    <section
      id="chatterbox"
      className="py-16 flex items-center justify-center overflow-hidden"
    >
      <div className="flex relative w-[80%] max-w-5xl mx-auto py-3 px-4 justify-center flex-col">
        <div>
          <a
            href="https://github.com/KLin06/Chatterbox"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1 right-4 w-12 h-12 rounded-lg bg-[#1b2b22] border border-[#89a48c]/20 flex items-center justify-center text-[#89a48c] hover:bg-[#89a48c] hover:text-[#0e1a14] transition-all duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <h1 className="text-[#e8e3d1] text-2xl font-bold mb-6">
            Chatterbox
          </h1>
          <h2 className="text-[#89a48c] text-md mb-4">
            Full-stack social media application built with secure JWT authentication, enabling users to create accounts, follow others, and exchange real-time messages.
          </h2>

          <div className="flex flex-wrap gap-3 mb-6">
            {[
                "Rest APIs",
                "React",
                "Express.js",
                "Node.js",
                "MongoDB",
                "Websockets",
              "JWT"
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
          <video
            src="/Chatterbox.mp4"
            controls
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-6 text-[#e8e3d1]/80 leading-relaxed tracking-wide max-w-4xl mx-auto">
          <div>
            <h3 className="text-[#89a48c] text-lg font-semibold mb-2">Problem</h3>
            <p className="text-[#e8e3d1]/70 text-md">
             Most chat apps either focus solely on private messaging or social feeds, but rarely integrate both efficiently. Managing user authentication, scalable real-time communication, and personalized user relationships (follows, feeds) typically requires separate systems.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-[#89a48c] text-lg font-semibold mb-2">Solution</h3>
            <ul className="list-disc text-md list-outside pl-8 space-y-4 text-md text-[#e8e3d1]/80">
              <li>
                <strong className="text-[#e8e3d1]">JWT Authentication:</strong> stateless login system that ensures secure and persistent user sessions without storing sensitive data on the client..
              </li>
              <li>
                <strong className="text-[#e8e3d1]">Real-time Messaging:</strong> implemented via WebSockets for instantaneous delivery of messages and live updates in conversation threads.
              </li>
            <li>
            <strong className="text-[#e8e3d1]">RESTful API:</strong> provides structured endpoints for user management, conversations, and post creation, ensuring predictable and scalable communication between client and server.
            </li>
            <li>
            <strong className="text-[#e8e3d1]">Relational Database Schema:</strong> designed to efficiently manage user relationships, message histories, and post timelines while maintaining referential integrity.
            </li>
            <li>
            <strong className="text-[#e8e3d1]">React + Tailwind Frontend:</strong> delivers a modern, responsive UI with instant feedback, real-time message streaming, and smooth transitions across chat and social views.
            </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
