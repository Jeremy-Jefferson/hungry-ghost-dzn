import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import Process from "./pages/Process.jsx";
import NotFound from "./pages/NotFound.jsx";

/* Work Section */
import WorkLayout from "./pages/Work/WorkLayout.jsx";
import WorkIndex from "./pages/Work/WorkIndex.jsx";
import BrandDesign from "./pages/Work/BrandDesign.jsx";
import GraphicDesign from "./pages/Work/GraphicDesign.jsx";
import WebDesign from "./pages/Work/WebDesign.jsx";
import CaseStudy from "./pages/Work/CaseStudy.jsx";

export default function App() {
  return (
    <div className="site-shell">
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Work — category listing pages */}
        <Route path="/work" element={<WorkLayout />}>
          <Route index element={<WorkIndex />} />
          <Route path="brand-design" element={<BrandDesign />} />
          <Route path="graphic-design" element={<GraphicDesign />} />
          <Route path="web-design" element={<WebDesign />} />
        </Route>

        {/* Case Study — standalone (no WorkLayout header) */}
        <Route path="/work/:category/:slug" element={<CaseStudy />} />

        {/* Standalone Pages */}
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}