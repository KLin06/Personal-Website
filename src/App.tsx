import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ProjectPage } from "./pages/ProjectPage";
import { HomePage } from "./pages/HomePage";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0e1a14] text-[#e8e3d1]">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </BrowserRouter>
      <Footer />
    </div>
  );
}
