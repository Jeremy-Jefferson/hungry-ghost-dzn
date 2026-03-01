import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Work Grid */}
      <Route path="/work" element={<Work />} />

      {/* Individual Case Study */}
      <Route path="/work/:slug" element={<CaseStudy />} />

      {/* About */}
      <Route path="/about" element={<About />} />

      {/* Contact */}
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}