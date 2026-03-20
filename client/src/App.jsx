import { Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";

import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import { SkeletonHero } from "./components/ui/Skeleton.jsx";
import ScrollToTop from "./components/ui/ScrollToTop.jsx";
import PageTransition from "./components/ui/PageTransition.jsx";
import SEO from "./components/ui/SEO.jsx";
import ErrorBoundary from "./components/ui/ErrorBoundary.jsx";
import Analytics from "./components/ui/Analytics.jsx";
import StructuredData from "./components/ui/StructuredData.jsx";
import CookieConsent from "./components/ui/CookieConsent.jsx";

/* Lazy load pages for better performance */
const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Process = lazy(() => import("./pages/Process.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.jsx"));
const TermsOfService = lazy(() => import("./pages/TermsOfService.jsx"));

/* Work Section */
const WorkLayout = lazy(() => import("./pages/Work/WorkLayout.jsx"));
const WorkIndex = lazy(() => import("./pages/Work/WorkIndex.jsx"));
const BrandDesign = lazy(() => import("./pages/Work/BrandDesign.jsx"));
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
    <ErrorBoundary>
      <Analytics />
      <StructuredData />
      <SEO />
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <div className="site-shell">
        <ScrollToTop />
        <Navbar />

        <Suspense fallback={<PageLoader />}>
          <PageTransition>
            <main id="main-content" className="page-main" tabIndex="-1">
              <Routes>
                {/* Home */}
                <Route path="/" element={<Home />} />

                {/* Work — category listing pages */}
                <Route path="/work" element={<WorkLayout />}>
                  <Route index element={<WorkIndex />} />
                  <Route path="brand-systems" element={<BrandDesign />} />
                  <Route path="ui-ux-web-dev" element={<WebDesign />} />
                </Route>

                {/* Case Study — standalone */}
                <Route path="/work/:category/:slug" element={<CaseStudy />} />

                {/* Standalone Pages */}
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/process" element={<Process />} />
                <Route path="/contact" element={<Contact />} />

                {/* Legal Pages */}
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </PageTransition>
        </Suspense>
      </div>

      <Footer />
      <CookieConsent />
    </ErrorBoundary>
  );
}