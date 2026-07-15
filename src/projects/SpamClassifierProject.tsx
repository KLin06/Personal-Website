import { Github, Mail, Linkedin } from "lucide-react";

export const SpamClassiferProject = () => {
  return (
    <section
      id="spam-classifier"
      className="py-16 flex items-center justify-center overflow-hidden"
    >
      <div className="flex relative w-[80%] max-w-5xl mx-auto py-3 px-4 justify-center flex-col">
        <div>
          <a
            href="https://github.com/KLin06/Spam-Classifier"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1 right-4 w-12 h-12 rounded-lg bg-[#1b2b22] border border-[#89a48c]/20 flex items-center justify-center text-[#89a48c] hover:bg-[#89a48c] hover:text-[#0e1a14] transition-all duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <h1 className="text-[#e8e3d1] text-2xl font-bold mb-6">
            Spam Classifier Project
          </h1>
          <h2 className="text-[#89a48c] text-md mb-4">
           The Spam Classifier is a Python-based NLP project that automatically detects and filters spam messages using a trained machine learning pipeline. It processes raw text data from emails, transforming it into numerical feature vectors for classification using scikit-learn models.
          </h2>

          <div className="flex flex-wrap gap-3 mb-6">
            {[
             "Python", "Scikit-Learn", "Pandas", "Matplotlib", "nlp"
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

        <div className="rounded-2xl w-[85%] mx-auto my-4 backdrop-blur-sm flex justify-center overflow-hidden">
        <img
            src="/forest_accuracy.png"
            alt="Forest Accuracy Graph"
            className="rounded-2xl w-full h-auto"
            style={{
              transform: "scale(1.0)",
            }}
        />
        </div>


        <div className="mt-6 text-[#e8e3d1]/80 leading-relaxed tracking-wide max-w-4xl mx-auto">
          <div>
            <h3 className="text-[#89a48c] text-lg font-semibold mb-2">Problem</h3>
            <p className="text-[#e8e3d1]/70 text-md">
             With the exponential growth of digital communication, users are constantly bombarded by unwanted and malicious spam messages. Many filtering systems rely on outdated keyword matching, failing to adapt to new spam patterns or linguistic variations.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-[#89a48c] text-lg font-semibold mb-2">Solution</h3>
            <ul className="list-disc text-md list-outside pl-8 space-y-4 text-md text-[#e8e3d1]/80">
              <li>
            <strong className="text-[#e8e3d1]">Data Preprocessing Pipeline:</strong> tokenizes, cleans, and lemmatizes raw text while removing stopwords and punctuation for cleaner feature extraction.
            </li>
            <li>
            <strong className="text-[#e8e3d1]">TF-IDF Feature Engineering:</strong> converts text into weighted numerical vectors to emphasize informative words over common ones.
            </li>
            <li>
            <strong className="text-[#e8e3d1]">Model Training:</strong> uses scikit-learn’s Naive Bayes and Logistic Regression models to classify spam vs. ham with cross-validation for reliability.
            </li>
            <li>
            <strong className="text-[#e8e3d1]">Evaluation Metrics:</strong> precision, recall, F1-score, and confusion matrix visualization used to tune and assess performance.
            </li>

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
