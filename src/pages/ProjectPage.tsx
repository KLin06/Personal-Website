import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AutocompleteProject } from "../projects/AutocompleteProject";
import { SectionBoundary } from "../components/SectionBoundary";
import { ChatterboxProject } from "../projects/Chatterbox.project";
import { GHGProject } from "../projects/GHGProject";
import { FlavourFinderProject } from "../projects/FlavourFinderProject";
import { BadmintonGameProject } from "../projects/BadmintonGameProject";
import { SpamClassiferProject } from "../projects/SpamClassifierProject";

export function ProjectPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        const yOffset = -80; // change to however much space you want
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      } 
    } else {
      // optional: scroll to top if no hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return (
     <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <AutocompleteProject/>
        <SectionBoundary/>
        <ChatterboxProject/>
        <SectionBoundary/>
        <GHGProject/>
        <SectionBoundary/>
        <FlavourFinderProject/>
        <SectionBoundary/>
        <BadmintonGameProject/>
        <SectionBoundary/>
        <SpamClassiferProject/>
     </div>
  );
}
