import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";

import Header from "./sections/header/Header";
import Home from "./sections/home/Home";
import About from "./sections/about/About";
import Project from "./sections/projects/Project";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import Experience from "./sections/experience/Experience";
import Contribution from "./sections/contribution/Contribution";
import SmoothFollower from "./components/smoothFollower/SmoothFollower";

import {
  trackEvent,
  trackScrollDepth,
  trackTimeOnPage,
  trackSectionView,
} from "./utils/analytics";

function App() {
  useEffect(() => {
    trackEvent("portfolio_page_viewed");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", trackScrollDepth);

    return () => {
      window.removeEventListener("scroll", trackScrollDepth);
    };
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      trackTimeOnPage();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const viewedSections = new Set();

    const observerOptions = {
      threshold: 0.5,
      rootMargin: "0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;

          if (sectionId && !viewedSections.has(sectionId)) {
            trackSectionView(sectionId);
            viewedSections.add(sectionId);
          }
        }
      });
    };
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <>
      <SmoothFollower />

      <div className="portfolio-container">
        <Header />

        <main className="portfolio-main">
          <Home />
          <About />
          <Experience />
          <Contribution />
          <Project />
          <Contact />
          <Footer />
        </main>
      </div>

      <Analytics
        beforeSend={(event) => {
          if (
            typeof window !== "undefined" &&
            localStorage.getItem("ignore-analytics") === "true"
          ) {
            return null;
          }
          return event;
        }}
      />
    </>
  );
}

export default App;
