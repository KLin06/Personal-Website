import { motion } from "motion/react";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Mobile Software Intern",
    company: "Rocket Companies",
    location: "Detroit, Michigan",
    period: "May 2026 - August 2026",
   description: "Owned end-to-end delivery of native in-app feedback collection on Android and iOS for a top-10 Finance app on Google Play with a 4.9-star iOS App Store rating.",
   achievements: [
    "Replaced a WebView-based CSAT survey with a native feature module in Jetpack Compose (MVVM, Hilt), lifting expected response rates from ~1% toward the ~13% industry average for native in-app surveys",
    "Embedded user and loan context identifiers in every survey submission to capture origination context alongside sentiment data, with graceful partial-submit fallback on missing fields",
    "Enforced survey spec governance on PRs by authoring Copilot instructions that block merge when a required spec doc is missing",
    "Implemented the Google Play In-App Review prompt using the Play Core API with trigger-condition logic"
    ]
  },
  {
    type: "competition",
    title: "MindView, DeltaHacks 2026 Finalist",
    location: "Hamilton, ON",
    period: "2026",
    description: "Built a clinician-facing web app that turns fragmented 2D MRI slices into an interactive, color-coded 3D brain and tumor visualization, cutting down manual cross-slice comparison.",
    achievements: [
      "Finished as a finalist at DeltaHacks 2026 out of 700+ participants with a full-stack medical imaging tool built in 36 hours",
      "Fine-tuned a MONAI SegResNet 3D CNN to segment tumor subregions into voxel grids from MRI volumes, then generated controllable 3D meshes with NiBabel and scikit-image",
      "Integrated a Gemini-powered decision-support chatbot constrained to pre-computed tumor metrics to help clinicians flag concerning patterns",
    ],
  },
  {
    type: "work",
    title: "Android Software Intern",
    company: "Adapt Media",
    location: "Toronto, Ontario",
    period: "Sept 2025 - Dec 2025",
    description: "Developed a secure child–parent communication app on top of the open-source Jami platform, enabling offline pairing and encrypted video calls.",
    achievements: [
     "Implemented QR-based device pairing protocol over UDP with ACK/NACK/CONFIRM flow",
      "Integrated EC key-pair generation and HKDF-derived confirmation codes for mutual authentication",
      "Refactored Kotlin coroutines and RxJava streams for stable real-time video and audio synchronization",
      "Reduced pairing latency from 15 seconds to 5 seconds"
    ],
  },
  {
    type: "work",
    title: "Machine Learning Intern",
    company: "Government of Canada",
    location: "Ottawa, ON",
    period: "Apr 2025 - Aug 2025",
    description: "Developed a machine learning pipeline to forecast electricity demand using historical weather and consumption data for the Government of Canada.",
    achievements: [
      "Built automated ETL pipeline to clean and merge multi-source weather and load datasets",
      "Engineered time-series features (temperature, humidity, hour-of-day, weekday trends) for forecasting models",
      "Trained and evaluated regression models in scikit-learn to predict short-term energy demand",
      "Delivered insights to support energy grid optimization and policy planning",
    ]
  },
  {
    type: "work",
    title: "Engineering Intern",
    company: "Government of Canada",
    location: "Ottawa, ON",
    period: "Jan 2025 - Apr 2025",
    description: "Analyzed power systems and emissions data to evaluate the impact of government policies on national carbon output.",
    achievements: [
      "Processed and visualized large-scale electricity generation datasets using Python and pandas",
      "Assessed emissions intensity across provinces and generation types (hydro, gas, wind, coal)",
      "Built reproducible data workflows for trend and policy impact analysis",
      "Presented findings to support decarbonization to 200+ government officials",
    ]
  },
  {
    type: "education",
    title: "Systems Design Engineering",
    company: "University of Waterloo",
    location: "Waterloo, ON",
    period: "Sep 2024 - Present",
    description: "Focused on distributed systems, software architecture, and data engineering. Active in hackathons and extracurricular activities.",
    achievements: [
      "3.9 GPA",
      "Varsity Ultimate Frisbee",
      "Relevant Coursework: C++ Fundamentals and OOP, Data Structures and Algorithms, Calculus I & II"
    ],
  },
  {
    type: "competition",
    title: "NCF Envirothon World Finalist",
    location: "Sackville, NB",
    period: "July 2023",
    description: "Competed in the NCF Envirothon, an environmental science challenge focused on ecosystems, forestry, and sustainable resource management.",
    achievements: [
      "Placed 3rd internationally out of 15,000+ competitors in the NCF Envirothon, representing Canada in environmental problem-solving and sustainability planning.",
      "Collaborated in a multidisciplinary team to analyze real-world environmental challenges and present sustainable policy and engineering solutions",
    ],
  },
  {
    type: "competition",
    title: "Top Scorer, Waterloo Hypatia Mathematics Contest",
    period: "April 2023",
    description: "Participated in the University of Waterloo’s Hypatia Mathematics Contest, which tests creative problem-solving and logical reasoning.",
    achievements: [
      "Placed 1st in the Hypatia Mathematics Contest, ranking at the top among 21000+ high school participants internationally.",
      "Demonstrated advanced mathematical reasoning and abstraction skills through complex algebraic and combinatorial problems."
    ]
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="px-6 bg-[#0e1a14]" style={{paddingTop: "0rem", paddingBottom: "2rem" }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-[#89a48c] mb-2">Experience</h2>
          <div className="h-px max-w-24 bg-[#89a48c]/30"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-[#89a48c]/20"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-20"
              >
                {/* Icon */}
                <div className="absolute left-0 w-16 h-16 rounded-xl bg-[#1b2b22] border border-[#89a48c]/30 flex items-center justify-center">
                  {exp.type === "work" ? (
                      <Briefcase className="w-7 h-7 text-[#89a48c]" />
                    ) : exp.type === "education" ? (
                      <GraduationCap className="w-7 h-7 text-[#89a48c]" />
                    ) : (
                      <Trophy className="w-7 h-7 text-[#89a48c]" />
                    )}

                </div>

                {/* Content */}
                <div className="bg-gradient-to-br from-[#1b2b22] to-[#1b2b22]/60 border border-[#89a48c]/20 rounded-xl p-6 hover:border-[#89a48c]/40 transition-all duration-300">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-[#89a48c]/10 border border-[#89a48c]/20 rounded-full text-[#89a48c] mb-3">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-[#e8e3d1] mb-1">{exp.title}</h3>
                  <p className="text-[#89a48c] mb-1">{exp.company}</p>
                  <p className="text-[#e8e3d1]/60 mb-4">{exp.location}</p>

                  <p className="text-[#e8e3d1]/80 mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-[#e8e3d1]/70"
                      >
                        <span className="text-[#89a48c] mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
