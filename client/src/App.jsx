import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import { SkeletonHero } from "./components/ui/Skeleton.jsx";

/* Lazy load pages for better performance */
const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Process = lazy(() => import("./pages/Process.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

/* Work Section */
const WorkLayout = lazy(() => import("./pages/Work/WorkLayout.jsx"));
const WorkIndex = lazy(() => import("./pages/Work/WorkIndex.jsx"));
const BrandDesign = lazy(() => import("./pages/Work/BrandDesign.jsx"));
const GraphicDesign = lazy(() => import("./pages/Work/GraphicDesign.jsx"));
const WebDesign = lazy(() => import("./pages/Work/WebDesign.jsx"));
const CaseStudy = lazy(() => import("./pages/Work/CaseStudy.jsx"));

/* Loading fallback component */
function PageLoader() {
    return (
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <SkeletonHero />
        </div>
    );
}

export default function App() {
  return (
    <div className="site-shell">
      <Navbar />

      <Suspense fallback={<PageLoader />}>
        <main id="main-content">
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
        </main>
      </Suspense>

      <Footer />
    </div>
  );
}
