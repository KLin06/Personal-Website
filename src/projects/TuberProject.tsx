import { motion } from "motion/react";
import { Github, Mail, Linkedin } from "lucide-react";

export const TuberProject = () => {
  return (
    <section
      id="tuber"
      className="py-16 flex items-center justify-center overflow-hidden"
    >
      <div className="flex relative w-[80%] max-w-5xl mx-auto py-3 px-4 justify-center flex-col">
        <div>
          <a
            href="https://github.com/KLin06/Tuber"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1 right-4 w-12 h-12 rounded-lg bg-[#1b2b22] border border-[#89a48c]/20 flex items-center justify-center text-[#89a48c] hover:bg-[#89a48c] hover:text-[#0e1a14] transition-all duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <h1 className="text-[#e8e3d1] text-2xl font-bold mb-6">
            Tuber (FocusTube)
          </h1>
          <h2 className="text-[#89a48c] text-md mb-4">
            FocusTube is an iOS app that reimagines the YouTube feed around user-selected
            watch topics instead of engagement-optimized recommendations. It pulls videos
            through the YouTube Data API and classifies them against a user's chosen
            interests in real time, on-device, with no server and no user data leaving
            the phone.
          </h2>

          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "Swift", "SwiftUI", "Core ML", "NaturalLanguage", "YouTube Data API"
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

        <div className="grid grid-cols-2 gap-3 mx-auto my-4 w-full max-w-3xl">
          {[
            "/oauth.mp4",
            "/intent-filter.mp4",
            "/analytics.mp4",
            "/subscriptions.mp4",
          ].map((src, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-gradient-to-br from-[#1b2b22] to-[#89a48c]/20 border border-[#89a48c]/30 backdrop-blur-sm overflow-hidden aspect-[9/16]"
            >
              <video
                src={src}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                controls
              />
            </div>
          ))}
        </div>

        <div className="mt-6 text-[#e8e3d1]/80 leading-relaxed tracking-wide max-w-4xl mx-auto">
          <div>
            <h3 className="text-[#89a48c] text-lg font-semibold mb-2">Problem</h3>
            <p className="text-[#e8e3d1]/70 text-md">
              YouTube's default feed optimizes for watch time, not what a user actually
              wants to see. The app's own topic filter relied on naive keyword substring
              matching against video titles, so a video titled "Building a REST API with
              Node.js" would never surface under a "Technology" filter because the literal
              word "technology" never appears in the metadata. Users had no reliable way to
              curate a feed around genuine interests without the algorithm pulling them back
              toward clickbait and engagement bait.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-[#89a48c] text-lg font-semibold mb-2">Solution</h3>
            <ul className="list-disc text-md list-outside pl-8 space-y-4 text-md text-[#e8e3d1]/80">
              <li>
                <strong className="text-[#e8e3d1]">Hybrid Classification Pipeline:</strong> designed
                a 4-layer scorer that checks YouTube's own category ID, then Wikipedia-linked
                topic categories, then falls back to on-device semantic embedding similarity,
                then keyword matching, resolving each video's topic match with no server round trip.
              </li>
              <li>
                <strong className="text-[#e8e3d1]">On-Device NLP with Core ML:</strong> used
                Apple's NLEmbedding sentence embeddings to compute cosine similarity between
                video metadata and expanded topic phrases, catching topically relevant videos
                that share no exact keywords with the user's selected interests.
              </li>
              <li>
                <strong className="text-[#e8e3d1]">Iterative Model Tuning:</strong> improved
                classification F1 score from ~0.62 to ~0.82 by expanding single-word topics
                into concept-centroid phrases, enriching the embedding input with truncated
                video descriptions, and tightening the similarity threshold to cut false
                positives without losing recall.
              </li>
              <li>
                <strong className="text-[#e8e3d1]">Zero Extra API Quota Cost:</strong> extracted
                additional high-signal fields (tags, categoryId, topicCategories) already present
                in existing YouTube Data API responses, upgrading classification accuracy without
                any additional network calls.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};